import React from 'react'
import './App.css'

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

import Blog from './layouts/Blog'
import Projects from './layouts/Projects'
import Contact from './layouts/Contact'
import About from './layouts/About'

export default function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Content>
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </Content>
        <Footer>
        </Footer>
      </div>
    </Router>
  )
}
