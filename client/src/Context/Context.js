import { createContext ,useReducer} from "react";
import AppReducer from './AppReducer'


export const contextP=createContext()



const init ={
    posts:[],
    loading:true,
    error:"",
    Comment:[]
}



export function AppProvider({children}) {
 
    const [state,dispatch]=useReducer(AppReducer,init)

    return(
        <contextP.Provider value={{...state,dispatch}}>
            {children}
        </contextP.Provider>
    )
}