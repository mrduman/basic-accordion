import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import "./question.css"


function Question({ id, title, info }) {

    const [showInfo, toggleShowInfo] = useState(false);

    const handleShowClick = () => {
        !showInfo ? toggleShowInfo(true) : toggleShowInfo(false)
    }

    return (
        <div>
            <div className='container_content' key={id} >
                <header>
                    <h4 >{title}</h4>
                    <button onClick={handleShowClick}>
                        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                    {showInfo && <h5>{info}</h5>}
                </header>
            </div>
        </div>
    )
}

export default Question
