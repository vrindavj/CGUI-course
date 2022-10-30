import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#06565b"
    },
    secondary: {
      main: "#66a4ac"
    }
  },
  shape: {
    borderRadius: 4
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1
        }
      },
      styleOverrides: {
        root: {
            "&:hover": {
                backgroundColor: "#c2dde4",
              }
        }
      }
    },
  }
});

export default baseTheme;
