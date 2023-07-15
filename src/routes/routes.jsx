import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import FavoritesPage from "../pages/favorites";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/auth" Component={Login}></Route>
        <Route path="/favorites" Component={FavoritesPage}></Route>
        <Route path="/*" Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export { RoutesApp };
