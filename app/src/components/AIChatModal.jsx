import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Maximize2, 
  Minimize2, 
  Video, 
  BookOpen, 
  Layers, 
  Award,
  Play,
  ExternalLink,
  Search,
  Clock
} from 'lucide-react';
import { generateSmartAIResponse } from '../utils/careerAI';
import { MAJORS_DATA, getVideosForMajor, getWorkdayTimeline } from '../data/careerData';

/**
 * Lightweight React renderer that splits by newline,
 * cleanly formats bullet points, and converts **bold text** into
 * styled <strong className="font-extrabold text-indigo-700"> tags.
 * Raw asterisks (**) NEVER appear in the UI.
 */
export function renderFormattedText(text) {
  if (!text) return null;
  const lines = text.split('\n');

  return lines.map((line, lineIdx) => {
    // Empty line spacer
    if (!line.trim()) {
      return <div key={lineIdx} className="chat-empty-line" />;
    }

    // Check if line is a bullet item (•, -, *, or 1., 2.)
    const isBulletMatch = line.match(/^(\s*)([•\-*]|\d+\.)\s+(.*)$/);
    let bulletPrefix = null;
    let contentToParse = line;

    if (isBulletMatch) {
      bulletPrefix = isBulletMatch[2];
      contentToParse = isBulletMatch[3];
    }

    // Parse **bold text** into styled React nodes
    const parts = [];
    const boldRegex = /\*\*(.*?)\*\*/g;
    let lastIndex = 0;
    let match;
    let keyCounter = 0;

    while ((match = boldRegex.exec(contentToParse)) !== null) {
      if (match.index > lastIndex) {
        parts.push(contentToParse.substring(lastIndex, match.index));
      }
      parts.push(
        <strong key={keyCounter++} className="font-extrabold text-indigo-700 chat-strong-text">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < contentToParse.length) {
      parts.push(contentToParse.substring(lastIndex));
    }

    if (bulletPrefix) {
      return (
        <div key={lineIdx} className="chat-bullet-line">
          <span className="chat-bullet-dot">
            {bulletPrefix.includes('.') ? bulletPrefix : '•'}
          </span>
          <div className="chat-bullet-content">{parts}</div>
        </div>
      );
    }

    return (
      <div key={lineIdx} className="chat-text-line">
        {parts}
      </div>
    );
  });
}

export default function AIChatModal({ 
  currentContext = "",
  onNavigate,
  onSearchQuery,
  onSelectForRoadmap,
  onBookmarkMajor,
  bookmarkedMajors = []
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState(null); // { major, video, isPlaying }
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Chào bạn! 👋 Mình là **Cố vấn AI Tuyển sinh & Hướng nghiệp 2026** của CAREER QR.\n\n🎯 Để tư vấn chính xác và cá nhân hóa nhất cho bạn, bạn hãy chia sẻ với mình 3 thông tin quan trọng này nhé:\n• **1. Khu vực bạn muốn học đại học:** (Hà Nội & miền Bắc, TP.HCM & miền Nam, hay Đà Nẵng & miền Trung?)\n• **2. Mức điểm bạn tự tin hoặc dự kiến đạt được:** (ví dụ: 22–24, 25–27, hay 28+ điểm THPT / ĐGNL?)\n• **3. Ngành hoặc trường mục tiêu bạn đang quan tâm:** (Bách Khoa, Ngoại thương, Kinh tế Quốc dân, Y Dược, FPT...?)\n\nHoặc bạn có thể bấm trực tiếp các gợi ý bên dưới để nhận ngay phương án chuẩn xác!',
      actions: [
        {
          id: 'prompt-1',
          label: '🎯 Dự kiến 25-27đ ở Hà Nội',
          type: 'prompt',
          query: '🎯 Em dự kiến 25 – 27 điểm ở Hà Nội, nên chọn ngành và trường nào?'
        },
        {
          id: 'prompt-2',
          label: '📍 Học CNTT/Vi mạch tại TP.HCM',
          type: 'prompt',
          query: '📍 Em ở TP.HCM muốn học CNTT hoặc Vi mạch, tài chính 30-45tr/năm'
        },
        {
          id: 'prompt-3',
          label: '🩺 Điểm 24-26 khối B00 vào Y Dược',
          type: 'prompt',
          query: '🩺 Học lực 24 – 26 điểm (B00) ở miền Nam có vào được Y Dược không?'
        },
        {
          id: 'prompt-4',
          label: '🏫 Thi ĐH Bách Khoa cần gì?',
          type: 'prompt',
          query: '🏫 Em muốn thi ĐH Bách Khoa / Kinh tế Quốc dân cần chuẩn bị gì?'
        }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const quickPrompts = [
    "🎯 24 điểm khối D01 ở Hà Nội học trường nào?",
    "⛰️ Các trường Đại học tại Thái Nguyên điểm chuẩn thế nào?",
    "⚓ Học ở Hải Phòng có ngành Logistics / Hàng hải nào tốt?",
    "🔬 27 điểm muốn học Bán dẫn & Vi mạch chọn trường nào?",
    "🩺 23 - 25 điểm khối B00 học Y Dược ở đâu vừa sức?",
    "💼 Con gái học Logistics & Chuỗi cung ứng có vất vả không?"
  ];

  const handleSend = (customText = null) => {
    const textToSend = customText || input.trim();
    if (!textToSend || isLoading) return;

    const newMsgs = [...messages, { role: 'user', text: textToSend }];
    setMessages(newMsgs);
    if (!customText) setInput('');
    setIsLoading(true);

    // Smart Vietnamese AI Career Engine (No more dumb generic fallbacks!)
    setTimeout(() => {
      try {
        const responseData = generateSmartAIResponse({
          query: textToSend,
          context: currentContext
        });

        setMessages([
          ...newMsgs,
          {
            role: 'bot',
            text: responseData.text,
            actions: responseData.actions || [],
            matchedMajor: responseData.matchedMajor
          }
        ]);
      } catch (err) {
        console.error("AI Assistant error:", err);
        setMessages([
          ...newMsgs,
          {
            role: 'bot',
            text: 'Xin lỗi bạn, mình đang hoàn thiện dữ liệu ngành này. Bạn hãy thử chọn lại các ngành trọng điểm như **Công nghệ thông tin**, **Vi mạch bán dẫn**, **Marketing** hoặc **Y đa khoa** nhé!',
            actions: [
              {
                id: 'video-vm',
                label: '🎥 Xem ngành Vi mạch bán dẫn',
                type: 'prompt',
                query: '🎥 Ngành Vi mạch bán dẫn ra trường làm gì?'
              }
            ]
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    }, 380);
  };

  /**
   * Dispatches user action clicks from action pills
   */
  const handleActionClick = (action) => {
    if (!action) return;

    if (action.type === 'prompt') {
      handleSend(action.query);
      return;
    }

    if (action.id === 'video') {
      // Find major & open video cinema
      const targetMajor = MAJORS_DATA.find(m => m.id === action.majorId) || MAJORS_DATA[0];
      const videos = getVideosForMajor(targetMajor.id);
      setActiveVideoModal({
        major: targetMajor,
        video: videos[0],
        isPlaying: false
      });
      return;
    }

    if (action.id === 'roadmap' || action.id === 'detail') {
      if (onSearchQuery) {
        onSearchQuery(action.majorName || '');
      }
      if (onNavigate) {
        onNavigate('search');
      }
      setIsOpen(false);
      return;
    }

    if (action.id === 'compare') {
      if (action.majorIds && onBookmarkMajor) {
        action.majorIds.forEach(id => {
          const m = MAJORS_DATA.find(item => item.id === id);
          if (m && !bookmarkedMajors.some(b => b.id === m.id)) {
            onBookmarkMajor(m);
          }
        });
      }
      if (onNavigate) {
        onNavigate('compare');
      }
      setIsOpen(false);
      return;
    }

    if (action.id === 'passport') {
      if (onSelectForRoadmap) {
        onSelectForRoadmap(action.majorName || '', action.backupName || '');
      }
      if (onNavigate) {
        onNavigate('roadmap');
      }
      setIsOpen(false);
      return;
    }

    if (action.id === 'search') {
      if (action.majorId && onSearchQuery) {
        const m = MAJORS_DATA.find(item => item.id === action.majorId);
        onSearchQuery(m?.ten_nganh || '');
      }
      if (onNavigate) {
        onNavigate('search');
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating launcher badge & button */}
      <div 
        style={{ 
          position: 'fixed', 
          right: '24px', 
          bottom: '24px', 
          zIndex: 9999, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-end', 
          gap: '10px' 
        }}
      >
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            style={{
              background: '#FFFFFF',
              color: '#4F46E5',
              fontSize: '11.5px',
              fontWeight: '800',
              padding: '7px 16px',
              borderRadius: '999px',
              boxShadow: '0 8px 24px -4px rgba(79, 70, 229, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              border: '1.5px solid #C7D2FE',
              transition: 'transform 0.2s ease',
              letterSpacing: '0.01em'
            }}
          >
            <Sparkles size={15} color="#F59E0B" />
            <span>Hỏi Cố vấn AI 2026</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Trợ lý AI"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
            color: '#FFFFFF',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 28px -4px rgba(79, 70, 229, 0.45)',
            transition: 'all 0.25s ease'
          }}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
      </div>

      {/* Chat Window Shell */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            right: '24px',
            bottom: '92px',
            zIndex: 9999,
            width: isExpanded ? 'min(620px, calc(100vw - 32px))' : 'min(420px, calc(100vw - 32px))',
            height: isExpanded ? 'min(740px, calc(100vh - 110px))' : 'min(640px, calc(100vh - 120px))',
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1.5px solid #E0E7FF',
            boxShadow: '0 24px 60px -12px rgba(10, 37, 64, 0.28), 0 8px 20px -8px rgba(10, 37, 64, 0.18)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeInSoft 0.25s ease-out',
            transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #0EA5E9 100%)',
              color: '#FFFFFF',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div 
                style={{ 
                  width: '34px', 
                  height: '34px', 
                  borderRadius: '11px', 
                  background: 'rgba(255,255,255,0.22)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}
              >
                <Bot size={19} color="#FFFFFF" />
              </div>
              <div>
                <div className="chat-header-title-refined" style={{ fontWeight: '800', fontSize: '0.94rem' }}>
                  Cố vấn AI Hướng nghiệp
                </div>
                <div className="chat-header-status-refined" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.74rem', opacity: 0.9 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399', display: 'inline-block' }} />
                  Trực tuyến • Dữ liệu chuẩn tuyển sinh 2026
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ background: 'transparent', border: 'none', color: '#E0E7FF', cursor: 'pointer', padding: '5px', borderRadius: '6px' }}
                title={isExpanded ? "Thu nhỏ cửa sổ" : "Mở rộng cửa sổ"}
              >
                {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '5px', borderRadius: '6px' }}
                title="Đóng cửa sổ"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Context Pill Chip */}
          {currentContext && (
            <div className="chat-context-chip-refined">
              <span>📍 {currentContext}</span>
              <span style={{ fontSize: '10px', opacity: 0.85, background: '#EEF2FF', padding: '2px 8px', borderRadius: '999px', color: '#4338CA' }}>
                THPT 2026
              </span>
            </div>
          )}

          {/* Quick Prompts Bar */}
          <div 
            style={{ 
              padding: '10px 14px', 
              background: '#F8FAFC', 
              borderBottom: '1px solid #E2E8F0', 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '6px'
            }}
          >
            {quickPrompts.map((qp, i) => (
              <button
                key={i}
                type="button"
                className="chat-prompt-pill"
                onClick={() => handleSend(qp)}
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Messages Stream */}
          <div 
            style={{ 
              flex: 1, 
              overflowY: 'auto', 
              padding: '16px 14px 10px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '14px' 
            }}
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'flex-start',
                  justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                {m.role === 'bot' && (
                  <div 
                    style={{ 
                      width: '30px', 
                      height: '30px', 
                      borderRadius: '10px', 
                      background: '#EEF2FF', 
                      border: '1px solid #C7D2FE',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: '#4F46E5', 
                      flexShrink: 0, 
                      marginTop: '2px' 
                    }}
                  >
                    <Bot size={16} />
                  </div>
                )}
                
                <div
                  className={`chat-bubble-base ${m.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}
                  style={{ maxWidth: isExpanded ? '88%' : '85%' }}
                >
                  {/* Clean Markdown Bold & Bullet Formatter */}
                  {m.role === 'user' ? (
                    <div>{m.text}</div>
                  ) : (
                    <div>
                      {renderFormattedText(m.text)}

                      {/* Interactive Action Pills Attached to Bot Reply */}
                      {m.actions && m.actions.length > 0 && (
                        <div className="chat-action-pills-wrap">
                          {m.actions.map((act, actIdx) => (
                            <button
                              key={act.id || actIdx}
                              type="button"
                              className="chat-action-btn"
                              onClick={() => handleActionClick(act)}
                            >
                              {act.label.includes('🎥') && <Video size={13} color="#E11D48" />}
                              {act.label.includes('📘') && <BookOpen size={13} color="#0284C7" />}
                              {act.label.includes('⚔️') && <Layers size={13} color="#D97706" />}
                              {act.label.includes('🎫') && <Award size={13} color="#059669" />}
                              {act.label.includes('🔍') && <Search size={13} color="#4F46E5" />}
                              <span>{act.label.replace(/^[^\p{L}\p{N}]+/u, '')}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {m.role === 'user' && (
                  <div 
                    style={{ 
                      width: '30px', 
                      height: '30px', 
                      borderRadius: '10px', 
                      background: '#F1F5F9', 
                      border: '1px solid #E2E8F0',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: '#64748B', 
                      flexShrink: 0, 
                      marginTop: '2px' 
                    }}
                  >
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#64748B', fontSize: '12px', paddingLeft: '38px' }}>
                <Bot size={15} color="#4F46E5" />
                <span>Cố vấn AI đang trích xuất dữ liệu tuyển sinh 2026...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div style={{ padding: '10px 14px', borderTop: '1px solid #E2E8F0', background: '#FFFFFF', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Hỏi về Vi mạch, CNTT, Y khoa, học phí, điểm chuẩn..."
              style={{
                flex: 1,
                padding: '9px 14px',
                borderRadius: '999px',
                border: '1.5px solid #CBD5E1',
                fontSize: '13px',
                outline: 'none',
                background: '#FFFDF9',
                color: '#1E293B',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.03)'
              }}
            />
            <button
              type="button"
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
                border: 'none',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: isLoading || !input.trim() ? 0.5 : 1,
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
              }}
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* QUICK INLINE CAREER VIDEO POPUP (Opens right when clicking [🎥 Xem Video 1 Ngày Làm Nghề]) */}
      {activeVideoModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.72)',
            backdropFilter: 'blur(8px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '680px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.4)',
              border: '1px solid #CBD5E1',
              animation: 'fadeInSoft 0.25s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ background: '#0F172A', color: '#FFFFFF', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Video size={18} color="#F43F5E" />
                <span style={{ fontWeight: '800', fontSize: '0.94rem' }}>
                  Trải nghiệm nghề thực tế: {activeVideoModal.major.ten_nganh}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '4px' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Player & Direct Launcher Banner */}
            <div style={{ background: '#0F172A', padding: '14px 20px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ color: '#94A3B8', fontSize: '0.82rem' }}>
                Nguồn: <strong style={{ color: '#FFFFFF' }}>{activeVideoModal.video.channel}</strong> • {activeVideoModal.video.duration}
              </span>

              <a
                href={activeVideoModal.video.youtubeUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(activeVideoModal.major.ten_nganh + ' một ngày làm việc hướng nghiệp thực tế')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                  color: '#FFFFFF',
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontWeight: '800',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)'
                }}
              >
                <Play size={13} fill="#FFFFFF" />
                <span>🔴 Mở Xem Trên YouTube (Không Bị Chặn) ↗</span>
              </a>
            </div>

            {/* Video Player Stage */}
            <div style={{ background: '#000000', position: 'relative', paddingTop: '56.25%' }}>
              {activeVideoModal.isPlaying ? (
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  src={`https://www.youtube.com/embed/${activeVideoModal.video.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideoModal.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'radial-gradient(circle, #1E293B 0%, #0F172A 100%)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setActiveVideoModal({ ...activeVideoModal, isPlaying: true })}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)',
                      marginBottom: '12px'
                    }}
                  >
                    <Play size={28} style={{ marginLeft: '4px' }} fill="#FFFFFF" />
                  </div>
                  <div style={{ color: '#FFFFFF', fontWeight: '800', fontSize: '1rem', textAlign: 'center', padding: '0 20px' }}>
                    {activeVideoModal.video.title}
                  </div>
                  <div style={{ color: '#94A3B8', fontSize: '0.82rem', marginTop: '6px' }}>
                    Bấm để phát hoặc chọn nút đỏ phía trên để xem trực tiếp
                  </div>
                </div>
              )}
            </div>

            {/* Modal Body: Workday Timeline + Reality Check */}
            <div style={{ padding: '20px 24px', background: '#F8FAFC' }}>
              {/* Interactive 4-chapter Workday Timeline */}
              {(() => {
                const timeline = getWorkdayTimeline(activeVideoModal.major.id);
                return (
                  <div style={{ marginBottom: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '14px 16px', borderRadius: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: '800', color: '#4F46E5', textTransform: 'uppercase', marginBottom: '10px' }}>
                      <Clock size={15} />
                      <span>Mô phỏng 1 ngày làm việc điển hình</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
                      {timeline.map((step, sIdx) => (
                        <div key={sIdx} style={{ background: '#F8FAFC', padding: '8px 10px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                          <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#4F46E5' }}>{step.time}</div>
                          <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#1E293B', marginTop: '2px' }}>{step.stage}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              <div style={{ marginBottom: '14px', background: '#EFF6FF', border: '1px solid #BFDBFE', padding: '12px 16px', borderRadius: '14px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#1D4ED8', textTransform: 'uppercase', marginBottom: '4px' }}>
                  🎯 GÓC NHÌN THỰC TẾ (REALITY CHECK)
                </div>
                <div style={{ fontSize: '0.88rem', color: '#1E293B', lineHeight: '1.5' }}>
                  <strong>Sự thật:</strong> {activeVideoModal.video.realityCheck.truth}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <button
                  type="button"
                  className="btn-edtech-secondary"
                  onClick={() => {
                    setActiveVideoModal(null);
                    if (onSearchQuery) onSearchQuery(activeVideoModal.major.ten_nganh);
                    if (onNavigate) onNavigate('search');
                  }}
                  style={{ fontSize: '0.84rem', padding: '8px 16px' }}
                >
                  <ExternalLink size={14} />
                  <span>Mở đầy đủ trong mục Tra cứu</span>
                </button>

                <button
                  type="button"
                  className="btn-edtech-primary"
                  onClick={() => {
                    setActiveVideoModal(null);
                    if (onSelectForRoadmap) onSelectForRoadmap(activeVideoModal.major.ten_nganh, '');
                    if (onNavigate) onNavigate('roadmap');
                  }}
                  style={{ fontSize: '0.84rem', padding: '8px 18px' }}
                >
                  <Award size={14} />
                  <span>Chọn làm Mục tiêu Passport 2026</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
