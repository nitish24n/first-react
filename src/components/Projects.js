import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {

  deleteProjectItem(id){
    this.props.onDelete(id);
  }


  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        //console.log(<ProjectItem key={project.title} project={project} />);
        return (
          <ProjectItem onDelete={this.deleteProjectItem.bind(this)} key={project.id} project={project} />
        );
      });
    }

    //console.log(this.props);
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

//for validation of received datatypes
Projects.propTypes = {
  projects:PropTypes.array,
  onDelete:PropTypes.func
}﻿

export default Projects;
