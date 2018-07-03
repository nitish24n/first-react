import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My App
        <Projects test="hello World !" />
      </div>
    );
  }
}

export default App;
