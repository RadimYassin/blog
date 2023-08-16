import React, { useEffect, useState } from 'react'
import { Main, Form } from "./style"
import { useGcontext } from '../../hooks/useGcontext'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { SpinnerRoundOutlined } from 'spinners-react';
import { AiOutlineDelete } from 'react-icons/ai'
import { useAuth } from '../../hooks/useAuth'
export default function Comment({ id, loading }) {
    const [comment, setComment] = useState("")
    const { dispatch, Comment } = useGcontext()

    const {user}=useAuth()
    //cookies
    const [cookies, __] = useCookies(["access_token"])
    // send comments
    const handelsubmit = async (e) => {
        e.preventDefault()
        const data = { text: comment, id }
        try {
            const res = await axios.post("http://localhost:4000/api/comment", data, {
                headers: {
                    'Authorization': `Bearer ${cookies.access_token}`
                }
            })

            // window.location.pathname = `/post/${id}`;
            // his(`/post/${""}`)

            dispatch({ type: "Add_Comment", payload: res.data.comment })
        } catch (error) {
            console.log(error);
        }

        setComment("")
    }


    // delete commmet


    const handelDelete = async (id) => {

        try {
            const res = await axios.delete(`http://localhost:4000/api/comment/${id}`, {
                headers: {
                    'Authorization': `Bearer ${cookies.access_token}`
                }
            })

            dispatch({ type: "delete_Comment", payload: id })
        } catch (error) {
            console.log(error);
        }

    }
    console.log(Comment);
    return (
        <Main>


            <Form onSubmit={handelsubmit} >
                <div className="input-container">
                    <input required="" placeholder="type something" value={comment} onChange={e => setComment(e.target.value)} type="text" />
                    <button className="invite-btn" type="submit">
                        add comment
                    </button>

                </div>
            </Form>
            <div className='mt-5'>

                {
                    loading == true && <div className="mt-5 d-flex justify-content-center">
                        <SpinnerRoundOutlined size={100} thickness={100} speed={100} color="rgba(57, 118, 172, 1)" />                    </div>
                }

                {
                    (Comment.length > 0 && loading == false) && (
                        Comment.map((i) => {
                            return (<div key={i._id} className="card mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <div className="d-flex flex-row align-items-center">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar" width="25"
                                                height="25" />
                                            <p className="small mb-0 ms-2">{i.author[0].firstName} - {i.author[0].lastName}</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <p className="small text-muted mb-0">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(i.dateC))}</p>

                                        </div>

                                    </div>

                                    <div className='d-flex justify-content-between align-items-center mt-1'>
                                        <span>{i.text}</span>
                                        {
                                            i.author[0]._id == user && <AiOutlineDelete className='text-muted' onClick={() => handelDelete(i._id)} />
                                        }
                                        
                                    </div>
                                </div>

                            </div>)
                        })
                    )
                }
                {(Comment.length==0 && loading == false) && <p className='text-muted' style={{fontSize:"30px"}}>No comment yet !!</p>}
            </div>


        </Main>
    )
}