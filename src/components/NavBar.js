import React from "react";
import './NavBar.css';
import { FaSignInAlt } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { SiCodechef } from "react-icons/si";


function NavBar( { onSignInClick, onRegisterClick } ){

    return(

        <div className="NavBar">
            <div className="logo">Nkombiso <SiCodechef className="logo-icon" /></div>
            <div className="category">
                <div className="item">Breakfast</div>
                <div className="item">Lunch</div>
                <div className="item">Dinner</div>
            </div>
            <div className="signIn">
                <button type="submit" onClick={onSignInClick}  style={{border: 'none', fontSize: '1em', fontWeight: 'bold', color: 'black', justifyContent: 'end'}}>SignIn <FaSignInAlt /></button>
                <button type="submit" onClick={onRegisterClick}>Register <IoIosPersonAdd className="user-icon"/></button>
            </div>
            
        </div>
    )
}

export default NavBar;