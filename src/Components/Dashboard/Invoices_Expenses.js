import React, { useState, useEffect } from 'react';
import "./Invoices_expenses.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from "axios"

function Invoices_Expenses() {
    const [data, setData] = useState("")
    const [expenses, setExpenses] = useState("")
    console.log(data, expenses)
  

    const getData = async() => {
        const res = await axios.get("http://localhost:4000/invoices")
        setData(res.data)

        const resp =await axios.get('http://localhost:4000/expenses')
        setExpenses(resp.data)

    }
    useEffect(() => {
        getData();
    }, [])

    console.log(data[0]?.total_invoice)

    return (
        <div className="invoice_expenses">
            <div className="invoice_item">
                <div className="invoice_header">
                    <h5>Invoices</h5>
                    <button>View all <ArrowForwardIosIcon /></button>
                    <small> <span style={{ color: "#9cdebf", fontWeight: "bold" }}>+0.5% </span>increse in number of invoices compared to March</small>
                </div>
                <div className="invoice_data">
                    <h5>Total Invoiced {data[0]?.total_invoice} </h5>
                    <button>{data[0]?.invoice_rupees} <ArrowForwardIosIcon /></button>
                </div>
                <div className="invoice_data">
                    <h5>Payments Received {data[0]?.payment_received}</h5>
                    <button>{data[0]?.payment_rupees}<ArrowForwardIosIcon /></button>
                </div>
                <div className="invoice_data">
                    <h5>Unpaid Sales Invoices {data[0]?.unpaid_invoice}</h5>
                    <button>{data[0]?.unpaid_rupees} <ArrowForwardIosIcon /></button>
                </div>
                <div className="invoice_data">
                    <h5>Overdue Sales Invoices {data[0]?.overdue_invoice}</h5>
                    <button>{data[0]?.overdue_rupees} <ArrowForwardIosIcon /></button>
                </div>
            </div>
            <hr />
            <div className="invoice_item">
                <div className="invoice_header">
                    <h5>Expenses</h5>
                    <button>View all <ArrowForwardIosIcon /></button>
                    <small><span style={{ color: "#ff0000", fontWeight: "bold" }}>+0.5% </span>increse in expenses compared to March</small>
                </div>
                <div className="invoice_data">
                    <h5>Total Recorded Expenses {expenses[0]?.total_expenses}</h5>
                    <button>{expenses[0]?.total_expenses_rupees} <ArrowForwardIosIcon /></button>
                </div>
                <div className="invoice_data">
                    <h5>Yet to be recorded/Uploaded</h5>
                    <button>{expenses[0]?.recorded_uploaded}<ArrowForwardIosIcon /></button>
                </div>
                <div className="invoice_data">
                    <h5>Payment Pending {data[0]?.payment_pending}</h5>
                    <button>{expenses[0]?.payment_pending_rupees} <ArrowForwardIosIcon /></button>
                </div>
                <div className="invoice_data">
                    <h5>Overdue Payment pending {expenses[0]?.overdue_pending}</h5>
                    <button>{expenses[0]?.overdue_payment_rupees} <ArrowForwardIosIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default Invoices_Expenses
