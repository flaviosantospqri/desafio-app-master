import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Register}></Route>
        <Route path="/*" Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export { RoutesApp };
