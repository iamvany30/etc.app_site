import React from 'react';
import { UserIcon } from './Icons';

const Footer = ({ info }) => {
  const handleProfileClick = (e) => {
    e.preventDefault();
    window.location.href = 'etc-app://profile/vany';
    setTimeout(() => {
      window.open('https://итд.com/@vany', '_blank', 'noopener,noreferrer');
    }, 500);
  };

  return (
    <footer>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
        <a href="https://итд.com/@vany" onClick={handleProfileClick} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <UserIcon size={16} /> @vany в итд.com
        </a>
        <a href={info.repository} target="_blank" rel="noopener noreferrer">
          GitHub Project
        </a>
      </div>
      <div style={{marginTop: 8}}>
        &copy; {new Date().getFullYear()} {info.authorName}
      </div>
    </footer>
  );
};

export default Footer;