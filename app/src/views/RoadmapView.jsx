import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Plus, Trash2, Printer, Save, Sparkles, CheckCircle2, Compass } from 'lucide-react';

export default function RoadmapView({ initialPrimary = '', initialBackup = '' }) {
  const [primaryChoice, setPrimaryChoice] = useState(initialPrimary || 'Công nghệ thông tin (ĐH Bách Khoa)');
  const [backupChoice, setBackupChoice] = useState(initialBackup || 'Khoa học Dữ liệu (ĐH Kinh tế Quốc dân)');
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [studentName, setStudentName] = useState('Thí sinh THPT 2026');

  const [milestones, setMilestones] = useState([
    {
      id: 1,
      time: 'Học kỳ 1 - Lớp 11',
      goal: 'Củng cố nền tảng Toán, Tin học & Ngoại ngữ',
      action: 'Luyện giải bài tập chuyên sâu 3 buổi/tuần, tham gia CLB trường để mở rộng tư duy.',
      completed: true
    },
    {
      id: 2,
      time: 'Học kỳ 2 - Lớp 11',
      goal: 'Chinh phục chứng chỉ ngoại ngữ (IELTS / VSTEP)',
      action: 'Tập trung ôn luyện đạt mục tiêu 6.5+ IELTS làm lợi thế xét tuyển kết hợp sớm.',
      completed: true
    },
    {
      id: 3,
      time: 'Hè lên Lớp 12',
      goal: 'Ôn luyện kỳ thi Đánh giá năng lực (ĐGNL / ĐGTD)',
      action: 'Đăng ký làm quen cấu trúc đề thi ĐHQG / ĐHBK và bổ sung kiến thức tổng hợp.',
      completed: false
    },
    {
      id: 4,
      time: 'Học kỳ 1 - Lớp 12',
      goal: 'Hoàn thiện điểm học bạ & Sàng lọc đề án tuyển sinh',
      action: 'Duy trì điểm trung bình các môn tổ hợp trên 8.5, lập danh sách nguyện vọng an toàn.',
      completed: false
    },
    {
      id: 5,
      time: 'Tháng 5 - 6 / Lớp 12',
      goal: 'Bứt phá kỳ thi Tốt nghiệp THPT & Chạm đích Đại học',
      action: 'Luyện đề thực chiến bấm giờ, củng cố tâm lý vững vàng và sức khỏe trước ngày thi.',
      completed: false
    }
  ]);

  const handleToggleComplete = (idx) => {
    const updated = [...milestones];
    updated[idx].completed = !updated[idx].completed;
    setMilestones(updated);
  };

  const handleAddMilestone = () => {
    setMilestones([
      ...milestones,
      { id: Date.now(), time: 'Mốc thời gian mới', goal: 'Mục tiêu trọng tâm', action: 'Hành động cụ thể hàng ngày', completed: false }
    ]);
  };

  const handleRemoveMilestone = (index) => {
    setMilestones(milestones.filter((_, i) => i !== index));
  };

  const handleChangeMilestone = (index, field, value) => {
    const updated = [...milestones];
    updated[index][field] = value;
    setMilestones(updated);
  };

  const handleGenerateAI = () => {
    if (!primaryChoice.trim()) {
      alert("Vui lòng nhập ngành ưu tiên trước nhé!");
      return;
    }

    setIsGeneratingAI(true);
    setTimeout(() => {
      setMilestones([
        {
          id: Date.now() + 1,
          time: 'Giai đoạn 1 (Ngay hôm nay)',
          goal: `Tập trung nâng cao tổ hợp môn xét tuyển ngành ${primaryChoice}`,
          action: 'Giải tối thiểu 2 đề thi chuẩn/tuần, ghi chép sổ tay công thức và nhờ thầy cô giải đáp các câu phân loại.',
          completed: true
        },
        {
          id: Date.now() + 2,
          time: 'Giai đoạn 2 (3 - 6 Tháng tới)',
          goal: 'Khai thác tối đa các phương thức xét tuyển sớm',
          action: 'Tham gia kỳ thi Đánh giá năng lực / Đánh giá tư duy và bổ sung chứng chỉ ngoại ngữ quốc tế.',
          completed: false
        },
        {
          id: Date.now() + 3,
          time: 'Giai đoạn 3 (Nước rút thi THPT)',
          goal: `Bảo đảm chắc chắn trúng tuyển: ${primaryChoice}`,
          action: 'Rà soát chỉ tiêu tuyển sinh, học phí các trường và đặt phương án dự phòng an toàn.',
          completed: false
        }
      ]);
      setIsGeneratingAI(false);

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleSave = () => {
    localStorage.setItem('career_saved_roadmap', JSON.stringify({ studentName, primaryChoice, backupChoice, milestones }));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="tab-pane-animate">
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <div className="pill-badge" style={{ marginBottom: '10px' }}>🎯 BƯỚC 4 / 4 • KẾ HOẠCH HÀNH ĐỘNG</div>
          <h1 style={{ fontSize: '2.35rem', marginBottom: '8px' }}>Career Roadmap &amp; Tấm Vé Đại Học 2026</h1>
          <p style={{ color: '#64748B', maxWidth: '62ch', margin: '0 auto', fontSize: '0.98rem' }}>
            Thiết lập phương án ưu tiên, phương án dự phòng và các mốc hành động cụ thể để hiện thực hóa ước mơ đại học.
          </p>
        </div>

        {/* ==========================================================================
            VIRAL FEATURE: THE "CAREER PASSPORT 2026 / TẤM VÉ ĐẠI HỌC"
            ========================================================================== */}
        <div
          style={{
            background: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
            borderRadius: '26px',
            padding: '4px',
            marginBottom: '36px',
            boxShadow: '0 20px 45px -10px rgba(79, 70, 229, 0.35)'
          }}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '22px',
              padding: '28px 32px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top Ticket Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px dashed #E2E8F0', paddingBottom: '18px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4F46E5' }}>
                  <Compass size={22} strokeWidth={2.4} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '900', color: '#4F46E5', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    CAREER QR 2026 • UNIVERSITY BOARDING PASS
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                    Mã chuyến bay: <strong style={{ color: '#1E293B' }}>VN-EDU-2026</strong> • Hạng mục: Cử nhân tương lai
                  </div>
                </div>
              </div>

              <span style={{ fontSize: '0.78rem', fontWeight: '800', padding: '4px 12px', borderRadius: '999px', background: '#FEF3C7', color: '#B45309', border: '1px solid #FDE68A' }}>
                MỤC TIÊU 2026
              </span>
            </div>

            {/* Ticket Body: Student Name & Destination */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '22px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', marginBottom: '4px' }}>
                  HỌ TÊN THÍ SINH / HỌC SINH
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: '900',
                    color: '#1E293B',
                    border: 'none',
                    background: '#F8FAFC',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    width: '100%',
                    outline: 'none',
                    fontFamily: 'var(--font-display)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', color: '#4F46E5', textTransform: 'uppercase', marginBottom: '4px' }}>
                  🎯 ĐÍCH ĐẾN ƯU TIÊN SỐ 1 (PLAN A)
                </label>
                <input
                  type="text"
                  value={primaryChoice}
                  onChange={(e) => setPrimaryChoice(e.target.value)}
                  placeholder="Ví dụ: Công nghệ thông tin (ĐH Bách Khoa)"
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '800',
                    color: '#4F46E5',
                    border: '1.5px solid #C7D2FE',
                    background: '#EEF2FF',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    width: '100%',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', color: '#D97706', textTransform: 'uppercase', marginBottom: '4px' }}>
                  🛡️ PHƯƠNG ÁN DỰ PHÒNG AN TOÀN (PLAN B)
                </label>
                <input
                  type="text"
                  value={backupChoice}
                  onChange={(e) => setBackupChoice(e.target.value)}
                  placeholder="Ví dụ: Kinh tế Quốc tế (ĐH Ngoại thương)"
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: '700',
                    color: '#B45309',
                    border: '1.5px solid #FDE68A',
                    background: '#FEF3C7',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    width: '100%',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Ticket Footer: Barcode & QR Code Simulation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px dashed #E2E8F0', paddingTop: '16px', background: '#FAFAFA', margin: '0 -32px -28px', padding: '16px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '48px', height: '48px', background: '#FFFFFF', borderRadius: '10px', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}>
                  <svg viewBox="0 0 32 32" width="38" height="38">
                    <rect x="2" y="2" width="10" height="10" fill="#1E293B" />
                    <rect x="4" y="4" width="6" height="6" fill="#FFFFFF" />
                    <rect x="6" y="6" width="2" height="2" fill="#1E293B" />
                    <rect x="20" y="2" width="10" height="10" fill="#1E293B" />
                    <rect x="22" y="4" width="6" height="6" fill="#FFFFFF" />
                    <rect x="24" y="6" width="2" height="2" fill="#1E293B" />
                    <rect x="2" y="20" width="10" height="10" fill="#1E293B" />
                    <rect x="4" y="22" width="6" height="6" fill="#FFFFFF" />
                    <rect x="6" y="24" width="2" height="2" fill="#1E293B" />
                    <rect x="14" y="4" width="2" height="6" fill="#1E293B" />
                    <rect x="14" y="14" width="4" height="4" fill="#1E293B" />
                    <rect x="20" y="16" width="6" height="2" fill="#1E293B" />
                    <rect x="16" y="22" width="6" height="4" fill="#1E293B" />
                    <rect x="24" y="24" width="4" height="4" fill="#1E293B" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#1E293B' }}>CAREER QR PASSPORT VALIDATED</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Quét mã QR để mở lại kế hoạch trên thiết bị cá nhân</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  className="btn-edtech-secondary"
                  onClick={handlePrint}
                  style={{ padding: '8px 14px', fontSize: '0.82rem' }}
                >
                  <Printer size={15} />
                  <span>In tấm vé</span>
                </button>
                <button
                  type="button"
                  className="btn-edtech-primary"
                  onClick={handleSave}
                  style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                >
                  <Save size={15} />
                  <span>{isSaved ? 'Đã lưu!' : 'Lưu thẻ'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AI Helper Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #EEF2FF 0%, #F0F9FF 100%)',
            border: '1.5px solid #C7D2FE',
            borderRadius: '20px',
            padding: '20px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            marginBottom: '36px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4F46E5', boxShadow: '0 2px 6px rgba(79, 70, 229, 0.15)' }}>
              <Sparkles size={22} />
            </div>
            <div>
              <strong style={{ color: '#3730A3', fontSize: '0.98rem' }}>Bạn chưa biết bắt đầu từ đâu?</strong>
              <div style={{ color: '#4338CA', fontSize: '0.86rem' }}>Để trợ lý AI tự động gợi ý các mốc hành động chi tiết theo từng học kỳ.</div>
            </div>
          </div>

          <button
            type="button"
            className="btn-edtech-primary"
            onClick={handleGenerateAI}
            disabled={isGeneratingAI}
            style={{ padding: '10px 20px', fontSize: '0.88rem' }}
          >
            {isGeneratingAI ? 'Đang soạn kế hoạch...' : '✨ Tự động tạo lộ trình AI'}
          </button>
        </div>

        {/* TIMELINE MILESTONES (METRO-LINE CARDS) */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#1E293B', margin: 0 }}>Các mốc hành động cụ thể</h3>
            <span style={{ fontSize: '0.84rem', color: '#64748B', fontWeight: '600' }}>
              Đã hoàn thành: {milestones.filter(m => m.completed).length}/{milestones.length} mốc
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {milestones.map((m, idx) => (
              <div
                key={m.id || idx}
                className="card-box"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '36px 160px 1fr 34px',
                  gap: '16px',
                  alignItems: 'center',
                  background: m.completed ? '#F8FAFC' : '#FFFFFF',
                  padding: '20px',
                  border: m.completed ? '1px solid #CBD5E1' : '1px solid #E0E7FF',
                  opacity: m.completed ? 0.85 : 1,
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Completion Checkbox */}
                <button
                  type="button"
                  onClick={() => handleToggleComplete(idx)}
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '8px',
                    border: m.completed ? 'none' : '2px solid #CBD5E1',
                    background: m.completed ? '#10B981' : '#FFFFFF',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    padding: 0
                  }}
                  title={m.completed ? 'Đánh dấu chưa hoàn thành' : 'Đánh dấu đã hoàn thành'}
                >
                  {m.completed && <CheckCircle2 size={18} />}
                </button>

                {/* Time */}
                <div>
                  <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '4px' }}>Thời gian</div>
                  <input
                    type="text"
                    value={m.time}
                    onChange={(e) => handleChangeMilestone(idx, 'time', e.target.value)}
                    style={{ width: '100%', padding: '8px 10px', borderRadius: '10px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', fontWeight: '700', outline: 'none', background: '#FFFFFF' }}
                  />
                </div>

                {/* Goals & Actions */}
                <div>
                  <div style={{ marginBottom: '6px' }}>
                    <input
                      type="text"
                      value={m.goal}
                      onChange={(e) => handleChangeMilestone(idx, 'goal', e.target.value)}
                      placeholder="Mục tiêu trọng tâm..."
                      style={{
                        width: '100%',
                        padding: '8px 10px',
                        borderRadius: '10px',
                        border: '1.5px solid #CBD5E1',
                        fontSize: '0.94rem',
                        fontWeight: '700',
                        outline: 'none',
                        color: m.completed ? '#64748B' : '#1E293B',
                        textDecoration: m.completed ? 'line-through' : 'none',
                        background: '#FFFFFF'
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={m.action}
                      onChange={(e) => handleChangeMilestone(idx, 'action', e.target.value)}
                      placeholder="Hành động cụ thể hàng ngày..."
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '10px', border: '1px solid #E2E8F0', fontSize: '0.86rem', outline: 'none', color: '#475569', background: '#FFFFFF' }}
                    />
                  </div>
                </div>

                {/* Delete button */}
                <button
                  type="button"
                  onClick={() => handleRemoveMilestone(idx)}
                  style={{ background: 'transparent', border: 'none', color: '#F43F5E', cursor: 'pointer', padding: '6px' }}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '18px' }}>
            <button
              type="button"
              className="btn-edtech-secondary"
              onClick={handleAddMilestone}
              style={{ padding: '10px 18px', fontSize: '0.88rem' }}
            >
              <Plus size={16} />
              <span>Thêm mốc hành động</span>
            </button>
          </div>
        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn-edtech-primary" onClick={handleSave}>
            <Save size={18} />
            <span>{isSaved ? '✓ Đã lưu trên thiết bị' : 'Lưu toàn bộ lộ trình'}</span>
          </button>
          <button className="btn-edtech-secondary" onClick={handlePrint}>
            <Printer size={18} />
            <span>In / Xuất PDF A4</span>
          </button>
        </div>
      </div>
    </div>
  );
}
