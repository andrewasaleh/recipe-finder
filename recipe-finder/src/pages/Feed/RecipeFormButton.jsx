import React, { useState } from 'react';
import RecipeForm from './RecipeForm'; 

const RecipeFormButton = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
    <div className="recipe-form-button-container">
      <button onClick={handleButtonClick}>Add Recipe</button>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-inner">
            <RecipeForm onClose={handlePopupClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeFormButton;
