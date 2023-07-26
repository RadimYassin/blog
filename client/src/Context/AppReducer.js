export default (state,action)=> {

    switch (action.type) {
      
      case "Fetch_Data":
            return {...state,posts:action.payload,loading:false,error:""}
            
      case "Fetch_Error":
            return {...state,posts:[],loading:false,error:action.message}
       default: return state;
          
    }
   }