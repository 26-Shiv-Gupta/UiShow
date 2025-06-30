import React from 'react'
import './Buttons.css'
import Button1 from './Button1'
import Button2 from './Button2'
import Button3 from './Button3'
import Button4 from './Button4'
import Button5 from './Button5'

const Buttons = () => {
  const elements = [
    <Button1 />, <Button2 />, <Button3 />, <Button4 />, <Button5 />
  ]

  return (
    <>
            <div className="comp-container">
                {elements.map((ele, index)=> (
                    <div className='ele-container Button-container'>
                        {ele}
                    </div>
                ))}
            </div>
        </>
  )
}

export default Buttons