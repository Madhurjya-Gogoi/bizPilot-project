import React from "react";
import { Bar } from "react-chartjs-2";
import "./Bargraph.css";

function Bargraph() {   

   return (
        <div className="bar_body">
            <div className="bar_head">
                <h4>Sales and Expenses</h4>
                <button>Apr 2021-Mar 2022</button>
                <button>Filter by</button>
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
                            label: "# of Votes",
                            data: [
                                2000, 3000, 3008, 4647, 4747, 4747, 4353, 7363, 9393, 1094,
                                3839, 8383,
                            ],
                            barThickness: 20,
                            backgroundColor: [
                                "rgba(25, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                            ],
                            borderColor: [
                                "rgba(25, 90, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(275, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                            ],
                            borderWidth: 1,
                        },
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
