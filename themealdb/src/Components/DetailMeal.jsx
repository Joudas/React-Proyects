import React, { useContext, useEffect, useState } from 'react'
import MenuContext from '../Context/MenuContext'
import { IngredientList } from './IngredientList';

export const DetailMeal = () => {
    const {handleUrl, dataMeal} = useContext(MenuContext);
    const [holderMeal, setHolderMeal] = useState([]);
    useEffect(() => {
        const ingredientList = [];
        if(dataMeal){
            for(let i=1; i<=20; i++){
                const ingredientKey = `strIngredient${i}`;
                const measureKey = `strMeasure${i}`;
                
                const ingredient = dataMeal[ingredientKey];
                const measure = dataMeal[measureKey];

                if(ingredient && ingredient.trim() != ""){
                    ingredientList.push({
                        ingredient: ingredient.replace(" ", "_"),
                        measure: measure ? measure : ""
                    })
                }
            }
            setHolderMeal(ingredientList);
        }else{
            setHolderMeal([]);
        }

    }, [dataMeal])
    // useEffect(() => {
    // }, [])
    
  return (
    <>
    <div className="container-meal">
        <div className="text-content">
            <p>{dataMeal.strMeal}</p>
            <img src={dataMeal.strMealThumb} alt="MEAL" style={{width:"20rem"}}/>
            <p>{dataMeal.strInstructions}</p>
        </div>
        <div className="ingredient-content">
            {

            holderMeal && Array.isArray(holderMeal) ? 
            holderMeal.map(ingredients => {
                return <IngredientList key={ingredients.ingredient} ingredients={ingredients}/>
            })
            :
            <p>Searching data detail</p>
            }
        </div>
    </div>
            
    </>
  )
}
