import teachers from '../data'
//creamos el reducer, un reducer es una funcion que recive un state y una accion es lo que controla el estado inicial y devuelve el otro estado
import * as types from '../actions/actionTypes'

const applyFilter = (name, filter) => {
  return name.toLowerCase().includes(filter.toLowerCase())
}

const searcher = (state = {teachers}, action) => {
  switch (action.type) {
    case types.FILTER:
      return {
        filter: action.payload.text,
        teachers: teachers.filter(t => applyFilter(t.name, action.payload.text))
      }
    default:
      return state;
  }
}


export default searcher


//el siguiente paso es conectar este reducer a mi aplicacion de react, para ello lo que tengo que hacer es crear un store, esto lo hacemos en el punto de entrada de la aplicación