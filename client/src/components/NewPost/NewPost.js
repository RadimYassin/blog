import React, { useState } from 'react'
import { Container } from "./style"
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
export default function NewPost() {
    const [cookies, __] = useCookies(["access_token"])
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [bio, setBio] = useState("")
    const nav=useNavigate()

    const handelSubmit = async (e) => {
        e.preventDefault()

        const data = { title, bio }



        try {
            const res = await axios.post("http://localhost:4000/api/CreatePost", data, {
                headers: {
                    'Authorization': `Bearer ${cookies.access_token}`
                }
            })
             if(res.status === 200){
                nav("/")
             }
        } catch (error) {
            console.log(error);
        }

        console.log(cookies);
    }
    return (
        <Container>
            <main >
                <h1>
                    create new post :
                </h1>

                <div className='form-content'>
                    <form onSubmit={handelSubmit}>
                        <div className="input-box">
                            <label className="input-label">title : </label>
                            <input placeholder="type title of post " value={title} onChange={e => setTitle(e.target.value)} className="input" name="text" type="text" />
                            <span className="input-helper">enter a title</span>
                        </div>
                        <div className="input-box">
                            <label className="input-label">author : </label>
                            <input placeholder="type author of post " value={author} onChange={e => setAuthor(e.target.value)} className="input" name="text" type="text" />
                            <span className="input-helper">enter a author</span>
                        </div>
                        <div className="input-box">
                            <label className="input-label">Bio : </label>
                            <textarea placeholder="type bio of post ... " value={bio} onChange={e => setBio(e.target.value)} rows={5} className="input" name="text" type="text" ></textarea>

                        </div>

                        <div className="input-btn">
                            <button className='buttonCreate'>create Post </button>
                        </div>
                    </form>
                </div>
            </main>
        </Container>
    )
}
