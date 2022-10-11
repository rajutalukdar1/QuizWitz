import React from 'react';
import { Link } from 'react-router-dom';
import './QusTopic.css'

const QusTopic = ({ quiz }) => {
    const { name, logo, total, id } = quiz;
    return (
        <div className='card-container'>
            <img className='bg-slate-700 rounded-md' src={logo} alt="" />
            <p className='text-2xl font-semibold mt-3'>Name : {name}</p>
            <p className='text-1xl font-semibold'>Total Qus : {total}</p>
            <Link to={`${id}`}><button className='p-4 w-full mt-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Start Qus Practice</button></Link>
        </div>
    );
};

export default QusTopic;