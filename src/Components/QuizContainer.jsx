import "./QuizContainer.css"
import {questions} from "../Data.js";
import React from "react";

export default function QuizContainer({step, setStep, resultValue, setResultValue}) {


    function handleClick(index){
        setStep(step+1);
        index === questions[step].correct && setResultValue(resultValue+1)
    }
    const barValue = Math.round(step / questions.length * 100);

    return (
        <div className = "QuizContainer">
            <div className="progress">
                <div style={{ width: `${barValue}%` }} className="progress__inner"></div>
            </div>
            <p>{questions[step].title}</p>
            <ul>
                {
                questions[step].variants.map((text, index) => <li onClick={()=> handleClick(index)} key={text}>{text}</li>
                )
            }
            </ul>
        </div>
    )
}