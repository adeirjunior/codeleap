import React, { useState } from "react";
import Moon from "../svgs/Moon";
import Sun from "../svgs/Sun";

function ThemeButton() {
  const [theme, setTheme] = useState(false);
  return (
    <button
      title="Theme Button"
      type="button"
      onClick={() => (theme == true ? setTheme(false) : setTheme(true))}
      className="p-2 hover:scale-110 transition-all ease-in"
    >
      {theme === true ? (
        <Moon className="w-6 h-6 stroke-white stroke-2" />
      ) : (
        <Sun className="w-6 h-6 stroke-white stroke-2" />
      )}
    </button>
  );
}

export default ThemeButton;
