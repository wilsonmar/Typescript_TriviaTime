import React from 'react'
import { AnswerObject } from '../App'
import Button from '@material-ui/core/Button'

type Props = {
    question: string
    answers: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: AnswerObject | undefined
    questionNum: number
    totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions }) => (
    <div className='question'>
        <p className='number'>
            Question: {questionNum}/{totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <div key={answer}>
                    <Button
                        variant="contained"
                        disabled={!!userAnswer}
                        value={answer}
                        onClick={callback}
                        style={{
                            textTransform: 'none',
                            width: '90%',
                            margin: '5px'
                        }}
                    >
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </Button>
                </div>
            ))}
        </div>
    </div>
)


export default QuestionCard