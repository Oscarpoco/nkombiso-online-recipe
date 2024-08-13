import React from "react";
import './RecipeDetails.css';

function RecipeDetails({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p>{recipe.strInstructions}</p>
        <h3>Ingredients:</h3>
        <ul>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            const ingredient = recipe[`strIngredient${num}`];
            const measure = recipe[`strMeasure${num}`];
            return ingredient ? (
              <li key={num}>{`${ingredient} - ${measure}`}</li>
            ) : null;
          })}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default RecipeDetails;
