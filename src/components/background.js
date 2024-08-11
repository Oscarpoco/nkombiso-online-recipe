import React, { useState } from "react";
import './background.css';

function Background({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="background">
      <div className="left">
        <h1>
          Discover a World of Culinary Wonders: Authentic Recipes, Unique Flavors, and Timeless Traditions from Every Corner of the Globe, All in One Place.
        </h1>
        <input
          type="text"
          placeholder="Search by keyword"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="right">
        <img src="cover.jpeg" alt="menu" />
        <img
          src="trolley.jpeg"
          alt="menu"
          style={{ width: '46.5%', marginRight: '10%' }}
        />
      </div>
    </div>
  );
}

export default Background;
