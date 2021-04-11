import React, {useState} from 'react'
import './Navbar.css'

import NavbarToggle from './NavbarToggle'

export default function Navbar({children}) {
  const [visible, setVisible] = useState(false);

  function onToggle() {
    setVisible(!visible)
  }

  return (
    <nav className="navbar">
      <div className={`navbar-items ${visible ? ' navbar-show' : ''}`}>
        {children}
      </div>
      <NavbarToggle onToggle={onToggle} />
    </nav>
  )
}
