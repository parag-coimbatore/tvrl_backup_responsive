import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Signup from './pages/Signup';

function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />}></Route>

        <Route exact path='/about' element={<About />}></Route>

        <Route exact path='/services' element={<Services />}></Route>

        <Route exact path='/signup' element={<Signup />}></Route>
      </Routes>


    </div>
  );
}

export default App;
