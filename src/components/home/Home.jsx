import React, {useEffect} from 'react'
import './Home.css'
import Card6 from '../cards/Card6'
import 'boxicons/css/boxicons.min.css';

const Home = () => {
  
  const gridSize = 400;
  return (
    <div className='body'>
      <div className="container1 flex-b-c">
        <div><h1>Hello Developers!!</h1></div>
        <div><h2>The Best UI Collection For Your Websites</h2></div>
        <div className="search-box">
          <div className="icon flex-b-c"> <i className='bx bx-search'></i> </div>
          <input type="text" placeholder='Search whatever you want to find'/>
          <div className="search-btn flex-b-c"><button>Search</button></div>
        </div>
        <div className="shadow"></div>
      </div>
      <div className="container2 ">
        <div className="box box1 flex-b-c"><Card6 /></div>
        <div className="box box2 flex-b-c"><Card6 /></div>
        <div className="box box3 flex-b-c"><Card6 /></div>
        <div className="box box4 flex-b-c"><Card6 /></div>
      </div>
    </div>
  )
}

export default Home