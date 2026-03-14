import React from 'react';
const DownloadCard = ({ url, icon, label, description, isRecommended, delay }) => (
  <a
    href={url}
    className={`download-card ${isRecommended ? 'recommended' : ''}`}
    style={{ animationDelay: delay }}
    target="_blank"
    rel="noopener noreferrer"
  >
    {isRecommended && <div className="recommended-badge">Рекомендуется</div>}
    <div className="card-icon">{icon}</div>
    <div className="card-info">
      <span className="card-label">{label}</span>
      <span className="card-description">{description}</span>
    </div>
    <div className="card-arrow">→</div>
  </a>
);
export default DownloadCard;