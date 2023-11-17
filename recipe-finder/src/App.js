import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginSignup/Login';
import Signup from './pages/LoginSignup/Signup';
import Navbar from './pages/Home/Header';
import Header from './pages/Home/Opening';
import About from './pages/Home/About';
import Presentation from './pages/Home/Preview';
import Footer from './pages/Home/Footer';
import Trending from './pages/Feed/Trending';
// import RecipeEntryForm from './pages/Feed/RecipeEntryForm';
import RecipeComponent from './pages/Feed/RecipeComponent';
import RecipeForm from './pages/Feed/RecipeForm';


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
                <Trending />
                <Presentation />
                <About />
                {/* Add a new route for the RecipeComponent */}
              </>
            }
          />
        <Route path="/recipes" element={<RecipeComponent />} />
        <Route path="/add-recipes" element={<RecipeForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
