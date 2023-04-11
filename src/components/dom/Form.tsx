import React from "react";

export default function Form() {
    return (
      <div className="border-[#999999] border rounded-2xl overflow-hidden mb-5 p-5">
        <h2 className="text-xl font-bold">What's on your mind?</h2>
        <div className="flex flex-col mt-4">
          <label className="text-base font-medium mb-1" htmlFor="title">Title</label>
          <input className="border-[#999999] border rounded-md" title="title" id="title" type="text" />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-base font-medium mb-1" htmlFor="content">Content</label>
          <textarea className="border-[#999999] border rounded-md px-2" title="content" id="content" rows={10}></textarea>
        </div>
        <button className="bg-primary-color text-white font-bold px-8 py-1 rounded-lg mt-6 float-right" type="button">Create</button>
      </div>
    )
  }