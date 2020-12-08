import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

type Props = {
  number: number
}

const Progress: React.FC<Props> = ({ number }) => {
  const [progress, setProgress] = React.useState(0);
  const score = (number + 1) * 10

  return (
    <div className="progress">
      <CircularProgress variant="static" value={score} />
      <div className='progress-num'>{number + 1}</div>
    </div>
  )
}

export default Progress