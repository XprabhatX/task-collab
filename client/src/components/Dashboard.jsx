import React from 'react'
import './dashboard.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './calendar.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        
        <div className="search-wrap">
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder='Search' />
            <span class="material-symbols-outlined">notifications</span>
            <span class="material-symbols-outlined">account_circle</span>
        </div>

        <div className="dash-grid">

            <div className="dash-col1">

                <div className="pro-card project-1">           
                    <div className="pro-head">
                        <div className="pro-logo">A</div>
                        <div className="pro-title">Project 1</div>
                        <div className="pro-icons">
                            <span class="material-symbols-outlined gl-icon" style={{color: 'yellow'}}>star</span>
                            <span class="material-symbols-outlined">more_vert</span>
                        </div>
                    </div>

                    <div className="pro-body">
                        <div className='pro-status'> medium </div>
                        <div className='pro-completion'>
                            Task Done: 25/50<br/>
                            <div className="pro-bar">
                                <hr className='pro-bar-done'/><hr className='pro-bar-rest' />
                            </div>
                        </div>
                        <div className="pro-tags">
                            <div className="pro-tag">UI/UX</div>
                            <div className="pro-tag">Figma</div>
                        </div>
                        <div className="pro-users"></div>
                        <div className="pro-duedate"> due date: 20 August</div>
                    </div>
                </div>

                <div className="pro-card project-2">
                    <div className="pro-head">
                        <div className="pro-logo">B</div>
                        <div className="pro-title">Project 2</div>
                        <div className="pro-icons">
                            <span class="material-symbols-outlined gl-icon" style={{color: 'yellow'}}>star</span>
                            <span class="material-symbols-outlined">more_vert</span>
                        </div>
                    </div>

                    <div className="pro-body">
                        <div className='pro-status'> high </div>
                        <div className='pro-completion'>
                            Task Done: 10/50<br/>
                            <div className="pro-bar">
                                <hr className='pro-bar-done'/><hr className='pro-bar-rest' />
                            </div>
                        </div>
                        <div className="pro-tags">
                            <div className="pro-tag">Frontend</div>
                            <div className="pro-tag">React</div>
                        </div>
                        <div className="pro-users"></div>
                        <div className="pro-duedate"> due date: 18 August</div>
                    </div>
                </div>
            </div>

            <div className="dash-col2">

                <div className="task-glimpse">
                    <h3>My Tasks (03)</h3>
                    <ul>
                        <li>
                            <div className="gl-sno">01</div>
                            <div className="gl-title">Create wireframe</div>
                            <span class="material-symbols-outlined">check_circle</span>
                        </li>
                        <hr />
                        <li>
                            <div className="gl-sno">02</div>
                            <div className="gl-title gl-done">Logo Design</div>
                            <span class="material-symbols-outlined gl-icon">check_circle</span>
                        </li>
                        <hr />
                        <li>
                            <div className="gl-sno">03</div>
                            <div className="gl-title">Dashboard Design</div>
                            <span class="material-symbols-outlined">check_circle</span>
                        </li>
                        <hr />
                        <li>
                            <div className="gl-sno">04</div>
                            <div className="gl-title gl-done">Dummy Text</div>
                            <span class="material-symbols-outlined gl-icon">check_circle</span>
                        </li>
                        <hr />
                        <li>
                            <div className="gl-sno">05</div>
                            <div className="gl-title">Alignment</div>
                            <span class="material-symbols-outlined">check_circle</span>
                        </li>
                        <hr />
                    </ul>
                </div>


            </div>

            <div className="dash-col3">
                
                <Calendar />
                
            </div>

        </div>

    </div>
  )
}

export default Dashboard