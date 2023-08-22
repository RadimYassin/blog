import React, { useEffect, useState } from 'react'

import { Container } from './style'
import Post from '../Post/Post'
import { useGcontext } from "../../hooks/useGcontext";
import PlaceholderComponent from '../Placeholder/Placeholder';
import axios from 'axios';

export default function Home() {


const {dispatch,posts,loading}=useGcontext()

       const fetchData = async () => {
          // Replace 'API_URL' with the actual URL of your API or backend endpoint
         await axios.get("http://localhost:4000/api").then(res=>   dispatch({type:"Fetch_Data",payload:res.data}))
       
         .catch(error=>{
          dispatch({type:"Fetch_Error"})
         })
        }
      useEffect(() => {
        fetchData();
      },[]);

      console.log(posts);
  return (
    <Container>
      {
        loading && <PlaceholderComponent/>
      }
      {
        posts.map((i,index)=> {
          return (
            <Post CommentIcon={true} key={index}  item={i} />
          )
        })
      }


    </Container>

  )
}
