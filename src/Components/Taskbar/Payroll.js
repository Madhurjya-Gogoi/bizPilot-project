import React from 'react'
import "./Payroll.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Payroll() {
    return (
        <div className="payroll_body">
            <div className="payroll_task">
                <div className="payroll_task_head">
                    <h5>Payroll</h5>
                </div>
                <div className="payroll_bottom">
                    <h5>28 Apr</h5>
                    <div className="payroll_sec">
                        <p>Submission of attendance</p>                      
                        <button>For APR</button>
                        <button className="btn">Click here to upload<ArrowForwardIosIcon className="arrow" /></button>
                    </div>
                    <h5>31 Apr</h5>
                    <div className="payroll_sec">
                        <p>Payroll processing</p>
                        <button>For MAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payroll
