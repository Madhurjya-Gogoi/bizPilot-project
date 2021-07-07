import React, { useState, useEffect } from 'react';
import "./Dashboard_bottom.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from "axios"

function Dashboard_bottom() {
    const [incomeTax, setIncomeTax] = useState("")
    const [gst, setGst] = useState("")
    console.log(incomeTax, gst)


    const fetchData = async () => {
        const res = await axios.get("http://localhost:4000/incomeTax")
        setIncomeTax(res.data)
        const resp = await axios.get("http://localhost:4000/gst")
        setGst(resp.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="dashboard_bottom">
            <div >
                <div className="dashboard_bottom_header">
                    <h5>Income Tax</h5>
                    <button>View all <ArrowForwardIosIcon /></button>
                </div>
                <div className="dashboard_bottom_data">
                    <h5>Present Total sales</h5>
                    <button>{incomeTax[0]?.total_sales} <ArrowForwardIosIcon /></button>
                    <div className="small">
                        <small>Last income tax payment is Rs. 2,70,000 and paid on 31st May 2020
                            31 Jun is the next due datefor income tax payments
                        </small>
                    </div>
                </div>
                <div className="dashboard_bottom_data">
                    <h5>Present Total expense</h5>
                    <button>{incomeTax[0]?.total_expense} <ArrowForwardIosIcon /></button>
                </div>
                <div className="dashboard_bottom_data">
                    <h5>Projectd income tax (18 Jun)</h5>
                    <button>{incomeTax[0]?.income_tax} < ArrowForwardIosIcon /></button>
                    <div className="method">
                        <small>(Total Sales - Total expense) @30%</small>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <div className="dashboard_bottom_header">
                    <h5>GST</h5>
                    <button>View all <ArrowForwardIosIcon /></button>
                </div>
                <div className="dashboard_bottom_data">
                    <h5>Present Output tax</h5>
                    <button>{gst[0]?.output_tax} <ArrowForwardIosIcon /></button>
                    <div className="small">
                        <small>Last GST payment is Rs. 2,70,000 and paid on 31st May 2020
                            31 Jun 2021 is the next due date for GST payment
                        </small>
                    </div>
                </div>
                <div className="dashboard_bottom_data">
                    <h5>Present Input tax Credit</h5>
                    <button>{gst[0]?.input_tax_credit} <ArrowForwardIosIcon /></button>
                </div>
                <div className="dashboard_bottom_data">
                    <h5>Project GST (18 Jun)</h5>
                    <button>{gst[0]?.projected_gst} <ArrowForwardIosIcon /></button>
                </div>
            </div>

        </div>

    )
}

export default Dashboard_bottom;
