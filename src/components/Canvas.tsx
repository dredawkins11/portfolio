import { useCallback, useEffect, useRef } from "react";
import Particles from "../utils/particles";

import classes from "../styles/Canvas.module.scss"
import { useTheme } from "@emotion/react";

interface CanvasProps {
    width: number;
    height: number;
    containerBounds: DOMRect | undefined;
}

const SIZE = 1;

const Canvas = ({ width, height, containerBounds }: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const theme = useTheme()
    console.log(theme.palette.text.primary);
    

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D) => {
            const particles = Particles.particleList;

            ctx.clearRect(0, 0, width, height);
            particles.forEach((particle) => {
                ctx.beginPath();
                ctx.arc(
                    particle.x,
                    particle.y,
                    SIZE * particle.scale,
                    0,
                    2 * Math.PI
                );
                ctx.fillStyle = theme.palette.neutral[100];
                ctx.fill();
            });

            Particles.step();
        },
        [width, height]
    );

    const handleMouseDown = () => {
        if (containerBounds != undefined) Particles.handleMouseDown();
    };

    const handleMouseUp = () => {
        if (containerBounds != undefined) Particles.handleMouseUp();
    };

    const handleMove = (e: MouseEvent) => {
        if (containerBounds != undefined)
            Particles.handleMove(e.clientX, e.clientY, containerBounds);
    };

    useEffect(() => {
        window.addEventListener("mousedown", () => handleMouseDown())
        window.addEventListener("mouseup", () => handleMouseUp())
        window.addEventListener("mousemove", (e) => handleMove(e))

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
