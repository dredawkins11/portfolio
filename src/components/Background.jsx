import { useEffect, useRef } from "react";
import Canvas from "./Canvas";

const Background = () => {

    const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#fff'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }

    return (
        <div id="container">
            <Canvas draw={draw} options={{width: "10px"}}/>
        </div>
    );
};

export default Background;
