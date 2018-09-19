import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
   
  }
  //Cada vez que yo haga un cambio
  handleInput(){
    alert"escribiendo");
  }


  render() {
    return (
      <div className="card">
        <form className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              placeholder="Responsible"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;