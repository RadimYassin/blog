import { useContext } from "react"
import { context } from "../Context/authContext/authContext"

export const  useAuth=()=>{
const contextAuth=useContext(context)
    
    
    
    if(!contextAuth){
        throw Error("error in data context")
      }
    
      return contextAuth
    }
        