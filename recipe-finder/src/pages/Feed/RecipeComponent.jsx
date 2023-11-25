// src/RecipeComponent.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import './RecipeComponent.css'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const RecipeComponent = () => {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'recipes'));
        const recipesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setRecipes(recipesData);
      } catch (error) {
        console.error('Error fetching recipes: ', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="recipe-container">
      <h2 className="recipe-title">Recipes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {recipes && recipes.length > 0 ? (
            <ul className="recipe-list">
              {recipes.map((recipe) => (
                <li key={recipe.id} className="recipe-item">
                  <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                  <strong className="recipe-name">{recipe.name}</strong>
                  <p className="recipe-description">Posted by: {user ? user.displayName : 'Unknown User'}</p>
                  <p className="recipe-description">Duration: {recipe.duration} minutes</p>
                  <p className="recipe-description">Serving size: for {recipe.serving_size} people</p>
                  <p className="recipe-description">Ingredients:</p>
                  {recipe.ingredients && recipe.ingredients.length > 0 ? (
                    <ul>
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No ingredients available</p>
                  )}
                  <p className="recipe-description">Preparation Steps:</p>
                  {recipe.preparation && recipe.preparation.length > 0 ? (
                    <ol>
                      {recipe.preparation.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  ) : (
                    <p>No preparation steps available</p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No recipes available</p>
          )}
        </>
      )}
    </div>
  );
};

export default RecipeComponent;
