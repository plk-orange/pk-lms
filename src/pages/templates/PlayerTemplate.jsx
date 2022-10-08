import React from "react"
import { useParams } from "react-router-dom"
import { PlayerCard } from '../../components'
import usePlayerFetch from "../../utils/hooks/usePlayerFetch"

const PlayerTemplate = () => {
  const { id } = useParams()

  const { playerData, scores, loading } = usePlayerFetch(id)

  if (loading) return "Loading"

  return (
    <div>
     
      <div>
        <PlayerCard players={scores} />
        <button onClick={() => console.log({ playerData, scores })}>
          click me
        </button>{" "}
      </div>
    </div>
  )
}

export default PlayerTemplate
