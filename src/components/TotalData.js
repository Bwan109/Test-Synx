import React from 'react'
import { useEffect } from 'react'
const TotalData = () => {

    useEffect(() => {
        // fetch from api
        fetch('https://disease.sh/v3/covid-19/all')
            .then(response => response.json())
            .then(json =>
                // assigned the data based on HTML ID elements below
                [document.getElementById('tested').innerHTML = json.cases,
                document.getElementById('recovered').innerHTML = json.recovered,
                document.getElementById('death').innerHTML = json.deaths,

                ]
            );
    }, [])


    return (

        <>
            <h1 class="mt-6 text-4xl font-medium text-white">Total Covid Facts</h1>

            {/* New Cases Yellow box  */}
            <div class="sm:flex flex-col pl-5 pr-5 justify-center lg:flex-row overflow-hidden justify-center">
                <div class="my-10 px-10 border-solid">
                    <div class="bg-yellow-500 max-w-sm rounded overflow-hidden shadow-xl border-solid ">
                        <div class="px-6 py-4 pl-12 pr-12">
                            <h1 class="font-mono text-gray-900 mb-1 text-center">Infected</h1>
                            <h1 id="tested" class="font-bold text-3xl mb-1 text-center"></h1>
                            <p class="text-xs text-center">Number of cases</p>
                            <p class="text-xs text-center">COVID-19</p>

                        </div>
                    </div>
                </div>

                {/* Recovered Green Box */}
                <div class="my-10 px-10 border-solid">
                    <div class="bg-green-500 max-w-sm rounded overflow-hidden shadow-xl border-solid">
                        <div class="px-6 py-4 pl-12 pr-12">
                            <h1 class="font-mono text-gray-900 text-center">Recovered</h1>
                            <h1 id="recovered" class="font-bold text-3xl mb-2 text-center"></h1>
                            <p class="text-xs text-center">Number of recoveries from</p>
                            <p class="text-xs text-center">COVID-19</p>

                        </div>
                    </div>
                </div>

                {/* Death Red Box  */}
                <div class="my-10 px-10 border-solid">
                    <div class="bg-red-500 max-w-sm rounded overflow-hidden shadow-xl border-solid">
                        <div class="px-6 py-4 pl-12 pr-12">
                            <h1 class="font-mono text-gray-900 text-center">Deaths</h1>
                            <h1 id="death" class="font-bold text-3xl mb-2 text-center"></h1>
                            <p class="text-xs text-center">Number of death caused by</p>
                            <p class="text-xs text-center">COVID-19</p>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}

export default TotalData
