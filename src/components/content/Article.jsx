import React from 'react'
import './Article.css'

import Card from './Card'

export default function Article({title, createdAt, children}) {
  return (
    <Card>
      <article className="article">
        <h2 className="article-title">{title}</h2>
        <div className="article-content">
          {children}
        </div>
        <div className="article-date">
          Published in: {createdAt}
        </div>
      </article>
    </Card>
  )
}
