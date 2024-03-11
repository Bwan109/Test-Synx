import React from 'react'

const Footer = () => {
    var date = new Date();
    var year = date.getFullYear();


    return (
        <div className="text-white pt-5 pb-5">
            <p>Created by Brandon Wan @ {year}</p>
            <p>Source: <a href="https://corona.lmao.ninja/" target="_blank">https://corona.lmao.ninja/</a></p>

        </div>
    )
}

export default Footer
