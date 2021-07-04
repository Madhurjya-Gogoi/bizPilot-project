import React from 'react'
import "./Gst_income.css"

function Gst_income() {
    return (
        <div className="gst_body">
            <div className="gst_task">
                <div className="gst_task_head">
                    <h5>GST and Income tax</h5>
                </div>
                <div className="gst_bottom">
                    <h5>10 Apr</h5>
                    <div className="gst_btn_sec">
                        <p>GST 1 return filing</p>
                        <button>For MAR</button>
                        <small>Due on 11 Apr</small>
                    </div>
                    <h5>14 Apr</h5>
                    <div className="gst_btn_sec">
                        <p>PE/ESI Payment</p>
                        <button>For MAR</button>
                        <small>Due on 15 Apr</small>
                    </div>
                    <h5>19 Apr</h5>
                    <div className="gst_btn_sec">
                        <p>GST 3B return filing</p>
                        <button>For MAR</button>
                        <small>Due on 20 Apr</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gst_income
