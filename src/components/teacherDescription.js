import React from 'react'

const TeacherDescription = ({avatar, description}) => {
  return (
    <div className='container' >
      <div className="row">
        <img className='col s3 responsive-img' src={avatar} alt=''/>
        <p className='flow-text' >{description} </p>
      </div>
    </div>
  )
}

export default TeacherDescription