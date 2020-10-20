import React from 'react'

type Props = {
  score: number
}

const GameOver: React.FC<Props> = ({ score }) => (
  <p className='score'>Score: {score} try again?</p>
)

export default GameOver