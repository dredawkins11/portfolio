import { useRef, useEffect, useState } from 'react'

const useCanvas = draw => {
  
  const canvasRef = useRef(null)
  const [intervalValue, setIntervalValue] = useState<ReturnType<typeof setInterval> | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    
    const render = () => {
      
      draw(context)
      setInterval(render, 1000)
    }
    render()
    
    // return () => {
    //   clearInterval(intervalValue)
    // }
  }, [draw])
  
  return canvasRef
}

export default useCanvas