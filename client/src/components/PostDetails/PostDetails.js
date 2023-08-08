import React, { useEffect, useState } from 'react'
import { Container, Main, Img, Breadcrumb } from "./style"
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';
import Comment from '../Comment/Comment';
import { useData } from '../../hooks/useData';
import InfoPost from './InfoPost';
export default function PostDetails() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');    const {dispatch}=useData()
    const { id } = useParams()
    useEffect(() => {

      
        axios.get(`http://localhost:4000/api/post/${id}`, {

        }).then((res) => {
            setData(res.data.post.info);
            dispatch({type:"Fetch_Comment",payload:res.data.post.comment});
            setLoading(false);

           
    }).catch(error=>{
        setLoading(false);
setError(error)
    })

    }, [])

   
    return (
        <Container>


            {data &&
                <>
                    <Breadcrumb aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">PostDetails</li>
                        </ol>
                    </Breadcrumb>
                 {/* post */}

                    <InfoPost  data={data}/>
                    <Comment id={id} loading={loading} />
                    
                    
                    </>
            }



        </Container>
    )
}
