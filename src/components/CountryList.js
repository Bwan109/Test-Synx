import React from 'react'
import { useState, useEffect } from 'react'


const CountryList = () => {
    const [covData, setCovData] = useState([]);

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries")
            .then(res => res.json())
            .then(data => setCovData(data))
    }, [])

    return (
        <>
            <h1 class="text-white text-3xl font-medium">World COVID-19 Stats</h1>

            <table class="rounded-t-lg m-4 w-4/6 mx-auto bg-gray-200 text-gray-800">
                <tr class="text-center border-b-2 border-gray-300">
                    <th class="px-4 py-3">Country</th>
                    <th class="px-4 py-3">Infected</th>
                    <th class="px-4 py-3">Active</th>
                    <th class="px-4 py-3">Recovered</th>
                    <th class="px-4 py-3">Death</th>

                </tr>

                <tbody class="bg-gray-200 border-b border-gray-500">
                    {/* // Loop through the data, so that able to get it  */}
                    {covData.map(cov => (
                        <>
                            <tr class="border-b-2 border-gray-300">
                                <td class="px-4 py-3">{cov.country}</td>
                                <td class="px-4 py-3 text-red-900">{cov.cases}</td>
                                <td class="px-4 py-3 text-yellow-600">{cov.active}</td>
                                <td class="px-4 py-3 text-green-600">{cov.recovered}</td>
                                <td class="px-4 py-3 text-red-600">{cov.deaths}</td>

                            </tr>


                        </>

                    ))}
                </tbody>



            </table>




        </>
    )
}

export default CountryList

