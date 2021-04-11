import React from 'react'
import './Avatar.css'

export default function Avatar({image}) {
  return (
    <img src={image} className="avatar-image" alt="" />
  )
}
