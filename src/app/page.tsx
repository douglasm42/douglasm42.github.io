'use client'

import React from 'react'
import './About.css'

import Card from '@/components/content/Card'
import Title from '@/components/content/Title'
import Ruler from '@/components/content/Ruler'
import Skill from '@/components/content/Skill'
import Tag from '@/components/content/Tag'

export default function Page() {
  return (
    <Card>
      <div className="about-container">
        <div className="about-bio">
          <Title level='h6'>Bio</Title>
          <Ruler/>
          <p>
            Hi, I&apos;m a Software Engineer with 7+ years of experience in Web Development.
            6 of those were working with Ruby on Rails. I also worked with Java EE for almost a year.
          </p>
          <p>
            I have experience with maintenance of legacy code, building new features, new systems from the ground up,
            enhancement of features, training new colleagues, helped a team transition from SVN to GIT, worked
            on agile teams and with scrum.
          </p>
          <p>
            I know how to work on teams, always looking for help when stuck and willing to help others.
            I&apos;m very patient when dealing with people and always got very good feedback because of that. It&apos;s extremely
            hard for me to get mad or show bad behaviour.
          </p>
          <p>
            I&apos;m very curious and really love to learn how everything works. On my steam profile, you can see that my
            most played games has something to do with engineering or logical problem solving, like Factorio.
          </p>
          <p>
            In my spare time I like to play games, work on my personal projects, play with my daughter and do cycling.
            And all of these help me in some way to become a better person and a better developer.
          </p>
          <p>
            I&apos;m currently looking for new challenging projects. If you&apos;re interested and want to know more,
            check out my projects and my LinkedIn profile.
          </p>
        </div>
        <div className="about-skills">
          <div>
            <Title level='h6'>Hard Skills</Title>
            <Ruler/>
            <Skill name="Software Engineering" current={7} max={7} />
            <Skill name="PostgreSQL/SQL" current={6} max={7} />
            <Skill name="Ruby/Ruby on Rails" current={6} max={7} />
            <Skill name="RSpec" current={2} max={7} />
            <Skill name="Javascript" current={3} max={7} />
            <Skill name="Java/JSF/Hybernate" current={1} max={7} />
            <Tag color='purple' type='middle'>Scrum</Tag>
            <Tag color='purple' type='middle'>Agile</Tag>
            <Tag color='purple' type='middle'>TDD</Tag>
            <Tag color='purple' type='middle'>C++</Tag>
            <Tag color='purple' type='middle'>React</Tag>
          </div>
          <div className="about-spacer">
            <Title level='h6'>Soft Skills</Title>
            <Ruler/>
            <Tag color='orange' type='middle'>Problem Solving</Tag>
            <Tag color='orange' type='middle'>Ability to Learn</Tag>
            <Tag color='orange' type='middle'>Patience</Tag>
            <Tag color='orange' type='middle'>Flexibility</Tag>
            <Tag color='orange' type='middle'>Empathy</Tag>
            <Tag color='orange' type='middle'>Communication</Tag>
            <Tag color='orange' type='middle'>Teamwork</Tag>
            <Tag color='orange' type='middle'>Self-Confidence</Tag>
            <Tag color='orange' type='middle'>Time Management</Tag>
          </div>
        </div>
      </div>
    </Card>
  )
}
