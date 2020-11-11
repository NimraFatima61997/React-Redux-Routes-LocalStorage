import React from "react"
import FeedbackDetail from "./FeedbackDetail"
import "./FeedbackListstyle.css"
export default class FeedbackList extends React.Component
{
  state={
    selected:false
}
feedbackDetail=(value)=>this.setState({selected:value})

  render(){
    return( 
      <div className="FeedbackList container">
        <div className="row">
          <div className="column">
            <div className="card z-depth-0 grey lighten-4 project-summary"  onMouseOver={()=>this.feedbackDetail(true)} onMouseLeave={()=>this.feedbackDetail(false)}>
              <div className="list-item">
                <div className="card-content black-text text-darken-3">
                  <div className="card-title"><h5>{this.props.name}</h5></div>
                  <p className="ellipse">{this.props.feedback}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail">{this.state.selected ? <FeedbackDetail {...this.props}/>:<div className={"hide"}/>}</div>
      </div>
    );
  }
}