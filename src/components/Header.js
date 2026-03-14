import React from 'react';
const Header = ({ info, loading }) => (
  <header className="hero-section">
    <h1 className="app-title">{info?.name || "Загрузка..."}</h1>
    <p className="app-description">{info?.description}</p>
    {loading ? (
      <span className="app-version">Поиск версии...</span>
    ) : (
      <span className="app-version">v{info.version}</span>
    )}
  </header>
);
export default Header;