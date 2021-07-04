import React from 'react'
import "./Expenses.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Expenses() {
    return (
        <div className="exp_body">
        <div className="exp_task">
            <div className="exp_task_head">
                <h5>Expenses</h5>
            </div>
            <div className="exp_bottom">
                <h5>28 Apr</h5>
                <div className="exp_btn_sec">
                    <p>#PO 00001 (Rs 1,20,00)</p>
                    <button style={{ border: "1px solid red", color: "red" }}>Overdue</button>
                    <button className="btn">Mark as paid or make payment<ArrowForwardIosIcon className="arrow" /></button>
                </div>
                <h5>28 Apr</h5>
                <div className="exp_btn_sec">
                    <p>#PO 0101 (Rs 2000)</p>
                    <button className="btn1">Due this month</button>
                    <button className="btn">Mark as paid or make payment<ArrowForwardIosIcon className="arrow" /></button>
                </div>
                <h5>28 Apr</h5>
                <div className="exp_btn_sec">
                    <p>Reimbursement request</p>
                    <button>For MAR</button>
                    <button className="btn btn2">View<ArrowForwardIosIcon className="arrow" /></button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Expenses
