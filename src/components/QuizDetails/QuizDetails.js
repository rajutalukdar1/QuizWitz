import React from 'react';

const QuizDetails = ({ quiz }) => {
    console.log(quiz)
    const { question, correctAnswer, options } = quiz;
    return (
        <div>
            <h1>{question}</h1>
            <p>{options}</p>
            <p>{correctAnswer}</p>
        </div>
    );
};

export default QuizDetails;