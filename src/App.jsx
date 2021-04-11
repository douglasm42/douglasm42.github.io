import React from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

import Blog from './pages/Blog'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'

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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Blog />
            </Route>
          </Switch>
        </Content>
        <Footer>
        </Footer>
      </div>
    </Router>
  )
}
