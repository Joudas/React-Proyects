import React, { useState, useEffect } from 'react'
import MenuContext from '../Context/MenuContext';

export const IngredientList = ({ingredients}) => {
    const [url, setUrl] = useState();
    useEffect(() => {
        if(ingredients) setUrl(`https://www.themealdb.com/images/ingredients/${ingredients.ingredient}.png`)
        else console.log("meal no existe")
        
    }, [ingredients])

    
  return (
      <>
      <div className='ingredient'>
        <p>Ingredients: {ingredients.ingredient}</p>
        <img src={url} alt="a?"/>
        <p>{ingredients.measure}</p>
      </div>
    </>
  )
}
