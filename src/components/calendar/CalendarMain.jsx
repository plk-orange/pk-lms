import React, { useState } from 'react'
import { Calendar } from 'react-calendar'
import './styles.css'

const CalendarMain = () => {
  const [value, onChange] = useState(new Date())

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType='US'
        showNeighboringMonth={false}
        showNavigation={false}
      />
    </div>
  )
}

export default CalendarMain
