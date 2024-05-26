// src/routes/routes.js
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Auth from "../pages/auth/Auth";
import PrivateRouter from "../components/PrivateRouter";

const routes = [
  {
    path: "/",
    element: React.createElement(Home),
    auth: true,
  },
  {
    path: "/auth",
    element: React.createElement(Auth),
    children: [
      {
        path: "login",
        element: React.createElement(Login),
      },
    ],
  },
];

const authCheck = (routes) =>
  routes.map((route) => {
    const updatedRoute = { ...route };

    if (updatedRoute.auth) {
      updatedRoute.element = React.createElement(
        PrivateRouter,
        null,
        updatedRoute.element
      );
    }

    if (updatedRoute.children) {
      updatedRoute.children = authCheck(updatedRoute.children);
    }

    return updatedRoute;
  });

export default authCheck(routes);
