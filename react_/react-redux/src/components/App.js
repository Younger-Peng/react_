import React, { Component } from 'react';
import CounterContainer from './CounterContainer'
import SummaryContainer from './SummaryContainer'

class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer caption="First"/>
        <CounterContainer caption="Second"/>
        <CounterContainer caption="Third"/>
        <hr/>
        <SummaryContainer />
      </div>
    );
  }
}

export default App;
