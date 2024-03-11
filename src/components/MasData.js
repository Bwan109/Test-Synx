import React from 'react'
import { useState, useEffect } from 'react'

const MasData = () => {


    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries/Malaysia")
            .then(res => res.json())
            .then(json =>
                [document.getElementById('todayCases').innerHTML = "+" + json.todayCases,
                document.getElementById('todayRecovered').innerHTML = "+" + json.todayRecovered,
                document.getElementById('todayDeath').innerHTML = "+" + json.todayDeaths,
                document.getElementById('totalCases').innerHTML = "Total: " + json.cases,
                document.getElementById('totalRecovered').innerHTML = "Total: " + json.recovered,
                document.getElementById('totalDeaths').innerHTML = "Total: " + json.deaths,


                ])
    }, [])


    return (
        <div>
            <h1 class="mt-6 text-4xl font-medium text-white">Covid in Malaysia</h1>
            <>
                {/* New Cases Yellow box  */}

                <div class="sm:flex flex-col pl-5 pr-5 justify-center lg:flex-row overflow-hidden justify-center">
                    <div class="my-10 px-10 border-solid">
                        <div class="bg-yellow-500 max-w-sm rounded overflow-hidden shadow-xl border-solid ">
                            <div class="px-6 py-4 pl-12 pr-12">
                                <h1 class="font-mono text-white mb-1 text-center">New Cases</h1>
                                <h1 id="todayCases" class="font-bold text-white text-3xl mb-1 text-center"></h1>
                                <h1 id="totalCases" class="text-white text-xl text-center"></h1>


                            </div>
                        </div>
                    </div>

                    {/* Recovered Green Box */}
                    <div class="my-10 px-10 border-solid">
                        <div class="bg-green-500 max-w-sm rounded overflow-hidden shadow-xl border-solid">
                            <div class="px-6 py-4 pl-12 pr-12">
                                <h1 class="font-mono text-white text-center">Recovered</h1>
                                <h1 id="todayRecovered" class="font-bold text-white text-3xl mb-2 text-center"></h1>
                                <h1 id="totalRecovered" class="text-white text-xl text-center"></h1>

                            </div>
                        </div>
                    </div>

                    {/* Death Red Box  */}
                    <div class="my-10 px-10 border-solid">
                        <div class="bg-red-500 max-w-sm rounded overflow-hidden shadow-xl border-solid">
                            <div class="px-6 py-4 pl-12 pr-12">
                                <h1 class="font-mono text-white text-center">Deaths</h1>
                                <h1 id="todayDeath" class="font-bold text-white text-3xl mb-2 text-center"></h1>
                                <h1 id="totalDeaths" class="text-white text-xl text-center"></h1>

                            </div>
                        </div>
                    </div>

                </div>
            </>


        </div>
    )
}

export default MasData
