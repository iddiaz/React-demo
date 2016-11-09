import React, { PropTypes } from 'react'
import {Link} from 'react-router'

const Card = ({avatar, name, description, id}) => {

  return (
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-image">
          <img src={avatar} alt={`foto ${name}`} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <h5>{name}</h5>
            <p>{description}</p>
          </div>
          <div className="card-action">
            <Link to={`/teacher/${id}`}>Ir a página de profesor</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

Card.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string
}