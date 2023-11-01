import { useCallback, useEffect, useRef } from "react";
import Particles from "../utils/particles";
import { useTheme } from "@mui/joy";


interface CanvasProps {
    width: number;
    height: number;
    containerBounds: DOMRect | undefined;
}

const Canvas = ({ width, height, containerBounds }: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const theme = useTheme()
    const draw = useCallback(
        (ctx: CanvasRenderingContext2D) => {
            const particles = Particles.particleList;

            ctx.clearRect(0, 0, width, height);
            particles.forEach((particle) => {
                ctx.beginPath();
                ctx.arc(
                    particle.x,
                    particle.y,
                    1 * particle.scale,
                    0,
                    2 * Math.PI
                );
                ctx.fillStyle = theme.palette.neutral[100];
                ctx.fill();
            });

            Particles.step();
        },
        [width, height, theme.palette.neutral]
    );

    const handleMouseDown = () => {
        if (containerBounds != undefined) Particles.handleMouseDown();
    };

    const handleMouseUp = () => {
        if (containerBounds != undefined) Particles.handleMouseUp();
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (containerBounds != undefined)
            Particles.handleMove(e.clientX, e.clientY, containerBounds);
    };

    const handleTouch = (e: TouchEvent) => {
        if (containerBounds != undefined) {
            if (e.changedTouches.length > 0) {
                Particles.handleMove(
                    e.changedTouches[0].clientX,
                    e.changedTouches[0].clientY,
                    containerBounds
                );
                Particles.handleTouch();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("mousedown", () => handleMouseDown());
        window.addEventListener("mouseup", () => handleMouseUp());
        window.addEventListener("mousemove", (e) => handleMouseMove(e));
        window.addEventListener("touchend", (e) => handleTouch(e));

        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d", { willReadFrequently: true });

        if (width == 0) return;
        Particles.init(width, height);

        const render = () => {
            if (context == null) return;
            draw(context);
        };
        const interval = setInterval(render, 30);
        render();
        return () => clearInterval(interval);
    });

    return (
        <canvas
            ref={canvasRef}
            width={`${width}px`}
            height={`${height}px`}
            // onMouseDown={handleMouseDown}
            // onMouseUp={handleMouseUp}
            // onMouseMove={handleMove}
        />
    );
};

export default Canvas;
