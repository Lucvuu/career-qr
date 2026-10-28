import React, { useState, useMemo } from 'react';
import { 
  Compass, 
  Search, 
  ArrowRight, 
  Scale, 
  ShieldCheck, 
  QrCode, 
  Cpu, 
  Layers, 
  Award,
  Sparkles,
  Sliders,
  AlertTriangle,
  Building2,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { UNIVERSITIES_DATA } from '../data/careerData';

// 4 Realistic Real-World Student Personas
const PERSONAS_DATA = [
  {
    id: 'linh',
    tabLabel: '🎨 Linh (24.5đ D01)',
    fullName: 'Nguyễn Thùy Linh',
    scoreCombo: '24.5đ • Khối D01 (Toán, Văn, Anh)',
    archetype: 'Yêu thích sáng tạo nội dung & truyền thông',
    avatar: '🎨',
    radarValues: {
      R: 25, // Kỹ thuật: thấp
      I: 45, // Nghiên cứu: vừa
      A: 92, // Nghệ thuật: cực cao
      S: 85, // Xã hội: rất cao
      E: 78, // Quản lý: cao
      C: 40  // Nghiệp vụ: trung bình
    },
    suggestedMajor: 'Marketing & Truyền thông đa phương tiện',
    matchPercentage: 'Khá hợp (94%)',
    schools: [
      { name: 'ĐH Thương mại (TMU)', score: '25.2đ', location: 'Hà Nội' },
      { name: 'HV Báo chí & Tuyên truyền (AJC)', score: '24.8đ', location: 'Hà Nội' },
      { name: 'ĐH Kinh tế - ĐH Thái Nguyên (TUEBA)', score: '21.5đ', location: 'Thái Nguyên' },
      { name: 'ĐH Hàng hải Việt Nam (VMU)', score: '23.5đ', location: 'Hải Phòng' }
    ],
    realityCheck: 'Làm Marketing không chỉ có viết lách hay lên ý tưởng mà phải theo sát số liệu doanh thu, chi phí quảng cáo. Các việc viết bài cơ bản hiện dễ bị AI làm thay, nên cần học thêm kỹ năng đọc dữ liệu khách hàng.',
    startSalary: '9 – 14 triệu/tháng',
    expSalary: '18 – 30 triệu/tháng'
  },
  {
    id: 'minh',
    tabLabel: '📊 Minh (26.0đ A01)',
    fullName: 'Trần Quang Minh',
    scoreCombo: '26.0đ • Khối A01 (Toán, Lý, Anh)',
    archetype: 'Mạnh về tư duy tính toán, thích kinh doanh',
    avatar: '📊',
    radarValues: {
      R: 30, // Kỹ thuật
      I: 65, // Nghiên cứu
      A: 35, // Nghệ thuật
      S: 75, // Xã hội
      E: 90, // Quản lý: cực cao
      C: 82  // Nghiệp vụ: rất cao
    },
    suggestedMajor: 'Kinh tế quốc tế / Tài chính - Ngân hàng',
    matchPercentage: 'Rất hợp (96%)',
    schools: [
      { name: 'ĐH Kinh tế Quốc dân (NEU)', score: '26.8đ', location: 'Hà Nội' },
      { name: 'ĐH Kinh tế - ĐHQGHN (UEB)', score: '26.2đ', location: 'Hà Nội' },
      { name: 'ĐH Kinh tế - ĐH Đà Nẵng (DUE)', score: '24.5đ', location: 'Đà Nẵng' },
      { name: 'ĐH Ngoại thương (FTU)', score: '27.2đ', location: 'Hà Nội' }
    ],
    realityCheck: 'Ngành Tài chính áp lực cao, thường xuyên làm việc với bảng biểu số liệu và cần học thêm chứng chỉ chuyên môn (như CFA) nếu muốn tiến xa. AI hỗ trợ tổng hợp nhanh nhưng khâu thẩm định và làm việc với đối tác vẫn cần con người.',
    startSalary: '11 – 16 triệu/tháng',
    expSalary: '22 – 40 triệu/tháng'
  },
  {
    id: 'ha',
    tabLabel: '🩺 Hà (25.0đ B00)',
    fullName: 'Vũ Thu Hà',
    scoreCombo: '25.0đ • Khối B00 (Toán, Hóa, Sinh)',
    archetype: 'Kiên trì, học tốt Sinh - Hóa, muốn theo Y Dược',
    avatar: '🩺',
    radarValues: {
      R: 70, // Kỹ thuật/Thao tác
      I: 94, // Nghiên cứu: cực cao
      A: 25, // Nghệ thuật
      S: 88, // Xã hội: rất cao
      E: 35, // Quản lý
      C: 60  // Nghiệp vụ
    },
    suggestedMajor: 'Y khoa / Dược học',
    matchPercentage: 'Rất hợp (95%)',
    schools: [
      { name: 'ĐH Y Dược Thái Bình (TBUMP)', score: '25.0đ', location: 'Thái Bình' },
      { name: 'ĐH Y Dược Hải Phòng (HPMU)', score: '25.3đ', location: 'Hải Phòng' },
      { name: 'ĐH Y Dược - ĐH Thái Nguyên (TUMP)', score: '24.6đ', location: 'Thái Nguyên' },
      { name: 'Khoa Y Dược - ĐH Đà Nẵng (SMP)', score: '24.2đ', location: 'Đà Nẵng' }
    ],
    realityCheck: 'Theo ngành Y cần xác định thời gian học dài (6 năm đại học cộng thời gian thực hành cấp chứng chỉ hành nghề), lịch trực đêm vất vả và học phí khá cao. Đổi lại, nghề bền vững và rất khó bị máy móc thay thế.',
    startSalary: '8 – 13 triệu/tháng',
    expSalary: '20 – 45 triệu/tháng'
  },
  {
    id: 'nam',
    tabLabel: '⚙️ Nam (22.0đ A00)',
    fullName: 'Lê Hoàng Nam',
    scoreCombo: '22.0đ • Khối A00 (Toán, Lý, Hóa)',
    archetype: 'Thích mày mò máy móc, phần cứng và kỹ thuật',
    avatar: '⚙️',
    radarValues: {
      R: 90, // Kỹ thuật: cực cao
      I: 85, // Nghiên cứu: rất cao
      A: 20, // Nghệ thuật
      S: 30, // Xã hội
      E: 45, // Quản lý
      C: 72  // Nghiệp vụ: cao
    },
    suggestedMajor: 'Kỹ thuật Ô tô / Cơ điện tử & Mạng máy tính',
    matchPercentage: 'Khá hợp (93%)',
    schools: [
      { name: 'ĐH CNTT & TT Thái Nguyên (ICTU)', score: '20.5đ', location: 'Thái Nguyên' },
      { name: 'ĐH Kỹ thuật Công nghiệp (TNUT)', score: '19.5đ', location: 'Thái Nguyên' },
      { name: 'ĐH Giao thông Vận tải (UTC)', score: '22.8đ', location: 'Hà Nội' },
      { name: 'ĐH Sư phạm Kỹ thuật Hưng Yên (UTEHY)', score: '21.2đ', location: 'Hưng Yên' }
    ],
    realityCheck: 'Khối kỹ thuật học khá nặng các môn Toán, Lý, vẽ kỹ thuật và làm đồ án xưởng liên tục. Nếu chịu khó rèn tay nghề thực tế và đọc được tài liệu tiếng Anh thì cơ hội việc làm tại các nhà máy, khu công nghiệp rất rộng.',
    startSalary: '10 – 15 triệu/tháng',
    expSalary: '20 – 38 triệu/tháng'
  }
];

// Holland Radar Geometry Setup
const RADAR_CENTER = { x: 180, y: 116 };
const RADAR_MAX_R = 64;
const RADAR_AXES = [
  { key: 'R', label: 'R - Kỹ thuật', angle: -Math.PI / 2, labelX: 180, labelY: 34, anchor: 'middle' },
  { key: 'I', label: 'I - Nghiên cứu', angle: -Math.PI / 6, labelX: 258, labelY: 82, anchor: 'start' },
  { key: 'A', label: 'A - Nghệ thuật', angle: Math.PI / 6, labelX: 258, labelY: 154, anchor: 'start' },
  { key: 'S', label: 'S - Xã hội', angle: Math.PI / 2, labelX: 180, labelY: 204, anchor: 'middle' },
  { key: 'E', label: 'E - Quản lý', angle: (5 * Math.PI) / 6, labelX: 102, labelY: 154, anchor: 'end' },
  { key: 'C', label: 'C - Nghiệp vụ', angle: (-5 * Math.PI) / 6, labelX: 102, labelY: 82, anchor: 'end' }
];

// Concentric polygon grids
const RADAR_GRID_LEVELS = [0.25, 0.5, 0.75, 1.0];
const RADAR_GRID_POLYGONS = RADAR_GRID_LEVELS.map((lvl) =>
  RADAR_AXES.map((axis) => {
    const x = RADAR_CENTER.x + RADAR_MAX_R * lvl * Math.cos(axis.angle);
    const y = RADAR_CENTER.y + RADAR_MAX_R * lvl * Math.sin(axis.angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ')
);

// Quick Matcher Filter Options
const MATCHER_PROVINCES = [
  { id: 'all', label: 'Tất cả khu vực', queryTag: '' },
  { id: 'hanoi', label: '🏛️ Hà Nội', queryTag: 'Hà Nội' },
  { id: 'thainguyen', label: '⛰️ Thái Nguyên', queryTag: 'Thái Nguyên' },
  { id: 'haiphong', label: '⚓ Hải Phòng', queryTag: 'Hải Phòng' },
  { id: 'quangninh', label: '💎 Quảng Ninh', queryTag: 'Quảng Ninh' },
  { id: 'thaibinh', label: '🌾 Thái Bình & Nam Định', queryTag: 'Thái Bình' },
  { id: 'danang', label: '🌊 Đà Nẵng & Huế', queryTag: 'Đà Nẵng' },
  { id: 'tphcm', label: '🏙️ TP.HCM', queryTag: 'TP.HCM' }
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
  const [activePersonaId, setActivePersonaId] = useState('linh');

  // Quick Score Matcher States
  const [matcherProvince, setMatcherProvince] = useState('all');
  const [matcherCombo, setMatcherCombo] = useState('all');
  const [matcherScore, setMatcherScore] = useState(24.5);

  const activePersona = PERSONAS_DATA.find(p => p.id === activePersonaId) || PERSONAS_DATA[0];

  // Dynamic Asymmetric Polygon Points for Active Persona
  const activeDataPoints = useMemo(() => {
    return RADAR_AXES.map((axis) => {
      const score = activePersona.radarValues[axis.key] || 50;
      const r = (score / 100) * RADAR_MAX_R;
      const x = RADAR_CENTER.x + r * Math.cos(axis.angle);
      const y = RADAR_CENTER.y + r * Math.sin(axis.angle);
      return { ...axis, score, x, y };
    });
  }, [activePersona]);

  const activePolygonString = activeDataPoints.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  // Real-time Matching calculation for Quick Matcher Bar
  const matchedUniversities = useMemo(() => {
    return (UNIVERSITIES_DATA || []).filter((u) => {
      // Province match
      if (matcherProvince !== 'all') {
        if (matcherProvince === 'thaibinh') {
          if (u.provinceCode !== 'thaibinh' && u.provinceCode !== 'thaibinh-namdinh') return false;
        } else if (u.provinceCode !== matcherProvince) {
          return false;
        }
      }

      // Benchmark range matching
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

      // Check whether score is reachable and competitive
      return minScore <= matcherScore + 0.8 && maxScore >= matcherScore - 4.0;
    });
  }, [matcherProvince, matcherScore]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearchQuery(searchTerm.trim());
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
    const selectedProvObj = MATCHER_PROVINCES.find(p => p.id === matcherProvince);
    const query = selectedProvObj && selectedProvObj.queryTag 
      ? selectedProvObj.queryTag 
      : (matcherCombo !== 'all' ? matcherCombo : `${matcherScore}đ`);
    onSearchQuery(query);
    onNavigate('search');
  };

  return (
    <div className="tab-pane-animate">
      {/* 1. OPEN EDITORIAL CANVAS HERO SECTION */}
      <div className="hero-editorial-canvas">
        <div className="ambient-hero-glow" />

        <div className="hero-editorial-grid">
          {/* LEFT COLUMN: TOUCHING THE DEEPEST PAIN POINTS OF HIGH SCHOOL SENIORS & PARENTS */}
          <div>
            {/* Minimal Eyebrow Tagline */}
            <div className="hero-eyebrow-minimal">
              <span className="eyebrow-live-indicator">
                <span className="live-pulse" />
                <span className="live-dot" />
              </span>
              <span>Điểm chuẩn, học phí 111 trường Đại học &amp; góc nhìn thực tế 52 ngành học</span>
            </div>

            {/* Main Headline (H1 - 3 Lines) */}
            <h1 className="hero-h1-editorial">
              <span className="hero-headline-line">Giữa ngành bố mẹ khuyên học,</span>
              <span className="hero-headline-line">ngành bạn bè rủ thi cùng</span>
              <span className="hero-headline-line">
                <span className="hero-headline-emphasis">
                  đâu mới là ngành hợp với bạn?
                  <svg className="curved-underline-indigo" viewBox="0 0 170 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9C48 2.5 122 2 167 8" stroke="#4F46E5" strokeWidth="3.2" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="hero-subheadline-editorial">
              Chọn ngành đại học không cần những lời quảng cáo màu hồng. Tại đây, bạn và gia đình có thể xem thẳng điểm chuẩn vài năm gần đây, học phí dự kiến, thu nhập khi mới ra trường và cả những vất vả ít ai nói trước tại các trường từ Hà Nội, Thái Nguyên, Hải Phòng tới Đà Nẵng, TP.HCM.
            </p>

            {/* 3 Interactive Pain-Point Cards */}
            <div className="pain-points-block">
              <div className="pain-points-header">
                <Sparkles size={14} color="#4F46E5" />
                <span>BẠN ĐANG BĂN KHOĂN ĐIỀU GÌ? CHỌN MỘT MỤC ĐỂ BẮT ĐẦU:</span>
              </div>

              <div className="pain-points-list">
                {/* Card 1: Khám phá bản thân (Featured Indigo) */}
                <div 
                  className="pain-point-action-card featured"
                  onClick={() => onNavigate('self')}
                  id="card-painpoint-self"
                >
                  <div className="pain-point-icon-badge" style={{ background: '#EEF2FF', color: '#4F46E5', border: '1px solid #C7D2FE' }}>
                    <Compass size={20} strokeWidth={2.4} />
                  </div>
                  <div className="pain-point-content">
                    <div className="pain-point-title">&ldquo;Mình vẫn chưa rõ bản thân hợp với ngành nào&rdquo;</div>
                    <div className="pain-point-subtitle">
                      <span>Trả lời 5 câu hỏi ngắn về môn học &amp; tính cách để xem nhóm ngành gợi ý →</span>
                    </div>
                  </div>
                  <ArrowRight size={18} className="pain-point-arrow" />
                </div>

                {/* Card 2: Đấu trường so sánh */}
                <div 
                  className="pain-point-action-card"
                  onClick={() => onNavigate('compare')}
                  id="card-painpoint-compare"
                >
                  <div className="pain-point-icon-badge" style={{ background: '#FEF3C7', color: '#D97706', border: '1px solid #FDE68A' }}>
                    <Scale size={20} strokeWidth={2.4} />
                  </div>
                  <div className="pain-point-content">
                    <div className="pain-point-title">&ldquo;Mình đang phân vân giữa 2 – 3 ngành, chưa chốt được&rdquo;</div>
                    <div className="pain-point-subtitle">
                      <span>Đặt các ngành cạnh nhau để so điểm chuẩn, học phí, lương khởi điểm &amp; áp lực nghề →</span>
                    </div>
                  </div>
                  <ArrowRight size={18} className="pain-point-arrow" />
                </div>

                {/* Card 3: Tra cứu theo điểm & trường */}
                <div 
                  className="pain-point-action-card"
                  onClick={handleScrollToMatcher}
                  id="card-painpoint-matcher"
                >
                  <div className="pain-point-icon-badge" style={{ background: '#F0F9FF', color: '#0284C7', border: '1px solid #BAE6FD' }}>
                    <Search size={20} strokeWidth={2.4} />
                  </div>
                  <div className="pain-point-content">
                    <div className="pain-point-title">&ldquo;Mình đã nhắm khoảng điểm thi, muốn tìm trường vừa sức&rdquo;</div>
                    <div className="pain-point-subtitle">
                      <span>Lọc nhanh trường phù hợp theo mức điểm (16 – 29đ) tại Hà Nội, Thái Nguyên, Hải Phòng, TP.HCM... →</span>
                    </div>
                  </div>
                  <ArrowRight size={18} className="pain-point-arrow" />
                </div>
              </div>
            </div>

            {/* Streamlined Search Row */}
            <div className="hero-bottom-search-row">
              <form onSubmit={handleSearchSubmit} className="hero-search-human-box">
                <Search size={18} color="#64748B" strokeWidth={2} style={{ marginRight: '8px', flexShrink: 0 }} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Gõ tên ngành, mã trường hoặc khối thi (VD: Marketing, TMU, BKA, A00)..."
                  className="hero-search-human-input"
                  id="hero-search-input"
                />
                <button type="submit" className="hero-search-human-badge" title="Nhấn để tra cứu">
                  <span>Tìm ↵</span>
                </button>
              </form>

              {/* Quick Tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '750', color: '#64748B' }}>Tìm nhiều:</span>
                {[
                  { label: 'Marketing & Truyền thông', query: 'Marketing' },
                  { label: 'Kinh doanh & QTKD', query: 'Kinh doanh' },
                  { label: 'Y Dược & Sức khỏe', query: 'Y đa khoa' },
                  { label: 'Vi mạch & Bán dẫn', query: 'Vi mạch' },
                  { label: 'CNTT & Trí tuệ nhân tạo', query: 'Công nghệ thông tin' }
                ].map((tag, i) => (
                  <button
                    key={i}
                    type="button"
                    className="quick-tag-human"
                    onClick={() => handleQuickTagClick(tag.query)}
                  >
                    <span style={{ color: '#4F46E5', fontWeight: '750' }}>#</span>
                    <span>{tag.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: LIVE INTERACTIVE PERSONA SIMULATOR */}
          <div className="live-persona-container">
            <div className="live-persona-card">
              {/* 4 Clickable Persona Tabs */}
              <div className="persona-tabs-bar" role="tablist">
                {PERSONAS_DATA.map((p) => {
                  const isActive = p.id === activePersonaId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      className={`persona-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setActivePersonaId(p.id)}
                      title={p.fullName}
                    >
                      {p.tabLabel}
                    </button>
                  );
                })}
              </div>

              {/* Persona Metadata Header */}
              <div className="persona-meta-header">
                <div>
                  <div className="persona-name-title">
                    {activePersona.avatar} {activePersona.fullName}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>
                    {activePersona.archetype}
                  </div>
                </div>

                <div className="persona-score-pill">
                  <span>{activePersona.scoreCombo}</span>
                </div>
              </div>

              {/* Live Vector Holland RIASEC Radar (Asymmetric Polygon & Dynamic Transition) */}
              <div className="persona-radar-wrap">
                <svg viewBox="0 0 360 232" className="persona-radar-svg">
                  <defs>
                    <linearGradient id="liveRadarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.22" />
                    </linearGradient>
                  </defs>

                  {/* Concentric grid rings */}
                  {RADAR_GRID_POLYGONS.map((poly, idx) => (
                    <polygon
                      key={idx}
                      points={poly}
                      fill={idx % 2 === 0 ? 'rgba(248, 250, 252, 0.85)' : 'rgba(241, 245, 249, 0.45)'}
                      stroke="#E2E8F0"
                      strokeWidth="1"
                      strokeDasharray={idx < 3 ? '2 2' : 'none'}
                    />
                  ))}

                  {/* Axis lines */}
                  {RADAR_AXES.map((axis, idx) => {
                    const x2 = RADAR_CENTER.x + RADAR_MAX_R * Math.cos(axis.angle);
                    const y2 = RADAR_CENTER.y + RADAR_MAX_R * Math.sin(axis.angle);
                    return (
                      <line
                        key={idx}
                        x1={RADAR_CENTER.x}
                        y1={RADAR_CENTER.y}
                        x2={x2}
                        y2={y2}
                        stroke="#CBD5E1"
                        strokeWidth="1.1"
                      />
                    );
                  })}

                  {/* Asymmetric Dynamic Data Polygon with Smooth Morphing Transition */}
                  <polygon
                    points={activePolygonString}
                    fill="url(#liveRadarGrad)"
                    stroke="#4F46E5"
                    strokeWidth="2.4"
                    className="radar-morph-polygon"
                  />

                  {/* Vertices with smooth animated positions */}
                  {activeDataPoints.map((p, idx) => (
                    <circle
                      key={idx}
                      cx={p.x}
                      cy={p.y}
                      r="4"
                      fill="#FFFFFF"
                      stroke="#4F46E5"
                      strokeWidth="2.2"
                      className="radar-morph-circle"
                    />
                  ))}

                  {/* Asymmetric Score Labels */}
                  {activeDataPoints.map((d, idx) => (
                    <text
                      key={idx}
                      x={d.labelX}
                      y={d.labelY}
                      textAnchor={d.anchor}
                      fontSize="9.5"
                      fontWeight="750"
                      fill={d.score >= 80 ? '#4338CA' : '#64748B'}
                      fontFamily="var(--font-ui)"
                    >
                      {d.label} ({d.score}%)
                    </text>
                  ))}
                </svg>
              </div>

              {/* Analysis Panel: Suggested Major & Real Benchmarks */}
              <div className="persona-analysis-card">
                <div className="persona-major-suggested">
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Ví dụ hồ sơ học sinh — Ngành gợi ý:
                    </div>
                    <div className="persona-major-name">
                      {activePersona.suggestedMajor}
                    </div>
                  </div>
                  <span className="persona-match-badge">
                    {activePersona.matchPercentage}
                  </span>
                </div>

                {/* 4 Universities with Real Benchmarks */}
                <div className="persona-schools-list">
                  {activePersona.schools.map((sch, i) => (
                    <div key={i} className="persona-school-item">
                      <div className="persona-school-name" title={sch.name}>
                        {sch.name}
                      </div>
                      <div className="persona-school-score">
                        {sch.score}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reality Check Box (Amber Alert) */}
              <div className="persona-reality-check">
                <AlertTriangle size={17} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Thực tế cần biết: </strong>
                  <span>{activePersona.realityCheck}</span>
                </div>
              </div>

              {/* Bottom Metrics Strip */}
              <div className="persona-metrics-strip">
                <div>
                  <div className="persona-metric-label">Mới ra trường</div>
                  <div className="persona-metric-value" style={{ color: '#059669' }}>
                    {activePersona.startSalary}
                  </div>
                </div>

                <div>
                  <div className="persona-metric-label">Sau khoảng 3 năm</div>
                  <div className="persona-metric-value" style={{ color: '#0284C7' }}>
                    {activePersona.expSalary}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <button
                    type="button"
                    className="persona-cta-self"
                    onClick={() => onNavigate('self')}
                  >
                    <span>Làm thử cho bạn</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. QUICK SCORE MATCHER BAR (INTERACTIVE TOOL DIRECTLY BELOW HERO) */}
      <div id="quick-score-matcher-bar" className="quick-score-matcher-card">
        <div className="matcher-decor-glow" />

        <div className="matcher-header-row">
          <div className="matcher-title-group">
            <div className="matcher-badge-icon">
              <Sliders size={18} strokeWidth={2.4} />
            </div>
            <div>
              <div className="matcher-title-main">
                Ước tính nhanh trường phù hợp theo điểm &amp; khu vực
              </div>
              <div className="matcher-title-sub">
                Đối chiếu mặt bằng điểm chuẩn 2024 – 2025 và mức dự kiến 2026 của 111 trường Đại học, Học viện
              </div>
            </div>
          </div>

          <div className="matcher-live-count-badge">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            <span>Có {matchedUniversities.length} trường trong tầm điểm</span>
          </div>
        </div>

        {/* Controls Grid */}
        <div className="matcher-controls-grid">
          {/* Province Selector */}
          <div className="matcher-field-col">
            <label className="matcher-field-label">
              <MapPin size={13} />
              <span>1. Nơi muốn theo học</span>
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

          {/* Combination Selector */}
          <div className="matcher-field-col">
            <label className="matcher-field-label">
              <Building2 size={13} />
              <span>2. Khối / Tổ hợp xét tuyển</span>
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

          {/* Score Slider */}
          <div className="matcher-field-col">
            <label className="matcher-field-label">
              <TrendingUp size={13} />
              <span>3. Điểm thi dự kiến</span>
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
              <span className="matcher-score-display">
                {matcherScore.toFixed(2)}đ
              </span>
            </div>
          </div>

          {/* Action CTA Button */}
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

      {/* 3. STATS TRUST GRID (SUNLIGHT PASTEL BENTO) */}
      <div className="stats-grid-container">
        <div className="stat-item-box" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #EEF2FF 100%)', borderColor: '#C7D2FE' }}>
          <div className="stat-metric-number" style={{ color: '#4338CA' }}>52 ngành</div>
          <div className="stat-metric-title">Hồ sơ ngành học sát thực tế</div>
          <div className="stat-metric-desc">Có sẵn mức lương mới ra trường, môn học năm đầu và những áp lực hay gặp</div>
        </div>

        <div className="stat-item-box" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)', borderColor: '#BAE6FD' }}>
          <div className="stat-metric-number" style={{ color: '#0284C7' }}>111 trường</div>
          <div className="stat-metric-title">Đại học &amp; Học viện 3 miền</div>
          <div className="stat-metric-desc">Kèm mã trường, điểm chuẩn vài năm gần đây, học phí và ký túc xá</div>
        </div>

        <div className="stat-item-box" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #ECFDF5 100%)', borderColor: '#A7F3D0' }}>
          <div className="stat-metric-number" style={{ color: '#059669' }}>68 video</div>
          <div className="stat-metric-title">Chuyện người thật, việc thật</div>
          <div className="stat-metric-desc">Nghe anh chị đi trước kể về một ngày đi làm và những góc khuất trong nghề</div>
        </div>

        <div className="stat-item-box" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FEF3C7 100%)', borderColor: '#FDE68A' }}>
          <div className="stat-metric-number" style={{ color: '#D97706' }}>Riêng tư</div>
          <div className="stat-metric-title">Không cần tạo tài khoản</div>
          <div className="stat-metric-desc">Không thu số điện thoại tư vấn; mọi ghi chú chỉ lưu ngay trên trình duyệt</div>
        </div>
      </div>

      {/* 4. 4-STEP ROUTE JOURNEY WITH PASTEL ACCENT COLORS */}
      <div className="steps-section-wrapper">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="pill-badge" style={{ marginBottom: '10px' }}>GỢI Ý CÁCH XEM</div>
          <h2 style={{ fontSize: '2.1rem' }}>4 bước để chọn nguyện vọng chắc tay hơn</h2>
          <p style={{ color: '#64748B', maxWidth: '60ch', margin: '0 auto', fontSize: '0.96rem' }}>
            Thay vì chọn theo cảm tính hay chạy theo ngành đang được nhắc nhiều trên mạng, bạn có thể đi lần lượt từng bước dưới đây cùng gia đình.
          </p>
        </div>

        <div className="steps-grid-container">
          {[
            { 
              step: '01', 
              title: 'Trắc nghiệm chọn ngành', 
              desc: '5 câu hỏi ngắn về môn học bạn khá nhất và kiểu công việc bạn muốn gắn bó lâu dài', 
              tab: 'self', 
              icon: Compass, 
              color: '#4F46E5', 
              bg: '#EEF2FF', 
              className: 'step-card-edtech step-card-blue' 
            },
            { 
              step: '02', 
              title: 'Tra cứu ngành & trường', 
              desc: 'Xem điểm chuẩn, học phí, tổ hợp môn xét tuyển và đời sống sinh viên từng trường', 
              tab: 'search', 
              icon: Search, 
              color: '#0EA5E9', 
              bg: '#F0F9FF', 
              className: 'step-card-edtech step-card-violet' 
            },
            { 
              step: '03', 
              title: 'So sánh các lựa chọn', 
              desc: 'Đặt 2 – 3 ngành đang phân vân cạnh nhau và chỉnh mức ưu tiên theo điều kiện gia đình', 
              tab: 'compare', 
              icon: Layers, 
              color: '#D97706', 
              bg: '#FEF3C7', 
              className: 'step-card-edtech step-card-amber' 
            },
            { 
              step: '04', 
              title: 'Lên kế hoạch ôn thi', 
              desc: 'Ghi lại nguyện vọng chính, phương án dự phòng và các mốc cần chuẩn bị cho kỳ thi 2026', 
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '1.3rem', fontWeight: '900', color: item.color, fontFamily: 'var(--font-display)' }}>
                  {item.step}
                </span>
                <div style={{ width: '42px', height: '42px', borderRadius: '14px', background: item.bg, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <item.icon size={22} strokeWidth={2.2} />
                </div>
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: '#1E293B' }}>{item.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '16px', lineHeight: '1.5', flex: 1 }}>{item.desc}</p>
              <span style={{ fontSize: '0.86rem', fontWeight: '700', color: item.color, display: 'flex', alignItems: 'center', gap: '6px' }}>
                Xem mục này <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. 3 FEATURE HIGHLIGHTS */}
      <div className="features-grid-container">
        <div className="feature-card-pastel" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #ECFDF5 100%)', borderColor: '#A7F3D0' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#D1FAE5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <ShieldCheck size={24} strokeWidth={2.2} />
          </div>
          <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>Không làm phiền, không thu dữ liệu</h3>
          <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
            Bạn không cần đăng ký tài khoản hay để lại số điện thoại. Kết quả trắc nghiệm và danh sách ngành đang cân nhắc chỉ lưu ngay trên thiết bị của bạn.
          </p>
        </div>

        <div className="feature-card-pastel" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FEF3C7 100%)', borderColor: '#FDE68A' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#FDE68A', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <QrCode size={24} strokeWidth={2.2} />
          </div>
          <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>Dễ gửi cho bố mẹ cùng xem</h3>
          <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
            Sau khi chọn được nguyện vọng dự kiến, bạn có thể lưu lại phiếu mục tiêu kèm mã QR hoặc in ra giấy để trao đổi rõ ràng hơn với bố mẹ, thầy cô.
          </p>
        </div>

        <div className="feature-card-pastel" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #EEF2FF 100%)', borderColor: '#C7D2FE' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#E0E7FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <Cpu size={24} strokeWidth={2.2} />
          </div>
          <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>Hỏi đáp nhanh khi cần gỡ rối</h3>
          <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
            Khung hỏi đáp ở góc màn hình giúp bạn tra nhanh học phí, điểm chuẩn theo tỉnh thành hoặc so sánh hai ngành đang lưỡng lự bất cứ lúc nào.
          </p>
        </div>
      </div>
    </div>
  );
}
