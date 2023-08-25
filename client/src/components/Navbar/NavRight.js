import React from 'react'
import { styled } from 'styled-components'
import { useAuth } from '../../hooks/useAuth'
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

const Ul=styled.ul`

list-style:none;
display: flex;
flex-flow: row nowrap;
justify-content:space-between;
align-items:center;
li{
    padding:18px 10px;
    a{
        text-decoration:none;
            margin:0 15px;
            font-size:20px;
            color:black;
    }

    .logOut {
               width:100%;
               padding: 8px 16px;
               font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
               border-radius: 7px;
               border: none;

               background: #6E6d70;
               box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
               color: #DFDEDF;
               user-select: none;
               -webkit-user-select: none;
               touch-action: manipulation;
           }

           .logOut:focus {
           box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
           outline: 0;
           }
}


@media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content:start;
    background-color:rgba(57, 118, 172, .98);
    position:fixed;
    transform:${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width:300px;
    padding-top:3.5rem;
    transition: .2s ease-out;
    z-index:20;
    li{
a{
    color:white;

}    
}
}

`
export default function NavRight({open}) {
    const { dispatch, user } = useAuth()
    const [cookies, setCookies, removeToken] = useCookies(["access_token"])
    const nav = useNavigate()
    const handelclick = () => {
        // remove user from storage
        localStorage.removeItem("userId")
        // removeres.cookie('name', value);

        removeToken(['access_token']);
        // dispatch logout action

        dispatch({ type: "LOGOUT" })
        nav("/login")
    }
    return (
        <Ul open={open}>
            {
            user && <>
             <li><Link to={"/newPost"}>new post</Link></li> 

             <li><button className='logOut' onClick={handelclick} >   logout</button></li> 

            </>
          }

{
            user == null && <>
             <li>
                <Link to={"/login"}>login</Link>
                </li> 
                <li>
                <Link to={"/register"}>register</Link>

                </li>

            </>
          }
          
        </Ul>
    )
}
