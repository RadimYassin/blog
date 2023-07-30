import React, { useEffect, useState } from 'react'

import { Container } from './style'
import Post from '../Post/Post'
import { useData } from "../../hooks/useData";
import PlaceholderComponent from '../Placeholder/Placeholder';
import axios from 'axios';

export default function Home() {


const {dispatch,posts,loading}=useData()

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
  return (
    <Container>
      {
        loading && <PlaceholderComponent/>
      }
      {
        posts.map(i => {
          return (
            <Post key={i._id} item={i} />
          )
        })
      }


    </Container>

  )
}
