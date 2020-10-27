import React from 'react'

type Props = {
  score: number
}

const GameOver: React.FC<Props> = ({ score }) => (
  <>
    <div className='title'>TRIVIA TIME</div>
    <img src={require("../assets/brain.png")} alt="" />
    <p className='score'>Score: {score} try again?</p>
  </>
)

export default GameOver