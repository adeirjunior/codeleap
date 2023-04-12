import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCareers } from "../actions";
import PostGrid from "../components/dom/PostGrid";
import Form from "../components/dom/Form";
import { AppDispatch, RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";

function MainScreen() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const careers = useSelector((state: RootState) => state.careers);
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user.name === "") navigate("/signup");
    dispatch(fetchCareers());
  }, []);

  return (
    <Container>
      <Form />
      {careers.isLoading && 
        <div className="flex justify-center my-10 items-center">
          <div style={{borderTopColor: 'transparent'}} className="w-8 h-8 border-4 border-primary-color rounded-full animate-spin"></div>
          <p className="ml-2">loading...</p>
        </div>
      }
      {!careers.isLoading && <PostGrid careers={careers.careers} />}
    </Container>
  );
}

export default MainScreen;
