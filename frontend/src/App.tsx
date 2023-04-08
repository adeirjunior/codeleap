import { RouterProvider } from "react-router-dom";
import router from './router';
import Container from "./components/layout/Container";
import React from "react";

function App() {

  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
