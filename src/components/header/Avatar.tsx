import React from 'react'
import './Avatar.css'
import Image from 'next/image'

interface AvatarProps {
  src: string
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <Image src={src} className="avatar-image" alt="" width={100} height={100} />
  )
}
