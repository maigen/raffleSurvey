/*global firebase*/
import React, { Component } from 'react';

class AmbIn extends Component {
  componentWillMount() {
    this.setState({
      activeItem: null,
      answers: [],
      entries: [],
      winners: [],
      displayData: { ticket: '', name: ''}
    });
  }
  
  render() {
    const clickableQuestions = [];
    const items = this.state.answers;
    
    this.props.questions.forEach((q, i) => {
      clickableQuestions.push(
      <div className={this.state.activeItem === i ? 'activeQuestion' : ''} key={`question${i+1}`} onClick={this.presentResponses.bind(this, q, i)}>
        {q}
        <ul className={this.state.activeItem === i ? 'activeAnswers': 'inactiveAnswers'}>
          {items}
        </ul>
      </div>);
    });
    
    return (
      <div>
        <h3>Amber's Admin</h3>
        <button onClick={this.selectWinner.bind(this)}>Draw A Winning Number</button>
        
        <div className="winners">
          <h4>{this.state.displayData.ticket}</h4>
          <p>{this.state.displayData.name}</p>
        </div>
        
        <div>
          <label>Get Responses</label>
          <div id="surveyQuestions">
            {clickableQuestions}
          </div>
          
        </div>
        
        <button onClick={this.resetSurvey.bind(this)} className="resetButton">Reset Raffle</button>
      </div>
    )
  }
  
  presentResponses(question, index) {
    firebase.database().ref('answers/' + question).once('value').then(snapshot => {
      const answerData = snapshot.val()
      if (answerData != null) {        
        const answers = Object.keys(answerData).reduce((acc, key, i) => {
          const answer = answerData[key];
          acc.push(<li className="listedAnswer" key={i+1}>{answer}</li>)
          return acc;
        }, []);
        
        this.setState({
          activeItem: index,
          answers
        });
      } //TODO: else case for a "no responses" at all? OR should that be handled case-by-case
    });
  }
  
  selectWinner() {
    let entries = this.state.entries;
    let winners = this.state.winners;
    let winner = '';
    let needWinner = true;
    const ender = {name: 'All tickets have been drawn.', ticket: 'Sorry!'};
        
    // for when data already retrieved from fb
    if (entries.length) {  
      // first check if all tickets drawn
      if (winners.length === entries.length) {
        needWinner = false;
        this.setState({
          displayData: ender
        });
      }
      
      // then attempt to draw random ticket
      while (needWinner) {
        winner = entries[Math.floor(Math.random() * entries.length)];
        if (winners.indexOf(winner.ticket) === -1) {
          //winner is valid as a NEW winner
          needWinner = false;
          winners.push(winner.ticket);
          console.log(winners);
          this.setState({
            winners,
            displayData: winner
          });
        }
      }
    } else {
      // first retrieval only
      firebase.database().ref('entries').once('value').then(snapshot => {
        const entryData = snapshot.val();
        entries = Object.keys(entryData).reduce((acc, key) => {
          const item = entryData[key];
          acc.push({name: item.name, ticket: item.ticket});
          return acc;
        }, []);
        winner = entries[Math.floor(Math.random() * entries.length)];
        this.setState({
          entries,
          winners: [winner.ticket],
          displayData: winner
        });
      });
    }
  }
  
  resetSurvey() {
    // TODO: handle questions clearing with same function as questions setting
    const fire = firebase.database();
    fire.ref('entries').set({});
    fire.ref('answers').set({});
  }
}

export default AmbIn;