import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { PlayerCard, TablePK } from '../components'
import supabase from '../utils/db/supabase'
import useFetchAll from '../utils/hooks/useFetchAll'

const Scores = () => {

    const { dataList, loading, err } = useFetchAll(
        "barpg_barleague_scores_scores"
      );
    
      if (loading) <p>Loading...</p>;
    
    // const [allScores, setScores] = useState([])

    // useEffect(() => {
    //     async function getScores() {
    //         let { data: teams, error } = await supabase
    //             .from('teams')
    //             .select('*')
    //         setScores(teams)
    //     }
    //     getScores()
    // }, [])

    // if (allScores === null) return 'Loading...'

    return (
        <div>
            Scores
            <div>
                
                <PlayerCard players={dataList} />
                {/* <TablePK tableArray={allScores} /> */}
            </div>
        </div>
    )
}

export default Scores
