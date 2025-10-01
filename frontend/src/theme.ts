import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4e342e",
      light: "#7d5a50",
      dark: "#3e2723",
    },
    secondary: {
      main: "#c47c4a",
      light: "#e0a674",
      dark: "#9c5e2e",
    },
    background: {
      default: "#f5f5f0",
      paper: "#efebe9",
    },
    text: {
      primary: "#212121",
      secondary: "#5d4037",
    },
  },
  typography: {
    fontFamily: '"Georgia", "Times New Roman", serif',
    h1: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#3e2723",
        },
      },
    },
  },
});

export default theme;
