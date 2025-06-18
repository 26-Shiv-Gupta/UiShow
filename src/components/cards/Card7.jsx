import React from 'react'
import './Cards.css'

const Card7 = () => {
    return (
        <div className='card card7'>
            <div className='container flex-b-c'>
                <div className='cube'>
                    <div className='face front'></div>
                    <div className='face back'></div>
                    <div className='face left'></div>
                    <div className='face right'></div>
                    <div className='face top'></div>
                    <div className='face bottom'></div>
                </div>
                <div className='content'>
                    <h2>Rotate Cube</h2>
                </div>
            </div>
        </div>
    )
}

export default Card7    