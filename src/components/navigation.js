import React, { Component } from 'react';

class Navigation extends Component {
    //Todos los componentes tienen un método llamado render
    //porque es el que pinta las cosas en el navegardor, el html
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">Tareas</a>
            </nav>
        )
    }
}

export default Navigation;