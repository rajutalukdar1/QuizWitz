import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QusTopic from '../QusTopic/QusTopic';
import './Home.css'

const Home = () => {
    const quizData = useLoaderData();
    return (
        <div>
            <div className='flex justify-between m-10 bg-zinc-200 rounded-md p-5'>
                <div><img className='w-64 rounded-xl' src="https://media.moddb.com/images/games/1/35/34132/QuizWitz-preview-logo.jpg" alt="" /></div>
                <div className='text-left mt-20 ml-10 font-bold text-2xl text-cyan-500 '>Welcome TO QuizWitz</div>
            </div>
            <div className='lg:grid grid-cols-4 m-10 mt-20'>
                {
                    quizData.data.map(quiz => <QusTopic
                        key={quiz.id}
                        quiz={quiz}
                    ></QusTopic>)
                }
            </div>
        </div>
    );
};

export default Home;