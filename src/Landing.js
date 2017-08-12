import React, { Component } from 'react';
import { FormGroup, InputGroup, Radio} from 'react-bootstrap';

class Landing extends Component {
  componentWillMount() {
    this.setState({"isSurveyVisible": true});
  }
  
  render() {
    const btnTxt = "Get My Number";
    let surveyClass = this.state.isSurveyVisible ? "" : "extraForm";
    return (
      <div>
        <h3>Epicodus Alumni</h3>
        <h5>Get Your Raffle Ticket</h5>
        <FormGroup>
          <InputGroup>
            <label>Name</label>
            <input type="text" required="required" />
          </InputGroup>
          
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
          <button>{btnTxt}</button>
        </FormGroup>
      </div>
    )
  }
  
  toggleSurvey(surveyState) {  
    this.setState({"isSurveyVisible": surveyState});
  }
  
  
}

export default Landing;