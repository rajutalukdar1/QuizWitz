import React from 'react';

const QusTopic = ({ lode }) => {
    const { name, logo, total } = lode;
    return (
        <div className='home-container'>
            <img className='bg-slate-700' src={logo} alt="" />
            <p>Name : {name}</p>
            <p>Total Qus : {total}</p>
            <button className='border'>Start Qus Practice</button>
        </div>
    );
};

export default QusTopic;