import React, { useState, useEffect } from 'react';
import { WindowsIcon, LinuxIcon, AppleIcon } from './Icons';
import { CONFIG } from '../app-data';
const formatBytes = (bytes) => {
    if (!bytes) return '';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
};
const DownloadSection = ({ assets = [] }) => {
  const [userOS, setUserOS] = useState('windows');
  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.includes("mac")) setUserOS("mac");
    else if (ua.includes("linux")) setUserOS("linux");
    else setUserOS("windows");
  }, []);
  const platformConfig = [
    { 
        id: 'windows', 
        label: 'Windows', 
        icon: <WindowsIcon size={28}/>, 
        check: n => n.endsWith('.exe') && !n.includes('blockmap') 
    },
    { 
        id: 'linux', 
        label: 'Linux', 
        icon: <LinuxIcon size={28}/>, 
        check: n => n.endsWith('.AppImage') 
    },
    { 
        id: 'mac', 
        label: 'macOS', 
        icon: <AppleIcon size={28}/>, 
        check: n => n.endsWith('.dmg') 
    }
  ];
  const availableDownloads = platformConfig
    .map(platform => {
        const asset = assets.find(a => platform.check(a.name));
        return asset ? { ...platform, asset } : null;
    })
    .filter(item => item !== null); 
  if (availableDownloads.length === 0) {
    return (
        <section className="alt-downloads">
            <p style={{ color: 'var(--text-sec)', fontSize: '14px' }}>
                Прямые ссылки временно недоступны. Проверьте раздел 
                <a href={`${CONFIG.fallbackData.repository}/releases`} target="_blank" rel="noreferrer" style={{ marginLeft: '5px' }}>Releases</a>.
            </p>
        </section>
    );
  }
  return (
    <section className="alt-downloads" id="download">
      {availableDownloads.map(({ id, label, icon, asset }) => {
        const isMain = id === userOS;
        return (
          <a 
            key={id}
            href={asset.browser_download_url} 
            className={`alt-btn ${isMain ? 'main' : ''}`}
            title={`Скачать ${asset.name}`}
          >
            {icon}
            <div className="meta">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>{label}</span>
                {isMain && <span className="size" style={{ color: 'var(--primary)', fontWeight: '800' }}>(Ваша ОС)</span>}
              </div>
              <span className="size">{formatBytes(asset.size)} • прямая ссылка</span>
            </div>
          </a>
        );
      })}
    </section>
  );
};
export default DownloadSection;