import React from 'react'
import './usercard.css'

const UserCard = ({name}) => {
  return (
    <div className='usercard'>
    <img src="" alt="" />
    <h2>{name}</h2>
    <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более</p>
    <a href="#">Github</a>
    </div>
  )
}

export default UserCard