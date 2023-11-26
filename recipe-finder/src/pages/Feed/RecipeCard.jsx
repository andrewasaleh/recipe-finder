// RecipeCard.js
import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card">
      <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="card-details">
        <div className="card-image">
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className="text-container">
          <div className="title-container">
            <p className="card-title">{recipe.title}</p>
          </div>
          <div className="button-container">
            <div className="icon-container left">
              {/* Use your time icon */}
              <img src={/* replace this with your time icon source */} alt="Time Icon" className="icon" />
              <p className="time-text">{recipe.readyInMinutes} min</p>
            </div>
            <div className="icon-container right">
              {/* Use your servings icon */}
              <img src={/* replace this with your servings icon source */} alt="Servings Icon" className="icon" />
              <p className="time-text">{recipe.servings} servings</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default RecipeCard;
