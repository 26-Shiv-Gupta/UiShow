import React from 'react'
import './Buttons.css'

const Button1 = () => {
    return (
        <div>
            <button className='button button1'>
                <span className='hover-me'>Hover me</span>
                <span className='thanks'>Thnaks!</span>
            </button>
        </div>
    )
}

export default Button1