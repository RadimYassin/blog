import React, { useEffect, useState } from 'react'
import {Container,Main} from "./style"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
export default function PostDetails() {

const [data,setData]=useState([])
const [cookies, __] = useCookies(["access_token"])
const {id}=useParams()
useEffect(()=>{


axios.get(`http://localhost:4000/api/post/${id}`,{
    headers: {
        'Authorization': `Bearer ${cookies.access_token}`
    }
}).then((res)=>console.log(res))

},[])



    return (
        <Container>
            <Main>
            hello

            </Main>
        </Container>
    )
}
