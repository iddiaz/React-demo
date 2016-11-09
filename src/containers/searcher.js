//los contenedores son un aparte de mi aplicacion que son conscientes que existe algo llamado redux y que conectan la vista con mi aplicación
import React, {Component, PropTypes} from 'react'
import { SearchFilter, CardList } from '../components/'
//para utilizar las funciones mapStateToProps y mapDispatchToProps importamos connect 
import {connect} from 'react-redux'
import {filterTeachers} from '../actions/searcher'

class Searcher extends Component {

componentDidMount () {
  if(this.prps.filter) {
    this.props.onFilter({
      text: this.props.filter
    })
  }
}

  render() {
    return(
        <div>
          <SearchFilter filter={this.props.filter} onFilter={this.props.onFilter} />
          <div className='container'>
            <CardList teachers={this.props.teachers} />
          </div>
        </div>
    )
  }
}

Searcher.propTypes = {
  onFilter: PropTypes.func,
  teachers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string
  }))
}

//Ahora faltaria conectar el estado que me provee el store de redux a propiedades que mi contenedor es capaz de entender asi que faltaría implementar las funciones mapStateToProps y mapDispatchToProps 
const mapStateToProps = (state) => {
  return {
    ...ownProps.params,
    ...state.searcher
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: (filter) =>{
      dispatch(filterTeachers(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searcher)