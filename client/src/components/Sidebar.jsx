import React from 'react'
import Projects from './Projects'
import MyTask from './MyTask'
import Dashboard from './Dashboard'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <img src="https://iili.io/HDCJZdX.png" alt="company logo" />
            <li className='active-li'>Dashboard<hr/></li>
            <li>Projects</li>
            <li>My Task</li>
        </ul>
    </div>
  )
}

export default Sidebar