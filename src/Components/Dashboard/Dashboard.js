import React from 'react'
import Dashboard_header from './Dashboard_header'
import "./Dashboard.css"
import Taskbar from '../Taskbar/Taskbar'
import Dashboard_data from './Dashboard_data'

function Dashboard() {
    return (
        <div className="Dashboard_body">
          <Dashboard_header/>
          <div className="main_body">
            <Dashboard_data/>
            <Taskbar/>
          </div>         
        </div>
    )
}

export default Dashboard
