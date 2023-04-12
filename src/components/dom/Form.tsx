import React, { useState } from "react";
import { Career } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addCareer } from "../../actions";

export default function Form() {
  const {
    user: { name },
  } = useSelector((state: RootState) => state.user);
  const [career, setCareer] = useState<Career>({
    content: "",
    title: "",
    username: name,
    created_datetime: null,
    id: null,
  });
  const dispatch: AppDispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault()
    dispatch(addCareer(career));
  };

  return (
    <div className="border-[#999999] border rounded-2xl overflow-hidden mb-5 p-5">
      <h2 className="text-xl font-bold">What's on your mind?</h2>
      <form onSubmit={submit}>
        <div className="flex flex-col mt-4">
          <label className="text-base font-medium mb-1" htmlFor="title">
            Title
          </label>
          <input
            required
            onChange={(event) =>
              setCareer({ ...career, title: event.target.value })
            }
            placeholder="Hello world"
            className="border-[#999999] border rounded-md px-2 py-1 text-sm"
            title="title"
            id="title"
            type="text"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-base font-medium mb-1" htmlFor="content">
            Content
          </label>
          <textarea
            required
            onChange={(event) =>
              setCareer({ ...career, content: event.target.value })
            }
            placeholder="Content here"
            className="border-[#999999] border rounded-md px-2 py-1 text-sm resize-none"
            title="content"
            id="content"
            rows={4}
          ></textarea>
        </div>
        <button
          className={`${career.content && career.title ? 'bg-primary-color' : 'bg-gray-dark'} text-white font-bold px-8 py-1 rounded-lg mt-6 float-right`}
          type="submit"
          disabled={career.content && career.title ? false : true}
        >
          Create
        </button>
      </form>
    </div>
  );
}
