import React, { Component } from 'react';

class ProjectItem extends Component {

  deleteProject(){
    console.log("test")
  }

  render() {
    //console.log(this.props);
    return (
      <li className="Projects">
        <strong>{this.props.project.title}</strong> : {this.props.project.category}  <a href="#" onClick={this.deleteProject.bind(this)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
