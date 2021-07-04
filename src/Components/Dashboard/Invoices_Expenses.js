import React, { useState } from 'react';
import "./Invoices_expenses.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Menu, MenuItem} from "@material-ui/core"

function Invoices_Expenses() {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="invoice_expenses">
            <div >
                <div className="invoice_header">
                    <h5>Invoices</h5>
                    <button>View all <ArrowForwardIosIcon /></button>
                    <small> <span style={{ color: "#9cdebf", fontWeight: "bold" }}>+0.5% </span>increse in number of invoices compared to March</small>
                </div>
                <div className="invoice_data">
                    <h5>Total Invoiced (10)</h5>
                    <button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Rs. 10,00000 <ArrowForwardIosIcon /></button>
                    <div>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Rs.10,4000</MenuItem>
                            <MenuItem onClick={handleClose}>Rs.10,8000</MenuItem>
                            <MenuItem onClick={handleClose}>Rs.10,5000</MenuItem>
                        </Menu>
                    </div>
                </div>
                <div className="invoice_data">
                    <h5>Payments Received(8)</h5>
                    <button >Rs. 8,00,000<ArrowForwardIosIcon /></button>
                </div>
                <div className="invoice_data">
                    <h5>Unpaid Sales Invoices (2)</h5>
                    <button>Rs. 2,00,000 <ArrowForwardIosIcon /></button>
                </div>
                <div className="invoice_data">
                    <h5>Overdue Sales Invoices (0)</h5>
                    <button>Rs. 0  <ArrowForwardIosIcon /></button>
                </div>
            </div>
            <hr />
            <div>
                <div className="invoice_header">
                    <h5>Expenses</h5>
                    <button>View all <ArrowForwardIosIcon /></button>
                    <small><span style={{ color: "#ff0000", fontWeight: "bold" }}>+0.5% </span>increse in expenses compared to March</small>
                </div>
                <div className="invoice_data">
                    <h5>Total Recorded Expenses (2)</h5>
                    <button>Rs. 10,00000 <ArrowForwardIosIcon /></button>
                </div>
                <div className="invoice_data">
                    <h5>Yet to be recorded/Uploaded</h5>
                    <button>12/14 <ArrowForwardIosIcon /></button>
                </div>
                <div className="invoice_data">
                    <h5>Payment Pending (2)</h5>
                    <button>Rs. 2,00,00 <ArrowForwardIosIcon /></button>
                </div>
                <div className="invoice_data">
                    <h5>Overdue Payment pending (1)</h5>
                    <button>Rs. 10,000 <ArrowForwardIosIcon /></button>
                </div>
            </div>

        </div>
    )
}

export default Invoices_Expenses
