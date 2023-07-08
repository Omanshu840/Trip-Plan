import React from 'react'
import Header from './components/Header'
import DayPlan from './components/DayPlan'
import { itinerary } from './itinerary'

const App = () => {
  return (
    <>
      <Header/>
      {itinerary.plan.map((dayPlan) => {
        return (
          <DayPlan {...dayPlan}/>
        )
      })}
    </>
  )
}

export default App
