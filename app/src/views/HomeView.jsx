import React, { useState, useMemo } from 'react';
import {
  Compass,
  Search,
  ArrowRight,
  Scale,
  ShieldCheck,
  QrCode,
  MessageSquare,
  Layers,
  Award,
  Sliders,
  Building2,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { UNIVERSITIES_DATA } from '../data/careerData';
import UniversityLogo from '../components/UniversityLogo';

// 4 Visual Field Showcases with Official Vietnamese Universities & Real Data
const FIELD_SHOWCASES = [
  {
    id: 'kinhte',
    tabLabel: 'Kinh tế',
    combos: 'Tổ hợp phổ biến: A00 • A01 • D01',
    title: 'Kinh tế, Marketing & Thương mại',
    summary: 'Kinh doanh, truyền thông thương hiệu, tài chính – ngân hàng và xuất nhập khẩu.',
    bannerBg: 'linear-gradient(135deg, #EEF2FF 0%, #E0F2FE 100%)',
    bannerBorder: '#C7D2FE',
    accentColor: '#4338CA',
    pillBg: 'rgba(255, 255, 255, 0.85)',
    metrics: [
      { label: 'Điểm chuẩn phổ biến', value: '22.5 – 28.6đ', color: '#4338CA' },
      { label: 'Học phí công lập', value: '22 – 45 tr/năm', color: '#0369A1' },
      { label: 'Lương mới ra trường', value: '9 – 15 tr/tháng', color: '#047857' }
    ],
    schools: [
      {
        code: 'KHA',
        name: 'Đại học Kinh tế Quốc dân',
        city: 'Hà Nội',
        tuition: '26 – 40 tr/năm',
        score: '26.5 – 28.6đ'
      },
      {
        code: 'TMA',
        name: 'Đại học Thương mại',
        city: 'Hà Nội',
        tuition: '24 – 38 tr/năm',
        score: '24.8 – 27.5đ'
      },
      {
        code: 'KSA',
        name: 'Đại học Kinh tế TP.HCM',
        city: 'TP.HCM',
        tuition: '30 – 48 tr/năm',
        score: '25.0 – 28.2đ'
      }
    ],
    note: 'Thực tế công việc cần ngoại ngữ tốt và làm việc nhiều với số liệu doanh thu, khách hàng.',
    searchQuery: 'Marketing',
    renderIllustration: () => (
      <svg viewBox="0 0 88 88" width="76" height="76" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="10" width="76" height="68" rx="16" fill="#FFFFFF" stroke="#C7D2FE" strokeWidth="2" />
        <rect x="18" y="46" width="11" height="20" rx="3.5" fill="#C7D2FE" />
        <rect x="34" y="36" width="11" height="30" rx="3.5" fill="#818CF8" />
        <rect x="50" y="24" width="11" height="42" rx="3.5" fill="#4F46E5" />
        <path d="M19 36L37 26L55 18L69 22" stroke="#0EA5E9" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="55" cy="18" r="3.5" fill="#0EA5E9" />
      </svg>
    )
  },
  {
    id: 'congnghe',
    tabLabel: 'Công nghệ',
    combos: 'Tổ hợp phổ biến: A00 • A01 • D07',
    title: 'Công nghệ thông tin & Vi mạch',
    summary: 'Lập trình phần mềm, dữ liệu, an toàn thông tin và thiết kế vi mạch bán dẫn.',
    bannerBg: 'linear-gradient(135deg, #E0F2FE 0%, #CCFBF1 100%)',
    bannerBorder: '#BAE6FD',
    accentColor: '#0369A1',
    pillBg: 'rgba(255, 255, 255, 0.85)',
    metrics: [
      { label: 'Điểm chuẩn phổ biến', value: '23.0 – 29.2đ', color: '#0369A1' },
      { label: 'Học phí công lập', value: '28 – 45 tr/năm', color: '#0F766E' },
      { label: 'Lương mới ra trường', value: '11 – 18 tr/tháng', color: '#047857' }
    ],
    schools: [
      {
        code: 'BKA',
        name: 'Đại học Bách khoa Hà Nội',
        city: 'Hà Nội',
        tuition: '30 – 45 tr/năm',
        score: '25.5 – 29.2đ'
      },
      {
        code: 'QHI',
        name: 'ĐH Công nghệ – ĐHQG Hà Nội',
        city: 'Hà Nội',
        tuition: '32 – 40 tr/năm',
        score: '26.5 – 28.5đ'
      },
      {
        code: 'QSC',
        name: 'ĐH Công nghệ Thông tin – ĐHQG TP.HCM',
        city: 'TP.HCM',
        tuition: '32 – 45 tr/năm',
        score: '25.5 – 28.2đ'
      }
    ],
    note: 'Năm đầu học nặng Toán và tư duy thuật toán; cần tự thực hành dự án thực tế từ sớm.',
    searchQuery: 'Công nghệ thông tin',
    renderIllustration: () => (
      <svg viewBox="0 0 88 88" width="76" height="76" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="14" width="72" height="60" rx="15" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="2" />
        <circle cx="20" cy="24" r="2.5" fill="#38BDF8" />
        <circle cx="28" cy="24" r="2.5" fill="#818CF8" />
        <line x1="10" y1="32" x2="78" y2="32" stroke="#E0F2FE" strokeWidth="2" />
        <path d="M31 45L23 52L31 59" stroke="#0284C7" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M57 45L65 52L57 59" stroke="#0284C7" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M48 42L40 62" stroke="#0D9488" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'yduoc',
    tabLabel: 'Y Dược',
    combos: 'Tổ hợp phổ biến: B00 • A00 • D07',
    title: 'Y khoa, Dược học & Điều dưỡng',
    summary: 'Khám chữa bệnh, nghiên cứu bào chế thuốc, xét nghiệm và chăm sóc sức khỏe.',
    bannerBg: 'linear-gradient(135deg, #ECFDF5 0%, #E0F2FE 100%)',
    bannerBorder: '#A7F3D0',
    accentColor: '#047857',
    pillBg: 'rgba(255, 255, 255, 0.85)',
    metrics: [
      { label: 'Điểm chuẩn phổ biến', value: '22.5 – 29.5đ', color: '#047857' },
      { label: 'Học phí công lập', value: '25 – 77 tr/năm', color: '#0369A1' },
      { label: 'Thời gian đào tạo', value: '4 – 6 năm ĐH', color: '#4338CA' }
    ],
    schools: [
      {
        code: 'YHB',
        name: 'Đại học Y Hà Nội',
        city: 'Hà Nội',
        tuition: '45 – 55 tr/năm',
        score: '25.0 – 29.5đ'
      },
      {
        code: 'DKH',
        name: 'Trường Đại học Dược Hà Nội',
        city: 'Hà Nội',
        tuition: '24 – 38 tr/năm',
        score: '24.5 – 27.2đ'
      },
      {
        code: 'YDS',
        name: 'Đại học Y Dược TP.HCM',
        city: 'TP.HCM',
        tuition: '45 – 77 tr/năm',
        score: '25.5 – 29.5đ'
      }
    ],
    note: 'Thời gian học dài và lịch trực bệnh viện vất vả, đổi lại công việc ổn định và bền vững lâu dài.',
    searchQuery: 'Y khoa',
    renderIllustration: () => (
      <svg viewBox="0 0 88 88" width="76" height="76" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="10" width="72" height="68" rx="16" fill="#FFFFFF" stroke="#A7F3D0" strokeWidth="2" />
        <rect x="38" y="22" width="12" height="32" rx="4" fill="#10B981" />
        <rect x="28" y="32" width="32" height="12" rx="4" fill="#10B981" />
        <path d="M18 64H32L37 56L44 70L50 60L54 64H70" stroke="#0284C7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'kythuat',
    tabLabel: 'Kỹ thuật',
    combos: 'Tổ hợp phổ biến: A00 • A01 • C01',
    title: 'Cơ điện tử, Ô tô & Logistics',
    summary: 'Tự động hóa nhà máy, kỹ thuật ô tô điện, điện – điện tử và vận hành chuỗi cung ứng.',
    bannerBg: 'linear-gradient(135deg, #FEF3C7 0%, #FFEDD5 100%)',
    bannerBorder: '#FDE68A',
    accentColor: '#B45309',
    pillBg: 'rgba(255, 255, 255, 0.88)',
    metrics: [
      { label: 'Điểm chuẩn phổ biến', value: '20.5 – 28.0đ', color: '#B45309' },
      { label: 'Học phí công lập', value: '22 – 45 tr/năm', color: '#0369A1' },
      { label: 'Lương mới ra trường', value: '10 – 16 tr/tháng', color: '#047857' }
    ],
    schools: [
      {
        code: 'QSB',
        name: 'ĐH Bách khoa – ĐHQG TP.HCM',
        city: 'TP.HCM',
        tuition: '30 – 50 tr/năm',
        score: '25.5 – 28.5đ'
      },
      {
        code: 'SPK',
        name: 'ĐH Sư phạm Kỹ thuật TP.HCM',
        city: 'TP.HCM',
        tuition: '28 – 38 tr/năm',
        score: '24.0 – 27.2đ'
      },
      {
        code: 'GHA',
        name: 'Đại học Giao thông Vận tải',
        city: 'Hà Nội',
        tuition: '22 – 35 tr/năm',
        score: '21.5 – 26.2đ'
      }
    ],
    note: 'Thực hành xưởng và đồ án kỹ thuật khá nặng; nhu cầu tuyển kỹ sư tại các khu công nghiệp rất lớn.',
    searchQuery: 'Cơ điện tử',
    renderIllustration: () => (
      <svg viewBox="0 0 88 88" width="76" height="76" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="10" width="72" height="68" rx="16" fill="#FFFFFF" stroke="#FDE68A" strokeWidth="2" />
        <circle cx="44" cy="44" r="14" stroke="#D97706" strokeWidth="4" />
        <circle cx="44" cy="44" r="5" fill="#F59E0B" />
        <path d="M44 23V28M44 60V65M23 44H28M60 44H65M29 29L33 33M55 55L59 59M59 29L55 33M33 55L29 59" stroke="#D97706" strokeWidth="3.2" strokeLinecap="round" />
      </svg>
    )
  }
];

// Quick Matcher Filter Options (clean plain Vietnamese labels, no clutter emojis)
const MATCHER_PROVINCES = [
  { id: 'all', label: 'Tất cả tỉnh thành', queryTag: '' },
  { id: 'hanoi', label: 'Hà Nội', queryTag: 'Hà Nội' },
  { id: 'thainguyen', label: 'Thái Nguyên', queryTag: 'Thái Nguyên' },
  { id: 'haiphong', label: 'Hải Phòng', queryTag: 'Hải Phòng' },
  { id: 'quangninh', label: 'Quảng Ninh', queryTag: 'Quảng Ninh' },
  { id: 'thaibinh', label: 'Thái Bình & Nam Định', queryTag: 'Thái Bình' },
  { id: 'danang', label: 'Đà Nẵng & Huế', queryTag: 'Đà Nẵng' },
  { id: 'tphcm', label: 'TP.HCM', queryTag: 'TP.HCM' }
];

const MATCHER_COMBOS = [
  { id: 'all', label: 'Tất cả khối thi' },
  { id: 'A00', label: 'A00 (Toán, Lý, Hóa)' },
  { id: 'A01', label: 'A01 (Toán, Lý, Anh)' },
  { id: 'B00', label: 'B00 (Toán, Hóa, Sinh)' },
  { id: 'C00', label: 'C00 (Văn, Sử, Địa)' },
  { id: 'D01', label: 'D01 (Toán, Văn, Anh)' },
  { id: 'D07', label: 'D07 (Toán, Hóa, Anh)' }
];

export default function HomeView({ onNavigate, onSearchQuery }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFieldId, setActiveFieldId] = useState('kinhte');

  // Quick Score Matcher States
  const [matcherProvince, setMatcherProvince] = useState('all');
  const [matcherCombo, setMatcherCombo] = useState('all');
  const [matcherScore, setMatcherScore] = useState(24.5);

  const activeField = FIELD_SHOWCASES.find((f) => f.id === activeFieldId) || FIELD_SHOWCASES[0];

  // Real-time Matching calculation for Quick Matcher Bar
  const matchedUniversities = useMemo(() => {
    return (UNIVERSITIES_DATA || []).filter((u) => {
      if (matcherProvince !== 'all') {
        if (matcherProvince === 'thaibinh') {
          if (u.provinceCode !== 'thaibinh' && u.provinceCode !== 'thaibinh-namdinh') return false;
        } else if (u.provinceCode !== matcherProvince) {
          return false;
        }
      }

      const str = u.benchmarkHistory?.forecast2026 || u.benchmarks || '';
      const nums = str.match(/\d+(\.\d+)?/g);
      let minScore = 18;
      let maxScore = 26;
      if (nums && nums.length >= 2) {
        minScore = parseFloat(nums[0]);
        maxScore = parseFloat(nums[1]);
      } else if (nums && nums.length === 1) {
        minScore = parseFloat(nums[0]) - 1.2;
        maxScore = parseFloat(nums[0]) + 1.2;
      }

      return minScore <= matcherScore + 0.8 && maxScore >= matcherScore - 4.0;
    });
  }, [matcherProvince, matcherScore]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearchQuery(searchTerm.trim());
      onNavigate('search');
    } else {
      onNavigate('search');
    }
  };

  const handleQuickTagClick = (tagQuery) => {
    onSearchQuery(tagQuery);
    onNavigate('search');
  };

  const handleScrollToMatcher = () => {
    const el = document.getElementById('quick-score-matcher-bar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      onNavigate('search');
    }
  };

  const handleViewMatchedSchools = () => {
    const selectedProvObj = MATCHER_PROVINCES.find((p) => p.id === matcherProvince);
    const query =
      selectedProvObj && selectedProvObj.queryTag
        ? selectedProvObj.queryTag
        : matcherCombo !== 'all'
          ? matcherCombo
          : `${matcherScore}đ`;
    onSearchQuery(query);
    onNavigate('search');
  };

  return (
    <div className="tab-pane-animate">
      {/* 1. CLEAN DAYLIGHT HERO SECTION */}
      <div className="hero-editorial-canvas">
        <div className="hero-editorial-grid">
          {/* LEFT COLUMN: CLEAR HUMAN HOOK, DIRECT SEARCH & 3 SIMPLE TOOLS */}
          <div className="hero-left-col">
            <div className="hero-eyebrow-minimal">
              <span className="eyebrow-dot-calm" />
              <span>Cẩm nang tuyển sinh Đại học 2026 • 52 ngành • 111 trường</span>
            </div>

            <h1 className="hero-h1-editorial">
              <span className="hero-headline-line">Tìm hiểu kỹ ngành định học</span>
              <span className="hero-headline-line hero-headline-accent">
                trước khi đăng ký nguyện vọng.
              </span>
            </h1>

            <p className="hero-subheadline-editorial">
              Tra nhanh điểm chuẩn, mức học phí của 111 trường Đại học cả nước và xem trước công việc, thu nhập thực tế sau khi ra trường.
            </p>

            {/* Primary Search Box */}
            <div className="hero-primary-search-wrap">
              <form onSubmit={handleSearchSubmit} className="hero-search-human-box">
                <Search size={19} color="#64748B" strokeWidth={2.2} style={{ marginRight: '10px', flexShrink: 0 }} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm ngành hoặc trường (VD: Marketing, Bách khoa, NEU)..."
                  className="hero-search-human-input"
                  id="hero-search-input"
                />
                <button type="submit" className="hero-search-submit-btn">
                  Tra cứu
                </button>
              </form>

              <div className="hero-quick-topics">
                <span className="hero-quick-topics-label">Xem nhanh:</span>
                {[
                  { label: 'CNTT', query: 'Công nghệ thông tin' },
                  { label: 'Marketing', query: 'Marketing' },
                  { label: 'Kinh tế', query: 'Kinh doanh' },
                  { label: 'Y Dược', query: 'Y khoa' },
                  { label: 'Vi mạch', query: 'Vi mạch' },
                  { label: 'Logistics', query: 'Logistics' }
                ].map((tag, i) => (
                  <button
                    key={i}
                    type="button"
                    className="quick-tag-human"
                    onClick={() => handleQuickTagClick(tag.query)}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3 Clean Tool Cards (No quotes, no sparkles, no ALL-CAPS) */}
            <div className="hero-tools-list">
              <button
                type="button"
                className="pain-point-action-card featured"
                onClick={() => onNavigate('self')}
                id="card-painpoint-self"
              >
                <div className="pain-point-icon-badge" style={{ background: '#EEF2FF', color: '#4F46E5' }}>
                  <Compass size={20} strokeWidth={2.2} />
                </div>
                <div className="pain-point-content">
                  <div className="pain-point-title">Trắc nghiệm chọn ngành</div>
                  <div className="pain-point-subtitle">
                    5 câu hỏi ngắn gợi ý nhóm ngành hợp môn học và sở thích
                  </div>
                </div>
                <ArrowRight size={17} className="pain-point-arrow" />
              </button>

              <button
                type="button"
                className="pain-point-action-card"
                onClick={() => onNavigate('compare')}
                id="card-painpoint-compare"
              >
                <div className="pain-point-icon-badge" style={{ background: '#FEF3C7', color: '#D97706' }}>
                  <Scale size={20} strokeWidth={2.2} />
                </div>
                <div className="pain-point-content">
                  <div className="pain-point-title">So sánh 2 – 3 ngành</div>
                  <div className="pain-point-subtitle">
                    Đặt các ngành cạnh nhau để xem điểm chuẩn, học phí và mức lương
                  </div>
                </div>
                <ArrowRight size={17} className="pain-point-arrow" />
              </button>

              <button
                type="button"
                className="pain-point-action-card"
                onClick={handleScrollToMatcher}
                id="card-painpoint-matcher"
              >
                <div className="pain-point-icon-badge" style={{ background: '#E0F2FE', color: '#0284C7' }}>
                  <Sliders size={20} strokeWidth={2.2} />
                </div>
                <div className="pain-point-content">
                  <div className="pain-point-title">Lọc trường vừa tầm điểm</div>
                  <div className="pain-point-subtitle">
                    Ước tính nhanh trường phù hợp từ 16 đến 29 điểm theo tỉnh thành
                  </div>
                </div>
                <ArrowRight size={17} className="pain-point-arrow" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: VISUAL MAJOR & OFFICIAL UNIVERSITY SHOWCASE */}
          <div className="showcase-card-wrap">
            <div className="showcase-card">
              {/* 4 Clean Tabs */}
              <div className="showcase-tabs-bar" role="tablist" aria-label="Nhóm ngành phổ biến">
                {FIELD_SHOWCASES.map((item) => {
                  const isActive = item.id === activeFieldId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`showcase-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveFieldId(item.id)}
                    >
                      {item.tabLabel}
                    </button>
                  );
                })}
              </div>

              {/* Soft Daylight Visual Banner */}
              <div
                className="showcase-visual-banner"
                style={{
                  background: activeField.bannerBg,
                  borderColor: activeField.bannerBorder
                }}
              >
                <div className="showcase-banner-text">
                  <span
                    className="showcase-combo-pill"
                    style={{
                      background: activeField.pillBg,
                      color: activeField.accentColor
                    }}
                  >
                    {activeField.combos}
                  </span>
                  <h2 className="showcase-banner-title">{activeField.title}</h2>
                  <p className="showcase-banner-summary">{activeField.summary}</p>
                </div>
                <div className="showcase-banner-illustration">
                  {activeField.renderIllustration()}
                </div>
              </div>

              {/* 3 Crisp Stat Tiles */}
              <div className="showcase-metrics-grid">
                {activeField.metrics.map((m, idx) => (
                  <div key={idx} className="showcase-metric-tile">
                    <div className="showcase-metric-label">{m.label}</div>
                    <div className="showcase-metric-value" style={{ color: m.color }}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* 3 Official Universities with Real Crests/Logos */}
              <div className="showcase-uni-section">
                <div className="showcase-uni-heading">
                  <span>Trường đào tạo tiêu biểu</span>
                  <span className="showcase-uni-hint">Bấm vào trường để xem chi tiết</span>
                </div>

                <div className="showcase-uni-list">
                  {activeField.schools.map((sch) => (
                    <button
                      key={sch.code}
                      type="button"
                      className="showcase-uni-row"
                      onClick={() => {
                        onSearchQuery(sch.code);
                        onNavigate('search');
                      }}
                    >
                      <UniversityLogo code={sch.code} name={sch.name} size={42} />
                      <div className="showcase-uni-info">
                        <div className="showcase-uni-name">{sch.name}</div>
                        <div className="showcase-uni-meta">
                          Mã {sch.code} • {sch.city} • Học phí {sch.tuition}
                        </div>
                      </div>
                      <span className="showcase-uni-score">{sch.score}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calm Note & Direct Link */}
              <div className="showcase-footer">
                <p className="showcase-note-text">{activeField.note}</p>
                <button
                  type="button"
                  className="showcase-more-btn"
                  onClick={() => {
                    onSearchQuery(activeField.searchQuery);
                    onNavigate('search');
                  }}
                >
                  <span>Xem các ngành thuộc nhóm này</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. QUICK SCORE MATCHER BAR (CLEAN DAYLIGHT CARD) */}
      <div id="quick-score-matcher-bar" className="quick-score-matcher-card">
        <div className="matcher-header-row">
          <div className="matcher-title-group">
            <div className="matcher-badge-icon">
              <Sliders size={18} strokeWidth={2.2} />
            </div>
            <div>
              <div className="matcher-title-main">
                Ước tính nhanh trường phù hợp theo điểm và khu vực
              </div>
              <div className="matcher-title-sub">
                Đối chiếu mặt bằng điểm chuẩn 2024 – 2025 của 111 trường Đại học, Học viện trên cả nước
              </div>
            </div>
          </div>

          <div className="matcher-live-count-badge">
            <span className="matcher-live-dot" />
            <span>Có {matchedUniversities.length} trường trong tầm điểm</span>
          </div>
        </div>

        <div className="matcher-controls-grid">
          <div className="matcher-field-col">
            <label className="matcher-field-label">
              <MapPin size={13} />
              <span>Khu vực muốn học</span>
            </label>
            <select
              value={matcherProvince}
              onChange={(e) => setMatcherProvince(e.target.value)}
              className="matcher-select-input"
            >
              {MATCHER_PROVINCES.map((prov) => (
                <option key={prov.id} value={prov.id}>
                  {prov.label}
                </option>
              ))}
            </select>
          </div>

          <div className="matcher-field-col">
            <label className="matcher-field-label">
              <Building2 size={13} />
              <span>Tổ hợp xét tuyển</span>
            </label>
            <select
              value={matcherCombo}
              onChange={(e) => setMatcherCombo(e.target.value)}
              className="matcher-select-input"
            >
              {MATCHER_COMBOS.map((combo) => (
                <option key={combo.id} value={combo.id}>
                  {combo.label}
                </option>
              ))}
            </select>
          </div>

          <div className="matcher-field-col">
            <label className="matcher-field-label">
              <TrendingUp size={13} />
              <span>Mức điểm dự kiến</span>
            </label>
            <div className="matcher-slider-container">
              <input
                type="range"
                min="16.0"
                max="29.5"
                step="0.25"
                value={matcherScore}
                onChange={(e) => setMatcherScore(parseFloat(e.target.value))}
                className="matcher-slider-input"
              />
              <span className="matcher-score-display">{matcherScore.toFixed(2)}đ</span>
            </div>
          </div>

          <div className="matcher-field-col">
            <button
              type="button"
              className="matcher-submit-btn"
              onClick={handleViewMatchedSchools}
            >
              <span>Xem {matchedUniversities.length} trường phù hợp</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 3. STATS OVERVIEW GRID */}
      <div className="stats-grid-container">
        <div className="stat-item-box" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #EEF2FF 100%)', borderColor: '#C7D2FE' }}>
          <div className="stat-metric-number" style={{ color: '#4338CA' }}>52 ngành</div>
          <div className="stat-metric-title">Thông tin ngành sát thực tế</div>
          <div className="stat-metric-desc">Có sẵn mức lương mới ra trường, các môn học năm đầu và những vất vả hay gặp</div>
        </div>

        <div className="stat-item-box" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)', borderColor: '#BAE6FD' }}>
          <div className="stat-metric-number" style={{ color: '#0284C7' }}>111 trường</div>
          <div className="stat-metric-title">Đại học &amp; Học viện 3 miền</div>
          <div className="stat-metric-desc">Kèm mã trường, điểm chuẩn vài năm gần đây, học phí dự kiến và ký túc xá</div>
        </div>

        <div className="stat-item-box" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #ECFDF5 100%)', borderColor: '#A7F3D0' }}>
          <div className="stat-metric-number" style={{ color: '#059669' }}>68 video</div>
          <div className="stat-metric-title">Chia sẻ từ người trong nghề</div>
          <div className="stat-metric-desc">Nghe anh chị đi trước kể về một ngày làm việc thực tế tại bệnh viện, công ty, nhà máy</div>
        </div>

        <div className="stat-item-box" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FEF3C7 100%)', borderColor: '#FDE68A' }}>
          <div className="stat-metric-number" style={{ color: '#D97706' }}>Miễn phí</div>
          <div className="stat-metric-title">Không cần tạo tài khoản</div>
          <div className="stat-metric-desc">Không thu số điện thoại tư vấn; mọi ghi chú nguyện vọng chỉ lưu trên máy của bạn</div>
        </div>
      </div>

      {/* 4. 4-STEP GUIDE */}
      <div className="steps-section-wrapper">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.95rem', marginBottom: '8px' }}>4 bước chọn nguyện vọng cùng gia đình</h2>
          <p style={{ color: '#64748B', maxWidth: '56ch', margin: '0 auto', fontSize: '0.95rem' }}>
            Đi lần lượt từng bước giúp bạn thu hẹp dần lựa chọn thay vì đăng ký theo cảm tính.
          </p>
        </div>

        <div className="steps-grid-container">
          {[
            {
              step: '01',
              title: 'Trắc nghiệm chọn ngành',
              desc: '5 câu hỏi ngắn về môn học bạn khá nhất và môi trường làm việc mong muốn',
              tab: 'self',
              icon: Compass,
              color: '#4F46E5',
              bg: '#EEF2FF',
              className: 'step-card-edtech step-card-blue'
            },
            {
              step: '02',
              title: 'Tra cứu ngành & trường',
              desc: 'Xem điểm chuẩn, học phí, tổ hợp môn xét tuyển và thông tin từng trường',
              tab: 'search',
              icon: Search,
              color: '#0284C7',
              bg: '#E0F2FE',
              className: 'step-card-edtech step-card-violet'
            },
            {
              step: '03',
              title: 'So sánh các lựa chọn',
              desc: 'Đặt 2 – 3 ngành đang phân vân cạnh nhau để cân đối với điều kiện gia đình',
              tab: 'compare',
              icon: Layers,
              color: '#D97706',
              bg: '#FEF3C7',
              className: 'step-card-edtech step-card-amber'
            },
            {
              step: '04',
              title: 'Lên kế hoạch ôn thi',
              desc: 'Lưu lại nguyện vọng chính, phương án dự phòng và các mốc thi quan trọng năm 2026',
              tab: 'roadmap',
              icon: Award,
              color: '#059669',
              bg: '#ECFDF5',
              className: 'step-card-edtech step-card-emerald'
            }
          ].map((item, i) => (
            <div
              key={i}
              className={item.className}
              onClick={() => onNavigate(item.tab)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: '850', color: item.color, fontFamily: 'var(--font-display)' }}>
                  {item.step}
                </span>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: item.bg, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <item.icon size={20} strokeWidth={2.2} />
                </div>
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#1E293B' }}>{item.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '16px', lineHeight: '1.55', flex: 1 }}>{item.desc}</p>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: item.color, display: 'flex', alignItems: 'center', gap: '6px' }}>
                Mở xem <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. 3 PRACTICAL HIGHLIGHTS */}
      <div className="features-grid-container">
        <div className="feature-card-pastel" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
            <ShieldCheck size={22} strokeWidth={2.2} />
          </div>
          <h3 style={{ fontSize: '1.12rem', marginBottom: '8px' }}>Không làm phiền, không thu dữ liệu</h3>
          <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
            Không cần đăng ký tài khoản hay để lại số điện thoại. Kết quả trắc nghiệm và danh sách ngành đang cân nhắc chỉ lưu ngay trên trình duyệt của bạn.
          </p>
        </div>

        <div className="feature-card-pastel" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
            <QrCode size={22} strokeWidth={2.2} />
          </div>
          <h3 style={{ fontSize: '1.12rem', marginBottom: '8px' }}>Dễ gửi cho bố mẹ cùng xem</h3>
          <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
            Sau khi chọn được nguyện vọng dự kiến, bạn có thể lưu phiếu mục tiêu kèm mã QR hoặc in ra giấy để trao đổi rõ ràng hơn với gia đình, thầy cô.
          </p>
        </div>

        <div className="feature-card-pastel" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
            <MessageSquare size={22} strokeWidth={2.2} />
          </div>
          <h3 style={{ fontSize: '1.12rem', marginBottom: '8px' }}>Hỏi nhanh khi đang phân vân</h3>
          <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
            Khung hỏi đáp ở góc phải dưới màn hình giúp bạn tra nhanh học phí, điểm chuẩn theo tỉnh thành hoặc đối chiếu hai ngành bất cứ lúc nào.
          </p>
        </div>
      </div>
    </div>
  );
}
