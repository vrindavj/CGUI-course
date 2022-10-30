import React, { useState } from "react";
import { SliderData } from "./SliderData";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { makeStyles, Typography } from "@material-ui/core";

//custom styles
const useStyles = makeStyles({
  sectionStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typographyStyles: {
    textAlign: "center",
  },
});


const ImageSlider = ({ slides }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const [inputKey, setInputKey] = useState(0);
  const length = slides.length;

//function to handle key down event
  function handleAnswerChange(e) {
    console.log(e.key);
    setInputKey(e.key);
    if (inputKey === "ArrowRight") {
      setCurrent(current === length - 1 ? 0 : current + 1);
    } else if (inputKey === "ArrowLeft") {
      setCurrent(current === 0 ? length - 1 : current - 1);
    } else if (inputKey === "Backspace") {
      e.target.value = "";
    } else {
      alert("press left right arrow");
    }
  }
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={classes.sectionStyles}>
      <FormControl sx={{ m: 1,mb:3, width: 300 }}>
        <TextField
          onKeyUp={handleAnswerChange}
          id="outlined-basic"
          label="Press left/right Arrow key"
          variant="outlined"
          required
        />
      </FormControl>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <Typography
                  className={classes.typographyStyles}
                  variant="h6"
                  color="primary"
                  component="div"
                >
                  {slide.name}
                </Typography>
                <img
                  width="450"
                  height="500"
                  src={slide.image}
                  alt="dog pictures"
                  className="image"
                />
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
