import React from 'react'
import './Tag.css'

export default function Tag({color='lblue', type='middle', children}) {
  return (
    <span className={`tag bg-${color} tag-${type}`}>{children}</span>
  )
}
