import React from 'react';
import './TachnologyCard.css';

const TechnologyCard = ({ icon, name, description }) => {
  return (
    <div className="technology-card">
      <div className="technology-icon">{icon}</div>
      <h3 className="technology-name">{name}</h3>
      <p className="technology-description" style={{"color":"white"}}>{description}</p>
    </div>
  );
};

export default TechnologyCard;
