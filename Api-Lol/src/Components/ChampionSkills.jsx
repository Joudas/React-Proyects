import React from 'react'
import "../css/Style.css";


export const ChampionSkills = ({data}) => {
    const urlSkills = `/cdn/15.12.1/img/spell/${data.image.full}`;
    
  return (
    <>
    <div className="img-skills">
        <p className='name merriweather'>{data.name}</p>
        <img  className='imgSkill 'src={urlSkills} href={data.id}/>
        <p className='description truculenta'>{data.description}</p>
    </div>
    </>
  )
}
