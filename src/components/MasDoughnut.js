import React from 'react'
import { Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react'

const MasDoughnut = () => {
    const [chartData, setChartData] = useState({});

    const Doughnutchart = () => {
        // declared to store the data after fetching
        let active = [];
        let cases = [];
        let deaths = [];
        let recovered = [];

        //fetch from api
        fetch("https://disease.sh/v3/covid-19/countries/Malaysia")
            .then(res => res.json())
            .then(data => {
                // getting the Malaysia covid data
                cases.push(parseInt(data.cases));
                deaths.push(parseInt(data.deaths));
                active.push(parseInt(data.active))
                recovered.push(parseInt(data.recovered))

                setChartData({
                    labels: ["Total Cases", "Total Active", "Total Deaths", "Total Recovered"],

                    datasets: [{
                        data: [cases, deaths, active, recovered],
                        backgroundColor: ["blue", "red", "yellow", "green"],
                        weight: 10
                    }],
                    hoverOffset: 4

                });
            })
            .catch(err => {
                console.log(err);
            });
        console.log();
    };

    useEffect(() => {
        Doughnutchart();
    }, []);






    return (
        <div class="bg-gray-200 pb-12">
            {/* Creating the Pie Chart */}
            <Pie
                data={chartData}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
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
                            text: "Malaysia Covid Statistics",
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
    )
}

export default MasDoughnut
