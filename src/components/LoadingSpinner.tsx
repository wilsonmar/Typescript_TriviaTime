import React from 'react'
import { useStyles } from './styles/loadStyle'
import Loader from 'react-loader-spinner'
import Header from './Header'

const LoadingSpinner = () => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <div className={classes.loader}>
        <Loader type='ThreeDots' color='#4BC369' height={150} width={150} />
      </div>
    </>
  )
}

export default LoadingSpinner