import React, { useState } from "react";
import SearchResults from "./SearchResults";
import "./SearchPage.css";
import "./Styles.css";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOON_KEY}&ingredients=${searchQuery}&number=8`
      );

      if (!api.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await api.json();

      // Fetch detailed information for each recipe
      const detailedRecipes = await Promise.all(
        data.map(async (result) => {
          const detailedApi = await fetch(
            `https://api.spoonacular.com/recipes/${result.id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_SPOON_KEY}`
          );
          const detailedData = await detailedApi.json();
          return detailedData;
        })
      );

      setSearchResults(detailedRecipes); // Update searchResults state
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <h1 className="popular-title">What's on the Menu Today?</h1>
        <h1 className="section-title">Find Recipes with Your Favorite Ingredients</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search for recipes by ingredient..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <SearchResults searchResults={searchResults} searchIngredient={searchQuery} />
      </div>
    </div>
  );
};

export default SearchPage;