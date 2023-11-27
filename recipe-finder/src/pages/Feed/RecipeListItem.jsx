// RecipeListItem.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./RecipeListItem.css";

const RecipeListItem = ({ recipe, user, deleteButton }) => {
  return (
    <div className="recipe-item">
      <Link to={`/recipe/${recipe.id}`} className="recipe-link">
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
        <div className="recipe-info">
          <strong className="recipe-name">{recipe.name}</strong>
          <p className="recipe-description">Posted by: {user ? user.displayName : 'Unknown User'}</p>
          <p className="recipe-description">Duration: {recipe.duration} minutes</p>
          <p className="recipe-description">Serving size: for {recipe.serving_size} people</p>
        </div>
      </Link>
      {deleteButton && (
        <button onClick={() => deleteButton(recipe.id)} className="delete-button">
          Delete
        </button>
      )}
    </div>
  );
};

export default RecipeListItem;
