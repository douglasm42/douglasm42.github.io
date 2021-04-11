import React from 'react'
import './Article.css'

import Card from './Card'

export default function Article({title, footer, children}) {
  return (
    <Card>
      <article className="article">
        <h2 className="article-title">{title}</h2>
        <div className="article-content">
          {children}
        </div>
        <div className="article-footer">
          {footer}
        </div>
      </article>
    </Card>
  )
}
