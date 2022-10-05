import React, { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import { TablePK } from './components'
import NavBar from './components/navbar'
import NotStaying from './NotStaying'
import routies from './pages'
import { questions } from './utils/db/staticdb'

function App() {
    const routes = useRoutes(routies)

    return (
        <div className='container mx-auto'>
            {/* <NavBar />
<
            {routes} */}
            <NotStaying list={questions} />
        </div>
    )
}

export default App
