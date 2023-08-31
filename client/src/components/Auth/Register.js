import React, { useState } from 'react'
import { Container, Form } from "./style"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    // firstName,lastName,email,password
    const [data, setData] = useState({})
    const nav = useNavigate()

    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;

        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const handelSubmit = async (e) => {

        e.preventDefault()

        try {
            const res=await axios.post("https://blog-yassine-api.onrender.com/api/user/register",data)

            console.log(res.data);
            nav("/login")
        } catch (error) {
            console.log(error.message);
        }


      
    }
    return (
        <Container>
             
            <div className='form-content'>
                <Form onSubmit={handelSubmit} encType="multipart/form-data">
                    <div className="input-box">
                        <label className="input-label">firstName : </label>
                        <input placeholder="type firstName " value={data.firstName || ""} onChange={handelChange} className="input" name="firstName" type="text" />
                        <span className="input-helper">enter a firstName</span>
                    </div>
                    <div className="input-box">
                        <label className="input-label">lastName : </label>
                        <input placeholder="type lastName " value={data.lastName || ""} onChange={handelChange} className="input" name="lastName" type="text" />
                        <span className="input-helper">enter a lastName</span>
                    </div>
                    <div className="input-box">
                        <label className="input-label">email : </label>
                        <input placeholder="type email " value={data.email || ""} onChange={handelChange} className="input" name="email" type="text" />
                        <span className="input-helper">enter a email</span>
                    </div>
                    <div className="input-box">
                        <label className="input-label">password : </label>
                        <input placeholder="type password" value={data.password || ""} onChange={handelChange} className="input" name="password" type="password" />
                        <span className="input-helper">enter a coccrect password</span>
                    </div>
                    <div className="input-box">
                        <label className="input-label">image : </label>
                        <input
                            type="file"
                            onChange={handelChange}
                            className="input"
                            name="image"
                        />
                        <span className="input-helper">enter an image profile</span>
                    </div>

                    <div className="input-btn">
                        <button className='buttonCreate'>Register </button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}
