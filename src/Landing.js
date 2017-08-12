import React, { Component } from 'react';
import {
  FormControl,
  InputGroup,
  Radio
} from 'react-bootstrap';

class Landing extends Component {
  componentWillMount() {
    this.setState({
      "isSurveyVisible": true,
      "name": ''
    });
  }
  
  render() {
    const btnTxt = this.state.isSurveyVisible ? "Submit" : "Grab Number";
    let surveyClass = this.state.isSurveyVisible ? "" : "extraForm";
    return (
      <div>
        <h3>Epicodus Alumni</h3>
        <h5>Get Your Raffle Ticket</h5>
        <div>
          <FormControl
            type="text"
            label="name"
            onChange={this.recordInfo.bind(this, "name")}
          />
          
          <Radio onClick={this.toggleSurvey.bind(this, true)} defaultChecked>
            I Want To Answer A Survey question
          </Radio>
          <Radio onClick={this.toggleSurvey.bind(this, false)}>
            I Just Need To Get My Ticket Number
          </Radio>
          
          <InputGroup className={surveyClass}>
            <label>{this.props.question}</label>
            <textarea rows="5" cols="30" maxLength="1000" required="required"/>
          </InputGroup>
          <button onClick={this.sendRequest.bind(this)}>{btnTxt}</button>
        </div>
      </div>
    )
  }
  
  recordInfo(key, e) {
    this.setState({ [key]: e.target.value });
  }
  
  toggleSurvey(surveyState) {  
    this.setState({"isSurveyVisible": surveyState});
  }
  
  sendRequest() {
    if (this.state.name === "") {
      return;
    }
    
    if (this.state.isSurveyVisible) {
      console.log(this.state.name);
      // put survey answer into appropriate array
      // get the next ticket number and assign it to name in entrants
      // push ticket number into entries
      // make sure next user will get a new ticket number
    } else {
      // verify name exists in FB
        //(what if not???)
      // get ticket number for name
    }
    // route to Ticket with ticket number
  }
  
  
}

export default Landing;