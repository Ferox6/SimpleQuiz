import React from 'react'
import './App.css'
import QuizContainer from "./QuizContainer.jsx";
import {questions} from "./Data.js";
import Result from "./Result.jsx";

function App() {
    const [step, setStep] = React.useState(0);
    const [resultValue, setResultValue] = React.useState(0);

  return (
    <>
        {step < questions.length ? (
            <QuizContainer step={step} setStep={setStep} resultValue={resultValue} setResultValue = {setResultValue} />
        ) : (<Result resultValue={resultValue} />)
        }

    </>
  )
}

export default App
