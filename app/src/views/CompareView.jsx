import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trash2, 
  Trophy, 
  ArrowRight, 
  Zap
} from 'lucide-react';
import { MAJORS_DATA } from '../data/careerData';

export default function CompareView({ onNavigate, bookmarkedMajors = [], onSelectForRoadmap }) {
  // Initial selected options (2 to 3 majors)
  const [selectedMajorIds, setSelectedMajorIds] = useState(() => {
    if (bookmarkedMajors && bookmarkedMajors.length >= 2) {
      return bookmarkedMajors.slice(0, 3).map(m => m.id);
    }
    return ['marketing', 'kdqt'];
  });

  // 5 Personal Priority Sliders (Weights from 1 to 5)
  const [weights, setWeights] = useState({
    salary: 4,      // Ưu tiên lương cao & bứt phá thu nhập
    easyScore: 3,   // Ưu tiên điểm vừa sức, an toàn đỗ
    lowTuition: 3,  // Ưu tiên học phí tiết kiệm
    lowPressure: 3, // Ưu tiên ít áp lực, học tập cân bằng
    aiSafety: 4     // Ưu tiên an toàn trước AI, ít bị thay thế
  });

  const PRESET_BATTLES = [
    {
      label: "Marketing vs Kinh doanh quốc tế",
      sub: "Kinh tế & Thương mại",
      ids: ["marketing", "kdqt"],
      icon: "📢"
    },
    {
      label: "CNTT vs Kỹ thuật Vi mạch",
      sub: "Công nghệ cao & Bán dẫn",
      ids: ["cntt", "vi-mach"],
      icon: "💻"
    },
    {
      label: "Tài chính vs Kế toán - Kiểm toán",
      sub: "Tài chính & Thuế",
      ids: ["tai-chinh-ngan-hang", "ke-toan"],
      icon: "💳"
    },
    {
      label: "Y khoa vs Dược học",
      sub: "Khối ngành Sức khỏe",
      ids: ["ykhoa", "duoc-hoc"],
      icon: "🩺"
    },
    {
      label: "Ngôn ngữ Anh vs Ngôn ngữ Trung",
      sub: "Ngoại ngữ & Đối ngoại",
      ids: ["ngon-ngu-anh", "ngon-ngu-trung"],
      icon: "🌐"
    }
  ];

  const QUICK_ADD_MAJORS = [
    { id: 'marketing', name: '+ Marketing số' },
    { id: 'logistics', name: '+ Logistics & Chuỗi cung ứng' },
    { id: 'cntt', name: '+ CNTT & Trí tuệ Nhân tạo' },
    { id: 'vi-mach', name: '+ Vi mạch & Bán dẫn' },
    { id: 'kdqt', name: '+ Kinh doanh quốc tế' },
    { id: 'tai-chinh-ngan-hang', name: '+ Tài chính - Ngân hàng' },
    { id: 'ngon-ngu-anh', name: '+ Ngôn ngữ Anh' },
    { id: 'ykhoa', name: '+ Y khoa' },
    { id: 'duoc-hoc', name: '+ Dược học' },
    { id: 'dohoa', name: '+ Thiết kế Đồ họa' }
  ];

  // Resolve major objects
  const selectedMajors = useMemo(() => {
    return selectedMajorIds
      .map(id => MAJORS_DATA.find(m => m.id === id))
      .filter(Boolean);
  }, [selectedMajorIds]);

  const handleSelectPreset = (ids) => {
    setSelectedMajorIds(ids);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleAddMajor = (id) => {
    if (selectedMajorIds.length >= 3) {
      alert("Bạn nên so sánh tối đa 3 ngành cùng lúc để bảng thông tin dễ đọc và dễ cân nhắc nhất nhé!");
      return;
    }
    if (!selectedMajorIds.includes(id)) {
      setSelectedMajorIds([...selectedMajorIds, id]);
    }
  };

  const handleRemoveMajor = (id) => {
    if (selectedMajorIds.length <= 2) {
      alert("Cần giữ lại ít nhất 2 ngành trên bảng để đối chiếu bạn nhé!");
      return;
    }
    setSelectedMajorIds(selectedMajorIds.filter(mId => mId !== id));
  };

  // Real-time Composite Score Calculation based on 5 Priority Sliders
  const calculatedScores = useMemo(() => {
    const totalWeights = weights.salary + weights.easyScore + weights.lowTuition + weights.lowPressure + weights.aiSafety;

    return selectedMajors.map(m => {
      // 1. Salary Score (0 - 100)
      let salaryPoints = 75;
      if (m.salaryRoadmap?.senior?.includes('40') || m.salaryRoadmap?.senior?.includes('50') || m.id === 'cntt' || m.id === 'vi-mach' || m.id === 'ykhoa') {
        salaryPoints = 95;
      } else if (m.salaryRoadmap?.senior?.includes('30') || m.salaryRoadmap?.senior?.includes('35')) {
        salaryPoints = 85;
      }

      // 2. Easy Score (Dễ đỗ)
      let scorePoints = 70;
      const lowerBenchmark = parseFloat(m.diem_tb?.split('-')[0]?.trim() || '25');
      if (lowerBenchmark < 22) scorePoints = 92;
      else if (lowerBenchmark < 25) scorePoints = 82;
      else if (lowerBenchmark < 27) scorePoints = 68;
      else scorePoints = 55;

      // 3. Low Tuition Score (Học phí thấp)
      let tuitionPoints = 75;
      if (m.hoc_phi?.toLowerCase().includes('miễn') || m.hoc_phi?.includes('14') || m.hoc_phi?.includes('18')) {
        tuitionPoints = 95;
      } else if (m.hoc_phi?.includes('20') || m.hoc_phi?.includes('25')) {
        tuitionPoints = 80;
      } else if (m.hoc_phi?.includes('35') || m.hoc_phi?.includes('40')) {
        tuitionPoints = 65;
      }

      // 4. Low Pressure Score (Ít áp lực đào thải)
      let pressurePoints = 75;
      if (m.id === 'ykhoa') pressurePoints = 50; // Học y cực nặng
      else if (m.id === 'vi-mach' || m.id === 'cntt') pressurePoints = 65; // Đào thải công nghệ nhanh
      else if (m.id === 'supham-toan' || m.id === 'ngon-ngu-anh') pressurePoints = 85;

      // 5. AI Safety Score
      let aiSafetyPoints = 80;
      const riskText = m.aiRiskLevel || 'Trung bình';
      if (riskText.includes('Thấp') || riskText.includes('Rất thấp') || m.id === 'ykhoa' || m.id === 'vi-mach' || m.id === 'tamly') {
        aiSafetyPoints = 94;
      } else if (riskText.includes('Cao') || m.id === 'ke-toan') {
        aiSafetyPoints = 58;
      }

      const composite = Math.round(
        (salaryPoints * weights.salary +
         scorePoints * weights.easyScore +
         tuitionPoints * weights.lowTuition +
         pressurePoints * weights.lowPressure +
         aiSafetyPoints * weights.aiSafety) / totalWeights
      );

      return {
        major: m,
        compositeScore: composite,
        details: {
          salaryPoints,
          scorePoints,
          tuitionPoints,
          pressurePoints,
          aiSafetyPoints
        }
      };
    }).sort((a, b) => b.compositeScore - a.compositeScore);
  }, [selectedMajors, weights]);

  const winner = calculatedScores[0];

  return (
    <div className="tab-pane-animate">
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div className="pill-badge" style={{ marginBottom: '10px' }}>⚖️ BƯỚC 3 / 4 • SO SÁNH CÁC LỰA CHỌN</div>
        <h1 className="view-hero-h1" style={{ fontSize: '2.35rem', marginBottom: '8px' }}>Đặt các ngành đang phân vân cạnh nhau</h1>
        <p style={{ color: '#64748B', maxWidth: '64ch', margin: '0 auto', fontSize: '0.98rem' }}>
          Chọn 2 – 3 ngành bạn đang lưỡng lự, sau đó kéo 5 thanh ưu tiên bên dưới theo điều kiện của bản thân và gia đình để xem ngành nào phù hợp hơn.
        </p>
      </div>

      {/* SECTION 1: 1-CLICK PRESET BATTLES */}
      <div className="compare-section-card" style={{ background: '#FFFFFF', borderRadius: '24px', padding: '22px 24px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-card)', marginBottom: '28px' }}>
        <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Zap size={16} color="#F59E0B" />
          <span>Các cặp ngành học sinh hay phân vân (bấm để xem nhanh):</span>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {PRESET_BATTLES.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              className="preset-battle-btn"
              onClick={() => handleSelectPreset(preset.ids)}
            >
              <span>{preset.icon}</span>
              <span>{preset.label}</span>
            </button>
          ))}
        </div>

        {/* Selected Chips & Quick Add */}
        <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px dashed #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: '800', color: '#1E293B' }}>Đang so sánh:</span>
            {selectedMajors.map(m => (
              <span
                key={m.id}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: '#EEF2FF',
                  color: '#4338CA',
                  fontWeight: '800',
                  fontSize: '0.86rem',
                  border: '1.5px solid #C7D2FE'
                }}
              >
                <span>{m.icon}</span>
                <span>{m.ten_nganh}</span>
                {selectedMajors.length > 2 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveMajor(m.id)}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, color: '#F43F5E', display: 'flex' }}
                  >
                    <Trash2 size={13} />
                  </button>
                )}
              </span>
            ))}
          </div>

          {/* Quick Add Chips */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: '700' }}>Thêm nhanh:</span>
            {QUICK_ADD_MAJORS.filter(q => !selectedMajorIds.includes(q.id)).slice(0, 4).map(q => (
              <button
                key={q.id}
                type="button"
                onClick={() => handleAddMajor(q.id)}
                style={{
                  fontSize: '0.76rem',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  background: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  color: '#334155',
                  cursor: 'pointer',
                  fontWeight: '700'
                }}
              >
                {q.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: 5 REAL-TIME PRIORITY SLIDERS */}
      <div className="compare-section-card" style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)', borderRadius: '24px', padding: '24px', color: '#FFFFFF', marginBottom: '28px', boxShadow: '0 12px 30px -8px rgba(49, 46, 129, 0.4)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '18px' }}>
          <div>
            <div style={{ fontSize: '0.78rem', color: '#A5B4FC', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              TÙY CHỈNH THEO MONG MUỐN CỦA BẠN
            </div>
            <h2 style={{ fontSize: '1.35rem', margin: '2px 0 0', fontWeight: '900', color: '#FFFFFF' }}>
              Điều gì quan trọng nhất với bạn và gia đình?
            </h2>
          </div>
          <span style={{ fontSize: '0.78rem', background: 'rgba(255, 255, 255, 0.15)', padding: '5px 12px', borderRadius: '999px', color: '#FDE047', fontWeight: '800' }}>
            Kéo thanh trượt từ 1 (ít quan tâm) đến 5 (rất quan tâm)
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
          {/* Slider 1: Lương */}
          <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '14px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: '800', marginBottom: '6px' }}>
              <span>💰 Thu nhập tốt</span>
              <span style={{ color: '#FDE047' }}>{weights.salary} / 5</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="5" 
              value={weights.salary} 
              onChange={(e) => setWeights({ ...weights, salary: parseInt(e.target.value) })}
              className="battle-slider-track"
            />
            <div style={{ fontSize: '0.7rem', color: '#C7D2FE', marginTop: '4px' }}>Kỳ vọng thu nhập sau 3 – 5 năm</div>
          </div>

          {/* Slider 2: Điểm vừa sức */}
          <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '14px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: '800', marginBottom: '6px' }}>
              <span>🎯 Điểm chuẩn vừa sức</span>
              <span style={{ color: '#FDE047' }}>{weights.easyScore} / 5</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="5" 
              value={weights.easyScore} 
              onChange={(e) => setWeights({ ...weights, easyScore: parseInt(e.target.value) })}
              className="battle-slider-track"
            />
            <div style={{ fontSize: '0.7rem', color: '#C7D2FE', marginTop: '4px' }}>Giảm bớt áp lực điểm đầu vào</div>
          </div>

          {/* Slider 3: Học phí thấp */}
          <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '14px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: '800', marginBottom: '6px' }}>
              <span>💳 Học phí nhẹ gánh</span>
              <span style={{ color: '#FDE047' }}>{weights.lowTuition} / 5</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="5" 
              value={weights.lowTuition} 
              onChange={(e) => setWeights({ ...weights, lowTuition: parseInt(e.target.value) })}
              className="battle-slider-track"
            />
            <div style={{ fontSize: '0.7rem', color: '#C7D2FE', marginTop: '4px' }}>Phù hợp ngân sách gia đình</div>
          </div>

          {/* Slider 4: Ít áp lực */}
          <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '14px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: '800', marginBottom: '6px' }}>
              <span>🌿 Học &amp; làm đỡ căng thẳng</span>
              <span style={{ color: '#FDE047' }}>{weights.lowPressure} / 5</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="5" 
              value={weights.lowPressure} 
              onChange={(e) => setWeights({ ...weights, lowPressure: parseInt(e.target.value) })}
              className="battle-slider-track"
            />
            <div style={{ fontSize: '0.7rem', color: '#C7D2FE', marginTop: '4px' }}>Giữ nhịp sống cân bằng</div>
          </div>

          {/* Slider 5: An toàn AI */}
          <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '14px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: '800', marginBottom: '6px' }}>
              <span>🛡️ Khó bị AI làm thay</span>
              <span style={{ color: '#FDE047' }}>{weights.aiSafety} / 5</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="5" 
              value={weights.aiSafety} 
              onChange={(e) => setWeights({ ...weights, aiSafety: parseInt(e.target.value) })}
              className="battle-slider-track"
            />
            <div style={{ fontSize: '0.7rem', color: '#C7D2FE', marginTop: '4px' }}>Nghề vẫn cần người thật lâu dài</div>
          </div>
        </div>
      </div>

      {/* WINNER PODIUM ANNOUNCEMENT */}
      {winner && (
        <div className="compare-winner-card" style={{ background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)', borderRadius: '24px', padding: '22px 28px', border: '2px solid #F59E0B', marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', boxShadow: '0 8px 24px rgba(245, 158, 11, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#F59E0B', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)', flexShrink: 0 }}>
              <Trophy size={30} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: '900', color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                NGHIÊNG VỀ LỰA CHỌN PHÙ HỢP HƠN VỚI BẠN
              </div>
              <div style={{ fontSize: '1.45rem', fontWeight: '900', color: '#78350F' }}>
                {winner.major.ten_nganh} ({winner.compositeScore} / 100 điểm phù hợp)
              </div>
              <div style={{ fontSize: '0.84rem', color: '#92400E', marginTop: '2px' }}>
                Tính theo 5 mức ưu tiên bạn vừa đặt, ngành này hài hòa hơn giữa điểm đầu vào, học phí và công việc sau khi ra trường.
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn-edtech-primary"
            style={{ padding: '12px 22px', fontSize: '0.9rem', background: 'linear-gradient(135deg, #B45309 0%, #78350F 100%)', boxShadow: '0 4px 14px rgba(120, 53, 15, 0.3)' }}
            onClick={() => {
              if (onSelectForRoadmap) onSelectForRoadmap(winner.major.ten_nganh);
              onNavigate('roadmap');
            }}
          >
            <span>Chọn làm nguyện vọng ôn thi</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* SECTION 3: INSTANT SIDE-BY-SIDE MATRIX TABLE (DESKTOP) */}
      <div className="battle-matrix-wrap desktop-compare-table" style={{ marginBottom: '36px' }}>
        <table className="battle-matrix-table">
          <thead>
            <tr>
              <th style={{ width: '22%' }}>Tiêu chí So sánh</th>
              {selectedMajors.map(m => (
                <th key={m.id} style={{ width: `${78 / selectedMajors.length}%` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.4rem' }}>{m.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.96rem', fontWeight: '900', color: '#1E293B' }}>{m.ten_nganh}</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'none' }}>Mã: {m.ma_nganh}</div>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Row 1: Điểm chuẩn trung bình */}
            <tr>
              <td><strong>🎯 Điểm chuẩn tham khảo</strong></td>
              {selectedMajors.map(m => (
                <td key={m.id}>
                  <span style={{ fontSize: '1.05rem', fontWeight: '900', color: '#4F46E5' }}>{m.diem_tb}</span>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>Khối: {m.to_hop.join(', ')}</div>
                </td>
              ))}
            </tr>

            {/* Row 2: Học phí dự kiến */}
            <tr>
              <td><strong>💳 Học phí dự kiến</strong></td>
              {selectedMajors.map(m => (
                <td key={m.id} style={{ color: '#1E293B', fontWeight: '700' }}>
                  {m.hoc_phi}
                </td>
              ))}
            </tr>

            {/* Row 3: Lương khởi điểm */}
            <tr>
              <td><strong>🌱 Mới ra trường (0 – 1 năm)</strong></td>
              {selectedMajors.map(m => (
                <td key={m.id} style={{ color: '#059669', fontWeight: '800' }}>
                  {m.salaryRoadmap?.fresher || '10 – 15 triệu/tháng'}
                </td>
              ))}
            </tr>

            {/* Row 4: Thu nhập sau 5 năm */}
            <tr>
              <td><strong>📈 Khi đã vững nghề (5 năm+)</strong></td>
              {selectedMajors.map(m => (
                <td key={m.id} style={{ color: '#15803D', fontWeight: '900', fontSize: '0.96rem' }}>
                  {m.salaryRoadmap?.senior || '25 – 45 triệu/tháng'}
                </td>
              ))}
            </tr>

            {/* Row 5: Nhu cầu tuyển dụng */}
            <tr>
              <td><strong>🔥 Cơ hội việc làm</strong></td>
              {selectedMajors.map(m => (
                <td key={m.id}>
                  <span style={{ background: '#FEF2F2', color: '#DC2626', padding: '3px 8px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '800' }}>
                    {m.demandLevel || 'Rất cao'}
                  </span>
                </td>
              ))}
            </tr>

            {/* Row 6: Mức độ ảnh hưởng từ AI */}
            <tr>
              <td><strong>🤖 Khả năng bị AI làm thay</strong></td>
              {selectedMajors.map(m => (
                <td key={m.id}>
                  <span style={{ background: '#F0FDF4', color: '#16A34A', padding: '3px 8px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '800' }}>
                    {m.aiRiskLevel || 'Thấp (15%)'}
                  </span>
                </td>
              ))}
            </tr>

            {/* Row 7: Thực tế cần lưu ý */}
            <tr>
              <td><strong>⚠️ Vất vả &amp; áp lực thực tế</strong></td>
              {selectedMajors.map(m => (
                <td key={m.id} style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.45' }}>
                  {m.realityCheck ? (
                    typeof m.realityCheck === 'object' 
                      ? (m.realityCheck.truth || m.realityCheck.pressureNote || m.realityCheck.myth)
                      : String(m.realityCheck).slice(0, 110) + '...'
                  ) : 'Đòi hỏi sự kiên trì và cập nhật kiến thức liên tục.'}
                </td>
              ))}
            </tr>

            {/* Row 8: Trường đào tạo tiêu biểu */}
            <tr>
              <td><strong>🏛️ Trường đào tạo tiêu biểu</strong></td>
              {selectedMajors.map(m => (
                <td key={m.id}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', color: '#334155' }}>
                    {m.truong_tieu_bieu.slice(0, 3).map((tr, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ color: '#4F46E5', fontWeight: '900' }}>•</span>
                        <span>{tr}</span>
                      </div>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 3B: MOBILE TOUCH COMPARISON CARDS (<= 768px) */}
      <div className="mobile-compare-cards">
        {[
          {
            title: '🎯 Điểm chuẩn tham khảo',
            render: (m) => (
              <div>
                <div style={{ fontSize: '1.02rem', fontWeight: '900', color: '#4F46E5' }}>{m.diem_tb}</div>
                <div style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '2px' }}>Khối: {m.to_hop.join(', ')}</div>
              </div>
            )
          },
          {
            title: '💳 Học phí dự kiến',
            render: (m) => (
              <div style={{ fontSize: '0.9rem', fontWeight: '750', color: '#1E293B' }}>{m.hoc_phi}</div>
            )
          },
          {
            title: '🌱 Mới ra trường (0 – 1 năm)',
            render: (m) => (
              <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#059669' }}>
                {m.salaryRoadmap?.fresher || '10 – 15 triệu/tháng'}
              </div>
            )
          },
          {
            title: '📈 Khi đã vững nghề (5 năm+)',
            render: (m) => (
              <div style={{ fontSize: '0.95rem', fontWeight: '900', color: '#15803D' }}>
                {m.salaryRoadmap?.senior || '25 – 45 triệu/tháng'}
              </div>
            )
          },
          {
            title: '🔥 Cơ hội việc làm & mức ảnh hưởng từ AI',
            render: (m) => (
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ background: '#FEF2F2', color: '#DC2626', padding: '3px 8px', borderRadius: '6px', fontSize: '0.76rem', fontWeight: '800' }}>
                  Tuyển dụng: {m.demandLevel || 'Rất cao'}
                </span>
                <span style={{ background: '#F0FDF4', color: '#16A34A', padding: '3px 8px', borderRadius: '6px', fontSize: '0.76rem', fontWeight: '800' }}>
                  AI thay thế: {m.aiRiskLevel || 'Thấp (15%)'}
                </span>
              </div>
            )
          },
          {
            title: '⚠️ Vất vả & áp lực thực tế',
            render: (m) => (
              <div style={{ fontSize: '0.83rem', color: '#475569', lineHeight: '1.48' }}>
                {m.realityCheck
                  ? typeof m.realityCheck === 'object'
                    ? m.realityCheck.truth || m.realityCheck.pressureNote || m.realityCheck.myth
                    : String(m.realityCheck)
                  : 'Đòi hỏi sự kiên trì và cập nhật kiến thức liên tục.'}
              </div>
            )
          },
          {
            title: '🏛️ Trường đào tạo tiêu biểu',
            render: (m) => (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.82rem', color: '#334155' }}>
                {m.truong_tieu_bieu.slice(0, 3).map((tr, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
                    <span style={{ color: '#4F46E5', fontWeight: '900' }}>•</span>
                    <span>{tr}</span>
                  </div>
                ))}
              </div>
            )
          }
        ].map((criterion, cIdx) => (
          <div key={cIdx} className="mobile-compare-criterion-card">
            <div className="mobile-compare-criterion-title">{criterion.title}</div>
            <div className="mobile-compare-rows">
              {selectedMajors.map((m) => (
                <div key={m.id} className="mobile-compare-major-row">
                  <div className="mobile-compare-major-label">
                    <span>{m.icon}</span>
                    <span>{m.ten_nganh}</span>
                  </div>
                  <div className="mobile-compare-major-val">{criterion.render(m)}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
