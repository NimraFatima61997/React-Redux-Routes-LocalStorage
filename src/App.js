import React from "react"
import "./App.css"
import FeedbackForm from "./components/Feedback/FeedbackForm"
import FeedbackList from "./components/Feedback/FeedbackList"
import Navbar from "./components/Navbar"
import LoginForm from "./components/Auth/LoginForm"
import PopUp from "./components/Popup/PopUp"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component
{
  render(){
    return(
      <div>
       <Router>
        <div>
          <Navbar/>
          {/* {window.localStorage.clear()}
          {window.localStorage.removeItem("dataStore") }  */}
          <Switch>
            <Route path="/Posted" component={PopUp} />
            <Route exact path="/" component={FeedbackForm}/>
            <Route path="/Login" component={LoginForm} />
            <Route path="/FeedbackList" component={FeedbackList}/>
          </Switch> 
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
