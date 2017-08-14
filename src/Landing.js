/*global firebase*/
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
            I Want To Answer A Survey Question
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
      // read: nextTicket
      firebase.database().ref('nextTicket').once('value').then(function(snapshot) {
        let myTicket = snapshot.val() || 600000;
        console.log('My Ticket: ', myTicket);
        
        firebase.database().ref().set({
          nextTicket: myTicket + 7
        })
        // firebase.database().ref('entries').push(myTicket);
      });
            
      // write: newTicket pushed into "array" of entries
      // write: name/newTicket together as object into array of entrants
          console.log(this.state.name);
          //potential for overwriting
      // write: answer pushed into responses object where answer is key for array
          console.log(this.props.question);
          console.log(this.state.answer);
      
      } else {
      // verify name exists in FB
        //(what if not???)
      // get ticket number for name
    }
    // route to Ticket with ticket number

    // rearrange cases to handle validation possibilities
      // maybe pop a message or change border colors
  }


}

export default Landing;
