import React, { useState } from 'react';
import { 
  Cpu, 
  Activity, 
  Code2, 
  Database, 
  Flame, 
  Palette, 
  Bot, 
  Compass, 
  Sparkles,
  Play,
  ExternalLink,
  Clock,
  Check,
  Heart,
  BookmarkCheck,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { 
  MAJORS_DATA, 
  getVideosForMajor, 
  getWorkdayTimeline 
} from '../data/careerData';

export function getMajorTheme(majorId = '') {
  const id = (majorId || '').toLowerCase();

  if (id.includes('vi-mach') || id.includes('ban-dan') || id.includes('semiconductor') || id.includes('vimach')) {
    return {
      type: 'vi-mach',
      title: 'HỆ THỐNG VI MẠCH BÁN DẪN • SILICON VLSI LAB',
      subtitle: 'CHIP WAFER CLEANROOM ISO-5 • 3nm ARCHITECTURE',
      status: '● WAFER LIVE FEED • 3.2 GHz',
      accentColor: '#00F0FF',
      secondaryColor: '#EAB308',
      bgGradient: 'radial-gradient(circle at center, #0B1E2E 0%, #040A12 100%)',
      borderColor: '#0284C7',
      glowColor: 'rgba(0, 240, 255, 0.35)',
      Icon: Cpu,
      themeTag: '⚡ MÔ PHỎNG PHÒNG LAB VI MẠCH'
    };
  }

  if (id.includes('ykhoa') || id.includes('y-da-khoa') || id.includes('duoc') || id.includes('rang-ham-mat') || id.includes('y-sinh')) {
    return {
      type: 'ykhoa',
      title: 'HỆ THỐNG LÂM SÀNG • BÁC SĨ NỘI TRÚ BỆNH VIỆN',
      subtitle: 'GIÁM SÁT SINH TỒN THỰC THỜI • ICU CLINICAL WARD',
      status: '💓 74 BPM • SPO2 99% • STABLE',
      accentColor: '#10B981',
      secondaryColor: '#06B6D4',
      bgGradient: 'radial-gradient(circle at center, #062325 0%, #020F12 100%)',
      borderColor: '#059669',
      glowColor: 'rgba(16, 185, 129, 0.35)',
      Icon: Activity,
      themeTag: '❤️ ĐIỆN TÂM ĐỒ ECG LÂM SÀNG'
    };
  }

  if (id.includes('khdl') || id.includes('data') || id.includes('fintech')) {
    return {
      type: 'khdl',
      title: 'HỆ THỐNG DỮ LIỆU LỚN • PIPELINE MACHINE LEARNING',
      subtitle: 'APACHE SPARK STREAMING • 10M+ ROWS INGESTED',
      status: '● MODEL INFERENCE 99.4% • LATENCY 2ms',
      accentColor: '#8B5CF6',
      secondaryColor: '#06B6D4',
      bgGradient: 'radial-gradient(circle at center, #150F2F 0%, #060512 100%)',
      borderColor: '#7C3AED',
      glowColor: 'rgba(139, 92, 246, 0.35)',
      Icon: Database,
      themeTag: '📊 BẢNG DỮ LIỆU & HỌC MÁY'
    };
  }

  if (id.includes('marketing') || id.includes('thuong-mai') || id.includes('truyen-thong') || id.includes('pr')) {
    return {
      type: 'marketing',
      title: 'STUDIO CHIẾN DỊCH • PHÒNG TRUYỀN THÔNG SỐ GEN Z',
      subtitle: 'VIRAL BROADCAST STAGE • OMNICHANNEL ENGINE',
      status: '🔴 ON AIR • 1.4M VIEWS • +185% ROI',
      accentColor: '#F43F5E',
      secondaryColor: '#FB923C',
      bgGradient: 'radial-gradient(circle at center, #23081B 0%, #0C020B 100%)',
      borderColor: '#E11D48',
      glowColor: 'rgba(244, 63, 94, 0.35)',
      Icon: Flame,
      themeTag: '🔥 TRUYỀN THÔNG & AUDIO STAGE'
    };
  }

  if (id.includes('dohoa') || id.includes('design') || id.includes('kien-truc') || id.includes('ux')) {
    return {
      type: 'dohoa',
      title: 'FIGMA CREATIVE CANVAS • THIẾT KẾ TRẢI NGHIỆM UI/UX',
      subtitle: 'VECTOR PROTOTYPE 4K • PIXEL-PERFECT RENDER',
      status: '🎯 60 FPS • 1920x1080 • AUTO-LAYOUT',
      accentColor: '#EC4899',
      secondaryColor: '#8B5CF6',
      bgGradient: 'radial-gradient(circle at center, #1B0F2A 0%, #0A0413 100%)',
      borderColor: '#DB2777',
      glowColor: 'rgba(236, 72, 153, 0.35)',
      Icon: Palette,
      themeTag: '🎨 KHÔNG GIAN THIẾT KẾ SỐ'
    };
  }

  if (id.includes('tudonghoa') || id.includes('robot') || id.includes('oto-dien') || id.includes('oto') || id.includes('codientu')) {
    return {
      type: 'tudonghoa',
      title: 'NHÀ MÁY THÔNG MINH • ROBOTICS & DÂY CHUYỀN TỰ HÀNH',
      subtitle: 'KUKA INDUSTRIAL ARM • PLC SIEMENS CONTROLLER',
      status: '⚙️ 6-AXIS RUNNING • ZERO FAULT',
      accentColor: '#F59E0B',
      secondaryColor: '#10B981',
      bgGradient: 'radial-gradient(circle at center, #1E1608 0%, #0A0802 100%)',
      borderColor: '#D97706',
      glowColor: 'rgba(245, 158, 11, 0.35)',
      Icon: Bot,
      themeTag: '🤖 TRẠM ĐIỀU KHIỂN ROBOT'
    };
  }

  if (id.includes('logistics') || id.includes('kdqt')) {
    return {
      type: 'logistics',
      title: 'TRUNG TÂM LOGISTICS QUỐC TẾ • CẢNG BIỂN THÔNG MINH',
      subtitle: 'GLOBAL MARITIME RADAR • CHUỖI CUNG ỨNG TOÀN CẦU',
      status: '🛰️ GPS AIS SATELLITE • EN ROUTE',
      accentColor: '#0284C7',
      secondaryColor: '#38BDF8',
      bgGradient: 'radial-gradient(circle at center, #0B192E 0%, #030A14 100%)',
      borderColor: '#0284C7',
      glowColor: 'rgba(2, 132, 199, 0.35)',
      Icon: Compass,
      themeTag: '🌐 RADAR HẢI TRÌNH QUỐC TẾ'
    };
  }

  if (id.includes('tamly') || id.includes('su-pham') || id.includes('supham')) {
    return {
      type: 'tamly',
      title: 'THAM VẤN HỌC ĐƯỜNG • TÂM LÝ HỌC HÀNH VI & CẢM XÚC',
      subtitle: 'COGNITIVE MINDFULNESS • ALPHA BRAINWAVE 10Hz',
      status: '✨ HARMONY MATRIX • EMPATHY 100%',
      accentColor: '#A855F7',
      secondaryColor: '#EC4899',
      bgGradient: 'radial-gradient(circle at center, #1A0D2E 0%, #090312 100%)',
      borderColor: '#9333EA',
      glowColor: 'rgba(168, 85, 247, 0.35)',
      Icon: Sparkles,
      themeTag: '✨ SÓNG NÃO TÂM LÝ HỌC'
    };
  }

  // Default: AI & Công nghệ thông tin
  return {
    type: 'cntt',
    title: 'HỆ THỐNG CÔNG NGHỆ THÔNG TIN • KỸ SƯ TRÍ TUỆ NHÂN TẠO',
    subtitle: 'NEURAL NETWORK & CLOUD ARCHITECTURE ENGINE',
    status: '● TENSORFLOW COPROCESSOR ACTIVE',
    accentColor: '#6366F1',
    secondaryColor: '#06B6D4',
    bgGradient: 'radial-gradient(circle at center, #0D1630 0%, #040713 100%)',
    borderColor: '#4F46E5',
    glowColor: 'rgba(99, 102, 241, 0.35)',
    Icon: Code2,
    themeTag: '💻 HỆ ĐIỀU HÀNH CYBER TECH'
  };
}

const FEATURED_CAREERS = [
  { id: 'cntt', name: 'CNTT & Trí tuệ Nhân tạo', icon: '💻', badge: 'Hot 2026' },
  { id: 'vi-mach', name: 'Thiết kế Vi mạch & Bán dẫn', icon: '⚡', badge: 'Tỷ USD' },
  { id: 'marketing', name: 'Marketing & Truyền thông số', icon: '📈', badge: 'Gen Z' },
  { id: 'ykhoa', name: 'Y khoa (Bác sĩ Đa khoa)', icon: '🩺', badge: 'Thiêng liêng' },
  { id: 'logistics', name: 'Logistics & Chuỗi cung ứng', icon: '🚢', badge: 'Toàn cầu' },
  { id: 'dohoa', name: 'Thiết kế Đồ họa & UI/UX', icon: '🎨', badge: 'Sáng tạo' },
  { id: 'tudonghoa', name: 'Kỹ thuật Tự động hóa & Robot', icon: '🤖', badge: 'Smart Factory' },
  { id: 'khdl', name: 'Khoa học Dữ liệu (Data Science)', icon: '📊', badge: 'Top Lương' },
  { id: 'tamly', name: 'Tâm lý học Lâm sàng & Học đường', icon: '🧠', badge: 'Khát nhân lực' },
  { id: 'kdqt', name: 'Kinh doanh Quốc tế & Ngoại thương', icon: '🌐', badge: 'Đa quốc gia' }
];

export default function ThematicVideoStage({
  majorId,
  majorName,
  youtubeId,
  videoTitle,
  channel,
  duration,
  directYoutubeUrl,
  onSelectForRoadmap,
  onBookmarkMajor,
  savedMajorIds = []
}) {
  // Internal state for interactive career studio mode
  const [selectedMajorId, setSelectedMajorId] = useState(majorId || 'cntt');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Determine active major and video
  const effectiveMajorId = selectedMajorId;
  const majorObj = MAJORS_DATA.find(m => m.id === effectiveMajorId) || {
    id: effectiveMajorId,
    ten_nganh: majorName || 'Công nghệ thông tin & Trí tuệ Nhân tạo',
    icon: '🎓'
  };

  const videos = getVideosForMajor(effectiveMajorId);
  const activeVideo = videos[0] || {
    id: 'vid-default',
    title: videoTitle || 'Một ngày làm việc thực tế của Kỹ sư Công nghệ thông tin & AI',
    channel: channel || 'Người Trong Muôn Nghề',
    duration: duration || '09:15',
    youtubeId: youtubeId || 'c2Ce2QV4veY',
    keyTakeaways: [
      'Trải nghiệm quy trình làm việc thực tế cùng các chuyên gia hàng đầu.',
      'Khám phá kỹ năng giải quyết vấn đề, tinh thần làm việc nhóm và áp lực deadline.',
      'Những cơ hội thăng tiến và mức thu nhập thực tế sau 3-5 năm trong ngành.'
    ],
    realityCheck: {
      myth: 'Nghề này việc nhẹ lương cao, chỉ ngồi máy tính bấm nút.',
      truth: 'Thực tế đòi hỏi tinh thần tự học rất cao, khả năng chịu áp lực và giải quyết bài toán phức tạp.'
    }
  };

  const effectiveYoutubeId = (selectedMajorId === majorId && youtubeId) ? youtubeId : (activeVideo.youtubeId || 'c2Ce2QV4veY');
  const effectiveTitle = (selectedMajorId === majorId && videoTitle) ? videoTitle : activeVideo.title;
  const effectiveChannel = (selectedMajorId === majorId && channel) ? channel : activeVideo.channel;
  const effectiveDuration = (selectedMajorId === majorId && duration) ? duration : activeVideo.duration;
  const effectiveDirectUrl = (selectedMajorId === majorId && directYoutubeUrl) ? directYoutubeUrl : `https://www.youtube.com/watch?v=${effectiveYoutubeId}`;

  const theme = getMajorTheme(effectiveMajorId);
  const IconComponent = theme.Icon;

  const timelineSteps = getWorkdayTimeline(effectiveMajorId);
  const isSaved = savedMajorIds.includes(effectiveMajorId);

  return (
    <div className="tab-pane-animate" style={{ maxWidth: '980px', margin: '0 auto', marginBottom: '40px' }}>
      
      {/* 1. TOP CAROUSEL: CHOOSE CAREER TO EXPERIENCE */}
      <div style={{ marginBottom: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: '0.94rem', color: '#1E293B' }}>
              <Sparkles size={18} color="#4F46E5" />
              <span>Chọn nghề bạn muốn trải nghiệm thực tế (1 Ngày Làm Việc):</span>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#64748B' }}>10 video độc quyền</span>
          </div>

          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
            {FEATURED_CAREERS.map(c => {
              const isSelected = selectedMajorId === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setSelectedMajorId(c.id);
                    setActiveStepIndex(0);
                  }}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '999px',
                    border: isSelected ? '2px solid #4F46E5' : '1.5px solid #CBD5E1',
                    background: isSelected ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#1E293B',
                    fontSize: '0.84rem',
                    fontWeight: isSelected ? '800' : '600',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.18s ease',
                    boxShadow: isSelected ? '0 4px 12px rgba(79, 70, 229, 0.25)' : 'none',
                    flexShrink: 0
                  }}
                >
                  <span>{c.icon}</span>
                  <span>{c.name}</span>
                  {c.badge && (
                    <span style={{ 
                      fontSize: '0.68rem', 
                      padding: '1px 6px', 
                      borderRadius: '999px', 
                      background: isSelected ? 'rgba(255,255,255,0.25)' : '#FEF3C7', 
                      color: isSelected ? '#FFFFFF' : '#B45309',
                      fontWeight: '800'
                    }}>
                      {c.badge}
                    </span>
                  )}
                </button>
              );
            })}
        </div>
      </div>

      {/* 2. THEMATIC CINEMA FRAME */}
      <div 
        style={{
          position: 'relative',
          background: theme.bgGradient,
          borderRadius: '24px',
          border: `2px solid ${theme.borderColor}`,
          boxShadow: `0 16px 45px -10px ${theme.glowColor}, inset 0 0 30px rgba(0,0,0,0.6)`,
          padding: '16px 18px',
          overflow: 'hidden',
          marginBottom: '20px'
        }}
      >
        {/* TOP STATUS BAR OF THE FRAME */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '10px',
            marginBottom: '12px',
            borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
            color: '#FFFFFF',
            fontSize: '0.78rem',
            fontFamily: 'monospace',
            letterSpacing: '0.04em',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          {/* Left: Telemetry / Field Tag & Video Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '5px', 
                padding: '4px 12px', 
                borderRadius: '999px', 
                background: 'rgba(255, 255, 255, 0.12)', 
                color: theme.accentColor,
                fontWeight: '800',
                fontSize: '0.76rem'
              }}
            >
              <IconComponent size={14} color={theme.accentColor} />
              <span>{theme.themeTag}</span>
            </div>
            <span style={{ color: '#F1F5F9', fontSize: '0.86rem', fontWeight: '700' }}>
              {effectiveTitle} <span style={{ color: '#94A3B8', fontWeight: '400', fontSize: '0.78rem' }}>({effectiveChannel} • {effectiveDuration})</span>
            </span>
          </div>

          {/* Right: Live Monitor Status & YouTube link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span 
              style={{ 
                color: theme.secondaryColor, 
                fontWeight: '700',
                fontSize: '0.75rem',
                textShadow: `0 0 10px ${theme.secondaryColor}`
              }}
            >
              {theme.status}
            </span>

            <a
              href={effectiveDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)', 
                color: '#FFFFFF', 
                padding: '5px 14px', 
                borderRadius: '999px', 
                fontWeight: '800', 
                fontSize: '0.76rem', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '5px', 
                boxShadow: '0 2px 10px rgba(239, 68, 68, 0.4)',
                whiteSpace: 'nowrap'
              }}
              title="Mở video trong tab YouTube mới không bị chặn"
            >
              <Play size={12} fill="#FFFFFF" />
              <span>Mở YouTube ↗</span>
            </a>
          </div>
        </div>

        {/* SPECIAL VISUAL ACCENT: ELECTRONIC CIRCUIT BOARD PIN HEADERS FOR VI-MẠCH */}
        {theme.type === 'vi-mach' && (
          <div 
            style={{ 
              position: 'absolute', 
              top: '50px', 
              left: '4px', 
              bottom: '50px', 
              width: '8px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              zIndex: 3
            }}
          >
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                style={{ 
                  width: '6px', 
                  height: '3px', 
                  borderRadius: '1px', 
                  background: '#EAB308', 
                  boxShadow: '0 0 6px rgba(234, 179, 8, 0.8)' 
                }} 
              />
            ))}
          </div>
        )}

        {theme.type === 'vi-mach' && (
          <div 
            style={{ 
              position: 'absolute', 
              top: '50px', 
              right: '4px', 
              bottom: '50px', 
              width: '8px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              zIndex: 3
            }}
          >
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                style={{ 
                  width: '6px', 
                  height: '3px', 
                  borderRadius: '1px', 
                  background: '#EAB308', 
                  boxShadow: '0 0 6px rgba(234, 179, 8, 0.8)' 
                }} 
              />
            ))}
          </div>
        )}

        {/* 16:9 YOUTUBE VIDEO EMBED CONTAINER */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#000000',
            border: `1.5px solid rgba(255, 255, 255, 0.15)`,
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)'
          }}
        >
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            src={`https://www.youtube-nocookie.com/embed/${effectiveYoutubeId}?rel=0`}
            title={effectiveTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* BOTTOM THEMATIC ACCENT & FALLBACK DIRECT LINK */}
        <div 
          style={{
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.76rem',
            color: '#94A3B8',
            fontFamily: 'monospace',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>💡 Nếu video không tải được do mạng trường học/trình duyệt:</span>
            <a 
              href={effectiveDirectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#F43F5E', fontWeight: '800', textDecoration: 'underline' }}
            >
              Bấm vào đây để xem trực tiếp trên YouTube ↗
            </a>
          </div>

          <span style={{ color: theme.accentColor, fontWeight: '800' }}>
            {majorObj.ten_nganh || majorName}
          </span>
        </div>
      </div>

      {/* 3. SIMULATION OF 1 WORKDAY (08:30 -> 17:30) */}
      {timelineSteps && timelineSteps.length > 0 && (
        <div className="card-box" style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={18} color="#4F46E5" />
              <h3 style={{ fontSize: '1.15rem', margin: 0, color: '#1E293B', fontWeight: '800' }}>
                Mô phỏng 1 Ngày Làm Việc: {majorObj.ten_nganh}
              </h3>
            </div>
            <span className="pill-badge" style={{ fontSize: '0.74rem' }}>
              4 GIAI ĐOẠN TRONG NGÀY
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '10px', marginBottom: '16px' }}>
            {timelineSteps.map((step, idx) => {
              const isStepActive = activeStepIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '14px',
                    border: isStepActive ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                    background: isStepActive ? '#EEF2FF' : '#F8FAFC',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease'
                  }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: '800', color: isStepActive ? '#4338CA' : '#64748B', marginBottom: '2px' }}>
                    {step.time}
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: '800', color: isStepActive ? '#1E293B' : '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>{step.icon}</span>
                    <span>{step.stage}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Description */}
          {timelineSteps[activeStepIndex] && (
            <div style={{ background: '#FFFDF9', border: '1.5px solid #FEF3C7', borderRadius: '14px', padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.6rem' }}>{timelineSteps[activeStepIndex].icon}</span>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#B45309', marginBottom: '4px' }}>
                  {timelineSteps[activeStepIndex].time} • {timelineSteps[activeStepIndex].stage}
                </div>
                <p style={{ margin: 0, fontSize: '0.86rem', color: '#1E293B', lineHeight: '1.55' }}>
                  {timelineSteps[activeStepIndex].desc}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. KEY TAKEAWAYS & REALITY CHECK */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        {/* Takeaways */}
        {activeVideo.keyTakeaways && (
          <div style={{ background: '#F0FDF4', border: '1.5px solid #BBF7D0', borderRadius: '18px', padding: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '800', fontSize: '0.92rem', color: '#15803D', marginBottom: '10px' }}>
              <Check size={18} strokeWidth={2.5} />
              <span>3 ĐIỂM ĐÚC KẾT TỪ VIDEO</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {activeVideo.keyTakeaways.map((point, pIdx) => (
                <div key={pIdx} style={{ fontSize: '0.84rem', color: '#166534', lineHeight: '1.45', display: 'flex', gap: '6px' }}>
                  <span style={{ fontWeight: '900' }}>•</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reality Check */}
        {activeVideo.realityCheck && (
          <div style={{ background: '#FFF1F2', border: '1.5px solid #FECDD3', borderRadius: '18px', padding: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '800', fontSize: '0.92rem', color: '#BE123C', marginBottom: '10px' }}>
              <AlertCircle size={18} strokeWidth={2.5} />
              <span>SỰ THẬT & GÓC KHUẤT NGHỀ</span>
            </div>
            <div style={{ fontSize: '0.84rem', color: '#881337', lineHeight: '1.5', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div><strong style={{ color: '#9F1239' }}>❌ Lầm tưởng:</strong> {activeVideo.realityCheck.myth}</div>
              <div><strong style={{ color: '#9F1239' }}>✅ Thực tế:</strong> {activeVideo.realityCheck.truth}</div>
            </div>
          </div>
        )}
      </div>

      {/* 5. BOTTOM ACTIONS */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        {onSelectForRoadmap && (
          <button
            type="button"
            className="btn-edtech-primary"
            onClick={() => onSelectForRoadmap(majorObj.ten_nganh)}
            style={{ padding: '12px 24px', fontSize: '0.92rem' }}
          >
            <span>🎯 Chọn ngành này vào Lộ trình Đại học</span>
            <ArrowRight size={16} />
          </button>
        )}

        {onBookmarkMajor && (
          <button
            type="button"
            className="btn-edtech-secondary"
            onClick={() => onBookmarkMajor(majorObj)}
            style={{
              padding: '12px 20px',
              fontSize: '0.92rem',
              border: isSaved ? '1.5px solid #10B981' : '1.5px solid #CBD5E1',
              color: isSaved ? '#059669' : '#1E293B',
              background: isSaved ? '#ECFDF5' : '#FFFFFF'
            }}
          >
            {isSaved ? <BookmarkCheck size={18} color="#059669" /> : <Heart size={18} />}
            <span>{isSaved ? 'Đã lưu vào So sánh' : 'Lưu vào Đấu trường so sánh'}</span>
          </button>
        )}
      </div>

    </div>
  );
}
