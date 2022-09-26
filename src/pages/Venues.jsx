import React from 'react'
import { Outlet } from 'react-router-dom'

const Venues = () => {
  return (
    <div>
      Venues
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Venues
