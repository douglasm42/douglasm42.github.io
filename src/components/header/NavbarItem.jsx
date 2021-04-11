import React from 'react'
import './NavbarItem.css'

import { Link } from 'react-router-dom'

export default function NavbarItem({title, path}) {
  return (
    <div className="navbar-item">
      <Link className="navbar-item-link" to={path}>
        {title}
      </Link>
    </div>
  )
}
