import "./DrawingCanvas.css";
import { useEffect, useState, useRef } from "react";
import { Button } from "@mui/material";

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [allowDrawing, setAllowDrawing] = useState(false);

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);
  const handleSwitch = () => {
    console.log("HANDLE SWITCvh");
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    if (allowDrawing) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
      setIsDrawing(true);
      nativeEvent.preventDefault();
    }
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    if (allowDrawing) {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
      nativeEvent.preventDefault();
    }
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  const handleStart = () => {
    setAllowDrawing(true);
    //
  };
  const handleStop = () => {
    setAllowDrawing(false);
    //   onMouseUp={stopDrawing}
  };

  // function to rotate the canvas 
  const handletransform = () => {
    var canvas  = document.getElementById("canvas");
        var context = canvas.getContext('2d');
    // save the unrotated context of the canvas so that it can be restored later
    context.save();
    // move to the center of the canvas
    context.translate(canvas.width/2,canvas.height/2);
    // rotate around that point, converting our 
    // angle from degrees to radians 
    context.rotate(89*Math.PI/180);
    // and restore the co-ords to how they were when we began
    context.restore();
  
  };

  return (
    <div>
      <canvas
      id='canvas'
        className="canvas-container"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
      ></canvas>
      <div className="btn-container">
        <Button
          onClick={() => handleStart()}
          variant="contained"
          color="primary"
        >
          Start Drawing
        </Button>
        <Button onClick={() => handleStop()} variant="outlined" color="primary">
          Stop Drawing
        </Button>
        {/* <Button onClick={() => handletransform()} variant="outlined" color="primary">
          Transform Drawing
        </Button> */}
      </div>
    </div>
  );
};

export default DrawingCanvas;
