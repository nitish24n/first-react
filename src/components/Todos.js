import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {

  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todos => {
        //console.log(project);
        //console.log(<ProjectItem key={project.title} project={project} />);
        return (
          <TodoItem key={todos.title} todos={todos} />
        );
      });
    }

    //console.log(this.props);
    return (
      <div className="Todos">
        <h3>To Do List</h3>
        {todoItems}
      </div>
    );
  }
}

//for validation of received datatypes
Todos.propTypes = {
  projects:PropTypes.array
}﻿

export default Todos;
