import React from 'react'
import "./Sidebar.css"
import Sidebar_Head from './Sidebar_Head'
import Sidebar_nav from './Sidebar_nav'
import Sidebar_bottom from './Sidebar_bottom'

function Sidebar() {
    return (
        <div className="sidebar_body">
            <Sidebar_Head />
            <Sidebar_nav />
            <Sidebar_bottom />
        </div>
    )
}

export default Sidebar
