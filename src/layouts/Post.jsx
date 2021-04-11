import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import Article from '../components/content/Article'

export default function Post({info, markdownFile}) {
  const [text, setText] = useState()

  useEffect(() => {
    fetch(markdownFile)
      .then(response => response.text())
      .then(responseText => setText(responseText))
  }, [markdownFile]);

  return (
    <Article title={info.title} footer={`Posted in: ${info.createdAt}`}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </Article>
  )
}
