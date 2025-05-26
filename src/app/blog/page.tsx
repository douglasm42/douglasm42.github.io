'use client'

import React from 'react'
import articles from '@/data/articles'
import Post from './partials/Post'

export default function Blog() {
  const posts = articles.map(article => (
    <Post key={article.markdownPath} metadataPath={article.metadataPath} markdownPath={article.markdownPath} />
  ))
  return (
    <div>
      {posts}
    </div>
  )
}
