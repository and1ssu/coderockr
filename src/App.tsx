// import Bg from "./assets/background-img.svg";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import { DataProvider } from "./context/DataProvider";
import RoutesRockr from "./routes/routes";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        iframe {
          z-index: -1 !important;
         }
      `,
    },
  },

  typography: {
    fontFamily: ["Rubik"].join(","),
  },
});
function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <DataProvider>
          <RoutesRockr />
        </DataProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
