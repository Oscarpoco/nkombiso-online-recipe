import React, { useState } from "react";
import './Login';

function AddRecipeForm({ closeForm, showRecipeForm, setRecipes, userId, recipe, editMode }) {
    const [recipeName, setRecipeName] = useState(recipe ? recipe.recipeName : "");
    const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : "");
    const [instructions, setInstructions] = useState(recipe ? recipe.instructions : "");
    const [category, setCategory] = useState(recipe ? recipe.category : "");
    const [prepTime, setPrepTime] = useState(recipe ? recipe.prepTime : "");
    const [cookTime, setCookTime] = useState(recipe ? recipe.cookTime : "");
    const [servings, setServings] = useState(recipe ? recipe.servings : "");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!recipeName || !ingredients || !instructions || !category || !prepTime || !cookTime || !servings) {
            setErrorMessage("Please fill in all fields");
            return;
        }

        const recipeDetails = {
            recipeName,
            ingredients,
            instructions,
            category,
            prepTime,
            cookTime,
            servings,
            userId 
        };

        try {
            if (editMode) {
                // Update existing recipe
                const response = await fetch(`http://localhost:3003/recipes/${recipe.id}`, {
                    method: "PATCH",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(recipeDetails),
                });
                
                if (!response.ok) throw new Error('Failed to update recipe');
        
                const updatedRecipe = await response.json();
        
                // Update the recipe in the list
                setRecipes(prevRecipes => prevRecipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r));
            } else {
                // Add new recipe
                const response = await fetch('http://localhost:3003/recipes', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(recipeDetails),
                });
                
                if (!response.ok) throw new Error('Failed to add recipe');
        
                const newRecipe = await response.json();
        
                // Add the new recipe to the list
                setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
            }
        
            closeForm(); // Close the form after submission
        } catch (err) {
            setErrorMessage(`An error occurred: ${err.message}`);
        }
    }

    return (
        <div className="user-profile">
            {showRecipeForm && (
                <form onSubmit={handleSubmit} className="popup" style={{ padding: '0' }}>
                    <h2>You're about to share something delicious! <br /> <span>Please fill in the details</span></h2>

                    <label>Recipe Name</label>
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        value={recipeName}
                        onChange={e => setRecipeName(e.target.value)}
                    />

                    <label>Ingredients</label>
                    <input
                        type="text"
                        placeholder="Ingredients"
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)}
                    />

                    <label>Instructions</label>
                    <input
                        type="text"
                        placeholder="Instructions"
                        value={instructions}
                        onChange={e => setInstructions(e.target.value)}
                    />

                    <label>Category</label>
                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    />

                    <label>Preparation Time</label>
                    <input
                        type="text"
                        placeholder="Preparation Time"
                        value={prepTime}
                        onChange={e => setPrepTime(e.target.value)}
                    />

                    <label>Cooking Time</label>
                    <input
                        type="text"
                        placeholder="Cooking Time"
                        value={cookTime}
                        onChange={e => setCookTime(e.target.value)}
                    />

                    <label>Servings</label>
                    <input
                        type="text"
                        placeholder="Servings"
                        value={servings}
                        onChange={e => setServings(e.target.value)}
                    />

                    <div className="button">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={closeForm}>Close</button>
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </form>
            )}
        </div>
    );
}

export default AddRecipeForm;
