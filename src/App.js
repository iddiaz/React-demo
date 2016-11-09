import React, { Component } from 'react';
// import logo from './logo.svg';

// import teachers from './data'  --> eliminamos esto para que no lo haga mi aplicación, y hacemos que lo haga el reducer
import './App.css';

//Creando el store para conectar mi reducer con la aplicación
import { createStore } from 'redux'
import { root } from './reducers'
import { Provider } from 'react-redux'
import {Searcher, Teacher} from './containers'


//Para usar react-router... Router= contenedor para todas las rutas de nuestra SPA APP,  Route= es un obejto que me permite definir diferentes rutas,  browserHistory = utilidad que me permite conervar el historial del navegador y poder navegar a través de el para alante para atrás etc...
import {Router, Route, browserHistory} from 'react-router'

//Trabajando con redux, las rutas siempre siempre se crean dentro del Provider. y las rutas es un children de este provider

//creamos el store a partir del reducer
let store = createStore(root)


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router history={browserHistory}>
        {/**Nuestra app la envolvemos dentro de nuestro router creando una ruta para cada path */}
          <Route path='/' component={Searcher} />
          <Route path='/teacher/:id' component={Teacher} />
        </Router>       
      </Provider>
    )
  }
}

export default App;
