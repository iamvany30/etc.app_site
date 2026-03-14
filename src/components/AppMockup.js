import React from 'react';
import { HomeIcon, CompassIcon, BellIcon, UserIcon, PlayIcon, HeartIcon, ChatIcon, RepostIcon } from './Icons';
const AppMockup = () => {
  return (
    <div className="mockup-wrapper">
      {}
      <div className="mockup-header">
        <div className="mac-dots">
            <div className="mac-dot r"></div>
            <div className="mac-dot y"></div>
            <div className="mac-dot g"></div>
        </div>
        <div className="mock-island">✨ итд.app запущен</div>
        <div style={{ width: 44 }}></div> {}
      </div>
      <div className="mockup-body">
        {}
        <div className="m-sidebar">
          <div className="m-nav active"><HomeIcon size={24}/> <span>Лента</span></div>
          <div className="m-nav"><CompassIcon size={24}/> <span>Обзор</span></div>
          <div className="m-nav"><BellIcon size={24}/> <span>События</span></div>
          <div className="m-nav"><UserIcon size={24}/> <span>Профиль</span></div>
          <div className="m-user">
             <div className="av"></div>
             <div style={{display: 'flex', flexDirection: 'column', gap: 2, overflow: 'hidden'}}>
                 <span style={{fontSize: 14, fontWeight: 800, color: 'var(--text)'}}>iamvany</span>
                 <span style={{fontSize: 12, color: 'var(--text-sec)'}}>@vany</span>
             </div>
          </div>
        </div>
        {}
        <div className="m-main">
          <div className="m-feed-header">
              <div className="m-feed-tab active">Популярное</div>
              <div className="m-feed-tab">Подписки</div>
          </div>
          <div className="m-post">
             <div className="av" style={{background: 'linear-gradient(135deg, #1d9bf0, #794bc4)'}}></div>
             <div className="m-post-content">
                <div>
                    <span className="m-post-name">itdStatus </span>
                    <span className="m-post-handle">@status · 2ч</span>
                </div>
                <div className="m-post-text">
                    Вышло новое обновление клиента! Добавили поддержку кастомных тем и плагинов. 🚀🔥
                </div>
                <div className="m-post-media"></div>
                <div className="m-post-actions">
                    <div className="m-action"><ChatIcon size={18}/> 124</div>
                    <div className="m-action"><RepostIcon size={18}/> 24</div>
                    <div className="m-action" style={{color: '#f91880'}}><HeartIcon size={18}/> 1.5K</div>
                </div>
             </div>
          </div>
          <div className="m-post" style={{borderBottom: 'none'}}>
             <div className="av" style={{background: '#00ba7c'}}></div>
             <div className="m-post-content">
                <div>
                    <span className="m-post-name">Graphic Chestnut </span>
                    <span className="m-post-handle">@design · 5ч</span>
                </div>
                <div className="m-post-text">
                    Тестирую новый встроенный редактор скетчей. Очень крутая штука для быстрых набросков! 🎨
                </div>
                <div className="m-post-actions">
                    <div className="m-action"><ChatIcon size={18}/> 45</div>
                    <div className="m-action"><RepostIcon size={18}/> 5</div>
                    <div className="m-action"><HeartIcon size={18}/> 342</div>
                </div>
             </div>
          </div>
        </div>
        {}
        <div className="m-right">
           <div className="m-widget m-player">
               <div className="m-player-cover"></div>
               <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
                   <span style={{fontSize: 14, fontWeight: 800, color: 'var(--text)'}}>Neon Vibes</span>
                   <span style={{fontSize: 12, color: 'var(--text-sec)'}}>Synthwave</span>
               </div>
               <div style={{width: 32, height: 32, borderRadius: '50%', background: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                   <PlayIcon size={16}/>
               </div>
           </div>
           <div className="m-widget">
               <div className="m-widget-title">Кого читать</div>
               <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16}}>
                   <div style={{width: 40, height: 40, borderRadius: '50%', background: 'var(--input)'}}></div>
                   <div style={{display: 'flex', flexDirection: 'column', gap: 2}}>
                       <span style={{fontSize: 14, fontWeight: 700, color: 'var(--text)'}}>Developer</span>
                       <span style={{fontSize: 12, color: 'var(--text-sec)'}}>@dev</span>
                   </div>
               </div>
               <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                   <div style={{width: 40, height: 40, borderRadius: '50%', background: 'var(--input)'}}></div>
                   <div style={{display: 'flex', flexDirection: 'column', gap: 2}}>
                       <span style={{fontSize: 14, fontWeight: 700, color: 'var(--text)'}}>Music Bot</span>
                       <span style={{fontSize: 12, color: 'var(--text-sec)'}}>@music</span>
                   </div>
               </div>
           </div>
        </div>
      </div>
    </div>
  );
};
export default AppMockup;