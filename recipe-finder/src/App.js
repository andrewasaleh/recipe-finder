import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginSignup/Login';
import Signup from './pages/LoginSignup/Signup';
import Navbar from './pages/Home/Header';
import Header from './pages/Home/Opening';
import Feature from './pages/Home/Feature';
import About from './pages/Home/About';
import Presentation from './pages/Home/Preview';
import Footer from './pages/Home/Footer';


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={
                        <>
                            <Header />
                            <Feature />
                            <Presentation />
                            <About />                            
                        </>
                    } />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
