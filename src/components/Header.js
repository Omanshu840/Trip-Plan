import React from 'react'

const Header = (props) => {
    const itinerary = props.itinerary
    return (
        <div className='header'>
            <h1 className='heading'>{itinerary.destination}</h1>
            <h2 className='subtitle mb-3'>Trip Plan</h2>
            <h5>{itinerary.dates}</h5>
            <h5>{itinerary.duration}</h5>
        </div>
    )
}

export default Header