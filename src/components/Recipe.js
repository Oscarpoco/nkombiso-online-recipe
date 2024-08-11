import React, { useState, useEffect } from "react";
import './Recipe.css';

function Recipe({ search }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch data from TheMealDB API using the search term
    if (search) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data.meals || []); // Handle cases where no meals are found
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [search]);

  return (
    <div className="recipe-grid">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strInstructions.slice(0, 20)}...</p> {/* Limiting instructions to 100 characters */}
          </div>
        ))
      ) : (
        <p>There's nothing to display for this filter.</p>
      )}
    </div>
  );
}

export default Recipe;
