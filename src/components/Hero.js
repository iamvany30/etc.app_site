import React from 'react';
import { WindowsIcon } from './Icons';
const Hero = ({ info, loading }) => (
  <header className="hero">
    <div className="hero-badge">
      {loading ? 'Проверка версии...' : `Stable Release v${info?.version}`}
    </div>
    <h1 className="hero-title">Социальная сеть<br/>нового поколения</h1>
    <p className="hero-desc">
      {info?.description || "Делитесь моментами, слушайте музыку и создавайте свой уникальный профиль в удобном десктопном приложении."}
    </p>
    <a href="#download" className="download-btn">
      <WindowsIcon size={24} />
      Скачать бесплатно
    </a>
  </header>
);
export default Hero;