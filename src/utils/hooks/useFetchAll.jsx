import React, { useEffect, useState } from 'react'
import supabase from '../db/supabase'

const useFetchAll = (table) => {

    const [dataList, setDataList] = useState([])
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState({})

    useEffect(() => {
        setLoading(true)
        async function getAll() {
            let {data: total_players1, error} = await supabase.from('total_players1').select('*')
            setDataList(total_players1)
            setLoading(false)
        }
            getAll()
        
    }, [])
 

    return {dataList, loading, err}
}

export default useFetchAll