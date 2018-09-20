import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor() {
    //Super quiere decir que debe heredar toda
    //la funcionalidad del componente de react
    super();
    //Voy a crear el estado de este componente
    this.state = {
      todos: todos
    }
    this.handleAddTodo= this.handleAddTodo.bind(this);
  }

  //Recibe una tarea por parametro y se la actualiza al todo de arriba
  handleAddTodo(todo){
    this.setState({
        todos:[...this.state.todos, todo] // UNo la tarea nueva a el arreglo de todo
    })
}

  render() {
    //ESto es un arreglo
    //Maps recorre uno a uno cada indice, me va a dar la tarea y el indice
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-hearder">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p> <mark>{todo.responsable}</mark></p>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="row mt-4">

          <div className="col-md-4 text-center">
            <img src={logo} className="App-logo" alt="logo" />
            <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
          </div>

          <div className="col-md-8">
            <div className="row">
              {todos}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
