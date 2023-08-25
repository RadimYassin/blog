import React from 'react'
import { styled } from 'styled-components'


const StyledFooter = styled.footer`

background: rgb(99,98,98);
background: linear-gradient(90deg, rgba(99,98,98,1) 0%, rgba(103,101,101,0.927608543417367) 100%);
    color: #fff;
    text-align: center;
padding-top:10px;
    position: fixed;
    bottom: 0;
    width: 100%;
`
export default function Footer() {
    return (
        <StyledFooter>
            <p>&copy; 2023 blog. All rights reserved.</p>

        </StyledFooter>
    )
}
