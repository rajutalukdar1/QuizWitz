import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QusTopic from '../QusTopic/QusTopic';

const Home = () => {
    const loderData = useLoaderData()
    return (
        <div>
            {
                loderData.data.map(lode => <QusTopic
                    key={lode.id}
                    lode={lode}
                ></QusTopic>)
            }
        </div>
    );
};

export default Home;