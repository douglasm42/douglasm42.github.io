import React from 'react'
import './NavbarToggle.css'

interface NavbarToggleProps {
  onToggle: () => void
}

export default function NavbarToggle({ onToggle }: NavbarToggleProps) {
  return (
    <div className="navbar-toggle">
      <button onClick={onToggle} className="navbar-toggle-link">
        <i className="fa fa-bars"></i>
      </button>
    </div>
  )
}
