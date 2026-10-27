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
      text: 'Chào bạn! 👋 Mình là trợ lý AI cố vấn hướng nghiệp của CAREER QR. Bạn đang băn khoăn về sở thích cá nhân, cách chọn ngành hay trường nào phù hợp? Cứ hỏi mình nhé!'
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
    "🏫 Học phí các trường ĐH công lập hiện nay"
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
          content: `Bạn là trợ lý hướng nghiệp thông minh của CAREER QR, công cụ giúp học sinh THPT chọn ngành, trường, tổ hợp xét tuyển. Trả lời thân thiện, súc tích, sinh động, dùng gạch đầu dòng rõ ràng. Bối cảnh: ${currentContext}`
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
      // Fallback smart advisor answer
      let fallback = "Rất vui được hỗ trợ bạn! Để chọn đúng ngành, bạn nên kết hợp giữa 3 yếu tố: **Sở thích thực tế**, **Năng lực học tập (tổ hợp môn)** và **Cơ hội việc làm 5 năm tới**. Bạn hãy thử làm bài trắc nghiệm ở mục 'Khám phá bản thân' để AI phân tích chi tiết nhé!";
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
              background: 'rgba(15, 23, 42, 0.92)',
              color: '#FFFFFF',
              fontSize: '0.82rem',
              fontWeight: '700',
              padding: '8px 16px',
              borderRadius: '999px',
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)'
            }}
          >
            <Sparkles size={14} color="#38BDF8" />
            <span>Hỏi trợ lý AI hướng nghiệp</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Trợ lý AI"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
            color: '#FFFFFF',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 30px -4px rgba(79, 70, 229, 0.55)',
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
            borderRadius: '24px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.35)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeInScale 0.25s ease-out'
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)',
              color: '#FFFFFF',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} color="#38BDF8" />
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '1rem', fontFamily: 'var(--font-display)' }}>Trợ lý AI Hướng nghiệp</div>
                <div style={{ fontSize: '0.72rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
                  Luôn sẵn sàng hỗ trợ bạn
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#CBD5E1', cursor: 'pointer', padding: '4px' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#F8FAFC' }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  fontSize: '0.88rem',
                  lineHeight: '1.55',
                  background: m.role === 'user' ? 'linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%)' : '#FFFFFF',
                  color: m.role === 'user' ? '#FFFFFF' : '#0F172A',
                  border: m.role === 'user' ? 'none' : '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {m.text}
              </div>
            ))}
            {isLoading && (
              <div style={{ alignSelf: 'flex-start', padding: '10px 16px', borderRadius: '18px', background: '#FFFFFF', border: '1px solid #E2E8F0', fontSize: '0.82rem', color: '#64748B', fontStyle: 'italic' }}>
                Đang suy nghĩ câu trả lời...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div style={{ padding: '8px 12px', background: '#FFFFFF', borderTop: '1px solid #E2E8F0', display: 'flex', gap: '6px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {quickPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSend(p)}
                style={{
                  fontSize: '0.74rem',
                  fontWeight: '600',
                  padding: '5px 10px',
                  borderRadius: '999px',
                  background: '#EEF2FF',
                  color: '#4F46E5',
                  border: '1px solid rgba(79, 70, 229, 0.2)',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div style={{ padding: '12px 14px', background: '#FFFFFF', borderTop: '1px solid #E2E8F0', display: 'flex', gap: '8px' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Nhập câu hỏi bạn đang băn khoăn..."
              style={{
                flex: 1,
                border: '1.5px solid #CBD5E1',
                borderRadius: '12px',
                padding: '10px 14px',
                fontSize: '0.88rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #3B82F6)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                padding: '0 16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
