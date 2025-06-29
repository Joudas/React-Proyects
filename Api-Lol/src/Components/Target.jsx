import React from 'react'
import "../css/Style.css";
import { ChampionDetail } from './ChampionDetail';

export const Target = ({pathImg, record, setIsOther, handleDetail}) => {
    // const urlDetails = "https://ddragon.leagueoflegends.com/cdn/14.22.1/data/en_US/champion/Anivia.json";

    const handlePage = (pag) => {
        setIsOther(pag);
    }
    
  return (
    <>
        <div className="card">
            <div className="container-img">
                <img src={pathImg} alt={record.name} onClick={() => {handlePage("champion"); handleDetail(record)}} />
            </div>
            <div className="container-text">
                <h2 className='merriweather'>{record.name}</h2>
                <p className='truculenta'>{record.title}</p>
            </div>
        </div>

    </>
  )
}
