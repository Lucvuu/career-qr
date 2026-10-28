import React, { useState, useEffect } from 'react';
import { Compass, Search, Layers, Award, Home, RotateCcw } from 'lucide-react';
import HomeView from './views/HomeView';
import SelfDiscoveryView from './views/SelfDiscoveryView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import RoadmapView from './views/RoadmapView';
import AIChatModal from './components/AIChatModal';

class ViewErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error?.message || 'Đã xảy ra lỗi hiển thị giao diện.'
    };
  }

  componentDidCatch(error, info) {
    console.error('CAREER QR ViewErrorBoundary:', error, info);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false, errorMessage: '' });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            background: '#FFFFFF',
            border: '1.5px solid #FECDD3',
            borderRadius: '24px',
            padding: '40px 24px',
            textAlign: 'center',
            maxWidth: '560px',
            margin: '32px auto'
          }}
        >
          <div style={{ fontSize: '2.4rem', marginBottom: '10px' }}>⚠️</div>
          <h2 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '8px' }}>
            Không thể tải mục này do dữ liệu trình duyệt cũ
          </h2>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '18px' }}>
            {this.state.errorMessage}
          </p>
          <button
            type="button"
            className="btn-edtech-primary"
            onClick={() => {
              this.setState({ hasError: false, errorMessage: '' });
              if (this.props.onRecover) this.props.onRecover();
            }}
          >
            <RotateCcw size={16} />
            <span>Tải lại giao diện ngay</span>
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedMajors, setBookmarkedMajors] = useState(() => {
    try {
      const saved = localStorage.getItem('careerqr_bookmarked_majors');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed.filter((m) => m && typeof m === 'object' && m.id) : [];
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
    if (!major?.id) return;
    setBookmarkedMajors((prev) =>
      prev.some((m) => m.id === major.id) ? prev : [...prev, major]
    );
  };

  const handleToggleBookmarkMajor = (major) => {
    if (!major?.id) return;
    setBookmarkedMajors((prev) =>
      prev.some((m) => m.id === major.id)
        ? prev.filter((m) => m.id !== major.id)
        : [...prev, major]
    );
  };

  const handleSelectForRoadmap = (primary, backup) => {
    setRoadmapChoices({ primary, backup });
  };

  const navItems = [
    { id: 'home', label: 'Trang chủ', shortLabel: 'Trang chủ', icon: Home },
    { id: 'self', label: 'Khám phá bản thân', shortLabel: 'Khám phá', icon: Compass },
    { id: 'search', label: 'Tra cứu ngành/trường', shortLabel: 'Tra cứu', icon: Search },
    { id: 'compare', label: 'Đấu trường so sánh', shortLabel: 'So sánh', icon: Layers },
    { id: 'roadmap', label: 'Career Roadmap', shortLabel: 'Lộ trình', icon: Award }
  ];

  return (
    <div className="app-container">
      {/* Sticky Top Header (Desktop & Tablet) */}
      <header className="app-header">
        <div className="header-inner">
          <div className="brand-wrap" onClick={() => setActiveTab('home')}>
            <svg className="brand-logo-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="12" height="12" rx="3.5" fill="#4F46E5" />
              <rect x="18" y="2" width="12" height="12" rx="3.5" fill="#0EA5E9" />
              <rect x="2" y="18" width="12" height="12" rx="3.5" fill="#10B981" />
              <circle cx="24" cy="24" r="6" fill="#F59E0B" />
            </svg>
            <div>
              <div className="brand-title">
                <span>CAREER QR</span>
                <span className="brand-badge-year">2026</span>
              </div>
              <span className="brand-subtitle">La bàn Chọn Ngành THPT</span>
            </div>
          </div>

          {/* Desktop Navigation Pill Bar */}
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
                      background: isActive ? '#4F46E5' : '#EEF2FF',
                      color: isActive ? '#FFFFFF' : '#4F46E5',
                      padding: '1px 6px',
                      borderRadius: '999px',
                      fontWeight: '800',
                      marginLeft: '2px'
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
        <ViewErrorBoundary
          resetKey={activeTab}
          onRecover={() => {
            setSearchQuery('');
            setActiveTab('search');
          }}
        >
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
            onClearQuery={() => setSearchQuery('')}
            bookmarkedMajors={bookmarkedMajors}
            onBookmarkMajor={handleBookmarkMajor}
            onToggleBookmarkMajor={handleToggleBookmarkMajor}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectForRoadmap={handleSelectForRoadmap}
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
        </ViewErrorBoundary>
      </main>

      {/* Floating AI Assistant */}
      <AIChatModal 
        currentContext={`Đang xem mục: ${navItems.find(n => n.id === activeTab)?.label}`}
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSearchQuery={(q) => setSearchQuery(q)}
        onSelectForRoadmap={handleSelectForRoadmap}
        onBookmarkMajor={handleBookmarkMajor}
        bookmarkedMajors={bookmarkedMajors}
      />

      {/* Mobile Bottom Navigation Dock (Visible on Mobile Screens) */}
      <nav className="mobile-bottom-dock" aria-label="Điều hướng di động">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              className={`mobile-dock-btn ${isActive ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="mobile-dock-icon-wrap">
                <Icon size={20} />
                {item.id === 'compare' && bookmarkedMajors.length > 0 && (
                  <span className="mobile-dock-badge">{bookmarkedMajors.length}</span>
                )}
              </div>
              <span>{item.shortLabel}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-inner">
          <div>
            <strong>CAREER QR 2026</strong> — Nền tảng định hướng nghề nghiệp &amp; chọn trường đại học cho học sinh THPT Việt Nam.
          </div>
          <div>
            Đồng hành cùng học sinh &amp; phụ huynh chọn đúng ngành, vững tương lai • 100% Bảo mật dữ liệu trên máy bạn.
          </div>
        </div>
      </footer>
    </div>
  );
}
