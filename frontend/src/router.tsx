import { createBrowserRouter } from "react-router-dom";
import MainScreen from "./pages/MainScreen";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainScreen />,
    }
])


export default router