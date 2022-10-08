import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import supabase from "../db/supabase"

const usePlayerFetch = (playerId) => {

  const [loading, setLoading] = useState(false)
  const [scores, setScores] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    async function getPlayer() {
      let { data: barpg_barleague_scores_scores, error } = await supabase
        .from("barpg_barleague_scores_scores")
        .select("*")
        .eq("player_id", playerId)
      setScores(barpg_barleague_scores_scores)
     
      setLoading(false)
    }
    getPlayer()
  }, [playerId])

  return { scores, loading, error }
}

export default usePlayerFetch
