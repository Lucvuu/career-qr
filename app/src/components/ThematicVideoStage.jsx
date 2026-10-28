import React, { useState, useMemo, useRef } from 'react';
import { 
  Play, 
  Clock, 
  Building2, 
  AlertTriangle, 
  Sparkles, 
  Search, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  Heart, 
  BookmarkCheck, 
  Check, 
  DollarSign, 
  Award, 
  Film, 
  Tv, 
  Flame, 
  Star, 
  Compass, 
  Layers,
  ChevronRight,
  TrendingUp,
  Cpu,
  Activity,
  Database,
  Palette,
  BookOpen
} from 'lucide-react';
import { 
  CAREER_VIDEOS_DATA, 
  CAREER_SERIES_TABS, 
  CAREER_CATEGORIES, 
  getVideosByFilter 
} from '../data/careerVideosData';
import { MAJORS_DATA } from '../data/careerData';

export default function ThematicVideoStage({
  majorId,
  majorName,
  videoTitle,
  channel,
  duration,
  youtubeId,
  directYoutubeUrl,
  onSelectForRoadmap,
  onBookmarkMajor,
  savedMajorIds = [],
  onNavigateTab,
  onSearchQuery
}) {
  // Cinema Hub Filter States
  const [selectedSeries, setSelectedSeries] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');

  // Active Video State (Defaults to the first featured video or incoming props)
  const [activeVideoId, setActiveVideoId] = useState(() => {
    if (majorId) {
      const match = CAREER_VIDEOS_DATA.find(v => v.majorId === majorId);
      if (match) return match.id;
    }
    return CAREER_VIDEOS_DATA[0]?.id || 'vid-life-01';
  });

  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const playerStageRef = useRef(null);

  // Filtered videos based on active series, category, and search keyword
  const filteredVideos = useMemo(() => {
    return getVideosByFilter(selectedSeries, selectedCategory, searchKeyword);
  }, [selectedSeries, selectedCategory, searchKeyword]);

  // Current active video object
  const activeVideo = useMemo(() => {
    const found = CAREER_VIDEOS_DATA.find(v => v.id === activeVideoId);
    if (found) return found;
    // Fallback using incoming props
    return {
      id: 'vid-custom',
      title: videoTitle || '1 Ngày làm việc của Kỹ sư Công nghệ thông tin & AI',
      series: 'a-day-in-life',
      seriesLabel: '🎬 1 Ngày Làm Nghề',
      category: 'cntt-ai',
      categoryLabel: '💻 CNTT & AI',
      majorId: majorId || 'cntt',
      majorName: majorName || 'Công nghệ thông tin & Trí tuệ nhân tạo',
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
      },
      hardestChallenge: 'Cường độ làm việc căng thẳng và áp lực tự động hóa công nghệ đòi hỏi học hỏi liên tục.',
      salaryInsight: { fresher: '10 – 18 triệu/tháng', mid: '22 – 40 triệu/tháng', senior: '50 – 100+ triệu/tháng' },
      timelineChapters: [
        { time: '08:30', title: 'Khởi động & Bối cảnh ca làm việc', desc: 'Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm.' },
        { time: '10:15', title: 'Thực chiến công việc chuyên môn', desc: 'Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng.' },
        { time: '14:30', title: 'Đối diện khó khăn & Giải quyết sự cố', desc: 'Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án.' },
        { time: '16:45', title: 'Đúc kết & Lời khuyên nghề nghiệp', desc: 'Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành.' }
      ]
    };
  }, [activeVideoId, majorId, majorName, videoTitle, channel, duration, youtubeId]);

  const effectiveYoutubeId = activeVideo.youtubeId || 'c2Ce2QV4veY';
  const embedUrl = `https://www.youtube-nocookie.com/embed/${effectiveYoutubeId}?rel=0&modestbranding=1&enablejsapi=1`;
  const directLinkUrl = directYoutubeUrl || `https://www.youtube.com/watch?v=${effectiveYoutubeId}`;

  const currentChapter = activeVideo.timelineChapters?.[activeChapterIndex] || activeVideo.timelineChapters?.[0] || {
    time: '08:30',
    title: 'Khởi động công việc',
    desc: 'Lập kế hoạch và rà soát các nhiệm vụ ưu tiên.'
  };

  const handleSelectVideo = (video) => {
    setActiveVideoId(video.id);
    setActiveChapterIndex(0);
    if (playerStageRef.current) {
      playerStageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewSchools = () => {
    if (onSearchQuery) {
      onSearchQuery(activeVideo.majorName || activeVideo.majorId);
    }
    if (onNavigateTab) {
      onNavigateTab('truong');
    }
  };

  const handleCompareClick = () => {
    const majorObj = MAJORS_DATA.find(m => m.id === activeVideo.majorId) || {
      id: activeVideo.majorId,
      ten_nganh: activeVideo.majorName,
      nhom_nganh: activeVideo.categoryLabel
    };
    if (onBookmarkMajor) {
      onBookmarkMajor(majorObj);
    }
    if (onNavigateTab) {
      onNavigateTab('compare');
    }
  };

  const isSaved = savedMajorIds.includes(activeVideo.majorId);

  return (
    <div className="tab-pane-animate" style={{ maxWidth: '1240px', margin: '0 auto', marginBottom: '60px' }}>
      
      {/* 1. MASTERCLASS SPOTLIGHT HERO BANNER (NETFLIX STYLE FOR CAREERS) */}
      <div 
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(225, 29, 72, 0.22) 0%, rgba(15, 23, 42, 0.96) 65%)',
          borderRadius: '24px',
          border: '1.5px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.4), 0 0 35px rgba(225, 29, 72, 0.15)',
          padding: '36px 36px',
          color: '#FFFFFF',
          marginBottom: '36px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '750px', position: 'relative', zIndex: 2 }}>
          {/* Top Badges Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '4px 12px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)',
              color: '#FFFFFF',
              fontSize: '0.76rem',
              fontWeight: '800',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              boxShadow: '0 4px 12px rgba(225, 29, 72, 0.4)'
            }}>
              <Flame size={14} fill="#FFFFFF" />
              <span>RẠP PHIM NGHỀ NGHIỆP • MASTERCLASS 2026</span>
            </span>

            <span style={{
              padding: '4px 10px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.76rem',
              fontWeight: '700',
              color: '#F8FAFC'
            }}>
              {activeVideo.categoryLabel}
            </span>

            <span style={{
              padding: '4px 10px',
              borderRadius: '999px',
              background: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              fontSize: '0.76rem',
              fontWeight: '800',
              color: '#6EE7B7'
            }}>
              {activeVideo.salaryInsight?.fresher ? `Khởi điểm: ${activeVideo.salaryInsight.fresher}` : 'Lương top đầu'}
            </span>
          </div>

          {/* Spotlight Title */}
          <h1 style={{ 
            fontSize: '2.1rem', 
            fontWeight: '900', 
            lineHeight: '1.25', 
            color: '#FFFFFF', 
            marginBottom: '14px',
            fontFamily: 'var(--font-display)',
            letterSpacing: '-0.02em'
          }}>
            {activeVideo.title}
          </h1>

          {/* Subtitle / Key Hook */}
          <p style={{ fontSize: '0.96rem', color: '#CBD5E1', lineHeight: '1.65', marginBottom: '22px' }}>
            {activeVideo.keyTakeaways?.[0] || 'Khám phá bức tranh chân thực nhất về môi trường làm việc, áp lực nghề nghiệp và thu nhập thực tế do chính những người trong nghề chia sẻ.'}
          </p>

          {/* Action Row */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              type="button"
              onClick={() => {
                if (playerStageRef.current) {
                  playerStageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)',
                color: '#FFFFFF',
                fontSize: '0.92rem',
                fontWeight: '800',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(225, 29, 72, 0.45)',
                transition: 'all 0.2s ease'
              }}
            >
              <Play size={18} fill="#FFFFFF" />
              <span>Phát tập này ngay</span>
            </button>

            <a
              href={directLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '11px 18px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                fontSize: '0.86rem',
                fontWeight: '700',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <ExternalLink size={16} />
              <span>Mở trên YouTube</span>
            </a>

            <span style={{ fontSize: '0.8rem', color: '#94A3B8', marginLeft: '6px' }}>
              ⏱ Thời lượng: <strong>{activeVideo.duration}</strong> • Kênh: <strong>{activeVideo.channel}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* 2. THEMATIC CINEMA PLAYER STAGE (INTERACTIVE 16:9 + 4-CHAPTER TIMELINE) */}
      <div 
        ref={playerStageRef}
        style={{
          background: '#0F172A',
          borderRadius: '24px',
          border: '2px solid #334155',
          boxShadow: '0 20px 48px -12px rgba(15, 23, 42, 0.5)',
          padding: '24px',
          color: '#FFFFFF',
          marginBottom: '36px'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: '28px', alignItems: 'start' }}>
          
          {/* LEFT: 16:9 EMBEDDED PLAYER */}
          <div>
            <div style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#000000',
              border: '1px solid #334155',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)'
            }}>
              <iframe
                src={embedUrl}
                title={activeVideo.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Meta bar under player */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#334155', fontSize: '0.74rem', color: '#94A3B8', fontWeight: '700' }}>
                  {activeVideo.seriesLabel}
                </span>
                <span style={{ fontSize: '0.84rem', color: '#CBD5E1', fontWeight: '600' }}>
                  📺 {activeVideo.channel}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={handleCompareClick}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: isSaved ? '#065F46' : 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: isSaved ? '#6EE7B7' : '#FFFFFF',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  {isSaved ? <BookmarkCheck size={14} /> : <Heart size={14} />}
                  <span>{isSaved ? 'Đã lưu so sánh' : 'Đưa vào So sánh ⚖️'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleViewSchools}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: '#4F46E5',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  <Building2 size={14} />
                  <span>Xem trường đào tạo →</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: PRACTICAL INSIGHTS & 4-CHAPTER TIMELINE */}
          <div>
            {/* Interactive Timeline Tabs (4 Chapters) */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: '0.76rem', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={13} color="#E11D48" />
                <span>Lịch trình &amp; Các chương phát sóng:</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', background: '#1E293B', padding: '4px', borderRadius: '12px' }}>
                {activeVideo.timelineChapters?.map((chap, idx) => {
                  const isCur = idx === activeChapterIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveChapterIndex(idx)}
                      style={{
                        padding: '6px 4px',
                        borderRadius: '8px',
                        border: 'none',
                        background: isCur ? '#E11D48' : 'transparent',
                        color: isCur ? '#FFFFFF' : '#94A3B8',
                        fontSize: '0.72rem',
                        fontWeight: '800',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {chap.time}
                    </button>
                  );
                })}
              </div>

              {/* Active Chapter Details Box */}
              <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '12px', padding: '12px 14px', marginTop: '8px' }}>
                <div style={{ fontSize: '0.86rem', fontWeight: '800', color: '#F43F5E', marginBottom: '3px' }}>
                  {currentChapter.time} — {currentChapter.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: '1.5' }}>
                  {currentChapter.desc}
                </div>
              </div>
            </div>

            {/* 💡 3 Practical Takeaways */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.76rem', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={13} color="#F59E0B" />
                <span>3 Đúc kết thực chiến đắt giá:</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {activeVideo.keyTakeaways?.map((takeaway, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', background: 'rgba(255, 255, 255, 0.04)', padding: '8px 10px', borderRadius: '8px', fontSize: '0.79rem', color: '#E2E8F0', lineHeight: '1.45' }}>
                    <span style={{ color: '#10B981', fontWeight: '900' }}>✓</span>
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 💰 Salary Roadmap Strip */}
            <div style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '10px 12px', marginBottom: '14px' }}>
              <div style={{ fontSize: '0.72rem', color: '#6EE7B7', fontWeight: '800', textTransform: 'uppercase', marginBottom: '4px' }}>
                💰 Dải thu nhập thực tế trong ngành:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', textAlign: 'center', fontSize: '0.74rem' }}>
                <div>
                  <div style={{ color: '#94A3B8', fontSize: '0.66rem' }}>Fresher mới ra trường</div>
                  <div style={{ fontWeight: '800', color: '#FFFFFF' }}>{activeVideo.salaryInsight?.fresher || '10 - 15 tr/tháng'}</div>
                </div>
                <div>
                  <div style={{ color: '#94A3B8', fontSize: '0.66rem' }}>Sau 2 – 4 năm</div>
                  <div style={{ fontWeight: '800', color: '#6EE7B7' }}>{activeVideo.salaryInsight?.mid || '20 - 35 tr/tháng'}</div>
                </div>
                <div>
                  <div style={{ color: '#94A3B8', fontSize: '0.66rem' }}>5 năm+ / Quản lý</div>
                  <div style={{ fontWeight: '800', color: '#FDE047' }}>{activeVideo.salaryInsight?.senior || '45 - 80+ tr/tháng'}</div>
                </div>
              </div>
            </div>

            {/* ⚠️ Hardest Challenge Alert */}
            {activeVideo.hardestChallenge && (
              <div style={{ background: '#451A03', border: '1px solid #78350F', borderRadius: '10px', padding: '8px 10px', fontSize: '0.76rem', color: '#FDE68A', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <AlertTriangle size={15} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Điểm khó nhất cần chuẩn bị tâm lý: </strong>
                  <span>{activeVideo.hardestChallenge}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. MULTI-SERIES FILTER TABS (4 SERIES) */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Film size={20} color="#4F46E5" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1E293B', margin: 0 }}>
              Kho Video Hướng Nghiệp Thực Tế (68 Tập)
            </h2>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#059669', fontWeight: '800', background: '#ECFDF5', padding: '4px 12px', borderRadius: '999px', border: '1px solid #A7F3D0' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            <span>Đang hiển thị {filteredVideos.length} / {CAREER_VIDEOS_DATA.length} video</span>
          </div>
        </div>

        {/* 4 Series Tabs */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px', flexWrap: 'wrap' }}>
          {CAREER_SERIES_TABS.map((tab) => {
            const isSelected = selectedSeries === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedSeries(tab.id)}
                style={{
                  padding: '9px 16px',
                  borderRadius: '999px',
                  border: isSelected ? '2px solid #E11D48' : '1.5px solid #CBD5E1',
                  background: isSelected ? 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#1E293B',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? '800' : '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  boxShadow: isSelected ? '0 4px 12px rgba(225, 29, 72, 0.3)' : 'none',
                  transition: 'all 0.18s ease'
                }}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. SECTORS FILTER & KEYWORD SEARCH BAR */}
      <div style={{ background: '#FFFFFF', border: '1.5px solid #E2E8F0', borderRadius: '16px', padding: '16px 20px', marginBottom: '28px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '16px', alignItems: 'center' }}>
          
          {/* Sector Pills (8 categories) */}
          <div>
            <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', marginBottom: '8px' }}>
              Chọn Khối Lĩnh Vực:
            </div>
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
              {CAREER_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '8px',
                      border: isSelected ? '1px solid #4F46E5' : '1px solid #E2E8F0',
                      background: isSelected ? '#EEF2FF' : '#F8FAFC',
                      color: isSelected ? '#4338CA' : '#475569',
                      fontSize: '0.78rem',
                      fontWeight: isSelected ? '800' : '600',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Keyword Search Input */}
          <div>
            <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', marginBottom: '8px' }}>
              Tìm Kiếm Theo Nghề:
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '6px 12px' }}>
              <Search size={16} color="#64748B" style={{ marginRight: '8px', flexShrink: 0 }} />
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Nhập tên nghề, kỹ năng hoặc kênh..."
                style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.84rem', color: '#1E293B', fontFamily: 'var(--font-ui)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 5. 68-VIDEO BENTO CINEMA GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '22px' }}>
        {filteredVideos.map((video) => {
          const isCurrentActive = video.id === activeVideoId;
          return (
            <div
              key={video.id}
              onClick={() => handleSelectVideo(video)}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: isCurrentActive ? '2px solid #E11D48' : '1.5px solid #E2E8F0',
                boxShadow: isCurrentActive ? '0 10px 24px -4px rgba(225, 29, 72, 0.25)' : '0 2px 8px rgba(15, 23, 42, 0.04)',
                padding: '16px',
                cursor: 'pointer',
                transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* 16:9 Cinema Thumbnail Frame */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
                  overflow: 'hidden',
                  marginBottom: '12px',
                  border: '1px solid #E2E8F0'
                }}>
                  {/* Subtle Background Glow Poster */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'radial-gradient(circle at center, rgba(79, 70, 229, 0.35) 0%, rgba(15, 23, 42, 0.95) 75%)'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: isCurrentActive ? '#E11D48' : 'rgba(255, 255, 255, 0.85)',
                      color: isCurrentActive ? '#FFFFFF' : '#0F172A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
                      transition: 'transform 0.2s ease'
                    }}>
                      <Play size={20} fill={isCurrentActive ? '#FFFFFF' : '#0F172A'} style={{ marginLeft: '3px' }} />
                    </div>
                  </div>

                  {/* Left Top Badge: Series Type */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    padding: '3px 8px',
                    borderRadius: '999px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    color: '#F8FAFC',
                    fontSize: '0.68rem',
                    fontWeight: '800',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {video.seriesLabel}
                  </div>

                  {/* Right Top Badge: Duration (NO OVERFLOW / NO TRUNCATION) */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    padding: '3px 8px',
                    borderRadius: '999px',
                    background: '#E11D48',
                    color: '#FFFFFF',
                    fontSize: '0.68rem',
                    fontWeight: '800',
                    boxShadow: '0 2px 6px rgba(225, 29, 72, 0.5)'
                  }}>
                    {video.duration} • Xem ngay ▶
                  </div>
                </div>

                {/* Video Title */}
                <h3 style={{
                  fontSize: '0.98rem',
                  fontWeight: '800',
                  color: '#1E293B',
                  lineHeight: '1.4',
                  marginBottom: '8px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {video.title}
                </h3>

                {/* Channel & Category row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.76rem', color: '#64748B', marginBottom: '12px' }}>
                  <span>📺 {video.channel}</span>
                  <span style={{ fontWeight: '700', color: '#4F46E5' }}>{video.categoryLabel}</span>
                </div>
              </div>

              {/* Card Footer: Starting Salary + Quick Play */}
              <div style={{
                borderTop: '1px solid #F1F5F9',
                paddingTop: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '0.66rem', color: '#64748B', fontWeight: '700' }}>KHỞI ĐIỂM DỰ KIẾN</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: '850', color: '#059669' }}>
                    {video.salaryInsight?.fresher || '10 – 16 tr/tháng'}
                  </div>
                </div>

                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  color: isCurrentActive ? '#E11D48' : '#4F46E5'
                }}>
                  {isCurrentActive ? 'Đang phát •' : 'Chi tiết →'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
