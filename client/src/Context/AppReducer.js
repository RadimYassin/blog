export default (state,action)=> {

    switch (action.type) {
      
      case "Fetch_Data":
            return {...state,postes:action.payload}

       default: return state;
          
    }
   }