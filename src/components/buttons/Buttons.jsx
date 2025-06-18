import React from 'react'
import './Buttons.css'
import Button1 from './Button1'
import Button2 from './Button2'
import Button3 from './Button3'
import Button4 from './Button4'
import Button5 from './Button5'

const Buttons = () => {
  return (
    <div className='buttons-main-container'>
      <div className='button-container'>
        <Button1 />
      </div>
      <div className='button-container'>
      <Button2 />
      </div>
      <div className='button-container'>
        <Button3 />
      </div>
      <div className='button-container'>
        <Button4 />
      </div>
      <div className='button-container'>
        <Button5 />
      </div>
      <div className='button-container'></div>
      <div className='button-container'></div>
      <div className='button-container'></div>
      <div className='button-container'></div>
      <div className='button-container'></div>
      <div className='button-container'></div>
    </div>
  )
}

export default Buttons