import React, { useEffect, useState } from 'react'
import { Main, Form } from "./style"
import { useData } from '../../hooks/useData'
import { useCookies } from 'react-cookie'
import axios from 'axios'
export default function Comment({id}) {
    const [comment, setComment] = useState("")
const {dispatch,Comment}=useData()
    //cookies
    const [cookies, __] = useCookies(["access_token"])

    const handelsubmit =async  (e) => {
        e.preventDefault()
        const data = {text:comment,id}
        try {
            const res=await axios.post("http://localhost:4000/api/comment", data, {
                headers: {
                    'Authorization': `Bearer ${cookies.access_token}`
                }
            })
     
            // window.location.pathname = `/post/${id}`;
            // his(`/post/${""}`)

            dispatch({type:"Add_Comment",payload:res.data.comment})
        } catch (error) {
            console.log(error);
        }

        setComment("")
    }



 
    return (
        <Main>


            <Form onSubmit={handelsubmit} >
                <div class="input-container">
                    <input required="" placeholder="type something" value={comment} onChange={e => setComment(e.target.value)} type="text" />
                    <button class="invite-btn" type="submit">
                        add comment
                    </button>

                </div>
            </Form>
            <div className='mt-5'>
                {
                    Comment.length > 0 ? (
                        Comment.map((i) => {
                            return (<div key={i._id} class="card mb-4">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex flex-row align-items-center">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar" width="25"
                                                height="25" />
                                            <p class="small mb-0 ms-2">{i.author[0].firstName} - {i.author[0].lastName}</p>
                                        </div>
                                        <div class="d-flex flex-row align-items-center">
                                            <p class="small text-muted mb-0">{i.dateC}</p>
                                        </div>
                                    </div>

                                    <div className='card-text mt-1'>
                                        <span>{i.text}</span>
                                    </div>
                                </div>

                            </div>)
                        })

                    ) : <p>no comment !!</p>
                }


            </div>


        </Main>
    )
}
