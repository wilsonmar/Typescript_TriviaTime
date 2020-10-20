import React from 'react'
import { useStyles } from './styles/loadStyle'
import Loader from 'react-loader-spinner'

const LoadingSpinner = () => {
  const classes = useStyles()

  return(
    <div className={classes.loader}>
      <Loader type='ThreeDots' color='#954bb4' height={150} width={150} />
    </div>
  )
}

export default LoadingSpinner