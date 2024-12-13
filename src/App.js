// src/App.js
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' // Use Routes instead of Switch

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

import './styles/App.css' // Global styles

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
