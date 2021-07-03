import React from 'react'
import Invoices_Expenses from './Invoices_Expenses'
import Bargraph from './Bargraph'
import Dashboard_bottom from './Dashboard_bottom'

function Dashboard_data() {
    return (
        <div className="dash_data">
            <Invoices_Expenses/>
            <Bargraph/>
            <Dashboard_bottom/> 
        </div>
    )
}

export default Dashboard_data
