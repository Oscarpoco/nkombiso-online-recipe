import React from "react";
import './Login.css';

function Login({ showSignIn, showRegister, onClose, onRegisterClick }) {
    return (
        <div className={`user-profile ${showSignIn || showRegister ? 'show' : ''}`}>

            {/* LOGIN FUNCTION */}
            {showSignIn && (
                <div className="popup">

                    <h2>Hi, welcome back! We missed you <br></br> <span>Please Login</span></h2>
                    <label>Username</label>
                    <input
                    type="text"
                    placeholder="Email"
                    ></input>
                    <label>Password</label>
                    <input
                    type="text"
                    placeholder="Password"
                    ></input>

                    <div className="button">
                        <button type="submit">Submit</button>
                        <button onClick={onClose}>Close</button>
                    </div>
                    <p onClick={onRegisterClick}>Don't have an account ? click here to register</p>
                </div>
            )}
            {/* ENDS */}




            {/* REGISTER */}
            {showRegister && (
                <div className="popup">
                    <h2>Join the Nkombiso Community <br></br> <span>Register</span></h2>

                    <label>First Name</label>
                    <input
                    type="text"
                    placeholder="Name"
                    ></input>

                    <label>Last Name</label>
                    <input
                    type="text"
                    placeholder="Surname"
                    ></input>

                    <label>Favorite recipe</label>
                    <input
                    type="text"
                    placeholder="Favorite"
                    ></input>

                    <label>Username</label>
                    <input
                    type="text"
                    placeholder="Email"
                    ></input>

                    <label>Password</label>
                    <input
                    type="text"
                    placeholder="Password"
                    ></input>


                    <label>Confirm Password</label>
                    <input
                    type="text"
                    placeholder="Password"
                    ></input>

                    <div className="button">
                        <button type="submit">Submit</button>
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
            )}
            {/* ENDS */}


        </div>
    );
}

export default Login;
