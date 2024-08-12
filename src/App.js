// import './App.css';
// import { useState } from 'react';
// import Background from './components/Background';
// import Body from './components/Body';
// import NavBar from './components/NavBar';
// import Recipe from './components/Recipe';
// import Footer from './components/Footer';

// function App() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (search) => {
//     setSearchTerm(search);
//   };

//   return (
//     <div className="App">
//       <header>
//         <NavBar />
//       </header>
//       <main>
//         {/* Pass the handleSearch function to Background */}
//         <Background onSearch={handleSearch} />
//         {/* Pass the searchTerm to Recipe component */}
//         <Body />
//         <Recipe search={searchTerm} />
//       </main>
//       <footer>
//         <Footer/>
//       </footer>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { useState } from 'react';
import Background from './components/Background';
import Body from './components/Body';
import NavBar from './components/NavBar';
import Recipe from './components/Recipe';
import Footer from './components/Footer';
import Login from './components/Login'; // Import the Login component

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowSignIn(false);
    setShowRegister(true);
  };

  const handleClosePopup = () => {
    setShowSignIn(false);
    setShowRegister(false);
  };

  return (
    <div className="App">
      <header>
        <NavBar 
          onSignInClick={handleSignInClick} 
          onRegisterClick={handleRegisterClick} 
        />
      </header>
      <main>
        {/* Pass the handleSearch function to Background */}
        <Background onSearch={handleSearch} />
        {/* Pass the searchTerm to Recipe component */}
        <Body />
        <Recipe search={searchTerm} />
      </main>
      <footer>
        <Footer />
      </footer>
      {/* Display Login component as a popup */}
      <Login 
        showSignIn={showSignIn} 
        showRegister={showRegister} 
        onClose={handleClosePopup}
        onRegisterClick={handleRegisterClick}
      />
    </div>
  );
}

export default App;
