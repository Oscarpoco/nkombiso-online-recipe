// import React from "react";
// import './MyRecipe.css';

// function MyRecipe({ recipes }) {
//     // Check if recipes are available
//     const hasRecipes = recipes && recipes.length > 0;

//     return (
//         <div className={`my-recipe ${hasRecipes ? 'visible' : 'hidden'}`}>
//             <div className="my-space">
//                 <div className="menu">
//                     {hasRecipes ? (
//                         recipes.map((recipe) => (
//                             <div key={recipe.id} className="recipe-card">
//                                 <h4>{recipe.recipeName}</h4>
//                                 {recipe.ingredients && <p><strong>Ingredients:</strong> {recipe.ingredients}</p>}
//                                 {recipe.instructions && <p><strong>Instructions:</strong> {recipe.instructions}</p>}
//                                 {recipe.category && <p><strong>Category:</strong> {recipe.category}</p>}
//                                 {recipe.prepTime && <p><strong>Preparation Time:</strong> {recipe.prepTime}</p>}
//                                 {recipe.cookTime && <p><strong>Cooking Time:</strong> {recipe.cookTime}</p>}
//                                 {recipe.servings && <p><strong>Servings:</strong> {recipe.servings}</p>}
//                                 {recipe.picture && <img src={recipe.picture} alt={recipe.recipeName} />}
//                             </div>
//                         ))
//                     ) : (
//                         <p>No recipes found.</p>
//                     )}
//                 </div>
//             </div>
//             <div className="title">
//                 <h3>MORE RECIPES</h3>
//             </div>
//         </div>
//     );
// }

// export default MyRecipe;


import React from "react";
import './MyRecipe.css';

function MyRecipe({ recipes, deleteRecipe, editRecipe }) {
    // Check if recipes are available
    const hasRecipes = recipes && recipes.length > 0;

    return (
        <div className={`my-recipe ${hasRecipes ? 'visible' : 'hidden'}`}>
            <div className="my-space">
                <div className="menu">
                    {hasRecipes ? (
                        recipes.map((recipe) => (
                            <div key={recipe.id} className="recipe-card">
                                <h2>{recipe.recipeName}</h2>
                                {recipe.ingredients && <p><strong>Ingredients:</strong> {recipe.ingredients}</p>}
                                {recipe.instructions && <p><strong>Instructions:</strong> {recipe.instructions}</p>}
                                {recipe.category && <p><strong>Category:</strong> {recipe.category}</p>}
                                {recipe.prepTime && <p><strong>Preparation Time:</strong> {recipe.prepTime}</p>}
                                {recipe.cookTime && <p><strong>Cooking Time:</strong> {recipe.cookTime}</p>}
                                {recipe.servings && <p><strong>Servings:</strong> {recipe.servings}</p>}
                                {recipe.picture && <img src={recipe.picture} alt={recipe.recipeName} />}
                                
                                <div className="recipe-actions">
                                    <button style={{border: '2px solid grey', padding: '.5em 1em', fontWeight: 'bold', background: 'grey', boxShadow: '0 4px 8px rgba(0, 0,0, .1)', color: 'white', marginRight: '.3em'}} onClick={() => editRecipe(recipe)}>EDIT</button>
                                    <button style={{border: '2px solid grey', padding: '.5em 1em', fontWeight: 'bold', background: 'grey', boxShadow: '0 4px 8px rgba(0, 0,0, .1)', color: 'white', marginLeft: '.3em'}} onClick={() => deleteRecipe(recipe.id)}>DELETE</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No recipes found.</p>
                    )}
                </div>
            </div>
            <div className="title">
                <h3>MORE RECIPES</h3>
            </div>
        </div>
    );
}

export default MyRecipe;
