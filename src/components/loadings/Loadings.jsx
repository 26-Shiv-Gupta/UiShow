import React from 'react'
import './Loadings.css'
import Loading1 from './Loading1'
import Loading2 from './Loading2'

const Loadings = () => {
    const elements = [
        <Loading1 />, <Loading2 />
    ]
    return (
        <>
            <div className="comp-container">
                {elements.map((ele, index) => (
                    <div className='ele-container'>
                        {ele}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Loadings