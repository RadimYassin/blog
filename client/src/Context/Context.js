import { createContext ,useState,useEffect,useReducer} from "react";
import AppReducer from './AppReducer'
import axios  from 'axios';
import { useData } from "../hooks/useData";

export const contextP=createContext()



const init ={
    posts:[],
    loading:true,
    error:"",
    user:null
}



export function AppProvider({children}) {
 
    const [state,dispatch]=useReducer(AppReducer,init)
  
    return(
        <contextP.Provider value={{...state,dispatch}}>
            {children}
        </contextP.Provider>
    )
}