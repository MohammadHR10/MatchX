import React from 'react';
import './SkillsProgressBar.css';

const SkillsProgressBar = () => {
  return (
    <div className="skills-section">
      <h3>Skills</h3>
      <div className="skill">
        <p>JavaScript</p>
        <div className="progress-bar"><span className="progress js"></span></div>
      </div>
      <div className="skill">
        <p>React</p>
        <div className="progress-bar"><span className="progress react"></span></div>
      </div>
      <div className="skill">
        <p>Python</p>
        <div className="progress-bar"><span className="progress python"></span></div>
      </div>
    </div>
  );
};

export default SkillsProgressBar;
