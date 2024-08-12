import React from "react";
import './Login.css';

function AddRecipeForm({closeForm, showRecipeForm}){
    return(
       <div className="user-profile">
        {showRecipeForm && (
             <div className="popup" style={{padding: '1em'}}>
             <h2>You're about to share something delicious! <br></br> <span>Please fill in the details</span></h2>

             <label>Recipe Name</label>
             <input
             type="text"
             placeholder="Recipe Name"
             ></input>

             <label>Ingredients</label>
             <input
             type="text"
             placeholder="Ingredients"
             ></input>

             <label>Instructions</label>
             <input
             type="text"
             placeholder="Instructions"
             ></input>

             <label>Category</label>
             <input
             type="text"
             placeholder="Category"
             ></input>

             <label>Preparation Time</label>
             <input
             type="text"
             placeholder="Preparation Time"
             ></input>


             <label>Cooking Time</label>
             <input
             type="text"
             placeholder="Cooking Time"
             ></input>


             <label>Servings</label>
             <input
             type="text"
             placeholder="Servings"
             ></input>

            <label>Upload a link for a picture</label>
             <input type="file" 
             id="file-upload" 
             name="picture" 
             accept="image/*" 
             required>
             </input>

             <div className="button">
                 <button type="submit">Submit</button>
                 <button onClick={closeForm}>Close</button>
             </div>
         </div>
        )}
       </div>
    )
}

export default AddRecipeForm;