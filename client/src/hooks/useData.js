import { useContext } from "react";
import { contextP } from "../Context/Context";

 
export const  useData=()=>{
const context =useContext(contextP)



if(!context){
    throw Error("error in auth context")
  }

  return context
}
    
