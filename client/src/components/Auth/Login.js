import React, { useState } from 'react'
import {Container,Form} from "./style"
import axios  from "axios"
import  {useCookies} from "react-cookie"
import { useNavigate } from 'react-router-dom'
export default function Login() {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [_,setCookies]=useCookies(["access_token"])

const nav=useNavigate()
    const handelSubmit=async(e)=>{
      const data={email,password}
        e.preventDefault()

        try {
            const res=await axios.post("http://localhost:4000/api/user/login",data)
            console.log(res.data);
            setCookies("access_token",res.data.token)
         
            window.localStorage.setItem("userId",res.data.userId)
            nav("/")
        } catch (error) {
            console.log(error.message);
        }
      
    }
    return (
        <Container>
                   <div className='form-content'>
                    <Form  onSubmit={handelSubmit}>
                        <div className="input-box">
                            <label className="input-label">email : </label>
                            <input 
                            placeholder="type email "
                             className="input" 
                             name="text" type="text" 
                             value={email}
                             onChange={e=>setEmail(e.target.value)}
                             />
                            <span className="input-helper">enter a email</span>
                        </div>
                        <div className="input-box">
                            <label className="input-label">password : </label>
                            <input
                             placeholder="type password" 
                            className="input" name="text" 
                            type="password" 
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            
                            />
                            <span className="input-helper">enter a coccrect password</span>
                        </div>
                       
                        <div className="input-btn">
                         <button className='buttonCreate'>login </button>
                        </div>
                    </Form>
                </div>
        </Container>
    )
}
