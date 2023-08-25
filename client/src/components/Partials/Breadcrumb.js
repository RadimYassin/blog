import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

 const BreadcrumbSetyled=styled.nav`
  
  margin:10px auto;
  max-width:1400px;
  padding:10px 0px;

`

export default function Breadcrumb({currentPage}) {
    return (


        <BreadcrumbSetyled aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
            </ol>
        </BreadcrumbSetyled>
    )
}
