import React from 'react'
import './About.css'

import Card from '../components/content/Card'
import Title from '../components/content/Title'
import Ruler from '../components/content/Ruler'
import Skill from '../components/content/Skill'

export default function About() {
  return (
    <Card>
      <div class="about-container">
        <div class="about-bio">
          <p>
            Hi, I'm a Software Engineer with 7+ years of experience in Web Development.
            6 of those were working with Ruby on Rails. I also worked with Java EE for almost an year.
          </p>
          <p>
            In my spare time I like to play games, work on my personal projects, play with my daughter and do cycling.
          </p>
        </div>
        <div class="about-skills">
          <Title level='h4'>Skills</Title>
          <Ruler/>
          <div>
            <Skill name="Total Working Experience" current={7} max={7} />
            <Skill name="Ruby/Ruby on Rails" current={6} max={7} />
            <Skill name="PostgreSQL/SQL" current={4} max={7} />
            <Skill name="Javascript" current={3} max={7} />
            <Skill name="RSpec/TDD" current={2} max={7} />
            <Skill name="C++" current={1} max={7} />
          </div>
        </div>
      </div>
    </Card>
  )
}
