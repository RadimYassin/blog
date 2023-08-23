import React from "react";
import { styled } from "styled-components";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import NewPost from "./components/NewPost/NewPost";
// import { useFetch } from "./hooks/useFetch";
import PostDetails from "./components/PostDetails/PostDetails";
import { useAuth } from "./hooks/useAuth";
import Navbar2 from "./components/Navbar/Navbar";

function App() {






const {user}=useAuth()
  return (
    <Container className="App">
       <Navbar2/>

      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post/:id" element={<PostDetails />} />
        {
         user &&

          <>
            <Route path="newpost" element={<NewPost />} />
           
          </>

        }


        <Route path="/*" element={<NotFound />} />
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