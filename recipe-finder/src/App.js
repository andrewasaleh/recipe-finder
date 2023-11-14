import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginSignup/Login';
import Signup from './pages/LoginSignup/Signup';
import Navbar from './pages/Home/Header';
import Header from './pages/Home/Opening';
// import Feature from './pages/Home/Feature';
import About from './pages/Home/About';
import Presentation from './pages/Home/Preview';
import Footer from './pages/Home/Footer';
import Recipes from './pages/Feed/Recipes'; // Import the RecipeComponent
import Trending from './pages/Feed/Trending';
// import AuthDetails from './pages/LoginSignup/AuthDetails';

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
              </>
            }
          />
          {/* Add a new route for the RecipeComponent */}
          <Route path="/Recipes" element={<Recipes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
