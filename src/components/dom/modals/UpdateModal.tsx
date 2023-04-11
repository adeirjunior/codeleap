import React, { useState } from 'react'
import { updateCareer } from '../../../actions'
import { Career } from '../../../interfaces'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";

function UpdateModal({ setShowUpdateMessage, id }) {
  const { user: { name } } = useSelector((state: RootState) => state.user)
  const dispatch: AppDispatch = useDispatch()
  const [career, setCareer] = useState<Career>({content: '', title: '', username: name, created_datetime: null, id: id})

  return (
    <div className="bg-white w-full max-w-[660px] p-5 fixed top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 border border-[#999999] rounded-xl">
        <h3 className="text-xl font-bold mb-8">Edit item</h3>
        <div className="flex flex-col mt-4">
          <label className="text-base font-medium mb-1" htmlFor="title">Title</label>
          <input onChange={event => setCareer({...career, title: event.target.value})} placeholder="Hello world" className="border-[#999999] border rounded-md px-2 py-1 text-sm" title="title" id="title" type="text" />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-base font-medium mb-1" htmlFor="content">Content</label>
          <textarea onChange={event => setCareer({...career, content: event.target.value})} placeholder="Content here" className="border-[#999999] border rounded-md px-2 py-1 text-sm resize-none" title="content" id="content" rows={4}></textarea>
        </div>
        <div className="flex justify-end mt-7">
            <button className="border border-[#999999] py-1 px-6 rounded-lg font-bold mr-4" type="button" onClick={() => setShowUpdateMessage(false)}>
                Cancel
            </button>
            <button className="bg-[#47B960] text-white py-1 px-6 rounded-lg font-bold" type="button" onClick={() => {setShowUpdateMessage(false); dispatch(updateCareer(career))}}>
                Save
            </button>
        </div>
    </div>
  )
}

export default UpdateModal