const Initialstate={login:false}
const feedbackReduce = (state=Initialstate, action)=>{
  switch(action.type)
  {
    case "LOGIN":
      return state={login:true}
    case "LOGOUT": 
    return state={login:false} 
    default:   return state;
  }
}
export default feedbackReduce;
