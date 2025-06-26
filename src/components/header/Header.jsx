import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0); // default to 'Home'
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Cards', path: '/cards' },
    { name: 'Buttons', path: '/buttons' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <header>
      <div className='left logo'>
        <h1><span>UI</span>SHOW</h1>
      </div>
      <div className='center'>
        <ul>
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <li
                className={`header-btn btn ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='right'>
        <button className='btn'>Sign in</button>
      </div>
    </header>
  );
};

export default Header;