import React, { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import { TablePK } from './components'
import NavBar from './components/navbar'
import routies from './pages'

function App() {
    const routes = useRoutes(routies)

    return (
        <div className='container mx-auto'>
            <NavBar />

            {routes}
        </div>
    )
}

export default App
