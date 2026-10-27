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

  // Human-crafted geometry for Holland RIASEC Radar
  const radarCenter = { x: 180, y: 115 };
  const maxRadius = 58;
  const hollandDimensions = [
    { key: 'R', label: 'R - Kỹ thuật', score: 82, angle: -Math.PI / 2, labelX: 180, labelY: 42, anchor: 'middle' },
    { key: 'I', label: 'I - Nghiên cứu (90%)', score: 90, angle: -Math.PI / 6, labelX: 250, labelY: 84, anchor: 'start' },
    { key: 'A', label: 'A - Nghệ thuật (88%)', score: 88, angle: Math.PI / 6, labelX: 250, labelY: 152, anchor: 'start' },
    { key: 'S', label: 'S - Xã hội (78%)', score: 78, angle: Math.PI / 2, labelX: 180, labelY: 196, anchor: 'middle' },
    { key: 'E', label: 'E - Quản lý (86%)', score: 86, angle: (5 * Math.PI) / 6, labelX: 110, labelY: 152, anchor: 'end' },
    { key: 'C', label: 'C - Nghiệp vụ (80%)', score: 80, angle: (-5 * Math.PI) / 6, labelX: 110, labelY: 84, anchor: 'end' }
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
      {/* HERO SECTION: SUNLIGHT CAMPUS & PASTEL BENTO */}
      <div className="hero-wrapper">
        <div className="hero-dot-grid" />

        <div className="hero-grid-2col">
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & FRIENDLY CTA */}
          <div>
            {/* 1. Top Eyebrow Badge */}
            <div className="hero-eyebrow-badge">
              <span className="eyebrow-ping-container">
                <span className="eyebrow-ping-dot" />
                <span className="eyebrow-ping-core" />
              </span>
              <span>🌱 NỀN TẢNG DỮ LIỆU HƯỚNG NGHIỆP &amp; TUYỂN SINH 2026</span>
            </div>

            {/* 2. Main Headline */}
            <h1 className="hero-h1-friendly">
              <span>Chọn ngành bằng dữ liệu.</span>
              <span style={{ display: 'block' }}>
                Đừng đánh cược{' '}
                <span className="headline-emphasis-warm">
                  bằng lời đồn.
                  <svg className="curved-underline-warm" viewBox="0 0 170 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9C48 2.5 122 2 167 8" stroke="#F59E0B" strokeWidth="3.2" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </h1>

            {/* 3. Sub-headline */}
            <p className="hero-subheadline-sharp">
              Hơn 60% sinh viên ra trường làm trái ngành vì chọn nguyện vọng theo đám đông. Đo lường ngay độ khớp năng lực cá nhân, tỷ lệ việc làm và điểm chuẩn thực tế tại 120+ trường Đại học.
            </p>

            {/* 4. CTA Group */}
            <div className="hero-cta-horizontal">
              <button 
                className="btn-edtech-primary" 
                onClick={() => onNavigate('self')}
                id="btn-hero-primary-discovery"
              >
                <span>Khám phá ngành hợp với bạn</span>
                <ArrowRight size={18} />
              </button>

              <button 
                className="btn-edtech-secondary" 
                onClick={() => onNavigate('compare')}
                id="btn-hero-secondary-compare"
              >
                <Scale size={17} color="#0284C7" strokeWidth={2} />
                <span>So sánh 2 ngành đang phân vân</span>
              </button>
            </div>

            {/* 5. Streamlined Search Input */}
            <div className="hero-search-human-wrapper">
              <form onSubmit={handleSearchSubmit} className="hero-search-human-box">
                <Search size={18} color="#64748B" strokeWidth={2} style={{ marginRight: '8px', flexShrink: 0 }} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm ngành học, mã trường hoặc tổ hợp (VD: CNTT, Y khoa, A00)..."
                  className="hero-search-human-input"
                  id="hero-search-input"
                />
                <button type="submit" className="hero-search-human-badge" title="Nhấn để tra cứu">
                  <span>Enter ↵</span>
                </button>
              </form>

              {/* 6. Multi-disciplinary Quick Tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748B' }}>Gợi ý:</span>
                {[
                  { label: 'Marketing & Truyền thông', query: 'Marketing' },
                  { label: 'Kinh doanh & Quản trị', query: 'Kinh doanh' },
                  { label: 'Y Dược & Sức khỏe', query: 'Y đa khoa' },
                  { label: 'Công nghệ thông tin', query: 'Công nghệ thông tin' },
                  { label: 'Tâm lý học', query: 'Tâm lý học' }
                ].map((tag, i) => (
                  <button
                    key={i}
                    type="button"
                    className="quick-tag-human"
                    onClick={() => handleQuickTagClick(tag.query)}
                  >
                    <span style={{ color: '#F59E0B', fontWeight: '700' }}>#</span>
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
                  <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#EEF2FF', border: '1px solid #C7D2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4F46E5', flexShrink: 0 }}>
                    <Compass size={20} strokeWidth={2.2} />
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

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '9999px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '0.74rem', color: '#475569', fontWeight: '700' }}>
                  <Sparkles size={13} color="#4F46E5" />
                  <span>Mẫu phân tích</span>
                </div>
              </div>

              {/* Body: Clean Vector Holland RIASEC Radar */}
              <div className="bento-radar-container">
                <svg viewBox="0 0 360 230" className="bento-radar-svg">
                  <defs>
                    <linearGradient id="friendlyRadarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>

                  {/* Concentric grid rings */}
                  {gridPolygons.map((poly, idx) => (
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
                    stroke="#4F46E5"
                    strokeWidth="2.4"
                  />

                  {/* Vertex Points */}
                  {dataPoints.map((p, idx) => (
                    <circle
                      key={idx}
                      cx={p.x}
                      cy={p.y}
                      r="3.8"
                      fill="#FFFFFF"
                      stroke="#4F46E5"
                      strokeWidth="2"
                    />
                  ))}

                  {/* Clear Outer Labels */}
                  {hollandDimensions.map((d, idx) => (
                    <text
                      key={idx}
                      x={d.labelX}
                      y={d.labelY}
                      textAnchor={d.anchor}
                      fontSize="9.5"
                      fontWeight="700"
                      fill={d.score >= 85 ? '#4338CA' : '#64748B'}
                      fontFamily="var(--font-ui)"
                    >
                      {d.label}
                    </text>
                  ))}
                </svg>
              </div>

              {/* Top 3 Matched Majors */}
              <div className="bento-top-majors-wrap">
                <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
                  Top ngành học đề xuất:
                </div>

                <div className="bento-major-item" style={{ background: '#ECFDF5', border: '1px solid #A7F3D0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.95rem' }}>🥇</span>
                    <span style={{ color: '#065F46', fontWeight: '700' }}>Truyền thông &amp; Marketing số</span>
                  </div>
                  <span className="bento-major-badge" style={{ background: '#D1FAE5', color: '#047857' }}>
                    Độ khớp: 94%
                  </span>
                </div>

                <div className="bento-major-item" style={{ background: '#F0F9FF', border: '1px solid #BAE6FD' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.95rem' }}>🥈</span>
                    <span style={{ color: '#0369A1', fontWeight: '700' }}>Quản trị Kinh doanh Quốc tế</span>
                  </div>
                  <span className="bento-major-badge" style={{ background: '#E0F2FE', color: '#0284C7' }}>
                    Độ khớp: 89%
                  </span>
                </div>

                <div className="bento-major-item" style={{ background: '#EEF2FF', border: '1px solid #C7D2FE' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.95rem' }}>🥉</span>
                    <span style={{ color: '#3730A3', fontWeight: '700' }}>Công nghệ thông tin / AI</span>
                  </div>
                  <span className="bento-major-badge" style={{ background: '#E0E7FF', color: '#4338CA' }}>
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
                  <div className="bento-footer-stat-value" style={{ color: '#0284C7' }}>24.5 - 27.5</div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div 
                    className="bento-footer-action-link"
                    onClick={() => onNavigate('roadmap')}
                  >
                    <span>Lộ trình mẫu</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS TRUST GRID (SUNLIGHT PASTEL BENTO) */}
      <div className="stats-grid-container">
        <div className="stat-item-box" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #EEF2FF 100%)', borderColor: '#C7D2FE' }}>
          <div className="stat-metric-number" style={{ color: '#4338CA' }}>500+</div>
          <div className="stat-metric-title">Bản đồ Ngành &amp; Nghề 2026</div>
          <div className="stat-metric-desc">Cập nhật xu hướng việc làm thời đại AI &amp; Công nghệ số</div>
        </div>

        <div className="stat-item-box" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)', borderColor: '#BAE6FD' }}>
          <div className="stat-metric-number" style={{ color: '#0284C7' }}>120+</div>
          <div className="stat-metric-title">Dữ liệu Điểm chuẩn Đại học</div>
          <div className="stat-metric-desc">Tra cứu và dự báo sát thực tế theo từng tổ hợp môn</div>
        </div>

        <div className="stat-item-box" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #ECFDF5 100%)', borderColor: '#A7F3D0' }}>
          <div className="stat-metric-number" style={{ color: '#059669' }}>6 Chiều</div>
          <div className="stat-metric-title">Phân tích Đa tầng Chuyên sâu</div>
          <div className="stat-metric-desc">Kết hợp Tính cách Holland RIASEC &amp; Thị trường lao động</div>
        </div>

        <div className="stat-item-box" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FEF3C7 100%)', borderColor: '#FDE68A' }}>
          <div className="stat-metric-number" style={{ color: '#D97706' }}>100%</div>
          <div className="stat-metric-title">Riêng tư trên máy của bạn</div>
          <div className="stat-metric-desc">Không cần đăng nhập, dữ liệu lưu an toàn trong trình duyệt</div>
        </div>
      </div>

      {/* 4-STEP ROUTE JOURNEY WITH PASTEL ACCENT COLORS */}
      <div className="steps-section-wrapper">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="pill-badge" style={{ marginBottom: '10px' }}>HÀNH TRÌNH 4 BƯỚC</div>
          <h2 style={{ fontSize: '2.1rem' }}>Xây dựng tương lai vững chắc</h2>
          <p style={{ color: '#64748B', maxWidth: '60ch', margin: '0 auto', fontSize: '0.96rem' }}>
            CAREER QR không quyết định thay bạn — chúng tôi cung cấp la bàn dữ liệu để bạn tự tin làm chủ lựa chọn nghề nghiệp của mình.
          </p>
        </div>

        <div className="steps-grid-container">
          {[
            { 
              step: '01', 
              title: 'Khám phá bản thân', 
              desc: '5 câu hỏi trắc nghiệm tương tác & Biểu đồ mạng nhện Holland 6 chiều', 
              tab: 'self', 
              icon: Compass, 
              color: '#4F46E5', 
              bg: '#EEF2FF', 
              className: 'step-card-edtech step-card-blue' 
            },
            { 
              step: '02', 
              title: 'Tra cứu dữ liệu', 
              desc: 'Bộ lọc ngành, trường, điểm chuẩn & tổ hợp môn xét tuyển chuẩn 2026', 
              tab: 'search', 
              icon: Search, 
              color: '#0EA5E9', 
              bg: '#F0F9FF', 
              className: 'step-card-edtech step-card-violet' 
            },
            { 
              step: '03', 
              title: 'Đấu trường so sánh', 
              desc: 'Thanh cân bằng tương tác & chấm điểm 20 tiêu chí giữa các ngành bạn phân vân', 
              tab: 'compare', 
              icon: Layers, 
              color: '#D97706', 
              bg: '#FEF3C7', 
              className: 'step-card-edtech step-card-amber' 
            },
            { 
              step: '04', 
              title: 'Career Roadmap & Thẻ QR', 
              desc: 'Lập kế hoạch hành động lớp 10, 11, 12 và xuất tấm vé đại học 2026', 
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
                Bắt đầu ngay <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 FEATURE HIGHLIGHTS */}
      <div className="features-grid-container">
        <div className="feature-card-pastel" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #ECFDF5 100%)', borderColor: '#A7F3D0' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#D1FAE5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <ShieldCheck size={24} strokeWidth={2.2} />
          </div>
          <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>Riêng tư tuyệt đối 100%</h3>
          <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
            Không yêu cầu đăng nhập tài khoản, không thu thập số điện thoại. Toàn bộ trắc nghiệm và kế hoạch chỉ lưu trực tiếp trên thiết bị của bạn.
          </p>
        </div>

        <div className="feature-card-pastel" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FEF3C7 100%)', borderColor: '#FDE68A' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#FDE68A', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <QrCode size={24} strokeWidth={2.2} />
          </div>
          <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>Chia sẻ tức thì qua mã QR</h3>
          <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
            Chỉ với 1 chạm tạo mã QR để chia sẻ kết quả khám phá bản thân hoặc tấm vé Career Roadmap với cha mẹ và thầy cô để cùng thảo luận.
          </p>
        </div>

        <div className="feature-card-pastel" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #EEF2FF 100%)', borderColor: '#C7D2FE' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#E0E7FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <Cpu size={24} strokeWidth={2.2} />
          </div>
          <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>AI Cố vấn Hướng nghiệp 24/7</h3>
          <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
            Tích hợp mô hình AI thông minh để phân tích mối tương quan giữa sở thích và năng lực, giải đáp mọi thắc mắc chọn ngành, chọn trường.
          </p>
        </div>
      </div>
    </div>
  );
}
