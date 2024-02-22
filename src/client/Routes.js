import React from "react";
import * as Home from "./pages/HomePage";
import * as User from "./pages/UserPage";

export default [
  {
    path: "/",
    component: Home.default,
    exact: true,
    fetchInitialData: Home.fetchInitialData
  },
  {
    path: "/users",
    component: User.default,
    fetchInitialData: User.fetchInitialData
  },
];
