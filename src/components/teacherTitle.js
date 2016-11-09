import React from 'react'
import {Link} from 'react-router'

const TeacherTitle = ({name}) => {
  return(
    <div className='section red lighten-2' >
      <div className="row">
        <Link to='/' className='flow-text white-text'>Curso de React.js</Link>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s12 m9">
            <h1 className='header center-on-small-only grey-text text-lighten-5'>{name}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherTitle