import React, { useState, useEffect } from 'react';
import { Compass, Search, Layers, Award, Home, Bookmark } from 'lucide-react';
import HomeView from './views/HomeView';
import SelfDiscoveryView from './views/SelfDiscoveryView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import RoadmapView from './views/RoadmapView';
import AIChatModal from './components/AIChatModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedMajors, setBookmarkedMajors] = useState(() => {
    try {
      const saved = localStorage.getItem('careerqr_bookmarked_majors');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [roadmapChoices, setRoadmapChoices] = useState({ primary: '', backup: '' });

  useEffect(() => {
    try {
      localStorage.setItem('careerqr_bookmarked_majors', JSON.stringify(bookmarkedMajors));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedMajors]);

  const handleBookmarkMajor = (major) => {
    if (!bookmarkedMajors.some(m => m.id === major.id)) {
      setBookmarkedMajors([...bookmarkedMajors, major]);
    }
  };

  const handleSelectForRoadmap = (primary, backup) => {
    setRoadmapChoices({ primary, backup });
  };

  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'self', label: 'Khám phá bản thân', icon: Compass },
    { id: 'search', label: 'Tra cứu', icon: Search },
    { id: 'compare', label: 'So sánh lựa chọn', icon: Layers },
    { id: 'roadmap', label: 'Career Roadmap', icon: Award }
  ];

  return (
    <div className="app-container">
      {/* Sticky Top Header */}
      <header className="app-header">
        <div className="header-inner">
          <div className="brand-wrap" onClick={() => setActiveTab('home')}>
            <svg className="brand-logo-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="12" height="12" rx="3" fill="#4F46E5" />
              <rect x="18" y="2" width="12" height="12" rx="3" fill="#6366F1" opacity="0.3" />
              <rect x="2" y="18" width="12" height="12" rx="3" fill="#06B6D4" opacity="0.3" />
              <circle cx="24" cy="24" r="6" fill="#F59E0B" />
            </svg>
            <div>
              <div className="brand-title">CAREER QR</div>
              <span className="brand-subtitle">Career Balance 2026</span>
            </div>
          </div>

          {/* Navigation Pill Bar */}
          <nav className="nav-tabs" aria-label="Điều hướng chính">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  className={`nav-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                  {item.id === 'compare' && bookmarkedMajors.length > 0 && (
                    <span style={{
                      fontSize: '0.7rem',
                      background: isActive ? '#FFFFFF' : '#4F46E5',
                      color: isActive ? '#4F46E5' : '#FFFFFF',
                      padding: '1px 6px',
                      borderRadius: '999px',
                      fontWeight: '800'
                    }}>
                      {bookmarkedMajors.length}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Views */}
      <main className="main-content">
        {activeTab === 'home' && (
          <HomeView
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSearchQuery={(q) => setSearchQuery(q)}
          />
        )}

        {activeTab === 'self' && (
          <SelfDiscoveryView
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBookmarkMajor={handleBookmarkMajor}
          />
        )}

        {activeTab === 'search' && (
          <SearchView
            initialQuery={searchQuery}
            onBookmarkMajor={handleBookmarkMajor}
          />
        )}

        {activeTab === 'compare' && (
          <CompareView
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            bookmarkedMajors={bookmarkedMajors}
            onSelectForRoadmap={handleSelectForRoadmap}
          />
        )}

        {activeTab === 'roadmap' && (
          <RoadmapView
            initialPrimary={roadmapChoices.primary}
            initialBackup={roadmapChoices.backup}
          />
        )}
      </main>

      {/* Floating AI Assistant */}
      <AIChatModal currentContext={`Đang xem mục: ${navItems.find(n => n.id === activeTab)?.label}`} />

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-inner">
          <div>
            <strong>CAREER QR</strong> — Nền tảng định hướng nghề nghiệp & chọn trường cho học sinh THPT.
          </div>
          <div>
            Đồng hành cùng học sinh THPT & phụ huynh Việt Nam trên hành trình chọn đúng ngành, vững tương lai • Bảo mật thông tin 100%.
          </div>
        </div>
      </footer>
    </div>
  );
}
