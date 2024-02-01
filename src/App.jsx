import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='app'>
        <a href="/">
          <h1>ShowSpace</h1>
        </a>

        <Router>
          <Routes>
            <Route path="/" element={<ShowList />} />
            <Route path="/details/:id" element={<ShowDetails />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
