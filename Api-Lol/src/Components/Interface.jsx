import React, { useEffect, useState } from 'react'
import { useFetch } from '../Hooks/useFetch'
import { Target } from './Target';
import { ChampionDetail } from './ChampionDetail';

export const Interface = () => {
    // const urlPath = "/cdn/img/champion/splash/Aatrox_0.jpg"
    const url = "/cdn/15.12.1/data/es_MX/champion.json";
    const urlPath = "/cdn/15.12.1/img/champion/"
    // const urlDetails = "/cdn/15.12.1/data/es_MX/champion/Aatrox.json";

    const [isOther, setIsOther] = useState("champions")
    const {data, loading} = useFetch(url);
    const [recordData, setRecordData] = useState();
    const [dataDetail, setDataDetail] = useState({
        "name":"",
        "title":"",
        "description":"",
        "url":"",
    })


    //ARRAY CHAMPIONS
    useEffect(() => {
        if(data){
            try {
                const champions = Object.values(data);
                // console.log(champions);
                setRecordData(champions);
            } catch (error) {
                console.log("Hay un error al traer la data: " + error);
            }
        }
    }, [data]);
    //ARRAY SKILLS
    useEffect(() => {
        if(data){
            try {
                const champions = Object.values(data);
                // console.log(champions);
                setRecordData(champions);
            } catch (error) {
                console.log("Hay un error al traer la data: " + error);
            }
        }
    }, [data]);

    const handleDetail = (data) => {
        setDataDetail(data);
    }

  return (
    <>
    <div className="container">
        {!loading && recordData ? 
        isOther == "champions" ? 
        (recordData.map(record => {
            const urlChampion = urlPath+`${record.id}.png`;
            // console.log(record.id);
            return <Target key={record.id} pathImg={urlChampion} record={record} setIsOther={setIsOther} handleDetail={handleDetail}/>
        }))
        : (<ChampionDetail dataDetail={dataDetail}/>)
        : <p>Loading</p>}
        
     </div>
    </>
  )
}
