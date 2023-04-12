import { createBrowserRouter } from "react-router-dom";
import MainScreen from "./pages/MainScreen";
import React from "react";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainScreen />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
