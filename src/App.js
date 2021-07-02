import React from 'react'
import "./App.css"
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Components/Dashboard/Dashboard'
import Taskbar from './Components/Taskbar/Taskbar'

function App() {
    return (
        <div className="app-body">
            <Sidebar />
            <Dashboard/>
            <Taskbar />
        </div>
    )
}

export default App
