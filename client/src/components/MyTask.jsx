import React, { useState } from 'react'
import './mytask.css'
import Add from "../assets/add.svg"

function currTask({ key, name, tags, hours, assignee, due }) {
  return (
    <div className='task' key={key}>
      <span>{name}</span>
      <span>{tags}</span>

      <span>{hours}</span>
      <span>{assignee}</span>
    </div>
  )
}

function MyTask() {
  const [todo, setTodo] = useState([
    {name: 'Task 1', tags: ['tag1', 'tag2'], hours: 2, assignee: 'John Doe', due: '2021-05-01'},
    {name: 'Task 2', tags: ['tag1', 'tag2'], hours: 2, assignee: 'John Doe', due: '2021-05-01'},
  ])
  const [inProgress, setInProgress] = useState([
    {name: 'Task 1', tags: ['tag1', 'tag2'], hours: 2, assignee: 'John Doe', due: '2021-05-01'},
    {name: 'Task 2', tags: ['tag1', 'tag2'], hours: 2, assignee: 'John Doe', due: '2021-05-01'},
  ])
  const [review, setReview] = useState([])


  return (
    <div className='mytask'>
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

      <div className='task-container'>

        <div className='task-column'>
          <div>
            <h1>Todo</h1>
            <span>
              <img src={Add} alt="Add btn" className="add-btn"/>
            </span>
          </div>

          {
            todo.map((task, idx) => (
              <currTask key={idx} name={task.name} tags={task.tags} hours={task.hours} assignee={task.assignee} due={task.due} />
            ))
          }
        </div>

        <div className='task-column'>
          <div>
              <h1>In Progess</h1>
              <span>
                <img src={Add} alt="Add btn" className="add-btn"/>
              </span>
            </div>
        </div>

        <div className='task-column'>
          <div>
              <h1>Review</h1>
              <span>
                <img src={Add} alt="Add btn" className="add-btn"/>
              </span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default MyTask