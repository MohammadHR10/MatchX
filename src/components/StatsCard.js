import React from 'react';
import './StatsCard.css';

const StatsCard = () => {
  return (
    <div className="stats-cards">
      <div className="card">
        <h3>Posts</h3>
        <p>150</p>
      </div>
      <div className="card">
        <h3>Followers</h3>
        <p>1,200</p>
      </div>
      <div className="card">
        <h3>Following</h3>
        <p>980</p>
      </div>
    </div>
  );
};

export default StatsCard;
