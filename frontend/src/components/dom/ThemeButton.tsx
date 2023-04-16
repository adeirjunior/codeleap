import React from "react";
import Moon from "../svgs/Moon";
import Sun from "../svgs/Sun";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../actions";
import { RootState, AppDispatch } from "../../redux/store";

function ThemeButton() {
  const dispatch: AppDispatch = useDispatch()
  const { theme } = useSelector((state: RootState) => state.theme)

  const clickHandler = () => {
    dispatch(setTheme(theme === 'ligth' ? 'dark' : 'ligth'))
  }

  return (
    <button
      title="Theme Button"
      type="button"
      onClick={clickHandler}
      className="p-2 hover:scale-110 transition-all ease-in"
    >
      {theme === 'dark' ? (
        <Moon className="w-6 h-6 stroke-white stroke-2" />
      ) : (
        <Sun className="w-6 h-6 stroke-white stroke-2" />
      )}
    </button>
  );
}

export default ThemeButton;
