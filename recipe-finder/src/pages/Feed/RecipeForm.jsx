import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './RecipeForm.css'; // Import the external CSS file

const RecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    name: '',
    type: '',
    duration: '',
    ingredients: [''],
    preparation: [''],
    image: '',
    username: '', // Add username property
  });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If a user is logged in, set the username in the recipeData
        setRecipeData((prevData) => ({
          ...prevData,
          username: user.displayName || user.email,
        }));
      }
    });

    return () => unsubscribe();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIngredientsChange = (index, value) => {
    setRecipeData((prevData) => {
      const updatedIngredients = [...prevData.ingredients];
      updatedIngredients[index] = value;
      return { ...prevData, ingredients: updatedIngredients };
    });
  };

  const handlePreparationChange = (index, value) => {
    setRecipeData((prevData) => {
      const updatedPreparation = [...prevData.preparation];
      updatedPreparation[index] = value;
      return { ...prevData, preparation: updatedPreparation };
    });
  };

  const handleAddIngredient = () => {
    setRecipeData((prevData) => ({
      ...prevData,
      ingredients: [...prevData.ingredients, ''],
    }));
  };

  const handleAddPreparationStep = () => {
    setRecipeData((prevData) => ({
      ...prevData,
      preparation: [...prevData.preparation, ''],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Add the recipe data to the Firestore collection
      const docRef = await addDoc(collection(db, 'recipes'), recipeData);
      console.log('Recipe added with ID: ', docRef.id);
  
      // Reset the form after submission, but keep the username
      setRecipeData({
        name: '',
        type: '',
        duration: '',
        ingredients: [''],
        preparation: [''],
        image: '',
        username: recipeData.username, // Keep the username unchanged
      });
    } catch (error) {
      console.error('Error adding recipe: ', error);
    }
  };
  
  return (
    <form className="recipe-form-container" onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={recipeData.username} onChange={handleInputChange} disabled />
        {/* Disable editing of username to prevent user modification */}
      </label>
      <br />
      
      <label>
        Name:
        <input type="text" name="name" value={recipeData.name} onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Type:
        <input type="text" name="type" value={recipeData.type} onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Duration (minutes):
        <input type="number" name="duration" value={recipeData.duration} onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Ingredients:
        <ul>
          {recipeData.ingredients.map((ingredient, index) => (
            <li key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientsChange(index, e.target.value)}
              />
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleAddIngredient}>
          Add Ingredient
        </button>
      </label>
      <br />

      <label>
        Preparation:
        <ol>
          {recipeData.preparation.map((step, index) => (
            <li key={index}>
              <input
                type="text"
                value={step}
                onChange={(e) => handlePreparationChange(index, e.target.value)}
              />
            </li>
          ))}
        </ol>
        <button type="button" onClick={handleAddPreparationStep}>
          Add Preparation Step
        </button>
      </label>
      <br />

      <label>
        Image URL:
        <input type="text" name="image" value={recipeData.image} onChange={handleInputChange} />
      </label>
      <br />

      <button type="submit">Submit Recipe</button>
    </form>
  );
};

export default RecipeForm;
