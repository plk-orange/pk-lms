import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { TablePK } from '../components'
import supabase from '../utils/db/supabase'

const Scores = () => {
    const [allScores, setScores] = useState([])

    useEffect(() => {
        async function getScores() {
            let { data: scores, error } = await supabase
                .from('scores')
                .select('*')
            setScores(scores)
        }
        getScores()
    }, [])

    if (allScores.length === 0) return 'Loading...'

    return (
        <div>
            Scores
            <div>
                <Outlet />
                <TablePK tableArray={allScores} />
            </div>
        </div>
    )
}

export default Scores
