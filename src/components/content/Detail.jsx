import React from 'react'
import './Detail.css'

import Tag from './Tag'

export default function Detail({name, tags=[], children}) {
  const componentTags = tags.map(tag => (<Tag color='green'>{tag}</Tag> ))
  return (
    <div className='detail'>
      <div className='detail-name'><strong>{componentTags} {name}:</strong></div>
      <div className='detail-value'>{children}</div>
    </div>
  )
}
