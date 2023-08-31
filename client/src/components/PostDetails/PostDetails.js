import React, { useEffect, useState } from 'react'
import { Card, Container, Img, Main } from "./style"
import { Link, useParams } from 'react-router-dom';
import { AiOutlineLike, AiOutlineInfoCircle, AiFillLike } from "react-icons/ai"
import { SpinnerRoundFilled} from 'spinners-react';

import axios from 'axios';
import Comment from '../Comment/Comment';
import { useGcontext } from '../../hooks/useGcontext';
import Post from '../Post/Post';
import Breadcrumb from '../Partials/Breadcrumb';
import { useCookies } from 'react-cookie';
import { useAuth } from '../../hooks/useAuth';
export default function PostDetails() {
    const [like, setLike] = useState(false)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { dispatch, post, handelLiked, handelunLiked } = useGcontext()

    const { user } = useAuth()
    const { id } = useParams()
    const [cookies, __] = useCookies(["access_token"])
    const fetchData = async () => {
        setLoading(true)
        try {
            // Replace 'API_URL' with the actual URL of your API or backend endpoint
            const response = await axios.get(`https://blog-yassine-api.onrender.com/api/post/${id}`);
            dispatch({ type: "Fetch_Post", payload: response.data.post.info });
            dispatch({ type: "Fetch_Comment", payload: response.data.post.comment });
            setLoading(false);
        } catch (error) {
            setError('Error fetching data. Please try again later.');
            setLoading(false);
        }
    };

    useEffect(() => {

        fetchData()

    }, [])
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
        if (post.likes) {

            if (post.likes.includes(user)) {
                setLike(true)
            } else {
                setLike(false)
            }
        }

    }, [post.likes])


 
    return (
        <Container>

            {
                loading == true ? <div className="mt-5 d-flex justify-content-center">
                    <SpinnerRoundFilled size={400} thickness={100} speed={100} color="rgba(57, 118, 172, 1)" />                    </div>
            :

            <>
                <Breadcrumb currentPage="PostDetails" />
                {/* post */}
                <Main className='mt-2'>




                    <div className="w-100">
                        <Card className=" ">
                            <Img className="card-img-left " alt="IMG" src={`/imgs/${post.image}`} data-holder-rendered="true" />
                            <div className="card-body d-flex flex-column align-items-start p-5 pb-0">
                                <strong className="d-inline-block mb-2 h3">{post.title}</strong>

                                <div className="mb-1 text-muted my-1"> {post.author}  -  {post.datePb}</div>
                                <p className="card-text mb-auto my-2">
                                    {post.bio}

                                </p>



                                <div className='w-100 d-flex justify-content-between   '>

                                    <div className=' d-flex justify-content-between align-items-center '>
                                        {
                                            like ? <AiFillLike style={{ color: "rgba(57, 118, 172, 1)" }} onClick={() => { OnUnLiked(post._id, cookies.access_token) }} /> : <AiOutlineLike onClick={() => OnLiked(post._id, cookies.access_token)} />
                                        }

                                    </div>





                                </div>
                            </div>

                        </Card>
                    </div>


                </Main>
                <Comment id={id} />


            </>


                                    }

        </Container>
    )
}
