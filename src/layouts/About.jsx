import React from 'react'
import './About.css'

import Card from '../components/content/Card'
import Title from '../components/content/Title'
import Ruler from '../components/content/Ruler'
import Skill from '../components/content/Skill'
import Tag from '../components/content/Tag'

export default function About() {
  return (
    <Card>
      <div class="about-container">
        <div class="about-bio">
          <Title level='h6'>Bio</Title>
          <Ruler/>
          <p>
            Hi, I'm a Software Engineer with 7+ years of experience in Web Development.
            6 of those were working with Ruby on Rails. I also worked with Java EE for almost a year.
          </p>
          <p>
            I have experience with maintenance of legacy code, building new features, new systems from the ground up,
            enhancement of features, training new colleagues, helped once a team transition from SVN to GIT, worked
            on agile teams and with scrum.
          </p>
          <p>
            In my spare time I like to play games, work on my personal projects, play with my daughter and do cycling.
          </p>
          <p>
            I'm currently looking for new challenging projects. If you're interested and want to know more,
            check out my projects and my LinkedIn profile.
          </p>
        </div>
        <div class="about-skills">
          <div>
            <Title level='h6'>PRO Skills</Title>
            <Ruler/>
            <Skill name="Software Engineering" current={7} max={7} />
            <Skill name="PostgreSQL/SQL" current={4} max={7} />
            <Skill name="Ruby/Ruby on Rails" current={6} max={7} />
            <Skill name="RSpec/TDD" current={2} max={7} />
            <Skill name="Javascript" current={3} max={7} />
            <Skill name="Java/JSF/Hybernate" current={1} max={7} />
            <Tag color='orange' sup={false}>Scrum</Tag>
            <Tag color='orange' sup={false}>Agile</Tag>
          </div>
          <div class="about-spacer">
            <Title level='h6'>Personal Projects Skills</Title>
            <Ruler/>
            <Tag color='orange' sup={false}>C++</Tag>
            <Tag color='orange' sup={false}>React</Tag>
            <Tag color='orange' sup={false}></Tag>
            <Tag color='orange' sup={false}>React</Tag>
          </div>
        </div>
      </div>
    </Card>
  )
}
