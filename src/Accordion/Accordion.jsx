import React, { useState } from 'react'
import questions from './data';
import "./accordion.css"
import logo from './assets/logo.svg';
import Question from './Question';

function Accordion() {

    const questionsData = questions;

    const [data, setData] = useState(questionsData);


    return (
        <div className='accordion'>
            <div className='accordion_wrapper'>
                <div className='accordion_question'>
                    <h2>Questions And Answers About Login</h2>
                </div>
                <div className='container'>
                    {data.map((item) => {
                        const { id, title, info } = item;
                        return (
                            <div className='container_title'>
                                <Question {...item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Accordion
