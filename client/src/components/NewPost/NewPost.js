import React, { useState } from 'react'
import { Container } from "./style"
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
export default function NewPost() {
    const [cookies, __] = useCookies(["access_token"])
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [bio, setBio] = useState("")
    const nav = useNavigate()

    const handelSubmit = async (e) => {
        e.preventDefault()

        const data = { title, bio, image }

        try {
            const res = await axios.post("http://localhost:4000/api/CreatePost", data, {
                headers: {
                    'Authorization': `Bearer ${cookies.access_token}`,

                    "Content-Type": "multipart/form-data"
                }
            })
            if (res.status==200) {
                nav("/")
            }
          
       

        } catch (error) {
            console.log(error);
        }


    }
    return (
        <Container>
            <main >
                <h1>
                    create new post :
                </h1>

                <div className='form-content'>
                    <form onSubmit={(e)=>handelSubmit(e)} encType="multipart/form-data">
                        <div className="input-box">
                            <label className="input-label">title : </label>
                            <input placeholder="type title of post " value={title} onChange={e => setTitle(e.target.value)} className="input" name="text" type="text" />
                            <span className="input-helper">enter a title</span>
                        </div>
                        <div className="input-box">

                   
                            <label className="input-label">image : </label>
                            <input onChange={e => setImage(e.target.files[0])} className="input form-control" name="image" type="file" />

                        </div>
                        <div className="input-box">
                            <label className="input-label">Bio : </label>
                            <textarea placeholder="type bio of post ... " value={bio} onChange={e => setBio(e.target.value)} rows={5} className="input" name="text" type="text" ></textarea>

                        </div>

                        <div className="input-btn">
                            <button type='submit' className='buttonCreate'>create Post </button>
                        </div>
                    </form>
                </div>
            </main>
        </Container>
    )
}