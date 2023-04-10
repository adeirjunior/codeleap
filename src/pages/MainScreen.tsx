import React, { Suspense, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCareers } from "../actions"
import PostGrid from "../components/dom/PostGrid"
import Form from "../components/dom/Form"
import { AppDispatch, RootState } from "../redux/store"

function MainScreen() {
  const dispatch: AppDispatch = useDispatch()
  const { careers } = useSelector((state: RootState) => state.careers)
  
  useEffect(() => {
    dispatch(fetchCareers())
  },[dispatch])

  return (
    <>
      <Form />
      <PostGrid careers={careers}/>
    </>
  );
}

export default MainScreen;
