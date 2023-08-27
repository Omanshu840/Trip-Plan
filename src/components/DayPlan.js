import React from 'react'
import SectionContent from './SectionContent'

const DayPlan = (props) => {
  return (
    <div id={`day-plan-${props.index}`} className='day-plan'>
        <div id={`day-header-${props.index}`}className='day-header p-3'>
            <h1 className='title'>{props.title}</h1>
            <h2 className='subtitle'>{props.subtitle}</h2>
        </div>
        <div className='py-3 px-3' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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