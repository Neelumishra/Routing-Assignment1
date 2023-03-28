import React from 'react';
import './style.css';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Register from "./Components/Register/Register"

import { Link,  Routes, Route } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <ul
            type="none"
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              backgroundColor: 'teal',
              color: 'white',
              padding: '10px',
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/login">Login</Link>
          </ul>
        </nav>
      </header>
      
    </div>
  );
}
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<h1>Error</h1>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      {/* <Routes>
      <Route path="/about" element={<About />}></Route>
      </Routes> */}
      {/*      
      <div
        style={{
          position: 'fixed',
          right: '5px',
          bottom: '10px',
          height: '100px',
          width: '100px',
          border:"1px solid"
        }} */}
    </div>
  );
}
