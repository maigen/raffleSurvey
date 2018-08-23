/*global firebase*/
import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class AmbIn extends Component {
  componentWillMount() {
    this.setState({
      entries: [],
      winners: [],
      displayData: { ticket: '', name: ''}
    });
  }
  
  render() {
    const tabs = [];
    
    this.props.questions.forEach(function(q, i) {
      tabs.push(<Tab key={i+1} eventKey={i+1} title={q}></Tab>);
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
          {/* <label>Get Responses</label> */}
          <Tabs id="surveyQuestions">
            {tabs}
          </Tabs>
          
        </div>
      </div>
    )
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
}

export default AmbIn;