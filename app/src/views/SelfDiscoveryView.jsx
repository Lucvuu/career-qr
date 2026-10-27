import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowLeft, ArrowRight, Sparkles, Check, RotateCcw, Share2, Compass } from 'lucide-react';
import RadarChart from '../components/RadarChart';
import { MAJORS_DATA } from '../data/careerData';

export default function SelfDiscoveryView({ onNavigate, onBookmarkMajor }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [selectedEnvironment, setSelectedEnvironment] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const SUBJECTS = [
    { name: "Toán", icon: "📐", traits: { I: 25, R: 15, C: 15 } },
    { name: "Ngữ văn", icon: "📖", traits: { A: 25, S: 15 } },
    { name: "Ngoại ngữ", icon: "🌐", traits: { S: 20, E: 20, A: 10 } },
    { name: "Vật lý", icon: "⚡", traits: { R: 25, I: 20 } },
    { name: "Hóa học", icon: "🧪", traits: { I: 25, R: 15 } },
    { name: "Sinh học", icon: "🧬", traits: { I: 25, S: 15 } },
    { name: "Lịch sử", icon: "📜", traits: { S: 20, I: 15 } },
    { name: "Địa lý", icon: "🌍", traits: { S: 15, R: 15 } },
    { name: "GDKT&PL", icon: "⚖️", traits: { E: 25, S: 15, C: 10 } },
    { name: "Tin học", icon: "💻", traits: { R: 25, I: 25 } },
    { name: "Công nghệ", icon: "⚙️", traits: { R: 25, I: 15 } },
    { name: "Mỹ thuật/Âm nhạc", icon: "🎨", traits: { A: 30, S: 10 } }
  ];

  const HOBBIES = [
    {
      text: "Tìm hiểu, lắp ráp, sửa chữa thiết bị công nghệ & lập trình máy tính",
      icon: "💻",
      archetype: "Nhà Đổi Mới Công Nghệ & Kỹ Thuật (Tech Innovator)",
      traits: { R: 40, I: 35, A: 10, S: 5, E: 15, C: 20 },
      suggestedMajors: ["cntt", "khdl", "tudonghoa"]
    },
    {
      text: "Vẽ, thiết kế, chụp ảnh, sáng tạo nội dung truyền thông & nghệ thuật",
      icon: "🎨",
      archetype: "Người Sáng Tạo & Khai Phóng Nghệ Thuật (Creative Maker)",
      traits: { R: 10, I: 15, A: 45, S: 15, E: 25, C: 10 },
      suggestedMajors: ["dohoa", "marketing"]
    },
    {
      text: "Đọc sách, viết lách, tranh luận, tìm hiểu khoa học xã hội & tâm lý",
      icon: "📚",
      archetype: "Nhà Nghiên Cứu & Khai Phóng Xã Hội (Analytical Thinker)",
      traits: { R: 5, I: 35, A: 25, S: 35, E: 10, C: 10 },
      suggestedMajors: ["tamly", "kdqt"]
    },
    {
      text: "Lắng nghe, chăm sóc, giúp đỡ người khác & tham gia hoạt động tình nguyện",
      icon: "🤝",
      archetype: "Đại Sứ Cộng Đồng & Y Tế - Giáo Dục (Caregiver & Mentor)",
      traits: { R: 10, I: 20, A: 10, S: 45, E: 15, C: 10 },
      suggestedMajors: ["ykhoa", "tamly"]
    },
    {
      text: "Tính toán số liệu, kinh doanh, quản lý dự án & điều phối công việc",
      icon: "📈",
      archetype: "Nhà Chiến Lược & Quản Trị Kinh Doanh (Strategic Leader)",
      traits: { R: 10, I: 15, A: 10, S: 25, E: 45, C: 30 },
      suggestedMajors: ["marketing", "kdqt"]
    },
    {
      text: "Chơi thể thao, vận động, dã ngoại và khám phá môi trường thực tế",
      icon: "🏞️",
      archetype: "Nhà Khám Phá & Hành Động Thực Tế (Action Adventurer)",
      traits: { R: 45, I: 15, A: 10, S: 20, E: 20, C: 10 },
      suggestedMajors: ["tudonghoa", "cntt"]
    }
  ];

  const ENVIRONMENTS = [
    { text: "Làm việc độc lập, tập trung cao độ vào chuyên môn sâu", icon: "🎯" },
    { text: "Làm việc nhóm năng động, trao đổi và tương tác nhiều người", icon: "👥" },
    { text: "Môi trường ổn định, tính quy trình rõ ràng và bảo đảm", icon: "🏛️" },
    { text: "Môi trường linh hoạt, sáng tạo, nhiều thử thách và biến đổi", icon: "🚀" }
  ];

  const VALUES = [
    { text: "Thu nhập cao, cơ hội thăng tiến và khẳng định bản thân", icon: "💎" },
    { text: "Được tự do sáng tạo, biến ý tưởng riêng thành hiện thực", icon: "✨" },
    { text: "Tạo giá trị nhân văn, đóng góp tích cực cho xã hội", icon: "❤️" },
    { text: "Cân bằng lành mạnh giữa công việc và cuộc sống cá nhân", icon: "🌿" }
  ];

  const handleToggleSubject = (name) => {
    if (selectedSubjects.includes(name)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== name));
    } else {
      if (selectedSubjects.length >= 3) {
        alert("Bạn chỉ chọn tối đa 3 môn học thế mạnh nhất nhé.");
        return;
      }
      setSelectedSubjects([...selectedSubjects, name]);
    }
  };

  const handleFinish = () => {
    if (selectedSubjects.length === 0 || !selectedHobby) {
      alert("Vui lòng chọn ít nhất 1 môn học và 1 sở thích.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Calculate Holland Scores
      const baseScores = { R: 30, I: 30, A: 30, S: 30, E: 30, C: 30 };

      // Add traits from hobby
      if (selectedHobby.traits) {
        Object.keys(selectedHobby.traits).forEach(k => {
          baseScores[k] += selectedHobby.traits[k];
        });
      }

      // Add traits from subjects
      selectedSubjects.forEach(subName => {
        const found = SUBJECTS.find(s => s.name === subName);
        if (found && found.traits) {
          Object.keys(found.traits).forEach(k => {
            baseScores[k] += found.traits[k];
          });
        }
      });

      // Normalize max 95
      const finalScores = {};
      Object.keys(baseScores).forEach(k => {
        finalScores[k] = Math.min(95, Math.max(25, Math.round(baseScores[k])));
      });

      // Pick matching majors from dataset
      const matchedMajors = MAJORS_DATA.filter(m => selectedHobby.suggestedMajors.includes(m.id));

      setResult({
        archetype: selectedHobby.archetype,
        scores: finalScores,
        majors: matchedMajors.length ? matchedMajors : MAJORS_DATA.slice(0, 3),
        note: note
      });

      setIsSubmitting(false);

      // Trigger Confetti explosion
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleRedo = () => {
    setResult(null);
    setCurrentStep(1);
    setSelectedSubjects([]);
    setSelectedHobby(null);
    setSelectedEnvironment('');
    setSelectedValue('');
    setNote('');
  };

  return (
    <div className="tab-pane-animate">
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <div style={{ marginBottom: '28px' }}>
          <div className="pill-badge" style={{ marginBottom: '10px' }}>BƯỚC 1 / 4 • TRẮC NGHIỆM ĐỊNH HƯỚNG</div>
          <h1 style={{ fontSize: '2.4rem' }}>Khám phá bản thân & Hình mẫu nghề nghiệp</h1>
          <p style={{ color: '#64748B' }}>
            5 câu hỏi ngắn giúp bạn xác định rõ nét thiên hướng, nhóm tính cách Holland và nhận gợi ý ngành học phù hợp.
          </p>
        </div>

        {/* PROGRESS BAR */}
        {!result && (
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', fontWeight: '800', color: '#4F46E5', marginBottom: '8px' }}>
              <span>Câu hỏi {currentStep} / 5</span>
              <span>{currentStep * 20}% Hoàn thành</span>
            </div>
            <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '999px', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${currentStep * 20}%`,
                  background: 'var(--primary-gradient)',
                  borderRadius: '999px',
                  transition: 'width 0.35s ease'
                }}
              />
            </div>
          </div>
        )}

        {/* STEP 1: MÔN HỌC */}
        {!result && currentStep === 1 && (
          <div className="card-box">
            <h2 style={{ fontSize: '1.45rem', marginBottom: '8px' }}>1. Bạn yêu thích hoặc học tốt nhất những môn nào?</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '20px' }}>Chọn tối đa 3 môn thế mạnh của bạn:</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px', marginBottom: '28px' }}>
              {SUBJECTS.map((s, i) => {
                const isSelected = selectedSubjects.includes(s.name);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleToggleSubject(s.name)}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '14px',
                      border: isSelected ? '2px solid #4F46E5' : '1.5px solid #E2E8F0',
                      background: isSelected ? '#EEF2FF' : '#FFFFFF',
                      color: isSelected ? '#4338CA' : '#1E293B',
                      fontFamily: 'inherit',
                      fontSize: '0.92rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.18s ease'
                    }}
                  >
                    <span>{s.icon} {s.name}</span>
                    {isSelected && <Check size={16} color="#4F46E5" />}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                className="btn-primary"
                onClick={() => {
                  if (selectedSubjects.length === 0) {
                    alert("Hãy chọn ít nhất 1 môn học thế mạnh nhé!");
                    return;
                  }
                  setCurrentStep(2);
                }}
              >
                <span>Tiếp tục</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SỞ THÍCH */}
        {!result && currentStep === 2 && (
          <div className="card-box">
            <h2 style={{ fontSize: '1.45rem', marginBottom: '8px' }}>2. Trong thời gian rảnh, bạn thường hào hứng với điều gì nhất?</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '20px' }}>Chọn 1 hoạt động bạn đam mê nhất:</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {HOBBIES.map((h, i) => {
                const isSelected = selectedHobby?.text === h.text;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedHobby(h)}
                    style={{
                      padding: '16px 20px',
                      borderRadius: '16px',
                      border: isSelected ? '2px solid #4F46E5' : '1.5px solid #E2E8F0',
                      background: isSelected ? '#EEF2FF' : '#FFFFFF',
                      color: isSelected ? '#4338CA' : '#1E293B',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      fontWeight: isSelected ? '700' : '600',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      transition: 'all 0.18s ease'
                    }}
                  >
                    <span style={{ fontSize: '1.4rem' }}>{h.icon}</span>
                    <span style={{ flex: 1 }}>{h.text}</span>
                    {isSelected && <Check size={18} color="#4F46E5" />}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn-secondary" onClick={() => setCurrentStep(1)}>
                <ArrowLeft size={18} />
                <span>Quay lại</span>
              </button>
              <button
                className="btn-primary"
                onClick={() => {
                  if (!selectedHobby) {
                    alert("Hãy chọn 1 sở thích bạn hào hứng nhất nhé!");
                    return;
                  }
                  setCurrentStep(3);
                }}
              >
                <span>Tiếp tục</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: MÔI TRƯỜNG */}
        {!result && currentStep === 3 && (
          <div className="card-box">
            <h2 style={{ fontSize: '1.45rem', marginBottom: '8px' }}>3. Bạn cảm thấy mình làm việc hiệu quả nhất trong môi trường nào?</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '20px' }}>Chọn không gian làm việc phù hợp với tính cách:</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '28px' }}>
              {ENVIRONMENTS.map((env, i) => {
                const isSelected = selectedEnvironment === env.text;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedEnvironment(env.text)}
                    style={{
                      padding: '18px 20px',
                      borderRadius: '16px',
                      border: isSelected ? '2px solid #4F46E5' : '1.5px solid #E2E8F0',
                      background: isSelected ? '#EEF2FF' : '#FFFFFF',
                      color: isSelected ? '#4338CA' : '#1E293B',
                      fontFamily: 'inherit',
                      fontSize: '0.94rem',
                      fontWeight: isSelected ? '700' : '600',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <span style={{ fontSize: '1.3rem' }}>{env.icon}</span>
                    <span style={{ flex: 1 }}>{env.text}</span>
                    {isSelected && <Check size={18} color="#4F46E5" />}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn-secondary" onClick={() => setCurrentStep(2)}>
                <ArrowLeft size={18} />
                <span>Quay lại</span>
              </button>
              <button
                className="btn-primary"
                onClick={() => {
                  if (!selectedEnvironment) {
                    alert("Hãy chọn 1 môi trường làm việc phù hợp nhé!");
                    return;
                  }
                  setCurrentStep(4);
                }}
              >
                <span>Tiếp tục</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: GIÁ TRỊ CỐT LÕI */}
        {!result && currentStep === 4 && (
          <div className="card-box">
            <h2 style={{ fontSize: '1.45rem', marginBottom: '8px' }}>4. Điều gì quan trọng nhất khi bạn nghĩ về công việc tương lai?</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '20px' }}>Mục tiêu và giá trị cuộc sống bạn hướng tới:</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '28px' }}>
              {VALUES.map((val, i) => {
                const isSelected = selectedValue === val.text;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedValue(val.text)}
                    style={{
                      padding: '18px 20px',
                      borderRadius: '16px',
                      border: isSelected ? '2px solid #4F46E5' : '1.5px solid #E2E8F0',
                      background: isSelected ? '#EEF2FF' : '#FFFFFF',
                      color: isSelected ? '#4338CA' : '#1E293B',
                      fontFamily: 'inherit',
                      fontSize: '0.94rem',
                      fontWeight: isSelected ? '700' : '600',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <span style={{ fontSize: '1.3rem' }}>{val.icon}</span>
                    <span style={{ flex: 1 }}>{val.text}</span>
                    {isSelected && <Check size={18} color="#4F46E5" />}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn-secondary" onClick={() => setCurrentStep(3)}>
                <ArrowLeft size={18} />
                <span>Quay lại</span>
              </button>
              <button
                className="btn-primary"
                onClick={() => {
                  if (!selectedValue) {
                    alert("Hãy chọn 1 giá trị bạn quan tâm nhất nhé!");
                    return;
                  }
                  setCurrentStep(5);
                }}
              >
                <span>Tiếp tục</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: GHI CHÚ VÀ GỬI */}
        {!result && currentStep === 5 && (
          <div className="card-box">
            <h2 style={{ fontSize: '1.45rem', marginBottom: '8px' }}>5. Bạn còn mong muốn hay băn khoăn nào khác không?</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '20px' }}>
              Không bắt buộc — có thể là kỳ vọng của cha mẹ, lo lắng về mức điểm chuẩn hay tài chính:
            </p>

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Ví dụ: Em muốn học đại học tại TP.HCM, bố mẹ muốn theo ngành kinh tế nhưng em thích sáng tạo đồ họa..."
              style={{
                width: '100%',
                minHeight: '120px',
                borderRadius: '14px',
                border: '1.5px solid #CBD5E1',
                padding: '14px 18px',
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                outline: 'none',
                marginBottom: '28px'
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn-secondary" onClick={() => setCurrentStep(4)}>
                <ArrowLeft size={18} />
                <span>Quay lại</span>
              </button>
              <button
                className="btn-primary"
                onClick={handleFinish}
                disabled={isSubmitting}
                style={{ padding: '12px 28px' }}
              >
                <Sparkles size={18} />
                <span>{isSubmitting ? 'Đang tổng hợp dữ liệu...' : 'Xem kết quả & Biểu đồ Holland'}</span>
              </button>
            </div>
          </div>
        )}

        {/* RESULT PRESENTATION VIEW */}
        {result && (
          <div className="tab-pane-animate">
            {/* Archetype Highlight Banner */}
            <div
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
                color: '#FFFFFF',
                borderRadius: '24px',
                padding: '28px 32px',
                boxShadow: '0 20px 45px -10px rgba(79, 70, 229, 0.45)',
                marginBottom: '28px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ fontSize: '0.84rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.85, marginBottom: '8px' }}>
                ✨ HÌNH MẪU ĐỊNH HƯỚNG NGHỀ NGHIỆP CỦA BẠN
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '12px' }}>
                {result.archetype}
              </h2>
              <p style={{ color: '#FFFFFF', opacity: 0.95, fontSize: '1rem', lineHeight: '1.6', margin: 0, maxWidth: '62ch' }}>
                Dựa trên tổ hợp môn thế mạnh ({selectedSubjects.join(', ')}), sở thích cá nhân và môi trường làm việc lý tưởng, bạn có tiềm năng bứt phá rất cao trong các nhóm ngành dưới đây.
              </p>
            </div>

            {/* Radar Chart Card */}
            <div className="card-box" style={{ marginBottom: '28px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '4px' }}>Hồ sơ 6 Chiều Holland (RIASEC)</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B' }}>Biểu đồ thể hiện mức độ tương thích của bạn với các nhóm nghề nghiệp trong xã hội hiện đại.</p>
              <RadarChart scores={result.scores} />
            </div>

            {/* Suggested Majors */}
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '16px' }}>Các ngành học đề xuất cho bạn</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                {result.majors.map((m, idx) => (
                  <div key={idx} className="card-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span className="pill-badge-amber">{m.nhom_nganh}</span>
                        <span style={{ fontSize: '1.5rem' }}>{m.icon}</span>
                      </div>
                      <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{m.ten_nganh}</h4>
                      <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.5', marginBottom: '14px' }}>{m.mo_ta}</p>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                        {m.to_hop.map((th, i) => (
                          <span key={i} className="pill-badge" style={{ padding: '3px 8px', fontSize: '0.74rem' }}>{th}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button
                        className="btn-primary"
                        style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                        onClick={() => onNavigate('search')}
                      >
                        Tra cứu trường ➔
                      </button>
                      <button
                        className="btn-secondary"
                        style={{ padding: '8px 14px', fontSize: '0.82rem' }}
                        onClick={() => {
                          onBookmarkMajor(m);
                          alert(`Đã lưu "${m.ten_nganh}" vào danh sách so sánh!`);
                        }}
                      >
                        ❤️ Lưu so sánh
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px' }}>
              <button className="btn-primary" onClick={() => onNavigate('compare')}>
                <span>So sánh các phương án này</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary" onClick={handleRedo}>
                <RotateCcw size={18} />
                <span>Làm lại từ đầu</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
