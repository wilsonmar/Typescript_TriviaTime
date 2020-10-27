import React from 'react'
import Header from './Header'

type Props = {
  score: number
}

const GameOver: React.FC<Props> = ({ score }) => (
  <>
    <Header />
    <p className='score'>Score: {score} try again?</p>
  </>
)

export default GameOver