import React from 'react'

import Project from './Project';

import projects from '../pages/projects'

export default function Projects() {
  const posts = projects.map(project => (<Project key={project.path} info={project.info} markdownFile={project.path} />));

  return (
    <div>
      {posts}
    </div>
  )
}
