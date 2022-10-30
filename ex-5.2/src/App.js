import "./App.css";
import React, { useRef} from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";
import {  Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import DrawingCanvas from "./components/DrawingCanvas";
// setting custom styles
const useStyles = makeStyles({
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems:'center',
    marginTop:'50px'
  }
});

function App() {
  const classes = useStyles();
  // On submit function
  function handleClick() {

  }

  return (
    <div className={classes.btnContainer} >
     
        <DrawingCanvas>
          
        </DrawingCanvas>
    </div>
  );
}

export default App;
