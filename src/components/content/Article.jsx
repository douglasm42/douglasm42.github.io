import React from 'react'
import './Article.css'

import Card from './Card'
import Tag from './Tag'

export default function Article({title, footer, tags=[], children}) {
  return (
    <Card>
      <article className="article">
        <h2 className="article-title">{title}</h2>
        {tags.map(tag => <Tag color='lblue'>{tag}</Tag>)}
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
