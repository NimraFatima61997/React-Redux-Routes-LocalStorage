const dataStore = JSON.parse(localStorage.getItem('dataStore'));
var InitialState
if (dataStore!=null)
{
   InitialState ={
      items: dataStore
   }
}
else
   InitialState ={
      items: []
   }
export default InitialState;