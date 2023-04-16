import { RouterProvider } from "react-router-dom";
import router from "./router";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const { theme } = useSelector((state: RootState) => state.theme)

  return (
    <div className={theme === 'ligth' ? '' : 'dark'}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
