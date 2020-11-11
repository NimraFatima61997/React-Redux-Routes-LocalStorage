import React from "react"
import {connect} from "react-redux"
import FeedbackSummary from "./FeedbackSummary"
class FeedbackList extends React.Component
{
  render(){
    return(
      <div >
        {!this.props.items.length?<h5 className="list-name ">No Feedback</h5>:
          <>
            <h5 className="list-name">Feedback List</h5>
            <div className="list container " >
              {this.props.items.map((myList) =><FeedbackSummary {...myList}/>)}
            </div>
          </>
        }
      </div>
    );
  }
}

const mapStateToProps=(state)=>
{
  return{
   items:state.feedback.items
  }
}

export default connect(mapStateToProps,null )(FeedbackList);