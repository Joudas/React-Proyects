import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line no-useless-catch
        try {
        await setLoading(true);
        const response = await fetch(url);
        if(!response.ok){
          throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }
        const jsonData = await response.json();
        setData(jsonData.data);

      // eslint-disable-next-line no-useless-catch
      } catch (error) {
        throw error;
      }finally{
          setLoading(false);
      }

    };
    fetchData();
  }, [url]);


  return{data, loading};
  
}
