import React, { useEffect, useState } from 'react'
import { AiOutlineLike, AiOutlineInfoCircle, AiFillLike } from "react-icons/ai"
import { VscComment } from "react-icons/vsc"

import { Main, Img, Card } from './style'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useAuth } from '../../hooks/useAuth'
import { useGcontext } from '../../hooks/useGcontext'
export default function Post({ item, CommentIcon }) {
    const [like, setLike] = useState(false)
    const [cookies, __] = useCookies(["access_token"])
    const { user } = useAuth()
    const { dispatch } = useGcontext()
    const handelLiked = async (id) => {
        dispatch({ type: "Add_likes", payload: id, user: user })
        setLike(true)
        try {
            const res = await axios.post("http://localhost:4000/api/post/" + id + "/like", {}, {
                headers: {
                    'Authorization': `Bearer ${cookies.access_token}`,
                }
            })


        } catch (error) {
            console.log(error);
        }

    }

    const handelunLiked = async (id) => {
        dispatch({ type: "UNlike", payload: id, user: user })
        setLike(false)

        try {
            const res = await axios.post("http://localhost:4000/api/post/" + id + "/unlike", {}, {
                headers: {
                    'Authorization': `Bearer ${cookies.access_token}`,
                }
            })



        } catch (error) {
            console.log(error);
        }

    }
    // check user if liked this  post

    useEffect(() => {
        if (item.likes) {

            if (item.likes.includes(user)) {
                setLike(true)
            } else {
                setLike(false)
            }
        }

    }, [item.likes])
    return (
        <Main className='mt-2'>


            <div className="w-100">
                <Card className="card  box-shadow ">
                    <Img className="card-img-left " alt="IMG" src={`/imgs/${item.image}`} data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start p-5 pb-0">
                        <strong className="d-inline-block mb-2 h3">{item.title}</strong>

                        <div className="mb-1 text-muted my-1"> {item.author}  -  {item.datePb}</div>
                        <p className="card-text mb-auto my-2">
                            {item.bio}

                        </p>



                        <div className='w-100 d-flex justify-content-between   '>

                            <div className=' d-flex justify-content-between align-items-center '>
                                {
                                    like ? <AiFillLike style={{ color: "rgba(57, 118, 172, 1)" }} onClick={() => { handelunLiked(item._id) }} /> : <AiOutlineLike onClick={() => handelLiked(item._id)} />
                                }
                                {
                                    item.likes && <p style={{ margin: "1.2px" }} className='text-muted '>{item.likes.length == 0 ? "" : item.likes.length}</p>

                                }
                            </div>


                            {CommentIcon === true && <Link to={`/post/${item._id}`}> <VscComment /></Link>}

                            <AiOutlineInfoCircle />

                        </div>
                    </div>

                </Card>
            </div>
        </Main>
    )
}