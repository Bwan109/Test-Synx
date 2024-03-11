import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-md font-mono">
            <Link to='/' className='pl-8'>Covid Information</Link>
            <Link to='/charts' className="pr-10">Charts</Link>

        </nav>
    )
}

export default Navbar
