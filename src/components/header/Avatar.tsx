import React from 'react'
import './Avatar.css'

interface AvatarProps {
  src: string
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <img src={src} className="avatar-image" alt="" />
  )
}
