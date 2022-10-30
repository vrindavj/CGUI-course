import "./App.css";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Message } from "./Message";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { theme1, theme2 } from "./themeList";
import baseTheme from "./styles";
import { deepmerge } from "@mui/utils";

// setting custom styles
const useStyles = makeStyles({
  divField: {
    display: "flex",
    justifyContent: "center",
  },
  paperStyles: {
    minHeight: 300,
    paddingTop: 20,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "end",
    marginTop: 20,
  },
});

const petTypes = [
  "Dog",
  "Cat",
  "Duck",
  "Parakeet",
  "Eagle",
  "Fish",
  "Iguana",
  "Hamster",
  "Mice",
  "Horse",
];

function App() {
  const classes = useStyles();
  const [petType, setPetType] = React.useState("");
  const [petName, setPetName] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [theme, setTheme] = useState(baseTheme);

  // function to show message
  function handleChange(e) {
    e.preventDefault();
    const newMsg = `Howdy!! ${petName}`;
    setMsg(newMsg);
  }

  // function to switch theme
  const handleSwitch = (whichTheme) => {
    const newTheme = deepmerge(theme, whichTheme);
    setTheme(createTheme(newTheme));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Pet Details
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Container maxWidth="md" sx={{ marginTop: 10 }}>
          <Paper className={classes.paperStyles} sx={{ paddingTop: 10 }}>
            <form autoComplete="off" onSubmit={handleChange}>
              <div className={classes.divField}>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <TextField
                    onChange={(e) => setPetName(e.target.value)}
                    id="outlined-basic"
                    label="Pet Name"
                    variant="outlined"
                    required
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">
                    Pet Type
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={petType}
                    label="Pet Type"
                    onChange={(e) => setPetType(e.target.value)}
                    required
                  >
                    {petTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className={classes.divField}>
                <Button variant="contained" type="submit">
                  Show Message
                </Button>
              </div>
              <div className={classes.divField}>
                <Message petObj={msg} pet></Message>
              </div>
            </form>
          </Paper>
          <Box className={classes.buttonContainer}>
            <Button
              onClick={() => handleSwitch(theme1)}
              variant="contained"
              color="primary"
            >
              Theme 1
            </Button>
            <Button onClick={() => handleSwitch(theme2)} variant="contained">
              Theme 2
            </Button>
            <Button
              onClick={() => setTheme(baseTheme)}
              variant="contained"
              color="primary"
            >
              Reset
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
