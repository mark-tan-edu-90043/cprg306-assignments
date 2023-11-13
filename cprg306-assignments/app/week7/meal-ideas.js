'use client';

import { useState } from "react";
import { useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}");
        const data = await response.json();
        return data.meals || []; //Returns the data concatenated to the array
    } catch (error) {
        console.error('baka:', error);
        return[]; //Returns nothing
    }
}

export default function mealIdeas({ingredient}){
    const [meals, setMeals] = userState([]); //Sets this to an empty array

    const loadMealIdeas = async() => {
        const fetchMealIdeas = fetchMealIdeas(ingredient);
        setMeals(fetchMealIdeas);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]) //Run whenever ingerdient changes


    return (
        <div>
            <h1> Meal ideas for {ingredient} </h1>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    )

}