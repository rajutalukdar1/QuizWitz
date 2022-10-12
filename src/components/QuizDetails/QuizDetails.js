import React from 'react';
import { toast } from 'react-toastify';
import Qus from '../Qus/Qus';
import './QuizDetails.css'
import { EyeIcon } from '@heroicons/react/24/solid'

const QuizDetails = ({ quiz, answer }) => {
    const { question, correctAnswer, options, id } = quiz;

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

    const htmlStr = question;
    const newStr = htmlStr.replace(/(<([^>]+)>)/ig, '');

    return (
        <div>

            <div className='border-solid bg-blue-100 rounded-md border-black sm:w-3/4 md:w-4/5 lg:w-1/2  my-4 p-4 border mx-auto'>

                <div className='flex justify-between'>
                    <div></div>
                    <div><h3 className='text-xl mb-4 font-semibold'>{newStr}</h3></div>
                    <div> <EyeIcon onClick={() => answer(correctAnswer)} className="h-6 w-6 text-blue-500" />

                    </div>
                </div>

                <div className='questions grid sm:grid-cols-1 lg:grid-cols-2'>
                    {
                        options.map(qus => <Qus
                            key={qus.toString()} value={qus}
                            qus={qus}
                            id={id}
                            handelAddToCart={handelAddToCart}
                        ></Qus>)
                    }
                </div>
            </div>

        </div>
    );
};

export default QuizDetails;