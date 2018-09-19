import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {todos} from './todos.json';
console.log(todos);

class App extends Component {
  constructor(){
    //Super quiere decir que debe heredar toda
    //la funcionalidad del componente de react
    super();
    //Voy a crear el estado de este componente
    this.state = {
      title: 'Aplicacion de tareas',
      nTasks: 10
    }
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    {//Dentro de estas llaves interpretamos Javascript
                        this.state.title
                    } - {
                      this.state.nTasks
                    }                
                </a>
            </nav>
      </div>
    );
  }
}

export default App;
