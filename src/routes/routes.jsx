import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export { RoutesApp };