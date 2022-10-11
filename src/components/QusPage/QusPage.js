import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import QuizDetails from '../QuizDetails/QuizDetails';

const QusPage = () => {

    const quizData = useLoaderData();
    const answer = (correctAnswer) => {
        toast.success(correctAnswer, {
            position: "top-center"
        })
    }
    return (
        <div>
            <h2 className='text-3xl font-bold'><span className='text-fuchsia-400'>Quiz Of</span> {quizData.data.name}: {quizData.data.total} Quizs</h2>
            {
                quizData.data.questions.map(quiz => <QuizDetails
                    key={quiz.id}
                    quiz={quiz}
                    answer={answer}
                ></QuizDetails>)
            }
        </div>
    );
};

export default QusPage;