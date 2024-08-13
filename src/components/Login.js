import React, { useState } from "react";
import './Login.css';
import axios from "axios";

function Login({ showSignIn, showRegister, onClose, onRegisterClick, onCloseProfile, onProfileShow, setIsSignedIn, setShowRegister, setShowSignIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [favorite, setFavorite] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // HANDLE SIGN UP
    const isStrongPassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        return password.length >= minLength && hasLowerCase && hasUpperCase && hasNumber;
    };

    const isValidate = () => {
        let isProceed = true;
        let errMessage = 'Please enter value in ';

        if (!username.trim()) {
            isProceed = false;
            errMessage += 'username';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(username)) {
            isProceed = false;
            errMessage += ' valid email';
        }

        if (!password.trim()) {
            isProceed = false;
            errMessage += ' password';
        } else if (!isStrongPassword(password)) {
            isProceed = false;
            errMessage += ' password (minimum length of 8 characters, at least one uppercase letter, one lowercase letter, and one number)';
        }

        if (!isProceed) {
            setErrorMessage(errMessage);
        }

        return isProceed;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidate()) {
            if (password !== confirmPassword) {
                setErrorMessage("Passwords don't match");
                return;
            }

            // Generate a unique userId (replace this with your method)
            const userId = Date.now(); // Example using current timestamp

            let userDetails = { userId, username, password, name, lastName, favorite };
            console.log(userDetails); // for development debugging

            // POST user data to the server
            fetch('http://localhost:3003/users', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userDetails)
            }).then((res) => {
                if (res.ok) {
                    setSuccessMessage("Signup successful");
                    setIsSignedIn(true); // Set sign-in status to true
                    setShowRegister(false);

                    // Store userId in local storage
                    localStorage.setItem('userId', userId);

                    setTimeout(() => {
                        setSuccessMessage(""); // Clear message after 2 seconds
                    }, 2000); // Display success message for 2 seconds
                } else {
                    setErrorMessage("Signup failed");
                }
            }).catch((err) => {
                setErrorMessage("An error occurred: " + err.message);
            });
        }
    };
    // SIGN UP ENDS 

    // HANDLES SIGN IN

    const validate = () => {
        if (username === '' || password === '') {
            setErrorMessage("Please fill in all fields");
            return false;
        }
        return true;
    }

    const proceedLogin = async (e) => {
        e.preventDefault();

        if (validate()) {
            try {
                const response = await axios.get('http://localhost:3003/users');
                const users = response.data;

                const user = users.find(user => user.username === username && user.password === password);
                if (user) {
                    setIsSignedIn(true);
                    setShowSignIn(false);

                    // Store userId in local storage
                    localStorage.setItem('userId', user.userId);

                    // Redirect or update the state as needed
                } else {
                    setErrorMessage("Invalid credentials");
                }
                
            } catch (err) {
                setErrorMessage("An error occurred: " + err.message);
            }
        }
    }

    return (
        <div className={`user-profile ${showSignIn || showRegister ? 'show' : ''}`}>

            {/* LOGIN FUNCTION */}
            {showSignIn && (
                <form className="popup" onSubmit={proceedLogin}>
                    <h2>Hi, welcome back! We missed you <br></br> <span>Please Login</span></h2>
                    
                    {/* username */}
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Email"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    ></input>
                    
                    {/* password */}
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></input>

                    {/* buttons */}
                    <div className="button">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={onClose}>Close</button>
                    </div>
                    {/* register link */}
                    <p onClick={onRegisterClick}>Don't have an account? Click here to register</p>

                    {/* Display error message */}
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </form>
            )}
            {/* ENDS */}

            {/* REGISTER */}
            {showRegister && (
                <form className="popup" onSubmit={handleSubmit}>
                    <h2>Join the Nkobozi Community <br></br> <span>Register</span></h2>

                    {/* first name */}
                    <label>First Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    ></input>

                    {/* surname */}
                    <label>Last Name</label>
                    <input
                        type="text"
                        placeholder="Surname"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    ></input>

                    {/* favorite */}
                    <label>Favorite recipe</label>
                    <input
                        type="text"
                        placeholder="Favorite"
                        value={favorite}
                        onChange={e => setFavorite(e.target.value)}
                    ></input>

                    {/* username */}
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Email"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    ></input>

                    {/* password */}
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></input>

                    {/* confirm password */}
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    ></input>

                    {/* buttons */}
                    <div className="button">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={onClose}>Close</button>
                    </div>

                    {/* Display success or error message */}
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </form>
            )}
            {/* REGISTER ENDS */}

            {/* PROFILE UPDATE */}
            {onProfileShow && (
                <form className="popup">
                    <h2><span>Update your details</span></h2>

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
                        type="password"
                        placeholder="Password"
                    ></input>

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                    ></input>

                    <div className="button">
                        <button type="submit">Save</button>
                        <button type="button" onClick={onCloseProfile}>Close</button>
                    </div>
                </form>
            )}
            {/* PROFILE UPDATE ENDS */}
        </div>
    );
}

export default Login;
