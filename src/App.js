import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import DayPlan from './components/DayPlan'
// import { itinerary } from './itinerary'
import Panel from './components/Panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [showPanel, setShowPanel] = useState(false)
  const [itinerary, setItinerary] = useState();

  useEffect(() => {
    fetch('https://omanshu840.github.io/Trip-Plan-Data/chikkamagaluru.json')
    .then(response => response.json())
    .then(data => setItinerary(data))
  }, [])

  if(!itinerary) {
    return <></>
  }

  return (
    <>
      <div>
        <FontAwesomeIcon className="info-icon" icon={faInfoCircle} onClick={() => setShowPanel(true)}/>
      </div>
      <Header itinerary={itinerary}/>
      {itinerary.plan.map((dayPlan) => {
        return (
          <DayPlan {...dayPlan}/>
        )
      })}
      <Panel show={showPanel} handleClose={() => {setShowPanel(false)}} moreInfo={itinerary.moreInfo}/>
    </>
  )
}

export default App
