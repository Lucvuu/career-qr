import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User, Maximize2, Minimize2 } from 'lucide-react';

const AI_CONFIG = {
  API_KEY: "sk-4150297863e3eee405805e8609648e6c5cebb1b502ffb46e",
  API_ENDPOINT: "https://api.shopaikey.com/v1/chat/completions",
  MODELS: ["gpt-4.1-mini-2025-04-14", "gpt-4o-mini", "gpt-5-mini"]
};

export default function AIChatModal({ currentContext = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Chào bạn! 👋 Mình là trợ lý AI cố vấn tuyển sinh của CAREER QR 2026.\n\nBạn đang phân vân giữa các tổ hợp (A00, A01, D01), băn khoăn về điểm chuẩn thực tế hay muốn hiểu sâu về một ngành nghề? Hãy nhắn cho mình nhé!'
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
    "🎥 Ngành Vi mạch bán dẫn ra trường làm gì?",
    "⚡ Khối A01 & D01 nên chọn CNTT hay Marketing?",
    "🩺 Học Y đa khoa cần chuẩn bị gì?",
    "🏫 Học phí các trường ĐH công lập 2026"
  ];

  const handleSend = async (customText = null) => {
    const textToSend = customText || input.trim();
    if (!textToSend || isLoading) return;

    const newMsgs = [...messages, { role: 'user', text: textToSend }];
    setMessages(newMsgs);
    if (!customText) setInput('');
    setIsLoading(true);

    try {
      const apiMessages = [
        {
          role: 'system',
          content: `Bạn là trợ lý hướng nghiệp thông minh của CAREER QR 2026, nền tảng cố vấn chọn ngành, chọn trường cho học sinh THPT Việt Nam (lớp 10, 11, 12). 
Quy tắc trả lời:
- Giọng văn ấm áp, khích lệ, gần gũi, dùng gạch đầu dòng rõ ràng.
- Kích thước chữ gọn gàng, súc tích (13px readability).
- Tránh trả lời quá dài lê thê; tập trung vào: Điểm chuẩn tham khảo, môn thế mạnh, học phí và cơ hội việc làm thực tế 5 năm tới.
Bối cảnh hiện tại: ${currentContext}`
        },
        ...newMsgs.map(m => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text }))
      ];

      const res = await fetch(AI_CONFIG.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AI_CONFIG.API_KEY}`
        },
        body: JSON.stringify({
          model: AI_CONFIG.MODELS[0],
          messages: apiMessages,
          temperature: 0.6
        })
      });

      if (!res.ok) throw new Error(`Lỗi kết nối AI (${res.status})`);
      const data = await res.json();
      const reply = data?.choices?.[0]?.message?.content?.trim() || "Xin lỗi, mình chưa nhận được phản hồi.";
      setMessages([...newMsgs, { role: 'bot', text: reply }]);
    } catch (err) {
      console.warn("AI error, using fallback advisor:", err);
      let fallback = "Rất vui được hỗ trợ bạn! Để chọn đúng ngành, bạn nên kết hợp hài hòa 3 yếu tố:\n\n1. **Sở thích thực tế** (công việc bạn sẵn sàng làm hàng ngày mà không nản).\n2. **Năng lực học tập** (các môn trong tổ hợp xét tuyển A00, A01, D01...).\n3. **Cơ hội việc làm 5 năm tới** (nhu cầu thị trường trong kỷ nguyên AI & Vi mạch).\n\nBạn hãy thử làm bài trắc nghiệm ở mục **'Khám phá bản thân'** để AI phân tích chi tiết nhé!";
      setMessages([...newMsgs, { role: 'bot', text: fallback }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating launcher badge & button */}
      <div style={{ position: 'fixed', right: '24px', bottom: '24px', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
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

      {/* Chat Window Shell (Layout & Typography inspired by System_Onboarding) */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            right: '24px',
            bottom: '92px',
            zIndex: 9999,
            width: isExpanded ? 'min(580px, calc(100vw - 32px))' : 'min(400px, calc(100vw - 32px))',
            height: isExpanded ? 'min(720px, calc(100vh - 110px))' : 'min(640px, calc(100vh - 120px))',
            background: '#FFFFFF',
            borderRadius: '22px',
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
              <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={18} color="#FFFFFF" />
              </div>
              <div>
                <div className="chat-header-title-refined">Cố vấn AI Hướng nghiệp</div>
                <div className="chat-header-status-refined">
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399', display: 'inline-block' }}></span>
                  Trực tuyến • Hỗ trợ học sinh THPT
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ background: 'transparent', border: 'none', color: '#E0E7FF', cursor: 'pointer', padding: '4px', borderRadius: '6px' }}
                title={isExpanded ? "Thu nhỏ cửa sổ" : "Mở rộng cửa sổ"}
              >
                {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '4px', borderRadius: '6px' }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Context Pill Chip (System_Onboarding pattern) */}
          {currentContext && (
            <div className="chat-context-chip-refined">
              <span>📍 {currentContext}</span>
              <span style={{ fontSize: '10px', opacity: 0.85 }}>Tuyển sinh 2026</span>
            </div>
          )}

          {/* Quick Prompts Bar */}
          <div style={{ padding: '8px 12px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', display: 'flex', gap: '6px', overflowX: 'auto' }}>
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
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px 10px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4F46E5', flexShrink: 0, marginTop: '2px' }}>
                    <Bot size={15} />
                  </div>
                )}
                
                <div
                  className={`chat-bubble-base ${m.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}
                  style={{ maxWidth: '84%' }}
                >
                  {m.text}
                </div>

                {m.role === 'user' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', flexShrink: 0, marginTop: '2px' }}>
                    <User size={15} />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#64748B', fontSize: '12px', paddingLeft: '36px' }}>
                <Bot size={14} color="#4F46E5" />
                <span>Trợ lý đang suy nghĩ câu trả lời...</span>
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
              placeholder="Nhập câu hỏi (VD: Ngành Vi mạch học trường nào?)..."
              style={{
                flex: 1,
                padding: '9px 14px',
                borderRadius: '999px',
                border: '1.5px solid #CBD5E1',
                fontSize: '13px',
                outline: 'none',
                background: '#FFFDF9',
                color: '#1E293B'
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
                background: 'var(--primary-gradient)',
                border: 'none',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: isLoading || !input.trim() ? 0.5 : 1,
                flexShrink: 0
              }}
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
