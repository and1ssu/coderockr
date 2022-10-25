// import Bg from "./assets/background-img.svg";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import RoutesRockr from "./routes/routes";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <NavBar />
      <RoutesRockr />
    </BrowserRouter>
  );
}

export default App;
