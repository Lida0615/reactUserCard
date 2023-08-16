import React from 'react'
import UserCard from '../../copmonents/UserCard/UserCard'
import './userCardPage.css'

const UserCArdPage = () => {
  return (
    <div className='UserCArdPage'>
          <UserCard name="Imran"/>
          <UserCard name="Islam"/>
          <UserCard name="Ahmed"/>
          <UserCard name="Magomed"/>
          <UserCard name="Zeinap"/>
          <UserCard name="Islam"/>
          <UserCard name="Lida"/>
    </div>
  )
}

export default UserCArdPage