import { createBrowserRouter } from "react-router-dom";
import MainScreen from "./pages/MainScreen";
import React from "react";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainScreen />,
    }
])


export default router