import React from "react"
import {connect} from "react-redux"
import logo from "../../Assets/loginimage.png"
import feedbacklogo from "../../Assets/feedback.png"
class FeedbackForm extends React.Component
{

  state={
    errors:{},
    fields:{name:"", feedback:""}
  }
  
  handleValidation=()=>{
    let fields = this.state.fields;
    let errors=this.state.errors;
    let formIsValid=true;
    
    if(!fields["name"]){
      formIsValid = false;
      errors["name"] = "Cannot be empty";
      }
    else
    {
      if(typeof fields["name"] !== "undefined"){
        if(!fields["name"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["name"] = "Only letters";
        }
        else
          errors["name"] = "";        
      }
    }
    if(!fields["feedback"]){
      formIsValid = false;
      errors["feedback"] = "Cannot be empty";
      }
    else
    errors["feedback"] = ""
    this.setState({errors: errors});
    return formIsValid;
  }

  handleSubmit=(event)=>
  {
    event.preventDefault();
    if(this.handleValidation()){
      let fields = this.state.fields;
      let item=[{name:fields["name"], feedback:fields["feedback"]}]
      this.props.handleSubmit(item);
      this.props.history.push("/Posted")
    }
  }

  togglePopup = (index) => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  handleChange(field, e){         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }
  render() {
    return (      
      <div className="form container">
        <img src={feedbacklogo} alt="Logo"  className="logo"/> 
        <div className="align">
        <form  onSubmit={(event)=>this.handleSubmit(event)}>
          <br/>
          <img src={logo} alt="Logo"  className="image"/> 
          <div className="input-field">
            <label> Name</label>
            <br/>
            <input type="text" name="name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}  />
            <span style={{color: "red"}}>{this.state.errors["name"]}</span>
           </div>
          <div className="input-field">
            <label htmlFor="content">Feedback</label>
            <br/>
            <br/>
            <textarea className="textarea" name="feedback" onChange={this.handleChange.bind(this, "feedback")} value={this.state.fields["feedback"]} ></textarea>
            <span style={{color: "red"}}>{this.state.errors["feedback"]}</span>
           </div>
          <div className="input-field">
            <br/><br/>
            <button className="btn green lighten-6">Submit</button>
          </div>
        </form>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    handleSubmit:(item)=>
    {
      dispatch({type:"ADD-FEEDBACK", value:item})

    }
  }
}

export default connect(null,mapDispatchToProps )(FeedbackForm);