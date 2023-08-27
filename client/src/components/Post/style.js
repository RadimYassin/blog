import { styled } from "styled-components"

export const Main = styled.section`

     margin:0 auto;
    max-width:1400px;
    border-radius:4px;

    svg{
      font-size:30px;
      margin-bottom:20px;
      margin-top:10px;

      color:black;
    
    }
   

`




export const Img = styled.img`
/* style={{ width: "200px", height: "250px" }} */
width:250px;
height:auto;
@media  (max-width:1400px){
  width:100%;

      
    }


`

export const Card = styled.div`
/* style={{ width: "200px", height: "250px" }} */
display:flex;
justify-content:center;
flex-direction:row;
box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
@media  (max-width:1400px){

  flex-direction:column;

      
    }


`