import React, {Component } from 'react';

class AddProject extends Component{
  static defaultProps ={
    categories:['Web Design','Web Development','Mobile Development']
  }

  render(){
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value="category">{category}</option>
    });

    return(
      <div>
        <h3>Add Project</h3>
        <form>
          <div>
            <label>Title &nbsp;</label>
            <input type="text" ref="title" />
          </div>
          <br/>
          <div>
            <label>Category &nbsp;</label>
            <select ref="category" >
              {categoryOptions}
            </select>
          </div>
          <br/>
        </form>
      </div>

    );

  }
}

export default AddProject;
