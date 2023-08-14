import React, { useState } from 'react'
import './projects.css'
import Add from "../assets/add.svg"

function Projects() {
  const [working, setWorking] = useState([
    {logo: 'A', name: 'Google', due: '21:00', tags: ['bug', 'testing'], completed: 27, outof: 50},
    {logo: 'B', name: 'Facebook', due: '11:00', tags: ['bug', 'testing'], completed: 17, outof: 50},
  ])
  const [inProgress, setInProgress] = useState([
    {logo: 'P', name: 'Google', due: '21:00', tags: ['bug', 'testing'], completed: 27, outof: 50},
    {logo: 'H', name: 'Facebook', due: '11:00', tags: ['bug', 'testing'], completed: 37, outof: 50},
  ])
  const [completed, setCompleted] = useState([
    {logo: 'Z', name: 'Google', due: '21:00', tags: ['bug', 'testing'], completed: 50, outof: 50},
    {logo: 'C', name: 'Facebook', due: '11:00', tags: ['bug', 'testing'], completed: 50, outof: 50},
  ])

  return (
    <div className="projects">
        <div className="search-wrap">
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder='Search' />
            <span className="material-symbols-outlined">notifications</span>
            <span className="material-symbols-outlined">account_circle</span>
        </div>
      
      <div className='project-add-btn'>
        <div>
          <img src={Add} alt="Add btn" className="add-btn"/>
        </div>
      </div>

      <div className="container">
        
        <div className="project-column">
          <h1>Working</h1>

          {
            working.map((project, idx) => (
              <CurrProject key={idx} logo={project.logo} name={project.name} due={project.due} tags={project.tags} completed={project.completed} outof={project.outof} />
            ))
          }
        </div>
        
        <div className="project-column">
          <h1>In Progress</h1>

          {
            inProgress.map((project, idx) => (
              <CurrProject key={idx} logo={project.logo} name={project.name} due={project.due} tags={project.tags} completed={project.completed} outof={project.outof} />
            ))
          }
        </div>
        
        <div className="project-column">
            <h1>Completed</h1>

            {
            completed.map((project, idx) => (
              <CurrProject key={idx} logo={project.logo} name={project.name} due={project.due} tags={project.tags} completed={project.completed} outof={project.outof} />
            ))
          }
        </div>
      
      </div>
    </div>
  )
}

function CurrProject({ logo, name, due, tags, completed, outof }) {
  return (
    <div className="pro-card project-1">           
        <div className="pro-head">
            <div className="pro-logo">{logo}</div>
            <div className="pro-title">{name}</div>
            <span class="material-symbols-outlined">more_vert</span>
        </div>

        <div className="pro-body">
            <div className='flex-row'>
            {
              tags.map((tag, idx) => <div key={`tag-${idx}`} className='pro-status'>{tag}</div>)
            }
            </div>
            <div className='pro-completion'>
                Task Done: {completed}/{outof}<br/>
                <div className="pro-bar">
                    <hr className='pro-bar-done'/><hr className='pro-bar-rest' />
                </div>
            </div>
            <div className="pro-tags">
                <div className="pro-tag">UI/UX</div>
                <div className="pro-tag">Figma</div>
            </div>
            <div className="pro-users"></div>
            <div className="pro-duedate"> Due Date: {due}</div>
        </div>
    </div>
  )
}

export default Projects