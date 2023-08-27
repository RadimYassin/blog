export default (state,action)=> {

    switch (action.type) {
      //fetch data
      case "Fetch_Data":
            return {...state,posts:action.payload,loading:false,error:""}
            
      case "Fetch_Error":
            return {...state,posts:[],loading:true,error:action.message}
      
      case "Fetch_Post":
            return {...state,post:action.payload}
      
      case "Fetch_Comment":
                  return {...state,Comment:action.payload}

      case "Add_Comment":
            return {...state,Comment:[...state.Comment,action.payload]}     
      case "delete_Comment":
                  return {...state,Comment:state.Comment.filter(item => item._id!==action.payload)}   
      
      case "Add_likes":
            return {...state,posts:state.posts.map(item => {
                  if (item._id ==action.payload) {
                      
                        if(!item.likes.includes(action.user)){
                              item.likes.push(action.user)
                             }                  }
                  return item
               
            }
            )}
         
      case "UNlike":
                  return {...state,posts:state.posts.map(item => {
                        if (item._id ==action.payload) {

                   
                              if(item.likes.includes(action.user)){
                                     item.likes=item.likes.filter(item => item!==action.user)
                                   }     
                                
                        
                        }
                        return item
                     
                  }
                  )}
                    
      
      default: return state;
          
    }
   }