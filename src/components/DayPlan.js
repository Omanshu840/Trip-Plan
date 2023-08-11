import React from 'react'
import SectionContent from './SectionContent'

const DayPlan = (props) => {
  return (
    <div className='day-plan'>
        <div id={`day-header-${props.index}`}className='day-header p-3'>
            <h1 className='title'>{props.title}</h1>
            <h2 className='subtitle'>{props.subtitle}</h2>
        </div>
        <div className='py-3 px-3'>
        {props.dayPlan.map((activity) => {
            return (
                <SectionContent
                    openHotelDetails={() => props.setShowHotelDetails(true)}
                    {...activity}
                />
            )
        })}
        </div>
    </div>
  )
}

export default DayPlan