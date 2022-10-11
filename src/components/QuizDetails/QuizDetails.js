import React from 'react';
import { toast } from 'react-toastify';
import Qus from '../Qus/Qus';
import './QuizDetails.css'

const QuizDetails = ({ quiz }) => {
    const { question, correctAnswer, options } = quiz;

    const handelAddToCart = (qus) => {
        if (qus === correctAnswer) {
            toast.success('WOW CORRECT ANS')
        }
        else {
            toast.error('OPPPS BAD ANS')
        }
    }
    return (
        <div>
            <div className='border-solid bg-blue-100 rounded-md border-black my-4 border w-1/2 mx-auto'>
                <h3 className='text-xl mb-4 font-semibold'>{question}</h3>

                <div className='questions'>
                    {
                        options.map(qus => <Qus
                            key={qus.toString()} value={qus}
                            qus={qus}
                            handelAddToCart={handelAddToCart}
                        ></Qus>)
                    }
                </div>
            </div>

        </div>
    );
};

export default QuizDetails;