import React, { useState } from 'react'
import { Container } from "./style"
export default function NewPost() {

    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [bio,setBio]=useState("")


    const handelSubmit=async(e)=>{
e.preventDefault()
let idU=182929
const data={title,author,bio,idU}

const response = await fetch('http://localhost:4000/api/CreatePost', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  const json = await response.json()
console.log(json);
    }
    return (
        <Container>
            <main >
                <h1>
                    create new post :
                </h1>

                <div className='form-content'>
                    <form  onSubmit={handelSubmit}>
                        <div className="input-box">
                            <label className="input-label">title : </label>
                            <input placeholder="type title of post " value={title} onChange={e=>setTitle(e.target.value)} className="input" name="text" type="text" />
                            <span className="input-helper">enter a title</span>
                        </div>
                        <div className="input-box">
                            <label className="input-label">author : </label>
                            <input placeholder="type author of post " value={author} onChange={e=>setAuthor(e.target.value)} className="input" name="text" type="text" />
                            <span className="input-helper">enter a author</span>
                        </div>
                        <div className="input-box">
                            <label className="input-label">Bio : </label>
                            <textarea placeholder="type bio of post ... " value={bio}  onChange={e=>setBio(e.target.value)} rows={5} className="input" name="text" type="text" ></textarea>
                          
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
