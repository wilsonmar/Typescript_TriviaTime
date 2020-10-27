import React from 'react'
import { AnswerObject } from '../App'

type Props = {
    question: string
    answers: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: AnswerObject | undefined
    questionNum: number
    totalQuestions: number
    score: number
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions, score }) => (
    <>
        <div className="question-container">
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div className='score'>
            <p>Score: {score}</p>
            </div>
        </div>
        <div className='answers'>
            {answers.map(answer => (
                <div key={answer}>
                    <button className='option-btn'
                        disabled={!!userAnswer}
                        value={answer}
                        onClick={callback}
                    >
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            ))}
        </div>
    </>
)


export default QuestionCard