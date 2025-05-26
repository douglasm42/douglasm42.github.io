import React from 'react'
import './Header.css'

import MainTitle from './MainTitle'
import Avatar from './Avatar'
import Navbar from './Navbar'
import NavbarItem from './NavbarItem'

export default function Header() {
  return (
    <header className="header">
      <Avatar src='/avatar.jpeg'/>
      <MainTitle title="Douglas de Freitas" />
      <Navbar>
        <NavbarItem title="About" href="/" />
        <NavbarItem title="Blog" href="/blog" />
        <NavbarItem title="Projects" href="/projects" />
        <NavbarItem title="Contact" href="/contact" />
      </Navbar>
    </header>
  )
}
