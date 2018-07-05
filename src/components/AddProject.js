import React, {Component } from 'react';

class AddProject extends Component{
  static defaultProps ={
    categories:['Web Design','Web Development','Mobile Development']
  }

  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.refs.title.value===''){
      alert("Title is required ...");
    }else{
      this.setState({newProject:{

      }});
    }
  }

  render(){
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value="category">{category}</option>
    });

    return(
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
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
          <input type="submit" value="submit" />
        </form>
      </div>

    );

  }
}

export default AddProject;
