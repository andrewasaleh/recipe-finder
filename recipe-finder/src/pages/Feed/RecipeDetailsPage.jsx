import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import './RecipeDetailsPage.css'; // Include your CSS file

const RecipeDetailsPage = () => {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [activeTab, setActiveTab] = useState('instructions');

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const recipeDocRef = doc(db, 'recipes', recipeId);
        const recipeSnapshot = await getDoc(recipeDocRef);

        if (recipeSnapshot.exists()) {
          setRecipeDetails({ id: recipeSnapshot.id, ...recipeSnapshot.data() });
        } else {
          console.error('Recipe not found');
        }
      } catch (error) {
        console.error('Error fetching recipe details: ', error);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  if (!recipeDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="recipe-details-container">
      <div>
        <h2 className="recipe-details-title">{recipeDetails.name}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.name} className="recipe-details-image" />
      </div>
      <div className="recipe-details-text">
        <div className="recipe-details-button-container">
          <button
            className={`recipe-details-button ${activeTab === 'instructions' ? 'active' : ''}`}
            onClick={() => setActiveTab('instructions')}
          >
            Instructions
          </button>
          <button
            className={`recipe-details-button ${activeTab === 'ingredients' ? 'active' : ''}`}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </button>
        </div>
        {activeTab === 'instructions' && (
          <ol>
            <p>{recipeDetails.description}</p>
            {recipeDetails.preparation.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {recipeDetails.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
