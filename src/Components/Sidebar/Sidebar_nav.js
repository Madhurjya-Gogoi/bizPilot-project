import React from 'react'
import "./Sidebar_nav.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Sidebar_nav() {
    return (
        <div className="sidebar_nav">
            <nav class="main-nav">
                <ul>
                    <li><a class="active" href="#"><FiberManualRecordIcon />Dashboard</a></li>
                    <li><a class="cool-link" href="#">Invoices</a></li>
                    <li><a class="cool-link" href="#">Banking</a></li>
                    <li><a class="cool-link" href="#">Expenses</a></li>
                    <li><a class="cool-link" href="#">Payroll</a></li>
                    <li><a class="cool-link" href="#">Reports</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar_nav
