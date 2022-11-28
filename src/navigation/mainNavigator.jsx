import React from "react";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import FormContainer from '../containers/formContainer';
import NotFound from "../components/notFound/notFound";
import Success from "../components/success/success";
import Failed from "../components/failed/failed";

const mainNavigator = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<FormContainer></FormContainer>}></Route>
            <Route path='/success' element={<Success></Success>}></Route>
            <Route path='/failed'  element={<Failed></Failed>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>  
  )
}

export default mainNavigator;