import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import DayPlan from './components/DayPlan'
// import { itinerary } from './itinerary'
import Panel from './components/Panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Hotel from './components/Hotel'

const App = () => {
  const [showPanel, setShowPanel] = useState(false)
  const [showHotelDetails, setShowHotelDetails] = useState(false)
  const [itinerary, setItinerary] = useState();
  const [activeDay, setActiveDay] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const activeDayHeader = document.getElementById(`day-header-${activeDay}`)
    if(activeDayHeader) {
      const rect = activeDayHeader.getBoundingClientRect();
      if(rect.top <= 0) {
        activeDayHeader.style.position = 'sticky';
        activeDayHeader.style.top = '0px';
        activeDayHeader.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
      } else if(rect.top > window.innerHeight) {
        setActiveDay((activeDay) => activeDay-1);
      } else {
        activeDayHeader.style.boxShadow = 'unset';
      } 
    }

    const nextDayHeader = document.getElementById(`day-header-${activeDay+1}`)
    if(nextDayHeader) {
      const rect = nextDayHeader.getBoundingClientRect();
      if(rect.bottom < window.innerHeight) {
        activeDayHeader.style.position = 'unset';
        activeDayHeader.style.top = 'unset';
        activeDayHeader.style.boxShadow = 'unset';
        setActiveDay((activeDay) => activeDay+1);
      }
    }
  }

  useEffect(() => {
    fetch('https://omanshu840.github.io/Trip-Plan-Data/chikkamagaluru.json')
    .then(response => response.json())
    .then(data => setItinerary(data))
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeDay, handleScroll])

  useEffect(() => {
    if(itinerary) {
      const now = new Date().getTime();
      const countDownDate = new Date(itinerary.startTime).getTime();
      const distance = now - countDownDate;

      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const dayElement = document.getElementById(`day-plan-${day}`);
      if(dayElement) {
        dayElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }, [itinerary])

  if(!itinerary) {
    return <></>
  }

  return (
    <>
      <div>
        <FontAwesomeIcon className="info-icon" icon={faInfoCircle} onClick={() => setShowPanel(true)}/>
      </div>
      <Header itinerary={itinerary}/>
      {itinerary.plan.map((dayPlan, index) => {
        return (
          <DayPlan {...dayPlan} setShowHotelDetails={setShowHotelDetails} index={index}/>
        )
      })}
      {itinerary.moreInfo && <Panel show={showPanel} handleClose={() => {setShowPanel(false)}} moreInfo={itinerary.moreInfo}/>}
      {itinerary.hotelDetails && <Hotel show={showHotelDetails} handleClose={() => {setShowHotelDetails(false)}} {...itinerary.hotelDetails}/>}
    </>
  )
}

export default App
