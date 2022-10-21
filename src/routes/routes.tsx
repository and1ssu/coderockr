import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

export default function RoutesRockr(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
