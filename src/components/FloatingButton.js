import React from "react";
import './MyRecipe';

function FloatingButton({handleClickForm}){
    return(

        <div className="my-button">
            <button type="submit" onClick={handleClickForm}><span>+</span></button>
        </div>
    )
}

export default FloatingButton;