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
import MyRecipe from './components/MyRecipe';
import FloatingButton from './components/FloatingButton';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showRecipeForm, setShowRecipeForm] = useState(false);

  // SEARCH FUNCTION
  const handleSearch = (search) => {
    setSearchTerm(search);
  };
  // ENDS


  // POPUP FUNCTIONS
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
  // ENDS


  // ADDING NEW RECIPE FUNCTIONS
  const handleCloseForm = ()=> {
    setShowRecipeForm(false)
  }

  const handleClickForm = ()=>{
    setShowRecipeForm(true)
  }
  // ENDS



  return (
    <div className="App">

      {/* NAVBAAR */}
      <header>
        <NavBar 
          onSignInClick={handleSignInClick} 
          onRegisterClick={handleRegisterClick} 
        />
      </header>
      {/* ENDS */}

      {/* MAIN */}
      <main>
        {/* Pass the handleSearch function to Background */}
        <Background onSearch={handleSearch} />
        {/* Pass the searchTerm to Recipe component */}
        <Body />
        <MyRecipe />
        <Recipe search={searchTerm} />
      </main>
      {/* ENDS */}

      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>
      {/* ENDS */}

      {/* DISPLAY POPUP COMPONETS */}

      {/* Display Login component as a popup */}
      <Login 
        showSignIn={showSignIn} 
        showRegister={showRegister} 
        onClose={handleClosePopup}
        onRegisterClick={handleRegisterClick}
      />

      {/* display floating button */}
      <FloatingButton 
        handleClickForm={handleClickForm}
      
      />

      {/* Display AddRecipeForm */}

      <AddRecipeForm 
        closeForm={handleCloseForm}
        showRecipeForm = {showRecipeForm}
      />
    </div>
  );
}

export default App;
