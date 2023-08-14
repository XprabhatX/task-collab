import React from 'react'

import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul>
            <img src="https://iili.io/HDCJZdX.png" alt="company logo" />
            {/* <li className='active-li cursor-pointer'>Dashboard</li>
            <li>Projects</li>
            <li>My Task</li> */}

            <NavLink 
              to="/"
              className={({ isActive }) => isActive ? 'active-li cursor-pointer' : ''}
            >
              Dashboard
            </NavLink>

            <NavLink 
              to="/projects"
              className={({ isActive }) => isActive ? 'active-li cursor-pointer' : ''}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/mytask"
              className={({ isActive }) => isActive ? 'active-li cursor-pointer' : ''}
            >
              My Task
            </NavLink>
        </ul>
    </div>
  )
}

export default Sidebar