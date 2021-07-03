import React from 'react'
import "./App.css"
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Components/Dashboard/Dashboard'


function App() {
    return (
        <div>
            <div className="app-body">
                <Sidebar />
                <Dashboard />
            </div>
        </div>
    )
}

export default App
