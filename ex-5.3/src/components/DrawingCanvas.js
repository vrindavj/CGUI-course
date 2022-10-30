import "./DrawingCanvas.css";
import { useEffect, useState, useRef } from "react";
import { Button } from "@mui/material";

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  let angle = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const context = canvas.getContext("2d");
    context.lineWidth = 3;  
    context.translate(canvas.width/2,canvas.height/2);
    context.fillStyle='rgba(0,255,0,0.5)';
    context.fillRect(-50,-50,100,100);
    context.strokeRect(-50,-50,100,100); 
    contextRef.current = context;
  }, []);

  

 

 

  // function to rotate the canvas 
  const handleRotate = () => {
    var canvas  = document.getElementById("canvas");
    var context = canvas.getContext('2d');
     
     // clear the drawing surface
     context.setTransform(1, 0, 0, 1, 0, 0);
     context.clearRect(0, 0, canvas.width, canvas.height);
     // you can also stroke a rect, the operations need to happen in order 
     angle = angle> 360 ? 0 : angle+15;
     context.save();                
     context.lineWidth = 3;  
     context.translate(canvas.width/2,canvas.height/2);
     context.rotate(angle*(Math.PI/180));
     // set the fill style
     context.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
    //  context.fillStyle='rgba(0,255,0,0.5)';
    context.fillRect(-50,-50,100,100);
    context.strokeRect(-50,-50,100,100);               
     context.restore();
  
  };

  return (
    <div>
      <canvas
      id='canvas'
        className="canvas-container"
        ref={canvasRef}
      ></canvas>
      <div className="btn-container">
        <Button
          onClick={() => handleRotate()}
          variant="contained"
          color="primary"
        >
          Rotate object
        </Button>
      </div>
    </div>
  );
};

export default DrawingCanvas;
