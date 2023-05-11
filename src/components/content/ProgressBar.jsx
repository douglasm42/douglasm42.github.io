import React from 'react'
import './ProgressBar.css'

export default function ProgressBar({color='lblue', progress=10}) {
  return (
    <div className='progress-bar-background bg-gray6'>
      <div className={`progress-bar-foreground bg-${color}`} style={{width: progress+'%'}}></div>
    </div>
  )
}
