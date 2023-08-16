import React from 'react'
import { AiOutlineLike, AiOutlineInfoCircle } from "react-icons/ai"
import { VscComment } from "react-icons/vsc"

import {  Main, Img,Card } from './style'
import { Link } from 'react-router-dom'
export default function Post({item}) {
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

                        <AiOutlineLike />

                         <Link to={`post/${item._id}`}> <VscComment /></Link>
                     
                        <AiOutlineInfoCircle />

                    </div>
                </div>

            </Card>
        </div>
    </Main>
    )
}