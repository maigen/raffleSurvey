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
    const surveyClass = this.state.isSurveyVisible ? "" : "extraForm";
    const questionText = this.state.isSurveyVisible ? this.props.question : "";
    
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

          <ControlLabel>{questionText}</ControlLabel>
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
    const name = this.state.name;
    const answer = this.state.answer;
    const question = this.props.question;
    const fire = firebase.database();
    
    console.log(question)
    if (name === "") {
      return;
    }

    if (this.state.isSurveyVisible) {
      if(this.state.answer === "") {
        return;
      }

      fire.ref('nextTicket').once('value').then(function(snapshot) {
        const myTicket = snapshot.val() || 600000;
        fire.ref('nextTicket').set(myTicket + 7)
        
        const entriesRef = fire.ref().child('entries').push().key;
        fire.ref('entries').child(entriesRef).set({
          name,
          ticket: myTicket
        });
        
        const answersRef = fire.ref().child('answers/' + question).push().key;
        fire.ref('answers/' + question).child(answersRef).set(answer);
      });
      
      
      // write: answer pushed into responses object where answer is key for array
      // firebase.data.ref('answers[this.props.question]').push(this.state.answer);
          //console.log(this.props.question);
          //console.log(this.state.answer);
      
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
