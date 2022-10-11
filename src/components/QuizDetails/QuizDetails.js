import React from 'react';
import { toast } from 'react-toastify';
import Qus from '../Qus/Qus';
import './QuizDetails.css'
import { EyeIcon } from '@heroicons/react/24/solid'

const QuizDetails = ({ quiz, answer }) => {
    const { question, correctAnswer, options } = quiz;

    const handelAddToCart = (qus) => {
        if (qus === correctAnswer) {
            toast.success('WOW CORRECT ANS', {
                position: "top-center"
            })
        }
        else {
            toast.error('OPPPS BAD ANS', {
                position: "top-center"
            })
        }
    }
    return (
        <div>

            <div className='border-solid bg-blue-100 rounded-md border-black my-4 border w-1/2 mx-auto'>
                <EyeIcon onClick={() => answer(correctAnswer)} className="h-6 w-6 text-blue-500" />
                <h3 className='text-xl mb-4 font-semibold'>{question}</h3>

                <div className='questions grid sm:grid-cols-1 lg:grid-cols-2'>
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