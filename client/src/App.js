import React, { useContext, useEffect, useState } from "react";
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
// import { useFetch } from "./hooks/useFetch";
import { useData } from "./hooks/useData";
import axios from "axios";
import PostDetails from "./components/PostDetails/PostDetails";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { dispatch } = useData()






const {user}=useAuth()
  return (
    <Container className="App">
      <NavbarC />


      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {
         user &&

          <>
            <Route path="newpost" element={<NewPost />} />
            <Route path="post/:id" element={<PostDetails />} />
          </>

        }


        <Route path="*" element={<NotFound />} />
      </Routes>

    </Container>
  );
}

export default App;


export const Container = styled.div`
/* *{
  padding:0;
  margin:0;
} */
`