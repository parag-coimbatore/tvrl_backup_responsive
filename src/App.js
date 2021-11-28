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
import Service1 from './services/Service1';
import Service2 from './services/Service2';
import Service3 from './services/Service3';
import Service4 from './services/Service4';
import Service5 from './services/Service5';
import Service6 from './services/Service6';

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

      <Routes>
        <Route exact path='/service1' element={<Service1/>} to="/service1"></Route>
        <Route exact path='/service2' element={<Service2/>} to="/service2"></Route>
        <Route exact path='/service3' element={<Service3/>} to="/service3"></Route>
        <Route exact path='/service4' element={<Service4/>} to="/service4"></Route>
        <Route exact path='/service5' element={<Service5/>} to="/service5"></Route>
        <Route exact path='/service6' element={<Service6/>} to="/service6"></Route>
      </Routes>


    </div>
  );
}

export default App;
