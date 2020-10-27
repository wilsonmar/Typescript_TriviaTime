import React, { useState } from 'react'
import { triviaTopic, triviaLevel } from '../utils'

type Props = {
  callback: (difficulty: string, tropic: string) => void
}

const StartGame: React.FC<Props> = ({ callback }) => {

  const [difficulty, setDifficulty] = useState<string>('easy')
  const [topic, setTopic] = useState<string>('')

  const handleDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.currentTarget.value)
  }

  const handleTopic = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTopic(e.currentTarget.value)
  }

  const startTrivia = () => callback(difficulty, topic)

  return (
    <>
      <div className='title'>TRIVIA TIME</div>
      <img src={require("../assets/brain.png")} alt="" />
      <div className='app'>
        <div className='select'>
          <select value={difficulty} onChange={handleDifficulty}>
            {triviaLevel.map(level => (
              <option key={level.id} value={level.id}>{level.name}</option>
            ))}
          </select>
        </div>
        <br />
        <div className='select'>
          <select value={topic} onChange={handleTopic}>
            {triviaTopic.map(topic => (
              <option key={topic.id} value={topic.id}>{topic.name}</option>
            ))}
          </select>
        </div>

        <br />
        <div className='btn-container'>
          <button className='start' onClick={startTrivia}>Start</button>
        </div>
      </div>
    </>
  )
}

export default StartGame