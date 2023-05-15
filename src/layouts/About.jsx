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
            enhancement of features, training new colleagues, helped a team transition from SVN to GIT, worked
            on agile teams and with scrum.
          </p>
          <p>
            I know how to work on teams, always looking for help when stuck and willing to help others.
            I'm very patient when dealing with people and always got very good feedback because of that. It's extremely
            hard for me to get mad or show bad behaviour.
          </p>
          <p>
            I'm very curious and really love to learn how everything works. On my steam profile, you can see that my
            most played games has something to do with engineering or logical problem solving, like Factorio.
          </p>
          <p>
            In my spare time I like to play games, work on my personal projects, play with my daughter and do cycling.
            And all of these help me in some way to become a better person and a better developer.
          </p>
          <p>
            I'm currently looking for new challenging projects. If you're interested and want to know more,
            check out my projects and my LinkedIn profile.
          </p>
        </div>
        <div class="about-skills">
          <div>
            <Title level='h6'>Hard Skills</Title>
            <Ruler/>
            <Skill name="Software Engineering" current={7} max={7} />
            <Skill name="PostgreSQL/SQL" current={6} max={7} />
            <Skill name="Ruby/Ruby on Rails" current={6} max={7} />
            <Skill name="RSpec" current={2} max={7} />
            <Skill name="Javascript" current={3} max={7} />
            <Skill name="Java/JSF/Hybernate" current={1} max={7} />
            <Tag color='purple' sup={false}>Scrum</Tag>
            <Tag color='purple' sup={false}>Agile</Tag>
            <Tag color='purple' sup={false}>TDD</Tag>
            <Tag color='purple' sup={false}>C++</Tag>
            <Tag color='purple' sup={false}>React</Tag>
          </div>
          <div class="about-spacer">
            <Title level='h6'>Soft Skills</Title>
            <Ruler/>
            <Tag color='orange' sup={false}>Problem Solving</Tag>
            <Tag color='orange' sup={false}>Ability to Learn</Tag>
            <Tag color='orange' sup={false}>Patience</Tag>
            <Tag color='orange' sup={false}>Flexibility</Tag>
            <Tag color='orange' sup={false}>Empathy</Tag>
            <Tag color='orange' sup={false}>Communication</Tag>
            <Tag color='orange' sup={false}>Teamwork</Tag>
            <Tag color='orange' sup={false}>Self-Confidence</Tag>
            <Tag color='orange' sup={false}>Time Management</Tag>
          </div>
        </div>
      </div>
    </Card>
  )
}
