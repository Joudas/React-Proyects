/* eslint-disable no-useless-catch */
import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const response = await fetch(url);
                if(!response.ok){
                    setError(response.status);
                    setError(response.statusText);
                }else{
                    setData(await response.json());
                }
            }catch(err){
                setError(err);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

  return{data, loading, error}
}
