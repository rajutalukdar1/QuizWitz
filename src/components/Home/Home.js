import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QusTopic from '../QusTopic/QusTopic';
import './Home.css'

const Home = () => {
    const quizData = useLoaderData();
    return (
        <div>
            <div className='lg:flex justify-between m-10 bg-zinc-200 rounded-md p-5 md:flex justify-between m-10 bg-zinc-200 rounded-md p-5 sm:grid grid-cols-1'>
                <div><img className='w-64 rounded-xl' src="https://media.moddb.com/images/games/1/35/34132/QuizWitz-preview-logo.jpg" alt="" /></div>
                <div className='text-left mt-20 ml-10 font-bold text-4xl text-cyan-500 '>Welcome TO QuizWitz</div>
            </div>
            <div className='mx-auto my-12 gap-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-4/5'>
                {
                    quizData.data.map(topic => <QusTopic
                        key={topic.id}
                        topic={topic}
                    ></QusTopic>)
                }
            </div>
        </div>
    );
};

export default Home;