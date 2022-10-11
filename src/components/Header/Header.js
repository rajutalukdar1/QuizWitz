import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-slate-100'>
            <div className='flex justify-between mx-auto w-4/5 py-6'>
                <div className='sm:m-0 mr-5'>
                    <Link to='/home'><p className='text-2xl font-semibold'>QuizWitz</p></Link>
                </div>
                <div className='nav-link'>
                    <nav className='text-lg font-semibold'>
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;