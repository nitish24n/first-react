import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    //console.log(this.props);
    return (
      <li className="Todo">
        <strong>{this.props.todos.title}</strong>
      </li>
    );
  }
}

//for validation of received datatypes
TodoItem.propTypes = {
  todo:PropTypes.object,
}﻿


export default TodoItem;
