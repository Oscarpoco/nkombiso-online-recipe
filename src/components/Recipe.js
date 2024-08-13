import React, { useState, useEffect } from "react";
import RecipeDetails from "./RecipeDetails";
import './Recipe.css';

function Recipe({ search }) {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (search) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data.meals || []);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [search]);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClosePopup = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      <div className="recipe-grid">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.idMeal} className="recipe-card" onClick={() => handleRecipeClick(recipe)}>
              <h2>{recipe.strMeal}</h2>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <p>{recipe.strInstructions.slice(0, 100)}...</p>
            </div>
          ))
        ) : (
          <p>There's nothing to display for this filter.</p>
        )}
      </div>
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default Recipe;
