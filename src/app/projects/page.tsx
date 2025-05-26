
'use client'

import React from 'react'
import Project from './partials/Project';
import projects from '@/data/projects'

export default function Projects() {
  const posts = projects.map(project => (<Project key={project.markdownPath} metadataFile={project.metadataPath} markdownFile={project.markdownPath} />));

  return (
    <div>
      {posts}
    </div>
  )
}
