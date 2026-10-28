import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  Plus, 
  Trash2, 
  Printer, 
  Save, 
  Sparkles, 
  CheckCircle2, 
  Edit3, 
  Check, 
  QrCode, 
  Target
} from 'lucide-react';

export default function RoadmapView({ initialPrimary = '', initialBackup = '' }) {
  const [primaryChoice, setPrimaryChoice] = useState(initialPrimary || 'Công nghệ thông tin & Trí tuệ Nhân tạo (ĐH Bách Khoa Hà Nội)');
  const [backupChoice, setBackupChoice] = useState(initialBackup || 'Kinh doanh quốc tế & Logistics (ĐH Kinh tế Quốc dân)');
  const [targetScore, setTargetScore] = useState('27.5');
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [studentName, setStudentName] = useState('Học sinh lớp 12');
  const [editingMilestoneId, setEditingMilestoneId] = useState(null);

  const [milestones, setMilestones] = useState([
    {
      id: 1,
      time: 'Học kỳ 1 • Lớp 11',
      goal: 'Nắm chắc kiến thức gốc 3 môn trong tổ hợp xét tuyển',
      action: 'Ôn kỹ từng chuyên đề trên lớp, dành 3 buổi/tuần tự làm bài tập vận dụng và ghi lại các dạng câu dễ mất điểm.',
      completed: true
    },
    {
      id: 2,
      time: 'Học kỳ 2 • Lớp 11',
      goal: 'Thi lấy chứng chỉ ngoại ngữ nếu trường có cộng điểm / quy đổi',
      action: 'Ôn thi IELTS 6.0 – 6.5+ hoặc VSTEP B2 để tận dụng phương thức xét tuyển kết hợp, giảm tải áp lực cho kỳ thi cuối cấp.',
      completed: true
    },
    {
      id: 3,
      time: 'Hè lên Lớp 12',
      goal: 'Tìm hiểu đề thi riêng (HSA, TSA, APT) của các trường dự định nộp',
      action: 'Làm thử 1 – 2 đề mẫu của ĐHQGHN, ĐHQG TP.HCM hoặc ĐH Bách Khoa để xem mình có hợp lối ra đề đó không trước khi đăng ký ôn sâu.',
      completed: true
    },
    {
      id: 4,
      time: 'Học kỳ 1 • Lớp 12',
      goal: 'Giữ điểm học bạ ổn định & đọc kỹ đề án tuyển sinh mới',
      action: 'Giữ điểm trung bình các môn tổ hợp từ 8.5 trở lên, theo dõi lịch mở cổng xét tuyển sớm và chuẩn bị sẵn giấy tờ cần thiết.',
      completed: false
    },
    {
      id: 5,
      time: 'Tháng 4 – 6 • Lớp 12',
      goal: 'Luyện đề bấm giờ & chốt thứ tự nguyện vọng',
      action: 'Luyện đề sát giờ thi thật, giữ sức khỏe ổn định và sắp xếp nguyện vọng từ trường mơ ước đến trường vừa sức, an toàn trên cổng Bộ GD&ĐT.',
      completed: false
    }
  ]);

  const completedCount = useMemo(() => milestones.filter(m => m.completed).length, [milestones]);
  const progressPercent = useMemo(() => {
    if (milestones.length === 0) return 0;
    return Math.round((completedCount / milestones.length) * 100);
  }, [completedCount, milestones]);

  const handleToggleComplete = (idx) => {
    const updated = [...milestones];
    const willBeCompleted = !updated[idx].completed;
    updated[idx].completed = willBeCompleted;
    setMilestones(updated);

    if (willBeCompleted) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleAddMilestone = () => {
    const newId = Date.now();
    setMilestones([
      ...milestones,
      { 
        id: newId, 
        time: 'Giai đoạn mới', 
        goal: 'Việc cần hoàn thành trong giai đoạn này', 
        action: 'Ghi rõ lịch học hoặc đầu việc cụ thể bạn định làm mỗi tuần...', 
        completed: false 
      }
    ]);
    setEditingMilestoneId(newId);
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
          time: 'Từ bây giờ',
          goal: `Rà lại kiến thức 3 môn xét tuyển ngành ${primaryChoice}`,
          action: 'Mỗi tuần tự giải ít nhất 2 đề chuẩn, ghi riêng sổ tay các lỗi sai hay gặp và hỏi thầy cô ngay những phần còn hổng.',
          completed: true
        },
        {
          id: Date.now() + 2,
          time: '3 – 6 tháng tới',
          goal: 'Chuẩn bị thêm phương thức xét tuyển sớm (ĐGNL / chứng chỉ ngoại ngữ)',
          action: 'Đăng ký ít nhất 1 đợt thi thử HSA, TSA hoặc APT để quen áp lực phòng thi và hoàn thiện chứng chỉ ngoại ngữ nếu trường có cộng điểm.',
          completed: false
        },
        {
          id: Date.now() + 3,
          time: 'Giai đoạn nước rút trước kỳ thi 2026',
          goal: `Chốt hồ sơ xét tuyển cho mục tiêu: ${primaryChoice}`,
          action: 'Kiểm tra lại chỉ tiêu, học phí chính thức của trường, đặt nguyện vọng chính cùng phương án dự phòng thấp hơn 1 – 1.5 điểm để yên tâm đỗ.',
          completed: false
        }
      ]);
      setIsGeneratingAI(false);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleSave = () => {
    localStorage.setItem('career_saved_roadmap', JSON.stringify({ 
      studentName, 
      primaryChoice, 
      backupChoice, 
      targetScore,
      milestones 
    }));
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

  // QR Code payload
  const qrPayload = JSON.stringify({
    name: studentName,
    goal: primaryChoice,
    score: targetScore,
    url: 'https://lucvuu.github.io/career-qr/'
  });
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(qrPayload)}`;

  return (
    <div className="tab-pane-animate">
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div className="pill-badge" style={{ marginBottom: '10px' }}>🧭 BƯỚC 4 / 4 • KẾ HOẠCH ÔN THI &amp; HỒ SƠ</div>
        <h1 className="view-hero-h1" style={{ fontSize: '2.35rem', marginBottom: '8px' }}>Lên kế hoạch ôn thi &amp; chuẩn bị nguyện vọng</h1>
        <p style={{ color: '#64748B', maxWidth: '64ch', margin: '0 auto', fontSize: '0.98rem' }}>
          Ghi rõ ngành ưu tiên, phương án dự phòng và chia nhỏ những việc cần làm theo từng học kỳ. Bạn có thể lưu lại phiếu mục tiêu kèm mã QR để trao đổi cùng gia đình.
        </p>
      </div>

      {/* LIVE UNIVERSITY PROGRESS BAR */}
      <div style={{ background: '#FFFFFF', borderRadius: '22px', padding: '20px 26px', border: '1.5px solid #E2E8F0', boxShadow: 'var(--shadow-sm)', marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: progressPercent === 100 ? '#ECFDF5' : '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: progressPercent === 100 ? '#059669' : '#4F46E5', fontWeight: '900' }}>
              {progressPercent === 100 ? '🎉' : '📘'}
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: '800', textTransform: 'uppercase' }}>
                TIẾN ĐỘ CHUẨN BỊ CỦA BẠN
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: '900', color: '#1E293B' }}>
                Đã làm xong {completedCount} / {milestones.length} đầu việc
              </div>
            </div>
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: '900', color: progressPercent >= 60 ? '#059669' : '#4F46E5', fontFamily: 'var(--font-display)' }}>
            {progressPercent}%
          </span>
        </div>

        {/* Progress Track */}
        <div style={{ width: '100%', height: '10px', background: '#F1F5F9', borderRadius: '999px', overflow: 'hidden' }}>
          <div 
            style={{ 
              width: `${progressPercent}%`, 
              height: '100%', 
              background: progressPercent === 100 
                ? 'linear-gradient(90deg, #10B981 0%, #059669 100%)' 
                : 'linear-gradient(90deg, #4F46E5 0%, #10B981 100%)',
              borderRadius: '999px',
              transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }} 
          />
        </div>
      </div>

      {/* PHIẾU MỤC TIÊU XÉT TUYỂN ĐẠI HỌC 2026 */}
      <div style={{ marginBottom: '36px' }}>
        <div className="card-box roadmap-ticket-card" style={{ background: '#FFFFFF', border: '2px solid #E2E8F0', position: 'relative', overflow: 'hidden' }}>
          
          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px dashed #E2E8F0', paddingBottom: '18px', marginBottom: '22px', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' }}>
                <Target size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.18rem', fontWeight: '900', color: '#1E293B', letterSpacing: '0.02em' }}>
                  PHIẾU MỤC TIÊU XÉT TUYỂN ĐẠI HỌC 2026
                </div>
                <div style={{ fontSize: '0.76rem', color: '#64748B' }}>
                  Ghi lại nguyện vọng dự kiến để theo dõi trong suốt năm học
                </div>
              </div>
            </div>

            <span style={{ fontSize: '0.8rem', fontWeight: '800', padding: '5px 14px', borderRadius: '999px', background: '#FEF3C7', color: '#B45309', border: '1px solid #FDE68A' }}>
              KỲ TUYỂN SINH 2026
            </span>
          </div>

          {/* Ticket Information Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginBottom: '22px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', marginBottom: '4px' }}>
                HỌ VÀ TÊN HỌC SINH
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                style={{
                  fontSize: '1.15rem',
                  fontWeight: '900',
                  color: '#1E293B',
                  border: '1.5px solid #E2E8F0',
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
              <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: '800', color: '#4F46E5', textTransform: 'uppercase', marginBottom: '4px' }}>
                🎯 NGUYỆN VỌNG ƯU TIÊN
              </label>
              <input
                type="text"
                value={primaryChoice}
                onChange={(e) => setPrimaryChoice(e.target.value)}
                placeholder="Ví dụ: Công nghệ thông tin (ĐH Bách Khoa)"
                style={{
                  fontSize: '0.98rem',
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
              <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: '800', color: '#B45309', textTransform: 'uppercase', marginBottom: '4px' }}>
                🛡️ PHƯƠNG ÁN DỰ PHÒNG AN TOÀN
              </label>
              <input
                type="text"
                value={backupChoice}
                onChange={(e) => setBackupChoice(e.target.value)}
                placeholder="Ví dụ: Kinh doanh quốc tế (ĐH Thương mại)"
                style={{
                  fontSize: '0.94rem',
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

            <div>
              <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: '800', color: '#059669', textTransform: 'uppercase', marginBottom: '4px' }}>
                ⭐ ĐIỂM THI PHẤN ĐẤU
              </label>
              <input
                type="text"
                value={targetScore}
                onChange={(e) => setTargetScore(e.target.value)}
                placeholder="27.5"
                style={{
                  fontSize: '1.05rem',
                  fontWeight: '900',
                  color: '#047857',
                  border: '1.5px solid #A7F3D0',
                  background: '#ECFDF5',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  width: '100%',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Ticket Footer: Scannable QR Code */}
          <div className="roadmap-ticket-footer">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '64px', height: '64px', background: '#FFFFFF', borderRadius: '12px', border: '1.5px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px', overflow: 'hidden', flexShrink: 0 }}>
                <img 
                  src={qrImageUrl} 
                  alt="Mã QR phiếu mục tiêu xét tuyển" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  onError={(e) => {
                    // Fallback to SVG if offline
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: '800', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <QrCode size={15} color="#4F46E5" />
                  <span>Mã QR lưu thông tin mục tiêu</span>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                  Quét mã để xem nhanh mục tiêu đã đặt hoặc gửi cho bố mẹ, thầy cô cùng xem
                </div>
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
                <span>In phiếu</span>
              </button>
              <button
                type="button"
                className="btn-edtech-primary"
                onClick={handleSave}
                style={{ padding: '8px 16px', fontSize: '0.82rem' }}
              >
                <Save size={15} />
                <span>{isSaved ? 'Đã lưu!' : 'Lưu trên máy'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Helper Banner */}
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
            <strong style={{ color: '#3730A3', fontSize: '0.98rem' }}>Muốn tạo nhanh lịch ôn tập cho ngành vừa nhập?</strong>
            <div style={{ color: '#4338CA', fontSize: '0.86rem' }}>Hệ thống sẽ gợi ý sẵn 3 chặng chuẩn bị chính dựa trên nguyện vọng ưu tiên ở trên, bạn có thể sửa lại tùy ý.</div>
          </div>
        </div>

        <button
          type="button"
          className="btn-edtech-primary"
          onClick={handleGenerateAI}
          disabled={isGeneratingAI}
          style={{ padding: '10px 20px', fontSize: '0.88rem' }}
        >
          {isGeneratingAI ? 'Đang tạo gợi ý...' : 'Gợi ý các mốc ôn tập'}
        </button>
      </div>

      {/* TIMELINE MILESTONES */}
      <div style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: '#1E293B', margin: 0, fontWeight: '900' }}>
              Các mốc chuẩn bị từng giai đoạn
            </h3>
            <div style={{ fontSize: '0.84rem', color: '#64748B', marginTop: '2px' }}>
              Bấm vào ô vuông bên trái để đánh dấu việc đã làm xong, hoặc bấm &ldquo;Sửa&rdquo; để viết theo lịch riêng của bạn
            </div>
          </div>

          <button
            type="button"
            className="btn-edtech-secondary"
            onClick={handleAddMilestone}
            style={{ padding: '8px 14px', fontSize: '0.82rem' }}
          >
            <Plus size={15} />
            <span>Thêm đầu việc</span>
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {milestones.map((m, idx) => {
            const isEditing = editingMilestoneId === m.id;

            return (
              <div
                key={m.id || idx}
                className={m.completed ? 'milestone-card-emerald' : 'milestone-card-normal'}
                style={{
                  borderRadius: '20px',
                  padding: '22px 24px',
                  position: 'relative',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  {/* Completion Checkbox */}
                  <button
                    type="button"
                    onClick={() => handleToggleComplete(idx)}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      border: m.completed ? 'none' : '2px solid #CBD5E1',
                      background: m.completed ? '#059669' : '#FFFFFF',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      padding: 0,
                      flexShrink: 0,
                      marginTop: '2px',
                      boxShadow: m.completed ? '0 4px 10px rgba(5, 150, 105, 0.3)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                    title={m.completed ? 'Bấm để đánh dấu chưa hoàn thành' : 'Đánh dấu đã hoàn thành'}
                  >
                    {m.completed ? <Check size={20} strokeWidth={2.8} /> : null}
                  </button>

                  {/* Body Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: '800', padding: '3px 10px', borderRadius: '6px', background: m.completed ? '#D1FAE5' : '#EEF2FF', color: m.completed ? '#065F46' : '#4338CA' }}>
                          📅 {m.time}
                        </span>
                        {m.completed && (
                          <span className="badge-emerald-done">
                            <CheckCircle2 size={12} />
                            <span>Đã hoàn thành ✓</span>
                          </span>
                        )}
                      </div>

                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button
                          type="button"
                          onClick={() => setEditingMilestoneId(isEditing ? null : m.id)}
                          style={{
                            background: '#F1F5F9',
                            border: '1px solid #CBD5E1',
                            borderRadius: '8px',
                            padding: '4px 10px',
                            fontSize: '0.76rem',
                            fontWeight: '700',
                            color: '#475569',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Edit3 size={12} />
                          <span>{isEditing ? 'Xong' : 'Sửa'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleRemoveMilestone(idx)}
                          style={{
                            background: '#FEE2E2',
                            border: '1px solid #FECACA',
                            borderRadius: '8px',
                            padding: '4px 8px',
                            color: '#DC2626',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center'
                          }}
                          title="Xóa mốc này"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>

                    {/* View Mode or Edit Mode */}
                    {isEditing ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                        <input
                          type="text"
                          value={m.time}
                          onChange={(e) => handleChangeMilestone(idx, 'time', e.target.value)}
                          placeholder="Mốc thời gian (VD: Học kỳ 1 • Lớp 12)"
                          style={{ padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.86rem', fontWeight: '700' }}
                        />
                        <input
                          type="text"
                          value={m.goal}
                          onChange={(e) => handleChangeMilestone(idx, 'goal', e.target.value)}
                          placeholder="Mục tiêu trọng tâm..."
                          style={{ padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.94rem', fontWeight: '800' }}
                        />
                        <textarea
                          rows={3}
                          value={m.action}
                          onChange={(e) => handleChangeMilestone(idx, 'action', e.target.value)}
                          placeholder="Hành động cụ thể hàng ngày..."
                          style={{ padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.88rem', lineHeight: '1.5', resize: 'vertical' }}
                        />
                      </div>
                    ) : (
                      <>
                        <h4 style={{ fontSize: '1.08rem', margin: '0 0 6px', color: m.completed ? '#065F46' : '#1E293B', fontWeight: '900' }}>
                          {m.goal}
                        </h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: m.completed ? '#047857' : '#475569', lineHeight: '1.6' }}>
                          {m.action}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
