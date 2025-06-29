import React, { useContext, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { FirstLetterMeals } from './FirstLetterMeals';
import MenuContext from '../Context/MenuContext';
import "../Css/style.css";
export const Menu = ({handlePage}) => {
    // const {data, loading, error} = useFetch("/api/json/v1/1/categories.php");
    // const {data, loading, error} = useFetch("/api/json/v1/1/filter.php?i=chicken");
    // const {data, loading, error} = useFetch("/api/json/v1/1/list.php?c=list");
    // const {data, loading, error} = useFetch("/api/json/v1/1/list.php?i=list");    
    
    const { handleDataMeal, firstLetter, handleInputLetter, url, handleUrl } = useContext(MenuContext);

    const [recordData, setRecordData] = useState();
    
    const {data, loading, error} = useFetch(url);

    useEffect(() => {handleUrl(`/api/json/v1/1/search.php?f=${firstLetter ? firstLetter : ""}`)},[firstLetter])
    // useEffect(() => {setUrl(`/api/json/v1/1/categories.php`)},[firstLetter])
    // useEffect(() => {if(error)console.log(error)},[error]);
    useEffect(() => {
        if(data){
            let dataResponse = Object.values(data);
            setRecordData(dataResponse[0]);
        }
        
    }, [data]);
    // useEffect(() => {console.log(firstLetter),[firstLetter]})

    const handleClickDetail = (page, meal) => {
        if(meal)handleDataMeal(meal);
        handlePage(page);

    }

    return (
    <>
    <div className="container">
        <div className="container-input">
            <p>Search a meal by first letter</p>
            <input type="text" placeholder='Search by letter' maxLength={1} onChange={(e) => handleInputLetter(e)}/>
        </div>
        <div className="container-food">
            {firstLetter && firstLetter != "" ? 
            (
                !loading && Array.isArray(recordData) && firstLetter ? recordData.map(meals => {
                    return <FirstLetterMeals handleClickDetail={handleClickDetail} meals={meals} key={meals.idMeal}/>
                }) 
            : <p className='merriweather f-2'>Loading meals</p>)     
            : <p className='merriweather f-2'>No selected food</p>}
        </div>
        
    </div>
    </>
    )
}
