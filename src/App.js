import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppMockup from './components/AppMockup';
import DownloadSection from './components/DownloadSection';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import { CONFIG } from './app-data';
import { CameraIcon, PaletteIcon, MusicIcon } from './components/Icons';
function App() {
  const [releaseInfo, setReleaseInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const saved = localStorage.getItem('itd_site_theme');
    if (saved) {
      setTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('itd_site_theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  useEffect(() => {
    async function getLatestRelease() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${CONFIG.repoOwner}/${CONFIG.repoName}/releases/latest`
        );
        if (!response.ok) throw new Error('GitHub API Unreachable');
        const data = await response.json();
        setReleaseInfo({
          ...CONFIG.fallbackData,
          version: data.tag_name.replace('v', ''),
          assets: data.assets.map(a => ({
            name: a.name,
            browser_download_url: a.browser_download_url,
            size: a.size
          }))
        });
      } catch (e) {
        console.warn('[System] Используются запасные данные о версии');
        setReleaseInfo({ 
          ...CONFIG.fallbackData, 
          version: "0.9.8", 
          assets: [] 
        });
      } finally {
        setLoading(false);
      }
    }
    getLatestRelease();
  }, []);
  return (
    <div className="app-container">
      {}
      <div className="bg-grid"></div>
      <div className="aurora a1"></div>
      <div className="aurora a2"></div>
      {}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        {}
        <Hero info={releaseInfo} loading={loading} />
        {}
        <AppMockup />
        {}
        {!loading && releaseInfo && (
          <DownloadSection assets={releaseInfo.assets} />
        )}
        {}
        <section className="features" id="features">
          <FeatureCard 
            icon={<CameraIcon size={32} />} 
            title="Социальная сеть" 
            desc="Делитесь моментами, фото и видео. Умная лента, система комментариев и репостов в защищенной среде." 
          />
          <FeatureCard 
            icon={<PaletteIcon size={32} />} 
            title="Полная кастомизация" 
            desc="Меняйте цвета, шрифты и эффекты. Устанавливайте сторонние моды и темы из нашего каталога." 
          />
          <FeatureCard 
            icon={<MusicIcon size={32} />} 
            title="Музыка без границ" 
            desc="Встроенный плеер с поддержкой аудиофильских форматов. Ваша медиатека всегда под рукой." 
          />
        </section>
      </main>
      {}
      <Footer info={releaseInfo || CONFIG.fallbackData} />
    </div>
  );
}
export default App;