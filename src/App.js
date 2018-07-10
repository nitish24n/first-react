import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import uuid from 'uuid';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({
      projects:[
        {
          id:uuid.v4(),
          title:"Business Website",
          category:"Web Design"
        },
        {
          id:uuid.v4(),
          title:"Socail App",
          category:"Moblile Development"
        },
        {
          id:uuid.v4(),
          title:"E Commerse",
          category:"Web Develepment"
        }
      ]
    });
  }

  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects  projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
