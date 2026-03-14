import React from 'react';
import { MoonIcon, SunIcon, GithubIcon, UserIcon } from './Icons';
import { CONFIG } from '../app-data';

const Navbar = ({ theme, toggleTheme }) => {
  const handleProfileClick = (e) => {
    e.preventDefault();
    window.location.href = 'etc-app://profile/vany';
    setTimeout(() => {
      window.open('https://итд.com/@vany', '_blank', 'noopener,noreferrer');
    }, 500);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="/" className="logo">
          <img src="/favicon.ico" alt="logo" className="logo-img" onError={(e) => e.target.style.display='none'} />
          итд.app
        </a>
        <div className="nav-actions">
          <a href="https://итд.com/@vany" onClick={handleProfileClick} className="icon-btn" title="Мой профиль в итд.com">
            <UserIcon size={20} />
          </a>
          <button className="icon-btn" onClick={toggleTheme} title="Сменить тему">
            {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
          <a href={CONFIG.fallbackData.repository} target="_blank" rel="noreferrer" className="icon-btn" title="GitHub">
            <GithubIcon size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;