import React from 'react'
import Card from './card'


const CardList = ({teachers}) => {
  return (
    <div className='section' >
      {/**Recibimos todo el array de data/index */}
      {teachers.map(teachers => <Card {...teachers} key={teachers.id} />)}
    </div>
  )
}

export default CardList