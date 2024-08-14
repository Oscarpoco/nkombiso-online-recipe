// import React from "react";
// import './NavBar.css';
// import { FaSignInAlt } from "react-icons/fa";
// import { IoIosPersonAdd } from "react-icons/io";
// import { SiCodechef } from "react-icons/si";
// import { CgProfile } from "react-icons/cg";


// function NavBar( { onSignInClick, onRegisterClick, onSignIn, onProfileShow, onSignOut, onBreakfast, onLunch, onDinner } ){


//     return(

//         <div className="NavBar">
//             <div className="logo">Nkombiso <SiCodechef className="logo-icon" /></div>
//             <div className="category">
//                 <div className="item" onClick={onBreakfast}>Breakfast</div>
//                 <div className="item" onClick={onLunch}>Lunch</div>
//                 <div className="item" onClick={onDinner}>Dinner</div>
//             </div>

//             {!onSignIn ? (
                
//             <div className="signIn">
//                 <button type="submit" onClick={onSignInClick}  style={{border: 'none', cursor: 'pointer', fontSize: '1.1em', fontWeight: 'bold', color: 'black', gap: '.3em'}}>SignIn <FaSignInAlt className="user-icon"/></button>
//                 <button type="submit" onClick={onRegisterClick}>Register <IoIosPersonAdd className="user-icon"/></button>
//             </div>

//             ):  <div className="profile">
//                     <button type="submit"  onClick={onProfileShow} style={{border: 'none', fontSize: '1.1em', fontWeight: 'bold', color: 'black', display: 'flex',justifyContent: 'center', alignItems: 'center'}}>Profile <CgProfile  className="user" style={{fontSize: '1.5em'}}/></button>
//                     <button type="submit"  onClick={onSignOut} style={{border: 'none', fontSize: '1.1em', fontWeight: 'bold', color: 'black', display: 'flex',justifyContent: 'center', alignItems: 'center'}}>Logout</button>
//                 </div>
//             }

               
    
            
            
            
//         </div>
//     )
// }

// export default NavBar;


import React, { useState } from "react";
import './NavBar.css';
import { FaSignInAlt } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { SiCodechef } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi"; // Hamburger icon

function NavBar({ onSignInClick, openMenu, closeMenu, isMenuOpen,onRegisterClick, onSignIn, onProfileShow, onSignOut, onBreakfast, onLunch, onDinner }) {

    return (
        <div className="NavBar">
            <div className="logo">
                Nkombiso <SiCodechef className="logo-icon" />
            </div>
            <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
                <div className="category">
                    <div className="item" onClick={onBreakfast}>Breakfast</div>
                    <div className="item" onClick={onLunch}>Lunch</div>
                    <div className="item" onClick={onDinner}>Dinner</div>
                </div>

                {!onSignIn ? (
                    <div className="signIn">
                        <button type="submit" onClick={onSignInClick} style={{ border: 'none', cursor: 'pointer', fontSize: '1.1em', fontWeight: 'bold', color: 'black', gap: '.3em' }}>SignIn <FaSignInAlt className="user-icon" /></button>
                        <button type="submit" onClick={onRegisterClick}>Register <IoIosPersonAdd className="user-icon" /></button>
                    </div>
                ) : (
                    <div className="profile">
                        <button type="submit" onClick={onProfileShow} style={{ border: 'none', fontSize: '1.1em', fontWeight: 'bold', color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Profile <CgProfile className="user" style={{ fontSize: '1.5em' }} /></button>
                        <button type="submit" onClick={onSignOut} style={{ border: 'none', fontSize: '1.1em', fontWeight: 'bold', color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Logout</button>
                    </div>
                )}
            </div>
            <div className="menu-toggle" onClick={openMenu}>
                <FiMenu className="menu-icon" />
            </div>
        </div>
    );
}

export default NavBar;
