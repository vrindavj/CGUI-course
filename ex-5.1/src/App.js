import "./App.css";
import React, { useRef} from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";
import {  Container } from "@mui/material";
import Typography from "@mui/material/Typography";

// setting custom styles
const useStyles = makeStyles({
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems:'center',

  },
  cardStyles: {
    minHeight: 300,
    paddingTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems:'center',
    backgroundColor:'#bde0fe' ,
    boxShadow: '0 0 20px #d9d9d9',
    color:'#023e8a'
    
  },
});

function App() {
  const textContent = useRef(0);
  const cardRef = useRef(0);
  const classes = useStyles();
  const [msg, setMsg] = React.useState("I am in blue");

  // On submit function
  function handleClick() {
    if(msg === 'I am in blue'){
    setMsg('I am in green')
    textContent.current.style.color = "#40916c";
    cardRef.current.style = 'background-color : #d8f3dc !important'
    }
    else {
      setMsg('I am in blue')
      textContent.current.style.color = "#023e8a";
      cardRef.current.style = 'background-color : #bde0fe !important'
    }
  }

  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: 10 }}>
        <div  ref={cardRef} className={classes.cardStyles}>
          <Typography  variant="h4" component="h3" ref={textContent}>
             {msg}
          </Typography>
        </div>
        <div  className={classes.btnContainer}>
          <Button  sx={{ marginTop: 10 }}  onClick={handleClick} variant="contained" type="submit">
            Change Content
          </Button>
        </div>
      </Container>
    </>
  );
}

export default App;
