import React from 'react'
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react'

const TotalCharts = () => {
    const [chartData, setChartData] = useState({});


    const chart = () => {
        // declared to store the data after fetching

        let dates = [];
        let casesData = [];
        let deathData = [];
        let recoveredData = [];

        //fetch from api
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
            .then(res => res.json())
            .then(data => {
                for (const dataObj in data.cases) {
                    // getting the cases date for the x-axis
                    dates.push(dataObj)
                    // getting the cases data for the y-axis
                    casesData.push(parseInt(data.cases[dataObj]))
                }
                for (const death in data.deaths) {
                    // getting the recovered data
                    deathData.push(parseInt(data.deaths[death]))

                }
                for (const recover in data.deaths) {
                    // getting the recovered data
                    recoveredData.push(parseInt(data.recovered[recover]))
                }
                setChartData({
                    labels: dates,
                    datasets: [
                        {
                            label: "Cases",
                            data: casesData,
                            backgroundColor: ["rgba(0,0,255)"],
                            borderWidth: 1
                        },
                        {
                            label: "Deaths",
                            data: deathData,
                            backgroundColor: ["rgba(255,0,0)"],
                            borderWidth: 1
                        },
                        {
                            label: "Recovered",
                            data: recoveredData,
                            backgroundColor: ["rgba(0,255,0)"],
                        },
                    ]
                });
            })
            .catch(err => {
                console.log(err);
            });
        console.log();
    };

    useEffect(() => {
        chart();
    }, []);


    return (
        <div class="bg-gray-200">
            {/* Creating the Line Chart */}

            <Line
                data={chartData}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                        yAxes: [{ ticks: { beginAtZero: true, } }]
                    },
                    layout: {
                        padding: 20
                    },
                    plugins: {
                        legend: {
                            labels: {
                                font: { size: 12 }
                            }
                        },
                        title: {
                            display: true,
                            text: "Total Covid Statistics",
                            font: {
                                weight: "bold",
                                size: 30,
                                family: 'Arial',
                            }
                        }
                    },


                }}
            />
        </div>
    );
};







export default TotalCharts;
