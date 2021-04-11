import React from 'react'

import articles from '../pages/articles'

import Post from './Post'

export default function Blog() {
  const posts = articles.map(article => (<Post key={article.path} info={article.info} markdownFile={article.path} />));
  return (
    <div>
      {posts}
    </div>
  )
}
