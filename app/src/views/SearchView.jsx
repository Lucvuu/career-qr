import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  Layers, 
  Heart, 
  X, 
  BookmarkCheck, 
  ArrowRight, 
  Video, 
  Play, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Flame, 
  Award,
  Clock,
  Tv,
  Building2,
  MapPin,
  Globe
} from 'lucide-react';
import { 
  MAJORS_DATA, 
  COMBINATIONS_DATA, 
  UNIVERSITIES_DATA,
  getVideosForMajor, 
  getWorkdayTimeline 
} from '../data/careerData';
import ThematicVideoStage from '../components/ThematicVideoStage';
import UniversityLogo from '../components/UniversityLogo';

export default function SearchView({ 
  initialQuery = "", 
  onBookmarkMajor, 
  onNavigate, 
  onSelectForRoadmap 
}) {
  const [activeTab, setActiveTab] = useState('nganh'); // 'nganh' | 'truong' | 'video' | 'tohop'
  const [searchKeyword, setSearchKeyword] = useState(initialQuery);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedCombo, setSelectedCombo] = useState('');
  const [selectedUniversityRegion, setSelectedUniversityRegion] = useState('all'); // 'all' | 'bac' | 'trung' | 'nam'
  const [selectedMajorModal, setSelectedMajorModal] = useState(null);
  const [activeVideoMajor, setActiveVideoMajor] = useState(null); // Major object for Cinema Modal
  const [activeEpisodeIndex, setActiveEpisodeIndex] = useState(0);
  const [cinemaMode, setCinemaMode] = useState('youtube'); // 'youtube' | 'interactive'
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);
  const [savedMajorIds, setSavedMajorIds] = useState([]);

  const groups = [
    'Công nghệ & Máy tính', 
    'Kỹ thuật & Công nghệ', 
    'Y tế & Sức khỏe', 
    'Kinh doanh & Quản lý', 
    'Sư phạm & Giáo dục',
    'Nghệ thuật & Sáng tạo', 
    'Khoa học Xã hội'
  ];
  const combos = ['A00', 'A01', 'B00', 'C00', 'D01', 'D07', 'V00', 'H00'];

  // Filter logic
  const filteredMajors = MAJORS_DATA.filter(m => {
    if (selectedGroup && m.nhom_nganh !== selectedGroup) return false;
    if (selectedCombo && !m.to_hop.includes(selectedCombo)) return false;
    if (searchKeyword.trim()) {
      const kw = searchKeyword.toLowerCase().trim();

      // Check if keyword matches a university code or name to list that school's majors
      const matchingUni = (UNIVERSITIES_DATA || []).find(u => 
        u.code.toLowerCase() === kw || 
        u.id.toLowerCase() === kw ||
        u.name.toLowerCase().includes(kw)
      );
      const matchUniMajors = matchingUni ? matchingUni.majors.includes(m.id) : false;

      const match = m.ten_nganh.toLowerCase().includes(kw) ||
                    m.mo_ta.toLowerCase().includes(kw) ||
                    m.nang_luc.toLowerCase().includes(kw) ||
                    m.to_hop.some(t => t.toLowerCase().includes(kw)) ||
                    m.truong_tieu_bieu.some(t => t.toLowerCase().includes(kw)) ||
                    matchUniMajors;
      if (!match) return false;
    }
    return true;
  });

  const filteredUniversities = (UNIVERSITIES_DATA || []).filter(u => {
    if (selectedUniversityRegion !== 'all' && u.region !== selectedUniversityRegion) return false;
    if (searchKeyword.trim()) {
      const kw = searchKeyword.toLowerCase().trim();
      const match = u.name.toLowerCase().includes(kw) ||
                    u.code.toLowerCase().includes(kw) ||
                    u.city.toLowerCase().includes(kw) ||
                    u.highlight.toLowerCase().includes(kw) ||
                    u.benchmarks.toLowerCase().includes(kw);
      if (!match) return false;
    }
    return true;
  });

  const handleBookmark = (e, m) => {
    if (e && e.stopPropagation) e.stopPropagation();
    onBookmarkMajor(m);
    if (!savedMajorIds.includes(m.id)) {
      setSavedMajorIds([...savedMajorIds, m.id]);
    }
  };

  const handleOpenCinema = (m, episodeIdx = 0, defaultMode = 'youtube') => {
    setActiveVideoMajor(m);
    setActiveEpisodeIndex(episodeIdx);
    setCinemaMode(defaultMode);
    setActiveTimelineStep(0);
  };

  const handleSetRoadmap = (majorName) => {
    if (onSelectForRoadmap) {
      onSelectForRoadmap(majorName, '');
    }
    if (onNavigate) {
      onNavigate('roadmap');
    }
    setActiveVideoMajor(null);
  };

  return (
    <div className="tab-pane-animate">
      {/* HEADER SECTION */}
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <div className="pill-badge" style={{ marginBottom: '10px' }}>🔍 BƯỚC 2 / 4 • CƠ SỞ DỮ LIỆU &amp; TRẢI NGHIỆM NGHỀ</div>
        <h1 style={{ fontSize: '2.35rem', marginBottom: '8px' }}>Tra cứu ngành học, trường đại học &amp; Trải nghiệm thực tế</h1>
        <p style={{ color: '#64748B', maxWidth: '68ch', margin: '0 auto', fontSize: '0.98rem' }}>
          Tra cứu thông tin hơn 30 ngành trọng điểm, 26+ trường ĐH 3 miền chuẩn tuyển sinh 2026, mô phỏng <strong>"Một Ngày Làm Nghề"</strong> và xóa bỏ các lầm tưởng phổ biến.
        </p>
      </div>

      {/* TOP SEGMENTED CONTROL BAR (4 TABS) */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {/* Tab 1: Ngành đào tạo */}
        <button
          onClick={() => setActiveTab('nganh')}
          style={{
            padding: '12px 22px',
            borderRadius: '999px',
            border: activeTab === 'nganh' ? 'none' : '1.5px solid #CBD5E1',
            background: activeTab === 'nganh' ? 'var(--primary-gradient)' : '#FFFFFF',
            color: activeTab === 'nganh' ? '#FFFFFF' : '#1E293B',
            fontWeight: '700',
            fontSize: '0.92rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: activeTab === 'nganh' ? '0 8px 20px -4px rgba(79, 70, 229, 0.35)' : 'var(--shadow-sm)',
            transition: 'all 0.2s ease'
          }}
        >
          <BookOpen size={18} />
          <span>Ngành đào tạo ({filteredMajors.length})</span>
        </button>

        {/* Tab 2: Trường Đại học 3 Miền */}
        <button
          onClick={() => setActiveTab('truong')}
          style={{
            padding: '12px 22px',
            borderRadius: '999px',
            border: activeTab === 'truong' ? 'none' : '1.5px solid #CBD5E1',
            background: activeTab === 'truong' ? 'var(--primary-gradient)' : '#FFFFFF',
            color: activeTab === 'truong' ? '#FFFFFF' : '#1E293B',
            fontWeight: '700',
            fontSize: '0.92rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: activeTab === 'truong' ? '0 8px 20px -4px rgba(79, 70, 229, 0.35)' : 'var(--shadow-sm)',
            transition: 'all 0.2s ease'
          }}
        >
          <Building2 size={18} />
          <span>Trường Đại học ({filteredUniversities.length})</span>
          <span style={{ 
            fontSize: '0.68rem', 
            fontWeight: '800', 
            padding: '2px 7px', 
            borderRadius: '999px', 
            background: activeTab === 'truong' ? '#FFFFFF' : '#4F46E5', 
            color: activeTab === 'truong' ? '#4F46E5' : '#FFFFFF' 
          }}>
            3 MIỀN
          </span>
        </button>

        {/* Tab 3: Video Trải nghiệm Nghề (Thực tế) - Highlighted Rose/Coral */}
        <button
          onClick={() => setActiveTab('video')}
          style={{
            padding: '12px 22px',
            borderRadius: '999px',
            border: activeTab === 'video' ? 'none' : '1.5px solid #FECDD3',
            background: activeTab === 'video' ? 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)' : '#FFF1F2',
            color: activeTab === 'video' ? '#FFFFFF' : '#E11D48',
            fontWeight: '800',
            fontSize: '0.92rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: activeTab === 'video' ? '0 8px 20px -4px rgba(244, 63, 94, 0.4)' : 'var(--shadow-sm)',
            transition: 'all 0.2s ease'
          }}
        >
          <Tv size={18} />
          <span>▶ Rạp Phim Nghề Nghiệp</span>
          <span style={{ 
            fontSize: '0.68rem', 
            fontWeight: '800', 
            padding: '2px 7px', 
            borderRadius: '999px', 
            background: activeTab === 'video' ? '#FFFFFF' : '#F43F5E', 
            color: activeTab === 'video' ? '#E11D48' : '#FFFFFF' 
          }}>
            MỚI
          </span>
        </button>

        {/* Tab 4: Tổ hợp xét tuyển */}
        <button
          onClick={() => setActiveTab('tohop')}
          style={{
            padding: '12px 22px',
            borderRadius: '999px',
            border: activeTab === 'tohop' ? 'none' : '1.5px solid #CBD5E1',
            background: activeTab === 'tohop' ? 'var(--primary-gradient)' : '#FFFFFF',
            color: activeTab === 'tohop' ? '#FFFFFF' : '#1E293B',
            fontWeight: '700',
            fontSize: '0.92rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: activeTab === 'tohop' ? '0 8px 20px -4px rgba(79, 70, 229, 0.35)' : 'var(--shadow-sm)',
            transition: 'all 0.2s ease'
          }}
        >
          <Layers size={18} />
          <span>Tổ hợp xét tuyển ({COMBINATIONS_DATA.length})</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: NGÀNH ĐÀO TẠO (MAJOR DIRECTORY WITH INLINE VIDEO BANNER)
          ========================================================================= */}
      {activeTab === 'nganh' && (
        <>
          {/* Filter Bar */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E0E7FF',
              borderRadius: '24px',
              padding: '22px',
              boxShadow: 'var(--shadow-card)',
              marginBottom: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px'
            }}
          >
            {/* Search Input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#1E293B', marginBottom: '8px' }}>Từ khóa tìm kiếm</label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #CBD5E1', borderRadius: '14px', padding: '10px 14px', background: '#FFFDF9' }}>
                <Search size={18} color="#64748B" style={{ marginRight: '8px', flexShrink: 0 }} />
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="Tên ngành, năng lực, mã ngành..."
                  style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.92rem', color: '#1E293B', background: 'transparent' }}
                />
                {searchKeyword && (
                  <button onClick={() => setSearchKeyword('')} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#94A3B8' }}>
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Filter by Group */}
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#1E293B', marginBottom: '8px' }}>Nhóm lĩnh vực</label>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '1.5px solid #CBD5E1', fontSize: '0.92rem', outline: 'none', background: '#FFFDF9', color: '#1E293B', fontWeight: '600' }}
              >
                <option value="">Tất cả nhóm ngành</option>
                {groups.map((g, i) => <option key={i} value={g}>{g}</option>)}
              </select>
            </div>

            {/* Filter by Combo */}
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#1E293B', marginBottom: '8px' }}>Khối / Tổ hợp môn</label>
              <select
                value={selectedCombo}
                onChange={(e) => setSelectedCombo(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '1.5px solid #CBD5E1', fontSize: '0.92rem', outline: 'none', background: '#FFFDF9', color: '#1E293B', fontWeight: '600' }}
              >
                <option value="">Tất cả tổ hợp xét tuyển</option>
                {combos.map((c, i) => <option key={i} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Majors Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {filteredMajors.map((m) => {
              const isSaved = savedMajorIds.includes(m.id);
              const majorVideos = getVideosForMajor(m.id);
              const featuredVideo = majorVideos[0];

              return (
                <div
                  key={m.id}
                  className="card-box"
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', transition: 'all 0.2s ease', position: 'relative' }}
                  onClick={() => setSelectedMajorModal(m)}
                >
                  <div>
                    {/* Top Row: Group Pill + Icon */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.74rem', fontWeight: '800', padding: '4px 10px', borderRadius: '999px', background: '#FEF3C7', color: '#B45309', border: '1px solid #FDE68A' }}>
                        {m.nhom_nganh}
                      </span>
                      <span style={{ fontSize: '1.8rem' }}>{m.icon}</span>
                    </div>

                    <h3 style={{ fontSize: '1.28rem', marginBottom: '6px', color: '#1E293B' }}>{m.ten_nganh}</h3>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: '600', marginBottom: '12px' }}>
                      Mã tuyển sinh: <span style={{ color: '#4F46E5' }}>{m.ma_nganh}</span>
                    </div>

                    {/* TOUCHPOINT 1: INLINE VIDEO BANNER INSIDE MAJOR BENTO CARD */}
                    {featuredVideo && (
                      <div
                        className="major-card-video-banner"
                        title="Bấm để xem video thực tế về ngành này"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenCinema(m, 0);
                        }}
                      >
                        <div className="video-banner-left">
                          <span className="video-banner-pill">🎥 {featuredVideo.type}</span>
                          <span className="video-banner-time">⏱ {featuredVideo.duration}</span>
                          <span className="video-banner-title">{featuredVideo.title}</span>
                        </div>
                        <button className="video-banner-btn" type="button">
                          <span>Xem</span> ▶
                        </button>
                      </div>
                    )}

                    <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.5', marginBottom: '16px' }}>{m.mo_ta}</p>

                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                      {m.to_hop.map((th, i) => (
                        <span key={i} style={{ padding: '3px 8px', fontSize: '0.75rem', fontWeight: '800', borderRadius: '999px', background: '#F0F9FF', color: '#0369A1', border: '1px solid #BAE6FD' }}>
                          {th}
                        </span>
                      ))}
                    </div>

                    <div style={{ background: '#F8FAFC', padding: '12px 14px', borderRadius: '14px', border: '1px solid #E2E8F0', marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '700' }}>ĐIỂM CHUẨN THAM KHẢO</div>
                        <div style={{ fontSize: '1rem', fontWeight: '900', color: '#4F46E5' }}>{m.diem_tb}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '700' }}>HỌC PHÍ DỰ KIẾN</div>
                        <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1E293B' }}>{m.hoc_phi}</div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: 3 Action Buttons */}
                  <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="btn-card-video"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenCinema(m, 0);
                      }}
                      title="Xem video trải nghiệm thực tế ngành này"
                    >
                      <Video size={15} />
                      <span>Video nghề</span>
                    </button>

                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <button
                        type="button"
                        onClick={(e) => handleBookmark(e, m)}
                        style={{
                          padding: '8px 12px',
                          fontSize: '0.82rem',
                          fontWeight: '700',
                          borderRadius: '999px',
                          border: isSaved ? '1.5px solid #10B981' : '1.5px solid #CBD5E1',
                          background: isSaved ? '#ECFDF5' : '#FFFFFF',
                          color: isSaved ? '#059669' : '#475569',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          cursor: 'pointer'
                        }}
                      >
                        {isSaved ? <BookmarkCheck size={15} /> : <Heart size={15} />}
                        <span>{isSaved ? 'Đã lưu' : 'So sánh'}</span>
                      </button>

                      <span style={{ fontSize: '0.84rem', fontWeight: '700', color: '#4F46E5', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        Chi tiết <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* =========================================================================
          TAB 2: CAREER VIDEO HUB & REALITY CHECK (DEDICATED STORY CARDS)
          ========================================================================= */}
      {activeTab === 'video' && (
        <div className="tab-pane-animate">
          {/* Banner Hero */}
          <div
            style={{
              background: 'linear-gradient(135deg, #FFF1F2 0%, #FEF3C7 50%, #EEF2FF 100%)',
              border: '1.5px solid #FECDD3',
              borderRadius: '24px',
              padding: '28px 32px',
              marginBottom: '32px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '999px', background: '#F43F5E', color: '#FFFFFF', fontSize: '0.74rem', fontWeight: '800', marginBottom: '8px' }}>
                <Flame size={14} />
                <span>GÓC NHÌN NGHỀ NGHIỆP THỰC TẾ 2026</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', color: '#1E293B', marginBottom: '6px' }}>
                Một Ngày Làm Nghề &amp; Góc Nhìn Thật
              </h2>
              <p style={{ color: '#475569', fontSize: '0.94rem', margin: 0, maxWidth: '62ch', lineHeight: '1.55' }}>
                Hơn 60% học sinh vỡ mộng khi vào đại học vì chỉ hình dung nghề nghiệp qua phim ảnh. Hãy cùng xem video thực tế tại doanh nghiệp, phòng lab và nghe sinh viên review chân thật trước khi đăng ký nguyện vọng.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ background: '#FFFFFF', padding: '12px 18px', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#E11D48', fontFamily: 'var(--font-display)' }}>100%</div>
                <div style={{ fontSize: '0.72rem', fontWeight: '700', color: '#64748B' }}>Thực tế phòng Lab</div>
              </div>
              <div style={{ background: '#FFFFFF', padding: '12px 18px', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#4F46E5', fontFamily: 'var(--font-display)' }}>Myth vs Truth</div>
                <div style={{ fontSize: '0.72rem', fontWeight: '700', color: '#64748B' }}>Xóa bỏ ngộ nhận</div>
              </div>
            </div>
          </div>

          {/* Video Story Cards Grid (2-Columns) */}
          <div className="video-stories-grid">
            {MAJORS_DATA.map((m) => {
              const videos = getVideosForMajor(m.id);
              const featured = videos[0];
              if (!featured) return null;
              const isSaved = savedMajorIds.includes(m.id);

              return (
                <div key={m.id} className="video-story-card">
                  {/* Video Thumbnail Header with Play Button */}
                  <div
                    className="video-story-header"
                    onClick={() => handleOpenCinema(m, 0)}
                  >
                    <div className="video-story-pattern" />

                    <div className="video-play-pulse-btn">
                      <Play size={24} fill="#F43F5E" style={{ marginLeft: '3px' }} />
                    </div>

                    <div className="video-channel-badge">
                      📺 {featured.channel}
                    </div>

                    <div className="video-duration-badge">
                      <Clock size={12} />
                      <span>{featured.duration}</span>
                    </div>

                    <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 2 }}>
                      <span style={{ fontSize: '0.74rem', fontWeight: '800', padding: '4px 10px', borderRadius: '999px', background: 'rgba(255, 255, 255, 0.92)', color: '#4F46E5' }}>
                        {m.nhom_nganh}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="video-story-body">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '1.5rem' }}>{m.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.76rem', fontWeight: '800', color: '#E11D48', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          {featured.type}
                        </div>
                        <h3 style={{ fontSize: '1.18rem', margin: 0, color: '#1E293B', lineHeight: '1.35' }}>
                          {featured.title}
                        </h3>
                      </div>
                    </div>

                    {/* Reality Check Callout Box (Lầm tưởng vs Thực tế) */}
                    <div className="reality-check-box">
                      <div className="reality-myth-row">
                        <span style={{ fontSize: '0.95rem' }}>❌</span>
                        <div>
                          <strong>Lầm tưởng phổ biến:</strong> {featured.realityCheck.myth}
                        </div>
                      </div>

                      <div className="reality-truth-row">
                        <span style={{ fontSize: '0.95rem' }}>✅</span>
                        <div>
                          <strong>Thực tế nghề nghiệp:</strong> {featured.realityCheck.truth}
                        </div>
                      </div>
                    </div>

                    {/* Key Takeaways preview */}
                    <div style={{ marginBottom: '18px', flex: 1 }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', marginBottom: '8px' }}>
                        ✨ Điểm cốt lõi học sinh cần biết:
                      </div>
                      <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.86rem', color: '#475569', lineHeight: '1.5' }}>
                        {featured.keyTakeaways.slice(0, 2).map((pt, i) => (
                          <li key={i} style={{ marginBottom: '4px' }}>{pt}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Actions */}
                    <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <button
                          type="button"
                          className="btn-edtech-primary"
                          onClick={() => handleOpenCinema(m, 0, 'youtube')}
                          style={{ padding: '8px 16px', fontSize: '0.86rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                        >
                          <Play size={14} fill="#FFFFFF" />
                          <span>Xem video nghề ▶</span>
                        </button>

                        <a
                          href={`https://www.youtube.com/watch?v=${featured.youtubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            padding: '8px 14px',
                            fontSize: '0.82rem',
                            fontWeight: '800',
                            borderRadius: '999px',
                            background: '#FFF1F2',
                            color: '#E11D48',
                            border: '1.5px solid #FECDD3',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            textDecoration: 'none',
                            cursor: 'pointer'
                          }}
                          title="Mở xem trực tiếp trên tab YouTube mới (không lo bị chặn)"
                        >
                          <ExternalLink size={14} />
                          <span>Mở YouTube ↗</span>
                        </a>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleBookmark(null, m)}
                        style={{
                          padding: '8px 14px',
                          fontSize: '0.82rem',
                          fontWeight: '700',
                          borderRadius: '999px',
                          border: isSaved ? '1.5px solid #10B981' : '1.5px solid #CBD5E1',
                          background: isSaved ? '#ECFDF5' : '#FFFFFF',
                          color: isSaved ? '#059669' : '#475569',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          cursor: 'pointer'
                        }}
                      >
                        {isSaved ? <BookmarkCheck size={15} /> : <Heart size={15} />}
                        <span>{isSaved ? 'Đã lưu' : 'Lưu so sánh'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: TRƯỜNG ĐẠI HỌC 3 MIỀN (BẮC - TRUNG - NAM)
          ========================================================================= */}
      {activeTab === 'truong' && (
        <div>
          {/* Region Selector Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {[
              { id: 'all', label: 'Tất cả 3 miền' },
              { id: 'bac', label: '🏛️ Miền Bắc & Hà Nội' },
              { id: 'trung', label: '🌊 Miền Trung & Đà Nẵng' },
              { id: 'nam', label: '🌴 Miền Nam & TP.HCM' }
            ].map(rg => (
              <button
                key={rg.id}
                type="button"
                onClick={() => setSelectedUniversityRegion(rg.id)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '999px',
                  border: selectedUniversityRegion === rg.id ? '2px solid #4F46E5' : '1px solid #CBD5E1',
                  background: selectedUniversityRegion === rg.id ? '#EEF2FF' : '#FFFFFF',
                  color: selectedUniversityRegion === rg.id ? '#4338CA' : '#475569',
                  fontWeight: selectedUniversityRegion === rg.id ? '800' : '600',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {rg.label}
              </button>
            ))}
          </div>

          {/* Universities Bento Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '22px' }}>
            {filteredUniversities.map(u => (
              <div 
                key={u.id} 
                className="card-box" 
                style={{ 
                  background: '#FFFFFF', 
                  borderRadius: '24px', 
                  padding: '24px', 
                  border: '1px solid #E2E8F0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', width: '100%' }}>
                      <UniversityLogo code={u.code} name={u.name} size={54} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                          <h3 style={{ fontSize: '1.14rem', margin: 0, color: '#1E293B', fontWeight: '800', lineHeight: '1.3' }}>
                            {u.name}
                          </h3>
                          <span style={{ 
                            fontSize: '0.68rem', 
                            fontWeight: '900', 
                            padding: '2px 8px', 
                            borderRadius: '999px', 
                            background: '#EEF2FF', 
                            color: '#4338CA', 
                            border: '1px solid #C7D2FE',
                            whiteSpace: 'nowrap'
                          }}>
                            MÃ: {u.code}
                          </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748B', flexWrap: 'wrap' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', whiteSpace: 'nowrap', flexShrink: 0, background: '#F0F9FF', color: '#0369A1', padding: '2px 8px', borderRadius: '6px', fontWeight: '700' }}>
                            <MapPin size={13} color="#0284C7" />
                            {u.city}
                          </span>
                          <span style={{ color: '#CBD5E1' }}>•</span>
                          <span style={{ fontWeight: '700', color: '#059669', background: '#ECFDF5', padding: '2px 8px', borderRadius: '6px', whiteSpace: 'nowrap' }}>
                            {u.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benchmarks & Tuition Badge */}
                  <div style={{ background: '#FAF5FF', border: '1px solid #E9D5FF', borderRadius: '14px', padding: '12px 14px', marginBottom: '14px' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6B21A8', fontWeight: '700', marginBottom: '4px' }}>
                      🎯 Điểm chuẩn tham khảo: <strong>{u.benchmarks}</strong>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#475569' }}>
                      💳 Học phí dự kiến: <strong>{u.tuition}</strong>
                    </div>
                  </div>

                  {/* Highlights */}
                  <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: '1.55', margin: '0 0 16px' }}>
                    {u.highlight}
                  </p>

                  {/* Top Majors Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                    {u.majors.map(mId => {
                      const majorObj = MAJORS_DATA.find(m => m.id === mId);
                      return (
                        <span
                          key={mId}
                          style={{
                            fontSize: '0.74rem',
                            fontWeight: '700',
                            padding: '4px 9px',
                            borderRadius: '8px',
                            background: '#F1F5F9',
                            color: '#475569',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <span>{majorObj?.icon || '🎓'}</span>
                          <span>{majorObj?.ten_nganh || mId}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Action Footer */}
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                  <a
                    href={u.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-edtech-secondary"
                    style={{ fontSize: '0.82rem', padding: '8px 14px', textDecoration: 'none' }}
                  >
                    <Globe size={14} />
                    <span>Website trường</span>
                  </a>

                  <button
                    type="button"
                    className="btn-edtech-primary"
                    style={{ fontSize: '0.82rem', padding: '8px 14px' }}
                    onClick={() => {
                      setSelectedMajorModal(null);
                      setSearchKeyword(u.code);
                      setActiveTab('nganh');
                    }}
                  >
                    <Search size={14} />
                    <span>Xem ngành tại {u.code}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 4: TỔ HỢP XÉT TUYỂN
          ========================================================================= */}
      {activeTab === 'tohop' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {COMBINATIONS_DATA.map((cb, idx) => (
            <div key={idx} className="card-box" style={{ background: '#FFFFFF', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#4F46E5', fontFamily: 'var(--font-display)' }}>
                  Khối {cb.ma}
                </span>
                <span style={{ fontSize: '0.76rem', fontWeight: '800', padding: '4px 10px', borderRadius: '999px', background: '#F0F9FF', color: '#0369A1', border: '1px solid #BAE6FD' }}>
                  Tổ hợp xét tuyển
                </span>
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1E293B', marginBottom: '10px' }}>
                {cb.mon}
              </div>
              <div style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: '1.5' }}>
                <strong>Nhóm ngành phù hợp:</strong> {cb.nhom}
              </div>
              <button
                type="button"
                className="btn-edtech-secondary"
                style={{ width: '100%', marginTop: '16px', padding: '9px 16px', fontSize: '0.86rem' }}
                onClick={() => {
                  setSelectedCombo(cb.ma);
                  setActiveTab('nganh');
                }}
              >
                <span>Xem các ngành xét tuyển {cb.ma}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          TOUCHPOINT 3: INTERACTIVE CAREER CINEMA MODAL (activeVideoMajor)
          ========================================================================= */}
      {activeVideoMajor && (
        <div
          className="cinema-modal-backdrop"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.78)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px 20px',
            overflowY: 'auto'
          }}
          onClick={() => setActiveVideoMajor(null)}
        >
          <div
            className="cinema-modal-shell"
            style={{
              background: '#FFFFFF',
              borderRadius: '26px',
              maxWidth: '960px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15)',
              border: '1.5px solid #E0E7FF',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ padding: '22px 28px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FAFAFA' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '2rem' }}>{activeVideoMajor.icon}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: '800', padding: '3px 9px', borderRadius: '999px', background: '#FEF3C7', color: '#B45309' }}>
                      {activeVideoMajor.nhom_nganh}
                    </span>
                    <span style={{ fontSize: '0.74rem', fontWeight: '700', color: '#64748B' }}>
                      Mã ngành: {activeVideoMajor.ma_nganh}
                    </span>
                  </div>
                  <h2 style={{ fontSize: '1.45rem', margin: '4px 0 0', color: '#1E293B' }}>
                    Trải Nghiệm Nghề Nghiệp: {activeVideoMajor.ten_nganh}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setActiveVideoMajor(null)}
                style={{ background: '#F1F5F9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748B' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px 28px' }}>
              {(() => {
                const videos = getVideosForMajor(activeVideoMajor.id);
                const currentVideo = videos[activeEpisodeIndex] || videos[0];
                const timelineSteps = getWorkdayTimeline(activeVideoMajor.id);
                const currentTimelineStep = timelineSteps[activeTimelineStep] || timelineSteps[0];
                const directYoutubeUrl = currentVideo.youtubeUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(activeVideoMajor.ten_nganh + ' một ngày làm việc hướng nghiệp thực tế')}`;

                return (
                  <>
                    {/* DUAL-MODE EXPERIENCE SELECTOR (YouTube Embed vs Interactive Simulation) */}
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', background: '#F1F5F9', padding: '5px', borderRadius: '14px' }}>
                      <button
                        type="button"
                        onClick={() => { setCinemaMode('youtube'); setIsPlayingVideo(true); }}
                        style={{
                          flex: 1,
                          padding: '10px 14px',
                          borderRadius: '10px',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: '800',
                          fontSize: '0.88rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          background: cinemaMode === 'youtube' ? '#FFFFFF' : 'transparent',
                          color: cinemaMode === 'youtube' ? '#E11D48' : '#64748B',
                          boxShadow: cinemaMode === 'youtube' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <Tv size={16} />
                        <span>▶ Video Trải Nghiệm Thực Tế (YouTube)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCinemaMode('interactive')}
                        style={{
                          flex: 1,
                          padding: '10px 14px',
                          borderRadius: '10px',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: '800',
                          fontSize: '0.88rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          background: cinemaMode === 'interactive' ? '#FFFFFF' : 'transparent',
                          color: cinemaMode === 'interactive' ? '#4F46E5' : '#64748B',
                          boxShadow: cinemaMode === 'interactive' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <Clock size={16} />
                        <span>⏱ Mô Phỏng 1 Ngày Làm Nghề (Timeline)</span>
                      </button>
                    </div>

                    {/* MODE 1: THEMATIC EMBED PLAYER (Electronic Circuit for Vi Mạch, ECG for Y Khoa, etc.) */}
                    {cinemaMode === 'youtube' && (
                      <ThematicVideoStage
                        majorId={activeVideoMajor.id}
                        majorName={activeVideoMajor.ten_nganh}
                        youtubeId={currentVideo.youtubeId}
                        videoTitle={currentVideo.title}
                        channel={currentVideo.channel}
                        duration={currentVideo.duration}
                        directYoutubeUrl={directYoutubeUrl}
                      />
                    )}

                    {/* MODE 2: INTERACTIVE WORKDAY SIMULATOR */}
                    {cinemaMode === 'interactive' && (
                      <div style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)', borderRadius: '20px', padding: '24px', color: '#FFFFFF', marginBottom: '20px', boxShadow: '0 12px 30px -10px rgba(49, 46, 129, 0.4)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '18px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '2rem' }}>{activeVideoMajor.icon}</span>
                            <div>
                              <div style={{ fontSize: '0.78rem', color: '#A5B4FC', fontWeight: '800', textTransform: 'uppercase' }}>
                                CHƯƠNG TRÌNH TRẢI NGHIỆM THỰC TẾ 2026
                              </div>
                              <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>
                                Một ngày làm việc thực tế: {activeVideoMajor.ten_nganh}
                              </div>
                            </div>
                          </div>

                          <a
                            href={directYoutubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '10px 18px',
                              borderRadius: '999px',
                              background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                              color: '#FFFFFF',
                              fontWeight: '800',
                              fontSize: '0.84rem',
                              textDecoration: 'none',
                              boxShadow: '0 4px 14px rgba(239, 68, 68, 0.4)'
                            }}
                          >
                            <Play size={15} fill="#FFFFFF" />
                            <span>🔴 Xem Trên YouTube (Không Bị Chặn) ↗</span>
                          </a>
                        </div>

                        {/* 4 Interactive Hourly Steps */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '18px' }}>
                          {timelineSteps.map((step, sIdx) => (
                            <div
                              key={sIdx}
                              onClick={() => setActiveTimelineStep(sIdx)}
                              style={{
                                padding: '12px 14px',
                                borderRadius: '14px',
                                background: activeTimelineStep === sIdx ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.08)',
                                border: activeTimelineStep === sIdx ? '2px solid #818CF8' : '1px solid rgba(255, 255, 255, 0.12)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                                <span style={{ fontSize: '0.74rem', fontWeight: '800', color: activeTimelineStep === sIdx ? '#FDE047' : '#C7D2FE' }}>
                                  {step.time}
                                </span>
                                <span style={{ fontSize: '1.1rem' }}>{step.icon}</span>
                              </div>
                              <div style={{ fontSize: '0.86rem', fontWeight: '800', lineHeight: '1.4' }}>
                                {step.stage}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Active Chapter Details */}
                        <div style={{ background: 'rgba(255, 255, 255, 0.12)', borderRadius: '16px', padding: '18px 20px', border: '1px solid rgba(255, 255, 255, 0.18)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <span style={{ fontSize: '1.3rem' }}>{currentTimelineStep.icon}</span>
                            <span style={{ fontWeight: '800', fontSize: '1.02rem', color: '#FFFFFF' }}>
                              {currentTimelineStep.time} — {currentTimelineStep.stage}
                            </span>
                          </div>
                          <p style={{ margin: 0, color: '#E0E7FF', fontSize: '0.92rem', lineHeight: '1.6' }}>
                            {currentTimelineStep.desc}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* External Link Fallback */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                      <a
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(activeVideoMajor.ten_nganh + ' hướng nghiệp thực tế')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.84rem',
                          color: '#0284C7',
                          fontWeight: '700',
                          textDecoration: 'none'
                        }}
                      >
                        <span>Mở tìm kiếm thêm video ngành này trên YouTube</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>

                    {/* AI 30-Second Summary Grid (2 Columns below player) */}
                    <div className="cinema-ai-summary-grid">
                      {/* Left: 3 Key Points */}
                      <div style={{ background: '#F0FDF4', border: '1.5px solid #BBF7D0', borderRadius: '18px', padding: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                          <Sparkles size={18} color="#059669" />
                          <h4 style={{ fontSize: '1.02rem', margin: 0, color: '#065F46' }}>
                            Tóm tắt 3 Điểm Cốt Lõi Cho Học Sinh
                          </h4>
                        </div>
                        <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                          {currentVideo.keyTakeaways.map((pt, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '10px', fontSize: '0.88rem', color: '#166534', lineHeight: '1.5' }}>
                              <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Myth vs Reality */}
                      <div style={{ background: '#FFFDF9', border: '1.5px solid #FDE68A', borderRadius: '18px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <AlertCircle size={18} color="#D97706" />
                          <h4 style={{ fontSize: '1.02rem', margin: 0, color: '#B45309' }}>
                            Góc Nhìn Thật (Myth vs Reality)
                          </h4>
                        </div>

                        <div style={{ background: '#FEF2F2', padding: '10px 14px', borderRadius: '12px', border: '1px solid #FECDD3', fontSize: '0.85rem', color: '#991B1B', lineHeight: '1.5' }}>
                          <strong>❌ Nhiều bạn lầm tưởng:</strong>
                          <div style={{ marginTop: '2px' }}>{currentVideo.realityCheck.myth}</div>
                        </div>

                        <div style={{ background: '#ECFDF5', padding: '10px 14px', borderRadius: '12px', border: '1px solid #A7F3D0', fontSize: '0.85rem', color: '#065F46', lineHeight: '1.5' }}>
                          <strong>✅ Thực tế khi đi học &amp; đi làm:</strong>
                          <div style={{ marginTop: '2px' }}>{currentVideo.realityCheck.truth}</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div style={{ borderTop: '1.5px solid #E2E8F0', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                      <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
                        Điểm chuẩn tham khảo: <strong style={{ color: '#4F46E5' }}>{activeVideoMajor.diem_tb}</strong> • Học phí: {activeVideoMajor.hoc_phi}
                      </div>

                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                          type="button"
                          className="btn-edtech-secondary"
                          onClick={() => {
                            handleBookmark(null, activeVideoMajor);
                            alert(`Đã lưu "${activeVideoMajor.ten_nganh}" vào Đấu trường so sánh!`);
                          }}
                        >
                          <Heart size={16} />
                          <span>Lưu vào Đấu trường So sánh</span>
                        </button>

                        <button
                          type="button"
                          className="btn-edtech-primary"
                          onClick={() => handleSetRoadmap(activeVideoMajor.ten_nganh)}
                        >
                          <Award size={16} />
                          <span>Đặt làm Mục tiêu Career Passport 2026</span>
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* DETAIL MODAL FOR SELECTED MAJOR */}
      {selectedMajorModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedMajorModal(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '26px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '88vh',
              overflowY: 'auto',
              padding: '32px',
              boxShadow: 'var(--shadow-float)',
              position: 'relative',
              border: '1px solid #E0E7FF'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMajorModal(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748B'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '2.5rem' }}>{selectedMajorModal.icon}</span>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: '800', padding: '3px 10px', borderRadius: '999px', background: '#FEF3C7', color: '#B45309' }}>
                  {selectedMajorModal.nhom_nganh}
                </span>
                <h2 style={{ fontSize: '1.75rem', margin: '4px 0 0', color: '#1E293B' }}>{selectedMajorModal.ten_nganh}</h2>
              </div>
            </div>

            <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
              {selectedMajorModal.mo_ta}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
              <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748B' }}>ĐIỂM CHUẨN THAM KHẢO</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '900', color: '#4F46E5', marginTop: '4px' }}>{selectedMajorModal.diem_tb}</div>
              </div>

              <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748B' }}>HỌC PHÍ DỰ KIẾN</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1E293B', marginTop: '4px' }}>{selectedMajorModal.hoc_phi}</div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '8px', color: '#1E293B' }}>Vị trí việc làm sau khi tốt nghiệp:</h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', background: '#F0FDF4', padding: '12px 16px', borderRadius: '12px', border: '1px solid #BBF7D0' }}>
                {selectedMajorModal.vi_tri_viec_lam}
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '8px', color: '#1E293B' }}>Các trường Đại học đào tạo tiêu biểu:</h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedMajorModal.truong_tieu_bieu.map((tr, i) => (
                  <span key={i} style={{ padding: '6px 12px', borderRadius: '10px', background: '#EEF2FF', color: '#4338CA', fontSize: '0.84rem', fontWeight: '700', border: '1px solid #C7D2FE' }}>
                    {tr}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', borderTop: '1px solid #E2E8F0', paddingTop: '18px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn-card-video"
                onClick={() => {
                  const m = selectedMajorModal;
                  setSelectedMajorModal(null);
                  handleOpenCinema(m, 0);
                }}
              >
                <Video size={16} />
                <span>Xem video thực tế</span>
              </button>

              <button
                className="btn-edtech-secondary"
                onClick={() => {
                  handleBookmark(null, selectedMajorModal);
                  setSelectedMajorModal(null);
                  alert(`Đã lưu "${selectedMajorModal.ten_nganh}" vào danh sách so sánh!`);
                }}
              >
                <Heart size={16} />
                <span>Lưu vào so sánh</span>
              </button>

              <button
                className="btn-edtech-primary"
                onClick={() => setSelectedMajorModal(null)}
              >
                <span>Đã hiểu</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
