import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QusTopic from '../QusTopic/QusTopic';
import './Home.css'

const Home = () => {
    const quizData = useLoaderData()
    return (
        <div className='lg:grid grid-cols-4 m-10 mt-20'>
            {
                quizData.data.map(quiz => <QusTopic
                    key={quiz.id}
                    quiz={quiz}
                ></QusTopic>)
            }
        </div>
    );
};

export default Home;