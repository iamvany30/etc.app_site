import React from 'react';
const FeatureCard = ({ icon, title, desc }) => (
  <div className="feat-card">
    <div className="feat-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);
export default FeatureCard;