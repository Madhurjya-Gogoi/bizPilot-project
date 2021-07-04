import React from 'react'
import "./Taskbar.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Bank_reconcilation from './Bank_reconcilation'
import Gst_income from './Gst_income'
import Payroll from './Payroll'
import Expenses from './Expenses'

function Taskbar() {
    return (
        <div className="task_body">
            <div className="My_task">
                <div className="My_task_head">
                    <h5>My tasks</h5>
                    <h5 style={{ color: "#807e7e" }}>Advisor's tasks</h5>
                </div>
                <h5 style={{ color: "#807e7e" }}>ROC Compliances</h5>
                <div className="task_bottom">
                    <h5>01 Apr</h5>
                    <div className="btn_section">
                        <p>Payment pending for a bill</p>
                        <button style={{ border: "1px solid red", color: "red", borderRadius: "3px" }}>Pending</button>
                        <button>For MAR</button>
                        <button className="btn">Click here to view and specify payment<ArrowForwardIosIcon className="arrow" /></button>
                    </div>
                </div>
            </div>
            <Bank_reconcilation />
            <Gst_income />
            <Payroll />
            <Expenses />
        </div>
    )
}

export default Taskbar
