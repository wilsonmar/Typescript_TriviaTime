import React, { useState } from 'react';
import { fetchQuizQuestions, QuestionState } from './API'
import QuestionCard from './components/QuestionCard'
import LoadingSpinner from './components/LoadingSpinner'
import StartGame from './components/StartGame';
import GameOver from './components/GameOver';

const TOTAL_QUESTIONS = 10

export type AnswerObject = {
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
      const correct = questions[number].correct_answer === answer

      if (correct) setScore(prev => prev + 1)
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }

      setUserAnswers(prev => [...prev, AnswerObject])
    }
  }

  const nextQuestion = () => {
    const nexQuestion = number + 1

    if (nexQuestion === TOTAL_QUESTIONS) setGameOver(true)
    else { setNumber(nexQuestion) }
  }

  const restartGame = () => setStart(true)

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {loading && <LoadingSpinner />}
      {gameOver && !initialize &&
        <>
          <GameOver score={score} />
          <button onClick={restartGame}>Restart?</button>
        </>
      }
      {initialize && <StartGame callback={startTrivia} />}
      {
        !loading && !gameOver && !initialize
        && <p className='score'>Score: {score}</p>
        && <QuestionCard
          questionNum={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      }
      {
        !gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        < button className='next' onClick={nextQuestion}>
          {number !== TOTAL_QUESTIONS - 1 ?
            `Next Question` :
            `Finish`}
        </button>
      }
    </div>
  )
}

export default App;
