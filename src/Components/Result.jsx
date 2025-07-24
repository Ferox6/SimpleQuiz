import './Result.css';
import {questions} from "../Data.js";

export default function Result(props) {
    return (
        <div className="result-container">
            <h2>Результат теста</h2>
            <p>Вы ответили правильно на <strong>{props.resultValue}</strong> из <strong>{questions.length}</strong> вопросов.</p>
            <a href='/public'>
            <button>Попробывать снова!</button>
            </a>
        </div>
    );
}
