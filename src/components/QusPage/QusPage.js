import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const QusPage = () => {

    const quizData = useLoaderData();

    return (
        <div>
            <h2 className='text-3xl font-bold'>{quizData.data.name}</h2>
            {
                quizData.data.questions.map(quiz => <QuizDetails
                    key={quiz.id}
                    quiz={quiz}
                ></QuizDetails>)
            }
        </div>
    );
};

export default QusPage;