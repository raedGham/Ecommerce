import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Cartscreen from "./screens/Cartscreen";
import Homescreen from "./screens/Homescreen";
import ProductDesc from "./screens/ProductDesc";
import Register from "./screens/Register";
import Login from "./screens/Login";


function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/product/:id" exact component={ProductDesc} />
        <Route path="/cart" component={Cartscreen} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>

    </div>

  );
}

export default App;
