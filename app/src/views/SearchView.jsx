import React, { useState, useEffect } from 'react';
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
  Flame, 
  Award,
  Clock,
  Tv,
  Building2,
  MapPin,
  Globe,
  RotateCw,
  Undo2,
  GraduationCap,
  TrendingUp,
  DollarSign,
  ShieldAlert,
  Compass,
  Check
} from 'lucide-react';
import { 
  MAJORS_DATA, 
  COMBINATIONS_DATA, 
  UNIVERSITIES_DATA,
  EXAM_METHODS_2026,
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
  
  // Sync when initialQuery changes
  useEffect(() => {
    if (initialQuery !== undefined) {
      setSearchKeyword(initialQuery);
      if (initialQuery.trim()) {
        setActiveTab('nganh');
      }
    }
  }, [initialQuery]);

  // University Filter States (Multi-dimensional)
  const [selectedUniversityType, setSelectedUniversityType] = useState('all'); // 'all' | 'cong-lap-trong-diem' | 'cong-lap-dia-phuong' | 'quoc-te' | 'tu-thuc' | 'su-pham'
  const [selectedProvinceGroup, setSelectedProvinceGroup] = useState('all');
  const [selectedScoreRange, setSelectedScoreRange] = useState('all');
  const [selectedTuitionRange, setSelectedTuitionRange] = useState('all');

  // Modals
  const [selectedMajorModal, setSelectedMajorModal] = useState(null);
  const [selectedUniModal, setSelectedUniModal] = useState(null);
  const [activeVideoMajor, setActiveVideoMajor] = useState(null);
  const [activeEpisodeIndex, setActiveEpisodeIndex] = useState(0);
  const [cinemaMode, setCinemaMode] = useState('youtube'); // 'youtube' | 'interactive'
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);
  const [savedMajorIds, setSavedMajorIds] = useState([]);
  const [flippedUniIds, setFlippedUniIds] = useState([]);

  const toggleFlipUni = (uniId) => {
    setFlippedUniIds(prev => 
      prev.includes(uniId) ? prev.filter(id => id !== uniId) : [...prev, uniId]
    );
  };

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (activeVideoMajor || selectedMajorModal || selectedUniModal) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [activeVideoMajor, selectedMajorModal, selectedUniModal]);

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

  const UNIVERSITY_TYPES = [
    { id: 'all', label: 'Tất cả loại hình' },
    { id: 'cong-lap-trong-diem', label: '🏛️ Công lập Trọng điểm' },
    { id: 'cong-lap-dia-phuong', label: '🎯 Công lập Địa phương (Vừa sức)' },
    { id: 'quoc-te', label: '🌐 Quốc tế & Liên kết' },
    { id: 'tu-thuc', label: '⚡ Tư thục Năng động' },
    { id: 'su-pham', label: '🎓 Sư phạm & LLVT' }
  ];

  const PROVINCE_GROUPS = [
    { id: 'all', label: 'Tất cả 3 miền' },
    { id: 'hanoi', label: '🏛️ Hà Nội' },
    { id: 'thainguyen', label: '⛰️ Thái Nguyên' },
    { id: 'haiphong-quangninh', label: '⚓ Hải Phòng & Quảng Ninh' },
    { id: 'dongbang-songhong', label: '🌾 Nam Định, Thái Bình, Hưng Yên, Bắc Ninh...' },
    { id: 'thanh-nghe-tinh', label: '🌿 Thanh - Nghệ - Tĩnh' },
    { id: 'danang-hue', label: '🌊 Huế & Đà Nẵng' },
    { id: 'namtrungbo-taynguyen', label: '☀️ Nam Trung Bộ & Tây Nguyên' },
    { id: 'tphcm-dongnambo', label: '🏙️ TP.HCM & Đông Nam Bộ' },
    { id: 'cantho-dbscl', label: '🛶 Cần Thơ & ĐBSCL' }
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

  const activeProvinceObj = PROVINCE_GROUPS.find(p => p.id === selectedProvinceGroup) || PROVINCE_GROUPS[0];

  // Majors offered in the currently selected region
  const regionalMajorIds = useMemo(() => {
    if (selectedProvinceGroup === 'all') return null;
    const unisInRegion = (UNIVERSITIES_DATA || []).filter(u => u.provinceGroup === selectedProvinceGroup);
    const set = new Set();
    unisInRegion.forEach(u => {
      if (Array.isArray(u.majors)) {
        u.majors.forEach(mId => set.add(mId));
      }
    });
    return set;
  }, [selectedProvinceGroup]);

  const regionalUnisCount = useMemo(() => {
    if (selectedProvinceGroup === 'all') return (UNIVERSITIES_DATA || []).length;
    return (UNIVERSITIES_DATA || []).filter(u => u.provinceGroup === selectedProvinceGroup).length;
  }, [selectedProvinceGroup]);

  const regionalMajorsCount = useMemo(() => {
    if (selectedProvinceGroup === 'all') return (MAJORS_DATA || []).length;
    return regionalMajorIds ? regionalMajorIds.size : (MAJORS_DATA || []).length;
  }, [selectedProvinceGroup, regionalMajorIds]);

  // Helper to get colleges offering a major, prioritizing the selected provinceGroup
  const getCollegesForMajor = (majorId) => {
    const offeringUnis = (UNIVERSITIES_DATA || []).filter(u => u.majors && u.majors.includes(majorId));
    if (selectedProvinceGroup !== 'all') {
      const regional = offeringUnis.filter(u => u.provinceGroup === selectedProvinceGroup);
      const others = offeringUnis.filter(u => u.provinceGroup !== selectedProvinceGroup);
      const list = [
        ...regional.map(u => ({ ...u, isRegional: true })),
        ...others.map(u => ({ ...u, isRegional: false }))
      ];
      return list.slice(0, 4);
    }
    return offeringUnis.slice(0, 4).map(u => ({ ...u, isRegional: false }));
  };

  // Filter logic for Majors
  const filteredMajors = MAJORS_DATA.filter(m => {
    if (selectedGroup && m.nhom_nganh !== selectedGroup) return false;
    if (selectedCombo && !m.to_hop.includes(selectedCombo)) return false;
    if (searchKeyword.trim()) {
      const kw = searchKeyword.toLowerCase().trim();
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
  }).sort((a, b) => {
    if (regionalMajorIds) {
      const aInRegion = regionalMajorIds.has(a.id);
      const bInRegion = regionalMajorIds.has(b.id);
      if (aInRegion && !bInRegion) return -1;
      if (!aInRegion && bInRegion) return 1;
    }
    return 0;
  });

  // Filter logic for Universities (Multi-dimensional)
  const filteredUniversities = (UNIVERSITIES_DATA || []).filter(u => {
    if (selectedUniversityType !== 'all' && u.typeCategory !== selectedUniversityType) return false;
    if (selectedProvinceGroup !== 'all' && u.provinceGroup !== selectedProvinceGroup) return false;
    if (selectedScoreRange !== 'all' && u.benchmarkScoreRange !== selectedScoreRange) return false;
    if (selectedTuitionRange !== 'all' && u.tuitionLevel !== selectedTuitionRange) return false;

    if (searchKeyword.trim()) {
      const kw = searchKeyword.toLowerCase().trim();
      const match = u.name.toLowerCase().includes(kw) ||
                    u.code.toLowerCase().includes(kw) ||
                    (u.shortName && u.shortName.toLowerCase().includes(kw)) ||
                    (u.city && u.city.toLowerCase().includes(kw)) ||
                    (u.type && u.type.toLowerCase().includes(kw)) ||
                    (u.highlight && u.highlight.toLowerCase().includes(kw)) ||
                    (u.benchmarks && u.benchmarks.toLowerCase().includes(kw));
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
    onSelectForRoadmap(majorName);
    onNavigate('roadmap');
  };

  const videosForActiveMajor = activeVideoMajor ? getVideosForMajor(activeVideoMajor.id) : [];
  const currentVideo = videosForActiveMajor[activeEpisodeIndex] || videosForActiveMajor[0];
  const timelineSteps = activeVideoMajor ? getWorkdayTimeline(activeVideoMajor.id) : [];
  const currentTimelineStep = timelineSteps[activeTimelineStep] || timelineSteps[0];

  const directYoutubeUrl = currentVideo ? (
    currentVideo.youtubeUrl || 
    (currentVideo.youtubeId 
      ? `https://www.youtube.com/watch?v=${currentVideo.youtubeId}`
      : `https://www.youtube.com/results?search_query=${encodeURIComponent((activeVideoMajor?.ten_nganh || '') + ' một ngày làm việc hướng nghiệp thực tế')}`)
  ) : '#';

  return (
    <div className="tab-pane-animate">
      {/* Header Banner */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div className="pill-badge" style={{ marginBottom: '10px' }}>🔍 BƯỚC 2 / 4 • TRA CỨU ĐA CHIỀU 2026</div>
        <h1 style={{ fontSize: '2.35rem', marginBottom: '8px' }}>Cơ sở dữ liệu Tuyển sinh Toàn diện</h1>
        <p style={{ color: '#64748B', maxWidth: '64ch', margin: '0 auto', fontSize: '0.98rem' }}>
          Tra cứu 52 ngành học đón đầu AI & Vi mạch, 110+ trường Đại học khắp 3 miền, cùng kho video rạp phim nghề nghiệp thực tế.
        </p>
      </div>

      {/* =========================================================================
          GLOBAL REGIONAL BAR (THANH CHỌN KHU VỰC CỐ ĐỊNH XUYÊN SUỐT)
          ========================================================================= */}
      <div style={{ background: '#FFFFFF', borderRadius: '22px', border: '1.5px solid #E0E7FF', padding: '16px 20px', marginBottom: '24px', boxShadow: '0 4px 20px -4px rgba(79, 70, 229, 0.08)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#1E293B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              📍 Bộ Lọc Khu Vực Toàn Quốc:
            </span>
            <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: '600' }}>
              (Đồng bộ tìm kiếm Trường Đại học & Ngành học theo địa bàn)
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
              <span>✕ Xem lại Toàn quốc (3 miền)</span>
            </button>
          )}
        </div>

        {/* 10 Region Pills */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'thin' }}>
          {PROVINCE_GROUPS.map(prov => {
            const isSelected = selectedProvinceGroup === prov.id;
            const uniCount = prov.id === 'all'
              ? (UNIVERSITIES_DATA || []).length
              : (UNIVERSITIES_DATA || []).filter(u => u.provinceGroup === prov.id).length;

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
                  background: isSelected ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : '#F8FAFC',
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
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: '800',
                  padding: '1px 6px',
                  borderRadius: '999px',
                  background: isSelected ? 'rgba(255, 255, 255, 0.25)' : '#E2E8F0',
                  color: isSelected ? '#FFFFFF' : '#475569'
                }}>
                  {uniCount} trường
                </span>
              </button>
            );
          })}
        </div>

        {/* Regional Hub Spotlight Banner (When a specific region is active) */}
        {selectedProvinceGroup !== 'all' && (
          <div style={{
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
          }}>
            <div>
              <div style={{ fontSize: '0.96rem', fontWeight: '800', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>🎯</span>
                <span>Bảng Tổng Quan Khu Vực: {activeProvinceObj?.label}</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#475569', marginTop: '3px' }}>
                Hệ sinh thái gồm <strong>{regionalUnisCount} trường Đại học/Học viện</strong> & <strong>{regionalMajorsCount} ngành đào tạo</strong> tuyển sinh trực tiếp tại địa bàn này.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
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
                <span>Xem {regionalUnisCount} Trường tại đây</span>
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
                <span>Xem {regionalMajorsCount} Ngành tại đây</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Tab Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={() => setActiveTab('nganh')}
          style={{
            padding: '10px 20px',
            borderRadius: '999px',
            border: activeTab === 'nganh' ? '2px solid #4F46E5' : '1.5px solid #CBD5E1',
            background: activeTab === 'nganh' ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : '#FFFFFF',
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

        <button
          type="button"
          onClick={() => setActiveTab('truong')}
          style={{
            padding: '10px 20px',
            borderRadius: '999px',
            border: activeTab === 'truong' ? '2px solid #4F46E5' : '1.5px solid #CBD5E1',
            background: activeTab === 'truong' ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : '#FFFFFF',
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
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('video')}
          style={{
            padding: '10px 20px',
            borderRadius: '999px',
            border: activeTab === 'video' ? '2px solid #E11D48' : '1.5px solid #CBD5E1',
            background: activeTab === 'video' ? 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)' : '#FFFFFF',
            color: activeTab === 'video' ? '#FFFFFF' : '#1E293B',
            fontWeight: '700',
            fontSize: '0.92rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: activeTab === 'video' ? '0 8px 20px -4px rgba(225, 29, 72, 0.35)' : 'var(--shadow-sm)',
            transition: 'all 0.2s ease'
          }}
        >
          <Video size={18} />
          <span>Video Trải Nghiệm Nghề</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('tohop')}
          style={{
            padding: '10px 20px',
            borderRadius: '999px',
            border: activeTab === 'tohop' ? '2px solid #4F46E5' : '1.5px solid #CBD5E1',
            background: activeTab === 'tohop' ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)' : '#FFFFFF',
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
          <span>Tổ hợp & Kỳ thi 2026 ({COMBINATIONS_DATA.length})</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: NGÀNH ĐÀO TẠO (MAJOR DIRECTORY)
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
              const collegesForMajor = getCollegesForMajor(m.id);
              const isOfferedInRegion = regionalMajorIds ? regionalMajorIds.has(m.id) : false;

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

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '4px', color: '#1E293B', fontWeight: '800' }}>{m.ten_nganh}</h3>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: '600', marginBottom: '10px' }}>
                      Mã ngành: <span style={{ color: '#4F46E5', fontWeight: '700' }}>{m.ma_nganh}</span>
                    </div>

                    {/* DEMAND & AI RISK BADGES (PHASE 4.1) */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA' }}>
                        🔥 Khát nhân lực: {m.demandLevel || 'Rất cao'}
                      </span>
                      <span style={{ fontSize: '0.72rem', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0' }}>
                        🤖 Rủi ro AI: {m.aiRiskLevel || 'Thấp (15%)'}
                      </span>
                    </div>

                    {/* REDESIGNED VIDEO BANNER (NO OVERFLOW / NO CUT-OFF TEXT) */}
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
                          <span className="video-banner-pill">🎬 {featuredVideo.type || '1 Ngày Làm Nghề'}</span>
                          <span className="video-banner-action-badge">
                            {featuredVideo.duration || '09:15'} • Xem ngay ▶
                          </span>
                        </div>
                        <span className="video-banner-title">{featuredVideo.title}</span>
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

                    {/* Colleges offering this major (Prioritized by Selected Region) */}
                    <div style={{ marginBottom: '14px', background: '#F8FAFC', borderRadius: '12px', padding: '10px 12px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Building2 size={13} color="#4F46E5" />
                          <span>Trường tiêu biểu {selectedProvinceGroup !== 'all' ? `(ưu tiên ${activeProvinceObj?.label.replace(/^[^\s]+\s*/, '')}):` : ':'}</span>
                        </span>
                        {selectedProvinceGroup !== 'all' && isOfferedInRegion && (
                          <span style={{ fontSize: '0.66rem', fontWeight: '800', color: '#047857', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '1px 6px', borderRadius: '4px' }}>
                            ✓ Có tại vùng
                          </span>
                        )}
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {collegesForMajor.map((uni) => (
                          <button
                            key={uni.id}
                            type="button"
                            title={`Bấm để xem thông tin chi tiết trường ${uni.name} (${uni.code})`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedUniModal(uni);
                            }}
                            style={{
                              fontSize: '0.74rem',
                              fontWeight: uni.isRegional ? '850' : '650',
                              padding: '4px 9px',
                              borderRadius: '8px',
                              background: uni.isRegional ? '#EEF2FF' : '#FFFFFF',
                              color: uni.isRegional ? '#4338CA' : '#334155',
                              border: uni.isRegional ? '1.5px solid #818CF8' : '1px solid #CBD5E1',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <span>{uni.isRegional ? '📍' : '🏛️'}</span>
                            <span>{uni.shortName || uni.code}</span>
                            <span style={{ fontSize: '0.68rem', opacity: 0.85, color: uni.isRegional ? '#4338CA' : '#64748B' }}>
                              ({uni.benchmarks?.split('-')[0]?.trim() || m.diem_tb?.split('-')[0]?.trim() || '24.5'}đ)
                            </span>
                          </button>
                        ))}
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
          TAB 2: TRƯỜNG ĐẠI HỌC 3 MIỀN (EQUAL HEIGHT & 3D FLIP CARDS)
          ========================================================================= */}
      {activeTab === 'truong' && (
        <div>
          {/* Smart Multi-Dimensional University Filters */}
          <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '22px', border: '1px solid #E0E7FF', boxShadow: 'var(--shadow-card)', marginBottom: '28px' }}>
            
            {/* Header info & reset */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid #F1F5F9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1E293B' }}>
                  🏛️ Hệ Sinh Thái 110+ Đại Học & Học Viện Toàn Quốc
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', padding: '3px 10px', borderRadius: '999px', background: '#EEF2FF', color: '#4F46E5', border: '1px solid #C7D2FE' }}>
                  Tìm thấy {filteredUniversities.length} trường
                </span>
              </div>

              {(selectedUniversityType !== 'all' || selectedProvinceGroup !== 'all' || selectedScoreRange !== 'all' || selectedTuitionRange !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedUniversityType('all');
                    setSelectedProvinceGroup('all');
                    setSelectedScoreRange('all');
                    setSelectedTuitionRange('all');
                  }}
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: '#E11D48',
                    background: '#FFE4E6',
                    border: '1px solid #FECDD3',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    cursor: 'pointer'
                  }}
                >
                  ✕ Đặt lại tất cả bộ lọc
                </button>
              )}
            </div>

            {/* 1. University Type Filter */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.04em' }}>
                🏫 Phân loại theo Loại hình trường:
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {UNIVERSITY_TYPES.map(tp => (
                  <button
                    key={tp.id}
                    type="button"
                    onClick={() => setSelectedUniversityType(tp.id)}
                    style={{
                      padding: '7px 14px',
                      borderRadius: '999px',
                      border: selectedUniversityType === tp.id ? '2px solid #4F46E5' : '1px solid #CBD5E1',
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

            {/* 2. Province / Region Selector Chips */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.04em' }}>
                📍 Khu vực & Tỉnh thành (Bắc - Trung - Nam):
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {PROVINCE_GROUPS.map(prov => (
                  <button
                    key={prov.id}
                    type="button"
                    onClick={() => setSelectedProvinceGroup(prov.id)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '10px',
                      fontSize: '0.78rem',
                      fontWeight: selectedProvinceGroup === prov.id ? '800' : '600',
                      background: selectedProvinceGroup === prov.id ? '#4F46E5' : '#F1F5F9',
                      color: selectedProvinceGroup === prov.id ? '#FFFFFF' : '#475569',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {prov.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Score & Tuition Filter Chips */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', paddingTop: '14px', borderTop: '1px dashed #E2E8F0' }}>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>
                  🎯 Phân khúc Điểm chuẩn xét tuyển:
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {SCORE_RANGES.map(sc => (
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
                        border: selectedScoreRange === sc.id ? '1.5px solid #059669' : '1px solid #CBD5E1',
                        cursor: 'pointer'
                      }}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>
                  💳 Khả năng Tài chính / Học phí gia đình:
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {TUITION_RANGES.map(tu => (
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
                        border: selectedTuitionRange === tu.id ? '1.5px solid #D97706' : '1px solid #CBD5E1',
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

          {/* Universities Bento Grid with 3D Flip Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
            {filteredUniversities.map(u => {
              const isFlipped = flippedUniIds.includes(u.id);

              return (
                <div key={u.id} className="uni-flip-card-wrapper">
                  <div className={`uni-flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                    
                    {/* ===== FRONT FACE (MẶT TRƯỚC - EQUAL HEIGHT & NO SCROLLBAR) ===== */}
                    <div className="uni-card-face uni-card-front">
                      <div>
                        {/* University Brand Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', width: '100%' }}>
                            <UniversityLogo 
                              code={u.code} 
                              name={u.name} 
                              shortName={u.shortName}
                              website={u.website} 
                              logoUrl={u.logoUrl}
                              size={54} 
                            />
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                                <h3 style={{ fontSize: '1.08rem', margin: 0, color: '#1E293B', fontWeight: '800', lineHeight: '1.3' }}>
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
                        <div style={{ background: '#FAF5FF', border: '1px solid #E9D5FF', borderRadius: '14px', padding: '12px 14px', marginBottom: '12px' }}>
                          <div style={{ fontSize: '0.84rem', color: '#6B21A8', fontWeight: '700', marginBottom: '4px' }}>
                            🎯 Điểm chuẩn tham khảo: <strong>{u.benchmarks}</strong>
                          </div>
                          <div style={{ fontSize: '0.82rem', color: '#475569' }}>
                            💳 Học phí dự kiến: <strong>{u.tuition}</strong>
                          </div>
                        </div>

                        {/* Highlights */}
                        <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.5', margin: '0 0 12px' }}>
                          {u.highlight}
                        </p>

                        {/* Top Majors Tags (Interactive: Click to open Major Details Modal) */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                          {u.majors.slice(0, 5).map(mId => {
                            const majorObj = MAJORS_DATA.find(m => m.id === mId);
                            return (
                              <button
                                key={mId}
                                type="button"
                                title={`Bấm để xem thông tin chi tiết ngành ${majorObj?.ten_nganh || mId}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (majorObj) {
                                    setSelectedMajorModal(majorObj);
                                  } else {
                                    setSearchKeyword(mId);
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
                                <span>{majorObj?.icon || '🎓'}</span>
                                <span>{majorObj?.ten_nganh || mId}</span>
                                <span style={{ fontSize: '0.62rem', color: '#4F46E5', fontWeight: '900' }}>↗</span>
                              </button>
                            );
                          })}
                          {u.majors.length > 5 && (
                            <button
                              type="button"
                              title={`Xem toàn bộ ${u.majors.length} ngành đào tạo của trường`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFlipUni(u.id);
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
                              +{u.majors.length - 5} ngành khác
                            </button>
                          )}
                        </div>
                      </div>

                      {/* 3D Flip Trigger Call-To-Action (Pinned to Bottom) */}
                      <div>
                        <button
                          type="button"
                          className="uni-flip-trigger-btn"
                          onClick={() => toggleFlipUni(u.id)}
                          title="Bấm để lật thẻ xem chi tiết tuyển sinh, học bổng & việc làm"
                        >
                          <RotateCw size={15} className="spin-flip-icon" />
                          <span>Lật thẻ xem chi tiết tuyển sinh & việc làm 2026 ↻</span>
                        </button>

                        {/* Action Footer */}
                        <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '10px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                          <a
                            href={u.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-edtech-secondary"
                            style={{ fontSize: '0.8rem', padding: '7px 12px', textDecoration: 'none' }}
                          >
                            <Globe size={13} />
                            <span>Website</span>
                          </a>

                          <button
                            type="button"
                            className="btn-edtech-primary"
                            style={{ fontSize: '0.8rem', padding: '7px 12px' }}
                            onClick={() => {
                              setSelectedMajorModal(null);
                              setSearchKeyword(u.code);
                              setActiveTab('nganh');
                            }}
                          >
                            <Search size={13} />
                            <span>Xem ngành ({u.majors.length})</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* ===== BACK FACE (MẶT SAU: HỒ SƠ CHI TIẾT & BIỂU ĐỒ 3 NĂM) ===== */}
                    <div className="uni-card-face uni-card-back">
                      <div>
                        {/* Back Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', paddingBottom: '10px', borderBottom: '1.5px dashed #CBD5E1' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <UniversityLogo code={u.code} name={u.name} shortName={u.shortName} website={u.website} logoUrl={u.logoUrl} size={38} />
                            <div>
                              <div style={{ fontWeight: '800', color: '#1E293B', fontSize: '0.94rem', lineHeight: '1.2' }}>{u.name}</div>
                              <div style={{ fontSize: '0.72rem', color: '#4F46E5', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Sparkles size={11} />
                                <span>HỒ SƠ TUYỂN SINH & ĐIỂM CHUẨN 2026</span>
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            className="uni-back-unflip-btn"
                            onClick={() => toggleFlipUni(u.id)}
                            title="Lật lại mặt trước"
                          >
                            <Undo2 size={13} />
                            <span>Mặt trước</span>
                          </button>
                        </div>

                        {/* Benchmark History Mini Matrix */}
                        {u.benchmarkHistory && (
                          <div className="uni-detail-section" style={{ borderLeft: '4px solid #8B5CF6' }}>
                            <div className="uni-detail-section-title" style={{ color: '#7C3AED' }}>
                              <TrendingUp size={14} />
                              <span>Lịch sử Điểm chuẩn 3 năm & Dự báo 2026</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', textAlign: 'center', marginBottom: '6px' }}>
                              <div style={{ background: '#F5F3FF', padding: '6px 2px', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.65rem', color: '#6D28D9', fontWeight: '700' }}>2023</div>
                                <div style={{ fontSize: '0.75rem', fontWeight: '900', color: '#4C1D95' }}>{u.benchmarkHistory["2023"]?.split('–')[0]?.trim() || '24.5'}</div>
                              </div>
                              <div style={{ background: '#F5F3FF', padding: '6px 2px', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.65rem', color: '#6D28D9', fontWeight: '700' }}>2024</div>
                                <div style={{ fontSize: '0.75rem', fontWeight: '900', color: '#4C1D95' }}>{u.benchmarkHistory["2024"]?.split('–')[0]?.trim() || '24.0'}</div>
                              </div>
                              <div style={{ background: '#F5F3FF', padding: '6px 2px', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.65rem', color: '#6D28D9', fontWeight: '700' }}>2025</div>
                                <div style={{ fontSize: '0.75rem', fontWeight: '900', color: '#4C1D95' }}>{u.benchmarkHistory["2025"]?.split('–')[0]?.trim() || '24.5'}</div>
                              </div>
                              <div style={{ background: '#EDE9FE', padding: '6px 2px', borderRadius: '8px', border: '1px solid #C4B5FD' }}>
                                <div style={{ fontSize: '0.65rem', color: '#7C3AED', fontWeight: '800' }}>DỰ BÁO 26</div>
                                <div style={{ fontSize: '0.75rem', fontWeight: '900', color: '#6D28D9' }}>{u.benchmarkHistory.forecast2026?.split('–')[0]?.trim() || '25.0'}</div>
                              </div>
                            </div>
                            <div style={{ fontSize: '0.73rem', color: '#6D28D9', display: 'flex', justifyContent: 'space-between' }}>
                              <span>📊 ĐGNL/ĐGTD: <strong>{u.benchmarkHistory.dgnlScore || '70+'}</strong></span>
                              <span>📜 Ngoại ngữ: <strong>{u.benchmarkHistory.ieltsMin || 'IELTS 5.5+'}</strong></span>
                            </div>
                          </div>
                        )}

                        {/* Section 1: Phương thức xét tuyển */}
                        <div className="uni-detail-section" style={{ borderLeft: '4px solid #4F46E5' }}>
                          <div className="uni-detail-section-title" style={{ color: '#4338CA' }}>
                            <GraduationCap size={14} />
                            <span>Phương thức tuyển sinh 2026</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {(u.admissionMethods || [
                              'Xét kết quả thi tốt nghiệp THPT 2026',
                              'Xét Đánh giá năng lực / Đánh giá tư duy',
                              'Xét kết hợp chứng chỉ ngoại ngữ quốc tế'
                            ]).map((method, idx) => (
                              <div key={idx} style={{ fontSize: '0.76rem', color: '#334155', display: 'flex', alignItems: 'flex-start', gap: '5px', lineHeight: '1.35' }}>
                                <span style={{ color: '#4F46E5', fontWeight: '900', fontSize: '0.7rem', marginTop: '1px' }}>✓</span>
                                <span>{method}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Section 2: Sinh hoạt phí & Đời sống */}
                        {u.campusVibe && (
                          <div className="uni-detail-section" style={{ borderLeft: '4px solid #059669' }}>
                            <div className="uni-detail-section-title" style={{ color: '#047857' }}>
                              <Building2 size={14} />
                              <span>Ký túc xá & Chi phí sinh hoạt</span>
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
                        <div className="uni-detail-section" style={{ borderLeft: '4px solid #D97706' }}>
                          <div className="uni-detail-section-title" style={{ color: '#B45309' }}>
                            <CheckCircle2 size={14} />
                            <span>Việc làm & Khởi điểm</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                            <div style={{ background: '#ECFDF5', padding: '6px 8px', borderRadius: '8px' }}>
                              <div style={{ fontSize: '0.64rem', color: '#065F46', fontWeight: '800' }}>TỶ LỆ VIỆC LÀM</div>
                              <div style={{ fontSize: '0.8rem', fontWeight: '900', color: '#047857' }}>{u.employmentRate || '97.5%'}</div>
                            </div>
                            <div style={{ background: '#EEF2FF', padding: '6px 8px', borderRadius: '8px' }}>
                              <div style={{ fontSize: '0.64rem', color: '#3730A3', fontWeight: '800' }}>LƯƠNG KHỞI ĐIỂM</div>
                              <div style={{ fontSize: '0.8rem', fontWeight: '900', color: '#4338CA' }}>{u.startingSalary || '11 - 25 tr/tháng'}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Back Footer Actions */}
                      <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '10px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                        <button
                          type="button"
                          className="btn-edtech-secondary"
                          style={{ fontSize: '0.78rem', padding: '6px 12px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                          onClick={() => toggleFlipUni(u.id)}
                        >
                          <Undo2 size={13} />
                          <span>↩ Quay lại</span>
                        </button>

                        <button
                          type="button"
                          className="btn-edtech-primary"
                          style={{ fontSize: '0.78rem', padding: '6px 14px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                          onClick={() => setSelectedUniModal(u)}
                        >
                          <span>Xem toàn bộ ngành ↗</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
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
              window.scrollTo({ top: 380, behavior: 'smooth' });
            }
          }}
          onSearchQuery={(q) => {
            setSearchKeyword(q);
            setActiveTab('nganh');
            window.scrollTo({ top: 380, behavior: 'smooth' });
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
            <h2 style={{ fontSize: '1.45rem', color: '#1E293B', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={22} color="#4F46E5" />
              <span>Tổ hợp môn xét tuyển chuẩn THPT 2026</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '20px' }}>
              Phân tích phổ điểm, chiến lược ôn thi phân bổ thời gian và các nhóm ngành hot tương ứng.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {COMBINATIONS_DATA.map((cb, idx) => (
                <div key={idx} className="card-box" style={{ background: '#FFFFFF', padding: '22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontSize: '1.35rem', fontWeight: '900', color: '#4F46E5', fontFamily: 'var(--font-display)' }}>
                      Khối {cb.ma}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '3px 10px', borderRadius: '999px', background: '#F1F5F9', color: '#475569' }}>
                      Chuẩn Bộ GD&ĐT
                    </span>
                  </div>

                  <div style={{ fontSize: '0.96rem', fontWeight: '800', color: '#1E293B', marginBottom: '8px' }}>
                    {cb.mon}
                  </div>

                  <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '10px 12px', marginBottom: '12px', border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: '700', marginBottom: '2px' }}>PHỔ ĐIỂM DỰ KIẾN</div>
                    <div style={{ fontSize: '0.84rem', color: '#334155', fontWeight: '600' }}>{cb.phoDiem}</div>
                  </div>

                  <div style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.5', marginBottom: '14px' }}>
                    💡 <strong>Mẹo bứt phá điểm số:</strong> {cb.meoOnThi}
                  </div>

                  <button
                    type="button"
                    className="btn-edtech-secondary"
                    style={{ width: '100%', fontSize: '0.82rem', padding: '8px', justifyContent: 'center' }}
                    onClick={() => {
                      setSelectedCombo(cb.ma);
                      setActiveTab('nganh');
                    }}
                  >
                    <span>Lọc ngành xét khối {cb.ma}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section B: Modern Exam Methods Guide (HSA, TSA, APT, IELTS) */}
          <div style={{ background: '#F8FAFC', borderRadius: '24px', padding: '28px', border: '1.5px solid #E2E8F0' }}>
            <h2 style={{ fontSize: '1.45rem', color: '#1E293B', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={22} color="#D97706" />
              <span>Cẩm nang Kỳ thi Độc lập 2026 (HSA, TSA, APT & Quy đổi IELTS)</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '22px' }}>
              Các phương thức xét tuyển sớm chiếm tới 50% - 60% chỉ tiêu của các trường đại học top đầu.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {/* HSA */}
              <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '18px', border: '1.5px solid #BAE6FD' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#0284C7', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '0.82rem' }}>HSA</div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', margin: 0, color: '#0369A1' }}>Đánh giá Năng lực ĐHQGHN</h3>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>150 câu hỏi / 195 phút</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: '1.5', margin: '0 0 10px' }}>
                  {EXAM_METHODS_2026.hsa.structure}
                </p>
                <div style={{ background: '#F0F9FF', padding: '8px 10px', borderRadius: '10px', fontSize: '0.78rem', color: '#0369A1' }}>
                  🎯 <strong>Mức điểm vàng:</strong> {EXAM_METHODS_2026.hsa.benchmarkGuide}
                </div>
              </div>

              {/* TSA */}
              <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '18px', border: '1.5px solid #FCA5A5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#B91C1C', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '0.82rem' }}>TSA</div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', margin: 0, color: '#991B1B' }}>Đánh giá Tư duy Bách Khoa</h3>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Thang điểm 100 • 3 phần thi</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: '1.5', margin: '0 0 10px' }}>
                  {EXAM_METHODS_2026.tsa.structure}
                </p>
                <div style={{ background: '#FEF2F2', padding: '8px 10px', borderRadius: '10px', fontSize: '0.78rem', color: '#991B1B' }}>
                  🎯 <strong>Mức điểm vàng:</strong> {EXAM_METHODS_2026.tsa.benchmarkGuide}
                </div>
              </div>

              {/* APT */}
              <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '18px', border: '1.5px solid #BBF7D0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#059669', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '0.82rem' }}>APT</div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', margin: 0, color: '#047857' }}>Đánh giá Năng lực ĐHQG TP.HCM</h3>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>120 câu hỏi / 150 phút (Thang 1.200)</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: '1.5', margin: '0 0 10px' }}>
                  {EXAM_METHODS_2026.apt.structure}
                </p>
                <div style={{ background: '#ECFDF5', padding: '8px 10px', borderRadius: '10px', fontSize: '0.78rem', color: '#047857' }}>
                  🎯 <strong>Mức điểm vàng:</strong> {EXAM_METHODS_2026.apt.benchmarkGuide}
                </div>
              </div>

              {/* IELTS Conversion */}
              <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '18px', border: '1.5px solid #E9D5FF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#7C3AED', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '0.82rem' }}>ENG</div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', margin: 0, color: '#6D28D9' }}>Quy đổi Chứng chỉ Quốc tế 2026</h3>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>IELTS, TOEFL, SAT, VSTEP</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {EXAM_METHODS_2026.ieltsConversion.rules.map((r, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', background: '#FAF5FF', padding: '5px 8px', borderRadius: '6px' }}>
                      <span style={{ fontWeight: '800', color: '#6D28D9' }}>IELTS {r.ielts}</span>
                      <span style={{ color: '#334155' }}>→ <strong>{r.thptEquivalent}</strong></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 1: BENTO CHI TIẾT NGÀNH ĐÀO TẠO (DATA ENRICHMENT PHASE 1.1)
          ========================================================================= */}
      {selectedMajorModal && createPortal(
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
            padding: '20px'
          }}
          onClick={() => setSelectedMajorModal(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '32px',
              position: 'relative',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
              border: '1px solid #CBD5E1'
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

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <span style={{ fontSize: '2.8rem' }}>{selectedMajorModal.icon}</span>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: '800', padding: '3px 10px', borderRadius: '999px', background: '#FEF3C7', color: '#B45309' }}>
                  {selectedMajorModal.nhom_nganh}
                </span>
                <h2 style={{ fontSize: '1.8rem', margin: '4px 0 0', color: '#1E293B', fontWeight: '900' }}>
                  {selectedMajorModal.ten_nganh}
                </h2>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: '600' }}>
                  Mã ngành tuyển sinh: <strong style={{ color: '#4F46E5' }}>{selectedMajorModal.ma_nganh}</strong>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
              {selectedMajorModal.mo_ta}
            </p>

            {/* Grid 1: Điểm chuẩn & Học phí */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '20px' }}>
              <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#64748B' }}>ĐIỂM CHUẨN THAM KHẢO</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#4F46E5', marginTop: '4px' }}>{selectedMajorModal.diem_tb}</div>
              </div>

              <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#64748B' }}>HỌC PHÍ DỰ KIẾN</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1E293B', marginTop: '4px' }}>{selectedMajorModal.hoc_phi}</div>
              </div>
            </div>

            {/* Grid 2: Lộ trình thu nhập (Salary Roadmap) */}
            {selectedMajorModal.salaryRoadmap && (
              <div style={{ background: '#F0FDF4', borderRadius: '18px', padding: '18px', border: '1px solid #BBF7D0', marginBottom: '20px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#15803D', textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <TrendingUp size={16} />
                  <span>Lộ trình Thu nhập Thực tế tại Việt Nam</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                  <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: '12px', border: '1px solid #DCFCE7' }}>
                    <div style={{ fontSize: '0.72rem', color: '#166534', fontWeight: '800' }}>🌱 FRESHER (0-1 NĂM)</div>
                    <div style={{ fontSize: '0.96rem', fontWeight: '900', color: '#15803D' }}>{selectedMajorModal.salaryRoadmap.fresher || '8 – 14 tr/tháng'}</div>
                  </div>
                  <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: '12px', border: '1px solid #DCFCE7' }}>
                    <div style={{ fontSize: '0.72rem', color: '#166534', fontWeight: '800' }}>⚡ JUNIOR / MID (2-4 NĂM)</div>
                    <div style={{ fontSize: '0.96rem', fontWeight: '900', color: '#15803D' }}>{selectedMajorModal.salaryRoadmap.mid || selectedMajorModal.salaryRoadmap.junior || '16 – 28 tr/tháng'}</div>
                  </div>
                  <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: '12px', border: '1px solid #DCFCE7' }}>
                    <div style={{ fontSize: '0.72rem', color: '#166534', fontWeight: '800' }}>👑 SENIOR / LEAD (5+ NĂM)</div>
                    <div style={{ fontSize: '0.96rem', fontWeight: '900', color: '#15803D' }}>{selectedMajorModal.salaryRoadmap.senior || '35 – 70+ tr/tháng'}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Pain Point 1: Góc khuất & Sự thật nghề nghiệp (Reality Check) */}
            {selectedMajorModal.realityCheck && (
              <div style={{ background: '#FFF1F2', borderRadius: '18px', padding: '18px', border: '1px solid #FECDD3', marginBottom: '18px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#BE123C', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <AlertCircle size={16} />
                  <span>Góc khuất & Áp lực thực tế của ngành</span>
                </div>
                {typeof selectedMajorModal.realityCheck === 'object' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#881337', lineHeight: '1.55' }}>
                    {selectedMajorModal.realityCheck.myth && (
                      <div><strong style={{ color: '#9F1239' }}>❌ Lầm tưởng:</strong> {selectedMajorModal.realityCheck.myth}</div>
                    )}
                    {selectedMajorModal.realityCheck.truth && (
                      <div><strong style={{ color: '#9F1239' }}>✅ Sự thật:</strong> {selectedMajorModal.realityCheck.truth}</div>
                    )}
                    {selectedMajorModal.realityCheck.pressureNote && (
                      <div style={{ fontStyle: 'italic', color: '#BE123C', fontSize: '0.84rem', marginTop: '2px' }}>
                        ⚡ <strong>Lưu ý áp lực:</strong> {selectedMajorModal.realityCheck.pressureNote}
                      </div>
                    )}
                  </div>
                ) : (
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#881337', lineHeight: '1.55' }}>
                    {String(selectedMajorModal.realityCheck)}
                  </p>
                )}
              </div>
            )}

            {/* Pain Point 2: Ai KHÔNG hợp ngành này */}
            {selectedMajorModal.whoShouldAvoid && (
              <div style={{ background: '#FEF3C7', borderRadius: '18px', padding: '18px', border: '1px solid #FDE68A', marginBottom: '18px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#B45309', textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldAlert size={16} />
                  <span>Ai KHÔNG nên chọn ngành này? (Sàng lọc tránh hối hận)</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#78350F', lineHeight: '1.55' }}>
                  {typeof selectedMajorModal.whoShouldAvoid === 'string' ? selectedMajorModal.whoShouldAvoid : JSON.stringify(selectedMajorModal.whoShouldAvoid)}
                </p>
              </div>
            )}

            {/* Pain Point 3: Mức độ ảnh hưởng của AI 2026-2030 */}
            {selectedMajorModal.aiImpact && (
              <div style={{ background: '#EFF6FF', borderRadius: '18px', padding: '18px', border: '1px solid #BFDBFE', marginBottom: '18px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#1D4ED8', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={16} />
                  <span>Ảnh hưởng của Trí tuệ Nhân tạo (AI) 2026 – 2030</span>
                </div>
                {typeof selectedMajorModal.aiImpact === 'object' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#1E40AF', lineHeight: '1.55' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ background: '#DBEAFE', color: '#1E40AF', padding: '2px 8px', borderRadius: '6px', fontWeight: '800', fontSize: '0.78rem' }}>
                        Tỷ lệ rủi ro AI: {selectedMajorModal.aiImpact.riskPercentage || 35}% ({selectedMajorModal.aiImpact.riskLevel || 'Trung bình'})
                      </span>
                    </div>
                    {selectedMajorModal.aiImpact.aiRole && (
                      <div><strong>🤖 Tác động của AI:</strong> {selectedMajorModal.aiImpact.aiRole}</div>
                    )}
                    {selectedMajorModal.aiImpact.coreSkillsToMasterAI && (
                      <div><strong>💡 Kỹ năng để làm chủ AI:</strong> {selectedMajorModal.aiImpact.coreSkillsToMasterAI}</div>
                    )}
                  </div>
                ) : (
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#1E40AF', lineHeight: '1.55' }}>
                    {String(selectedMajorModal.aiImpact)}
                  </p>
                )}
              </div>
            )}

            {/* Core University Subjects & Top Employers */}
            {selectedMajorModal.coreSubjects && selectedMajorModal.coreSubjects.length > 0 && (
              <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '16px', border: '1px solid #E2E8F0', marginBottom: '18px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#334155', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <BookOpen size={16} color="#4F46E5" />
                  <span>Môn học Cốt lõi ở Bậc Đại học</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {selectedMajorModal.coreSubjects.map((sub, i) => (
                    <span key={i} style={{ fontSize: '0.78rem', background: '#FFFFFF', border: '1px solid #CBD5E1', padding: '4px 10px', borderRadius: '8px', color: '#1E293B', fontWeight: '600' }}>
                      • {sub}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Training Universities with Official Logos */}
            {selectedMajorModal.truong_tieu_bieu && Array.isArray(selectedMajorModal.truong_tieu_bieu) && selectedMajorModal.truong_tieu_bieu.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: '#1E293B', fontWeight: '800' }}>Các trường Đại học đào tạo tiêu biểu:</h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {selectedMajorModal.truong_tieu_bieu.map((trName, i) => {
                    const uniObj = (UNIVERSITIES_DATA || []).find(u => 
                      u.name.toLowerCase().includes(trName.toLowerCase()) || 
                      trName.toLowerCase().includes(u.shortName?.toLowerCase() || 'xyz')
                    );
                    return (
                      <div 
                        key={i} 
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '8px', 
                          padding: '6px 14px', 
                          borderRadius: '12px', 
                          background: '#F8FAFC', 
                          border: '1px solid #CBD5E1', 
                          fontSize: '0.84rem', 
                          fontWeight: '700',
                          color: '#1E293B' 
                        }}
                      >
                        {uniObj && (
                          <UniversityLogo code={uniObj.code} name={uniObj.name} shortName={uniObj.shortName} website={uniObj.website} size={24} />
                        )}
                        <span>{trName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Modal Actions */}
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
        </div>,
        document.body
      )}

      {/* =========================================================================
          MODAL 2: CHI TIẾT TRƯỜNG ĐẠI HỌC (FULL BENCHMARK MATRIX MODAL)
          ========================================================================= */}
      {selectedUniModal && createPortal(
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
            padding: '20px'
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
              padding: '32px',
              position: 'relative',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
              border: '1px solid #CBD5E1'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedUniModal(null)}
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

            {/* University Header with Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
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
                  <h2 style={{ fontSize: '1.6rem', margin: 0, color: '#1E293B', fontWeight: '900' }}>
                    {selectedUniModal.name}
                  </h2>
                  <span style={{ fontSize: '0.76rem', fontWeight: '900', padding: '3px 10px', borderRadius: '999px', background: '#EEF2FF', color: '#4338CA', border: '1px solid #C7D2FE' }}>
                    MÃ: {selectedUniModal.code}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '6px', fontSize: '0.84rem', color: '#64748B' }}>
                  <span>📍 {selectedUniModal.city}</span>
                  <span>•</span>
                  <span style={{ color: '#059669', fontWeight: '700' }}>{selectedUniModal.type}</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
              {selectedUniModal.highlight}
            </p>

            {/* Benchmarks Matrix & Full Table */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#1E293B', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingUp size={18} color="#4F46E5" />
                <span>Bảng Điểm chuẩn Chi tiết các ngành tiêu biểu (2024 – Dự báo 2026)</span>
              </h3>

              {selectedUniModal.detailedBenchmarks && selectedUniModal.detailedBenchmarks.length > 0 ? (
                <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.86rem' }}>
                    <thead>
                      <tr style={{ background: '#F8FAFC', borderBottom: '1.5px solid #E2E8F0' }}>
                        <th style={{ padding: '12px 14px', fontWeight: '800', color: '#1E293B' }}>Tên Ngành</th>
                        <th style={{ padding: '12px 14px', fontWeight: '800', color: '#1E293B' }}>Tổ hợp</th>
                        <th style={{ padding: '12px 14px', fontWeight: '800', color: '#475569' }}>THPT 2024</th>
                        <th style={{ padding: '12px 14px', fontWeight: '800', color: '#475569' }}>THPT 2025</th>
                        <th style={{ padding: '12px 14px', fontWeight: '900', color: '#4F46E5' }}>Dự báo 2026</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedUniModal.detailedBenchmarks.map((row, rIdx) => (
                        <tr key={rIdx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                          <td style={{ padding: '10px 14px', fontWeight: '700', color: '#1E293B' }}>{row.majorName}</td>
                          <td style={{ padding: '10px 14px', color: '#0369A1', fontWeight: '700' }}>{row.combo}</td>
                          <td style={{ padding: '10px 14px', color: '#64748B' }}>{row.thpt2024}</td>
                          <td style={{ padding: '10px 14px', color: '#64748B' }}>{row.thpt2025}</td>
                          <td style={{ padding: '10px 14px', fontWeight: '900', color: '#4F46E5' }}>{row.forecast2026}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '14px', border: '1px solid #E2E8F0', color: '#64748B' }}>
                  Điểm chuẩn tham khảo: <strong>{selectedUniModal.benchmarks}</strong> (áp dụng chung các ngành).
                </div>
              )}
            </div>

            {/* Campus Vibe & Dorms */}
            {selectedUniModal.campusVibe && (
              <div style={{ background: '#F0FDF4', borderRadius: '18px', padding: '18px', border: '1px solid #BBF7D0', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.95rem', margin: '0 0 8px', color: '#166534', fontWeight: '800' }}>
                  🏛️ Đời sống sinh viên & Học tập tại {selectedUniModal.city}:
                </h4>
                <div style={{ fontSize: '0.86rem', color: '#14532D', lineHeight: '1.55', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div>🏠 <strong>Ký túc xá:</strong> {selectedUniModal.campusVibe.dorms}</div>
                  <div>💵 <strong>Chi phí sinh hoạt:</strong> {selectedUniModal.campusVibe.livingCostNote}</div>
                  <div>🎉 <strong>Câu lạc bộ & Môi trường:</strong> {selectedUniModal.campusVibe.clubsAndLife}</div>
                </div>
              </div>
            )}

            {/* Footer Buttons */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', borderTop: '1px solid #E2E8F0', paddingTop: '18px', flexWrap: 'wrap' }}>
              <a
                href={selectedUniModal.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-edtech-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Globe size={15} />
                <span>Website Trường</span>
              </a>

              <a
                href={selectedUniModal.admissionsUrl || selectedUniModal.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-edtech-primary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <span>Cổng Tuyển Sinh Chính Thức ↗</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* =========================================================================
          MODAL 3: CINEMA MODAL (THEMATIC VIDEO PLAYER)
          ========================================================================= */}
      {activeVideoMajor && currentVideo && createPortal(
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
              maxWidth: '880px',
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
            <div style={{ padding: '16px 22px', borderBottom: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.8rem' }}>{activeVideoMajor.icon}</span>
                <div>
                  <div style={{ fontSize: '0.74rem', color: '#F43F5E', fontWeight: '800', textTransform: 'uppercase' }}>
                    1 NGÀY LÀM NGHỀ THỰC TẾ
                  </div>
                  <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: '800', color: '#FFFFFF' }}>
                    {activeVideoMajor.ten_nganh}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideoMajor(null)}
                style={{ background: '#1E293B', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#94A3B8' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Cinema Video Player */}
            <div style={{ position: 'relative', paddingTop: '56.25%', background: '#000000' }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info & Youtube Link */}
            <div style={{ padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', background: '#1E293B' }}>
              <div>
                <div style={{ fontWeight: '800', fontSize: '1rem', color: '#FFFFFF' }}>{currentVideo.title}</div>
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
                <span>Xem Trên YouTube ↗</span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
