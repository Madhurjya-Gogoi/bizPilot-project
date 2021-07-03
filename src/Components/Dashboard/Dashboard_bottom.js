import React from 'react';
import "./Dashboard_bottom.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Dashboard_bottom() {
    return (  
            <div className="dashboard_bottom">
                <div >
                    <div className="dashboard_bottom_header">
                        <h5>Income Tax</h5>
                        <button>View all <ArrowForwardIosIcon /></button>
                    </div>
                    <div className="dashboard_bottom_data">
                        <h5>Present Total sales</h5>
                        <button>Rs. 10,00,000 <ArrowForwardIosIcon /></button>
                        <div className="small">
                            <small>Last income tax payment is Rs. 2,70,000 and paid on 31st May 2020
                                31 Jun is the next due datefor income tax payments
                            </small>
                        </div>
                    </div>
                    <div className="dashboard_bottom_data">
                        <h5>Present Total expense</h5>
                        <button>Rs. 1,00,000 <ArrowForwardIosIcon /></button>
                    </div>
                    <div className="dashboard_bottom_data">
                        <h5>Projectd income tax (18 Jun)</h5>
                        <button>Rs. 2,70,000 <ArrowForwardIosIcon /></button>
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
                        <button>Rs. 10,80,000 <ArrowForwardIosIcon /></button>
                        <div className="small">
                            <small>Last GST payment is Rs. 2,70,000 and paid on 31st May 2020
                                31 Jun 2021 is the next due date for GST payment
                            </small>
                        </div>
                    </div>
                    <div className="dashboard_bottom_data">
                        <h5>Present Input tax Credit</h5>
                        <button>Rs. 40,000 <ArrowForwardIosIcon /></button>
                    </div>
                    <div className="dashboard_bottom_data">
                        <h5>Project GST (18 Jun)</h5>
                        <button>Rs. 1,40,000 <ArrowForwardIosIcon /></button>
                    </div>
                </div>

            </div>
  
    )
}

export default Dashboard_bottom;
