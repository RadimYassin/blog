import React, { useContext, useEffect } from "react";
import { styled } from "styled-components";
import NavbarC from "./components/Navbar/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import NewPost from "./components/NewPost/NewPost";
import { useCookies } from "react-cookie";
import { useData } from "./hooks/useData";

function App() {
const {dispatch}=useData()
  const [cookies, setCookies] = useCookies(["access_token"])
  return (
    <Container className="App">
       <NavbarC/>


       <Routes>
           <Route index path="/" element={<Home/>}/>
           <Route path="login" element={<Login/>}/>
           <Route path="register" element={<Register/>}/>
           {
            cookies.access_token &&    <Route path="newpost" element={<NewPost/>}/>
           }
        
           <Route path="*" element={<NotFound/>}/>
       </Routes>
       <button 
       onClick={()=>dispatch({type:"ADD"})}
       className="btn btn-danger">
        add
       </button>
    </Container>
  );
}

export default App;


export const Container=styled.div`
/* *{
  padding:0;
  margin:0;
} */
`