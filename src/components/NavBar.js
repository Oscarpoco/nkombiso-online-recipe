import React from "react";
import './NavBar.css';
import { FaSignInAlt } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { SiCodechef } from "react-icons/si";
import { CgProfile } from "react-icons/cg";


function NavBar( { onSignInClick, onRegisterClick, onSignIn } ){

    return(

        <div className="NavBar">
            <div className="logo">Nkombiso <SiCodechef className="logo-icon" /></div>
            <div className="category">
                <div className="item">Breakfast</div>
                <div className="item">Lunch</div>
                <div className="item">Dinner</div>
            </div>

            {!onSignIn ? (
                
            <div className="signIn">
                <button type="submit" onClick={onSignInClick}  style={{border: 'none', cursor: 'pointer', fontSize: '1.1em', fontWeight: 'bold', color: 'black', justifyContent: 'start'}}>SignIn <FaSignInAlt /></button>
                <button type="submit" onClick={onRegisterClick}>Register <IoIosPersonAdd className="user-icon"/></button>
            </div>

            ):  <div className="prifile">
                    <button type="submit"   style={{border: 'none', fontSize: '1.1em', fontWeight: 'bold', color: 'black', display: 'flex',justifyContent: 'end', alignItems: 'center'}}>Profile <CgProfile  className="user" style={{fontSize: '1.5em'}}/></button>
                </div>
            }

               
    
            
            
            
        </div>
    )
}

export default NavBar;