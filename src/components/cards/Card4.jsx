import React from 'react'

const Card4 = () => {
  return (
    <div className='card4'>
        <div className='container flex-b-c'>
            <div className='box1 box'>
                <div className='image flex-b-c'>
                <i className='bx bxl-github'></i>
                </div>
                <div className='title flex-b-c'>Github</div>
            </div>
            <div className='box2 box'>
                <div className='image flex-b-c'>
                <i className='bx bx-code-alt' ></i>
                </div>
                <div className='title flex-b-c'>Code</div>
            </div>
            <div className='box3 box'>
                <div className='image flex-b-c'>
                <i className='bx bxl-linkedin' ></i>
                </div>
                <div className='title flex-b-c'>Linkedin</div>
            </div>
        </div>
    </div>
  )
}

export default Card4