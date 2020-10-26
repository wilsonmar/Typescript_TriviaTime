import React, { useState } from 'react'
import { fetchQuizQuestions, QuestionState } from './API'
import QuestionCard from './components/QuestionCard'
import LoadingSpinner from './components/LoadingSpinner'
import StartGame from './components/StartGame'
import GameOver from './components/GameOver'
import "./App.css"

const TOTAL_QUESTIONS = 10

export type AnswerObject = {
  questionNum: number,
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
  const [gameOver, setGameOver] = useState(false)
  const [initialize, setStart] = useState(true)
  const questionNum = questions[number]

  const startTrivia = async (difficulty: string, topic: string) => {
    setLoading(true)
    setGameOver(false)
    setStart(false)

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, difficulty, topic)

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value
      const correct = questionNum.correct_answer === answer

      const AnswerObject = {
        questionNum: number,
        question: questionNum.question,
        answer,
        correct,
        correctAnswer: questionNum.correct_answer
      }
      console.log(userAnswers)
      setUserAnswers(prev => [...prev, AnswerObject])

      if (correct) {
        setScore(prev => prev + 1)
      }
    }
  }

  const loadNextQuestion = () => {
    const nextQuestion = number + 1

    if (nextQuestion === TOTAL_QUESTIONS) setGameOver(true)
    else { setNumber(nextQuestion) }
  }

  const restartGame = () => setStart(true)

  return (
    <div className="container">
      <div className='title'>TRIVIA FUN</div>
      {loading && <LoadingSpinner />}
      {initialize && <StartGame callback={startTrivia} />}
      {gameOver && !initialize &&
        <>
          <GameOver score={score} />
          <button onClick={restartGame}>Restart?</button>
        </>
      }
      {
        !loading && !gameOver && !initialize
        && <p className='score'>Score: {score}</p>
        && <QuestionCard
          questionNum={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questionNum.question}
          answers={questionNum.answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      }
      {
        !gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        < button className='start' onClick={loadNextQuestion}>
          {number !== TOTAL_QUESTIONS - 1 ?
            `Next Question` :
            `Finish`}
        </button>
      }
    </div>
  )
}

export default App
