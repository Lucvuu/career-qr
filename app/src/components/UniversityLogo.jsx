import React from 'react';

/**
 * Official Brand Color Palettes and Heraldic Emblems for 26 Vietnamese Universities
 */
export const UNIVERSITY_BRAND_PROFILES = {
  // Miền Bắc
  "BKA": {
    name: "Đại học Bách Khoa Hà Nội",
    shortName: "HUST",
    gradient: "linear-gradient(135deg, #B91C1C 0%, #7F1D1D 100%)",
    bgTint: "#FEF2F2",
    textColor: "#991B1B",
    borderColor: "#FCA5A5",
    emblem: "⚙️",
    iconName: "Compass & Gear",
    shape: "rounded-2xl"
  },
  "QHI": {
    name: "ĐH Công nghệ - ĐHQGHN",
    shortName: "UET",
    gradient: "linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 100%)",
    bgTint: "#EFF6FF",
    textColor: "#1E40AF",
    borderColor: "#BFDBFE",
    emblem: "🔬",
    iconName: "Tech Circuit & Flame"
  },
  "KHA": {
    name: "Đại học Kinh tế Quốc dân",
    shortName: "NEU",
    gradient: "linear-gradient(135deg, #0369A1 0%, #0C4A6E 100%)",
    bgTint: "#F0F9FF",
    textColor: "#075985",
    borderColor: "#BAE6FD",
    emblem: "🏛️",
    iconName: "Economic Column & Globe"
  },
  "NTH": {
    name: "Đại học Ngoại thương",
    shortName: "FTU",
    gradient: "linear-gradient(135deg, #E11D48 0%, #9F1239 100%)",
    bgTint: "#FFF1F2",
    textColor: "#BE123C",
    borderColor: "#FECDD3",
    emblem: "⛵",
    iconName: "Global Trade Sail"
  },
  "YHB": {
    name: "Đại học Y Hà Nội",
    shortName: "HMU",
    gradient: "linear-gradient(135deg, #059669 0%, #064E3B 100%)",
    bgTint: "#ECFDF5",
    textColor: "#047857",
    borderColor: "#A7F3D0",
    emblem: "⚕️",
    iconName: "Rod of Asclepius"
  },
  "BVH": {
    name: "Học viện CNBC Viễn thông",
    shortName: "PTIT",
    gradient: "linear-gradient(135deg, #EA580C 0%, #9A3412 100%)",
    bgTint: "#FFF7ED",
    textColor: "#C2410C",
    borderColor: "#FED7AA",
    emblem: "📡",
    iconName: "Telecom Satellite"
  },
  "SPH": {
    name: "Đại học Sư phạm Hà Nội",
    shortName: "HNUE",
    gradient: "linear-gradient(135deg, #4F46E5 0%, #312E81 100%)",
    bgTint: "#EEF2FF",
    textColor: "#4338CA",
    borderColor: "#C7D2FE",
    emblem: "📖",
    iconName: "Knowledge Torch"
  },
  "HVA": {
    name: "Học viện Ngoại giao",
    shortName: "DAV",
    gradient: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
    bgTint: "#F0F9FF",
    textColor: "#0284C7",
    borderColor: "#BAE6FD",
    emblem: "🕊️",
    iconName: "Diplomatic Olive"
  },
  "NHH": {
    name: "Học viện Ngân hàng",
    shortName: "BA",
    gradient: "linear-gradient(135deg, #B91C1C 0%, #881337 100%)",
    bgTint: "#FEF2F2",
    textColor: "#991B1B",
    borderColor: "#FECDD3",
    emblem: "🏦",
    iconName: "Central Bank Seal"
  },
  "LPH": {
    name: "Đại học Luật Hà Nội",
    shortName: "HLU",
    gradient: "linear-gradient(135deg, #831843 0%, #500724 100%)",
    bgTint: "#FDF2F8",
    textColor: "#9D174D",
    borderColor: "#FBCFE8",
    emblem: "⚖️",
    iconName: "Scale of Justice"
  },
  "XDA": {
    name: "Đại học Xây dựng Hà Nội",
    shortName: "HUCE",
    gradient: "linear-gradient(135deg, #D97706 0%, #78350F 100%)",
    bgTint: "#FFFBEB",
    textColor: "#B45309",
    borderColor: "#FDE68A",
    emblem: "🏗️",
    iconName: "Civil Blueprint"
  },
  "QHX": {
    name: "ĐH KHXH & Nhân văn - ĐHQGHN",
    shortName: "USSH",
    gradient: "linear-gradient(135deg, #991B1B 0%, #701A75 100%)",
    bgTint: "#FDF4FF",
    textColor: "#86198F",
    borderColor: "#F5D0FE",
    emblem: "✒️",
    iconName: "Humanities Quill"
  },

  // Miền Trung
  "DDK": {
    name: "ĐH Bách Khoa - ĐH Đà Nẵng",
    shortName: "DUT",
    gradient: "linear-gradient(135deg, #0284C7 0%, #1E3A8A 100%)",
    bgTint: "#F0F9FF",
    textColor: "#0369A1",
    borderColor: "#BAE6FD",
    emblem: "🌊",
    iconName: "Maritime Tech"
  },
  "DDQ": {
    name: "ĐH Kinh tế - ĐH Đà Nẵng",
    shortName: "DUE",
    gradient: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    bgTint: "#EFF6FF",
    textColor: "#1D4ED8",
    borderColor: "#BFDBFE",
    emblem: "📊",
    iconName: "Economics Chart"
  },
  "DHY": {
    name: "ĐH Y Dược - ĐH Huế",
    shortName: "HUMP",
    gradient: "linear-gradient(135deg, #7E22CE 0%, #4C1D95 100%)",
    bgTint: "#FAF5FF",
    textColor: "#6B21A8",
    borderColor: "#E9D5FF",
    emblem: "🪷",
    iconName: "Royal Lotus & Caduceus"
  },
  "VKU": {
    name: "ĐH Công nghệ TT Việt - Hàn",
    shortName: "VKU",
    gradient: "linear-gradient(135deg, #DC2626 0%, #1D4ED8 100%)",
    bgTint: "#FEF2F2",
    textColor: "#DC2626",
    borderColor: "#FECDD3",
    emblem: "💻",
    iconName: "Vietnam-Korea Semiconductor"
  },

  // Miền Nam
  "QSB": {
    name: "ĐH Bách Khoa - ĐHQG TP.HCM",
    shortName: "HCMUT",
    gradient: "linear-gradient(135deg, #003B73 0%, #001B3A 100%)",
    bgTint: "#EEF2FF",
    textColor: "#003B73",
    borderColor: "#C7D2FE",
    emblem: "⚙️",
    iconName: "Saigon Tech Gear"
  },
  "QSC": {
    name: "ĐH Công nghệ Thông tin TP.HCM",
    shortName: "UIT",
    gradient: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
    bgTint: "#F0F9FF",
    textColor: "#0284C7",
    borderColor: "#BAE6FD",
    emblem: "🤖",
    iconName: "Binary Stream & AI"
  },
  "KSA": {
    name: "Đại học Kinh tế TP.HCM",
    shortName: "UEH",
    gradient: "linear-gradient(135deg, #047857 0%, #064E3B 100%)",
    bgTint: "#ECFDF5",
    textColor: "#047857",
    borderColor: "#A7F3D0",
    emblem: "📈",
    iconName: "Dynamic Innovation Star"
  },
  "YDS": {
    name: "Đại học Y Dược TP.HCM",
    shortName: "UMP",
    gradient: "linear-gradient(135deg, #065F46 0%, #022C22 100%)",
    bgTint: "#ECFDF5",
    textColor: "#065F46",
    borderColor: "#A7F3D0",
    emblem: "🩺",
    iconName: "Medical Caduceus"
  },
  "TYS": {
    name: "ĐH Y Khoa Phạm Ngọc Thạch",
    shortName: "PNTU",
    gradient: "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)",
    bgTint: "#FEF2F2",
    textColor: "#DC2626",
    borderColor: "#FECDD3",
    emblem: "🏥",
    iconName: "Hospital Red Cross"
  },
  "QST": {
    name: "ĐH Khoa học Tự nhiên TP.HCM",
    shortName: "HCMUS",
    gradient: "linear-gradient(135deg, #1E40AF 0%, #172554 100%)",
    bgTint: "#EFF6FF",
    textColor: "#1D4ED8",
    borderColor: "#BFDBFE",
    emblem: "⚛️",
    iconName: "Quantum Atom Orbit"
  },
  "SPK": {
    name: "ĐH Sư phạm Kỹ thuật TP.HCM",
    shortName: "HCMUTE",
    gradient: "linear-gradient(135deg, #C2410C 0%, #7C2D12 100%)",
    bgTint: "#FFF7ED",
    textColor: "#EA580C",
    borderColor: "#FED7AA",
    emblem: "🔧",
    iconName: "Technical Robot & Gear"
  },
  "NTS": {
    name: "ĐH Ngoại thương CS2 TP.HCM",
    shortName: "FTU2",
    gradient: "linear-gradient(135deg, #BE123C 0%, #881337 100%)",
    bgTint: "#FFF1F2",
    textColor: "#BE123C",
    borderColor: "#FECDD3",
    emblem: "⛵",
    iconName: "Global Trade Sail"
  },
  "QSX": {
    name: "ĐH Kinh tế - Luật TP.HCM",
    shortName: "UEL",
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #172554 100%)",
    bgTint: "#EEF2FF",
    textColor: "#1E3A8A",
    borderColor: "#C7D2FE",
    emblem: "⚖️",
    iconName: "Law & Economics"
  },
  "FPT/RMIT": {
    name: "Đại học FPT / RMIT Việt Nam",
    shortName: "FPT/RMIT",
    gradient: "linear-gradient(135deg, #EA580C 0%, #BE123C 100%)",
    bgTint: "#FFF7ED",
    textColor: "#C2410C",
    borderColor: "#FED7AA",
    emblem: "🎓",
    iconName: "Global Campus"
  }
};

export default function UniversityLogo({ 
  code = "", 
  name = "", 
  size = 56,
  showCodeBadge = false 
}) {
  const profile = UNIVERSITY_BRAND_PROFILES[code] || {
    shortName: code,
    gradient: "linear-gradient(135deg, #4F46E5 0%, #312E81 100%)",
    bgTint: "#EEF2FF",
    textColor: "#4338CA",
    borderColor: "#C7D2FE",
    emblem: "🎓",
    iconName: "University Seal"
  };

  return (
    <div 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '8px',
        flexShrink: 0 
      }}
    >
      {/* Heraldic Shield / Seal Logo */}
      <div 
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '16px',
          background: profile.gradient,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
          position: 'relative',
          border: '2px solid rgba(255, 255, 255, 0.85)',
          overflow: 'hidden',
          flexShrink: 0
        }}
        title={`${name} (${code})`}
      >
        {/* Subtle Inner Glow */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at top left, rgba(255,255,255,0.3) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />

        {/* Heraldic Emblem Icon */}
        <span 
          style={{ 
            fontSize: size >= 50 ? '1.45rem' : '1.15rem',
            lineHeight: 1,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' 
          }}
        >
          {profile.emblem}
        </span>

        {/* University Code / Acronym below the emblem */}
        <span 
          style={{ 
            fontSize: size >= 50 ? '0.62rem' : '0.52rem',
            fontWeight: '900',
            color: '#FFFFFF',
            letterSpacing: '0.04em',
            marginTop: '2px',
            textShadow: '0 1px 2px rgba(0,0,0,0.4)',
            fontFamily: 'var(--font-display, sans-serif)',
            textTransform: 'uppercase'
          }}
        >
          {profile.shortName || code}
        </span>
      </div>

      {/* Optional Admission Code Pill */}
      {showCodeBadge && (
        <span 
          style={{
            fontSize: '0.72rem',
            fontWeight: '800',
            padding: '3px 8px',
            borderRadius: '999px',
            background: profile.bgTint,
            color: profile.textColor,
            border: `1px solid ${profile.borderColor}`,
            whiteSpace: 'nowrap'
          }}
        >
          MÃ: {code}
        </span>
      )}
    </div>
  );
}
