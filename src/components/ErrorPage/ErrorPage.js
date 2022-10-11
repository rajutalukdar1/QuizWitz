import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <h1 className='font-bold text-9xl'>OoPs!</h1>
            <h2>404 - PAGE NOT FOUND</h2>
            <button><Link to='/home'><p className=' p-4 w-72 mt-40 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>GO TO HOME PAGE</p></Link></button>
        </div>
    );
};

export default ErrorPage;