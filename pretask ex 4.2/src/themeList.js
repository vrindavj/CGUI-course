export const theme1 = {
    palette: {
      primary: {
        main: "#BA1005"
      },
      secondary: {
        main: "#fe5f55"
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
            root: {
                "&:hover": {
                    backgroundColor: "#fe5f55",
                  }
            }
          },
        defaultProps: {
         size: "small",
          sx: {
            color: "#ffffff"
          }
        }
      },
      MuiPaper: {
        defaultProps: {
          elevation: 10
        },
        styleOverrides: {
          root: {
            background: "#FAECEB"
          }
        }
      }
    }
  };

export const theme2 = {
  palette: {
    primary: {
      main: "#1769aa",
    },
    secondary: {
      main: "#00b0ff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#9FD2FA",
          },
        },
      },
      defaultProps: {
        disableRipple: true,
        size: "large",
        sx: {
          borderRadius: "5px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#F2F8FD",
        },
      },
      defaultProps: {
        elevation: 20,
      },
    },
  },
};
