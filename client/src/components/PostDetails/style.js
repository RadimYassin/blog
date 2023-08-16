import { styled } from "styled-components";

export const Container = styled.div`
 padding:30px;



`

export const Main = styled.section`

     margin:0 auto;
    max-width:1400px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
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
@media  (max-width:1400px){

  flex-direction:column;

      
    }


`

export const Breadcrumb=styled.nav`
  
  margin:10px auto;
  max-width:1400px;
  padding:10px 0px;

`


export const Form = styled.form`

width:100%;
margin-top:10px;
.input-container {
  position: relative;
  display: flex;
  height: 3rem;
  width: 100%;
  min-width: 200px;

  background-color: #fff;
  border-radius: 8px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, .05);
}

.input-container input {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  border: 1px solid  rgb(176 190 197);
  background-color: transparent;
  padding: 0.625rem 70px 0.625rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: rgb(69 90 100);
  outline: none;
  transition: all .15s cubic-bezier(0.4, 0, 0.2, 1);
}

.input-container input:focus {
  border: 1px solid rgb(91, 186, 248);
}

.invite-btn {
  position: absolute;
  width: 150px;
  right: 4px;
  top: 4px;
  bottom: 4px;
  z-index: 10;
  border-radius: 4px;
  background-color:#33AFFF;
  color: #fff;
  padding-top: .30rem;
  padding-bottom: .30rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: center;
  vertical-align: middle;
  font-size: 16px;
  font-weight: 600;
  border: none;
  transition: .6s ease;
}

.invite-btn:hover {
  right: 2px;
  top: 2px;
  bottom: 2px;
  border-radius: 8px;
}

.input-container input:placeholder-shown ~ .invite-btn {
  pointer-events: none;
  background-color: gray;
  opacity: 0.5;
}


`

