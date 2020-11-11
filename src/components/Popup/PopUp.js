import React, { Component } from "react";
import "./PopUp.css";
import {connect} from "react-redux"
class PopUp extends Component {
  render() {
    return ( 
      <div className="popup  z-depth-5">
        <span className='close'  onClick={()=>this.props.history.push('/')}>&times;</span>  
        <div className='popup_inner' >
          <div className={"center"}>
            <h5>Thank you</h5>
            <br></br>
            <h6 >Your Response has been submitted</h6>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(PopUp)