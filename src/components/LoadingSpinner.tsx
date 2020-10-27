import React from 'react'
import { useStyles } from './styles/loadStyle'
import Loader from 'react-loader-spinner'

const LoadingSpinner = () => {
  const classes = useStyles()

  return (
    <>
      <div className='title'>TRIVIA TIME</div>
      <img src={require("../assets/brain.png")} alt="" />
      <div className={classes.loader}>
        <Loader type='ThreeDots' color='#4BC369' height={150} width={150} />
      </div>
    </>
  )
}

export default LoadingSpinner