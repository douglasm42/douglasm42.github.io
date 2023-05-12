import React from 'react'
import './Skill.css'

import ProgressBar from './ProgressBar'

export default function Skill({name, current, max}) {
  return (
    <div class="skill-root">
      <div class="skill-container">
        <div>{name}</div>
        <div>{current} years</div>
      </div>
      <ProgressBar progress={current * 100.0 / max}/>
    </div>
  )
}
