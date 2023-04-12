import React, { useEffect } from "react";
import ThemeButton from "./ThemeButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addUser } from "../../actions";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch: AppDispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(addUser({ name: "" }));
  };

  useEffect(() => {
    if (user.name === "") navigate("/signup");
  }, [handleClick]);

  return (
    <header className="bg-primary-color">
      <div className="mx-5 sm:mx-10 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-xl text-white font-bold">CodeLeap Network</h1>
        </div>

        <div className="flex items-center">
          <ThemeButton />
          <button
            type="button"
            onClick={handleClick}
            className="text-white font-bold ml-1"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
