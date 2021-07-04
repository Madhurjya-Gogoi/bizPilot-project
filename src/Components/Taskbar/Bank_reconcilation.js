import React from 'react'
import "./Bank_reconcilation.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Bank_reconcilation() {
    return (
        <div className="bank_body">
            <div className="bank_task">
                <div className="bank_task_head">
                    <h5>Bank Reconcilation</h5>
                </div>
                <div className="bank_bottom">
                    <h5>01 Apr</h5>
                    <div className="btn_sec">
                        <p>Upload bank Statement</p>
                        <button style={{ border: "1px solid red", color: "red" }}>Pending</button>
                        <button>For MAR</button>
                        <button className="btn">Click here to upload bank statement<ArrowForwardIosIcon className="arrow" /></button>
                    </div>
                    <h5>03 Apr</h5>
                    <div className="btn_sec">
                        <p>Reconciling and Freezing transactions</p>
                        <button style={{ border: "1px solid red", color: "red" }}>Pending</button>
                        <button>For MAR</button>
                        <button className="btn">4 clarification requests,click here to sort<ArrowForwardIosIcon className="arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bank_reconcilation
