import { styled } from "styled-components";

export const Container = styled.div`

width:100%;
position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
.form-content{
    margin-top:9em;
    display:flex;
justify-content:center;
align-items:center;
    width:100%;
    padding:20px 0px;

}
  
     




`


export const Form=styled.form`
   width:50%;


   
    
        
             .input {
            position: relative;
            width:100%;
            border: none;
            box-shadow: 0px 1.5px 0px 0px #858585;
            padding: .5rem;
            transition: all 200ms ease-in-out;
            opacity: .8;
            }

            .input-box {
            display: flex;
            flex-direction: column;
            margin:10px 0px;
            }

            .input-label {
            font-size: 1.5rem;
            font-weight: bold;
            color: #858585;
            margin-bottom: 4px;
            margin-left: 1px;
            }

            .input-helper {
            color: #858585;
            font-size: 1rem;
            margin-top: 6px;
            margin-left: 1px;
            visibility: hidden;
            transform: translateY(-.5rem);
            transition: all 100ms linear;
            z-index: -1;
            }

            .input::placeholder {
            color: rgb(145, 145, 145);
            font-size: 1rem;
            }

            .input::after {
            content: attr(placeholder);
            position: absolute;
            color: #161616;
            top: 0;
            left: 0;
            }

            .input:focus {
            border: none;
            box-shadow: 0px 1.5px 0px 0px #72E985;
            outline: none;
            }

            .input:focus + .input-helper {
            visibility: visible;
            transform: translateY(0rem);
            }

            .input:focus::placeholder {
            visibility: hidden;
            }
            .input-btn{
                display: flex;
            flex-direction: column;
            margin:20px 0px;
            }
            .buttonCreate{
                background-image: linear-gradient(-180deg, #37AEE2 0%, #1E96C8 100%);
                border-radius: .5rem;
                box-sizing: border-box;
                color: #FFFFFF;
                display: flex;
                font-size: 16px;
                justify-content: center;
                padding: 1rem 1.75rem;
                text-decoration: none;
                width: 100%;
                border: 0;
                cursor: pointer;
                user-select: none;
                -webkit-user-select: none;
                touch-action: manipulation;
            }
            .buttonCreate:hover {
                background-image: linear-gradient(-180deg, #1D95C9 0%, #17759C 100%);
                }
                @media  (max-width:767px){
      width:80%;
      
    }

`
