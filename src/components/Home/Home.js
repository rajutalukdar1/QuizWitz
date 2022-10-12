import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QusTopic from '../QusTopic/QusTopic';
import './Home.css'

const Home = () => {
    const quizData = useLoaderData();
    return (
        <div>
            <div className='home-photos lg:w-4/5 sm:w-3/4'>
                <p className='text-3xl pt-12 font-bold text-cyan-400'>Check your development knowledge</p>
                <p className='text-xl pt-8 font-semibold text-teal-500'>Answer the questions on our website to test your knowledge, <br /> and let your knowledge be tested</p>
                <p className='text-xl font-semibold text-cyan-400'>You can take tests on multiple subjects here,  and you can easily check the <br /> knowledge you have learned</p>
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