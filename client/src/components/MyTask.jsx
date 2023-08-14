import React, { useState } from 'react'
import './mytask.css'
import Add from "../assets/add.svg"

function CurrTask({name, tags, hours, assignee}) {
  return (
    <div className='task-content'>
      <div>{name}</div>
      <div className='pro-tags'>
        {
          tags.map((tag, idx) => (
            <div className='pro-tag pro-tag-margin' key={idx}>{tag}</div>
          ))
        }
      </div>

      <div>{hours}</div>
      <div>{assignee}</div>
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

  function handleClick(task, setTask) {
    setTask([...task, {name: 'Task 3', tags: ['bug', 'uiux'], hours: 5, assignee: 'Ravi Kumar', due: '2021-08-01'}])
  }

  const columns = [
    {title: 'Todo', tasks: todo, "setTasks": setTodo},
    {title: 'In Progress', tasks: inProgress, "setTasks": setInProgress},
    {title: 'Review', tasks: review, "setTasks": setReview},
  ]

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

        {
          columns.map((item, idx) => (
            <div className='task-column' key={idx}>
              <div>
                <h1>{item.title}</h1>
                <span>
                  <img src={Add} alt="Add btn" className="add-btn" onClick={() => handleClick(item.tasks, item.setTasks)}/>
                </span>
              </div>

              <div className='task-child'>
                <div className='task-child-header'>
                  <div>Name</div>
                  <div>Tags</div>
                  <div>Hours</div>
                  <div>Assignee</div>
                </div>
                {
                  item.tasks.map((task, idx) => (
                    <CurrTask key={idx} name={task.name} tags={task.tags} hours={task.hours} assignee={task.assignee} due={task.due} />
                  ))
                }
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default MyTask