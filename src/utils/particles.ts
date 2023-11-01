const SIZE = 1,
    SPACING = 12,
    DAMPING = 0.9,
    SCALE_MAX = 5,
    SCALE_FACTOR = 3,
    SCALE_MIN = 0.5;

type Particle = {
    vx: number;
    vy: number;
    x: number;
    y: number;
    scale: number;
};

type Mouse = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    down: boolean;
};

type ParticleSystem = {
    particleList: Particle[];
    currentRipple: number[][];
    previousRipple: number[][];
    mouseLastUpdate: number;
    wavePosition: number;
    width: number;
    height: number;
    rows: number;
    columns: number;
    numberOfParticles: number;
    mouse: Mouse;
    mouseDelta: number;
    init: (width: number, height: number) => void;
    step: () => void;
    createParticles: () => void;
    setGridSize: () => void;
    startRipple: () => void;
    calculateRipple: () => void;
    onWave: (particle: Particle) => boolean;
    handleMouseDown: () => void;
    handleMouseUp: () => void;
    handleMove: (x: number, y: number, bounds: DOMRect) => void;
};

const particleSystem: ParticleSystem = {
    particleList: [],
    currentRipple: [],
    previousRipple: [],
    wavePosition: 0,
    mouseLastUpdate: performance.now(),
    mouse: { x: 0, y: 0, vx: 10, vy: 10, down: false },
    mouseDelta: 0,
    width: 0,
    height: 0,
    rows: 0,
    columns: 0,
    numberOfParticles: 0,
    init(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.setGridSize();
        this.createParticles();
        this.startRipple();
    },
    step() {
        this.calculateRipple();
        this.wavePosition += 0.5;
        const maxPosition = Math.sqrt(
            Math.pow(this.rows, 2) + Math.pow(this.columns, 2)
        );
        if (this.wavePosition > maxPosition)
            this.wavePosition = -(maxPosition * 0.1);

        const x = this.mouse.vx - 1;
        const y = this.mouse.vy - 1;
        if (this.currentRipple[x] != undefined) {
            if (this.mouse.down) {
                this.currentRipple[x][y] = 3;
            }
        }

        // RIPPLE
        this.particleList.forEach((particle) => {
            // Check if the particle is within the wave line, if so increase ripple value
            if (this.onWave(particle)) {
                const x = particle.vx;
                const y = particle.vy;
                this.currentRipple[x][y] +=
                    0.1 * ((maxPosition - this.wavePosition) / maxPosition);
            }

            // Set scale based on the ripple value at that coord
            let rippleValue = this.currentRipple[particle.vx][particle.vy];
            rippleValue *= rippleValue < 0 ? -1 : 1;
            if (rippleValue != 0) {
                const rippleScale = rippleValue * SCALE_MAX;
                const adjustedScale = rippleScale * SCALE_FACTOR;
                particle.scale = clamp(adjustedScale, SCALE_MIN, SCALE_MAX);
            } else {
                particle.scale =
                    // mouseScale < SCALE_MIN ? SCALE_MIN : mouseScale;
                    particle.scale = SCALE_MIN;
            }
        });
    },
    setGridSize() {
        const nodeSize = SPACING + SIZE * 2;

        this.rows = Math.round(this.height / nodeSize);
        this.columns = Math.round(this.width / nodeSize);
    },
    createParticles() {
        this.numberOfParticles = this.rows * this.columns;
        if (this.particleList.length == this.numberOfParticles) return;
        this.particleList = [];
        for (let i = 0; i < this.numberOfParticles; i++) {
            const currentParticle: Particle = {
                vx: 0,
                vy: 0,
                x: 0,
                y: 0,
                scale: SCALE_MIN,
            };
            const particleTotalSize = SPACING + SIZE * 2;
            const x =
                particleTotalSize * (i % this.columns) + particleTotalSize / 2;
            const y =
                particleTotalSize * Math.floor(i / this.columns) +
                particleTotalSize / 2;
            // currentParticle.scale = SCALE_MIN + Math.random() * SCALE_MAX;
            // currentParticle.shrinking = Math.random() < 0.5 ? true : false;

            currentParticle.x = x;
            currentParticle.y = y;

            currentParticle.vx = i % this.columns;
            currentParticle.vy = Math.floor(i / this.columns);

            this.particleList[i] = currentParticle;
        }
    },
    startRipple() {
        this.currentRipple = new Array(this.columns)
            .fill(0)
            .map(() => new Array(this.rows).fill(0));
        this.previousRipple = new Array(this.columns)
            .fill(0)
            .map(() => new Array(this.rows).fill(0));
    },
    calculateRipple() {
        for (let x = 1; x < this.columns - 1; x++) {
            for (let y = 1; y < this.rows - 1; y++) {
                this.currentRipple[x][y] =
                    (this.previousRipple[x - 1][y] +
                        this.previousRipple[x + 1][y] +
                        this.previousRipple[x][y - 1] +
                        this.previousRipple[x][y + 1] +
                        this.previousRipple[x + 1][y + 1] +
                        this.previousRipple[x - 1][y + 1] +
                        this.previousRipple[x + 1][y - 1] +
                        this.previousRipple[x - 1][y - 1]) /
                        4 -
                    this.currentRipple[x][y];
                if (this.currentRipple[x][y] > -0.05)
                    this.currentRipple[x][y] = 0;
                this.currentRipple[x][y] =
                    Math.round(this.currentRipple[x][y] * DAMPING * 100) / 100;
            }
        }
        const temp = this.previousRipple;
        this.previousRipple = this.currentRipple;
        this.currentRipple = temp;
    },
    onWave(particle: Particle) {
        // x=-ay^{2}+by+d
        // console.log(particle.vy, Math.round(3*(particle.vx) - this.wavePosition));
        const ANGLE = 45 * (Math.PI / 180);
        const X = Math.round(
            particle.vx * Math.cos(ANGLE) - particle.vy * Math.sin(ANGLE)
        );
        const Y = Math.round(
            particle.vx * Math.sin(ANGLE) + particle.vy * Math.cos(ANGLE)
        );
        // console.log(X);

        const VERTEX = 0; /*-this.columns / 2*/
        const SQUEEZE = 0.005;
        for (let i = 0; i < 2; i++) {
            if (
                Y ==
                -Math.round(
                    SQUEEZE * Math.pow(X + VERTEX, 2) - this.wavePosition + i
                )
            )
                return true;
        }
        return false;

        // return particle.vy == Math.ceil(3*(particle.vx) - (this.wavePosition * 3))
    },
    handleMouseDown() {
        this.mouse.down = true;
    },
    handleMouseUp() {
        this.mouse.down = false;
    },
    handleMove(inputX: number, inputY: number, bounds: DOMRect) {
        this.mouseLastUpdate = performance.now();
        this.mouse.x = inputX - bounds.left;
        this.mouse.y = inputY - bounds.top;
        const columnHeight = this.width / this.columns;
        const rowHeight = this.height / this.rows;
        this.mouse.vx = clamp(
            this.mouse.x / columnHeight,
            0,
            this.columns,
            true
        );
        this.mouse.vy = clamp(this.mouse.y / rowHeight, 0, this.rows, true);
    },
    handleTouch() {
        if (this.currentRipple[this.mouse.vx] != undefined) {
            this.currentRipple[this.mouse.vx][this.mouse.vy] = 3;
        }
    },
};

// setInterval(() => {
//     const x = Math.floor(Math.random() * (particleSystem.columns - 2)) + 1;
//     const y = Math.floor(Math.random() * (particleSystem.rows - 2)) + 1;
//     particleSystem.currentRipple[x][y] = (Math.random() * 5) + 5;
// }, 500);

export default particleSystem;

const clamp = function (
    x: number,
    min: number,
    max: number,
    integers?: boolean
) {
    if (integers) {
        return Math.max(Math.min(Math.ceil(Math.max(x, min)), max));
    }
    return Math.min(Math.max(x, min), max);
};
