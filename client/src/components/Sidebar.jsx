import React from 'react'

import { NavLink } from 'react-router-dom'

function Sidebar() {
  const nav = [
    {
      "link": "/", "name": "Dashboard"
    },
    {
      "link": "/projects", "name": "Projects"
    },
    {
      "link": "/mytask","name": "My Task"
    }
  ]
  
  return (
    <div className='sidebar'>
        <ul>
            <img src="https://iili.io/HDCJZdX.png" alt="company logo" />
            {/* <li className='active-li cursor-pointer'>Dashboard</li>
            <li>Projects</li>
            <li>My Task</li> */}

            {
              nav.map((item, idx) => (
                <NavLink 
                  key={idx}
                  to={item.link}
                  className={({ isActive }) => isActive ? 'active-li cursor-pointer' : ''}
                >
                  {item.name}
                </NavLink>
              ))
            }
        </ul>
    </div>
  )
}

export default Sidebar