import React from 'react';
import { HomeIcon, CompassIcon, BellIcon, UserIcon, MusicIcon, HeartIcon, ChatIcon, RepostIcon } from './Icons';

const ViewIcon = ({size=20}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const BookmarkIcon = ({size=20}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>;
const MoreDotsIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>;
const PauseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>;

const AppMockup = () => {
  return (
    <div className="mockup-wrapper">
      <div className="mockup-header">
        <div className="mac-dots">
            <div className="mac-dot r"></div>
            <div className="mac-dot y"></div>
            <div className="mac-dot g"></div>
        </div>
        <div className="mock-island">
            <span>✨</span> 
            <span>итд.app запущен</span>
        </div>
        <div style={{ width: 50 }}></div>
      </div>

      <div className="mockup-body">
        <div className="m-sidebar">
          <div className="m-nav-list">
             <div className="m-nav-item active"><HomeIcon size={26}/> <span className="m-nav-label">Лента</span></div>
             <div className="m-nav-item"><MusicIcon size={26}/> <span className="m-nav-label">Музыка</span></div>
             <div className="m-nav-item"><CompassIcon size={26}/> <span className="m-nav-label">Обзор</span></div>
             <div className="m-nav-item">
               <BellIcon size={26}/> <span className="m-nav-label">События</span>
               <span className="m-badge">3</span>
             </div>
             <div className="m-nav-item"><UserIcon size={26}/> <span className="m-nav-label">Профиль</span></div>
          </div>
          
          <div className="m-user-profile">
             <div className="m-avatar">🤙</div>
             <div className="m-user-info">
                 <span className="m-display-name">iamvany</span>
                 <span className="m-username">@vany</span>
             </div>
             <div className="m-more-dots"><MoreDotsIcon /></div>
          </div>
        </div>

        <div className="m-main">
          <div className="m-feed-header">
              <div className="m-tabs">
                  <div className="m-tab-pill"></div>
                  <div className="m-tab active">Популярное</div>
                  <div className="m-tab">Подписки</div>
                  <div className="m-tab">Клан</div>
              </div>
          </div>

          <div className="m-create-post">
             <div className="m-avatar">🤙</div>
             <div className="m-input-mock">Что нового?</div>
          </div>

          <div className="m-post">
             <div className="m-avatar">🤙</div>
             <div className="m-post-content">
                <div className="m-post-header">
                    <span className="m-author">iamvany</span>
                    <span className="m-handle">@vany</span>
                    <span className="m-dot">·</span>
                    <span className="m-time">2ч</span>
                </div>
                <div className="m-post-text">
                    Вышло новое обновление клиента! Добавили поддержку кастомных тем и плагинов. 🚀🔥
                </div>
                <div className="m-post-media"></div>
                <div className="m-post-actions">
                    <div className="m-actions-left">
                        <div className="m-action-group comment"><div className="m-action-icon"><ChatIcon size={20}/></div> <span className="m-count">124</span></div>
                        <div className="m-action-group repost"><div className="m-action-icon"><RepostIcon size={20}/></div> <span className="m-count">24</span></div>
                        <div className="m-action-group like active"><div className="m-action-icon"><HeartIcon size={20}/></div> <span className="m-count">1.5K</span></div>
                        <div className="m-action-group bookmark"><div className="m-action-icon"><BookmarkIcon size={20}/></div></div>
                    </div>
                    <div className="m-actions-right">
                        <div className="m-action-group view"><div className="m-action-icon"><ViewIcon size={20}/></div> <span className="m-count">12K</span></div>
                    </div>
                </div>
             </div>
          </div>

          <div className="m-post" style={{borderBottom: 'none'}}>
             <div className="m-avatar">🫠</div>
             <div className="m-post-content">
                <div className="m-post-header">
                    <span className="m-author">Graphic Chestnut</span>
                    <span className="m-handle">@GraphiChestnut</span>
                    <span className="m-dot">·</span>
                    <span className="m-time">5ч</span>
                </div>
                <div className="m-post-text">
                    Тестирую новый встроенный редактор скетчей. Очень крутая штука для быстрых набросков! 🎨
                </div>
                <div className="m-post-actions">
                    <div className="m-actions-left">
                        <div className="m-action-group comment"><div className="m-action-icon"><ChatIcon size={20}/></div> <span className="m-count">45</span></div>
                        <div className="m-action-group repost"><div className="m-action-icon"><RepostIcon size={20}/></div> <span className="m-count">5</span></div>
                        <div className="m-action-group like"><div className="m-action-icon"><HeartIcon size={20}/></div> <span className="m-count">342</span></div>
                        <div className="m-action-group bookmark"><div className="m-action-icon"><BookmarkIcon size={20}/></div></div>
                    </div>
                    <div className="m-actions-right">
                        <div className="m-action-group view"><div className="m-action-icon"><ViewIcon size={20}/></div> <span className="m-count">4K</span></div>
                    </div>
                </div>
             </div>
          </div>
        </div>

        <div className="m-right">
           <div className="m-glass-card playing">
               <div className="m-glass-bg"></div>
               <div className="m-player-content">
                   <div className="m-player-cover">♪
                       <div className="m-player-overlay"><PauseIcon /></div>
                   </div>
                   <div className="m-player-info">
                       <span className="m-player-title">Neon Vibes</span>
                       <span className="m-player-artist">Synthwave</span>
                   </div>
               </div>
           </div>

           <div className="m-widget-box">
               <div className="m-widget-header">Кого читать</div>
               
               <div className="m-widget-item">
                   <div className="m-avatar">🫠</div>
                   <div className="m-user-info">
                       <span className="m-display-name">Graphic Chestnut</span>
                       <span className="m-username">@GraphiChestnut</span>
                   </div>
               </div>

               <div className="m-widget-item">
                   <div className="m-avatar">🤖</div>
                   <div className="m-user-info">
                       <span className="m-display-name">Developer</span>
                       <span className="m-username">@dev</span>
                   </div>
               </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AppMockup;