import React from "react";

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
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {






  const { user } = useAuth()
  return (
    <div >
<Navbar/>
      <Routes>
        <Route index path="/" element={<Home />} />
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
      <Footer />
    </div>
  );
}

export default App;
