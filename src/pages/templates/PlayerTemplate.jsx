import React from 'react'
import { useParams } from 'react-router-dom'
import { PlayerCard } from '../../components'
import usePlayerFetch from '../../utils/hooks/usePlayerFetch'

const PlayerTemplate = () => {
    const { id } = useParams()

    const { playerData, scores, loading } = usePlayerFetch(id)

    if (loading) return 'Loading'

    return (
        <div className=' border w-1/2 mx-auto'>
            <div className='py-5'>
                <div className='text-3xl'>Player Name</div>
                <div>San Jose, CA</div>
            </div>
            <details>
                <summary>hello</summary>
                <details>
                    <summary>hello</summary>
                    Datatadtatdtatdtat
                </details>
            </details>
            <div>
                <PlayerCard players={scores} />
                <button onClick={() => console.log({ playerData, scores })}>
                    click me
                </button>{' '}
            </div>
        </div>
    )
}

export default PlayerTemplate
