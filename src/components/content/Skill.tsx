import React from 'react'
import './Skill.css'

import ProgressBar from './ProgressBar'

interface SkillProps {
  name: React.ReactNode
  current: number
  max: number
  level?: number
}

export default function Skill({ name, current, max, level }: SkillProps) {
  return (
    <div className="skill-root">
      <div className="skill-container">
        <div>{name}</div>
        <div>{current} years</div>
      </div>
      <ProgressBar progress={current * 100.0 / max}/>
    </div>
  )
}
