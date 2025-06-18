import React from 'react'
import './Header.css'
import 'boxicons/css/boxicons.min.css';
import { Route, Link } from 'react-router-dom';

const Header = () => {
    console.log("header")
  return (
    <header>
        <div className='left logo'>
          <h1><span>UI</span>SHOW</h1>
        </div>
        <div className='center'>
          <ul>
            <Link to="/"><li className='btn'>Home</li></Link>
            <Link to="/"><li className='btn'>About</li></Link>
            <Link to="/cards"><li className='btn'>Cards</li></Link>
            <Link to="/buttons"><li className='btn'>Buttons</li></Link>
            <Link to="/"><li className='btn'>Contact</li></Link>
          </ul>
        </div>
        <div className='right'>
          <button className='btn'>Sign in</button>
        </div>
    </header>
  )
}

export default Header