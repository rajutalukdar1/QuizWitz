import React from 'react';
import Qus from '../Qus/Qus';
import './QuizDetails.css'

const QuizDetails = ({ quiz }) => {
    console.log(quiz)
    const { question, correctAnswer, options } = quiz;
    return (
        <div>
            <div className='border-solid bg-blue-100 rounded-md border-black my-4 border w-1/2 mx-auto'>
                <h3 className='text-xl mb-4 font-semibold'>{question}</h3>

                <div className='questions'>
                    {
                        options.map(qus => <Qus
                            key={qus.id}
                            qus={qus}
                        ></Qus>)
                    }
                </div>
            </div>

        </div>
    );
};

export default QuizDetails;