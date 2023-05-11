import React from 'react'
import './Title.css'

export default function Title({level='h1', children}) {
  if(level === 'h1') { return (<h1 className={`title-${level}`}>{children}</h1>) }
  if(level === 'h2') { return (<h2 className={`title-${level}`}>{children}</h2>) }
  if(level === 'h3') { return (<h3 className={`title-${level}`}>{children}</h3>) }
  if(level === 'h4') { return (<h4 className={`title-${level}`}>{children}</h4>) }
  if(level === 'h5') { return (<h5 className={`title-${level}`}>{children}</h5>) }
  if(level === 'h6') { return (<h6 className={`title-${level}`}>{children}</h6>) }
}
