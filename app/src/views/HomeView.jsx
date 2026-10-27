import React, { useState } from 'react';
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
  Sparkles
} from 'lucide-react';

export default function HomeView({ onNavigate, onSearchQuery }) {
  const [searchTerm, setSearchTerm] = useState('');

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

  // Human-crafted geometry for Holland RIASEC Radar (Scaled to avoid overlapping text)
  const radarCenter = { x: 180, y: 115 };
  const maxRadius = 58;
  const hollandDimensions = [
    { key: 'R', label: 'R - Kỹ thuật', score: 82, angle: -Math.PI / 2, labelX: 180, labelY: 42, anchor: 'middle' },
    { key: 'I', label: 'I - Nghiên cứu (90%)', score: 90, angle: -Math.PI / 6, labelX: 248, labelY: 84, anchor: 'start' },
    { key: 'A', label: 'A - Nghệ thuật (88%)', score: 88, angle: Math.PI / 6, labelX: 248, labelY: 152, anchor: 'start' },
    { key: 'S', label: 'S - Xã hội (78%)', score: 78, angle: Math.PI / 2, labelX: 180, labelY: 196, anchor: 'middle' },
    { key: 'E', label: 'E - Quản lý (86%)', score: 86, angle: (5 * Math.PI) / 6, labelX: 112, labelY: 152, anchor: 'end' },
    { key: 'C', label: 'C - Nghiệp vụ (80%)', score: 80, angle: (-5 * Math.PI) / 6, labelX: 112, labelY: 84, anchor: 'end' }
  ];

  // Concentric polygon grids
  const gridLevels = [0.25, 0.5, 0.75, 1.0];
  const gridPolygons = gridLevels.map((lvl) =>
    hollandDimensions
      .map((d) => {
        const x = radarCenter.x + maxRadius * lvl * Math.cos(d.angle);
        const y = radarCenter.y + maxRadius * lvl * Math.sin(d.angle);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ')
  );

  // Profile data polygon
  const dataPoints = hollandDimensions.map((d) => {
    const r = maxRadius * (d.score / 100);
    const x = radarCenter.x + r * Math.cos(d.angle);
    const y = radarCenter.y + r * Math.sin(d.angle);
    return { x, y, ...d };
  });
  const dataPolygonString = dataPoints.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  return (
    <div className="tab-pane-animate">
      {/* HERO SECTION: EDTECH FRIENDLY & INSPIRING */}
      <div className="hero-wrapper">
        <div className="hero-dot-grid" />

        <div className="hero-grid-2col">
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & FRIENDLY CTA HIERARCHY */}
          <div>
            {/* 1. Top Eyebrow Badge (No emoji, single ping dot) */}
            <div className="hero-eyebrow-badge">
              <span className="eyebrow-ping-container">
                <span className="eyebrow-ping-dot" />
                <span className="eyebrow-ping-core" />
              </span>
              <span>NỀN TẢNG DỮ LIỆU HƯỚNG NGHIỆP &amp; TUYỂN SINH 2026</span>
            </div>

            {/* 2. Main Headline (Balanced without white-space:nowrap overflow, warm amber underline) */}
            <h1 className="hero-h1-friendly">
              <span>Chọn ngành bằng dữ liệu.</span>
              <span style={{ display: 'block' }}>
                Đừng đánh cược{' '}
                <span className="headline-emphasis-warm">
                  bằng lời đồn.
                  <svg className="curved-underline-warm" viewBox="0 0 170 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9C48 2.5 122 2 167 8" stroke="#F59E0B" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </h1>

            {/* 3. Sub-headline (Sharp, empathetic to all students) */}
            <p className="hero-subheadline-sharp">
              Hơn 60% sinh viên ra trường làm trái ngành vì chọn nguyện vọng theo đám đông. Đo lường ngay độ khớp năng lực cá nhân, tỷ lệ có việc làm và điểm chuẩn thực tế tại 120+ trường Đại học.
            </p>

            {/* 4. CTA Group: Friendly Bright Blue & Pastel Outline */}
            <div className="hero-cta-horizontal">
              <button 
                className="btn-edtech-primary" 
                onClick={() => onNavigate('self')}
                id="btn-hero-primary-discovery"
              >
                <span>Khám phá ngành hợp với bạn</span>
                <ArrowRight size={18} className="btn-arrow-icon" />
              </button>

              <button 
                className="btn-edtech-secondary" 
                onClick={() => onNavigate('compare')}
                id="btn-hero-secondary-compare"
              >
                <Scale size={17} color="#1D4ED8" strokeWidth={1.9} />
                <span>So sánh 2 ngành đang phân vân</span>
              </button>
            </div>

            {/* 5. Streamlined Search Input (No overlapping text) */}
            <div className="hero-search-human-wrapper">
              <form onSubmit={handleSearchSubmit} className="hero-search-human-box">
                <Search size={18} color="#64748B" strokeWidth={1.8} style={{ marginRight: '8px', flexShrink: 0 }} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm ngành học, mã trường hoặc tổ hợp (VD: CNTT, Y khoa, A00)..."
                  className="hero-search-human-input"
                  id="hero-search-input"
                />
                <button type="submit" className="hero-search-human-badge" title="Nhấn để tra cứu">
                  <span>Enter</span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>↵</span>
                </button>
              </form>

              {/* 6. Multi-disciplinary Quick Tags (Diverse majors for all students) */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#64748B' }}>Gợi ý:</span>
                {[
                  { label: 'Truyền thông & Marketing', query: 'Marketing' },
                  { label: 'Kinh tế & Quản trị', query: 'Quản trị kinh doanh' },
                  { label: 'Y Dược', query: 'Y đa khoa' },
                  { label: 'Ngôn ngữ & Sư phạm', query: 'Ngôn ngữ Anh' },
                  { label: 'Công nghệ', query: 'Công nghệ thông tin' }
                ].map((tag, i) => (
                  <button
                    key={i}
                    type="button"
                    className="quick-tag-human"
                    onClick={() => handleQuickTagClick(tag.query)}
                  >
                    <span style={{ color: '#94A3B8', fontWeight: '500' }}>#</span>
                    <span>{tag.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MULTI-DISCIPLINARY PERSONAL CAREER MAP CARD */}
          <div>
            <div className="bento-career-card">
              {/* Header */}
              <div className="bento-card-header">
                <div className="bento-card-title-group">
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB', flexShrink: 0 }}>
                    <Compass size={19} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="bento-card-title">
                      Bản đồ Định hướng Cá nhân
                    </div>
                    <div className="bento-card-subtitle">
                      Học sinh lớp 12 • Đa dạng khối ngành (A, B, C, D)
                    </div>
                  </div>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '9999px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '0.74rem', color: '#475569', fontWeight: '600' }}>
                  <Sparkles size={13} color="#2563EB" />
                  <span>Mẫu phân tích</span>
                </div>
              </div>

              {/* Body: Clean Vector Holland RIASEC Radar */}
              <div className="bento-radar-container">
                <svg viewBox="0 0 360 230" className="bento-radar-svg">
                  <defs>
                    <linearGradient id="friendlyRadarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.28" />
                    </linearGradient>
                  </defs>

                  {/* Concentric grid rings */}
                  {gridPolygons.map((poly, idx) => (
                    <polygon
                      key={idx}
                      points={poly}
                      fill={idx % 2 === 0 ? 'rgba(248, 250, 252, 0.8)' : 'rgba(241, 245, 249, 0.35)'}
                      stroke="#E2E8F0"
                      strokeWidth="1"
                      strokeDasharray={idx < 3 ? '2 2' : 'none'}
                    />
                  ))}

                  {/* Axis lines */}
                  {hollandDimensions.map((d, idx) => {
                    const x2 = radarCenter.x + maxRadius * Math.cos(d.angle);
                    const y2 = radarCenter.y + maxRadius * Math.sin(d.angle);
                    return (
                      <line
                        key={idx}
                        x1={radarCenter.x}
                        y1={radarCenter.y}
                        x2={x2}
                        y2={y2}
                        stroke="#CBD5E1"
                        strokeWidth="1.1"
                      />
                    );
                  })}

                  {/* Data Polygon */}
                  <polygon
                    points={dataPolygonString}
                    fill="url(#friendlyRadarGrad)"
                    stroke="#2563EB"
                    strokeWidth="2.2"
                  />

                  {/* Vertex Points */}
                  {dataPoints.map((p, idx) => (
                    <circle
                      key={idx}
                      cx={p.x}
                      cy={p.y}
                      r="3.6"
                      fill="#FFFFFF"
                      stroke="#2563EB"
                      strokeWidth="2"
                    />
                  ))}

                  {/* Clear Outer Labels - Separated cleanly, zero line piercing */}
                  {hollandDimensions.map((d, idx) => (
                    <text
                      key={idx}
                      x={d.labelX}
                      y={d.labelY}
                      textAnchor={d.anchor}
                      fontSize="9.4"
                      fontWeight="700"
                      fill={d.score >= 85 ? '#1E40AF' : '#64748B'}
                      fontFamily="var(--font-ui)"
                    >
                      {d.label}
                    </text>
                  ))}
                </svg>
              </div>

              {/* Top 3 Matched Majors (Multi-Disciplinary: Marketing, Business, Tech/Design) */}
              <div className="bento-top-majors-wrap">
                <div style={{ fontSize: '0.72rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
                  Top ngành học đề xuất:
                </div>

                <div className="bento-major-item" style={{ background: '#F0FDF4', border: '1px solid #DCFCE7' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.9rem' }}>🥇</span>
                    <span style={{ color: '#166534', fontWeight: '700' }}>Truyền thông &amp; Marketing số</span>
                  </div>
                  <span className="bento-major-badge" style={{ background: '#DCFCE7', color: '#15803D' }}>
                    Độ khớp: 94%
                  </span>
                </div>

                <div className="bento-major-item" style={{ background: '#EFF6FF', border: '1px solid #DBEAFE' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.9rem' }}>🥈</span>
                    <span style={{ color: '#1E40AF', fontWeight: '700' }}>Quản trị Kinh doanh Quốc tế</span>
                  </div>
                  <span className="bento-major-badge" style={{ background: '#DBEAFE', color: '#1D4ED8' }}>
                    Độ khớp: 89%
                  </span>
                </div>

                <div className="bento-major-item" style={{ background: '#FAF5FF', border: '1px solid #F3E8FF' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.9rem' }}>🥉</span>
                    <span style={{ color: '#6B21A8', fontWeight: '700' }}>Thiết kế Sáng tạo / CNTT</span>
                  </div>
                  <span className="bento-major-badge" style={{ background: '#F3E8FF', color: '#7E22CE' }}>
                    Độ khớp: 85%
                  </span>
                </div>
              </div>

              {/* Footer: 3 Clear Metric Columns */}
              <div className="bento-card-footer">
                <div>
                  <div className="bento-footer-stat-label">Cơ hội việc làm</div>
                  <div className="bento-footer-stat-value" style={{ color: '#059669' }}>96.4%</div>
                </div>

                <div>
                  <div className="bento-footer-stat-label">Điểm chuẩn dự báo</div>
                  <div className="bento-footer-stat-value" style={{ color: '#2563EB' }}>24.5 - 27.5</div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div 
                    className="bento-footer-action-link"
                    onClick={() => onNavigate('roadmap')}
                  >
                    <span>Xem lộ trình mẫu</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION: REFINED EDITORIAL TRUST METRICS */}
      <div className="stats-grid-container">
        <div className="stat-item-box">
          <div className="stat-metric-number" style={{ color: '#1E293B' }}>500+</div>
          <div className="stat-metric-title">Bản đồ Ngành &amp; Nghề mới nhất</div>
          <div className="stat-metric-desc">Cập nhật xu hướng việc làm thời đại AI 2026-2030</div>
        </div>

        <div className="stat-item-box">
          <div className="stat-metric-number" style={{ color: '#2563EB' }}>120+</div>
          <div className="stat-metric-title">Dữ liệu Điểm chuẩn Đại học</div>
          <div className="stat-metric-desc">Tra cứu và dự báo sát thực tế từng tổ hợp</div>
        </div>

        <div className="stat-item-box">
          <div className="stat-metric-number" style={{ color: '#059669' }}>6 Chiều</div>
          <div className="stat-metric-title">Phân tích Đa tầng Chuyên sâu</div>
          <div className="stat-metric-desc">Kết hợp Tính cách Holland, Năng lực &amp; Thị trường</div>
        </div>

        <div className="stat-item-box">
          <div className="stat-metric-number" style={{ color: '#D97706' }}>24/7</div>
          <div className="stat-metric-title">Cố vấn AI Đồng hành 1-1</div>
          <div className="stat-metric-desc">Giải đáp mọi băn khoăn chọn trường tức thì</div>
        </div>
      </div>

      {/* 4-STEP ROUTE JOURNEY WITH PASTEL ACCENT COLORS & VISUAL SEQUENCE */}
      <div className="steps-section-wrapper">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="pill-badge" style={{ marginBottom: '10px' }}>QUY TRÌNH KHOA HỌC</div>
          <h2 style={{ fontSize: '2rem' }}>4 Bước xây dựng tương lai vững chắc</h2>
          <p style={{ color: '#64748B', maxWidth: '58ch', margin: '0 auto' }}>
            CAREER QR không quyết định thay bạn — chúng tôi cung cấp la bàn dữ liệu để bạn tự tin làm chủ lựa chọn nghề nghiệp của mình.
          </p>
        </div>

        <div className="steps-grid-container">
          {[
            { 
              step: '01', 
              title: 'Khám phá bản thân', 
              desc: '5 câu hỏi tương tác & Biểu đồ mạng nhện Holland 6 chiều', 
              tab: 'self', 
              icon: Compass, 
              color: '#2563EB', 
              bg: '#EFF6FF', 
              className: 'step-card-edtech step-card-blue' 
            },
            { 
              step: '02', 
              title: 'Tra cứu dữ liệu', 
              desc: 'Bộ lọc ngành, trường, điểm chuẩn & tổ hợp xét tuyển 2026', 
              tab: 'search', 
              icon: Search, 
              color: '#7C3AED', 
              bg: '#F5F3FF', 
              className: 'step-card-edtech step-card-violet' 
            },
            { 
              step: '03', 
              title: 'So sánh đa chiều', 
              desc: 'Chấm điểm 20 tiêu chí theo trọng số giữa các ngành đang phân vân', 
              tab: 'compare', 
              icon: Layers, 
              color: '#D97706', 
              bg: '#FFFBEB', 
              className: 'step-card-edtech step-card-amber' 
            },
            { 
              step: '04', 
              title: 'Career Roadmap', 
              desc: 'Lập kế hoạch hành động cụ thể cho lớp 10, 11, 12 và xuất thẻ QR', 
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
                <span style={{ fontSize: '1.25rem', fontWeight: '900', color: item.color, fontFamily: 'var(--font-display)' }}>
                  {item.step}
                </span>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: item.bg, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <item.icon size={21} strokeWidth={2} />
                </div>
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: '#0F172A' }}>{item.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '16px', lineHeight: '1.5' }}>{item.desc}</p>
              <span style={{ fontSize: '0.84rem', fontWeight: '700', color: item.color, display: 'flex', alignItems: 'center', gap: '6px' }}>
                Khám phá ngay <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 FEATURE HIGHLIGHTS (PASTEL GRADIENTS & ROUNDED EDGES) */}
      <div className="features-grid-container">
        <div className="feature-card-pastel feature-card-emerald">
          <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', boxShadow: '0 2px 8px rgba(16, 185, 129, 0.15)' }}>
            <ShieldCheck size={24} strokeWidth={2} />
          </div>
          <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>Riêng tư tuyệt đối 100%</h3>
          <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
            Không yêu cầu đăng nhập, không thu thập số điện thoại hay thông tin cá nhân. Toàn bộ trắc nghiệm và kế hoạch chỉ lưu trực tiếp trên thiết bị của bạn.
          </p>
        </div>

        <div className="feature-card-pastel feature-card-amber">
          <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', boxShadow: '0 2px 8px rgba(245, 158, 11, 0.15)' }}>
            <QrCode size={24} strokeWidth={2} />
          </div>
          <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>Chia sẻ tức thì qua mã QR</h3>
          <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
            Chỉ với 1 chạm tạo mã QR để chia sẻ kết quả khám phá bản thân hoặc bảng Career Roadmap với cha mẹ và thầy cô để cùng thảo luận.
          </p>
        </div>

        <div className="feature-card-pastel feature-card-indigo">
          <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', boxShadow: '0 2px 8px rgba(79, 70, 229, 0.15)' }}>
            <Cpu size={24} strokeWidth={2} />
          </div>
          <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>AI Hướng nghiệp Thông minh</h3>
          <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
            Tích hợp mô hình ngôn ngữ lớn để phân tích mối tương quan giữa sở thích và năng lực, giúp học sinh nhận diện đúng ngành nghề tiềm năng.
          </p>
        </div>
      </div>
    </div>
  );
}

