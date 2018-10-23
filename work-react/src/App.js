import React, { Component } from 'react';

import './App.css';

const Intro =(props)=>(
    <p className = "App-intro">
    This works from here
    </p>
)

class App extends Component {
  render() {
    return (
        <div className="App">
        <Intro />
        </div>

    );
  }
}

export default App;
