import React from "react";
import { Bar } from "react-chartjs-2";
import "./Bargraph.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function Bargraph() {
    return (
        <div className="bar_body">
            <div className="bar_head">
                <h4>Sales and Expenses</h4>
                <button className="left"><ArrowBackIosIcon />Apr 2021-Mar 2022 <ArrowForwardIosIcon /></button>
                <button className="right">Filter by <ExpandMoreIcon /></button>
            </div>
            <Bar
                width={700}
                height={400}
                data={{
                    labels: [
                        "April",
                        "May",
                        "June",
                        "july",
                        "Aug",
                        "Sept",
                        "oct",
                        "Nov",
                        "Dec",
                        "Jan",
                        "Feb",
                        "Mar"
                    ],
                    datasets: [
                        {
                            label: "Payroll Expenses",
                            data: ["250", "100", "200", "100", "150"],
                            barThickness: 20,
                            backgroundColor: ["#ffa700"],
                        },
                        {
                            label: "Total Sales before Taxes",
                            data: ["2500", "1000", "2000", "1000", "1500"],
                            barThickness: 20,
                            backgroundColor: ["#179387"],
                        },
                        // {
                        //     label: "Total Sales before Taxes",
                        //     data: ["250", "100", "200", "100", "150"],
                        //     barThickness: 20,
                        //     backgroundColor: "#fff9ad",                          
                        // },
                    ],

                }}
                options={{
                    scales: {
                        xAxes: {
                            grid: {
                                display: false,
                            },                 
                        },
                        yAxes: {
                            grid: {
                                display: false,
                            },                           
                        },
                    },
                }}
            />
        </div>
    );
}

export default Bargraph;
