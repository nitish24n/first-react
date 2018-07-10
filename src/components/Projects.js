import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        //console.log(<ProjectItem key={project.title} project={project} />);
        return (
          <ProjectItem key={project.title} project={project} />
        );
      });
    }

    //console.log(this.props);
    return (
      <div className="Projects">
        {projectItems}
        {console.log(projectItems[0])}
      </div>
    );
  }
}

export default Projects;
