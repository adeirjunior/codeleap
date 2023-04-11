import React from "react";
import { deleteCareer } from '../../../actions'
import { AppDispatch } from '../../../redux/store'
import { useDispatch } from "react-redux"

function DeleteModal({ setShowMessage, id }) {
  const dispatch: AppDispatch = useDispatch()

  return (
    <div className="bg-white w-full max-w-[660px] p-5 fixed top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 border border-[#999999] rounded-xl">
        <h3 className="text-xl font-bold mb-8">Are you sure you want to delete this item?</h3>
        <div className="flex justify-end">
            <button className="border border-[#999999] py-1 px-6 rounded-lg font-bold mr-4" type="button" onClick={() => setShowMessage(false)}>
                Cancel
            </button>
            <button className="bg-[#FF5151] text-white py-1 px-6 rounded-lg font-bold" type="button" onClick={() => {setShowMessage(false); dispatch(deleteCareer(id))}}>
                Delete
            </button>
        </div>
    </div>
  );
}

export default DeleteModal;
