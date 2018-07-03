import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: [
        {
          title:"Business Website",
          category:"Web Design"
        },
        {
          title:"Socail App",
          category:"Moblile Development"
        },
        {
          title:"E Commerse",
          category:"Web Develepment"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        My App
        <Projects  projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
