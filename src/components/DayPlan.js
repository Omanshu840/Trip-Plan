import React from 'react'
import SectionContent from './SectionContent'

const DayPlan = (props) => {
  return (
    <div className='day-plan py-3 px-3'>
        <div
            style={{
                textAlign: 'center'
            }}
        >
            <h1 className='title'>{props.title}</h1>
            <h2 className='subtitle'>{props.subtitle}</h2>
        </div>
        {props.dayPlan.map((activity) => {
            return (
                <SectionContent
                    {...activity}
                />
            )
        })}
    </div>
  )
}

export default DayPlan