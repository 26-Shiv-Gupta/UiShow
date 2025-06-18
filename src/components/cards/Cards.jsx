import React from 'react'
import './Cards.css'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Card6 from './Card6'
import Card7 from './Card7'
import Card8 from './Card8'
import Card9 from './Card9'
import Card10 from './Card10'
import Card11 from './Card11'
import Card12 from './Card12'

const Cards = () => {
  console.log("cards")
  return (
    <div className='cards-main-container'>
      <div className='card-container'>
        <Card1 />
      </div>
      <div className='card-container'>
        <Card2 />
      </div>
      <div className='card-container'>
        <Card3 />
      </div>
      <div className='card-container'>
        <Card4 />
      </div>
      <div className='card-container'>
        <Card5 />
      </div>
      <div className='card-container'>
        <Card6 />
      </div>
      <div className='card-container'>
        <Card7 />
      </div>
      <div className='card-container'>
        <Card8 />
      </div>
      <div className='card-container'>
        <Card9 />
      </div>
      <div className='card-container'>
        <Card10 />
      </div>
      <div className='card-container'>
        <Card11 />
      </div>
      <div className='card-container'>
        <Card12 />
      </div>
      <div className='card-container'>
        
      </div>
    </div>
  )
}

export default Cards