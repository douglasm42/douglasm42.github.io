import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import Article from '@/components/content/Article'
import ArticleLink from '@/components/content/ArticleLink';
import { Url } from 'next/dist/shared/lib/router/router';
import { ProjectMetadata } from '@/data/projects';
import Card from '@/components/content/Card';

interface ProjectProps {
  metadataFile: Url
  markdownFile: Url
}

export default function Project({ metadataFile, markdownFile }: ProjectProps) {
  const [markdown, setMarkdown] = useState<string>()
  const [metadata, setMetadata] = useState<ProjectMetadata>()

  useEffect(() => {
    fetch(metadataFile.toString())
      .then(response => response.text())
      .then(responseText => setMetadata(JSON.parse(responseText)))
  }, [metadataFile]);

  useEffect(() => {
    fetch(markdownFile.toString())
      .then(response => response.text())
      .then(responseText => setMarkdown(responseText))
  }, [markdownFile]);

  const links = []

  if(metadata && markdown) {
    if(metadata.homepage) {
      links.push(<ArticleLink href={metadata.homepage} text="live demo" icon="home" />)
    }
    if(metadata.repository) {
      links.push(<ArticleLink href={metadata.repository} text="source" icon="git-square" />)
    }

    const footer = (<React.Fragment>
      {links}<br/>
      Updated at: {metadata.updatedAt}
    </React.Fragment>)

    return (
      <Article title={metadata.title} tags={metadata.tags} footer={footer}>
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

