import React from 'react'
import VerticalLine from './VerticalLine'

const TimeStamp = (props) => {
  return (
    <>
        <div className='time-stamp'>
            <div>
                {props.time}
            </div>
        </div>
        <VerticalLine height={20}/>
    </>
  )
}

export default TimeStamp