import React from 'react'
import './NavbarToggle.css'

export default function NavbarToggle({onToggle}) {
  return (
    <div className="navbar-toggle">
      <button onClick={onToggle} className="navbar-toggle-link">
        <i className="fa fa-bars"></i>
      </button>
    </div>
  )
}
