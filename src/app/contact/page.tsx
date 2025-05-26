'use client'

import React from 'react'
import Card from '@/components/content/Card'
import Detail from '@/components/content/Detail'
import Title from '@/components/content/Title'
import Ruler from '@/components/content/Ruler'

export default function Contact() {
  return (
    <Card>
      <Title level='h1'>Contact</Title>
      <Ruler/>
      <Detail name='E-Mail'>
        <a href="mailto:douglas@douglasm42.dev">douglas@douglasm42.dev</a>
      </Detail>
      <Detail name='LinkedIn'>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/douglasm42/">linkedin.com/in/douglasm42/</a>
      </Detail>
      <Detail name='GitHub'>
        <a target="_blank" rel="noreferrer" href="https://github.com/douglasm42/">github.com/douglasm42</a>
      </Detail>
      <Detail name='Twitch' tags={['PT-BR']}>
        <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/douglasm42">DouglasM42</a>
      </Detail>
      <Detail name='Steam'>
        <a target="_blank" rel="noreferrer" href="https://steamcommunity.com/id/douglasm42/">Dark Terraria</a>
      </Detail>
    </Card>
  )
}
