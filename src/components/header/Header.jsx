import React from 'react'
import './Header.css'

import MainTitle from './MainTitle'
import Avatar from './Avatar'
import Navbar from './Navbar'
import NavbarItem from './NavbarItem'

import avatarImage from '../../images/avatar.jpeg';

export default function Header() {
  return (
    <header className="header">
      <Avatar image={avatarImage}/>
      <MainTitle title="Douglas de Freitas" />
      <Navbar>
        <NavbarItem title="About" path="/" />
        <NavbarItem title="Blog" path="/blog" />
        <NavbarItem title="Projects" path="/projects" />
        <NavbarItem title="Contact" path="/contact" />
      </Navbar>
    </header>
  )
}
