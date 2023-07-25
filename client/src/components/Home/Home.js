import React from 'react'
import { AiOutlineLike, AiOutlineInfoCircle } from "react-icons/ai"
import { VscComment } from "react-icons/vsc"

import { Container, Main, Img } from './style'
 

export default function Home() {
    return (
        <Container>
            <Main className='mt-2'>


                <div className="w-100">
                    <div className="card flex-md-row  box-shadow h-md-350">
                        <Img className="card-img-left " alt="IMG" src="https://images.pexels.com/photos/17683686/pexels-photo-17683686/free-photo-of-woman-girl-portrait-35mm.jpeg" data-holder-rendered="true" />
                        <div className="card-body d-flex flex-column align-items-start p-5 pb-0">
                            <strong className="d-inline-block mb-2 h3">TITLE er card with supporting text below as a natural lead-in to ad</strong>
                            {/* <h3 className="mb-0">
                <span className="text-dark" > dave</span>
            </h3> */}
                            <div className="mb-1 text-muted my-1"> dave aauaua  Nov 12</div>
                            <p className="card-text mb-auto my-2">
                                his is a wider card with supporting text below as a natural lead-in to additional content.
                                his is a wider card with supporting text below as a natural lead-in to additional content.
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                                his is a wider card with supporting text below as a natural lead-in to additional content.
                                his is a wider card with supporting text below as a natural lead-in to additional content.
                                This is a wider card with supporting text below as a natural lead-in to additional content.

                            </p>



                            <div className='w-100 d-flex justify-content-between   '>

                                <AiOutlineLike />
                                <VscComment />
                                <AiOutlineInfoCircle />

                            </div>
                        </div>

                    </div>
                </div>
            </Main>

        </Container>

    )
}
