import './App.css';
import { useState } from 'react';
import Background from './components/background';
import Body from './components/Body';
import NavBar from './components/NavBar';
import Recipe from './components/Recipe';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        {/* Pass the handleSearch function to Background */}
        <Background onSearch={handleSearch} />
        {/* Pass the searchTerm to Recipe component */}
        <Body />
        <Recipe search={searchTerm} />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
