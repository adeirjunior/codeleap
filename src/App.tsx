import { RouterProvider } from "react-router-dom";
import router from './router';
import Container from "./components/layout/Container";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {

  return (
    <Provider store={store}>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  )
}

export default App
