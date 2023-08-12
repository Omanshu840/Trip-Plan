import React, { useEffect, useState } from 'react'

const Header = (props) => {
    const [countDown, setCountDown] = useState(null)
    const itinerary = props.itinerary

    useEffect(() => {
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();
          
            // Find the distance between now and the count down date
            // console.log(props.startTime, props)
            var countDownDate = new Date(itinerary.startTime).getTime();
            var distance = countDownDate - now;
          
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountDown({days, hours, minutes, seconds})
          
            // If the count down is finished, write some text
            if (distance < 0) {
              clearInterval(x);
              setCountDown(null)
            }
          }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='header'>
            <h1 className='heading'>{itinerary.destination}</h1>
            <h2 className='subtitle mb-3'>Trip Plan</h2>
            <h5>{itinerary.dates}</h5>
            <h5>{itinerary.duration}</h5>
            {countDown && 
                <h2 className='mt-3'>{countDown.days}d : {countDown.hours}h : {countDown.minutes}m : {countDown.seconds}s</h2>
            }
        </div>
    )
}

export default Header