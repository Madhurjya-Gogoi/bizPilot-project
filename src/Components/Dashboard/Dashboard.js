import React from 'react'
import Dashboard_header from './Dashboard_header'
import Invoices_Expenses from './Invoices_Expenses'
import "./Dashboard.css"
import Bargraph from './Bargraph'

function Dashboard() {
    return (
        <div className="Dashboard_body">
          <Dashboard_header/>
          <div className="main_body">
            <Invoices_Expenses/>
            <Bargraph/>
          </div>
        </div>
    )
}

export default Dashboard
