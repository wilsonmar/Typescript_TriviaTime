import React, { useState } from 'react'
import { triviaTopic, triviaLevel } from '../utils'
import { NativeSelect, InputLabel, FormControl, Button } from '@material-ui/core';
import { useStyles } from './styles/selectStyle'
import brain from '../assets/brain.png'

type Props = {
  callback: (difficulty: string, tropic: string) => void
}

const StartGame: React.FC<Props> = ({ callback }) => {
  const classes = useStyles()

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
      <img src={require("../assets/brain.png")} alt="" />
      <div className='app'>
        <FormControl className={classes.formControl}>
          <InputLabel shrink >Difficulty</InputLabel>
          <NativeSelect value={difficulty} onChange={handleDifficulty}>
            {triviaLevel.map(level => (
              <option key={level.id} value={level.id}>{level.name}</option>
            ))}
          </NativeSelect>
        </FormControl>
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel shrink >Topic</InputLabel>
          <NativeSelect value={topic} onChange={handleTopic}>
            {triviaTopic.map(topic => (
              <option key={topic.id} value={topic.id}>{topic.name}</option>
            ))}
          </NativeSelect>
        </FormControl>
        <br />
        <button className='start' onClick={startTrivia}>Start</button>
      </div>
    </>
  )
}

export default StartGame