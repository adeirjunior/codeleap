import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { addUser } from "../actions";
import { User } from "../interfaces";

function Signup() {
  const dispatch: AppDispatch = useDispatch();
  const [inputText, setInputText] = useState<User>();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);

  const submit = () => {
    if (inputText !== undefined) dispatch(addUser(inputText));
  };

  useEffect(() => {
    if (user.name !== "") navigate("/");
  }, [submit]);

  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-gray-light dark:bg-federal-blue dark:text-white">
      <div className="bg-white flex items-center w-full max-w-[500px] flex-col p-6 rounded-xl border border-[#CCCCCC] dark:bg-federal-blue">
        <form className="w-full" onSubmit={submit}>
          <div className="flex flex-col w-full">
            <h2 className="text-xl font-bold mb-5">
              Welcome to CodeLeap network!
            </h2>
            <label className="mb-1" htmlFor="username">
              Please enter your username
            </label>
            <input
              onChange={(e) => setInputText({ name: e.target.value })}
              placeholder="John doe"
              className="border border-[#777777] mb-4 rounded-lg px-3 py-1 dark:bg-federal-blue"
              type="text"
              id="username"
              required
            />
          </div>
          <div className="flex items-end flex-col w-full">
            <button
              className={`float-right ${
                inputText?.name ? "bg-primary-color" : "bg-gray-dark"
              } font-bold uppercase text-white w-auto py-1 rounded-lg min-w-[111px]`}
              type="submit"
              disabled={inputText?.name ? false : true}
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
