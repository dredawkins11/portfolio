import { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";

import classes from "../styles/Background.module.scss";

const Background = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    // const [containerBounds, setContainerBounds] = useState<DOMRect | null>(null)

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    function handleResize() {
        if (containerRef.current == null) return;
        setWidth(containerRef.current.offsetWidth);
        setHeight(containerRef.current.offsetHeight);
    }

    return (
        <div
            className={classes.container}
            ref={containerRef}
            onResize={handleResize}
        >
            <Canvas
                width={width}
                height={height}
                containerBounds={containerRef.current?.getBoundingClientRect()}
            />
        </div>
    );
};

export default Background;
