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
import { useFetch } from "./hooks/useFetch";
import { useData } from "./hooks/useData";
import axios from "axios";

function App() {
const {dispatch}=useData()


  useEffect(() => {
      fetchData();
     
    }, []);
  
    const fetchData = async () => {
      try {
        // Replace 'API_URL' with the actual URL of your API or backend endpoint
        const response = await axios.get("http://localhost:4000/api");
        dispatch({type:"Fetch_Data",payload:response.data})
      } catch (error) {
        dispatch({type:"Fetch_Error",message:'Error fetching data. Please try again later.'})
       
      
      }
    };



// console.log(data);
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