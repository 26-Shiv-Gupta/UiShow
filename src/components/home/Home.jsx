import React, { useEffect } from 'react'
import './Home.css'
import Card6 from '../cards/Card6'
import 'boxicons/css/boxicons.min.css';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {

  return (
    <div className='body'>

      {/* container 1 */}
      <div className="container1 flex-b-c">
        <div><h1>Hello Developers!!</h1></div>
        <div><h2>The Best UI Collection For Your Websites</h2></div>
        <div className="search-box">
          <div className="icon flex-b-c"> <i className='bx bx-search'></i> </div>
          <input type="text" placeholder='Search whatever you want to find' />
          <div className="search-btn flex-b-c"><button>Search</button></div>
        </div>
        <div className="shadow"></div>
      </div>

      {/* container 2 */}
      <div className="container2 ">
        <div className="box box1 flex-b-c"><Card6 /></div>
        <div className="box box2 flex-b-c"><Card6 /></div>
        <div className="box box3 flex-b-c"><Card6 /></div>
        <div className="box box4 flex-b-c"><Card6 /></div>
        <div className="box box1 flex-b-c"><Card6 /></div>
        <div className="box box2 flex-b-c"><Card6 /></div>
        <div className="box box3 flex-b-c"><Card6 /></div>
        <div className="box box4 flex-b-c"><Card6 /></div>
        <div className="shadow"></div>
        <NavLink to="/cards"><button className='browse-btn flex-b-c'><i className='bx bx-rocket'></i>Browse all elements</button></NavLink>
      </div>

      {/* Container 3 */}
      <div className="container3 flex-b-c">
        <div className="box box1 flex-b-c"><i className='bx bx-layout'></i><h2>6500</h2><h3>Visit this webites</h3> <h3>currently</h3></div>
        <div className="box box2 flex-b-c"><i className='bx bx-user'></i><h2>6500</h2><h3>Visit this webites</h3> <h3>currently</h3></div>
        <div className="box box3 flex-b-c"><i className='bx bx-home'></i><h2>6500</h2><h3>Visit this webites</h3> <h3>currently</h3></div>
      </div>

      {/* container 4 */}
      <div className="container4">
        home container 4
      </div>

    </div>
  )
}

export default Home