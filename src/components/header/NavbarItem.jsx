import React from 'react'
import './NavbarItem.css'

export default function NavbarItem({title, path}) {
  return (
    <div className="navbar-item">
      <button className="navbar-item-link">
        {title}
      </button>
    </div>
  )
}
