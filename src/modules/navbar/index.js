import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
    <div>
      <h1 className='title'>Welcome to world of devs</h1>
      <ul className='nav'>
        <li>
          <NavLink exact to='/'>
          Home
        </NavLink>
        </li>
        <li>
          <NavLink to='/main'>
          Main
        </NavLink>
        </li>
      </ul>
    </div>
  )

export default Nav