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
        try {
            const res = await axios.post("http://localhost:4000/api/post/" + id + "/like", {}, {
                headers: {
                    'Authorization': `Bearer ${cookies.access_token}`,
                }
            })

            if (res.status === 200) {
                dispatch({ type: "Add_likes", payload: id, user: user })
            }
        } catch (error) {
            console.log(error);
        }

    }

    const handelunLiked = async (id) => {
        try {
            const res = await axios.post("http://localhost:4000/api/post/" + id + "/unlike", {}, {
                headers: {
                    'Authorization': `Bearer ${cookies.access_token}`,
                }
            })
            dispatch({ type: "UNlike", payload: id, user: user })
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <Main className='mt-2'>


            <div className="w-100">
                <Card className="card  box-shadow ">
                    <Img className="card-img-left " alt="IMG" src={`/imgs/${item.image}`} data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start p-5 pb-0">
                        <strong className="d-inline-block mb-2 h3">{item.title}</strong>
                        {/* <h3 className="mb-0">
        <span className="text-dark" > dave</span>
    </h3> */}
                        <div className="mb-1 text-muted my-1"> {item.author}  -  {item.datePb}</div>
                        <p className="card-text mb-auto my-2">
                            {item.bio}

                        </p>



                        <div className='w-100 d-flex justify-content-between   '>

                            <AiFillLike onClick={() => { handelunLiked(item._id) }} />

                            <AiOutlineLike onClick={() => handelLiked(item._id)} />
                            {CommentIcon === true && <Link to={`/post/${item._id}`}> <VscComment /></Link>}

                            <AiOutlineInfoCircle />

                        </div>
                    </div>

                </Card>
            </div>
        </Main>
    )
}