import React from 'react'
import CalendarMain from '../components/calendar/CalendarMain'

const Calendar = () => {
  return (
    <div>
      <div>Calendar</div>

      <div className={styles.wrapper}>
        <div className={styles.list}>list goes here</div>
        <div className={styles.cal}>
          <CalendarMain />
        </div>
      </div>
    </div>
  )
}

export default Calendar

const styles = {
  wrapper: `grid grid-cols-2 mt-10`,
  cal: ``,
  list: ``,
}
