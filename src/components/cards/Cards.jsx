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

  const elements = [
    <Card1 />, <Card2 />, <Card3 />, <Card4 />, <Card5 />, <Card6 />, <Card7 />, <Card8 />, <Card9 />, <Card10 />, <Card11 />, <Card12 />
  ]

  return (
    <>
      <div className="comp-container">
        {elements.map((ele, index) => (
          <div className='ele-container card-container'>
            {ele}
          </div>
        ))}
      </div>
    </>
  )
}

export default Cards