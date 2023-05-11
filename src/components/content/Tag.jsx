import React from 'react'
import './Tag.css'

export default function Tag({color='lblue', children}) {
  return (
    <span className={`tag bg-${color}`}>{children}</span>
  )
}
