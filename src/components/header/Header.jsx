import React from 'react'
import './Header.css'

import MainTitle from './MainTitle'
import Avatar from './Avatar'
import Navbar from './Navbar'
import NavbarItem from './NavbarItem'

import avatarImage from '../../images/avatar.jpg';

export default function Header() {
  return (
    <header className="header">
      <Avatar image={avatarImage}/>
      <MainTitle title="Douglas de Freitas" />
      <Navbar>
        <NavbarItem title="Blog" path="/" />
        <NavbarItem title="Projects" path="/projects" />
        <NavbarItem title="Contact" path="/contact" />
        <NavbarItem title="About" path="/about" />
      </Navbar>
    </header>
  )
}
