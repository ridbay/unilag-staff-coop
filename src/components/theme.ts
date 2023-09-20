
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#03a9f4", // Customize your primary color
    },
    // Add more custom colors if needed
  },
  typography: {
    fontFamily: ["Mooli", "cursive"].join(","),
  },
});

export default theme;