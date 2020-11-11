import React from "react"
import {connect} from "react-redux"

import manager from "../../Assets/manager.jpeg"
import feedbacklogo from "../../Assets/feedback.png"

class Signin extends React.Component
{
  state={
    Submitform:false,
    error:""

  }
  handleSubmit=(event)=>{
		event.preventDefault();
    this.setState(event.target.email.value==="manager@gmail.com" && event.target.password.value==="123456" ? (this.props.history.push('/FeedbackList') , this.props.Login() ): {error:"Invalid Email or Password"})  
  }

  render() {

    return (
      <div className="form container">
        <img src={feedbacklogo} alt="Logo"  className="logo"/> 
        <div className="align">
        <form onSubmit={event=>this.handleSubmit(event)}>
         <br/> <br/>
          <img src={manager} alt="Logo"  className="image"/> 
          <div className="input-field">
            <label> Email Address</label>
            <br/>
            <input type="email" name="email"   />
            </div>
          <div className="input-field">
          <label>Password</label>
          <br/>
              <input type="password" name="password"   />
          </div>
          <span style={{color: "red"}}>{this.state.error}</span>
          <br/><br/>
          <div className="input-field">
            <button className="btn green lighten-6">Login</button>
          </div>
        </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
	return {
		Login:()=>
		{
			dispatch({type:"LOGIN"})
		}
	}
}
const mapStateToProps=(state)=>{
	return {
		manager: state.auth.login
	}
}
  
  export default connect(mapStateToProps,mapDispatchToProps )(Signin);