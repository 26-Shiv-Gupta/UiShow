import React from 'react'
import './Cards.css'

const Card9 = () => {

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    }).catch((err) => {
      console.error('Failed to copy:', err);
    });
  };

  return (
    <div className='card card9'>
        <div className='container'>
            <div className='box box1 flex-b-c' onClick={() => handleCopy('#0000FF')}><h5>#0000FF</h5></div>
        <div className='box box2 flex-b-c' onClick={() => handleCopy('#4949F7')}><h5>#4949F7</h5></div>
        <div className='box box3 flex-b-c' onClick={() => handleCopy('#6E6EDF')}><h5>#6E6EDF</h5></div>
        <div className='box box4 flex-b-c' onClick={() => handleCopy('#9292B6')}><h5>#9292B6</h5></div>
        <div className='box box5 flex-b-c' onClick={() => handleCopy('#BBBBC2')}><h5>#BBBBC2</h5></div>
        </div>
        <div className='content'>
          Click to copy
        </div>
    </div>
  )
}

export default Card9