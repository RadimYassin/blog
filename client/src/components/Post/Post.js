import React, { useEffect, useState } from 'react'
import { AiOutlineLike, AiOutlineInfoCircle, AiFillLike } from "react-icons/ai"
import { VscComment } from "react-icons/vsc"

import { Main, Img, Card } from './style'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useAuth } from '../../hooks/useAuth'
import { useGcontext } from '../../hooks/useGcontext'
import PostInfo from '../PostInfo/PostInfo'
export default function Post({ item, CommentIcon }) {
    const [like, setLike] = useState(false)
    const [likelength, setLikelength] = useState(0)

    const [cookies, __] = useCookies(["access_token"])
    const { user } = useAuth()
    const { handelLiked, handelunLiked } = useGcontext()


    const OnLiked = (id, c) => {
        handelLiked(id, user, c)
        setLike(true)
    }
    const OnUnLiked = (id, c) => {
        handelunLiked(id, user, c)
        setLike(false)
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
                <Card className=" ">
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
                                    like ? <AiFillLike style={{ color: "rgba(57, 118, 172, 1)" }} onClick={() => { OnUnLiked(item._id, cookies.access_token) }} /> : <AiOutlineLike onClick={() => OnLiked(item._id, cookies.access_token)} />
                                }

                            </div>


                            {CommentIcon === true && <Link to={`/post/${item._id}`}> <VscComment /></Link>}

                        
                            <PostInfo id={item._id} children={    <AiOutlineInfoCircle />}/>
                        </div>
                    </div>

                </Card>
            </div>
        </Main>
    )
}