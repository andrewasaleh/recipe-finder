import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './RecipeForm.css'; 

const RecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    name: '',
    type: '',
    duration: '',
    serving_size: '',
    ingredients: [''],
    preparation: [''],
    image: '',
    username: '', 
    uid: '', // Add uid field
  });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setRecipeData((prevData) => ({
          ...prevData,
          username: user.displayName || user.email,
          uid: user.uid, // Set the uid field
        }));
      }
    });

    return () => unsubscribe();
  }, []); 

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
  
      // Reset the form after submission, but keep the username and uid
      setRecipeData({
        name: '',
        type: '',
        duration: '',
        serving_size: '',
        ingredients: [''],
        preparation: [''],
        image: '',
        username: recipeData.username, // Keep the username unchanged
        uid: recipeData.uid, // Keep the uid unchanged
      });
    } catch (error) {
      console.error('Error adding recipe: ', error);
    }
  };

  return (
    <form className="recipe-form-container" onSubmit={handleSubmit}>
      <h2>
      <div style={{ fontSize: 40}}>
        Welcome {recipeData.username}, Share us your idea
      </div>
      </h2>


      <box> </box>

           <br />

      <div className="container3">
        <text_border>
          <label>
            Title of the Recipe :
          </label>
          <input type="text" name="name" value={recipeData.name} onChange={handleInputChange} />
        </text_border>
      </div>

      <br />

      <div className="container3">
        <text_border>
          <label>
            Type of Food :
          </label>
          <input type="text" name="type" value={recipeData.type} onChange={handleInputChange} />
        </text_border>

          <text_border>
            <label>
              Duration (minutes) :
            </label>
            <input type="number" name="duration" value={recipeData.duration} onChange={handleInputChange} />
          </text_border>

          <text_border>
            <label>
              Serving size :
            </label>
            <input type="number" name="serving_size" value={recipeData.serving_size} onChange={handleInputChange} />
          </text_border>
      </div>
      
      <br />

      <div class="container2">
      <label>
        Ingredients :
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
      </div>
      
      <br />

      <div class="container2">
      <label>
        Preparation :
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
      </div>
      <br />

      <div class="container2">
      <label>
        Image URL : 
      </label>
        <input type="text" name="image" value={recipeData.image} onChange={handleInputChange} />
      </div>
      <br />

      <div class="container3">
      <button type="submit">Submit Recipe</button>
      </div>
    </form>
  );
};

export default RecipeForm;
