import React from 'react';
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
  Play
} from 'lucide-react';

/**
 * Returns thematic configuration according to the major ID or alias:
 * - vi-mach: Electronic Printed Circuit Board (PCB), copper pins, microchip traces
 * - cntt: Cyber terminal, neural network, matrix code
 * - khdl: Quantum big data, analytics scatter grid, trendlines
 * - ykhoa: Hospital clinical monitor, ECG heartbeat wave pulse
 * - marketing: Neon broadcast stage, viral audio visualizer
 * - dohoa: Figma creative canvas, vector bezier handles, pixel rulers
 * - tudonghoa: Industrial robotics, warning chevrons, servo telemetry
 * - logistics: Maritime fleet radar, shipping vectors, GPS coordinates
 * - tamly: Mindfulness cognition aura, alpha wave frequencies
 */
export function getMajorTheme(majorId = '') {
  const id = majorId.toLowerCase();

  if (id.includes('vi-mach') || id.includes('ban-dan') || id.includes('semiconductor')) {
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

  if (id.includes('marketing') || id.includes('thuong-mai') || id.includes('truyen-thong')) {
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

  if (id.includes('tudonghoa') || id.includes('robot') || id.includes('oto-dien')) {
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

  if (id.includes('tamly') || id.includes('su-pham')) {
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

export default function ThematicVideoStage({
  majorId,
  majorName,
  youtubeId,
  videoTitle,
  channel,
  duration,
  directYoutubeUrl
}) {
  const theme = getMajorTheme(majorId);
  const IconComponent = theme.Icon;

  return (
    <div style={{ marginBottom: '22px' }}>
      {/* 1. Quick Info Bar & Direct YouTube Launcher */}
      <div 
        style={{ 
          background: '#FFF1F2', 
          border: '1.5px solid #FECDD3', 
          padding: '10px 16px', 
          borderRadius: '16px', 
          fontSize: '0.86rem', 
          color: '#9F1239', 
          marginBottom: '12px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '10px' 
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.25rem' }}>📺</span>
          <span>
            <strong>{videoTitle}</strong> ({channel} • {duration})
          </span>
        </div>

        <a
          href={directYoutubeUrl || `https://www.youtube.com/watch?v=${youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)', 
            color: '#FFFFFF', 
            padding: '7px 18px', 
            borderRadius: '999px', 
            fontWeight: '800', 
            fontSize: '0.8rem', 
            textDecoration: 'none', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px', 
            boxShadow: '0 4px 14px rgba(239, 68, 68, 0.35)',
            whiteSpace: 'nowrap'
          }}
          title="Mở video trực tiếp trong tab YouTube mới không bị chặn"
        >
          <Play size={13} fill="#FFFFFF" />
          <span>Mở Trên YouTube (Mở tab mới) ↗</span>
        </a>
      </div>

      {/* 2. THEMATIC CINEMA FRAME (Surrounds video with Electronic Circuit, ECG, or Creative Canvas) */}
      <div 
        style={{
          position: 'relative',
          background: theme.bgGradient,
          borderRadius: '22px',
          border: `2px solid ${theme.borderColor}`,
          boxShadow: `0 14px 40px -10px ${theme.glowColor}, inset 0 0 25px rgba(0,0,0,0.6)`,
          padding: '14px',
          overflow: 'hidden'
        }}
      >
        {/* TOP STATUS BAR OF THE FRAME */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '10px',
            marginBottom: '10px',
            borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
            color: '#FFFFFF',
            fontSize: '0.78rem',
            fontFamily: 'monospace',
            letterSpacing: '0.04em',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          {/* Left: Telemetry / Field Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '5px', 
                padding: '3px 10px', 
                borderRadius: '999px', 
                background: 'rgba(255, 255, 255, 0.12)', 
                color: theme.accentColor,
                fontWeight: '800',
                fontSize: '0.74rem'
              }}
            >
              <IconComponent size={13} color={theme.accentColor} />
              <span>{theme.themeTag}</span>
            </div>
            <span style={{ color: '#94A3B8', fontSize: '0.74rem' }}>{theme.title}</span>
          </div>

          {/* Right: Live Monitor Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span 
              style={{ 
                color: theme.secondaryColor, 
                fontWeight: '700',
                textShadow: `0 0 10px ${theme.secondaryColor}`
              }}
            >
              {theme.status}
            </span>
          </div>
        </div>

        {/* SPECIAL VISUAL ACCENT: ELECTRONIC CIRCUIT BOARD PIN HEADERS FOR VI-MẠCH */}
        {theme.type === 'vi-mach' && (
          <div 
            style={{ 
              position: 'absolute', 
              top: '46px', 
              left: '4px', 
              bottom: '46px', 
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
              top: '46px', 
              right: '4px', 
              bottom: '46px', 
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
            borderRadius: '14px',
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
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* BOTTOM THEMATIC ACCENT / FOOTER */}
        <div 
          style={{
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.74rem',
            color: '#64748B',
            fontFamily: 'monospace'
          }}
        >
          {theme.type === 'vi-mach' ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38BDF8' }}>
              <span>┌──[PCB TRACE 3nm]───[TRANSISTOR CORE]───[VHDL / VERILOG BUS]──┐</span>
            </div>
          ) : theme.type === 'ykhoa' ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981' }}>
              <span>ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ BỆNH VIỆN THỰC HÀNH Y KHOA ĐẠI HỌC</span>
            </div>
          ) : theme.type === 'cntt' ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#818CF8' }}>
              <span>{`{ status: 200, role: "AI Software Architect", stack: ["Python", "C++", "PyTorch"] }`}</span>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8' }}>
              <span>Trải nghiệm nghề nghiệp chuẩn tuyển sinh THPT 2026 • Career QR</span>
            </div>
          )}

          <span style={{ color: theme.accentColor, fontWeight: '700' }}>
            {majorName}
          </span>
        </div>
      </div>
    </div>
  );
}
