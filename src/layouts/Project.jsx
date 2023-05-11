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

  let links = []

  if(info.homepage) {
    links.push(<ArticleLink href={info.homepage} text="live demo" icon="home" />)
  }
  if(info.repository) {
    links.push(<ArticleLink href={info.repository} text="source" icon="git-square" />)
  }

  const footer = (<React.Fragment>
    {links}<br/>
    Updated at: {info.updatedAt}
  </React.Fragment>)

  return (
    <Article title={info.title} footer={footer}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </Article>
  )
}

