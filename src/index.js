import React from "react";
import ReactDOM from "react-dom/client";
import Xys, { About, About2 } from "./Myabout";
import Mycontact from "./Mycontact";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Abc from "./Mytspage.ts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>sdfhsdjkfhj</h1>
    <div>sdjfhjsdhf sdfsdfsdfds</div>
    <About></About>
    <Xys></Xys>
    {/* <Abc></Abc> */}
    <About2></About2>
    <Mycontact />
    <Abc />
  </React.StrictMode>
);
