import { createContext ,useReducer} from "react";
import AppReducer from './AppReducer'
import axios from "axios";

export const contextP=createContext()



const init ={
    posts:[],
    post:{},
    loading:true,
    error:"",
    Comment:[],
}



export function AppProvider({children}) {
 
    const [state,dispatch]=useReducer(AppReducer,init)

    const handelLiked = async (id,user,access_token) => {
        dispatch({ type: "Add_likes", payload: id, user: user })
    
        try {
            const res = await axios.post("http://localhost:4000/api/post/" + id + "/like", {}, {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                }
            })
    
    
        } catch (error) {
            console.log(error);
        }
    
    }

    const handelunLiked = async (id,user,access_token) => {
        dispatch({ type: "UNlike", payload: id, user: user })

        try {
            const res = await axios.post("http://localhost:4000/api/post/" + id + "/unlike", {}, {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                }
                
            })



        } catch (error) {
            console.log(error);
        }

    }
    return(
        <contextP.Provider value={{...state,dispatch,handelLiked,handelunLiked}} >
            {children}
        </contextP.Provider>
    )
}