import React, { Suspense, useEffect, useState } from "react";
import PostGrid from "../components/dom/PostGrid";
import Form from "../components/dom/Form";
import { getCareers } from "../actions";

function MainScreen() {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    getCareers().then(res => setCareers(res))
  }, []);

  return (
    <>
      <Form />
      <Suspense fallback="Loading...">
        <PostGrid careers={careers}/>
      </Suspense>
    </>
  );
}

export default MainScreen;
