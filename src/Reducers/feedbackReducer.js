import Initialstate from "./initialState";
const feedbackReduce = (state=Initialstate, action)=>{
  switch(action.type)
  {
    case "Show-Feedback":
      return state;
    case "ADD-FEEDBACK":
    var data=JSON.parse(localStorage.getItem('dataStore'))
    data?localStorage.setItem('dataStore', JSON.stringify(data.concat(action.value))):localStorage.setItem('dataStore', JSON.stringify(action.value))
    return {
      ...state,
      items:
        state.items.concat(action.value)
    } 
    default: return state;  
  }
}
export default feedbackReduce;
