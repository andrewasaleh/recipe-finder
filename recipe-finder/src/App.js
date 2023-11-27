import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginSignup/Login';
import Signup from './pages/LoginSignup/Signup';
import Navbar from './pages/Home/Header';
import Header from './pages/Home/Opening';
import About from './pages/Home/About';
import Presentation from './pages/Home/Preview';
import RecipeForm from './pages/Feed/RecipeForm';
import Home from './pages/Menu/Home';
import RecipeComponent from './pages/Feed/RecipeComponent';
import UserRecipes from './pages/Feed/UserRecipes';
import Recipe from './pages/Menu/Recipe';
import RecipeDetailsPage from './pages/Feed/RecipeDetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Presentation />
                <About />
              </>
            }
          />
        <Route path="/recipe/:name" element={<Recipe />} />
          <Route path="/recipe-form" element={<RecipeForm />} />
          <Route path="/recipe-explore" element={<RecipeComponent />} />
          <Route path="/my-recipes" element={<UserRecipes />} />
          <Route path="/recipe-details/:recipeId" element={<RecipeDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
