import { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import { Box } from "@mui/joy";

const Background = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

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
        <Box
            ref={containerRef}
            onResize={handleResize}
            sx={{
                position: "fixed",
                width: "110vw",
                height: "110vh",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
            }}
        >
            <Canvas
                width={width}
                height={height}
                containerBounds={containerRef.current?.getBoundingClientRect()}
            />
        </Box>
    );
};

export default Background;
