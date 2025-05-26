import React from 'react'
import './ProgressBar.css'
import { Color } from '../types'

interface ProgressBarProps {
  color?: Color
  progress?: number
}

export default function ProgressBar({ color='lblue', progress=10 }: ProgressBarProps) {
  return (
    <div className='progress-bar-background bg-gray6'>
      <div className={`progress-bar-foreground bg-${color}`} style={{width: progress+'%'}}></div>
    </div>
  )
}
