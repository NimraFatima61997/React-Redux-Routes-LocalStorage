import React from "react"
import {connect} from "react-redux"
import { BrowserRouter as Nav, Link } from "react-router-dom";

class Navbar extends React.Component
{
  state={
    updateNavbar:false
  }
  LoginLogout=(action)=>{ 
    this.setState(action==="login"? ({updateNavbar : !this.state.updateNavbar}): this.props.Logout())
  }
  render(){
    return(
      <nav className="nav nav-wrapper grey darken-4">
        <div className="container">
          <Link  to="/" className="brand-logo"  onClick={()=> this.LoginLogout("logout")}>Feedback Form</Link>
          <ul className="right">
            {this.props.login ? <li><Link  to="/"  onClick={()=> this.LoginLogout("logout")}>Log Out</Link></li>:<li><Link  to="/Login"  onClick={()=>this.LoginLogout("login")}>Login</Link></li>}
          </ul>
        </div>
      </nav>
    )
  }
}


const mapStateToProps=(state)=>
{
  return{
   login: state.auth.login
  }
}
const mapDispatchToProps=(dispatch)=>
{
  return{
    Logout:()=>{
      dispatch({type : "LOGOUT"})
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);