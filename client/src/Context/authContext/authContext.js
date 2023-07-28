import { createContext ,useState,useEffect,useReducer} from "react";
import AppReducer from './AppReducer'


export const context=createContext()



const init ={
   user:null
}

// export function AppReducer(state,action) {
//     switch (action.type) {
//         case "add":
            
    
//         default:return state
//     }
// }

export function AppProviderAuth({children}) {
 
    const [state,dispatch]=useReducer(AppReducer,init)

    useEffect(() => {
        const user=localStorage.getItem("userId")

        if (user) {
           dispatch({type:"LOGIN",payload:user})
        }
       },[]);
  
    return(
        <context.Provider value={{...state,dispatch}}>
            {children}
        </context.Provider>
    )
}