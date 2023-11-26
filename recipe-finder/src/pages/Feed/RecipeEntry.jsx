import React, { useState } from 'react';
import RecipeEntryForm from './RecipeForm';

const RecipeEntry = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    // Add the new recipe to the existing recipes
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div>
      <h2>Submit a New Recipe</h2>
      <RecipeEntryForm addRecipe={addRecipe} />
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeEntry;
