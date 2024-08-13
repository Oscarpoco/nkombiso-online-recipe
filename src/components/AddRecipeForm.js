import React, { useState } from "react";
import './Login';

function AddRecipeForm({ closeForm, showRecipeForm, addRecipe, userId }) {
    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [category, setCategory] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [servings, setServings] = useState("");
    // const [picture, setPicture] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // Add this state

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!recipeName || !ingredients || !instructions || !category || !prepTime || !cookTime || !servings) {
            setErrorMessage("Please fill in all fields");
            return;
        }

        if (isSubmitting) return; // Prevent multiple submissions

        setIsSubmitting(true); // Disable submit button to prevent double submission

        const userDetails = {
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
            const response = await fetch('http://localhost:3003/recipes', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(`Failed to add recipe: ${errorData.message || 'Unknown error'}`);
                return;
            }

            const data = await response.json();
            addRecipe(data); // Add recipe to the list
            closeForm(); // Close the form
        } catch (err) {
            setErrorMessage("An error occurred: " + err.message);
        } finally {
            setIsSubmitting(false); // Re-enable the submit button
        }
    };

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

                    {/* <label>Upload a picture</label>
                    <input
                        type="file"
                        id="file-upload"
                        name="picture"
                        accept="image/*"
                        onChange={e => setPicture(e.target.files[0])}
                    /> */}

                    <div className="button">
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                        <button type="button" onClick={closeForm}>Close</button>
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </form>
            )}
        </div>
    );
}

export default AddRecipeForm;
