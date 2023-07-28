export default (state,action)=> {

    switch (action.type) {
      //fetch data
      case "Fetch_Data":
            return {...state,posts:action.payload,loading:false,error:""}
            
      case "Fetch_Error":
            return {...state,posts:[],loading:true,error:action.message}
      


      default: return state;
          
    }
   }