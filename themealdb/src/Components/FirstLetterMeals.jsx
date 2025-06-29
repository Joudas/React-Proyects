import React, { useContext, useEffect } from 'react'
import "../Css/style.css";
import MenuContext from '../Context/MenuContext';
export const FirstLetterMeals = ({meals, handleClickDetail}) => {
  const {handleUrlMeal} = useContext(MenuContext);
  // useEffect(() => {
  //   console.log(meals.strMealThumb);
  // }, [meals])

  return (
    <>
      <div className="content-meals">
        <p className="truculenta f-2">{meals.strMeal}</p>
        <img src={meals.strMealThumb} alt="Meals img loading..." onClick={()=>handleClickDetail("detail", meals)}/>
      </div>
    </>
  )
}
