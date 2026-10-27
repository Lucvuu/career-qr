import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Layers, Plus, Trash2, ArrowRight, RotateCcw, Trophy, CheckCircle, Sparkles } from 'lucide-react';
import { MAJORS_DATA, COMPARE_QUESTIONS } from '../data/careerData';

export default function CompareView({ onNavigate, bookmarkedMajors = [], onSelectForRoadmap }) {
  const [selectedOptions, setSelectedOptions] = useState(
    bookmarkedMajors.length >= 2
      ? bookmarkedMajors.slice(0, 3).map(m => m.ten_nganh)
      : ['Công nghệ thông tin', 'Khoa học Dữ liệu & Trí tuệ Nhân tạo']
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

      // Confetti
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

  return (
    <div className="tab-pane-animate">
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <div className="pill-badge" style={{ marginBottom: '10px' }}>BƯỚC 3 / 4 • SO SÁNH PHƯƠNG ÁN</div>
          <h1 style={{ fontSize: '2.4rem' }}>So sánh lựa chọn có trọng số</h1>
          <p style={{ color: '#64748B' }}>
            Đặt 2 - 3 ngành bạn đang phân vân lên bàn cân qua 20 câu hỏi tính điểm trọng số (thang 100 điểm) để tìm ra phương án tối ưu nhất.
          </p>
        </div>

        {/* STEP 1: PICK OPTIONS */}
        {!quizStarted && !result && (
          <div className="card-box">
            <h2 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>1. Chọn các phương án bạn muốn so sánh</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '20px' }}>
              Cần ít nhất 2 phương án để bắt đầu (khuyên dùng 2-3 phương án):
            </p>

            {/* Selected Options Chips */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {selectedOptions.map((opt, i) => (
                <div
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '999px',
                    background: '#EEF2FF',
                    color: '#4F46E5',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    border: '1px solid rgba(79, 70, 229, 0.2)'
                  }}
                >
                  <span>{opt}</span>
                  {selectedOptions.length > 2 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(opt)}
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: '#EF4444' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Quick add from catalog */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#1E293B', marginBottom: '6px' }}>
                Thêm nhanh từ danh mục ngành:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {MAJORS_DATA.filter(m => !selectedOptions.includes(m.ten_nganh)).slice(0, 5).map(m => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedOptions([...selectedOptions, m.ten_nganh])}
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      padding: '5px 12px',
                      borderRadius: '999px',
                      border: '1.5px dashed #CBD5E1',
                      background: '#FFFFFF',
                      color: '#475569',
                      cursor: 'pointer'
                    }}
                  >
                    + {m.ten_nganh}
                  </button>
                ))}
              </div>
            </div>

            {/* Add custom input */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddCustom()}
                placeholder="Hoặc tự nhập phương án khác (ví dụ: Ngôn ngữ Hàn, Quản trị khách sạn)..."
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              />
              <button
                type="button"
                className="btn-secondary"
                onClick={handleAddCustom}
                style={{ padding: '0 20px', borderRadius: '12px' }}
              >
                <Plus size={18} />
                <span>Thêm</span>
              </button>
            </div>

            <button
              className="btn-primary"
              disabled={selectedOptions.length < 2}
              onClick={() => setQuizStarted(true)}
              style={{ width: '100%', padding: '14px 24px', fontSize: '1.05rem' }}
            >
              <span>Bắt đầu trả lời 20 câu hỏi so sánh</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* STEP 2: QUIZ IN PROGRESS */}
        {quizStarted && !result && currentQ && (
          <div className="card-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '0.86rem', fontWeight: '800', color: '#4F46E5' }}>
              <span>Câu {currentQIndex + 1} / {COMPARE_QUESTIONS.length}</span>
              <span>Trọng số: {currentQ.w} điểm</span>
            </div>

            <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '999px', overflow: 'hidden', marginBottom: '24px' }}>
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

            <h2 style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '20px', lineHeight: '1.4' }}>
              {currentQ.text}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {selectedOptions.map((opt, i) => {
                const isSelected = answers[currentQIndex] === opt;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleAnswer(opt)}
                    style={{
                      padding: '18px 24px',
                      borderRadius: '16px',
                      border: isSelected ? '2px solid #4F46E5' : '1.5px solid #E2E8F0',
                      background: isSelected ? '#EEF2FF' : '#FFFFFF',
                      color: isSelected ? '#4338CA' : '#0F172A',
                      fontFamily: 'inherit',
                      fontSize: '1.02rem',
                      fontWeight: isSelected ? '800' : '600',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span>{opt}</span>
                    {isSelected && <CheckCircle size={20} color="#4F46E5" />}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                className="btn-secondary"
                disabled={currentQIndex === 0}
                onClick={() => setCurrentQIndex(currentQIndex - 1)}
              >
                Quay lại
              </button>
              <button
                className="btn-primary"
                onClick={handleNext}
                disabled={!answers[currentQIndex]}
              >
                <span>{currentQIndex + 1 === COMPARE_QUESTIONS.length ? 'Xem kết quả bảng điểm' : 'Câu tiếp theo'}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: RESULTS VIEW */}
        {result && (
          <div className="tab-pane-animate">
            {/* Top Winner Highlight */}
            <div
              style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '28px 32px',
                boxShadow: '0 20px 45px -10px rgba(245, 158, 11, 0.45)',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.9, marginBottom: '6px' }}>
                  🏆 PHƯƠNG ÁN ĐẠT ĐIỂM CAO NHẤT
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#FFFFFF', margin: 0 }}>
                  {result[0].name}
                </h2>
              </div>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(8px)',
                  padding: '12px 24px',
                  borderRadius: '999px',
                  fontSize: '1.4rem',
                  fontWeight: '900',
                  fontFamily: 'var(--font-display)'
                }}
              >
                {result[0].score} / 100 điểm
              </div>
            </div>

            {/* Score Breakdown Cards */}
            <div className="card-box" style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Bảng điểm chi tiết các phương án</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '24px' }}>
                Tổng điểm của từng phương án tương ứng với mức độ phù hợp về sở thích, năng lực và điều kiện thực tế.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {result.map((item, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: '700', fontSize: '0.94rem' }}>
                      <span style={{ color: idx === 0 ? '#B45309' : '#1E293B' }}>
                        {idx === 0 && '⭐ '} {item.name}
                      </span>
                      <span style={{ color: idx === 0 ? '#B45309' : '#64748B', fontFamily: 'var(--font-display)', fontWeight: '800' }}>
                        {item.score} / 100
                      </span>
                    </div>
                    <div style={{ height: '14px', background: '#F1F5F9', borderRadius: '999px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${item.score}%`,
                          background: idx === 0 ? 'var(--accent-gradient)' : 'var(--primary-gradient)',
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
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                className="btn-primary"
                onClick={() => {
                  onSelectForRoadmap(result[0].name, result[1]?.name || '');
                  onNavigate('roadmap');
                }}
              >
                <span>Lập Career Roadmap cho {result[0].name}</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary" onClick={handleReset}>
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
