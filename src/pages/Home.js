import React from 'react';
import './Home.css';
import logo from '../components/matchxlogo.png';  // Correct path from pages to components

const Home = () => {
  return (
    <div className="home-container">
      {/* Display the logo image */}
      <img 
        src={logo}  // Use the imported image here
        alt="MatchX Logo"
        className="home-logo" 
      />
      
      {/* Text content */}
      <h1>Welcome to MatchX: A Collaboration Platform</h1>
      <p>Find people to collaborate with based on your interests!</p>
    </div>
  );
};

export default Home;
