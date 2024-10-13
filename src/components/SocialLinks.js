import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-media">
      <h3>Connect</h3>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
      </div>
    </div>
  );
};

export default SocialLinks;
