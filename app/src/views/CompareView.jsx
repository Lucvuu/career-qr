import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Plus, Trash2, ArrowRight, RotateCcw, CheckCircle2, Sparkles, Scale, ArrowLeft } from 'lucide-react';
import { MAJORS_DATA, COMPARE_QUESTIONS } from '../data/careerData';

export default function CompareView({ onNavigate, bookmarkedMajors = [], onSelectForRoadmap }) {
  const [selectedOptions, setSelectedOptions] = useState(
    bookmarkedMajors.length >= 2
      ? bookmarkedMajors.slice(0, 3).map(m => m.ten_nganh)
      : ['Công nghệ thông tin', 'Marketing & Truyền thông số']
  );
  const [customInput, setCustomInput] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [qIndex]: selectedOptionName }
  const [result, setResult] = useState(null);

  const handleAddCustom = () => {
    if (customInput.trim() && !selectedOptions.includes(customInput.trim())) {
      setSelectedOptions([...selectedOptions, customInput.trim()]);
      setCustomInput('');
    }
  };

  const handleRemoveOption = (opt) => {
    setSelectedOptions(selectedOptions.filter(o => o !== opt));
  };

  const handleAnswer = (optionName) => {
    setAnswers({ ...answers, [currentQIndex]: optionName });
  };

  const handleNext = () => {
    if (currentQIndex + 1 < COMPARE_QUESTIONS.length) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      // Calculate scores
      const scores = {};
      selectedOptions.forEach(opt => { scores[opt] = 0; });

      COMPARE_QUESTIONS.forEach((q, idx) => {
        const chosen = answers[idx];
        if (chosen && scores[chosen] !== undefined) {
          scores[chosen] += q.w;
        }
      });

      const ranked = selectedOptions
        .map(opt => ({ name: opt, score: scores[opt] || 0 }))
        .sort((a, b) => b.score - a.score);

      setResult(ranked);

      // Confetti celebration
      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setQuizStarted(false);
    setCurrentQIndex(0);
    setAnswers({});
    setResult(null);
  };

  const currentQ = COMPARE_QUESTIONS[currentQIndex];

  // Helper for category badge
  const getCatBadge = (cat) => {
    switch (cat) {
      case 'so_thich': return { label: 'Sở thích & Đam mê', color: '#EEF2FF', text: '#4338CA', icon: '🎨' };
      case 'nang_luc': return { label: 'Năng lực thế mạnh', color: '#ECFDF5', text: '#047857', icon: '🧠' };
      case 'mon_hoc': return { label: 'Môn học & Tổ hợp', color: '#F0F9FF', text: '#0284C7', icon: '📚' };
      case 'gia_tri': return { label: 'Giá trị sống cá nhân', color: '#FAF5FF', text: '#7E22CE', icon: '✨' };
      case 'dieu_kien': return { label: 'Điều kiện & Học phí', color: '#FEF3C7', text: '#B45309', icon: '🏛️' };
      case 'co_hoi': return { label: 'Cơ hội việc làm 5 năm tới', color: '#FFF1F2', text: '#E11D48', icon: '🚀' };
      default: return { label: 'Quyết định hành động', color: '#F1F5F9', text: '#334155', icon: '🎯' };
    }
  };

  return (
    <div className="tab-pane-animate">
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <div className="pill-badge" style={{ marginBottom: '10px' }}>⚖️ BƯỚC 3 / 4 • ĐẤU TRƯỜNG SO SÁNH</div>
          <h1 style={{ fontSize: '2.35rem', marginBottom: '8px' }}>So sánh lựa chọn có trọng số</h1>
          <p style={{ color: '#64748B', maxWidth: '62ch', margin: '0 auto', fontSize: '0.98rem' }}>
            Đặt 2 - 3 ngành bạn đang phân vân lên bàn cân qua 20 câu hỏi tính điểm trọng số (thang 100 điểm) để tìm ra phương án tối ưu nhất.
          </p>
        </div>

        {/* STEP 1: PICK OPTIONS */}
        {!quizStarted && !result && (
          <div className="card-box">
            <h2 style={{ fontSize: '1.45rem', marginBottom: '8px' }}>1. Chọn các phương án bạn muốn so sánh</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '22px' }}>
              Cần ít nhất 2 phương án để bắt đầu (khuyên dùng 2-3 phương án):
            </p>

            {/* Selected Options Chips */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {selectedOptions.map((opt, i) => (
                <div
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '9px 18px',
                    borderRadius: '999px',
                    background: '#EEF2FF',
                    color: '#4338CA',
                    fontWeight: '700',
                    fontSize: '0.94rem',
                    border: '1.5px solid #C7D2FE',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <span>{opt}</span>
                  {selectedOptions.length > 2 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(opt)}
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: '#F43F5E' }}
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Quick add from catalog */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#1E293B', marginBottom: '8px' }}>
                Thêm nhanh từ danh mục ngành:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {MAJORS_DATA.filter(m => !selectedOptions.includes(m.ten_nganh)).slice(0, 5).map(m => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedOptions([...selectedOptions, m.ten_nganh])}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      border: '1.5px dashed #CBD5E1',
                      background: '#FFFFFF',
                      color: '#475569',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    + {m.ten_nganh}
                  </button>
                ))}
              </div>
            </div>

            {/* Add custom input */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '32px' }}>
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddCustom()}
                placeholder="Hoặc tự nhập phương án khác (ví dụ: Ngôn ngữ Hàn, Quản trị khách sạn)..."
                style={{
                  flex: 1,
                  padding: '12px 18px',
                  borderRadius: '14px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '0.94rem',
                  outline: 'none',
                  background: '#FFFDF9'
                }}
              />
              <button
                type="button"
                className="btn-edtech-secondary"
                onClick={handleAddCustom}
                style={{ padding: '0 20px', borderRadius: '14px' }}
              >
                <Plus size={18} />
                <span>Thêm</span>
              </button>
            </div>

            <button
              className="btn-edtech-primary"
              disabled={selectedOptions.length < 2}
              onClick={() => setQuizStarted(true)}
              style={{ width: '100%', padding: '16px 24px', fontSize: '1.05rem' }}
            >
              <Scale size={20} />
              <span>Bắt đầu so sánh 20 tiêu chí</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* STEP 2: QUIZ IN PROGRESS (ARENA BALANCE) */}
        {quizStarted && !result && currentQ && (
          <div className="card-box">
            {/* Header info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {(() => {
                  const b = getCatBadge(currentQ.cat);
                  return (
                    <span style={{ fontSize: '0.78rem', fontWeight: '800', padding: '4px 10px', borderRadius: '999px', background: b.color, color: b.text }}>
                      {b.icon} {b.label}
                    </span>
                  );
                })()}
              </div>

              <div style={{ fontSize: '0.86rem', fontWeight: '800', color: '#4F46E5' }}>
                Câu {currentQIndex + 1} / {COMPARE_QUESTIONS.length} • Trọng số: {currentQ.w}đ
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ height: '8px', background: '#F1F5F9', borderRadius: '999px', overflow: 'hidden', marginBottom: '24px' }}>
              <div
                style={{
                  height: '100%',
                  width: `${((currentQIndex + 1) / COMPARE_QUESTIONS.length) * 100}%`,
                  background: 'var(--primary-gradient)',
                  borderRadius: '999px',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>

            <h2 style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '24px', lineHeight: '1.4', color: '#1E293B' }}>
              {currentQ.text}
            </h2>

            {/* Options selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {selectedOptions.map((opt, i) => {
                const isSelected = answers[currentQIndex] === opt;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleAnswer(opt)}
                    style={{
                      padding: '18px 22px',
                      borderRadius: '18px',
                      border: isSelected ? '2px solid #4F46E5' : '1.5px solid #E2E8F0',
                      background: isSelected ? '#EEF2FF' : '#FFFFFF',
                      color: isSelected ? '#4338CA' : '#1E293B',
                      fontFamily: 'inherit',
                      fontSize: '1rem',
                      fontWeight: isSelected ? '800' : '600',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.15s ease',
                      boxShadow: isSelected ? '0 6px 18px -4px rgba(79, 70, 229, 0.2)' : 'var(--shadow-sm)'
                    }}
                  >
                    <span>{opt}</span>
                    {isSelected ? (
                      <CheckCircle2 size={22} color="#4F46E5" />
                    ) : (
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #CBD5E1' }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                className="btn-edtech-secondary"
                disabled={currentQIndex === 0}
                onClick={() => setCurrentQIndex(currentQIndex - 1)}
                style={{ opacity: currentQIndex === 0 ? 0.5 : 1 }}
              >
                <ArrowLeft size={16} />
                <span>Quay lại</span>
              </button>

              <button
                className="btn-edtech-primary"
                onClick={handleNext}
                disabled={!answers[currentQIndex]}
                style={{ opacity: !answers[currentQIndex] ? 0.6 : 1 }}
              >
                <span>{currentQIndex + 1 === COMPARE_QUESTIONS.length ? 'Xem kết quả bảng điểm' : 'Câu tiếp theo'}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: RESULTS PODIUM (PLAN A & PLAN B) */}
        {result && (
          <div className="tab-pane-animate">
            {/* Top Winner Highlight */}
            <div
              style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)',
                color: '#FFFFFF',
                borderRadius: '26px',
                padding: '32px',
                boxShadow: '0 20px 40px -10px rgba(245, 158, 11, 0.35)',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.95, marginBottom: '6px' }}>
                  🏆 PHƯƠNG ÁN ƯU TIÊN SỐ 1 (PLAN A)
                </div>
                <h2 style={{ fontSize: '2.1rem', fontWeight: '900', color: '#FFFFFF', margin: 0 }}>
                  {result[0].name}
                </h2>
                <p style={{ color: '#FFFFFF', opacity: 0.9, fontSize: '0.94rem', margin: '8px 0 0' }}>
                  Đạt độ tương thích cao nhất về thế mạnh, sở thích và kỳ vọng nghề nghiệp của bạn.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(10px)',
                  padding: '14px 28px',
                  borderRadius: '999px',
                  fontSize: '1.4rem',
                  fontWeight: '900',
                  fontFamily: 'var(--font-display)',
                  border: '1.5px solid rgba(255,255,255,0.4)'
                }}
              >
                {result[0].score} / 100 điểm
              </div>
            </div>

            {/* Score Breakdown Cards */}
            <div className="card-box" style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '6px' }}>Bảng xếp hạng mức độ phù hợp</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '24px' }}>
                Tổng điểm của từng phương án tương ứng với độ khớp qua 20 tiêu chí thực tế.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {result.map((item, idx) => (
                  <div key={idx} style={{ background: '#FFFDF9', padding: '16px 20px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: '700', fontSize: '0.96rem' }}>
                      <span style={{ color: idx === 0 ? '#B45309' : '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>{idx === 0 ? '🥇 Phương án 1 (Plan A):' : idx === 1 ? '🥈 Phương án 2 (Plan B):' : '🥉 Phương án 3:'}</span>
                        <strong>{item.name}</strong>
                      </span>
                      <span style={{ color: idx === 0 ? '#B45309' : '#4F46E5', fontFamily: 'var(--font-display)', fontWeight: '900', fontSize: '1.05rem' }}>
                        {item.score} / 100
                      </span>
                    </div>

                    <div style={{ height: '12px', background: '#E2E8F0', borderRadius: '999px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${item.score}%`,
                          background: idx === 0 ? 'linear-gradient(90deg, #F59E0B, #EA580C)' : 'linear-gradient(90deg, #4F46E5, #0EA5E9)',
                          borderRadius: '999px',
                          transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next actions */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                className="btn-edtech-primary"
                onClick={() => {
                  onSelectForRoadmap(result[0].name, result[1]?.name || '');
                  onNavigate('roadmap');
                }}
              >
                <Sparkles size={18} />
                <span>Lập Career Roadmap cho {result[0].name}</span>
                <ArrowRight size={18} />
              </button>

              <button className="btn-edtech-secondary" onClick={handleReset}>
                <RotateCcw size={18} />
                <span>So sánh lại</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
