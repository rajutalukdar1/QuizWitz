import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rechart from '../rechart/Rechart';

const Statistics = () => {
    const quizTotal = useLoaderData();
    // console.log(quizTotal);
    return (
        <div>
            {
                quizTotal.data.map(total => <Rechart
                    key={total.id}
                    total={total}
                ></Rechart>)
            }
        </div>
    );
};

export default Statistics;