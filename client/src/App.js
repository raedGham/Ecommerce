import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import ProductDesc from "./screens/ProductDesc";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/product/:id" exact component={ProductDesc} />
      </BrowserRouter>

    </div>

  );
}

export default App;
