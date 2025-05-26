import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import Article from '@/components/content/Article'
import { Url } from 'next/dist/shared/lib/router/router'
import { ArticleMetadata } from '@/data/articles'
import Card from '@/components/content/Card'

interface PostProps {
  metadataPath: Url
  markdownPath: Url
}

export default function Post({ metadataPath, markdownPath }: PostProps) {
  const [markdown, setMarkdown] = useState<string>()
  const [metadata, setMetadata] = useState<ArticleMetadata>()

  useEffect(() => {
    fetch(markdownPath.toString())
      .then(response => response.text())
      .then(responseText => setMarkdown(responseText))
  }, [markdownPath])

  useEffect(() => {
    fetch(metadataPath.toString())
      .then(response => response.text())
      .then(responseText => setMetadata(JSON.parse(responseText)))
  }, [metadataPath])

  if (metadata && markdown) {
    return (
      <Article title={metadata.title} tags={metadata.tags} footer={`Posted in: ${metadata.createdAt}`}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </Article>
    )
  } else {
    return (
      <Card>
        <article className="article">
          <p>Loading...</p>
        </article>
      </Card>
    )
  }
}
