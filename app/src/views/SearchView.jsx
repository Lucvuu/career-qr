import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
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
  Building2,
  MapPin,
  Globe,
  RotateCw,
  Undo2,
  GraduationCap,
  TrendingUp,
  ShieldAlert,
  Compass,
  SlidersHorizontal,
  RotateCcw,
  Briefcase,
  Scale
} from 'lucide-react';
import {
  MAJORS_DATA,
  COMBINATIONS_DATA,
  UNIVERSITIES_DATA,
  EXAM_METHODS_2026,
  getVideosForMajor
} from '../data/careerData';
import ThematicVideoStage from '../components/ThematicVideoStage';
import UniversityLogo from '../components/UniversityLogo';

/**
 * Strips Vietnamese diacritics (including đ/Đ -> d) for accent-insensitive search.
 */
function normalizeVN(str = '') {
  if (!str) return '';
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Smart multi-token & accent-insensitive Vietnamese matcher.
 * Handles queries like "y da khoa" matching "Y khoa (Bác sĩ Đa khoa)"
 * or "bach khoa ha noi" matching "Đại học Bách Khoa Hà Nội".
 */
function matchesSmartSearch(normalizedHaystack, rawQuery) {
  const qNorm = normalizeVN(rawQuery);
  if (!qNorm) return true;
  if (normalizedHaystack.includes(qNorm)) return true;

  const tokens = qNorm.split(/[\s,./\-()+]+/).filter(Boolean);
  if (tokens.length <= 1) return false;
  return tokens.every((tok) => normalizedHaystack.includes(tok));
}

function parseMinScore(scoreStr = '') {
  const nums = String(scoreStr).match(/\d+(?:\.\d+)?/g);
  return nums && nums.length > 0 ? parseFloat(nums[0]) : 22;
}

function parseMaxScore(scoreStr = '') {
  const nums = String(scoreStr).match(/\d+(?:\.\d+)?/g);
  if (!nums || nums.length === 0) return 26;
  return parseFloat(nums[nums.length - 1]);
}

function parseAiRiskScore(major) {
  if (
    major?.aiImpact &&
    typeof major.aiImpact === 'object' &&
    typeof major.aiImpact.riskPercentage === 'number'
  ) {
    return major.aiImpact.riskPercentage;
  }
  const lvl = normalizeVN(major?.aiRiskLevel || '');
  if (lvl.includes('rat thap') || lvl.includes('cuc thap')) return 10;
  if (lvl.includes('thap')) return 18;
  if (lvl.includes('trung binh')) return 42;
  if (lvl.includes('cao')) return 68;
  return 35;
}

function parseStartSalaryScore(major) {
  const fresher = major?.salaryRoadmap?.fresher || '';
  const nums = String(fresher).match(/\d+(?:\.\d+)?/g);
  if (!nums || nums.length === 0) return 12;
  return parseFloat(nums[nums.length - 1]);
}

/**
 * Normalizes all shorthand/variant major slugs used in UNIVERSITIES_DATA.majors
 * to valid MAJORS_DATA IDs + clean Vietnamese display names.
 */
const UNI_MAJOR_SLUG_MAP = {
  'thiet-ke-do-hoa': { majorId: 'dohoa' },
  'tamly': { majorId: 'tam-ly-hoc' },
  'xaydung': { majorId: 'xay-dung' },
  'du-lich': { majorId: 'quan-tri-khach-san', label: 'Quản trị Du lịch & Khách sạn', icon: '🏨' },
  'dien-tu': { majorId: 'dien-dien-tu' },
  'y-khoa': { majorId: 'ykhoa' },
  'may-thoi-trang': { majorId: 'thiet-ke-thoi-trang' },
  'kinh-doanh-thoi-trang': { majorId: 'thiet-ke-thoi-trang', label: 'Kinh doanh & Thiết kế Thời trang', icon: '👗' },
  'dược-học': { majorId: 'duoc-hoc' },
  'duoc': { majorId: 'duoc-hoc' },
  'dieuduong': { majorId: 'dieu-duong' },
  'kientruc': { majorId: 'kien-truc' },
  'noi-that': { majorId: 'thiet-ke-noi-that' },
  'hang-hai': { majorId: 'khoa-hoc-hang-hai' },
  'fintech': { majorId: 'tai-chinh-ngan-hang', label: 'Công nghệ Tài chính (Fintech)', icon: '💳' },
  'nong-nghiep': { majorId: 'nong-nghiep-cong-nghe-cao' },
  'thu-y': { majorId: 'nong-nghiep-cong-nghe-cao', label: 'Thú y & Nông nghiệp CNC', icon: '🐾' },
  'sinh-hoc': { majorId: 'cong-nghe-sinh-hoc' },
  'y-sinh': { majorId: 'cong-nghe-sinh-hoc', label: 'Kỹ thuật Y sinh & CN Sinh học', icon: '🧬' },
  'quoc-te-hoc': { majorId: 'quan-he-quoc-te' },
  'dong-phuong-hoc': { majorId: 'quan-he-quoc-te', label: 'Đông phương học & Quốc tế học', icon: '🌏' },
  'ngonngu': { majorId: 'ngon-ngu-anh' },
  'quan-tri-kinh-doanh': { majorId: 'kdqt', label: 'Quản trị Kinh doanh', icon: '💼' },
  'kinh-te': { majorId: 'kdqt', label: 'Kinh tế học & Quản lý', icon: '📊' },
  'toan-ung-dung': { majorId: 'khdl', label: 'Toán ứng dụng & Khoa học Dữ liệu', icon: '📐' },
  'hoa-hoc': { majorId: 'cong-nghe-thuc-pham', label: 'Hóa học & Công nghệ Hóa', icon: '🧪' },
  'xa-hoi-hoc': { majorId: 'quan-ly-nha-nuoc', label: 'Xã hội học & Công tác Xã hội', icon: '🤝' },
  'vat-ly-tri-lieu': { majorId: 'dieu-duong', label: 'Vật lý trị liệu & Phục hồi chức năng', icon: '🩺' },
  'y-te-cong-cong': { majorId: 'xet-nghiem-y-hoc', label: 'Y tế công cộng & Y học dự phòng', icon: '🏥' },
  'moi-truong': { majorId: 'cong-nghe-sinh-hoc', label: 'Khoa học & Kỹ thuật Môi trường', icon: '🌿' },
  'dia-chat': { majorId: 'xay-dung', label: 'Kỹ thuật Địa chất & Tài nguyên', icon: '⛰️' },
  'giao-duc-the-chat': { majorId: 'supham-toan', label: 'Giáo dục Thể chất', icon: '🏅' },
  'huan-luyen-the-thao': { majorId: 'supham-toan', label: 'Huấn luyện Thể thao', icon: '⚽' },
  'y-sinh-the-thao': { majorId: 'dieu-duong', label: 'Y sinh học Thể dục Thể thao', icon: '🏃' }
};

const UNIVERSITY_TYPES = [
  { id: 'all', label: 'Tất cả loại hình' },
  { id: 'cong-lap-trong-diem', label: '🏛️ Công lập trọng điểm' },
  { id: 'cong-lap-dia-phuong', label: '🎯 Công lập địa phương (Vừa sức)' },
  { id: 'quoc-te', label: '🌐 Quốc tế & liên kết' },
  { id: 'tu-thuc', label: '⚡ Tư thục & doanh nghiệp' },
  { id: 'su-pham', label: '🎓 Sư phạm & khối công an, quân đội' }
];

const PROVINCE_GROUPS = [
  { id: 'all', label: 'Tất cả 3 miền', keywords: [] },
  { id: 'hanoi', label: '🏛️ Hà Nội', keywords: ['ha noi', 'hanoi'] },
  { id: 'thainguyen', label: '⛰️ Thái Nguyên', keywords: ['thai nguyen', 'thainguyen'] },
  { id: 'haiphong-quangninh', label: '⚓ Hải Phòng & Quảng Ninh', keywords: ['hai phong', 'quang ninh', 'ha long'] },
  { id: 'dongbang-songhong', label: '🌾 Nam Định, Thái Bình, Hưng Yên, Bắc Ninh...', keywords: ['thai binh', 'nam dinh', 'hung yen', 'bac ninh', 'hai duong', 'ninh binh'] },
  { id: 'thanh-nghe-tinh', label: '🌿 Thanh - Nghệ - Tĩnh', keywords: ['thanh hoa', 'nghe an', 'vinh', 'ha tinh'] },
  { id: 'danang-hue', label: '🌊 Huế & Đà Nẵng', keywords: ['da nang', 'hue', 'thua thien hue'] },
  { id: 'namtrungbo-taynguyen', label: '☀️ Nam Trung Bộ & Tây Nguyên', keywords: ['quy nhon', 'nha trang', 'da lat', 'tay nguyen', 'binh dinh', 'khanh hoa'] },
  { id: 'tphcm-dongnambo', label: '🏙️ TP.HCM & Đông Nam Bộ', keywords: ['tp.hcm', 'tphcm', 'ho chi minh', 'sai gon', 'binh duong', 'dong nai'] },
  { id: 'cantho-dbscl', label: '🛶 Cần Thơ & ĐBSCL', keywords: ['can tho', 'dong thap', 'an giang', 'tra vinh', 'vinh long', 'dbscl'] }
];

const SCORE_RANGES = [
  { id: 'all', label: 'Tất cả mức điểm' },
  { id: 'under20', label: '< 20 điểm (Vừa sức)' },
  { id: '20-23', label: '20 – 23 điểm' },
  { id: '23-26', label: '23 – 26 điểm' },
  { id: 'above26', label: 'Từ 26+ điểm (Top đầu)' }
];

const TUITION_RANGES = [
  { id: 'all', label: 'Tất cả học phí' },
  { id: 'free', label: '🎁 Miễn học phí / Sư phạm' },
  { id: 'under25', label: 'Dưới 25 tr/năm' },
  { id: '25-50', label: '25 – 50 tr/năm' },
  { id: 'international', label: 'Chương trình Quốc tế / Học bổng' }
];

const QUICK_MAJOR_TAGS = [
  { label: '💻 AI & CNTT', query: 'Công nghệ thông tin' },
  { label: '🔬 Vi mạch & Bán dẫn', query: 'Vi mạch' },
  { label: '📈 Marketing số', query: 'Marketing' },
  { label: '🩺 Y Dược', query: 'Y khoa' },
  { label: '🚢 Logistics', query: 'Logistics' },
  { label: '🎓 Sư phạm (Miễn HP)', query: 'Sư phạm' }
];

export default function SearchView({
  initialQuery = '',
  onClearQuery,
  bookmarkedMajors = [],
  onBookmarkMajor,
  onToggleBookmarkMajor,
  onNavigate,
  onSelectForRoadmap
}) {
  const [activeTab, setActiveTab] = useState('nganh'); // 'nganh' | 'truong' | 'video' | 'tohop'
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedCombo, setSelectedCombo] = useState('');
  const [majorSortBy, setMajorSortBy] = useState('default'); // 'default' | 'score-asc' | 'score-desc' | 'ai-safe' | 'salary-desc'

  // University Filter States (Multi-dimensional)
  const [selectedUniversityType, setSelectedUniversityType] = useState('all');
  const [selectedProvinceGroup, setSelectedProvinceGroup] = useState('all');
  const [selectedScoreRange, setSelectedScoreRange] = useState('all');
  const [selectedTuitionRange, setSelectedTuitionRange] = useState('all');
  const [uniSortBy, setUniSortBy] = useState('default'); // 'default' | 'score-asc' | 'score-desc' | 'majors-desc'

  // Modals & Interactive States
  const [selectedMajorModal, setSelectedMajorModal] = useState(null);
  const [selectedUniModal, setSelectedUniModal] = useState(null);
  const [activeVideoMajor, setActiveVideoMajor] = useState(null);
  const [activeEpisodeIndex, setActiveEpisodeIndex] = useState(0);
  const [flippedUniIds, setFlippedUniIds] = useState([]);
  const [localSavedIds, setLocalSavedIds] = useState([]);
  const [toastMsg, setToastMsg] = useState('');

  const showToast = useCallback((msg) => {
    setToastMsg(msg);
  }, []);

  useEffect(() => {
    if (!toastMsg) return undefined;
    const timer = setTimeout(() => setToastMsg(''), 2600);
    return () => clearTimeout(timer);
  }, [toastMsg]);

  // Lookup Maps & Dynamic Filter Options derived directly from careerData
  const majorsByIdMap = useMemo(() => {
    const map = new Map();
    (MAJORS_DATA || []).forEach((m) => map.set(m.id, m));
    return map;
  }, []);

  const resolveMajorSlug = useCallback(
    (slug) => {
      const direct = majorsByIdMap.get(slug);
      if (direct) {
        return {
          majorObj: direct,
          majorId: direct.id,
          label: direct.ten_nganh,
          icon: direct.icon || '🎓'
        };
      }
      const mapped = UNI_MAJOR_SLUG_MAP[slug];
      if (mapped) {
        const target = majorsByIdMap.get(mapped.majorId) || null;
        return {
          majorObj: target,
          majorId: mapped.majorId,
          label: mapped.label || target?.ten_nganh || slug,
          icon: mapped.icon || target?.icon || '🎓'
        };
      }
      const humanized = String(slug || '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return {
        majorObj: null,
        majorId: slug,
        label: humanized,
        icon: '🎓'
      };
    },
    [majorsByIdMap]
  );

  // Dynamically derive all 8 real major groups with counts (prevents any mismatch)
  const majorGroupsWithCount = useMemo(() => {
    const counts = new Map();
    (MAJORS_DATA || []).forEach((m) => {
      if (m.nhom_nganh) {
        counts.set(m.nhom_nganh, (counts.get(m.nhom_nganh) || 0) + 1);
      }
    });
    return Array.from(counts.entries()).map(([name, count]) => ({ name, count }));
  }, []);

  // Dynamically derive all exam combinations with subject descriptions
  const allCombinations = useMemo(() => {
    const comboMap = new Map();
    (COMBINATIONS_DATA || []).forEach((c) => {
      comboMap.set(c.ma, c.mon);
    });
    (MAJORS_DATA || []).forEach((m) => {
      (m.to_hop || []).forEach((code) => {
        if (!comboMap.has(code)) {
          comboMap.set(code, '');
        }
      });
    });
    return Array.from(comboMap.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([code, subjects]) => ({ code, subjects }));
  }, []);

  // Smart routing when initialQuery arrives from HomeView or AIChatModal
  useEffect(() => {
    if (initialQuery === undefined) return;
    const trimmed = initialQuery.trim();
    if (!trimmed) return;

    const qNorm = normalizeVN(trimmed);

    // 1. Score query from HomeView Quick Matcher (e.g. "24.5đ" or "22 điểm")
    const scoreMatch = trimmed.match(/^(\d{1,2}(?:\.\d+)?)\s*(?:đ|d|điểm|diem)$/i);
    if (scoreMatch) {
      const scoreVal = parseFloat(scoreMatch[1]);
      let rangeId = '23-26';
      if (scoreVal < 20) rangeId = 'under20';
      else if (scoreVal < 23) rangeId = '20-23';
      else if (scoreVal < 26) rangeId = '23-26';
      else rangeId = 'above26';

      setSelectedScoreRange(rangeId);
      setSearchKeyword('');
      setActiveTab('truong');
      showToast(`🎯 Đang lọc các trường phù hợp với mức điểm ~${scoreVal}đ`);
      return;
    }

    // 2. Exact region/province query (e.g. "Hà Nội", "Thái Nguyên", "Hải Phòng", "TP.HCM")
    const matchedProvince = PROVINCE_GROUPS.find(
      (p) => p.id !== 'all' && p.keywords.some((kw) => kw === qNorm)
    );
    if (matchedProvince) {
      setSelectedProvinceGroup(matchedProvince.id);
      setSearchKeyword('');
      setActiveTab('truong');
      return;
    }

    // 3. Exact combination code (e.g. "A00", "D01", "B00")
    const upper = trimmed.toUpperCase();
    if (/^[ABCDHVMS]\d{2}$/.test(upper)) {
      setSelectedCombo(upper);
      setSearchKeyword('');
      setActiveTab('nganh');
      return;
    }

    // 4. Exact university code or shortName (e.g. "BKA", "TMU", "NEU", "FTU", "QSB")
    const exactUni = (UNIVERSITIES_DATA || []).find(
      (u) =>
        u.code?.toLowerCase() === trimmed.toLowerCase() ||
        u.shortName?.toLowerCase() === trimmed.toLowerCase() ||
        u.id?.toLowerCase() === trimmed.toLowerCase()
    );
    if (exactUni) {
      setSearchKeyword(trimmed);
      setActiveTab('truong');
      return;
    }

    // 5. Default: Major / general keyword search
    setSearchKeyword(trimmed);
    setActiveTab('nganh');
  }, [initialQuery, showToast]);

  // Synchronized saved major IDs (persisted via App.jsx bookmarkedMajors)
  const savedMajorIds = useMemo(() => {
    if (Array.isArray(bookmarkedMajors) && bookmarkedMajors.length > 0) {
      return bookmarkedMajors.map((m) => m.id);
    }
    return localSavedIds;
  }, [bookmarkedMajors, localSavedIds]);

  const savedMajorsList = useMemo(() => {
    if (Array.isArray(bookmarkedMajors) && bookmarkedMajors.length > 0) {
      return bookmarkedMajors;
    }
    return localSavedIds.map((id) => majorsByIdMap.get(id)).filter(Boolean);
  }, [bookmarkedMajors, localSavedIds, majorsByIdMap]);

  const toggleFlipUni = (uniId) => {
    setFlippedUniIds((prev) =>
      prev.includes(uniId) ? prev.filter((id) => id !== uniId) : [...prev, uniId]
    );
  };

  // Lock body scroll & support Escape key when any modal is open
  useEffect(() => {
    if (!activeVideoMajor && !selectedMajorModal && !selectedUniModal) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeVideoMajor) setActiveVideoMajor(null);
        else if (selectedUniModal) setSelectedUniModal(null);
        else if (selectedMajorModal) setSelectedMajorModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideoMajor, selectedMajorModal, selectedUniModal]);

  const activeProvinceObj =
    PROVINCE_GROUPS.find((p) => p.id === selectedProvinceGroup) || PROVINCE_GROUPS[0];

  // Precompute normalized university records + normalized major IDs per university
  const enrichedUniversities = useMemo(() => {
    return (UNIVERSITIES_DATA || []).map((u) => {
      const resolvedMajors = (u.majors || []).map((slug) => ({
        rawSlug: slug,
        ...resolveMajorSlug(slug)
      }));

      // Deduplicate resolved major IDs while preserving display order
      const canonicalMajorIds = new Set();
      resolvedMajors.forEach((rm) => {
        if (rm.majorId) canonicalMajorIds.add(rm.majorId);
      });

      const majorNamesJoined = resolvedMajors.map((rm) => rm.label).join(' ');
      const searchIndex = normalizeVN(
        [
          u.name,
          u.code,
          u.shortName,
          u.id,
          u.city,
          u.type,
          u.highlight,
          u.benchmarks,
          majorNamesJoined
        ]
          .filter(Boolean)
          .join(' ')
      );

      return {
        ...u,
        resolvedMajors,
        canonicalMajorIds,
        minBenchmark: parseMinScore(u.benchmarkHistory?.forecast2026 || u.benchmarks),
        maxBenchmark: parseMaxScore(u.benchmarkHistory?.forecast2026 || u.benchmarks),
        searchIndex
      };
    });
  }, [resolveMajorSlug]);

  // Precompute normalized search index for each Major
  const enrichedMajors = useMemo(() => {
    return (MAJORS_DATA || []).map((m) => {
      const searchIndex = normalizeVN(
        [
          m.id,
          m.ma_nganh,
          m.ten_nganh,
          m.nhom_nganh,
          m.mo_ta,
          m.nang_luc,
          m.so_thich,
          m.vi_tri_viec_lam,
          ...(m.to_hop || []),
          ...(m.truong_tieu_bieu || [])
        ]
          .filter(Boolean)
          .join(' ')
      );

      return {
        ...m,
        searchIndex,
        minBenchmark: parseMinScore(m.diem_tb),
        maxBenchmark: parseMaxScore(m.diem_tb),
        aiRiskNumeric: parseAiRiskScore(m),
        startSalaryNumeric: parseStartSalaryScore(m)
      };
    });
  }, []);

  // Majors offered in the currently selected region (canonical IDs in MAJORS_DATA)
  const regionalMajorIds = useMemo(() => {
    if (selectedProvinceGroup === 'all') return null;
    const set = new Set();
    enrichedUniversities
      .filter((u) => u.provinceGroup === selectedProvinceGroup)
      .forEach((u) => {
        u.canonicalMajorIds.forEach((mId) => {
          if (majorsByIdMap.has(mId)) {
            set.add(mId);
          }
        });
      });
    return set;
  }, [selectedProvinceGroup, enrichedUniversities, majorsByIdMap]);

  const regionalUnisCount = useMemo(() => {
    if (selectedProvinceGroup === 'all') return enrichedUniversities.length;
    return enrichedUniversities.filter((u) => u.provinceGroup === selectedProvinceGroup).length;
  }, [selectedProvinceGroup, enrichedUniversities]);

  const regionalMajorsCount = useMemo(() => {
    if (selectedProvinceGroup === 'all') return enrichedMajors.length;
    return regionalMajorIds ? regionalMajorIds.size : enrichedMajors.length;
  }, [selectedProvinceGroup, regionalMajorIds, enrichedMajors.length]);

  // Precompute colleges per major (prioritizing selectedProvinceGroup)
  const getCollegesForMajor = useCallback(
    (majorId, limit = 4) => {
      const offeringUnis = enrichedUniversities.filter((u) => u.canonicalMajorIds.has(majorId));
      if (selectedProvinceGroup !== 'all') {
        const regional = offeringUnis
          .filter((u) => u.provinceGroup === selectedProvinceGroup)
          .map((u) => ({ ...u, isRegional: true }));
        const others = offeringUnis
          .filter((u) => u.provinceGroup !== selectedProvinceGroup)
          .map((u) => ({ ...u, isRegional: false }));
        return [...regional, ...others].slice(0, limit);
      }
      return offeringUnis.slice(0, limit).map((u) => ({ ...u, isRegional: false }));
    },
    [enrichedUniversities, selectedProvinceGroup]
  );

  // Filter & Sort Majors (Memoized for instant typing speed)
  const filteredMajors = useMemo(() => {
    const kwTrimmed = searchKeyword.trim();
    const kwLower = kwTrimmed.toLowerCase();

    // Find all universities matching the keyword (supports exact code/shortName or name substring)
    const matchingUnis = kwTrimmed
      ? enrichedUniversities.filter(
          (u) =>
            u.code.toLowerCase() === kwLower ||
            (u.shortName && u.shortName.toLowerCase() === kwLower) ||
            u.id.toLowerCase() === kwLower ||
            matchesSmartSearch(normalizeVN(`${u.name} ${u.shortName || ''} ${u.code}`), kwTrimmed)
        )
      : [];

    const list = enrichedMajors.filter((m) => {
      if (selectedGroup && m.nhom_nganh !== selectedGroup) return false;
      if (selectedCombo && !(m.to_hop || []).includes(selectedCombo)) return false;

      if (kwTrimmed) {
        const offeredByMatchedUni = matchingUnis.some((u) => u.canonicalMajorIds.has(m.id));
        const textMatched = matchesSmartSearch(m.searchIndex, kwTrimmed);
        if (!offeredByMatchedUni && !textMatched) return false;
      }
      return true;
    });

    return [...list].sort((a, b) => {
      if (majorSortBy === 'score-asc') return a.minBenchmark - b.minBenchmark;
      if (majorSortBy === 'score-desc') return b.maxBenchmark - a.maxBenchmark;
      if (majorSortBy === 'ai-safe') return a.aiRiskNumeric - b.aiRiskNumeric;
      if (majorSortBy === 'salary-desc') return b.startSalaryNumeric - a.startSalaryNumeric;

      // Default: prioritize majors offered in the selected region
      if (regionalMajorIds) {
        const aInRegion = regionalMajorIds.has(a.id);
        const bInRegion = regionalMajorIds.has(b.id);
        if (aInRegion && !bInRegion) return -1;
        if (!aInRegion && bInRegion) return 1;
      }
      return 0;
    });
  }, [
    enrichedMajors,
    enrichedUniversities,
    selectedGroup,
    selectedCombo,
    searchKeyword,
    majorSortBy,
    regionalMajorIds
  ]);

  // Filter & Sort Universities (Multi-dimensional & Memoized)
  const filteredUniversities = useMemo(() => {
    const kwTrimmed = searchKeyword.trim();

    const list = enrichedUniversities.filter((u) => {
      if (selectedUniversityType !== 'all' && u.typeCategory !== selectedUniversityType) return false;
      if (selectedProvinceGroup !== 'all' && u.provinceGroup !== selectedProvinceGroup) return false;
      if (selectedScoreRange !== 'all' && u.benchmarkScoreRange !== selectedScoreRange) return false;
      if (selectedTuitionRange !== 'all' && u.tuitionLevel !== selectedTuitionRange) return false;

      if (kwTrimmed && !matchesSmartSearch(u.searchIndex, kwTrimmed)) {
        return false;
      }
      return true;
    });

    return [...list].sort((a, b) => {
      if (uniSortBy === 'score-asc') return a.minBenchmark - b.minBenchmark;
      if (uniSortBy === 'score-desc') return b.maxBenchmark - a.maxBenchmark;
      if (uniSortBy === 'majors-desc') return (b.majors?.length || 0) - (a.majors?.length || 0);
      return 0;
    });
  }, [
    enrichedUniversities,
    selectedUniversityType,
    selectedProvinceGroup,
    selectedScoreRange,
    selectedTuitionRange,
    searchKeyword,
    uniSortBy
  ]);

  const handleClearKeyword = () => {
    setSearchKeyword('');
    if (onClearQuery) onClearQuery();
  };

  const handleResetMajorFilters = () => {
    setSearchKeyword('');
    setSelectedGroup('');
    setSelectedCombo('');
    setMajorSortBy('default');
    if (onClearQuery) onClearQuery();
  };

  const handleResetUniFilters = () => {
    setSearchKeyword('');
    setSelectedUniversityType('all');
    setSelectedProvinceGroup('all');
    setSelectedScoreRange('all');
    setSelectedTuitionRange('all');
    setUniSortBy('default');
    if (onClearQuery) onClearQuery();
  };

  const handleBookmark = (e, m) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (!m?.id) return;

    const alreadySaved = savedMajorIds.includes(m.id);

    if (onToggleBookmarkMajor) {
      onToggleBookmarkMajor(m);
    } else if (onBookmarkMajor) {
      onBookmarkMajor(m);
    }

    setLocalSavedIds((prev) =>
      prev.includes(m.id) ? prev.filter((id) => id !== m.id) : [...prev, m.id]
    );

    if (alreadySaved && onToggleBookmarkMajor) {
      showToast(`Đã bỏ "${m.ten_nganh}" khỏi danh sách so sánh`);
    } else {
      showToast(`✓ Đã lưu "${m.ten_nganh}" vào danh sách so sánh`);
    }
  };

  const handleOpenCinema = (m, episodeIdx = 0) => {
    setActiveVideoMajor(m);
    setActiveEpisodeIndex(episodeIdx);
  };

  const handleSetRoadmap = (majorName) => {
    if (onSelectForRoadmap) onSelectForRoadmap(majorName, '');
    if (onNavigate) onNavigate('roadmap');
  };

  const videosForActiveMajor = activeVideoMajor ? getVideosForMajor(activeVideoMajor.id) : [];
  const currentVideo = videosForActiveMajor[activeEpisodeIndex] || videosForActiveMajor[0];

  const directYoutubeUrl = currentVideo
    ? currentVideo.youtubeUrl ||
      (currentVideo.youtubeId
        ? `https://www.youtube.com/watch?v=${currentVideo.youtubeId}`
        : `https://www.youtube.com/results?search_query=${encodeURIComponent(
            `${activeVideoMajor?.ten_nganh || ''} một ngày làm việc hướng nghiệp thực tế`
          )}`)
    : '#';

  const hasActiveMajorFilters = Boolean(
    searchKeyword.trim() || selectedGroup || selectedCombo || majorSortBy !== 'default'
  );
  const hasActiveUniFilters = Boolean(
    searchKeyword.trim() ||
      selectedUniversityType !== 'all' ||
      selectedProvinceGroup !== 'all' ||
      selectedScoreRange !== 'all' ||
      selectedTuitionRange !== 'all' ||
      uniSortBy !== 'default'
  );

  return (
    <div className="tab-pane-animate">
      {/* Non-blocking Toast Notification */}
      {toastMsg &&
        createPortal(
          <div className="search-toast-pill" role="status" aria-live="polite">
            <Sparkles size={15} color="#34D399" />
            <span>{toastMsg}</span>
          </div>,
          document.body
        )}

      {/* Header Banner */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div className="pill-badge" style={{ marginBottom: '10px' }}>
          🔍 BƯỚC 2 / 4 • TRA CỨU NGÀNH &amp; TRƯỜNG
        </div>
        <h1 className="view-hero-h1" style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.35rem)', marginBottom: '8px' }}>
          Tra cứu ngành học, trường Đại học &amp; khối thi
        </h1>
        <p style={{ color: '#64748B', maxWidth: '64ch', margin: '0 auto', fontSize: '0.96rem' }}>
          Tìm nhanh {MAJORS_DATA.length} ngành đào tạo, {UNIVERSITIES_DATA.length} trường Đại học và Học viện ở cả 3 miền (gõ có dấu hay không dấu đều được), kèm video chia sẻ thực tế từ người trong nghề.
        </p>
      </div>

      {/* =========================================================================
          GLOBAL REGIONAL BAR (THANH CHỌN KHU VỰC CỐ ĐỊNH XUYÊN SUỐT)
          ========================================================================= */}
      <div
        className="search-region-card"
        style={{
          background: '#FFFFFF',
          borderRadius: '22px',
          border: '1.5px solid #E0E7FF',
          padding: '16px 20px',
          marginBottom: '24px',
          boxShadow: '0 4px 20px -4px rgba(79, 70, 229, 0.08)'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: '800',
                color: '#1E293B',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              📍 Chọn khu vực muốn theo học:
            </span>
            <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: '600' }}>
              (Lọc danh sách trường và ưu tiên các ngành có đào tạo tại khu vực đó)
            </span>
          </div>

          {selectedProvinceGroup !== 'all' && (
            <button
              type="button"
              onClick={() => setSelectedProvinceGroup('all')}
              style={{
                fontSize: '0.78rem',
                fontWeight: '700',
                color: '#4F46E5',
                background: '#EEF2FF',
                border: '1px solid #C7D2FE',
                borderRadius: '999px',
                padding: '4px 12px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>✕ Xem lại tất cả khu vực</span>
            </button>
          )}
        </div>

        {/* 10 Region Pills */}
        <div
          className="touch-chip-scroller"
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '4px'
          }}
        >
          {PROVINCE_GROUPS.map((prov) => {
            const isSelected = selectedProvinceGroup === prov.id;
            const uniCount =
              prov.id === 'all'
                ? enrichedUniversities.length
                : enrichedUniversities.filter((u) => u.provinceGroup === prov.id).length;

            return (
              <button
                key={prov.id}
                type="button"
                onClick={() => setSelectedProvinceGroup(prov.id)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '12px',
                  fontSize: '0.82rem',
                  fontWeight: isSelected ? '800' : '650',
                  background: isSelected
                    ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)'
                    : '#F8FAFC',
                  color: isSelected ? '#FFFFFF' : '#334155',
                  border: isSelected ? '1.5px solid #4338CA' : '1px solid #CBD5E1',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: isSelected ? '0 4px 14px rgba(79, 70, 229, 0.3)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>{prov.label}</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    padding: '1px 6px',
                    borderRadius: '999px',
                    background: isSelected ? 'rgba(255, 255, 255, 0.25)' : '#E2E8F0',
                    color: isSelected ? '#FFFFFF' : '#475569'
                  }}
                >
                  {uniCount} trường
                </span>
              </button>
            );
          })}
        </div>

        {/* Regional Hub Spotlight Banner (When a specific region is active) */}
        {selectedProvinceGroup !== 'all' && (
          <div
            style={{
              marginTop: '14px',
              padding: '14px 16px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)',
              border: '1.5px solid #C7D2FE',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.96rem',
                  fontWeight: '800',
                  color: '#1E293B',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>🎯</span>
                <span>Khu vực đang chọn: {activeProvinceObj?.label}</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#475569', marginTop: '3px' }}>
                Có <strong>{regionalUnisCount} trường Đại học / Học viện</strong> và{' '}
                <strong>{regionalMajorsCount} ngành học tiêu biểu</strong> đang tuyển sinh tại khu vực này.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setActiveTab('truong')}
                style={{
                  padding: '7px 14px',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  background: activeTab === 'truong' ? '#4F46E5' : '#FFFFFF',
                  color: activeTab === 'truong' ? '#FFFFFF' : '#4338CA',
                  border: '1.5px solid #818CF8',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <Building2 size={14} />
                <span>Xem {regionalUnisCount} trường tại đây</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('nganh')}
                style={{
                  padding: '7px 14px',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  background: activeTab === 'nganh' ? '#4F46E5' : '#FFFFFF',
                  color: activeTab === 'nganh' ? '#FFFFFF' : '#4338CA',
                  border: '1.5px solid #818CF8',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <BookOpen size={14} />
                <span>Xem {regionalMajorsCount} ngành tại đây</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Tab Navigation */}
      <div
        className="search-subtabs-grid"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '26px',
          flexWrap: 'wrap'
        }}
      >
        <button
          type="button"
          className="search-subtab-btn"
          onClick={() => setActiveTab('nganh')}
          style={{
            padding: '10px 20px',
            borderRadius: '999px',
            border: activeTab === 'nganh' ? '2px solid #4F46E5' : '1.5px solid #CBD5E1',
            background:
              activeTab === 'nganh'
                ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)'
                : '#FFFFFF',
            color: activeTab === 'nganh' ? '#FFFFFF' : '#1E293B',
            fontWeight: '700',
            fontSize: '0.92rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow:
              activeTab === 'nganh'
                ? '0 8px 20px -4px rgba(79, 70, 229, 0.35)'
                : 'var(--shadow-sm)',
            transition: 'all 0.2s ease'
          }}
        >
          <BookOpen size={17} style={{ flexShrink: 0 }} />
          <span>Ngành đào tạo ({filteredMajors.length})</span>
        </button>

        <button
          type="button"
          className="search-subtab-btn"
          onClick={() => setActiveTab('truong')}
          style={{
            padding: '10px 20px',
            borderRadius: '999px',
            border: activeTab === 'truong' ? '2px solid #4F46E5' : '1.5px solid #CBD5E1',
            background:
              activeTab === 'truong'
                ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)'
                : '#FFFFFF',
            color: activeTab === 'truong' ? '#FFFFFF' : '#1E293B',
            fontWeight: '700',
            fontSize: '0.92rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow:
              activeTab === 'truong'
                ? '0 8px 20px -4px rgba(79, 70, 229, 0.35)'
                : 'var(--shadow-sm)',
            transition: 'all 0.2s ease'
          }}
        >
          <Building2 size={17} style={{ flexShrink: 0 }} />
          <span>Trường Đại học ({filteredUniversities.length})</span>
        </button>

        <button
          type="button"
          className="search-subtab-btn"
          onClick={() => setActiveTab('video')}
          style={{
            padding: '10px 20px',
            borderRadius: '999px',
            border: activeTab === 'video' ? '2px solid #E11D48' : '1.5px solid #CBD5E1',
            background:
              activeTab === 'video'
                ? 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)'
                : '#FFFFFF',
            color: activeTab === 'video' ? '#FFFFFF' : '#1E293B',
            fontWeight: '700',
            fontSize: '0.92rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow:
              activeTab === 'video'
                ? '0 8px 20px -4px rgba(225, 29, 72, 0.35)'
                : 'var(--shadow-sm)',
            transition: 'all 0.2s ease'
          }}
        >
          <Video size={17} style={{ flexShrink: 0 }} />
          <span>Video nghề thực tế</span>
        </button>

        <button
          type="button"
          className="search-subtab-btn"
          onClick={() => setActiveTab('tohop')}
          style={{
            padding: '10px 20px',
            borderRadius: '999px',
            border: activeTab === 'tohop' ? '2px solid #4F46E5' : '1.5px solid #CBD5E1',
            background:
              activeTab === 'tohop'
                ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)'
                : '#FFFFFF',
            color: activeTab === 'tohop' ? '#FFFFFF' : '#1E293B',
            fontWeight: '700',
            fontSize: '0.92rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow:
              activeTab === 'tohop'
                ? '0 8px 20px -4px rgba(79, 70, 229, 0.35)'
                : 'var(--shadow-sm)',
            transition: 'all 0.2s ease'
          }}
        >
          <Layers size={17} style={{ flexShrink: 0 }} />
          <span>Khối &amp; thi riêng ({COMBINATIONS_DATA.length})</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: NGÀNH ĐÀO TẠO (MAJOR DIRECTORY)
          ========================================================================= */}
      {activeTab === 'nganh' && (
        <>
          {/* Smart Filter & Sort Bar */}
          <div
            className="search-filter-card"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E0E7FF',
              borderRadius: '24px',
              padding: '22px',
              boxShadow: 'var(--shadow-card)',
              marginBottom: '24px'
            }}
          >
            <div
              className="search-filter-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '16px'
              }}
            >
              {/* Search Input */}
              <div>
                <label
                  htmlFor="major-search-input"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: '800',
                    color: '#1E293B',
                    marginBottom: '8px'
                  }}
                >
                  🔍 Từ khóa tìm kiếm (có dấu / không dấu)
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1.5px solid #CBD5E1',
                    borderRadius: '14px',
                    padding: '10px 14px',
                    background: '#FFFDF9'
                  }}
                >
                  <Search size={18} color="#64748B" style={{ marginRight: '8px', flexShrink: 0 }} />
                  <input
                    id="major-search-input"
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="VD: Vi mạch, Marketing, Y khoa, BKA, 7480201..."
                    style={{
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      fontSize: '0.9rem',
                      color: '#1E293B',
                      background: 'transparent'
                    }}
                  />
                  {searchKeyword && (
                    <button
                      type="button"
                      onClick={handleClearKeyword}
                      title="Xóa từ khóa"
                      style={{
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        color: '#64748B',
                        display: 'flex',
                        padding: '2px'
                      }}
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Filter by Group (100% synced with MAJORS_DATA) */}
              <div>
                <label
                  htmlFor="major-group-select"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: '800',
                    color: '#1E293B',
                    marginBottom: '8px'
                  }}
                >
                  📂 Nhóm lĩnh vực ({majorGroupsWithCount.length} nhóm)
                </label>
                <select
                  id="major-group-select"
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '14px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    background: '#FFFDF9',
                    color: '#1E293B',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">Tất cả nhóm ngành ({MAJORS_DATA.length})</option>
                  {majorGroupsWithCount.map((g) => (
                    <option key={g.name} value={g.name}>
                      {g.name} ({g.count} ngành)
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter by Combo (All 18 combinations) */}
              <div>
                <label
                  htmlFor="major-combo-select"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: '800',
                    color: '#1E293B',
                    marginBottom: '8px'
                  }}
                >
                  🧩 Khối / Tổ hợp môn
                </label>
                <select
                  id="major-combo-select"
                  value={selectedCombo}
                  onChange={(e) => setSelectedCombo(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '14px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    background: '#FFFDF9',
                    color: '#1E293B',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">Tất cả tổ hợp xét tuyển</option>
                  {allCombinations.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.subjects ? `${c.code} — ${c.subjects}` : `Khối ${c.code}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Order */}
              <div>
                <label
                  htmlFor="major-sort-select"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: '800',
                    color: '#1E293B',
                    marginBottom: '8px'
                  }}
                >
                  <SlidersHorizontal size={13} style={{ verticalAlign: '-2px', marginRight: '4px' }} />
                  Sắp xếp ưu tiên
                </label>
                <select
                  id="major-sort-select"
                  value={majorSortBy}
                  onChange={(e) => setMajorSortBy(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '14px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    background: '#FFFDF9',
                    color: '#1E293B',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  <option value="default">Mặc định (Ưu tiên khu vực đang chọn)</option>
                  <option value="score-asc">Điểm chuẩn: Thấp → Cao (Vừa sức trước)</option>
                  <option value="score-desc">Điểm chuẩn: Cao → Thấp</option>
                  <option value="ai-safe">Ít chịu ảnh hưởng bởi AI nhất</option>
                  <option value="salary-desc">Lương khởi điểm: Cao → Thấp</option>
                </select>
              </div>
            </div>

            {/* Quick Suggestion Chips + Active Filter Status */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '16px',
                paddingTop: '14px',
                borderTop: '1px dashed #E2E8F0'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.76rem', fontWeight: '800', color: '#64748B' }}>
                  Gợi ý nhanh:
                </span>
                {QUICK_MAJOR_TAGS.map((tag) => {
                  const isTagActive =
                    normalizeVN(searchKeyword) === normalizeVN(tag.query);
                  return (
                    <button
                      key={tag.label}
                      type="button"
                      onClick={() =>
                        setSearchKeyword(isTagActive ? '' : tag.query)
                      }
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: isTagActive ? '800' : '650',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        border: isTagActive ? '1.5px solid #4F46E5' : '1px solid #E2E8F0',
                        background: isTagActive ? '#EEF2FF' : '#F8FAFC',
                        color: isTagActive ? '#4338CA' : '#475569',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {tag.label}
                    </button>
                  );
                })}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.8rem', color: '#475569', fontWeight: '700' }}>
                  Hiển thị <strong style={{ color: '#4F46E5' }}>{filteredMajors.length}</strong> /{' '}
                  {MAJORS_DATA.length} ngành
                </span>

                {hasActiveMajorFilters && (
                  <button
                    type="button"
                    onClick={handleResetMajorFilters}
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: '750',
                      color: '#E11D48',
                      background: '#FFF1F2',
                      border: '1px solid #FECDD3',
                      borderRadius: '999px',
                      padding: '4px 12px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <RotateCcw size={12} />
                    <span>Đặt lại bộ lọc</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Cross-tab Hint Banner if user typed a University keyword while in Majors tab */}
          {searchKeyword.trim() && filteredUniversities.length > 0 && (
            <div
              style={{
                marginBottom: '20px',
                padding: '10px 16px',
                borderRadius: '14px',
                background: '#F0F9FF',
                border: '1px solid #BAE6FD',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px',
                fontSize: '0.84rem',
                color: '#0C4A6E'
              }}
            >
              <span>
                🏛️ Tìm thấy <strong>{filteredUniversities.length} trường Đại học</strong> cũng khớp với từ khóa{' '}
                <strong>&ldquo;{searchKeyword.trim()}&rdquo;</strong>
              </span>
              <button
                type="button"
                onClick={() => setActiveTab('truong')}
                style={{
                  background: '#0284C7',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '5px 14px',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span>Chuyển sang xem {filteredUniversities.length} Trường</span>
                <ArrowRight size={13} />
              </button>
            </div>
          )}

          {/* Empty State for Majors */}
          {filteredMajors.length === 0 ? (
            <div
              style={{
                background: '#FFFFFF',
                border: '1.5px dashed #CBD5E1',
                borderRadius: '24px',
                padding: '44px 24px',
                textAlign: 'center',
                marginBottom: '28px'
              }}
            >
              <div style={{ fontSize: '2.6rem', marginBottom: '10px' }}>🔎</div>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '6px' }}>
                Không tìm thấy ngành đào tạo nào khớp với bộ lọc hiện tại
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', maxWidth: '52ch', margin: '0 auto 18px' }}>
                Bạn hãy thử gõ từ khóa ngắn gọn hơn (VD: <em>Vi mạch, Y khoa, Marketing, Logistics</em>) hoặc xóa bớt điều kiện lọc nhóm ngành / tổ hợp môn nhé.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn-edtech-primary"
                  style={{ fontSize: '0.86rem', padding: '10px 20px' }}
                  onClick={handleResetMajorFilters}
                >
                  <RotateCcw size={15} />
                  <span>Xem lại toàn bộ {MAJORS_DATA.length} ngành</span>
                </button>

                {filteredUniversities.length > 0 && (
                  <button
                    type="button"
                    className="btn-edtech-secondary"
                    style={{ fontSize: '0.86rem', padding: '10px 20px' }}
                    onClick={() => setActiveTab('truong')}
                  >
                    <Building2 size={15} />
                    <span>Xem {filteredUniversities.length} Trường khớp từ khóa →</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Majors Grid (Mobile-safe responsive minmax) */
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
                gap: '22px'
              }}
            >
              {filteredMajors.map((m) => {
                const isSaved = savedMajorIds.includes(m.id);
                const majorVideos = getVideosForMajor(m.id);
                const featuredVideo = majorVideos[0];
                const collegesForMajor = getCollegesForMajor(m.id, 4);
                const isOfferedInRegion = regionalMajorIds ? regionalMajorIds.has(m.id) : false;

                return (
                  <div
                    key={m.id}
                    className="card-box major-bento-card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                    onClick={() => setSelectedMajorModal(m)}
                  >
                    <div>
                      {/* Top Row: Group Pill + Icon */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '10px'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.73rem',
                            fontWeight: '800',
                            padding: '4px 10px',
                            borderRadius: '999px',
                            background: '#FEF3C7',
                            color: '#B45309',
                            border: '1px solid #FDE68A'
                          }}
                        >
                          {m.nhom_nganh}
                        </span>
                        <span style={{ fontSize: '1.8rem' }}>{m.icon}</span>
                      </div>

                      <h3
                        style={{
                          fontSize: '1.2rem',
                          marginBottom: '4px',
                          color: '#1E293B',
                          fontWeight: '800'
                        }}
                      >
                        {m.ten_nganh}
                      </h3>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          color: '#64748B',
                          fontWeight: '600',
                          marginBottom: '10px'
                        }}
                      >
                        Mã ngành:{' '}
                        <span style={{ color: '#4F46E5', fontWeight: '700' }}>{m.ma_nganh}</span>
                      </div>

                      {/* DEMAND & AI RISK BADGES */}
                      <div
                        style={{
                          display: 'flex',
                          gap: '6px',
                          flexWrap: 'wrap',
                          marginBottom: '12px'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: '800',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            background: '#FEF2F2',
                            color: '#DC2626',
                            border: '1px solid #FECACA'
                          }}
                        >
                          🔥 Nhu cầu tuyển dụng: {m.demandLevel || 'Cao'}
                        </span>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: '800',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            background: '#F0FDF4',
                            color: '#16A34A',
                            border: '1px solid #BBF7D0'
                          }}
                        >
                          🤖 Ảnh hưởng từ AI:{' '}
                          {m.aiImpact && typeof m.aiImpact === 'object' && m.aiImpact.riskPercentage
                            ? `${m.aiRiskLevel || m.aiImpact.riskLevel} (${m.aiImpact.riskPercentage}%)`
                            : m.aiRiskLevel || 'Thấp'}
                        </span>
                      </div>

                      {/* VIDEO BANNER */}
                      {featuredVideo && (
                        <div
                          className="major-card-video-banner"
                          title="Bấm để xem video thực tế về ngành này"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenCinema(m, 0);
                          }}
                        >
                          <div className="video-banner-top-row">
                            <span className="video-banner-pill">
                              🎬 {featuredVideo.type || '1 Ngày Làm Nghề'}
                            </span>
                            <span className="video-banner-action-badge">
                              {featuredVideo.duration || '09:15'} • Xem ngay ▶
                            </span>
                          </div>
                          <span className="video-banner-title">{featuredVideo.title}</span>
                        </div>
                      )}

                      <p
                        style={{
                          fontSize: '0.86rem',
                          color: '#64748B',
                          lineHeight: '1.5',
                          marginBottom: '14px'
                        }}
                      >
                        {m.mo_ta}
                      </p>

                      {/* Exam Combination Pills (clickable quick filter) */}
                      <div
                        style={{
                          display: 'flex',
                          gap: '6px',
                          flexWrap: 'wrap',
                          marginBottom: '14px'
                        }}
                      >
                        {(m.to_hop || []).map((th) => {
                          const isComboSelected = selectedCombo === th;
                          return (
                            <button
                              key={th}
                              type="button"
                              title={`Lọc các ngành xét khối ${th}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCombo(isComboSelected ? '' : th);
                              }}
                              style={{
                                padding: '3px 9px',
                                fontSize: '0.74rem',
                                fontWeight: '800',
                                borderRadius: '999px',
                                background: isComboSelected ? '#0284C7' : '#F0F9FF',
                                color: isComboSelected ? '#FFFFFF' : '#0369A1',
                                border: '1px solid #BAE6FD',
                                cursor: 'pointer'
                              }}
                            >
                              {th}
                            </button>
                          );
                        })}
                      </div>

                      {/* Benchmark & Tuition Box */}
                      <div
                        style={{
                          background: '#F8FAFC',
                          padding: '12px 14px',
                          borderRadius: '14px',
                          border: '1px solid #E2E8F0',
                          marginBottom: '14px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: '8px'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: '700' }}>
                            ĐIỂM CHUẨN THAM KHẢO
                          </div>
                          <div style={{ fontSize: '0.98rem', fontWeight: '900', color: '#4F46E5' }}>
                            {m.diem_tb}
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: '700' }}>
                            HỌC PHÍ DỰ KIẾN
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#1E293B' }}>
                            {m.hoc_phi}
                          </div>
                        </div>
                      </div>

                      {/* Colleges offering this major (Prioritized by Selected Region) */}
                      {collegesForMajor.length > 0 && (
                        <div
                          style={{
                            marginBottom: '14px',
                            background: '#F8FAFC',
                            borderRadius: '12px',
                            padding: '10px 12px',
                            border: '1px solid #E2E8F0'
                          }}
                        >
                          <div
                            style={{
                              fontSize: '0.74rem',
                              fontWeight: '800',
                              color: '#475569',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginBottom: '8px'
                            }}
                          >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                              <Building2 size={13} color="#4F46E5" />
                              <span>
                                Trường tiêu biểu
                                {selectedProvinceGroup !== 'all'
                                  ? ` (ưu tiên ${activeProvinceObj?.label.replace(/^[^\s]+\s*/, '')}):`
                                  : ':'}
                              </span>
                            </span>
                            {selectedProvinceGroup !== 'all' && isOfferedInRegion && (
                              <span
                                style={{
                                  fontSize: '0.66rem',
                                  fontWeight: '800',
                                  color: '#047857',
                                  background: '#ECFDF5',
                                  border: '1px solid #A7F3D0',
                                  padding: '1px 6px',
                                  borderRadius: '4px'
                                }}
                              >
                                ✓ Có đào tạo
                              </span>
                            )}
                          </div>

                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {collegesForMajor.map((uni) => (
                              <button
                                key={uni.id}
                                type="button"
                                title={`Bấm để xem chi tiết trường ${uni.name} (${uni.code})`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedUniModal(uni);
                                }}
                                style={{
                                  fontSize: '0.73rem',
                                  fontWeight: uni.isRegional ? '850' : '650',
                                  padding: '4px 9px',
                                  borderRadius: '8px',
                                  background: uni.isRegional ? '#EEF2FF' : '#FFFFFF',
                                  color: uni.isRegional ? '#4338CA' : '#334155',
                                  border: uni.isRegional
                                    ? '1.5px solid #818CF8'
                                    : '1px solid #CBD5E1',
                                  cursor: 'pointer',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  transition: 'all 0.15s ease'
                                }}
                              >
                                <span>{uni.isRegional ? '📍' : '🏛️'}</span>
                                <span>{uni.shortName || uni.code}</span>
                                <span
                                  style={{
                                    fontSize: '0.68rem',
                                    opacity: 0.85,
                                    color: uni.isRegional ? '#4338CA' : '#64748B'
                                  }}
                                >
                                  ({uni.minBenchmark}đ+)
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Footer: 3 Action Buttons */}
                    <div
                      style={{
                        borderTop: '1px solid #E2E8F0',
                        paddingTop: '14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '8px',
                        flexWrap: 'wrap'
                      }}
                    >
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
                          title={isSaved ? 'Bấm để bỏ lưu so sánh' : 'Lưu vào danh sách so sánh'}
                          style={{
                            padding: '7px 12px',
                            fontSize: '0.8rem',
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

                        <span
                          style={{
                            fontSize: '0.83rem',
                            fontWeight: '750',
                            color: '#4F46E5',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px'
                          }}
                        >
                          Chi tiết <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* =========================================================================
          TAB 2: TRƯỜNG ĐẠI HỌC 3 MIỀN (EQUAL HEIGHT & 3D FLIP CARDS)
          ========================================================================= */}
      {activeTab === 'truong' && (
        <div>
          {/* Smart Multi-Dimensional University Filters + Dedicated Search Bar */}
          <div
            className="search-filter-card"
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '22px',
              border: '1px solid #E0E7FF',
              boxShadow: 'var(--shadow-card)',
              marginBottom: '24px'
            }}
          >
            {/* Header info & reset */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '1px solid #F1F5F9'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1E293B' }}>
                  🏛️ Danh sách {UNIVERSITIES_DATA.length} trường Đại học &amp; Học viện
                </span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '800',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    background: '#EEF2FF',
                    color: '#4F46E5',
                    border: '1px solid #C7D2FE'
                  }}
                >
                  Tìm thấy {filteredUniversities.length} trường
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {flippedUniIds.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setFlippedUniIds([])}
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: '700',
                      color: '#4338CA',
                      background: '#EEF2FF',
                      border: '1px solid #C7D2FE',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      cursor: 'pointer'
                    }}
                  >
                    ↩ Úp lại {flippedUniIds.length} thẻ đang lật
                  </button>
                )}

                {hasActiveUniFilters && (
                  <button
                    type="button"
                    onClick={handleResetUniFilters}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      color: '#E11D48',
                      background: '#FFE4E6',
                      border: '1px solid #FECDD3',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <RotateCcw size={12} />
                    <span>Đặt lại tất cả bộ lọc</span>
                  </button>
                )}
              </div>
            </div>

            {/* Search Input + Sort Row inside Universities Tab */}
            <div
              className="search-filter-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '14px',
                marginBottom: '18px'
              }}
            >
              <div>
                <label
                  htmlFor="uni-search-input"
                  style={{
                    display: 'block',
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    color: '#475569',
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                  }}
                >
                  🔍 Tìm theo Tên trường, Mã trường, Tỉnh thành hoặc Ngành học:
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1.5px solid #CBD5E1',
                    borderRadius: '14px',
                    padding: '10px 14px',
                    background: '#FFFDF9'
                  }}
                >
                  <Search size={18} color="#64748B" style={{ marginRight: '8px', flexShrink: 0 }} />
                  <input
                    id="uni-search-input"
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="VD: Bách Khoa, BKA, NEU, QSB, Thái Nguyên, Y khoa, Vi mạch..."
                    style={{
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      fontSize: '0.9rem',
                      color: '#1E293B',
                      background: 'transparent'
                    }}
                  />
                  {searchKeyword && (
                    <button
                      type="button"
                      onClick={handleClearKeyword}
                      title="Xóa từ khóa"
                      style={{
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        color: '#64748B',
                        display: 'flex',
                        padding: '2px'
                      }}
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="uni-sort-select"
                  style={{
                    display: 'block',
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    color: '#475569',
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                  }}
                >
                  <SlidersHorizontal size={13} style={{ verticalAlign: '-2px', marginRight: '4px' }} />
                  Sắp xếp danh sách trường:
                </label>
                <select
                  id="uni-sort-select"
                  value={uniSortBy}
                  onChange={(e) => setUniSortBy(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '14px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    background: '#FFFDF9',
                    color: '#1E293B',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  <option value="default">Mặc định (Trường trọng điểm → Khu vực)</option>
                  <option value="score-asc">Điểm chuẩn: Thấp → Cao (Vừa sức trước)</option>
                  <option value="score-desc">Điểm chuẩn: Cao → Thấp (Top đầu)</option>
                  <option value="majors-desc">Số ngành tiêu biểu nhiều nhất</option>
                </select>
              </div>
            </div>

            {/* 1. University Type Filter */}
            <div style={{ marginBottom: '16px' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  color: '#64748B',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  letterSpacing: '0.04em'
                }}
              >
                🏫 Loại hình trường:
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {UNIVERSITY_TYPES.map((tp) => (
                  <button
                    key={tp.id}
                    type="button"
                    onClick={() => setSelectedUniversityType(tp.id)}
                    style={{
                      padding: '7px 14px',
                      borderRadius: '999px',
                      border:
                        selectedUniversityType === tp.id
                          ? '2px solid #4F46E5'
                          : '1px solid #CBD5E1',
                      background: selectedUniversityType === tp.id ? '#EEF2FF' : '#FFFFFF',
                      color: selectedUniversityType === tp.id ? '#4338CA' : '#475569',
                      fontWeight: selectedUniversityType === tp.id ? '800' : '600',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {tp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Score & Tuition Filter Chips */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '16px',
                paddingTop: '14px',
                borderTop: '1px dashed #E2E8F0'
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    color: '#64748B',
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                  }}
                >
                  🎯 Khoảng điểm chuẩn tham khảo:
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {SCORE_RANGES.map((sc) => (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setSelectedScoreRange(sc.id)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        fontWeight: selectedScoreRange === sc.id ? '800' : '600',
                        background: selectedScoreRange === sc.id ? '#059669' : '#F8FAFC',
                        color: selectedScoreRange === sc.id ? '#FFFFFF' : '#475569',
                        border:
                          selectedScoreRange === sc.id
                            ? '1.5px solid #059669'
                            : '1px solid #CBD5E1',
                        cursor: 'pointer'
                      }}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    color: '#64748B',
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                  }}
                >
                  💳 Mức học phí dự kiến:
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {TUITION_RANGES.map((tu) => (
                    <button
                      key={tu.id}
                      type="button"
                      onClick={() => setSelectedTuitionRange(tu.id)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        fontWeight: selectedTuitionRange === tu.id ? '800' : '600',
                        background: selectedTuitionRange === tu.id ? '#D97706' : '#F8FAFC',
                        color: selectedTuitionRange === tu.id ? '#FFFFFF' : '#475569',
                        border:
                          selectedTuitionRange === tu.id
                            ? '1.5px solid #D97706'
                            : '1px solid #CBD5E1',
                        cursor: 'pointer'
                      }}
                    >
                      {tu.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cross-tab Hint Banner if user typed a Major keyword while in Universities tab */}
          {searchKeyword.trim() && filteredMajors.length > 0 && (
            <div
              style={{
                marginBottom: '20px',
                padding: '10px 16px',
                borderRadius: '14px',
                background: '#EEF2FF',
                border: '1px solid #C7D2FE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px',
                fontSize: '0.84rem',
                color: '#312E81'
              }}
            >
              <span>
                📚 Tìm thấy <strong>{filteredMajors.length} ngành đào tạo</strong> khớp với từ khóa{' '}
                <strong>&ldquo;{searchKeyword.trim()}&rdquo;</strong>
              </span>
              <button
                type="button"
                onClick={() => setActiveTab('nganh')}
                style={{
                  background: '#4F46E5',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '5px 14px',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span>Xem chi tiết {filteredMajors.length} Ngành</span>
                <ArrowRight size={13} />
              </button>
            </div>
          )}

          {/* Empty State for Universities */}
          {filteredUniversities.length === 0 ? (
            <div
              style={{
                background: '#FFFFFF',
                border: '1.5px dashed #CBD5E1',
                borderRadius: '24px',
                padding: '44px 24px',
                textAlign: 'center',
                marginBottom: '28px'
              }}
            >
              <div style={{ fontSize: '2.6rem', marginBottom: '10px' }}>🏛️</div>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '6px' }}>
                Không có trường Đại học nào khớp đồng thời các bộ lọc đang chọn
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', maxWidth: '54ch', margin: '0 auto 18px' }}>
                Có thể bạn đang kết hợp khu vực địa lý với mức điểm chuẩn / học phí chưa có trường tương ứng. Hãy nới rộng mức điểm hoặc đặt lại bộ lọc nhé!
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn-edtech-primary"
                  style={{ fontSize: '0.86rem', padding: '10px 20px' }}
                  onClick={handleResetUniFilters}
                >
                  <RotateCcw size={15} />
                  <span>Đặt lại tất cả bộ lọc trường</span>
                </button>

                {filteredMajors.length > 0 && (
                  <button
                    type="button"
                    className="btn-edtech-secondary"
                    style={{ fontSize: '0.86rem', padding: '10px 20px' }}
                    onClick={() => setActiveTab('nganh')}
                  >
                    <BookOpen size={15} />
                    <span>Xem {filteredMajors.length} Ngành khớp từ khóa →</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Universities Bento Grid with 3D Flip Cards */
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 345px), 1fr))',
                gap: '24px'
              }}
            >
              {filteredUniversities.map((u) => {
                const isFlipped = flippedUniIds.includes(u.id);

                return (
                  <div key={u.id} className="uni-flip-card-wrapper">
                    <div className={`uni-flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                      {/* ===== FRONT FACE ===== */}
                      <div className="uni-card-face uni-card-front">
                        <div>
                          {/* University Brand Header */}
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              marginBottom: '14px'
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                width: '100%'
                              }}
                            >
                              <UniversityLogo
                                code={u.code}
                                name={u.name}
                                shortName={u.shortName}
                                website={u.website}
                                logoUrl={u.logoUrl}
                                size={52}
                              />
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    flexWrap: 'wrap',
                                    marginBottom: '5px'
                                  }}
                                >
                                  <h3
                                    style={{
                                      fontSize: '1.04rem',
                                      margin: 0,
                                      color: '#1E293B',
                                      fontWeight: '800',
                                      lineHeight: '1.3'
                                    }}
                                  >
                                    {u.name}
                                  </h3>
                                  <span
                                    style={{
                                      fontSize: '0.68rem',
                                      fontWeight: '900',
                                      padding: '2px 8px',
                                      borderRadius: '999px',
                                      background: '#EEF2FF',
                                      color: '#4338CA',
                                      border: '1px solid #C7D2FE',
                                      whiteSpace: 'nowrap'
                                    }}
                                  >
                                    MÃ: {u.code}
                                  </span>
                                </div>

                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontSize: '0.78rem',
                                    color: '#64748B',
                                    flexWrap: 'wrap'
                                  }}
                                >
                                  <span
                                    style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '3px',
                                      whiteSpace: 'nowrap',
                                      background: '#F0F9FF',
                                      color: '#0369A1',
                                      padding: '2px 8px',
                                      borderRadius: '6px',
                                      fontWeight: '700'
                                    }}
                                  >
                                    <MapPin size={12} color="#0284C7" />
                                    {u.city}
                                  </span>
                                  <span
                                    style={{
                                      fontWeight: '700',
                                      color: '#059669',
                                      background: '#ECFDF5',
                                      padding: '2px 8px',
                                      borderRadius: '6px',
                                      whiteSpace: 'nowrap'
                                    }}
                                  >
                                    {u.type}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Benchmarks & Tuition Badge */}
                          <div
                            style={{
                              background: '#FAF5FF',
                              border: '1px solid #E9D5FF',
                              borderRadius: '14px',
                              padding: '11px 13px',
                              marginBottom: '12px'
                            }}
                          >
                            <div
                              style={{
                                fontSize: '0.83rem',
                                color: '#6B21A8',
                                fontWeight: '700',
                                marginBottom: '4px'
                              }}
                            >
                              🎯 Điểm chuẩn tham khảo: <strong>{u.benchmarks}</strong>
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#475569' }}>
                              💳 Học phí dự kiến: <strong>{u.tuition}</strong>
                            </div>
                          </div>

                          {/* Highlights */}
                          <p
                            style={{
                              fontSize: '0.84rem',
                              color: '#334155',
                              lineHeight: '1.5',
                              margin: '0 0 12px'
                            }}
                          >
                            {u.highlight}
                          </p>

                          {/* Top Majors Tags (100% resolved clean Vietnamese labels) */}
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '6px',
                              marginBottom: '14px'
                            }}
                          >
                            {u.resolvedMajors.slice(0, 5).map((rm) => (
                              <button
                                key={rm.rawSlug}
                                type="button"
                                title={`Bấm để xem thông tin chi tiết ngành ${rm.label}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (rm.majorObj) {
                                    setSelectedMajorModal(rm.majorObj);
                                  } else {
                                    setSearchKeyword(rm.label);
                                    setActiveTab('nganh');
                                  }
                                }}
                                style={{
                                  fontSize: '0.73rem',
                                  fontWeight: '750',
                                  padding: '4px 9px',
                                  borderRadius: '8px',
                                  background: '#FFFFFF',
                                  color: '#1E293B',
                                  border: '1px solid #CBD5E1',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  cursor: 'pointer',
                                  transition: 'all 0.15s ease'
                                }}
                              >
                                <span>{rm.icon}</span>
                                <span>{rm.label}</span>
                                <span
                                  style={{
                                    fontSize: '0.62rem',
                                    color: '#4F46E5',
                                    fontWeight: '900'
                                  }}
                                >
                                  ↗
                                </span>
                              </button>
                            ))}
                            {u.resolvedMajors.length > 5 && (
                              <button
                                type="button"
                                title={`Xem toàn bộ ${u.resolvedMajors.length} ngành đào tạo của trường`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedUniModal(u);
                                }}
                                style={{
                                  fontSize: '0.73rem',
                                  fontWeight: '800',
                                  padding: '4px 8px',
                                  borderRadius: '8px',
                                  background: '#EEF2FF',
                                  color: '#4338CA',
                                  border: '1px solid #C7D2FE',
                                  cursor: 'pointer'
                                }}
                              >
                                +{u.resolvedMajors.length - 5} ngành khác
                              </button>
                            )}
                          </div>
                        </div>

                        {/* 3D Flip Trigger & Footer Actions */}
                        <div>
                          <button
                            type="button"
                            className="uni-flip-trigger-btn"
                            onClick={() => toggleFlipUni(u.id)}
                            title="Bấm để lật thẻ xem điểm chuẩn 3 năm, phương thức xét tuyển và ký túc xá"
                          >
                            <RotateCw size={15} className="spin-flip-icon" />
                            <span>Lật xem điểm chuẩn 3 năm &amp; ký túc xá ↻</span>
                          </button>

                          <div
                            style={{
                              borderTop: '1px solid #F1F5F9',
                              paddingTop: '10px',
                              marginTop: '8px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                          >
                            <button
                              type="button"
                              className="btn-edtech-secondary"
                              style={{ fontSize: '0.78rem', padding: '7px 12px' }}
                              onClick={() => setSelectedUniModal(u)}
                            >
                              <GraduationCap size={14} />
                              <span>Hồ sơ chi tiết</span>
                            </button>

                            <button
                              type="button"
                              className="btn-edtech-primary"
                              style={{ fontSize: '0.78rem', padding: '7px 12px' }}
                              onClick={() => {
                                setSelectedMajorModal(null);
                                setSelectedGroup('');
                                setSelectedCombo('');
                                setSearchKeyword(u.code);
                                setActiveTab('nganh');
                              }}
                            >
                              <Search size={13} />
                              <span>Xem ngành ({u.canonicalMajorIds.size})</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* ===== BACK FACE (MẶT SAU: HỒ SƠ CHI TIẾT & BIỂU ĐỒ 3 NĂM) ===== */}
                      <div className="uni-card-face uni-card-back">
                        <div>
                          {/* Back Header */}
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '12px',
                              paddingBottom: '10px',
                              borderBottom: '1.5px dashed #CBD5E1',
                              gap: '8px'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                              <UniversityLogo
                                code={u.code}
                                name={u.name}
                                shortName={u.shortName}
                                website={u.website}
                                logoUrl={u.logoUrl}
                                size={38}
                              />
                              <div style={{ minWidth: 0 }}>
                                <div
                                  style={{
                                    fontWeight: '800',
                                    color: '#1E293B',
                                    fontSize: '0.92rem',
                                    lineHeight: '1.2'
                                  }}
                                >
                                  {u.name}
                                </div>
                                <div
                                  style={{
                                    fontSize: '0.7rem',
                                    color: '#4F46E5',
                                    fontWeight: '800',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                  }}
                                >
                                    <Sparkles size={11} />
                                    <span>THÔNG TIN TUYỂN SINH &amp; SINH HOẠT</span>
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              className="uni-back-unflip-btn"
                              onClick={() => toggleFlipUni(u.id)}
                              title="Lật lại mặt trước"
                              style={{ flexShrink: 0 }}
                            >
                              <Undo2 size={13} />
                              <span>Mặt trước</span>
                            </button>
                          </div>

                          {/* Benchmark History Mini Matrix */}
                          {u.benchmarkHistory && (
                            <div
                              className="uni-detail-section"
                              style={{ borderLeft: '4px solid #8B5CF6' }}
                            >
                              <div className="uni-detail-section-title" style={{ color: '#7C3AED' }}>
                                <TrendingUp size={14} />
                                <span>Điểm chuẩn 3 năm gần đây &amp; dự kiến 2026</span>
                              </div>
                              <div
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(4, 1fr)',
                                  gap: '4px',
                                  textAlign: 'center',
                                  marginBottom: '6px'
                                }}
                              >
                                <div style={{ background: '#F5F3FF', padding: '6px 2px', borderRadius: '8px' }}>
                                  <div style={{ fontSize: '0.65rem', color: '#6D28D9', fontWeight: '700' }}>
                                    2023
                                  </div>
                                  <div style={{ fontSize: '0.75rem', fontWeight: '900', color: '#4C1D95' }}>
                                    {u.benchmarkHistory['2023']?.split('–')[0]?.trim() || '24.5'}
                                  </div>
                                </div>
                                <div style={{ background: '#F5F3FF', padding: '6px 2px', borderRadius: '8px' }}>
                                  <div style={{ fontSize: '0.65rem', color: '#6D28D9', fontWeight: '700' }}>
                                    2024
                                  </div>
                                  <div style={{ fontSize: '0.75rem', fontWeight: '900', color: '#4C1D95' }}>
                                    {u.benchmarkHistory['2024']?.split('–')[0]?.trim() || '24.0'}
                                  </div>
                                </div>
                                <div style={{ background: '#F5F3FF', padding: '6px 2px', borderRadius: '8px' }}>
                                  <div style={{ fontSize: '0.65rem', color: '#6D28D9', fontWeight: '700' }}>
                                    2025
                                  </div>
                                  <div style={{ fontSize: '0.75rem', fontWeight: '900', color: '#4C1D95' }}>
                                    {u.benchmarkHistory['2025']?.split('–')[0]?.trim() || '24.5'}
                                  </div>
                                </div>
                                <div
                                  style={{
                                    background: '#EDE9FE',
                                    padding: '6px 2px',
                                    borderRadius: '8px',
                                    border: '1px solid #C4B5FD'
                                  }}
                                >
                                  <div style={{ fontSize: '0.65rem', color: '#7C3AED', fontWeight: '800' }}>
                                    DỰ BÁO 26
                                  </div>
                                  <div style={{ fontSize: '0.75rem', fontWeight: '900', color: '#6D28D9' }}>
                                    {u.benchmarkHistory.forecast2026?.split('–')[0]?.trim() || '25.0'}
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  fontSize: '0.72rem',
                                  color: '#6D28D9',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  flexWrap: 'wrap',
                                  gap: '4px'
                                }}
                              >
                                <span>
                                  📊 ĐGNL/ĐGTD: <strong>{u.benchmarkHistory.dgnlScore || '70+'}</strong>
                                </span>
                                <span>
                                  📜 Ngoại ngữ: <strong>{u.benchmarkHistory.ieltsMin || 'IELTS 5.5+'}</strong>
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Section 1: Phương thức xét tuyển */}
                          <div
                            className="uni-detail-section"
                            style={{ borderLeft: '4px solid #4F46E5' }}
                          >
                            <div className="uni-detail-section-title" style={{ color: '#4338CA' }}>
                              <GraduationCap size={14} />
                              <span>Phương thức tuyển sinh 2026</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              {(
                                u.admissionMethods || [
                                  'Xét kết quả thi tốt nghiệp THPT 2026',
                                  'Xét Đánh giá năng lực / Đánh giá tư duy',
                                  'Xét kết hợp chứng chỉ ngoại ngữ quốc tế'
                                ]
                              ).map((method, idx) => (
                                <div
                                  key={idx}
                                  style={{
                                    fontSize: '0.76rem',
                                    color: '#334155',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '5px',
                                    lineHeight: '1.35'
                                  }}
                                >
                                  <span
                                    style={{
                                      color: '#4F46E5',
                                      fontWeight: '900',
                                      fontSize: '0.7rem',
                                      marginTop: '1px'
                                    }}
                                  >
                                    ✓
                                  </span>
                                  <span>{method}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Section 2: Sinh hoạt phí & Đời sống */}
                          {u.campusVibe && (
                            <div
                              className="uni-detail-section"
                              style={{ borderLeft: '4px solid #059669' }}
                            >
                              <div className="uni-detail-section-title" style={{ color: '#047857' }}>
                                <Building2 size={14} />
                                <span>Ký túc xá &amp; Chi phí sinh hoạt</span>
                              </div>
                              <div style={{ fontSize: '0.76rem', color: '#334155', marginBottom: '4px' }}>
                                🏠 <strong>Ký túc xá:</strong> {u.campusVibe.dorms}
                              </div>
                              <div style={{ fontSize: '0.76rem', color: '#047857', fontWeight: '700' }}>
                                💵 <strong>Sinh hoạt phí:</strong> {u.campusVibe.livingCostNote}
                              </div>
                            </div>
                          )}

                          {/* Section 3: Việc làm & Thu nhập đầu ra */}
                          <div
                            className="uni-detail-section"
                            style={{ borderLeft: '4px solid #D97706' }}
                          >
                            <div className="uni-detail-section-title" style={{ color: '#B45309' }}>
                              <CheckCircle2 size={14} />
                              <span>Việc làm &amp; Khởi điểm</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                              <div style={{ background: '#ECFDF5', padding: '6px 8px', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.64rem', color: '#065F46', fontWeight: '800' }}>
                                  TỶ LỆ VIỆC LÀM
                                </div>
                                <div style={{ fontSize: '0.78rem', fontWeight: '900', color: '#047857' }}>
                                  {u.employmentRate || '97.5%'}
                                </div>
                              </div>
                              <div style={{ background: '#EEF2FF', padding: '6px 8px', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.64rem', color: '#3730A3', fontWeight: '800' }}>
                                  LƯƠNG KHỞI ĐIỂM
                                </div>
                                <div style={{ fontSize: '0.78rem', fontWeight: '900', color: '#4338CA' }}>
                                  {u.startingSalary || '11 - 25 tr/tháng'}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Back Footer Actions */}
                        <div
                          style={{
                            borderTop: '1px solid #E2E8F0',
                            paddingTop: '10px',
                            marginTop: '8px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                        >
                          <a
                            href={u.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-edtech-secondary"
                            style={{
                              fontSize: '0.76rem',
                              padding: '6px 12px',
                              textDecoration: 'none'
                            }}
                          >
                            <Globe size={13} />
                            <span>Website</span>
                          </a>

                          <button
                            type="button"
                            className="btn-edtech-primary"
                            style={{ fontSize: '0.76rem', padding: '6px 14px' }}
                            onClick={() => setSelectedUniModal(u)}
                          >
                            <span>Bảng điểm chuẩn đầy đủ ↗</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          TAB 3: VIDEO TRẢI NGHIỆM NGHỀ THỰC TẾ (CINEMA STAGE)
          ========================================================================= */}
      {activeTab === 'video' && (
        <ThematicVideoStage
          onSelectForRoadmap={handleSetRoadmap}
          onBookmarkMajor={(m) => handleBookmark(null, m)}
          savedMajorIds={savedMajorIds}
          onNavigateTab={(tab, query) => {
            if (tab === 'compare') {
              if (onNavigate) onNavigate('compare');
            } else {
              setActiveTab(tab);
              if (query) setSearchKeyword(query);
              window.scrollTo({ top: 320, behavior: 'smooth' });
            }
          }}
          onSearchQuery={(q) => {
            setSearchKeyword(q);
            setActiveTab('nganh');
            window.scrollTo({ top: 320, behavior: 'smooth' });
          }}
        />
      )}

      {/* =========================================================================
          TAB 4: TỔ HỢP XÉT TUYỂN & CẨM NANG KỲ THI 2026
          ========================================================================= */}
      {activeTab === 'tohop' && (
        <div>
          {/* Section A: Traditional & Modern Combinations */}
          <div style={{ marginBottom: '36px' }}>
            <h2
              style={{
                fontSize: '1.45rem',
                color: '#1E293B',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Layers size={22} color="#4F46E5" />
              <span>Các tổ hợp môn xét tuyển phổ biến</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '20px' }}>
              Khoảng điểm thường gặp, kinh nghiệm ôn tập từng khối và các ngành tiêu biểu xét tuyển khối đó.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                gap: '20px'
              }}
            >
              {COMBINATIONS_DATA.map((cb) => {
                const matchingMajorCount = enrichedMajors.filter((m) =>
                  (m.to_hop || []).includes(cb.ma)
                ).length;

                return (
                  <div
                    key={cb.ma}
                    className="card-box"
                    style={{
                      background: '#FFFFFF',
                      padding: '22px',
                      marginBottom: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '10px'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '1.35rem',
                            fontWeight: '900',
                            color: '#4F46E5',
                            fontFamily: 'var(--font-display)'
                          }}
                        >
                          Khối {cb.ma}
                        </span>
                        <span
                          style={{
                            fontSize: '0.73rem',
                            fontWeight: '800',
                            padding: '3px 10px',
                            borderRadius: '999px',
                            background: '#EEF2FF',
                            color: '#4338CA'
                          }}
                        >
                          {cb.nhom || 'Chuẩn Bộ GD&ĐT'} • {matchingMajorCount} ngành
                        </span>
                      </div>

                      <div
                        style={{
                          fontSize: '0.96rem',
                          fontWeight: '800',
                          color: '#1E293B',
                          marginBottom: '8px'
                        }}
                      >
                        {cb.mon}
                      </div>

                      <div
                        style={{
                          background: '#F8FAFC',
                          borderRadius: '12px',
                          padding: '10px 12px',
                          marginBottom: '12px',
                          border: '1px solid #E2E8F0'
                        }}
                      >
                        <div
                          style={{
                            fontSize: '0.72rem',
                            color: '#64748B',
                            fontWeight: '700',
                            marginBottom: '2px'
                          }}
                        >
                          PHỔ ĐIỂM DỰ KIẾN
                        </div>
                        <div style={{ fontSize: '0.84rem', color: '#334155', fontWeight: '600' }}>
                          {cb.phoDiem}
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: '0.84rem',
                          color: '#475569',
                          lineHeight: '1.5',
                          marginBottom: '12px'
                        }}
                      >
                        💡 <strong>Kinh nghiệm ôn tập:</strong> {cb.meoOnThi}
                      </div>

                      {Array.isArray(cb.nganhTieuBieu) && cb.nganhTieuBieu.length > 0 && (
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '5px',
                            marginBottom: '14px'
                          }}
                        >
                          {cb.nganhTieuBieu.slice(0, 4).map((ng, idx) => (
                            <span
                              key={idx}
                              style={{
                                fontSize: '0.72rem',
                                fontWeight: '700',
                                padding: '2px 8px',
                                borderRadius: '6px',
                                background: '#F1F5F9',
                                color: '#334155'
                              }}
                            >
                              {ng}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      className="btn-edtech-secondary"
                      style={{
                        width: '100%',
                        fontSize: '0.82rem',
                        padding: '9px',
                        justifyContent: 'center'
                      }}
                      onClick={() => {
                        setSelectedGroup('');
                        setSearchKeyword('');
                        setSelectedCombo(cb.ma);
                        setActiveTab('nganh');
                        window.scrollTo({ top: 280, behavior: 'smooth' });
                      }}
                    >
                      <span>Xem {matchingMajorCount} ngành xét khối {cb.ma}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section B: Modern Exam Methods Guide (HSA, TSA, APT, IELTS) */}
          <div
            style={{
              background: '#F8FAFC',
              borderRadius: '24px',
              padding: '28px',
              border: '1.5px solid #E2E8F0'
            }}
          >
            <h2
              style={{
                fontSize: '1.45rem',
                color: '#1E293B',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Sparkles size={22} color="#D97706" />
              <span>Các kỳ thi riêng &amp; quy đổi chứng chỉ ngoại ngữ (HSA, TSA, APT, IELTS)</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '22px' }}>
              Nhiều trường đại học dành tỷ lệ chỉ tiêu đáng kể cho các kỳ thi đánh giá năng lực, đánh giá tư duy và xét kết hợp chứng chỉ ngoại ngữ.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '20px'
              }}
            >
              {/* HSA */}
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '20px',
                  borderRadius: '18px',
                  border: '1.5px solid #BAE6FD'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '32px',
                      borderRadius: '8px',
                      background: '#0284C7',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '900',
                      fontSize: '0.82rem'
                    }}
                  >
                    HSA
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', margin: 0, color: '#0369A1' }}>
                      Đánh giá Năng lực ĐHQGHN
                    </h3>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>150 câu hỏi / 195 phút</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: '1.5', margin: '0 0 10px' }}>
                  {EXAM_METHODS_2026.hsa.structure}
                </p>
                <div
                  style={{
                    background: '#F0F9FF',
                    padding: '8px 10px',
                    borderRadius: '10px',
                    fontSize: '0.78rem',
                    color: '#0369A1'
                  }}
                >
                  🎯 <strong>Mức điểm tham khảo:</strong> {EXAM_METHODS_2026.hsa.benchmarkGuide}
                </div>
              </div>

              {/* TSA */}
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '20px',
                  borderRadius: '18px',
                  border: '1.5px solid #FCA5A5'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '32px',
                      borderRadius: '8px',
                      background: '#B91C1C',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '900',
                      fontSize: '0.82rem'
                    }}
                  >
                    TSA
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', margin: 0, color: '#991B1B' }}>
                      Đánh giá Tư duy Bách Khoa
                    </h3>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                      Thang điểm 100 • 3 phần thi
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: '1.5', margin: '0 0 10px' }}>
                  {EXAM_METHODS_2026.tsa.structure}
                </p>
                <div
                  style={{
                    background: '#FEF2F2',
                    padding: '8px 10px',
                    borderRadius: '10px',
                    fontSize: '0.78rem',
                    color: '#991B1B'
                  }}
                >
                  🎯 <strong>Mức điểm tham khảo:</strong> {EXAM_METHODS_2026.tsa.benchmarkGuide}
                </div>
              </div>

              {/* APT */}
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '20px',
                  borderRadius: '18px',
                  border: '1.5px solid #BBF7D0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '32px',
                      borderRadius: '8px',
                      background: '#059669',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '900',
                      fontSize: '0.82rem'
                    }}
                  >
                    APT
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', margin: 0, color: '#047857' }}>
                      Đánh giá Năng lực ĐHQG TP.HCM
                    </h3>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                      120 câu hỏi / 150 phút (Thang 1.200)
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: '1.5', margin: '0 0 10px' }}>
                  {EXAM_METHODS_2026.apt.structure}
                </p>
                <div
                  style={{
                    background: '#ECFDF5',
                    padding: '8px 10px',
                    borderRadius: '10px',
                    fontSize: '0.78rem',
                    color: '#047857'
                  }}
                >
                  🎯 <strong>Mức điểm tham khảo:</strong> {EXAM_METHODS_2026.apt.benchmarkGuide}
                </div>
              </div>

              {/* IELTS Conversion */}
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '20px',
                  borderRadius: '18px',
                  border: '1.5px solid #E9D5FF'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '32px',
                      borderRadius: '8px',
                      background: '#7C3AED',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '900',
                      fontSize: '0.82rem'
                    }}
                  >
                    ENG
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', margin: 0, color: '#6D28D9' }}>
                      Quy đổi Chứng chỉ Quốc tế 2026
                    </h3>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                      IELTS, TOEFL, SAT, VSTEP
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {EXAM_METHODS_2026.ieltsConversion.rules.map((r, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.78rem',
                        background: '#FAF5FF',
                        padding: '5px 8px',
                        borderRadius: '6px'
                      }}
                    >
                      <span style={{ fontWeight: '800', color: '#6D28D9' }}>IELTS {r.ielts}</span>
                      <span style={{ color: '#334155' }}>
                        → <strong>{r.thptEquivalent}</strong>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          STICKY QUICK COMPARE BAR (WHEN USER HAS SAVED MAJORS)
          ========================================================================= */}
      {savedMajorsList.length > 0 && activeTab !== 'video' && (
        <div className="search-floating-compare-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.82rem',
                fontWeight: '800',
                color: '#A5B4FC'
              }}
            >
              <Scale size={16} />
              <span>Đã lưu so sánh ({savedMajorsList.length}):</span>
            </span>

            {savedMajorsList.slice(0, 3).map((bm) => (
              <span
                key={bm.id}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '0.76rem',
                  fontWeight: '700',
                  color: '#F8FAFC'
                }}
              >
                <span>{bm.icon || '🎓'}</span>
                <span>{bm.ten_nganh}</span>
                {onToggleBookmarkMajor && (
                  <button
                    type="button"
                    title="Bỏ ngành này khỏi bàn cân"
                    onClick={() => handleBookmark(null, bm)}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      color: '#94A3B8',
                      cursor: 'pointer',
                      padding: 0,
                      display: 'inline-flex'
                    }}
                  >
                    <X size={13} />
                  </button>
                )}
              </span>
            ))}
            {savedMajorsList.length > 3 && (
              <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: '700' }}>
                +{savedMajorsList.length - 3} ngành khác
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => onNavigate && onNavigate('compare')}
            style={{
              background: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '999px',
              padding: '8px 18px',
              fontSize: '0.82rem',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)'
            }}
          >
            <span>Mở bảng so sánh</span>
            <ArrowRight size={15} />
          </button>
        </div>
      )}

      {/* =========================================================================
          MODAL 1: BENTO CHI TIẾT NGÀNH ĐÀO TẠO
          ========================================================================= */}
      {selectedMajorModal &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.72)',
              backdropFilter: 'blur(8px)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
            onClick={() => setSelectedMajorModal(null)}
          >
            <div
              className="major-detail-modal-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                maxWidth: '840px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '28px',
                position: 'relative',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
                border: '1px solid #CBD5E1'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Đóng"
                onClick={() => setSelectedMajorModal(null)}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
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

              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '16px',
                  paddingRight: '36px'
                }}
              >
                <span style={{ fontSize: '2.7rem' }}>{selectedMajorModal.icon}</span>
                <div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: '800',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        background: '#FEF3C7',
                        color: '#B45309'
                      }}
                    >
                      {selectedMajorModal.nhom_nganh}
                    </span>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: '800',
                        padding: '3px 9px',
                        borderRadius: '999px',
                        background: '#FEF2F2',
                        color: '#DC2626'
                      }}
                    >
                      🔥 Nhu cầu: {selectedMajorModal.demandLevel || 'Rất cao'}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.35rem, 2.8vw, 1.75rem)',
                      margin: '6px 0 2px',
                      color: '#1E293B',
                      fontWeight: '900'
                    }}
                  >
                    {selectedMajorModal.ten_nganh}
                  </h2>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: '600' }}>
                    Mã ngành tuyển sinh:{' '}
                    <strong style={{ color: '#4F46E5' }}>{selectedMajorModal.ma_nganh}</strong>
                    {selectedMajorModal.to_hop?.length > 0 && (
                      <>
                        {' '}
                        • Tổ hợp xét tuyển:{' '}
                        <strong style={{ color: '#0369A1' }}>
                          {selectedMajorModal.to_hop.join(', ')}
                        </strong>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.94rem',
                  color: '#475569',
                  lineHeight: '1.6',
                  marginBottom: '18px'
                }}
              >
                {selectedMajorModal.mo_ta}
              </p>

              {/* Grid 1: Điểm chuẩn & Học phí */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                  gap: '14px',
                  marginBottom: '18px'
                }}
              >
                <div
                  style={{
                    background: '#F8FAFC',
                    padding: '15px',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <div style={{ fontSize: '0.73rem', fontWeight: '800', color: '#64748B' }}>
                    ĐIỂM CHUẨN THAM KHẢO
                  </div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '900',
                      color: '#4F46E5',
                      marginTop: '4px'
                    }}
                  >
                    {selectedMajorModal.diem_tb}
                  </div>
                </div>

                <div
                  style={{
                    background: '#F8FAFC',
                    padding: '15px',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <div style={{ fontSize: '0.73rem', fontWeight: '800', color: '#64748B' }}>
                    HỌC PHÍ DỰ KIẾN
                  </div>
                  <div
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: '800',
                      color: '#1E293B',
                      marginTop: '4px'
                    }}
                  >
                    {selectedMajorModal.hoc_phi}
                  </div>
                </div>
              </div>

              {/* Phân tầng Điểm chuẩn 3 phân khúc (benchmarkTiers) */}
              {selectedMajorModal.benchmarkTiers && (
                <div
                  style={{
                    background: '#FAF5FF',
                    borderRadius: '18px',
                    padding: '16px',
                    border: '1px solid #E9D5FF',
                    marginBottom: '18px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: '800',
                      color: '#6D28D9',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <GraduationCap size={16} />
                    <span>Mức điểm chuẩn theo nhóm trường (để chọn trường vừa sức)</span>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '10px'
                    }}
                  >
                    {selectedMajorModal.benchmarkTiers.topTier && (
                      <div
                        style={{
                          background: '#FFFFFF',
                          padding: '10px 12px',
                          borderRadius: '12px',
                          border: '1px solid #E9D5FF'
                        }}
                      >
                        <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#7C3AED' }}>
                          🏆 TRƯỜNG TOP ĐẦU
                        </div>
                        <div style={{ fontSize: '0.84rem', fontWeight: '750', color: '#1E293B', marginTop: '2px' }}>
                          {selectedMajorModal.benchmarkTiers.topTier}
                        </div>
                      </div>
                    )}
                    {selectedMajorModal.benchmarkTiers.midTier && (
                      <div
                        style={{
                          background: '#FFFFFF',
                          padding: '10px 12px',
                          borderRadius: '12px',
                          border: '1px solid #E9D5FF'
                        }}
                      >
                        <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#0284C7' }}>
                          ⚖️ TRƯỜNG TẦM TRUNG
                        </div>
                        <div style={{ fontSize: '0.84rem', fontWeight: '750', color: '#1E293B', marginTop: '2px' }}>
                          {selectedMajorModal.benchmarkTiers.midTier}
                        </div>
                      </div>
                    )}
                    {selectedMajorModal.benchmarkTiers.regionalTier && (
                      <div
                        style={{
                          background: '#FFFFFF',
                          padding: '10px 12px',
                          borderRadius: '12px',
                          border: '1px solid #E9D5FF'
                        }}
                      >
                        <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#059669' }}>
                          🎯 TRƯỜNG ĐỊA PHƯƠNG / VỪA SỨC
                        </div>
                        <div style={{ fontSize: '0.84rem', fontWeight: '750', color: '#1E293B', marginTop: '2px' }}>
                          {selectedMajorModal.benchmarkTiers.regionalTier}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Grid 2: Lộ trình thu nhập (Salary Roadmap) */}
              {selectedMajorModal.salaryRoadmap && (
                <div
                  style={{
                    background: '#F0FDF4',
                    borderRadius: '18px',
                    padding: '18px',
                    border: '1px solid #BBF7D0',
                    marginBottom: '18px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: '800',
                      color: '#15803D',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <TrendingUp size={16} />
                    <span>Mức thu nhập tham khảo tại Việt Nam</span>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '10px'
                    }}
                  >
                    <div
                      style={{
                        background: '#FFFFFF',
                        padding: '10px 12px',
                        borderRadius: '12px',
                        border: '1px solid #DCFCE7'
                      }}
                    >
                      <div style={{ fontSize: '0.72rem', color: '#166534', fontWeight: '800' }}>
                        🌱 MỚI RA TRƯỜNG (0 – 1 NĂM)
                      </div>
                      <div style={{ fontSize: '0.94rem', fontWeight: '900', color: '#15803D' }}>
                        {selectedMajorModal.salaryRoadmap.fresher || '8 – 14 tr/tháng'}
                      </div>
                    </div>
                    <div
                      style={{
                        background: '#FFFFFF',
                        padding: '10px 12px',
                        borderRadius: '12px',
                        border: '1px solid #DCFCE7'
                      }}
                    >
                      <div style={{ fontSize: '0.72rem', color: '#166534', fontWeight: '800' }}>
                        ⚡ ĐÃ CÓ KINH NGHIỆM (2 – 4 NĂM)
                      </div>
                      <div style={{ fontSize: '0.94rem', fontWeight: '900', color: '#15803D' }}>
                        {selectedMajorModal.salaryRoadmap.mid ||
                          selectedMajorModal.salaryRoadmap.junior ||
                          '16 – 28 tr/tháng'}
                      </div>
                    </div>
                    <div
                      style={{
                        background: '#FFFFFF',
                        padding: '10px 12px',
                        borderRadius: '12px',
                        border: '1px solid #DCFCE7'
                      }}
                    >
                      <div style={{ fontSize: '0.72rem', color: '#166534', fontWeight: '800' }}>
                        📈 VỮNG CHUYÊN MÔN (5 NĂM+)
                      </div>
                      <div style={{ fontSize: '0.94rem', fontWeight: '900', color: '#15803D' }}>
                        {selectedMajorModal.salaryRoadmap.senior || '35 – 70+ tr/tháng'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Vị trí việc làm & Nhà tuyển dụng tiêu biểu */}
              {(selectedMajorModal.vi_tri_viec_lam ||
                (selectedMajorModal.topEmployers && selectedMajorModal.topEmployers.length > 0)) && (
                <div
                  style={{
                    background: '#F8FAFC',
                    borderRadius: '16px',
                    padding: '16px',
                    border: '1px solid #E2E8F0',
                    marginBottom: '18px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: '800',
                      color: '#334155',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Briefcase size={15} color="#4F46E5" />
                    <span>Vị trí công việc &amp; nơi tuyển dụng phổ biến</span>
                  </div>
                  {selectedMajorModal.vi_tri_viec_lam && (
                    <div style={{ fontSize: '0.86rem', color: '#1E293B', marginBottom: '8px' }}>
                      <strong>Công việc thường làm:</strong> {selectedMajorModal.vi_tri_viec_lam}
                    </div>
                  )}
                  {selectedMajorModal.topEmployers?.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {selectedMajorModal.topEmployers.map((emp, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            padding: '3px 10px',
                            borderRadius: '999px',
                            background: '#EEF2FF',
                            color: '#4338CA',
                            border: '1px solid #C7D2FE'
                          }}
                        >
                          🏢 {emp}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Pain Point 1: Góc khuất & Sự thật nghề nghiệp (Reality Check) */}
              {selectedMajorModal.realityCheck && (
                <div
                  style={{
                    background: '#FFF1F2',
                    borderRadius: '18px',
                    padding: '18px',
                    border: '1px solid #FECDD3',
                    marginBottom: '18px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: '800',
                      color: '#BE123C',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <AlertCircle size={16} />
                    <span>Những vất vả &amp; áp lực thực tế cần biết</span>
                  </div>
                  {typeof selectedMajorModal.realityCheck === 'object' ? (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        fontSize: '0.88rem',
                        color: '#881337',
                        lineHeight: '1.55'
                      }}
                    >
                      {selectedMajorModal.realityCheck.myth && (
                        <div>
                          <strong style={{ color: '#9F1239' }}>❌ Nhiều người hay nghĩ:</strong>{' '}
                          {selectedMajorModal.realityCheck.myth}
                        </div>
                      )}
                      {selectedMajorModal.realityCheck.truth && (
                        <div>
                          <strong style={{ color: '#9F1239' }}>✅ Thực tế khi đi làm:</strong>{' '}
                          {selectedMajorModal.realityCheck.truth}
                        </div>
                      )}
                      {selectedMajorModal.realityCheck.pressureNote && (
                        <div
                          style={{
                            fontStyle: 'italic',
                            color: '#BE123C',
                            fontSize: '0.84rem',
                            marginTop: '2px'
                          }}
                        >
                          ⚡ <strong>Áp lực thường gặp:</strong>{' '}
                          {selectedMajorModal.realityCheck.pressureNote}
                        </div>
                      )}
                    </div>
                  ) : (
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.88rem',
                        color: '#881337',
                        lineHeight: '1.55'
                      }}
                    >
                      {String(selectedMajorModal.realityCheck)}
                    </p>
                  )}
                </div>
              )}

              {/* Pain Point 2: Ai KHÔNG hợp ngành này */}
              {selectedMajorModal.whoShouldAvoid && (
                <div
                  style={{
                    background: '#FEF3C7',
                    borderRadius: '18px',
                    padding: '18px',
                    border: '1px solid #FDE68A',
                    marginBottom: '18px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: '800',
                      color: '#B45309',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <ShieldAlert size={16} />
                    <span>Ai nên cân nhắc kỹ trước khi chọn ngành này?</span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.88rem',
                      color: '#78350F',
                      lineHeight: '1.55'
                    }}
                  >
                    {typeof selectedMajorModal.whoShouldAvoid === 'string'
                      ? selectedMajorModal.whoShouldAvoid
                      : JSON.stringify(selectedMajorModal.whoShouldAvoid)}
                  </p>
                </div>
              )}

              {/* Pain Point 3: Mức độ ảnh hưởng của AI 2026-2030 */}
              {selectedMajorModal.aiImpact && (
                <div
                  style={{
                    background: '#EFF6FF',
                    borderRadius: '18px',
                    padding: '18px',
                    border: '1px solid #BFDBFE',
                    marginBottom: '18px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: '800',
                      color: '#1D4ED8',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Sparkles size={16} />
                    <span>Tác động của AI tới công việc trong vài năm tới</span>
                  </div>
                  {typeof selectedMajorModal.aiImpact === 'object' ? (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        fontSize: '0.88rem',
                        color: '#1E40AF',
                        lineHeight: '1.55'
                      }}
                    >
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span
                          style={{
                            background: '#DBEAFE',
                            color: '#1E40AF',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            fontWeight: '800',
                            fontSize: '0.78rem'
                          }}
                        >
                          Mức độ ảnh hưởng từ AI: {selectedMajorModal.aiImpact.riskLevel || 'Trung bình'} (
                          {selectedMajorModal.aiImpact.riskPercentage || 35}%)
                        </span>
                      </div>
                      {selectedMajorModal.aiImpact.aiRole && (
                        <div>
                          <strong>🤖 AI đang thay đổi việc gì:</strong> {selectedMajorModal.aiImpact.aiRole}
                        </div>
                      )}
                      {selectedMajorModal.aiImpact.coreSkillsToMasterAI && (
                        <div>
                          <strong>💡 Kỹ năng cần rèn thêm:</strong>{' '}
                          {selectedMajorModal.aiImpact.coreSkillsToMasterAI}
                        </div>
                      )}
                    </div>
                  ) : (
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.88rem',
                        color: '#1E40AF',
                        lineHeight: '1.55'
                      }}
                    >
                      {String(selectedMajorModal.aiImpact)}
                    </p>
                  )}
                </div>
              )}

              {/* Core University Subjects */}
              {selectedMajorModal.coreSubjects && selectedMajorModal.coreSubjects.length > 0 && (
                <div
                  style={{
                    background: '#F8FAFC',
                    borderRadius: '16px',
                    padding: '16px',
                    border: '1px solid #E2E8F0',
                    marginBottom: '18px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: '800',
                      color: '#334155',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <BookOpen size={16} color="#4F46E5" />
                    <span>Một số môn chuyên ngành sẽ học ở đại học</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {selectedMajorModal.coreSubjects.map((sub, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.78rem',
                          background: '#FFFFFF',
                          border: '1px solid #CBD5E1',
                          padding: '4px 10px',
                          borderRadius: '8px',
                          color: '#1E293B',
                          fontWeight: '600'
                        }}
                      >
                        • {sub}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Training Universities with Clickable Official Logos */}
              {(() => {
                const matchedUnis = getCollegesForMajor(selectedMajorModal.id, 10);
                if (matchedUnis.length === 0 && !selectedMajorModal.truong_tieu_bieu?.length) {
                  return null;
                }
                return (
                  <div style={{ marginBottom: '22px' }}>
                    <h4
                      style={{
                        fontSize: '0.96rem',
                        marginBottom: '10px',
                        color: '#1E293B',
                        fontWeight: '800'
                      }}
                    >
                      Các trường Đại học đào tạo tiêu biểu (Bấm vào trường để xem điểm chuẩn):
                    </h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {matchedUnis.length > 0
                        ? matchedUnis.map((uniObj) => (
                            <button
                              key={uniObj.id}
                              type="button"
                              onClick={() => {
                                setSelectedMajorModal(null);
                                setSelectedUniModal(uniObj);
                              }}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '6px 12px',
                                borderRadius: '12px',
                                background: uniObj.isRegional ? '#EEF2FF' : '#F8FAFC',
                                border: uniObj.isRegional
                                  ? '1.5px solid #818CF8'
                                  : '1px solid #CBD5E1',
                                fontSize: '0.82rem',
                                fontWeight: '750',
                                color: '#1E293B',
                                cursor: 'pointer'
                              }}
                            >
                              <UniversityLogo
                                code={uniObj.code}
                                name={uniObj.name}
                                shortName={uniObj.shortName}
                                website={uniObj.website}
                                size={24}
                              />
                              <span>{uniObj.name}</span>
                              <span style={{ fontSize: '0.72rem', color: '#4F46E5', fontWeight: '800' }}>
                                ({uniObj.code}) ↗
                              </span>
                            </button>
                          ))
                        : selectedMajorModal.truong_tieu_bieu.map((trName, i) => (
                            <span
                              key={i}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '6px 12px',
                                borderRadius: '12px',
                                background: '#F8FAFC',
                                border: '1px solid #CBD5E1',
                                fontSize: '0.82rem',
                                fontWeight: '700',
                                color: '#1E293B'
                              }}
                            >
                              🏛️ {trName}
                            </span>
                          ))}
                    </div>
                  </div>
                );
              })()}

              {/* Modal Actions */}
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid #E2E8F0',
                  paddingTop: '18px',
                  flexWrap: 'wrap'
                }}
              >
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

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn-edtech-secondary"
                    style={{ padding: '10px 18px', fontSize: '0.86rem' }}
                    onClick={() => handleBookmark(null, selectedMajorModal)}
                  >
                    {savedMajorIds.includes(selectedMajorModal.id) ? (
                      <>
                        <BookmarkCheck size={16} color="#059669" />
                        <span style={{ color: '#059669' }}>Đã lưu so sánh</span>
                      </>
                    ) : (
                      <>
                        <Heart size={16} />
                        <span>Lưu vào so sánh</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="btn-edtech-primary"
                    style={{ padding: '10px 20px', fontSize: '0.86rem' }}
                    onClick={() => {
                      const name = selectedMajorModal.ten_nganh;
                      setSelectedMajorModal(null);
                      handleSetRoadmap(name);
                    }}
                  >
                    <Compass size={16} />
                    <span>Đưa vào kế hoạch ôn thi →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* =========================================================================
          MODAL 2: CHI TIẾT TRƯỜNG ĐẠI HỌC (FULL BENCHMARK MATRIX & MAJORS MODAL)
          ========================================================================= */}
      {selectedUniModal &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.72)',
              backdropFilter: 'blur(8px)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
            onClick={() => setSelectedUniModal(null)}
          >
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                maxWidth: '860px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '28px',
                position: 'relative',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
                border: '1px solid #CBD5E1'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Đóng"
                onClick={() => setSelectedUniModal(null)}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
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

              {/* University Header with Logo */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '18px',
                  paddingRight: '36px'
                }}
              >
                <UniversityLogo
                  code={selectedUniModal.code}
                  name={selectedUniModal.name}
                  shortName={selectedUniModal.shortName}
                  website={selectedUniModal.website}
                  logoUrl={selectedUniModal.logoUrl}
                  size={64}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <h2
                      style={{
                        fontSize: 'clamp(1.3rem, 2.6vw, 1.6rem)',
                        margin: 0,
                        color: '#1E293B',
                        fontWeight: '900'
                      }}
                    >
                      {selectedUniModal.name}
                    </h2>
                    <span
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: '900',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        background: '#EEF2FF',
                        color: '#4338CA',
                        border: '1px solid #C7D2FE'
                      }}
                    >
                      MÃ: {selectedUniModal.code}
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      marginTop: '6px',
                      fontSize: '0.84rem',
                      color: '#64748B',
                      flexWrap: 'wrap'
                    }}
                  >
                    <span>📍 {selectedUniModal.city}</span>
                    <span>•</span>
                    <span style={{ color: '#059669', fontWeight: '700' }}>
                      {selectedUniModal.type}
                    </span>
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.94rem',
                  color: '#475569',
                  lineHeight: '1.6',
                  marginBottom: '18px'
                }}
              >
                {selectedUniModal.highlight}
              </p>

              {/* Quick Summary Metrics */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
                  gap: '12px',
                  marginBottom: '20px'
                }}
              >
                <div
                  style={{
                    background: '#FAF5FF',
                    padding: '13px 14px',
                    borderRadius: '14px',
                    border: '1px solid #E9D5FF'
                  }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#7C3AED' }}>
                    ĐIỂM CHUẨN THAM KHẢO
                  </div>
                  <div style={{ fontSize: '0.96rem', fontWeight: '900', color: '#581C87', marginTop: '3px' }}>
                    {selectedUniModal.benchmarks}
                  </div>
                </div>

                <div
                  style={{
                    background: '#FFFBEB',
                    padding: '13px 14px',
                    borderRadius: '14px',
                    border: '1px solid #FDE68A'
                  }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#B45309' }}>
                    HỌC PHÍ DỰ KIẾN
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '800', color: '#78350F', marginTop: '3px' }}>
                    {selectedUniModal.tuition}
                  </div>
                </div>

                <div
                  style={{
                    background: '#ECFDF5',
                    padding: '13px 14px',
                    borderRadius: '14px',
                    border: '1px solid #A7F3D0'
                  }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#047857' }}>
                    VIỆC LÀM &amp; KHỞI ĐIỂM
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: '800', color: '#065F46', marginTop: '3px' }}>
                    {selectedUniModal.employmentRate || '96%+'} •{' '}
                    {selectedUniModal.startingSalary || '11 - 24 tr/tháng'}
                  </div>
                </div>
              </div>

              {/* All Majors Offered by This University (Clickable to jump to Major Modal) */}
              {(selectedUniModal.majors || []).length > 0 && (
                <div style={{ marginBottom: '22px' }}>
                  <h3
                    style={{
                      fontSize: '1.02rem',
                      color: '#1E293B',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <BookOpen size={17} color="#4F46E5" />
                    <span>Các ngành đào tạo thế mạnh (Bấm vào ngành để xem hồ sơ nghề nghiệp):</span>
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {(selectedUniModal.majors || []).map((slug) => {
                      const rm = resolveMajorSlug(slug);
                      return (
                        <button
                          key={slug}
                          type="button"
                          onClick={() => {
                            if (rm.majorObj) {
                              setSelectedUniModal(null);
                              setSelectedMajorModal(rm.majorObj);
                            } else {
                              setSelectedUniModal(null);
                              setSearchKeyword(rm.label);
                              setActiveTab('nganh');
                            }
                          }}
                          style={{
                            fontSize: '0.8rem',
                            fontWeight: '750',
                            padding: '6px 12px',
                            borderRadius: '10px',
                            background: '#F8FAFC',
                            color: '#1E293B',
                            border: '1px solid #CBD5E1',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px'
                          }}
                        >
                          <span>{rm.icon}</span>
                          <span>{rm.label}</span>
                          <span style={{ fontSize: '0.7rem', color: '#4F46E5', fontWeight: '900' }}>
                            ↗
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Benchmarks Matrix & Full Table */}
              <div style={{ marginBottom: '22px' }}>
                <h3
                  style={{
                    fontSize: '1.08rem',
                    color: '#1E293B',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <TrendingUp size={18} color="#4F46E5" />
                  <span>Điểm chuẩn một số ngành tiêu biểu (2024 – dự kiến 2026)</span>
                </h3>

                {selectedUniModal.detailedBenchmarks &&
                selectedUniModal.detailedBenchmarks.length > 0 ? (
                  <div
                    style={{
                      overflowX: 'auto',
                      borderRadius: '14px',
                      border: '1px solid #E2E8F0'
                    }}
                  >
                    <table
                      style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        textAlign: 'left',
                        fontSize: '0.86rem'
                      }}
                    >
                      <thead>
                        <tr style={{ background: '#F8FAFC', borderBottom: '1.5px solid #E2E8F0' }}>
                          <th style={{ padding: '12px 14px', fontWeight: '800', color: '#1E293B' }}>
                            Tên Ngành
                          </th>
                          <th style={{ padding: '12px 14px', fontWeight: '800', color: '#1E293B' }}>
                            Tổ hợp
                          </th>
                          <th style={{ padding: '12px 14px', fontWeight: '800', color: '#475569' }}>
                            THPT 2024
                          </th>
                          <th style={{ padding: '12px 14px', fontWeight: '800', color: '#475569' }}>
                            THPT 2025
                          </th>
                          <th style={{ padding: '12px 14px', fontWeight: '900', color: '#4F46E5' }}>
                            Dự báo 2026
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedUniModal.detailedBenchmarks.map((row, rIdx) => (
                          <tr key={rIdx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                            <td
                              style={{ padding: '10px 14px', fontWeight: '700', color: '#1E293B' }}
                            >
                              {row.majorName}
                            </td>
                            <td
                              style={{ padding: '10px 14px', color: '#0369A1', fontWeight: '700' }}
                            >
                              {row.combo}
                            </td>
                            <td style={{ padding: '10px 14px', color: '#64748B' }}>{row.thpt2024}</td>
                            <td style={{ padding: '10px 14px', color: '#64748B' }}>{row.thpt2025}</td>
                            <td
                              style={{ padding: '10px 14px', fontWeight: '900', color: '#4F46E5' }}
                            >
                              {row.forecast2026}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div
                    style={{
                      background: '#F8FAFC',
                      padding: '16px',
                      borderRadius: '14px',
                      border: '1px solid #E2E8F0',
                      color: '#475569',
                      fontSize: '0.88rem'
                    }}
                  >
                    Điểm chuẩn tham khảo: <strong>{selectedUniModal.benchmarks}</strong>
                    {selectedUniModal.benchmarkHistory?.forecast2026 && (
                      <>
                        {' '}
                        • Dự báo 2026:{' '}
                        <strong style={{ color: '#4F46E5' }}>
                          {selectedUniModal.benchmarkHistory.forecast2026}
                        </strong>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Scholarships & Facilities */}
              {(selectedUniModal.scholarships || selectedUniModal.facilities) && (
                <div
                  style={{
                    background: '#EFF6FF',
                    borderRadius: '18px',
                    padding: '16px 18px',
                    border: '1px solid #BFDBFE',
                    marginBottom: '18px',
                    fontSize: '0.86rem',
                    color: '#1E3A8A',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  {selectedUniModal.scholarships && (
                    <div>
                      🎁 <strong>Học bổng &amp; Hỗ trợ tài chính:</strong>{' '}
                      {selectedUniModal.scholarships}
                    </div>
                  )}
                  {selectedUniModal.facilities && (
                    <div>
                      🏛️ <strong>Cơ sở vật chất:</strong> {selectedUniModal.facilities}
                    </div>
                  )}
                </div>
              )}

              {/* Campus Vibe & Dorms */}
              {selectedUniModal.campusVibe && (
                <div
                  style={{
                    background: '#F0FDF4',
                    borderRadius: '18px',
                    padding: '18px',
                    border: '1px solid #BBF7D0',
                    marginBottom: '22px'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      margin: '0 0 8px',
                      color: '#166534',
                      fontWeight: '800'
                    }}
                  >
                    🏡 Đời sống sinh viên &amp; Học tập tại {selectedUniModal.city}:
                  </h4>
                  <div
                    style={{
                      fontSize: '0.86rem',
                      color: '#14532D',
                      lineHeight: '1.55',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}
                  >
                    <div>
                      🏠 <strong>Ký túc xá:</strong> {selectedUniModal.campusVibe.dorms}
                    </div>
                    <div>
                      💵 <strong>Chi phí sinh hoạt:</strong>{' '}
                      {selectedUniModal.campusVibe.livingCostNote}
                    </div>
                    {selectedUniModal.campusVibe.clubsAndLife && (
                      <div>
                        🎉 <strong>Câu lạc bộ &amp; Môi trường:</strong>{' '}
                        {selectedUniModal.campusVibe.clubsAndLife}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Footer Buttons */}
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid #E2E8F0',
                  paddingTop: '18px',
                  flexWrap: 'wrap'
                }}
              >
                <button
                  type="button"
                  className="btn-edtech-secondary"
                  style={{ padding: '10px 18px', fontSize: '0.84rem' }}
                  onClick={() => {
                    const code = selectedUniModal.code;
                    setSelectedUniModal(null);
                    setSelectedGroup('');
                    setSelectedCombo('');
                    setSearchKeyword(code);
                    setActiveTab('nganh');
                  }}
                >
                  <Search size={15} />
                  <span>Lọc các ngành của trường ({selectedUniModal.code})</span>
                </button>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a
                    href={selectedUniModal.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-edtech-secondary"
                    style={{
                      textDecoration: 'none',
                      padding: '10px 18px',
                      fontSize: '0.84rem'
                    }}
                  >
                    <Globe size={15} />
                    <span>Website trường</span>
                  </a>

                  <a
                    href={selectedUniModal.admissionsUrl || selectedUniModal.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-edtech-primary"
                    style={{
                      textDecoration: 'none',
                      padding: '10px 20px',
                      fontSize: '0.84rem'
                    }}
                  >
                    <span>Trang tuyển sinh chính thức</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* =========================================================================
          MODAL 3: CINEMA MODAL (THEMATIC VIDEO PLAYER + PRACTICAL TAKEAWAYS)
          ========================================================================= */}
      {activeVideoMajor &&
        currentVideo &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(10px)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
            onClick={() => setActiveVideoMajor(null)}
          >
            <div
              style={{
                background: '#0F172A',
                borderRadius: '24px',
                maxWidth: '900px',
                width: '100%',
                maxHeight: '92vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.5)',
                border: '1px solid #334155',
                color: '#FFFFFF'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                style={{
                  padding: '16px 22px',
                  borderBottom: '1px solid #1E293B',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.8rem' }}>{activeVideoMajor.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: '#FB7185',
                        fontWeight: '800',
                        textTransform: 'uppercase'
                      }}
                    >
                      {currentVideo.type || '1 NGÀY LÀM NGHỀ THỰC TẾ'}
                    </div>
                    <h3
                      style={{
                        fontSize: '1.15rem',
                        margin: 0,
                        fontWeight: '800',
                        color: '#FFFFFF'
                      }}
                    >
                      {activeVideoMajor.ten_nganh}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Đóng video"
                  onClick={() => setActiveVideoMajor(null)}
                  style={{
                    background: '#1E293B',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#94A3B8',
                    flexShrink: 0
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Episode Switcher if major has multiple videos */}
              {videosForActiveMajor.length > 1 && (
                <div
                  style={{
                    padding: '10px 22px',
                    background: '#1E293B',
                    display: 'flex',
                    gap: '8px',
                    overflowX: 'auto'
                  }}
                >
                  {videosForActiveMajor.map((ep, idx) => (
                    <button
                      key={ep.id || idx}
                      type="button"
                      onClick={() => setActiveEpisodeIndex(idx)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '999px',
                        fontSize: '0.76rem',
                        fontWeight: '750',
                        border:
                          idx === activeEpisodeIndex
                            ? '1.5px solid #FB7185'
                            : '1px solid #334155',
                        background: idx === activeEpisodeIndex ? '#E11D48' : '#0F172A',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Tập {idx + 1}: {ep.type || 'Thực tế nghề'} ({ep.duration || '09:00'})
                    </button>
                  ))}
                </div>
              )}

              {/* Cinema Video Player */}
              <div style={{ position: 'relative', paddingTop: '56.25%', background: '#000000' }}>
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  src={`https://www.youtube-nocookie.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info & Takeaways */}
              <div style={{ padding: '18px 22px', background: '#1E293B' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: currentVideo.keyTakeaways?.length ? '14px' : 0
                  }}
                >
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '1rem', color: '#FFFFFF' }}>
                      {currentVideo.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
                      Kênh: {currentVideo.channel} • Thời lượng: {currentVideo.duration}
                    </div>
                  </div>

                  <a
                    href={directYoutubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                      color: '#FFFFFF',
                      padding: '8px 18px',
                      borderRadius: '999px',
                      fontWeight: '800',
                      fontSize: '0.82rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Play size={14} fill="#FFFFFF" />
                    <span>Mở trên YouTube ↗</span>
                  </a>
                </div>

                {Array.isArray(currentVideo.keyTakeaways) &&
                  currentVideo.keyTakeaways.length > 0 && (
                    <div
                      style={{
                        borderTop: '1px solid #334155',
                        paddingTop: '12px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                        gap: '8px'
                      }}
                    >
                      {currentVideo.keyTakeaways.slice(0, 3).map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: 'rgba(15, 23, 42, 0.65)',
                            border: '1px solid #334155',
                            borderRadius: '10px',
                            padding: '8px 10px',
                            fontSize: '0.78rem',
                            color: '#CBD5E1',
                            lineHeight: '1.45',
                            display: 'flex',
                            gap: '6px',
                            alignItems: 'flex-start'
                          }}
                        >
                          <span style={{ color: '#34D399', fontWeight: '900' }}>✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
