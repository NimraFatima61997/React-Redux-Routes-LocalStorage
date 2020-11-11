import React from "react"
import "./FeedbackListstyle.css"
export default class FeedbackDetail extends React.Component
{
  render(){
    return( 
      <div className="FeedbackList-container">
          <div className="card z-depth-0 blue-grey lighten-5">
            <div className="card-content grey-text text-darken-3 z-depth-5">
              <p>{this.props.feedback}</p>
              <br/>
              <h6>Posted By: {this.props.name}</h6>
              
            </div>
          </div>
        </div>
    );
  }
}
