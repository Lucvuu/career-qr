import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User } from 'lucide-react';

const AI_CONFIG = {
  API_KEY: "sk-4150297863e3eee405805e8609648e6c5cebb1b502ffb46e",
  API_ENDPOINT: "https://api.shopaikey.com/v1/chat/completions",
  MODELS: ["gpt-4.1-mini-2025-04-14", "gpt-4o-mini", "gpt-5-mini"]
};

export default function AIChatModal({ currentContext = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Chào bạn! 👋 Mình là trợ lý AI đồng hành của CAREER QR. Bạn đang băn khoăn về môn học thế mạnh, cách chọn ngành hay trường nào phù hợp? Cứ hỏi mình nhé!'
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
    "🎨 Em thích sáng tạo và công nghệ thì học ngành gì?",
    "⚡ Ngành nào đang hot với khối A01, D01?",
    "🎯 Làm sao biết mình thực sự hợp với một ngành?",
    "🏫 Học phí các trường ĐH công lập hiện nay thế nào?"
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
          content: `Bạn là trợ lý hướng nghiệp thông minh của CAREER QR, công cụ giúp học sinh THPT (lớp 10, 11, 12) chọn ngành, trường, tổ hợp xét tuyển 2026. Trả lời thân thiện, súc tích, ấm áp, dùng gạch đầu dòng rõ ràng, định dạng markdown đẹp. Bối cảnh: ${currentContext}`
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
      // Friendly fallback smart advisor
      let fallback = "Rất vui được hỗ trợ bạn! Để chọn đúng ngành, bạn nên kết hợp hài hòa 3 yếu tố:\n\n1. **Sở thích thực tế** (công việc bạn sẵn sàng làm hàng ngày mà không nản).\n2. **Năng lực học tập** (các môn trong tổ hợp xét tuyển A00, A01, D01...).\n3. **Cơ hội việc làm 5 năm tới** (nhu cầu thị trường trong kỷ nguyên AI).\n\nBạn hãy thử làm bài trắc nghiệm ở mục **'Khám phá bản thân'** để AI phân tích chi tiết nhé!";
      setMessages([...newMsgs, { role: 'bot', text: fallback }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating launcher */}
      <div style={{ position: 'fixed', right: '24px', bottom: '24px', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            style={{
              background: '#FFFFFF',
              color: '#4F46E5',
              fontSize: '0.84rem',
              fontWeight: '800',
              padding: '8px 18px',
              borderRadius: '999px',
              boxShadow: '0 8px 24px -4px rgba(79, 70, 229, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              border: '1.5px solid #C7D2FE',
              transition: 'transform 0.2s ease'
            }}
          >
            <Sparkles size={16} color="#F59E0B" />
            <span>Hỏi trợ lý AI hướng nghiệp</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Trợ lý AI"
          style={{
            width: '58px',
            height: '58px',
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
          {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            right: '24px',
            bottom: '96px',
            zIndex: 9999,
            width: 'min(420px, calc(100vw - 32px))',
            height: 'min(620px, calc(100vh - 120px))',
            background: '#FFFFFF',
            borderRadius: '26px',
            border: '1.5px solid #E0E7FF',
            boxShadow: '0 24px 60px -12px rgba(15, 23, 42, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeInSoft 0.25s ease-out'
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #0EA5E9 100%)',
              color: '#FFFFFF',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} color="#FFFFFF" />
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '1rem', fontFamily: 'var(--font-display)' }}>Trợ lý Cố vấn AI 2026</div>
                <div style={{ fontSize: '0.74rem', color: '#E0E7FF', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#34D399', display: 'inline-block' }}></span>
                  Đồng hành cùng học sinh THPT
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '4px' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Prompts */}
          <div style={{ padding: '10px 14px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', display: 'flex', gap: '6px', overflowX: 'auto' }}>
            {quickPrompts.map((qp, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(qp)}
                style={{
                  fontSize: '0.74rem',
                  fontWeight: '600',
                  padding: '5px 10px',
                  borderRadius: '999px',
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  color: '#334155',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer'
                }}
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Messages list */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4F46E5', flexShrink: 0 }}>
                    <Bot size={16} />
                  </div>
                )}
                <div
                  style={{
                    maxWidth: '82%',
                    padding: '12px 16px',
                    borderRadius: '18px',
                    background: m.role === 'user' ? 'var(--primary-gradient)' : '#F8FAFC',
                    color: m.role === 'user' ? '#FFFFFF' : '#1E293B',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    border: m.role === 'user' ? 'none' : '1px solid #E2E8F0',
                    whiteSpace: 'pre-wrap',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {m.text}
                </div>
                {m.role === 'user' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', flexShrink: 0 }}>
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#64748B', fontSize: '0.85rem' }}>
                <Bot size={16} color="#4F46E5" />
                <span>Trợ lý đang suy nghĩ câu trả lời...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div style={{ padding: '12px 16px', borderTop: '1px solid #E2E8F0', background: '#FFFFFF', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Nhập câu hỏi của bạn..."
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '999px',
                border: '1.5px solid #CBD5E1',
                fontSize: '0.92rem',
                outline: 'none',
                background: '#FFFDF9'
              }}
            />
            <button
              type="button"
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--primary-gradient)',
                border: 'none',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: isLoading || !input.trim() ? 0.5 : 1
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
