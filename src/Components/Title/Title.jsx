import React from 'react'
import './Title.css'

function Title({title,desc}) {
  return (
    <div className='title '>
            <h1>{title}</h1>
            <p>{desc}</p>
    </div>
  )
}

export default Title