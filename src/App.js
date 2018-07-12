import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import uuid from 'uuid';
import Todos from './components/Todos';
import './App.css';
import $ from 'jquery';



class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: [],
      todos:[]
    }
  }

  getToDos(){
    $.ajax({
      url : 'https://jsonplaceholder.typicode.com/todos',
      dataType : 'json',
      cache : false,
      success : function(data){

        this.setState({ todos: data}, function(){
          console.log(this.state);
        });

      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getProjects(){
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

  componentWillMount(){
    this.getProjects();
    this.getToDos();
  }

  componentDidMount(){
    this.getToDos();
  }

  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDeleteProjectItem(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects  onDelete={this.handleDeleteProjectItem.bind(this)} projects = {this.state.projects}/>
        <hr/>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
