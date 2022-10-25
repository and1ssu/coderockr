import { Routes, Route } from "react-router-dom";

import Card from "../components/Card";
import Home from "../pages/Home";

export default function RoutesRockr(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}
