import React from 'react'

import './ArticleLink.css'

export default function ArticleLink({href, text, icon}) {
  return (
    <a className="article-link" href={href}>
      <i className={`fa fa-${icon}`}></i> {text}
    </a>
  )
}
