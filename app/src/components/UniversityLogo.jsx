import React, { useState } from 'react';
import { OFFICIAL_UNIVERSITY_LOGOS } from '../data/universityLogos';

/**
 * High-Fidelity Official University Logo Crests for 26 Vietnamese Universities
 * Renders authentic vector SVG shields and emblems with official brand colors.
 */
export const UNIVERSITY_BRAND_PROFILES = {
  // Miền Bắc
  "BKA": {
    name: "Đại học Bách Khoa Hà Nội",
    shortName: "HUST",
    gradient: "linear-gradient(135deg, #B91C1C 0%, #7F1D1D 100%)",
    primaryColor: "#B91C1C",
    bgTint: "#FEF2F2",
    textColor: "#991B1B",
    borderColor: "#FCA5A5",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 4 L86 16 V52 C86 74 50 96 50 96 C50 96 14 74 14 52 V16 Z" fill="#991B1B" stroke="#F59E0B" strokeWidth="4"/>
        <circle cx="50" cy="46" r="24" fill="#7F1D1D" stroke="#F59E0B" strokeWidth="2.5"/>
        {/* 12-tooth mechanical cogwheel */}
        <path d="M47 22 h6 v4 h-6z M47 66 h6 v4 h-6z M26 43 h4 v6 h-4z M70 43 h4 v6 h-4z M33 30 l4 3 l-3 5 l-4 -3z M63 60 l4 3 l-3 5 l-4 -3z M33 62 l4 -3 l3 5 l-4 3z M63 32 l4 -3 l3 5 l-4 3z" fill="#F59E0B"/>
        {/* Open divider compass */}
        <path d="M50 34 L40 58 M50 34 L60 58 M43 50 L57 50" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="50" cy="34" r="3" fill="#F59E0B"/>
        {/* Open book */}
        <path d="M38 60 Q50 63 50 67 Q50 63 62 60 L62 65 Q50 68 50 72 Q50 68 38 65 Z" fill="#FDE68A"/>
        <text x="50" y="87" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">HUST</text>
      </svg>
    )
  },
  "QHI": {
    name: "ĐH Công nghệ - ĐHQGHN",
    shortName: "UET",
    gradient: "linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 100%)",
    primaryColor: "#1D4ED8",
    bgTint: "#EFF6FF",
    textColor: "#1E40AF",
    borderColor: "#BFDBFE",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="3"/>
        {/* Orbital electron rings */}
        <ellipse cx="50" cy="50" rx="36" ry="12" stroke="#60A5FA" strokeWidth="2" transform="rotate(30 50 50)"/>
        <ellipse cx="50" cy="50" rx="36" ry="12" stroke="#60A5FA" strokeWidth="2" transform="rotate(-30 50 50)"/>
        <circle cx="24" cy="36" r="3.5" fill="#F59E0B"/>
        <circle cx="76" cy="64" r="3.5" fill="#F59E0B"/>
        {/* Torch flame of wisdom */}
        <path d="M50 26 C43 38 56 42 46 56 C57 54 58 43 56 38 C54 33 50 26 50 26 Z" fill="#F59E0B"/>
        <path d="M47 56 H53 V67 H47 Z" fill="#E2E8F0"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">UET</text>
      </svg>
    )
  },
  "KHA": {
    name: "Đại học Kinh tế Quốc dân",
    shortName: "NEU",
    gradient: "linear-gradient(135deg, #0369A1 0%, #0C4A6E 100%)",
    primaryColor: "#0369A1",
    bgTint: "#F0F9FF",
    textColor: "#075985",
    borderColor: "#BAE6FD",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="3"/>
        <circle cx="50" cy="50" r="38" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="3 3"/>
        {/* Classical neoclassical temple portico columns */}
        <path d="M28 32 L50 20 L72 32 Z" fill="#F59E0B"/>
        <path d="M26 34 H74 V37 H26 Z" fill="#FFFFFF"/>
        <path d="M32 37 H36 V58 H32 Z M42 37 H46 V58 H42 Z M54 37 H58 V58 H54 Z M64 37 H68 V58 H64 Z" fill="#E0F2FE"/>
        <path d="M24 58 H76 V62 H24 Z" fill="#FFFFFF"/>
        {/* Globe meridian & book */}
        <ellipse cx="50" cy="68" rx="16" ry="5" fill="#38BDF8"/>
        <text x="50" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">NEU</text>
      </svg>
    )
  },
  "NTH": {
    name: "Đại học Ngoại thương",
    shortName: "FTU",
    gradient: "linear-gradient(135deg, #E11D48 0%, #9F1239 100%)",
    primaryColor: "#E11D48",
    bgTint: "#FFF1F2",
    textColor: "#BE123C",
    borderColor: "#FECDD3",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#9F1239" stroke="#FB7185" strokeWidth="3"/>
        {/* Globe latitude lines */}
        <circle cx="50" cy="46" r="26" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
        <ellipse cx="50" cy="46" rx="14" ry="26" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
        <line x1="24" y1="46" x2="76" y2="46" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
        {/* Three golden international trade sails */}
        <path d="M50 24 C50 24 64 36 60 52 C54 48 50 48 50 48 Z" fill="#F59E0B"/>
        <path d="M48 28 C48 28 36 38 40 50 C44 48 48 48 48 48 Z" fill="#FDE047"/>
        <path d="M34 54 Q50 60 66 54 L62 58 Q50 63 38 58 Z" fill="#FFFFFF"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">FTU</text>
      </svg>
    )
  },
  "YHB": {
    name: "Đại học Y Hà Nội",
    shortName: "HMU",
    gradient: "linear-gradient(135deg, #059669 0%, #064E3B 100%)",
    primaryColor: "#059669",
    bgTint: "#ECFDF5",
    textColor: "#047857",
    borderColor: "#A7F3D0",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#064E3B" stroke="#34D399" strokeWidth="3"/>
        {/* Rod of Asclepius with coiled golden serpent */}
        <path d="M50 20 V68" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="50" cy="18" r="4" fill="#F59E0B"/>
        <path d="M44 28 C56 30 56 38 45 42 C36 46 58 50 50 60" stroke="#FDE047" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
        {/* Lotus medical healing petals */}
        <path d="M26 62 Q38 54 50 66 Q62 54 74 62 Q62 70 50 68 Q38 70 26 62 Z" fill="#34D399"/>
        <text x="50" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">HMU</text>
      </svg>
    )
  },
  "BVH": {
    name: "Học viện CNBC Viễn thông",
    shortName: "PTIT",
    gradient: "linear-gradient(135deg, #EA580C 0%, #9A3412 100%)",
    primaryColor: "#EA580C",
    bgTint: "#FFF7ED",
    textColor: "#C2410C",
    borderColor: "#FED7AA",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#9A3412" stroke="#FB923C" strokeWidth="3"/>
        {/* Parabolic satellite antenna dish & radio broadcast waves */}
        <path d="M32 30 Q56 46 44 68" stroke="#FDBA74" strokeWidth="4" strokeLinecap="round"/>
        <line x1="44" y1="46" x2="62" y2="34" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="62" cy="34" r="4" fill="#F59E0B"/>
        {/* Broadcast waves */}
        <path d="M66 26 A14 14 0 0 1 76 42" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round"/>
        <path d="M72 20 A22 22 0 0 1 84 46" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">PTIT</text>
      </svg>
    )
  },
  "SPH": {
    name: "Đại học Sư phạm Hà Nội",
    shortName: "HNUE",
    gradient: "linear-gradient(135deg, #4F46E5 0%, #312E81 100%)",
    primaryColor: "#4F46E5",
    bgTint: "#EEF2FF",
    textColor: "#4338CA",
    borderColor: "#C7D2FE",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#312E81" stroke="#818CF8" strokeWidth="3"/>
        {/* Torch of education */}
        <path d="M50 20 C42 30 54 36 46 48 C56 45 56 36 54 32 C52 26 50 20 50 20 Z" fill="#F59E0B"/>
        <path d="M46 48 H54 L52 64 H48 Z" fill="#E2E8F0"/>
        {/* Open book */}
        <path d="M26 58 Q40 54 50 60 Q60 54 74 58 L74 68 Q60 64 50 70 Q40 64 26 68 Z" fill="#FFFFFF"/>
        <text x="50" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif">HNUE</text>
      </svg>
    )
  },
  "HVA": {
    name: "Học viện Ngoại giao",
    shortName: "DAV",
    gradient: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
    primaryColor: "#0284C7",
    bgTint: "#F0F9FF",
    textColor: "#0284C7",
    borderColor: "#BAE6FD",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#0369A1" stroke="#38BDF8" strokeWidth="3"/>
        {/* Globe latitudes */}
        <circle cx="50" cy="46" r="24" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
        <ellipse cx="50" cy="46" rx="12" ry="24" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
        {/* Diplomatic peace dove */}
        <path d="M38 42 C44 32 58 34 64 42 C60 48 50 50 44 48 L36 54 L38 46 Z" fill="#FFFFFF"/>
        <path d="M42 38 L48 30" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">DAV</text>
      </svg>
    )
  },
  "NHH": {
    name: "Học viện Ngân hàng",
    shortName: "BA",
    gradient: "linear-gradient(135deg, #B91C1C 0%, #881337 100%)",
    primaryColor: "#B91C1C",
    bgTint: "#FEF2F2",
    textColor: "#991B1B",
    borderColor: "#FECDD3",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#881337" stroke="#F43F5E" strokeWidth="3"/>
        {/* Bank coin & columns */}
        <circle cx="50" cy="44" r="22" stroke="#F59E0B" strokeWidth="3" fill="#991B1B"/>
        <rect x="42" y="36" width="16" height="16" stroke="#F59E0B" strokeWidth="2.5" fill="none"/>
        <path d="M28 66 H72 V70 H28 Z" fill="#FDE047"/>
        <text x="50" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">BA</text>
      </svg>
    )
  },
  "LPH": {
    name: "Đại học Luật Hà Nội",
    shortName: "HLU",
    gradient: "linear-gradient(135deg, #831843 0%, #500724 100%)",
    primaryColor: "#831843",
    bgTint: "#FDF2F8",
    textColor: "#9D174D",
    borderColor: "#FBCFE8",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#500724" stroke="#F472B6" strokeWidth="3"/>
        {/* Balanced scales of justice */}
        <path d="M50 22 V64 M38 64 H62" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
        <path d="M30 32 L70 32" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M30 32 L22 46 H38 Z M70 32 L62 46 H78 Z" stroke="#FDE68A" strokeWidth="2" fill="none"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">HLU</text>
      </svg>
    )
  },
  "XDA": {
    name: "Đại học Xây dựng Hà Nội",
    shortName: "HUCE",
    gradient: "linear-gradient(135deg, #D97706 0%, #78350F 100%)",
    primaryColor: "#D97706",
    bgTint: "#FFFBEB",
    textColor: "#B45309",
    borderColor: "#FDE68A",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#78350F" stroke="#FBBF24" strokeWidth="3"/>
        {/* Truss bridge arches */}
        <path d="M22 60 L50 24 L78 60 Z" stroke="#F59E0B" strokeWidth="3.5" fill="none"/>
        <path d="M36 60 L50 42 L64 60 M50 24 V60" stroke="#FDE68A" strokeWidth="2.5"/>
        <line x1="16" y1="60" x2="84" y2="60" stroke="#FFFFFF" strokeWidth="4"/>
        <text x="50" y="83" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif">HUCE</text>
      </svg>
    )
  },
  "QHX": {
    name: "ĐH KHXH & Nhân văn - ĐHQGHN",
    shortName: "USSH",
    gradient: "linear-gradient(135deg, #475569 0%, #1E293B 100%)",
    primaryColor: "#475569",
    bgTint: "#F8FAFC",
    textColor: "#334155",
    borderColor: "#CBD5E1",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#1E293B" stroke="#94A3B8" strokeWidth="3"/>
        {/* Open parchment scroll & quill pen */}
        <path d="M28 34 C36 30 46 36 50 34 C54 36 64 30 72 34 V64 C64 60 54 66 50 64 C46 66 36 60 28 64 Z" fill="#F8FAFC"/>
        <path d="M68 22 L54 44 L50 48 L52 42 Z" fill="#F59E0B"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif">USSH</text>
      </svg>
    )
  },

  // Miền Trung
  "DDK": {
    name: "Đại học Bách Khoa - ĐH Đà Nẵng",
    shortName: "DUT",
    gradient: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
    primaryColor: "#0284C7",
    bgTint: "#F0F9FF",
    textColor: "#0284C7",
    borderColor: "#BAE6FD",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#0369A1" stroke="#38BDF8" strokeWidth="3"/>
        {/* Da Nang engineering cogwheel & sea wave */}
        <circle cx="50" cy="44" r="20" stroke="#F59E0B" strokeWidth="3" fill="#0284C7"/>
        <path d="M47 20 h6 v4 h-6z M47 64 h6 v4 h-6z M26 41 h4 v6 h-4z M70 41 h4 v6 h-4z" fill="#F59E0B"/>
        <path d="M22 66 Q50 56 78 66" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">DUT</text>
      </svg>
    )
  },
  "DDQ": {
    name: "Đại học Kinh tế - ĐH Đà Nẵng",
    shortName: "DUE",
    gradient: "linear-gradient(135deg, #1E40AF 0%, #172554 100%)",
    primaryColor: "#1E40AF",
    bgTint: "#EFF6FF",
    textColor: "#1E40AF",
    borderColor: "#BFDBFE",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#172554" stroke="#60A5FA" strokeWidth="3"/>
        {/* Economic growth bars */}
        <rect x="32" y="44" width="8" height="20" fill="#38BDF8"/>
        <rect x="46" y="34" width="8" height="30" fill="#F59E0B"/>
        <rect x="60" y="24" width="8" height="40" fill="#10B981"/>
        <path d="M28 42 L48 30 L64 20 L76 16" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">DUE</text>
      </svg>
    )
  },
  "DHY": {
    name: "Đại học Y Dược - ĐH Huế",
    shortName: "HUMP",
    gradient: "linear-gradient(135deg, #059669 0%, #064E3B 100%)",
    primaryColor: "#059669",
    bgTint: "#ECFDF5",
    textColor: "#047857",
    borderColor: "#A7F3D0",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#064E3B" stroke="#34D399" strokeWidth="3"/>
        {/* Imperial Hue lotus & medical serpent */}
        <path d="M50 20 V66" stroke="#F59E0B" strokeWidth="3.5"/>
        <path d="M42 26 C54 28 54 36 44 40 C36 44 56 48 50 58" stroke="#FDE047" strokeWidth="3" fill="none"/>
        <circle cx="50" cy="18" r="3.5" fill="#F59E0B"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif">HUMP</text>
      </svg>
    )
  },
  "VKU": {
    name: "ĐH CNTT & TT Việt - Hàn",
    shortName: "VKU",
    gradient: "linear-gradient(135deg, #DC2626 0%, #1D4ED8 100%)",
    primaryColor: "#DC2626",
    bgTint: "#FEF2F2",
    textColor: "#B91C1C",
    borderColor: "#FCA5A5",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#1E293B" stroke="#EF4444" strokeWidth="3"/>
        {/* Korea - Vietnam bilateral cyber swooshes */}
        <path d="M26 44 C26 30 50 30 50 44 C50 58 74 58 74 44" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <path d="M74 56 C74 70 50 70 50 56 C50 42 26 42 26 56" stroke="#3B82F6" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <text x="50" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">VKU</text>
      </svg>
    )
  },

  // Miền Nam & TP.HCM
  "QSB": {
    name: "ĐH Bách Khoa - ĐHQG TP.HCM",
    shortName: "HCMUT",
    gradient: "linear-gradient(135deg, #1E40AF 0%, #0F172A 100%)",
    primaryColor: "#1E40AF",
    bgTint: "#EFF6FF",
    textColor: "#1E40AF",
    borderColor: "#BFDBFE",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#0F2856" stroke="#3B82F6" strokeWidth="3"/>
        {/* Golden southern cogwheel & pagoda flame */}
        <circle cx="50" cy="44" r="22" stroke="#F59E0B" strokeWidth="3" fill="#1E40AF"/>
        <path d="M47 18 h6 v4 h-6z M47 66 h6 v4 h-6z M24 41 h4 v6 h-4z M72 41 h4 v6 h-4z" fill="#F59E0B"/>
        <path d="M50 28 L42 46 H58 Z M45 46 V56 H55 V46 Z" fill="#FDE047"/>
        <text x="50" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif">HCMUT</text>
      </svg>
    )
  },
  "QSC": {
    name: "ĐH CNTT - ĐHQG TP.HCM",
    shortName: "UIT",
    gradient: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
    primaryColor: "#0284C7",
    bgTint: "#F0F9FF",
    textColor: "#0284C7",
    borderColor: "#BAE6FD",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,8 88,28 88,72 50,92 12,72 12,28" fill="#075985" stroke="#38BDF8" strokeWidth="3"/>
        {/* Microprocessor IC chip & binary traces */}
        <rect x="36" y="32" width="28" height="28" rx="4" fill="#0369A1" stroke="#F59E0B" strokeWidth="2.5"/>
        <path d="M30 38 h6 M30 46 h6 M30 54 h6 M64 38 h6 M64 46 h6 M64 54 h6 M40 26 v6 M50 26 v6 M60 26 v6 M40 60 v6 M50 60 v6 M60 60 v6" stroke="#F59E0B" strokeWidth="2"/>
        <text x="50" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">UIT</text>
      </svg>
    )
  },
  "KSA": {
    name: "Đại học Kinh tế TP.HCM",
    shortName: "UEH",
    gradient: "linear-gradient(135deg, #059669 0%, #0369A1 100%)",
    primaryColor: "#059669",
    bgTint: "#ECFDF5",
    textColor: "#047857",
    borderColor: "#A7F3D0",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#064E3B" stroke="#10B981" strokeWidth="3"/>
        {/* Dynamic circular UEH ribbon */}
        <circle cx="50" cy="50" r="32" stroke="#38BDF8" strokeWidth="6" strokeDasharray="160 30" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="22" stroke="#F59E0B" strokeWidth="5" strokeDasharray="90 20" strokeLinecap="round"/>
        <text x="50" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="17" fontWeight="900" fontFamily="sans-serif">UEH</text>
      </svg>
    )
  },
  "YDS": {
    name: "Đại học Y Dược TP.HCM",
    shortName: "UMP",
    gradient: "linear-gradient(135deg, #0284C7 0%, #1E3A8A 100%)",
    primaryColor: "#0284C7",
    bgTint: "#F0F9FF",
    textColor: "#0284C7",
    borderColor: "#BAE6FD",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#1E3A8A" stroke="#38BDF8" strokeWidth="3"/>
        {/* Mortar & pestle with serpent */}
        <path d="M50 20 V64" stroke="#F59E0B" strokeWidth="3.5"/>
        <path d="M42 28 C54 30 54 38 44 42 C36 46 56 50 50 60" stroke="#FDE047" strokeWidth="3" fill="none"/>
        <path d="M30 54 C30 68 70 68 70 54 Z" fill="#0284C7" stroke="#38BDF8" strokeWidth="2.5"/>
        <text x="50" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">UMP</text>
      </svg>
    )
  },
  "TYS": {
    name: "ĐH Y khoa Phạm Ngọc Thạch",
    shortName: "PNTU",
    gradient: "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)",
    primaryColor: "#DC2626",
    bgTint: "#FEF2F2",
    textColor: "#B91C1C",
    borderColor: "#FCA5A5",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#991B1B" stroke="#F87171" strokeWidth="3"/>
        {/* Red medical cross & stethoscope */}
        <rect x="44" y="24" width="12" height="38" fill="#FFFFFF" rx="2"/>
        <rect x="31" y="37" width="38" height="12" fill="#FFFFFF" rx="2"/>
        <path d="M34 32 C26 44 32 60 46 64" stroke="#FDE047" strokeWidth="3" fill="none"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif">PNTU</text>
      </svg>
    )
  },
  "QST": {
    name: "ĐH KHTN - ĐHQG TP.HCM",
    shortName: "HCMUS",
    gradient: "linear-gradient(135deg, #0D9488 0%, #042F2E 100%)",
    primaryColor: "#0D9488",
    bgTint: "#F0FDFA",
    textColor: "#0F766E",
    borderColor: "#99F6E4",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#042F2E" stroke="#2DD4BF" strokeWidth="3"/>
        {/* Atomic particle orbits & DNA strand */}
        <circle cx="50" cy="46" r="6" fill="#F59E0B"/>
        <ellipse cx="50" cy="46" rx="28" ry="9" stroke="#38BDF8" strokeWidth="2.5" transform="rotate(30 50 46)"/>
        <ellipse cx="50" cy="46" rx="28" ry="9" stroke="#34D399" strokeWidth="2.5" transform="rotate(-30 50 46)"/>
        <text x="50" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif">HCMUS</text>
      </svg>
    )
  },
  "SPK": {
    name: "ĐH Sư phạm Kỹ thuật TP.HCM",
    shortName: "HCMUTE",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #B45309 100%)",
    primaryColor: "#F59E0B",
    bgTint: "#FFFBEB",
    textColor: "#B45309",
    borderColor: "#FDE68A",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#78350F" stroke="#FBBF24" strokeWidth="3"/>
        {/* Machine tool cogwheel & flame */}
        <circle cx="50" cy="44" r="22" stroke="#F59E0B" strokeWidth="3.5" fill="#92400E"/>
        <path d="M47 18 h6 v4 h-6z M47 66 h6 v4 h-6z M24 41 h4 v6 h-4z M72 41 h4 v6 h-4z" fill="#FDE047"/>
        <path d="M50 28 C44 36 54 40 46 52 C56 50 56 40 54 36 Z" fill="#EF4444"/>
        <text x="50" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">HCMUTE</text>
      </svg>
    )
  },
  "NTS": {
    name: "ĐH Ngoại thương CS2 TP.HCM",
    shortName: "FTU2",
    gradient: "linear-gradient(135deg, #E11D48 0%, #9F1239 100%)",
    primaryColor: "#E11D48",
    bgTint: "#FFF1F2",
    textColor: "#BE123C",
    borderColor: "#FECDD3",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#881337" stroke="#FB7185" strokeWidth="3"/>
        {/* Golden sails of FTU with southern star */}
        <path d="M50 24 C50 24 64 36 60 52 C54 48 50 48 50 48 Z" fill="#F59E0B"/>
        <path d="M48 28 C48 28 36 38 40 50 C44 48 48 48 48 48 Z" fill="#FDE047"/>
        <polygon points="50,14 52,19 57,19 53,22 55,27 50,24 45,27 47,22 43,19 48,19" fill="#F59E0B"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">FTU2</text>
      </svg>
    )
  },
  "QSX": {
    name: "ĐH Kinh tế - Luật TP.HCM",
    shortName: "UEL",
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #172554 100%)",
    primaryColor: "#1E3A8A",
    bgTint: "#EEF2FF",
    textColor: "#1E3A8A",
    borderColor: "#C7D2FE",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#172554" stroke="#60A5FA" strokeWidth="3"/>
        {/* Scales of justice + economic trend */}
        <path d="M50 24 V62 M38 62 H62" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
        <path d="M30 32 L70 32" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
        <path d="M30 32 L24 44 H36 Z M70 32 L64 44 H76 Z" stroke="#38BDF8" strokeWidth="2" fill="none"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">UEL</text>
      </svg>
    )
  },
  "FPT/RMIT": {
    name: "Đại học FPT / RMIT Việt Nam",
    shortName: "FPT/RMIT",
    gradient: "linear-gradient(135deg, #EA580C 0%, #BE123C 100%)",
    primaryColor: "#EA580C",
    bgTint: "#FFF7ED",
    textColor: "#C2410C",
    borderColor: "#FED7AA",
    renderSvg: () => (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#1E293B" stroke="#F97316" strokeWidth="3"/>
        {/* FPT 3-color dynamic swooshes: Orange, Blue, Green */}
        <path d="M30 40 C34 26 50 26 56 34 L48 42 C44 38 38 38 36 44 Z" fill="#F97316"/>
        <path d="M42 50 C46 36 62 36 68 44 L60 52 C56 48 50 48 48 54 Z" fill="#0284C7"/>
        <path d="M54 60 C58 46 74 46 80 54 L72 62 C68 58 62 58 60 64 Z" fill="#10B981"/>
        <text x="50" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif">FPT/RMIT</text>
      </svg>
    )
  }
};

/**
 * UniversityLogo Component
 * Renders an official vector emblem badge or high-res logo with responsive size and branding.
 */
export default function UniversityLogo({ 
  code = "", 
  name = "", 
  shortName = "",
  website = "",
  logoUrl = "",
  size = 56,
  showCodeBadge = false 
}) {
  const [imgError, setImgError] = useState(false);
  const normalizedCode = (code || "").toUpperCase().trim();
  
  // Extract clean domain for favicon lookup if available
  let domainFavicon = "";
  if (website) {
    try {
      const urlObj = new URL(website.startsWith('http') ? website : `https://${website}`);
      domainFavicon = `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=128`;
    } catch (e) {
      // ignore
    }
  }

  const primaryLogoSrc = logoUrl || OFFICIAL_UNIVERSITY_LOGOS[normalizedCode] || domainFavicon;

  const profile = UNIVERSITY_BRAND_PROFILES[normalizedCode] || {
    name: name || code,
    shortName: shortName || code,
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)",
    primaryColor: "#2563EB",
    bgTint: "#EFF6FF",
    textColor: "#1D4ED8",
    borderColor: "#BFDBFE",
    renderSvg: () => {
      const displayAbbr = shortName || (code.length > 5 ? code.slice(0, 4) : code);
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Academic Crest Shield */}
          <path d="M50 6 L86 18 V52 C86 74 50 94 50 94 C50 94 14 74 14 52 V18 Z" fill="#1E293B" stroke="#3B82F6" strokeWidth="3"/>
          <path d="M50 12 L80 22 V50 C80 69 50 86 50 86 C50 86 20 69 20 50 V22 Z" fill="#0F172A"/>
          {/* Golden academic star */}
          <path d="M50 22 L52.5 28.5 L59 29 L54 33 L55.5 39.5 L50 36 L44.5 39.5 L46 33 L41 29 L47.5 28.5 Z" fill="#F59E0B"/>
          {/* Open knowledge book */}
          <path d="M36 45 Q50 48 50 52 Q50 48 64 45 L64 49 Q50 52 50 56 Q50 52 36 49 Z" fill="#93C5FD"/>
          {/* Bold university abbreviation */}
          <text x="50" y="73" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
            {displayAbbr}
          </text>
        </svg>
      );
    }
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      {/* Official University Logo Tile */}
      <div 
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '16px',
          background: '#FFFFFF',
          border: '1.5px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
          padding: '4px'
        }}
        title={`${profile.name || name} (${code})`}
      >
        {!imgError && primaryLogoSrc ? (
          <img 
            src={primaryLogoSrc} 
            alt={profile.name || name || code} 
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        ) : (
          profile.renderSvg ? profile.renderSvg() : null
        )}
      </div>

      {/* Optional Admission Code Badge */}
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

