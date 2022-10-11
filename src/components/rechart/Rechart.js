import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const [qus, setQus] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const quizLoaded = data.data.data;
                const quizData = quizLoaded.map(quiz => {
                    const parst = quiz.total;

                    const singleQuiz = {
                        name: quiz.name,
                        total: parst
                    }
                    return singleQuiz
                })
                setQus(quizData);
            });
    }, [])
    return (
        <div>
            <h2 className='font-bold text-4xl m-5'>Quiz chart</h2>
            <div className='lg:flex'>

                <BarChart width={370} height={400} data={qus}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>


                <LineChart width={370} height={400} data={qus}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Rechart;