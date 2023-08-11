import React from 'react'

const VerticalLine = (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className='vertical-line' style={{height: `${props.height}px`}}></div>
    </div>
  )
}

export default VerticalLine