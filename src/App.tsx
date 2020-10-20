import React, { useState } from 'react';
import { Difficulty, fetchQuizQuestions, QuestionState } from './API'
import QuestionCard from './components/QuestionCard'


const TOTAL_QUESTIONS = 10

type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const App = () => {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
  console.log(questions)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS}
      <button className='start' onClick={startTrivia}>Start</button>
      <p className='score'>Score: </p>
      <p className='load'>Loading Questions</p>
      {/* <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default App;
