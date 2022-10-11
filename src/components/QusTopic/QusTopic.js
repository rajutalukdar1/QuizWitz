import React from 'react';
import { Link } from 'react-router-dom';
import './QusTopic.css'


const QusTopic = ({ topic }) => {
    const { name, logo, total, id } = topic;
    return (
        <div className='card-container'>
            <img className='bg-zinc-900 rounded-md' src={logo} alt="" />
            <p className='text-2xl font-semibold mt-3'>Name : {name}</p>
            <p className='text-1xl font-semibold'>Total Qus : {total}</p>
            <Link to={`/abouts/${id}`}><button className='p-4 w-full bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 lg:mt-10'>Start Qus Practice</button></Link>
        </div>
    );
};

export default QusTopic;