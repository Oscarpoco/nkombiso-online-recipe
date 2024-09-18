

import './App.css';
import { useState, useEffect } from 'react';
import Background from './components/Background';
import Body from './components/Body';
import NavBar from './components/NavBar';
import Recipe from './components/Recipe';
import Footer from './components/Footer';
import Login from './components/Login';
import MyRecipe from './components/MyRecipe';
import FloatingButton from './components/FloatingButton';
import AddRecipeForm from './components/AddRecipeForm';
import Loader from './components/Loader'; // Import the Loader component

function App() {
  const [searchTerm, setSearchTerm] = useState("chicken");
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showRecipeForm, setShowRecipeForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // HANDLE HUMBURGER

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }


  // Check sign-in status on app load
  useEffect(() => {
    const savedUserId = localStorage.getItem('userId');
    if (savedUserId) {
      setUserId(savedUserId);
      setIsSignedIn(true);
    }

    const fetchRecipes = async (userId) => {
      try {
        const response = await fetch(`http://localhost:3003/recipes?userId=${userId}`);
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        console.error("Failed to fetch recipes", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    if (savedUserId) {
      fetchRecipes(savedUserId);
    } else {
      setTimeout(() => {
        setLoading(false); 
      }, 3000);
    }
  }, []);

  // SEARCH FUNCTION
  const handleSearch = (search) => {
    setSearchTerm(search);
  };

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

  // PROFILE
  const handleOpenProfile = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  // ADDING NEW RECIPE FUNCTIONS
  const handleCloseForm = () => {
    setShowRecipeForm(false);
    setEditMode(false);
    setRecipeToEdit(null);
  };

  const handleClickForm = () => {
    setShowRecipeForm(true);
  };

  // SIGNING IN FUNCTION
  const handleSignIn = async (userId) => {
    setLoading(true); // Start showing the loader
    localStorage.setItem('userId', userId);
    setUserId(userId);
    setIsSignedIn(true);
    setTimeout(() => {
      setLoading(false); 
    }, 3000);
  };

 // SIGNING OUT FUNCTION
const handleSignOut = () => {
  setLoading(true); // Start showing the loader
  localStorage.removeItem('userId');
  setUserId(null);
  setIsSignedIn(false);
  setTimeout(() => {
    setLoading(false); 
  }, 3000);
};


  // Handle adding a new recipe
  const addRecipe = (recipe) => {
    if (editMode) {
      // Update existing recipe
      fetch(`http://localhost:3003/recipes/${recipeToEdit.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...recipe, userId })
      })
      .then(response => response.json())
      .then(data => {
        setRecipes(prevRecipes => prevRecipes.map(r => r.id === data.id ? data : r));
        handleCloseForm();
      })
      .catch(error => console.error('Error updating recipe:', error));
    } else {
      // Add new recipe
      fetch('http://localhost:3003/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...recipe, userId })
      })
      .then(response => response.json())
      .then(data => {
        setRecipes(prevRecipes => [...prevRecipes, data]);
        handleCloseForm();
      })
      .catch(error => console.error('Error adding recipe:', error));
    }
  };

  // Handle deleting a recipe
  const deleteRecipe = (id) => {
    fetch(`http://localhost:3003/recipes/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
    })
    .catch(error => console.error('Error deleting recipe:', error));
  };

  // Handle editing a recipe
  const editRecipe = (recipe) => {
    setRecipeToEdit(recipe);
    setEditMode(true);
    setShowRecipeForm(true);
  };

  // BREAKFAST CATEGORY
  const handleBreakFast = () => {
    setSearchTerm("Breakfast");
  };

  // LUNCH CATEGORY
  const handleLunch = () => {
    setSearchTerm("Lunch");
  };

  // DINNER CATEGORY
  const handleDinner = () => {
    setSearchTerm("Dinner");
  };

  if (loading) {
    return <Loader />; // Show the loader while data is being fetched
  }

  return (
    <div className="App">
      {/* NAVBAR */}
      <header>
        <NavBar
          onSignInClick={handleSignInClick}
          onRegisterClick={handleRegisterClick}
          onSignIn={isSignedIn}
          onProfileShow={handleOpenProfile}
          onSignOut={handleSignOut}
          onBreakfast={handleBreakFast}
          onLunch={handleLunch}
          onDinner={handleDinner}
          openMenu = {toggleMenu}
          closeMenu = {closeMenu}
          isMenuOpen = {isMenuOpen}
        />
      </header>

      {/* MAIN */}
      <main>
        <Background onSearch={handleSearch} />
        <Body />
        {isSignedIn && (
          <MyRecipe
            recipes={recipes}
            deleteRecipe={deleteRecipe}
            editRecipe={editRecipe}
            search={searchTerm}
          />
        )}
        <Recipe search={searchTerm} />
      </main>

      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>

      {/* DISPLAY POPUP COMPONENTS */}
      <Login
        showSignIn={showSignIn}
        showRegister={showRegister}
        onClose={handleClosePopup}
        onRegisterClick={handleRegisterClick}
        onCloseProfile={handleCloseProfile}
        onProfileShow={showProfile}
        setIsSignedIn={setIsSignedIn}
        setShowRegister={setShowRegister}
        setShowSignIn={setShowSignIn}
        userId={userId}
        onSignIn={handleSignIn}
        setLoading = {setLoading}
        loading = {loading}
      />

      {/* DISPLAY FLOATING BUTTON */}
      {isSignedIn && (
        <FloatingButton handleClickForm={handleClickForm} />
      )}

      {/* DISPLAY ADD RECIPE FORM */}
      <AddRecipeForm
        closeForm={handleCloseForm}
        userId={userId}
        showRecipeForm={showRecipeForm}
        addRecipe={addRecipe}
        recipe={recipeToEdit} // Pass the recipe to edit
        editMode={editMode} // Indicate whether it's edit mode
        setRecipes={setRecipes}
      />
    </div>
  );
}

export default App;
