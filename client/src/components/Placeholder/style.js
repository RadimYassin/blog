import { styled } from "styled-components"




export const Container=styled.div`
height:100vh;



`
export const Main = styled.section`

     margin:10px auto;
     max-width:1400px;
   
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius:4px;
`




export const Img = styled.img`
/* style={{ width: "200px", height: "250px" }} */
width:350px;
height:auto;
@media screen and (max-width:1400px){
  width:100%;

      
    }


`


export const Card = styled.div`
/* style={{ width: "200px", height: "250px" }} */
display:flex;
justify-content:center;
flex-direction:row;
@media screen and (max-width:1400px){

  flex-direction:column;

      
    }


`

