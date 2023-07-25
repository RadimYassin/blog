import { styled } from "styled-components";

export const Container = styled.div`


 padding:40px;
 


 .content{
    margin:0 auto;
    max-width:1400px;

    display:flex;
    align-items:center;
    justify-content:space-between;
   
    .logo{
        color:black;
    }

    nav{

        a{
            text-decoration:none;
            color:black;
            margin:0 15px;
            font-size:20px;
        }

        .logOut {
               
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
 }

`