import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/LoginPage';
import Signup from './pages/SignupPage';
import Aboutus from './pages/AboutUs';
import Mockinterview from './pages/mock-interview';
import Startinterview from './pages/start_interview';


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Add more routes here */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/mock-interview" element={<Mockinterview />} />
        <Route path="/start-interview/ml" element={<Startinterview />} />
     

      </Routes>
    </Router>
  );
}

export default App;




