import React from "react";
import { hydrate } from "react-dom";
import Home from "./component/Home";

hydrate(<Home/>, document.querySelector("#root"))