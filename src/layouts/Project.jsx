import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import Article from '../components/content/Article'
import ArticleLink from '../components/content/ArticleLink';

export default function Project({info, markdownFile}) {
  const [text, setText] = useState()

  useEffect(() => {
    fetch(markdownFile)
      .then(response => response.text())
      .then(responseText => setText(responseText))
  }, [markdownFile]);

  const footer = (<React.Fragment>
    <ArticleLink href={info.homepage} text="live demo" icon="home" />
    <ArticleLink href={info.repository} text="source" icon="git-square" /><br/>
    Updated at: {info.updatedAt}
  </React.Fragment>)

  return (
    <Article title={info.title} footer={footer}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </Article>
  )
}

