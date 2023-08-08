export default (state,action)=> {

    switch (action.type) {
      //fetch data
      case "Fetch_Data":
            return {...state,posts:action.payload,loading:false,error:""}
            
      case "Fetch_Error":
            return {...state,posts:[],loading:true,error:action.message}
      
      
      case "Fetch_Comment":
                  return {...state,Comment:action.payload}

      case "Add_Comment":
            return {...state,Comment:[...state.Comment,action.payload]}     
      case "delete_Comment":
                  return {...state,Comment:state.Comment.filter(item => item._id!==action.payload)}        
      default: return state;
          
    }
   }