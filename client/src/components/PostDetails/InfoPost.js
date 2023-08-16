import React from 'react'
import { AiOutlineLike, AiOutlineInfoCircle } from "react-icons/ai"
import {Main, Img,Card } from "./style"

export default function InfoPost({ data }) {


    return (
        <div>
            <Main >

                <div className="w-100">
                    <Card className="card">
                        <Img className="card-img-left " alt="IMG" src={`/imgs/${data.image}`} data-holder-rendered="true" />
                        <div className="card-body d-flex flex-column align-items-start p-5 pb-0">
                            <strong className="d-inline-block mb-2 h3">{data.title}</strong>

                            <div className="mb-1 text-muted my-1"> {data.author}  -  {data.datePb}</div>
                            <p className="card-text mb-auto my-2">
                                {data.bio}

                            </p>

                            <div className='w-100 d-flex justify-content-between   '>

                                <AiOutlineLike />
                                <AiOutlineInfoCircle />

                            </div>

                        </div>
                    </Card>
                </div>
            </Main>
        </div>
    )
}
