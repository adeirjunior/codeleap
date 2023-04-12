import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCareers } from "../actions"
import PostGrid from "../components/dom/PostGrid"
import Form from "../components/dom/Form"
import { AppDispatch, RootState } from "../redux/store"
import { useNavigate } from "react-router-dom"
import Container from "../components/layout/Container";

function MainScreen() {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const careers = useSelector((state: RootState) => state.careers)
  const { user } = useSelector((state: RootState) => state.user)
  
  useEffect(() => {
    if(user.name === '') navigate('/signup')
    dispatch(fetchCareers())
  },[])

  return (
    <Container>
      <Form />
      {careers.isLoading && "Loading..."}
      {!careers.isLoading && <PostGrid careers={careers.careers}/>}
    </Container>
  );
}

export default MainScreen;
