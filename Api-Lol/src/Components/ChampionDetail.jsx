import React, { useEffect, useState } from 'react'
import { ChampionSkills } from './ChampionSkills';
import "../css/Style.css";
import { useFetch } from '../Hooks/useFetch';

export const ChampionDetail = ({dataDetail}) => {
    const urlSplash = `/cdn/img/champion/splash/${dataDetail.id}_0.jpg`;
    const urlDetail = `/cdn/15.12.1/data/es_MX/champion/${dataDetail.id}.json`;
    const {data, loading} = useFetch(urlDetail);
    const [recordData, setRecordData] = useState();
    const [urlPassive, setUrlPassive] = useState();
    //DATA DETAILS GENERATE
    useEffect(() => {
        if(data){
            try {
                const champion = Object.values(data);
                setRecordData(champion[0]);
                console.log(champion[0]);

            } catch (error) {
                console.log("Hay un error al traer la data: " + error);
            }
        }
    }, [data])
    //URL IMAGE GENERATE
    useEffect(() => {
        if(recordData && recordData.spells){
            // console.log(arraySkill);
            setUrlPassive(`/cdn/15.12.1/img/passive/${recordData.passive.image.full}`);
        }

    }, [recordData])
    
    
  return (

    <>
        <div className="container-detail">
            <div className="text">
                <p className='text-name merriweather'>{dataDetail.name}</p>
                <p className='text-title truculenta'>{dataDetail.title}</p>
                <div className="text-blurb">
                <p className=' truculenta'>{dataDetail.blurb}</p>
                </div>
            </div>
            <div className="container-champion">
                <div className="img-splash">
                    <img src={urlSplash} alt="Cargando splash..."/>
                </div>
                <div className="skills-container">
                    {urlPassive && !loading ?
                    (<>
                    
                    {
                        recordData.spells.map(record => {
                        return( 
                            
                            <ChampionSkills key={record.id} data={record}/>
                            
                        )})
                    }
                    <div className="img-skills">
                        <p className='name merriweather' >{recordData.passive.name}</p>
                        <img  className='imgSkill' src={urlPassive} alt="Pasiva Champ" /> 
                        <p className='description truculenta' >{recordData.passive.description}</p>
                    </div>
                    </>) : 
                    <p>Loading...</p>}
                </div>
            </div>
            
        </div>
    </>
  )
}
