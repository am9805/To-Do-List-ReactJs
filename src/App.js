import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
