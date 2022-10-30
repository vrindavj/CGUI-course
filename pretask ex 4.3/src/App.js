import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { SliderData } from "./Components/SliderData";
import ImageSlider from "./Components/ImageSlider";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

// setting custom styles
const useStyles = makeStyles({
  divField: {
    display: "flex",
    justifyContent: "center",
  },
  paperStyles: {
    minHeight: 300,
    paddingTop: 20,
    paddingBottom: 40,

  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pet Gallery
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="md" sx={{ marginTop: 10 }}>
        <Paper className={classes.paperStyles}>
          <ImageSlider slides={SliderData} />
        </Paper>
      </Container>
    </>
  );
}

export default App;
