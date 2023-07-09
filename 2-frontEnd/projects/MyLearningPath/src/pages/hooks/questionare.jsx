import React, {useState} from "react";

function OptionBotton({option}) {
    return (
        <button className='btn'>{option}</button>
    )
}

function Questionare({questions}) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const firstQuestion = questionIndex === 0;
    const lastQuestion = questionIndex === questions.length - 1;
    const goBack = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1);
    const goNext = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);

    return (
        <section className='questionare'>
            <h2>Questionare</h2>
            <nav>
                <span>Question #{questionIndex + 1}</span>
                <div className='questionare-btns'>
                    <button className='btn' onClick={goBack} disabled={firstQuestion}>
                        Go Back
                    </button>
                    <button className='btn' onClick={goNext} disabled={lastQuestion}>
                        Next Question
                    </button>
                </div>
            </nav>
            <article className='question'>
                <h3>{questions[questionIndex].question}</h3>
                <div className='question-btns'>
                    {questions[questionIndex].options.map(option => <OptionBotton option={option}/>)}
                </div>
            </article>
        </section>
    )
}

export default Questionare;