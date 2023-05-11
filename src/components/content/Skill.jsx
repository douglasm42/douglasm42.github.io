import React from 'react'
import './Skill.css'

import ProgressBar from './ProgressBar'
import Tag from './Tag'

export default function Skill({name, current, max}) {
  return (
    <div class="skill-root">
      <div class="skill-container">
        <div>{name}</div>
        <div><Tag>{current} YEARS</Tag></div>
      </div>
      <ProgressBar progress={current * 100.0 / max}/>
    </div>
  )
}
