import React from 'react'
import './Header.css'
import 'boxicons/css/boxicons.min.css';
import { Route, Link } from 'react-router-dom';

const Header = () => {
    console.log("header")

    const header_elements = document.getElementsByClassName("header-btn")

    Array.from(header_elements).forEach(ele => {
      ele.addEventListener('click', function() {
        const curr_active = document.querySelector('.header-btn.active');
        curr_active.classList.remove('active');
        this.classList.add('active')
      })
    });

  return (
    <header>
        <div className='left logo'>
          <h1><span>UI</span>SHOW</h1>
        </div>
        <div className='center'>
          <ul>
            <Link to="/"><li className='header-btn btn active'>Home</li></Link>
            <Link to="/"><li className='header-btn btn'>About</li></Link>
            <Link to="/cards"><li className='header-btn btn'>Cards</li></Link>
            <Link to="/buttons"><li className='header-btn btn'>Buttons</li></Link>
            <Link to="/"><li className='header-btn btn'>Contact</li></Link>
          </ul>
        </div>
        <div className='right'>
          <button className='btn'>Sign in</button>
        </div>
    </header>
  )
}

export default Header