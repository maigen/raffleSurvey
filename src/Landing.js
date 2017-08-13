import React, { Component } from 'react';
import { FormControl, ControlLabel, Radio } from 'react-bootstrap';

class Landing extends Component {
  componentWillMount() {
    this.setState({
      "answer": '',
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
        <div className="question-form">
        <ControlLabel>Name: </ControlLabel>
          <FormControl
            type="text"
            onChange={this.recordInfo.bind(this, "name")}
          />

          <Radio name="useCase" onClick={this.toggleSurvey.bind(this, true)} defaultChecked>
            I Want To Answer A Survey question
          </Radio>
          <Radio name="useCase" onClick={this.toggleSurvey.bind(this, false)}>
            I Just Need To Get My Ticket Number
          </Radio>

          <ControlLabel>{this.props.question}</ControlLabel>
          <FormControl
            className={surveyClass}
            componentClass="textarea"
            type="text"
            onChange={this.recordInfo.bind(this, "answer")}
          />
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

    if (this.state.isSurveyVisible && this.state.answer !== "") {
      console.log(this.state.name);
      console.log(this.props.question);
      console.log(this.state.answer);
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

    // rearrange cases to handle validation possibilities, maybe pop a message
  }


}

export default Landing;
