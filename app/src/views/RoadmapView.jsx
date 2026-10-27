import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Award, Plus, Trash2, Printer, Save, Sparkles, CheckCircle2, Calendar } from 'lucide-react';

export default function RoadmapView({ initialPrimary = '', initialBackup = '' }) {
  const [primaryChoice, setPrimaryChoice] = useState(initialPrimary || 'Công nghệ thông tin (ĐH Bách Khoa)');
  const [backupChoice, setBackupChoice] = useState(initialBackup || 'Khoa học Dữ liệu (ĐH Kinh tế Quốc dân)');
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const [milestones, setMilestones] = useState([
    {
      time: 'Học kỳ 1 - Lớp 11',
      goal: 'Củng cố nền tảng Toán, Tin học & Tiếng Anh',
      action: 'Luyện đề định kỳ 3 buổi/tuần, tham gia CLB Tin học trường để làm quen thuật toán.'
    },
    {
      time: 'Học kỳ 2 - Lớp 11',
      goal: 'Thi chứng chỉ ngoại ngữ (IELTS / VSTEP)',
      action: 'Tập trung ôn luyện để đạt mục tiêu 6.5+ IELTS làm lợi thế xét tuyển kết hợp.'
    },
    {
      time: 'Hè lên Lớp 12',
      goal: 'Tìm hiểu đề án tuyển sinh & Thi ĐGNL',
      action: 'Đăng ký ôn tập đề thi ĐGNL ĐHQGHN/ĐHQG TP.HCM hoặc bài thi ĐGTD ĐH Bách Khoa.'
    },
    {
      time: 'Học kỳ 1 - Lớp 12',
      goal: 'Hoàn thiện hồ sơ học bạ & Đăng ký nguyện vọng',
      action: 'Duy trì điểm trung bình các môn tổ hợp trên 8.5, chuẩn bị phương án dự phòng.'
    },
    {
      time: 'Tháng 5 - 6 / Lớp 12',
      goal: 'Bứt phá kỳ thi tốt nghiệp THPT',
      action: 'Luyện giải đề thực chiến bấm giờ, giữ sức khỏe và tâm lý vững vàng.'
    }
  ]);

  const handleAddMilestone = () => {
    setMilestones([
      ...milestones,
      { time: 'Mốc thời gian mới', goal: 'Mục tiêu trọng tâm', action: 'Hành động cụ thể hàng ngày' }
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
      alert("Vui lòng nhập phương án ưu tiên trước.");
      return;
    }

    setIsGeneratingAI(true);
    setTimeout(() => {
      setMilestones([
        {
          time: '1 - 3 Tháng tới',
          goal: `Tập trung nâng cao tổ hợp môn xét tuyển ngành ${primaryChoice}`,
          action: 'Giải tối thiểu 2 đề thi thử/tuần, ghi chép sổ tay công thức và nhờ thầy cô giải đáp các câu phân loại.'
        },
        {
          time: '3 - 6 Tháng tới',
          goal: 'Khai thác tối đa các phương thức xét tuyển sớm',
          action: 'Tham gia kỳ thi Đánh giá năng lực / Đánh giá tư duy và bổ sung chứng chỉ ngoại ngữ.'
        },
        {
          time: 'Giai đoạn nước rút',
          goal: `Chắc chắn phương án ưu tiên: ${primaryChoice}`,
          action: 'Rà soát chỉ tiêu tuyển sinh, học phí các trường và đặt phương án dự phòng an toàn.'
        }
      ]);
      setIsGeneratingAI(false);
    }, 700);
  };

  const handleSave = () => {
    localStorage.setItem('career_saved_roadmap', JSON.stringify({ primaryChoice, backupChoice, milestones }));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="tab-pane-animate">
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <div className="pill-badge" style={{ marginBottom: '10px' }}>BƯỚC 4 / 4 • KẾ HOẠCH HÀNH ĐỘNG</div>
          <h1 style={{ fontSize: '2.4rem' }}>Career Roadmap — Lộ trình nghề nghiệp</h1>
          <p style={{ color: '#64748B' }}>
            Thiết lập phương án ưu tiên, phương án dự phòng và các mốc hành động cụ thể để hiện thực hóa ước mơ đại học.
          </p>
        </div>

        {/* Priority & Backup Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '16px',
            marginBottom: '32px'
          }}
        >
          <div className="card-box" style={{ borderLeft: '4px solid #4F46E5' }}>
            <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#4F46E5', textTransform: 'uppercase', marginBottom: '8px' }}>
              🎯 PHƯƠNG ÁN ƯU TIÊN SỐ 1
            </label>
            <input
              type="text"
              value={primaryChoice}
              onChange={(e) => setPrimaryChoice(e.target.value)}
              placeholder="Ví dụ: Công nghệ thông tin — ĐH Bách Khoa"
              style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '0.95rem', fontWeight: '700', outline: 'none' }}
            />
          </div>

          <div className="card-box" style={{ borderLeft: '4px solid #F59E0B' }}>
            <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#D97706', textTransform: 'uppercase', marginBottom: '8px' }}>
              🛡️ PHƯƠNG ÁN DỰ PHÒNG AN TOÀN
            </label>
            <input
              type="text"
              value={backupChoice}
              onChange={(e) => setBackupChoice(e.target.value)}
              placeholder="Ví dụ: Hệ thống thông tin — ĐH Kinh tế Quốc dân"
              style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '0.95rem', fontWeight: '700', outline: 'none' }}
            />
          </div>
        </div>

        {/* AI Generator Helper Banner */}
        <div
          style={{
            background: '#EEF2FF',
            border: '1px solid rgba(79, 70, 229, 0.25)',
            borderRadius: '16px',
            padding: '18px 22px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '36px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sparkles size={22} color="#4F46E5" />
            <div>
              <strong style={{ color: '#3730A3', fontSize: '0.94rem' }}>Chưa biết bắt đầu từ đâu?</strong>
              <div style={{ color: '#4338CA', fontSize: '0.84rem' }}>Để trợ lý AI tự động gợi ý các mốc hành động theo học kỳ cho bạn.</div>
            </div>
          </div>
          <button
            type="button"
            className="btn-primary"
            onClick={handleGenerateAI}
            disabled={isGeneratingAI}
            style={{ padding: '8px 18px', fontSize: '0.86rem' }}
          >
            {isGeneratingAI ? 'Đang soạn kế hoạch...' : '✨ Tạo gợi ý bằng AI'}
          </button>
        </div>

        {/* TIMELINE MILESTONES */}
        <div style={{ marginBottom: '36px' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '20px' }}>Các mốc hành động chi tiết</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="card-box"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '170px 1fr 34px',
                  gap: '16px',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  padding: '20px 24px'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '4px' }}>Thời gian</div>
                  <input
                    type="text"
                    value={m.time}
                    onChange={(e) => handleChangeMilestone(idx, 'time', e.target.value)}
                    style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.88rem', fontWeight: '700', outline: 'none' }}
                  />
                </div>

                <div>
                  <div style={{ marginBottom: '6px' }}>
                    <input
                      type="text"
                      value={m.goal}
                      onChange={(e) => handleChangeMilestone(idx, 'goal', e.target.value)}
                      placeholder="Mục tiêu trọng tâm..."
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.94rem', fontWeight: '700', outline: 'none', color: '#0F172A' }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={m.action}
                      onChange={(e) => handleChangeMilestone(idx, 'action', e.target.value)}
                      placeholder="Hành động cụ thể..."
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.86rem', outline: 'none', color: '#475569' }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveMilestone(idx)}
                  style={{ background: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '6px' }}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '16px' }}>
            <button
              type="button"
              className="btn-secondary"
              onClick={handleAddMilestone}
              style={{ padding: '8px 16px', fontSize: '0.86rem' }}
            >
              <Plus size={16} />
              <span>Thêm mốc hành động</span>
            </button>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button className="btn-primary" onClick={handleSave}>
            <Save size={18} />
            <span>{isSaved ? '✓ Đã lưu trên thiết bị' : 'Lưu kế hoạch (Roadmap)'}</span>
          </button>
          <button className="btn-secondary" onClick={handlePrint}>
            <Printer size={18} />
            <span>In / Xuất PDF A4</span>
          </button>
        </div>
      </div>
    </div>
  );
}
