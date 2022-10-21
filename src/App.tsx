// import Bg from "./assets/background-img.svg";
import { BrowserRouter } from "react-router-dom";

import RoutesRockr from "./routes/routes";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <RoutesRockr />
    </BrowserRouter>
  );
}

export default App;
