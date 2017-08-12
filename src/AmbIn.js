import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class AmbIn extends Component {
  render() {
    const tabs = [];
    
    this.props.questions.forEach(function(q, i) {
      tabs.push(<Tab key={i+1} eventKey={i+1} title={q}></Tab>);
    });
    
    return (
      <div>
        <h3>Amber's Admin</h3>
        <button>Draw A Winning Number</button>
        
        <div>
          <label>Get Responses</label>
          <Tabs id="surveyQuestions">
            {tabs}
          </Tabs>
          
        </div>
      </div>
    )
  }
}

export default AmbIn;