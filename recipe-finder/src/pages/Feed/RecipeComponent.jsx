import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';  
import './RecipeComponent.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import timeIcon from "../Assets/images/home/alarm.png";
import servingsIcon from "../Assets/images/home/servings.png";
import createdByIcon from "../Assets/images/home/created.png";
import deleteIcon from '../Assets/images/home/delete-icon.png';
// import modifyIcon from '../Assets/images/home/modify-icon.png';
import Footer from '../Home/Footer';

const RecipeComponent = () => {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  

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

  const handleRecipeClick = (recipeId) => {
    // Redirect to the new page for recipe details
    navigate(`/recipe-details/${recipeId}`);
  };

  const handleDeleteRecipe = async (recipeId) => {
    try {
      await deleteDoc(doc(db, 'recipes', recipeId));
      // Update the state to reflect the deleted recipe
      setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== recipeId));
      
      // Redirect to the recipe-explore page after successful deletion
      navigate('/recipe-explore');
    } catch (error) {
      console.error('Error deleting recipe: ', error);
    }
  };

  const handleModifyRecipe = (recipeId) => {
    // Redirect to the page for modifying the recipe
    navigate(`/modify-recipe/${recipeId}`);
  };

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Community Recipes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {recipes && recipes.length > 0 ? (
            <div className="recipe-list">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-item" onClick={() => handleRecipeClick(recipe.id)}>
                  <div className="recipe-actions">
                    {user && recipe.uid === user.uid && (
                      <>
                        <button className="delete-button" onClick={() => handleDeleteRecipe(recipe.id)}>
                          <img src={deleteIcon} alt="Delete Icon" />
                        </button>
                        {/* <button className="modify-button" onClick={() => handleModifyRecipe(recipe.id)}>
                          <img src={modifyIcon} alt="Modify Icon" />
                        </button> */}
                      </>
                    )}
                  </div>
                  <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                  <div className="text-container">
                    <p className="recipe-description">{recipe.name}</p>
                    <div className="recipe-button-container">
                      <div className="icon-container">
                        <img src={timeIcon} alt="Time Icon" className="icon" />
                        <p className="time-text">{recipe.duration} min</p>
                      </div>
                      <div className="icon-container">
                        <img src={servingsIcon} alt="Servings Icon" className="icon" />
                        <p className="time-text">{recipe.serving_size} servings</p>
                      </div>
                      <div className="icon-container">
                        <img src={createdByIcon} alt="Created by Icon" className="icon" />
                        <p className="time-text">{recipe.username}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No recipes available</p>
          )}
        </>
      )}
      <Footer className="footer-recipe-component" />
    </div>
  );
};

export default RecipeComponent;
