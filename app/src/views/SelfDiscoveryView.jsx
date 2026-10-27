import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowLeft, ArrowRight, Sparkles, Check, RotateCcw, Heart, BookmarkCheck, AlertCircle, TrendingUp, DollarSign, Award, School } from 'lucide-react';
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
  const [savedMajorIds, setSavedMajorIds] = useState([]);

  const SUBJECTS = [
    { name: "Toán học", icon: "📐", traits: { I: 25, R: 15, C: 15 }, color: "#EEF2FF", border: "#C7D2FE", textColor: "#4338CA" },
    { name: "Ngữ văn", icon: "📖", traits: { A: 25, S: 15 }, color: "#FFF1F2", border: "#FECDD3", textColor: "#BE123C" },
    { name: "Ngoại ngữ", icon: "🌐", traits: { S: 20, E: 20, A: 10 }, color: "#F0F9FF", border: "#BAE6FD", textColor: "#0369A1" },
    { name: "Vật lý", icon: "⚡", traits: { R: 25, I: 20 }, color: "#FEF3C7", border: "#FDE68A", textColor: "#B45309" },
    { name: "Hóa học", icon: "🧪", traits: { I: 25, R: 15 }, color: "#ECFDF5", border: "#A7F3D0", textColor: "#047857" },
    { name: "Sinh học", icon: "🧬", traits: { I: 25, S: 15 }, color: "#F0FDF4", border: "#BBF7D0", textColor: "#15803D" },
    { name: "Lịch sử", icon: "📜", traits: { S: 20, I: 15 }, color: "#FFFBEB", border: "#FDE68A", textColor: "#92400E" },
    { name: "Địa lý", icon: "🌍", traits: { S: 15, R: 15 }, color: "#F0FDF4", border: "#BBF7D0", textColor: "#166534" },
    { name: "GDKT & Pháp luật", icon: "⚖️", traits: { E: 25, S: 15, C: 10 }, color: "#EEF2FF", border: "#C7D2FE", textColor: "#3730A3" },
    { name: "Tin học & Lập trình", icon: "💻", traits: { R: 25, I: 25 }, color: "#F0F9FF", border: "#BAE6FD", textColor: "#0284C7" },
    { name: "Công nghệ", icon: "⚙️", traits: { R: 25, I: 15 }, color: "#F8FAFC", border: "#CBD5E1", textColor: "#334155" },
    { name: "Mỹ thuật & Âm nhạc", icon: "🎨", traits: { A: 30, S: 10 }, color: "#FAF5FF", border: "#E9D5FF", textColor: "#7E22CE" }
  ];

  const HOBBIES = [
    {
      text: "Tìm hiểu, lắp ráp, sửa chữa thiết bị công nghệ & lập trình máy tính",
      icon: "💻",
      archetype: "Nhà Đổi Mới Công Nghệ & Kỹ Thuật (Tech Innovator)",
      traits: { R: 40, I: 35, A: 10, S: 5, E: 15, C: 20 },
      suggestedMajors: ["cntt", "ai", "vimach", "khdl", "tudonghoa"]
    },
    {
      text: "Vẽ, thiết kế, chụp ảnh, sáng tạo nội dung truyền thông & nghệ thuật số",
      icon: "🎨",
      archetype: "Người Sáng Tạo & Khai Phóng Nghệ Thuật (Creative Maker)",
      traits: { R: 10, I: 15, A: 45, S: 15, E: 25, C: 10 },
      suggestedMajors: ["dohoa", "truyenthong", "marketing", "kientruc", "pr"]
    },
    {
      text: "Đọc sách, viết lách, tranh luận, tìm hiểu khoa học xã hội & tâm lý người",
      icon: "📚",
      archetype: "Nhà Nghiên Cứu & Khai Phóng Xã Hội (Analytical Thinker)",
      traits: { R: 5, I: 35, A: 25, S: 35, E: 10, C: 10 },
      suggestedMajors: ["tamly", "luatkt", "kdqt", "ngoaigiao", "supham-toan"]
    },
    {
      text: "Lắng nghe, chăm sóc, giúp đỡ người khác & tham gia hoạt động tình nguyện",
      icon: "🤝",
      archetype: "Đại Sứ Cộng Đồng & Y Tế - Giáo Dục (Caregiver & Mentor)",
      traits: { R: 10, I: 20, A: 10, S: 45, E: 15, C: 10 },
      suggestedMajors: ["ykhoa", "duoc", "dieuduong", "supham-anh", "tamly"]
    },
    {
      text: "Tính toán số liệu, kinh doanh, quản lý dự án & điều phối công việc nhóm",
      icon: "📈",
      archetype: "Nhà Chiến Lược & Quản Trị Kinh Doanh (Strategic Leader)",
      traits: { R: 10, I: 15, A: 10, S: 25, E: 45, C: 30 },
      suggestedMajors: ["marketing", "kdqt", "logistics", "taichinh", "ketoan"]
    },
    {
      text: "Chơi thể thao, vận động, dã ngoại và khám phá môi trường thực tế",
      icon: "🏞️",
      archetype: "Nhà Khám Phá & Hành Động Thực Tế (Action Adventurer)",
      traits: { R: 45, I: 15, A: 10, S: 20, E: 20, C: 10 },
      suggestedMajors: ["tudonghoa", "oto", "codientu", "hangkhong", "cntt"]
    }
  ];

  const ENVIRONMENTS = [
    { text: "Làm việc độc lập, tập trung cao độ vào chuyên môn sâu", icon: "🎯", desc: "Không gian yên tĩnh, tự do phân bổ thời gian nghiên cứu" },
    { text: "Làm việc nhóm năng động, trao đổi và tương tác nhiều người", icon: "👥", desc: "Không khí sôi nổi, nhiều buổi họp não bộ và kết nối" },
    { text: "Môi trường ổn định, tính quy trình rõ ràng và bảo đảm", icon: "🏛️", desc: "Lộ trình rõ ràng, công việc chuẩn mực và ít rủi ro" },
    { text: "Môi trường linh hoạt, sáng tạo, nhiều thử thách và biến đổi", icon: "🚀", desc: "Luôn có điều mới mẻ, thử thách không giới hạn" }
  ];

  const VALUES = [
    { text: "Thu nhập cao, cơ hội thăng tiến và khẳng định bản thân", icon: "💎", tag: "Tài chính & Vị thế" },
    { text: "Được tự do sáng tạo, biến ý tưởng riêng thành hiện thực", icon: "✨", tag: "Tự chủ & Sáng tạo" },
    { text: "Tạo giá trị nhân văn, đóng góp tích cực cho xã hội", icon: "❤️", tag: "Cống hiến & Ý nghĩa" },
    { text: "Cân bằng lành mạnh giữa công việc và cuộc sống cá nhân", icon: "🌿", tag: "An vui & Bền vững" }
  ];

  // Instant Psychological Insight
  const getSubjectInsight = () => {
    if (selectedSubjects.length === 0) return null;
    const has = (name) => selectedSubjects.includes(name);

    if (has("Toán học") && (has("Tin học & Lập trình") || has("Vật lý") || has("Công nghệ"))) {
      return {
        badge: "TƯ DUY LOGIC & KỸ THUẬT HỆ THỐNG",
        color: "#4338CA",
        bg: "#EEF2FF",
        border: "#C7D2FE",
        text: "Bạn sở hữu nền tảng tư duy toán học và công nghệ rất vững chắc. Bạn có tiềm năng vượt trội trong các ngành Công nghệ thông tin, Trí tuệ Nhân tạo (AI), Thiết kế Vi mạch & Bán dẫn hoặc Kỹ thuật Điều khiển & Tự động hóa!"
      };
    }
    if (has("Ngữ văn") && (has("Ngoại ngữ") || has("GDKT & Pháp luật") || has("Lịch sử"))) {
      return {
        badge: "NGÔN NGỮ, THẤU CẢM XÃ HỘI & TRUYỀN THÔNG",
        color: "#BE123C",
        bg: "#FFF1F2",
        border: "#FECDD3",
        text: "Khả năng diễn đạt ngôn ngữ và sự nhạy bén xã hội của bạn rất nổi bật! Các ngành như Truyền thông đa phương tiện, Quan hệ công chúng (PR), Luật Kinh tế, Quan hệ Quốc tế hoặc Marketing số là mảnh đất màu mỡ cho bạn tỏa sáng."
      };
    }
    if (has("Hóa học") || has("Sinh học")) {
      return {
        badge: "KHOA HỌC TỰ NHIÊN & Y DƯỢC Y SINH",
        color: "#047857",
        bg: "#ECFDF5",
        border: "#A7F3D0",
        text: "Bạn có xu hướng quan tâm sâu sắc đến thế giới tự nhiên và sức khỏe con người. Rất phù hợp để theo đuổi Y khoa (Bác sĩ đa khoa), Dược học, Kỹ thuật Xét nghiệm Y học, Công nghệ Sinh học hoặc Tâm lý học lâm sàng."
      };
    }
    if (has("Mỹ thuật & Âm nhạc")) {
      return {
        badge: "BẢN NĂNG SÁNG TẠO & THẨM MỸ ĐỘC BẢN",
        color: "#7E22CE",
        bg: "#FAF5FF",
        border: "#E9D5FF",
        text: "Trực giác nghệ thuật và óc thẩm mỹ của bạn rất cao! Hãy tham khảo các ngành Thiết kế Đồ họa & Mỹ thuật số (UI/UX), Kiến trúc, Thiết kế Nội thất/Thời trang hoặc Sản xuất nội dung số."
      };
    }
    if (has("Toán học") && (has("Ngữ văn") || has("Ngoại ngữ") || has("Địa lý"))) {
      return {
        badge: "CÂN BẰNG PHÂN TÍCH & KẾT NỐI (NÃO TRÁI & PHẢI)",
        color: "#0369A1",
        bg: "#F0F9FF",
        border: "#BAE6FD",
        text: "Sự kết hợp giữa tư duy tính toán và kỹ năng giao tiếp ngoại ngữ là chìa khóa vàng cho các ngành Kinh doanh quốc tế, Logistics & Quản lý chuỗi cung ứng, Tài chính Fintech hoặc Thương mại điện tử!"
      };
    }
    return {
      badge: "TỔ HỢP THẾ MẠNH ĐA NĂNG",
      color: "#4F46E5",
      bg: "#F5F3FF",
      border: "#DDD6FE",
      text: `Sự kết hợp các môn [${selectedSubjects.join(' + ')}] mở ra nhiều cánh cửa ngành nghề linh hoạt. Tiếp tục chọn sở thích để AI phân tích chính xác hình mẫu nghề nghiệp của bạn!`
    };
  };

  const getPersonalityAnalysis = (scores) => {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topKey = sorted[0] ? sorted[0][0] : 'I';

    const MAP = {
      R: {
        traitName: "Thực Tế & Hành Động (Realistic)",
        strength: "Thực tế, khéo léo, hành động quyết đoán, xử lý vấn đề kỹ thuật và thực tiễn máy móc/công trình rất nhanh nhạy.",
        blindspot: "Dễ chán nản với các công việc thuần giấy tờ lý thuyết, ngại đàm phán xã giao hoặc thuyết trình trước đám đông.",
        advice: "Hãy chú trọng rèn luyện kỹ năng mềm, thuyết trình và ngoại ngữ để không bị giới hạn ở cấp kỹ thuật viên thuần túy mà có thể vươn lên cấp Quản lý dự án / Giám đốc kỹ thuật."
      },
      I: {
        traitName: "Nghiên Cứu & Khám Phá (Investigative)",
        strength: "Tư duy phân tích sâu sắc, óc tò mò khoa học, kiên trì giải quyết các bài toán khó và khả năng tự học độc lập xuất sắc.",
        blindspot: "Dễ rơi vào 'bẫy phân tích quá mức' (Analysis Paralysis), đôi khi xa rời tính ứng dụng thương mại thực tế.",
        advice: "Nên kết nối nghiên cứu với thị trường, học cách biến giải pháp công nghệ hay mã nguồn thành sản phẩm thực tế có giá trị kinh doanh cho doanh nghiệp."
      },
      A: {
        traitName: "Nghệ Thuật & Sáng Tạo (Artistic)",
        strength: "Trí tưởng tượng phong phú, phong cách độc bản, nhạy bén với cái đẹp, xu hướng thị giác và cảm xúc con người.",
        blindspot: "Dễ bị cảm xúc chi phối tiến độ làm việc, ngại tuân thủ các quy trình kỷ luật cứng nhắc hoặc số liệu khô khan.",
        advice: "Học cách làm quen với deadline gắt gao và số liệu (data-driven design) để tác phẩm sáng tạo đạt hiệu quả thương mại và truyền thông cao nhất."
      },
      S: {
        traitName: "Xã Hội & Thấu Cảm (Social)",
        strength: "Đồng cảm sâu sắc, kỹ năng lắng nghe và kết nối tuyệt vời, luôn tạo năng lượng tích cực cho tập thể và cộng đồng.",
        blindspot: "Khó nói lời từ chối, dễ bị áp lực và kiệt sức cảm xúc khi đối diện với môi trường cạnh tranh khốc liệt.",
        advice: "Học cách thiết lập ranh giới cảm xúc và rèn luyện tư duy lý trí để bảo vệ năng lượng bản thân khi làm việc trong ngành Y tế, Giáo dục hay Tư vấn."
      },
      E: {
        traitName: "Quản Lý & Dẫn Dắt (Enterprising)",
        strength: "Năng động, có tài dẫn dắt, giàu tham vọng, nhạy bén với cơ hội kinh doanh và khả năng thuyết phục ấn tượng.",
        blindspot: "Có xu hướng nóng vội, thiếu kiên nhẫn với các chi tiết tỉ mỉ hoặc dễ chủ quan trước các rủi ro pháp lý/tài chính.",
        advice: "Nên trang bị thêm kiến thức tài chính, quản trị rủi ro và biết lắng nghe góc nhìn phản biện từ các thành viên tỉ mỉ trong đội ngũ."
      },
      C: {
        traitName: "Nghiệp Vụ & Quy Trình (Conventional)",
        strength: "Cẩn thận, chỉn chu, tôn trọng quy tắc, quản lý số liệu chuẩn xác và kiểm soát chất lượng tuyệt đối.",
        blindspot: "Ngại rủi ro và thay đổi, đôi khi cứng nhắc khi đối diện với các tình huống cần sự linh hoạt phá cách.",
        advice: "Chủ động đón nhận công nghệ mới (đặc biệt là AI tự động hóa) để tối ưu công việc thay vì lo sợ bị thay thế trong ngành Kế toán hay Ngân hàng."
      }
    };

    return MAP[topKey] || MAP['I'];
  };

  const handleToggleSubject = (name) => {
    if (selectedSubjects.includes(name)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== name));
    } else {
      if (selectedSubjects.length >= 3) {
        alert("Bạn hãy chọn tối đa 3 môn học mà mình tự tin hoặc yêu thích nhất nhé!");
        return;
      }
      setSelectedSubjects([...selectedSubjects, name]);
    }
  };

  const handleFinish = () => {
    if (selectedSubjects.length === 0 || !selectedHobby) {
      alert("Vui lòng chọn ít nhất 1 môn học và 1 sở thích để AI phân tích chính xác.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Calculate Holland Scores
      const baseScores = { R: 30, I: 30, A: 30, S: 30, E: 30, C: 30 };

      if (selectedHobby.traits) {
        Object.keys(selectedHobby.traits).forEach(k => {
          baseScores[k] += selectedHobby.traits[k];
        });
      }

      selectedSubjects.forEach(subName => {
        const found = SUBJECTS.find(s => s.name === subName);
        if (found && found.traits) {
          Object.keys(found.traits).forEach(k => {
            baseScores[k] += found.traits[k];
          });
        }
      });

      const finalScores = {};
      Object.keys(baseScores).forEach(k => {
        finalScores[k] = Math.min(95, Math.max(25, Math.round(baseScores[k])));
      });

      const matchedMajors = MAJORS_DATA.filter(m => selectedHobby.suggestedMajors.includes(m.id));
      const top5Majors = matchedMajors.length >= 5 ? matchedMajors.slice(0, 5) : [
        ...matchedMajors,
        ...MAJORS_DATA.filter(m => !matchedMajors.find(x => x.id === m.id))
      ].slice(0, 5);

      const personality = getPersonalityAnalysis(finalScores);

      const finalResult = {
        archetype: selectedHobby.archetype,
        scores: finalScores,
        majors: top5Majors,
        personality: personality,
        selectedSubjects: selectedSubjects,
        note: note
      };

      setResult(finalResult);
      try {
        localStorage.setItem('careerqr_student_profile', JSON.stringify(finalResult));
      } catch (err) {
        console.warn('Could not save profile:', err);
      }

      setIsSubmitting(false);

      // Joyful Confetti explosion
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleSaveMajor = (m) => {
    onBookmarkMajor(m);
    if (!savedMajorIds.includes(m.id)) {
      setSavedMajorIds([...savedMajorIds, m.id]);
    }
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

  const subjectInsight = getSubjectInsight();

  return (
    <div className="tab-pane-animate">
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ marginBottom: '28px', textAlign: 'center' }}>
          <div className="pill-badge" style={{ marginBottom: '10px' }}>🌱 BƯỚC 1 / 4 • TRẮC NGHIỆM ĐỊNH HƯỚNG</div>
          <h1 style={{ fontSize: '2.35rem', marginBottom: '8px' }}>Khám phá bản thân & Hình mẫu nghề nghiệp</h1>
          <p style={{ color: '#64748B', maxWidth: '60ch', margin: '0 auto', fontSize: '0.98rem' }}>
            5 câu hỏi ngắn thân thiện giúp bạn nhận diện thiên hướng, nhóm tính cách Holland và nhận danh sách gợi ý ngành học phù hợp.
          </p>
        </div>

        {/* PROGRESS BAR */}
        {!result && (
          <div style={{ marginBottom: '32px', background: '#FFFFFF', padding: '16px 20px', borderRadius: '18px', border: '1px solid #E0E7FF', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', fontWeight: '800', color: '#4F46E5', marginBottom: '8px' }}>
              <span>Câu hỏi {currentStep} / 5</span>
              <span>{currentStep * 20}% Hoàn thành</span>
            </div>
            <div style={{ height: '8px', background: '#F1F5F9', borderRadius: '999px', overflow: 'hidden' }}>
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

        {/* STEP 1: MÔN HỌC THẾ MẠNH */}
        {!result && currentStep === 1 && (
          <div className="card-box">
            <h2 style={{ fontSize: '1.45rem', marginBottom: '6px' }}>1. Bạn tự tin hoặc yêu thích nhất những môn học nào?</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '20px' }}>
              Chọn tối đa <strong>3 môn</strong> mà bạn học có cảm hứng hoặc đạt kết quả tốt nhất:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))', gap: '12px', marginBottom: '20px' }}>
              {SUBJECTS.map((s, i) => {
                const isSelected = selectedSubjects.includes(s.name);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleToggleSubject(s.name)}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '16px',
                      border: isSelected ? '2px solid #4F46E5' : `1.5px solid ${s.border}`,
                      background: isSelected ? '#EEF2FF' : s.color,
                      color: isSelected ? '#4338CA' : s.textColor,
                      fontFamily: 'inherit',
                      fontSize: '0.94rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.18s ease',
                      boxShadow: isSelected ? '0 4px 12px rgba(79, 70, 229, 0.2)' : 'none'
                    }}
                  >
                    <span>{s.icon} {s.name}</span>
                    {isSelected && <Check size={18} color="#4F46E5" strokeWidth={2.5} />}
                  </button>
                );
              })}
            </div>

            {/* Instant Psychological Insight Callout */}
            {subjectInsight && (
              <div
                style={{
                  background: subjectInsight.bg,
                  border: `1.5px solid ${subjectInsight.border}`,
                  borderRadius: '16px',
                  padding: '16px 20px',
                  marginBottom: '28px',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  animation: 'fadeIn 0.3s ease'
                }}
              >
                <Sparkles size={22} color={subjectInsight.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: '900', color: subjectInsight.color, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    ⚡ INSIGHT TÂM LÝ TỨC THÌ: {subjectInsight.badge}
                  </div>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#1E293B', lineHeight: '1.5' }}>
                    {subjectInsight.text}
                  </p>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                className="btn-edtech-primary"
                onClick={() => {
                  if (selectedSubjects.length === 0) {
                    alert("Hãy chọn ít nhất 1 môn học thế mạnh của bạn nhé!");
                    return;
                  }
                  setCurrentStep(2);
                }}
              >
                <span>Tiếp tục sang bước 2</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SỞ THÍCH */}
        {!result && currentStep === 2 && (
          <div className="card-box">
            <h2 style={{ fontSize: '1.45rem', marginBottom: '6px' }}>2. Trong thời gian rảnh, hoạt động nào khiến bạn say mê nhất?</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '22px' }}>Chọn 1 nhóm hoạt động gần gũi với con người bạn nhất:</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {HOBBIES.map((h, i) => {
                const isSelected = selectedHobby?.text === h.text;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedHobby(h)}
                    style={{
                      padding: '18px 20px',
                      borderRadius: '18px',
                      border: isSelected ? '2px solid #4F46E5' : '1.5px solid #E2E8F0',
                      background: isSelected ? 'linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 100%)' : '#FFFFFF',
                      color: isSelected ? '#4338CA' : '#1E293B',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      fontWeight: isSelected ? '700' : '600',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      transition: 'all 0.18s ease',
                      boxShadow: isSelected ? '0 8px 20px -4px rgba(79, 70, 229, 0.2)' : 'var(--shadow-sm)'
                    }}
                  >
                    <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{h.icon}</span>
                    <span style={{ flex: 1, lineHeight: '1.5' }}>{h.text}</span>
                    {isSelected && <Check size={20} color="#4F46E5" strokeWidth={2.5} />}
                  </button>
                );
              })}
            </div>

            {selectedHobby && (
              <div
                style={{
                  background: '#EEF2FF',
                  border: '1.5px solid #C7D2FE',
                  borderRadius: '16px',
                  padding: '14px 18px',
                  marginBottom: '26px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <Award size={20} color="#4F46E5" />
                <span style={{ fontSize: '0.88rem', color: '#4338CA', fontWeight: '700' }}>
                  Hình mẫu hướng nghiệp tương ứng: <strong>{selectedHobby.archetype}</strong>
                </span>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn-edtech-secondary" onClick={() => setCurrentStep(1)}>
                <ArrowLeft size={18} />
                <span>Quay lại</span>
              </button>
              <button
                className="btn-edtech-primary"
                onClick={() => {
                  if (!selectedHobby) {
                    alert("Hãy chọn 1 hoạt động bạn đam mê nhất nhé!");
                    return;
                  }
                  setCurrentStep(3);
                }}
              >
                <span>Tiếp tục sang bước 3</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: MÔI TRƯỜNG LÀM VIỆC */}
        {!result && currentStep === 3 && (
          <div className="card-box">
            <h2 style={{ fontSize: '1.45rem', marginBottom: '6px' }}>3. Bạn cảm thấy mình tỏa sáng nhất trong môi trường nào?</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '22px' }}>Không gian làm việc phù hợp với tính cách và năng lượng của bạn:</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '32px' }}>
              {ENVIRONMENTS.map((env, i) => {
                const isSelected = selectedEnvironment === env.text;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedEnvironment(env.text)}
                    style={{
                      padding: '20px',
                      borderRadius: '18px',
                      border: isSelected ? '2px solid #0EA5E9' : '1.5px solid #E2E8F0',
                      background: isSelected ? '#F0F9FF' : '#FFFFFF',
                      color: isSelected ? '#0369A1' : '#1E293B',
                      fontFamily: 'inherit',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      transition: 'all 0.18s ease',
                      boxShadow: isSelected ? '0 6px 18px -4px rgba(14, 165, 233, 0.25)' : 'var(--shadow-sm)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.6rem' }}>{env.icon}</span>
                      {isSelected && <Check size={18} color="#0EA5E9" strokeWidth={2.5} />}
                    </div>
                    <div style={{ fontSize: '0.96rem', fontWeight: '700' }}>{env.text}</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.4' }}>{env.desc}</div>
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn-edtech-secondary" onClick={() => setCurrentStep(2)}>
                <ArrowLeft size={18} />
                <span>Quay lại</span>
              </button>
              <button
                className="btn-edtech-primary"
                onClick={() => {
                  if (!selectedEnvironment) {
                    alert("Hãy chọn 1 môi trường làm việc phù hợp nhé!");
                    return;
                  }
                  setCurrentStep(4);
                }}
              >
                <span>Tiếp tục sang bước 4</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: GIÁ TRỊ CỐT LÕI */}
        {!result && currentStep === 4 && (
          <div className="card-box">
            <h2 style={{ fontSize: '1.45rem', marginBottom: '6px' }}>4. Khi nghĩ về tương lai 5-10 năm tới, điều gì là quan trọng nhất?</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '22px' }}>Mục tiêu và giá trị sống bạn muốn theo đuổi:</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '32px' }}>
              {VALUES.map((val, i) => {
                const isSelected = selectedValue === val.text;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedValue(val.text)}
                    style={{
                      padding: '20px',
                      borderRadius: '18px',
                      border: isSelected ? '2px solid #F59E0B' : '1.5px solid #E2E8F0',
                      background: isSelected ? '#FEF3C7' : '#FFFFFF',
                      color: isSelected ? '#B45309' : '#1E293B',
                      fontFamily: 'inherit',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      transition: 'all 0.18s ease',
                      boxShadow: isSelected ? '0 6px 18px -4px rgba(245, 158, 11, 0.25)' : 'var(--shadow-sm)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.6rem' }}>{val.icon}</span>
                      <span style={{ fontSize: '0.74rem', fontWeight: '800', padding: '2px 8px', borderRadius: '999px', background: isSelected ? '#FDE68A' : '#F1F5F9', color: isSelected ? '#92400E' : '#64748B' }}>
                        {val.tag}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.96rem', fontWeight: '700', lineHeight: '1.4' }}>{val.text}</div>
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="btn-edtech-secondary" onClick={() => setCurrentStep(3)}>
                <ArrowLeft size={18} />
                <span>Quay lại</span>
              </button>
              <button
                className="btn-edtech-primary"
                onClick={() => {
                  if (!selectedValue) {
                    alert("Hãy chọn 1 giá trị bạn quan tâm nhất nhé!");
                    return;
                  }
                  setCurrentStep(5);
                }}
              >
                <span>Tiếp tục sang bước cuối</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: TÂM SỰ & GHI CHÚ */}
        {!result && currentStep === 5 && (
          <div className="card-box">
            <h2 style={{ fontSize: '1.45rem', marginBottom: '6px' }}>5. Bạn còn băn khoăn hay mong muốn cá nhân nào khác không?</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '22px' }}>
              Không bắt buộc — có thể là kỳ vọng của cha mẹ, lo lắng về điểm chuẩn, học phí hay vị trí địa lý:
            </p>

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Ví dụ: Em muốn học tại Hà Nội hoặc Thái Nguyên, bố mẹ muốn theo ngành Tài chính nhưng em thích Truyền thông & Sáng tạo nội dung số..."
              style={{
                width: '100%',
                minHeight: '130px',
                borderRadius: '16px',
                border: '1.5px solid #CBD5E1',
                padding: '16px',
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                outline: 'none',
                marginBottom: '28px',
                background: '#FFFDF9'
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn-edtech-secondary" onClick={() => setCurrentStep(4)}>
                <ArrowLeft size={18} />
                <span>Quay lại</span>
              </button>
              <button
                className="btn-edtech-primary"
                onClick={handleFinish}
                disabled={isSubmitting}
                style={{ padding: '14px 32px' }}
              >
                <Sparkles size={18} />
                <span>{isSubmitting ? 'Đang phân tích dữ liệu...' : 'Xem kết quả & Hồ sơ Holland'}</span>
              </button>
            </div>
          </div>
        )}

        {/* RESULT PRESENTATION: GEN Z CAREER DNA CARD */}
        {result && (
          <div className="tab-pane-animate">
            {/* Archetype Highlight Banner */}
            <div
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
                color: '#FFFFFF',
                borderRadius: '26px',
                padding: '32px',
                boxShadow: '0 20px 40px -10px rgba(79, 70, 229, 0.35)',
                marginBottom: '28px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.9, marginBottom: '8px' }}>
                ✨ HÌNH MẪU ĐỊNH HƯỚNG NGHỀ NGHIỆP CỦA BẠN
              </div>
              <h2 style={{ fontSize: '2.1rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '12px' }}>
                {result.archetype}
              </h2>
              <p style={{ color: '#FFFFFF', opacity: 0.95, fontSize: '1rem', lineHeight: '1.6', margin: 0, maxWidth: '64ch' }}>
                Dựa trên tổ hợp môn thế mạnh ({result.selectedSubjects.join(', ')}), sở thích cá nhân và môi trường làm việc lý tưởng, bạn có tiềm năng bứt phá rất cao trong các nhóm ngành dưới đây.
              </p>
            </div>

            {/* Radar Chart Card */}
            <div className="card-box" style={{ marginBottom: '28px', textAlign: 'center' }}>
              <div className="pill-badge" style={{ marginBottom: '8px' }}>HỒ SƠ NĂNG LỰC 6 CHIỀU</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>Biểu đồ Mạng nhện Holland (RIASEC)</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', maxWidth: '60ch', margin: '0 auto 20px' }}>
                Biểu đồ thể hiện mức độ tương thích của bạn với các nhóm nghề nghiệp trong xã hội hiện đại.
              </p>
              <RadarChart scores={result.scores} />
            </div>

            {/* Strengths & Blindspots Analysis Card */}
            {result.personality && (
              <div className="card-box" style={{ marginBottom: '28px', borderLeft: '5px solid #4F46E5' }}>
                <div className="pill-badge" style={{ marginBottom: '8px' }}>CHIÊU SÂU TÂM LÝ & ĐỊNH HƯỚNG NGHỀ</div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '16px', color: '#1E293B' }}>
                  Phân tích Điểm mạnh & Điểm mù khi chọn ngành: <span style={{ color: '#4F46E5' }}>{result.personality.traitName}</span>
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ background: '#ECFDF5', border: '1.5px solid #A7F3D0', borderRadius: '16px', padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#047857', fontWeight: '800', fontSize: '0.92rem', marginBottom: '8px' }}>
                      <Check size={18} strokeWidth={2.5} />
                      <span>ĐIỂM MẠNH BỨT PHÁ</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: '#065F46', lineHeight: '1.5' }}>
                      {result.personality.strength}
                    </p>
                  </div>

                  <div style={{ background: '#FFF1F2', border: '1.5px solid #FECDD3', borderRadius: '16px', padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#BE123C', fontWeight: '800', fontSize: '0.92rem', marginBottom: '8px' }}>
                      <AlertCircle size={18} strokeWidth={2.5} />
                      <span>ĐIỂM MÙ CẦN TRÁNH</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: '#9F1239', lineHeight: '1.5' }}>
                      {result.personality.blindspot}
                    </p>
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '14px 18px', fontSize: '0.88rem', color: '#334155', lineHeight: '1.5' }}>
                  💡 <strong>Lời khuyên vàng từ Cố vấn:</strong> {result.personality.advice}
                </div>
              </div>
            )}

            {/* Top 5 Suggested Majors */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '2px' }}>Top 5 ngành học đề xuất cho bạn</h3>
                  <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Được cá nhân hóa theo trắc nghiệm & dữ liệu tuyển sinh 2026</span>
                </div>
                <span className="pill-badge" style={{ background: '#ECFDF5', color: '#059669', borderColor: '#A7F3D0' }}>
                  ĐỘ KHỚP CAO NHẤT
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '18px' }}>
                {result.majors.map((m, idx) => {
                  const isSaved = savedMajorIds.includes(m.id);
                  return (
                    <div key={idx} className="card-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                          <span style={{ fontSize: '0.76rem', fontWeight: '800', padding: '4px 10px', borderRadius: '999px', background: '#FEF3C7', color: '#B45309', border: '1px solid #FDE68A' }}>
                            {m.nhom_nganh}
                          </span>
                          <span style={{ fontSize: '1.6rem' }}>{m.icon}</span>
                        </div>
                        <h4 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#1E293B' }}>{m.ten_nganh}</h4>
                        <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.5', marginBottom: '16px' }}>{m.mo_ta}</p>
                        
                        {/* Quick Stats: Điểm TB, Lương Fresher, Rủi ro AI */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px', background: '#F8FAFC', padding: '10px 12px', borderRadius: '12px', fontSize: '0.78rem' }}>
                          <div>
                            <span style={{ color: '#64748B', display: 'block' }}>Điểm chuẩn TB:</span>
                            <strong style={{ color: '#4F46E5' }}>{m.diem_tb}</strong>
                          </div>
                          <div>
                            <span style={{ color: '#64748B', display: 'block' }}>Lương Fresher:</span>
                            <strong style={{ color: '#059669' }}>{m.salaryRoadmap?.fresher || '8 - 14 tr'}</strong>
                          </div>
                          <div>
                            <span style={{ color: '#64748B', display: 'block' }}>Độ khát nhân lực:</span>
                            <strong style={{ color: '#EA580C' }}>{m.demandLevel || 'Cao'}</strong>
                          </div>
                          <div>
                            <span style={{ color: '#64748B', display: 'block' }}>Rủi ro AI:</span>
                            <strong style={{ color: m.aiRiskLevel === 'Thấp' ? '#059669' : m.aiRiskLevel === 'Cao' ? '#DC2626' : '#D97706' }}>
                              {m.aiRiskLevel || 'Trung bình'}
                            </strong>
                          </div>
                        </div>

                        {/* Top Schools */}
                        {m.truong_tieu_bieu && m.truong_tieu_bieu.length > 0 && (
                          <div style={{ fontSize: '0.78rem', color: '#475569', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '700', marginBottom: '4px', color: '#1E293B' }}>
                              <School size={14} color="#4F46E5" />
                              <span>Trường đào tạo tiêu biểu:</span>
                            </div>
                            <span>{m.truong_tieu_bieu.slice(0, 3).join(', ')}...</span>
                          </div>
                        )}
                        
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                          {m.to_hop.map((th, i) => (
                            <span key={i} style={{ padding: '3px 8px', fontSize: '0.75rem', fontWeight: '800', borderRadius: '999px', background: '#F0F9FF', color: '#0369A1', border: '1px solid #BAE6FD' }}>
                              {th}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <button
                          className="btn-edtech-secondary"
                          style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                          onClick={() => onNavigate('search')}
                        >
                          <span>Tra cứu trường</span>
                          <ArrowRight size={14} />
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => handleSaveMajor(m)}
                          style={{
                            padding: '8px 14px',
                            fontSize: '0.82rem',
                            fontWeight: '700',
                            borderRadius: '999px',
                            border: isSaved ? '1.5px solid #10B981' : '1.5px solid #FECDD3',
                            background: isSaved ? '#ECFDF5' : '#FFF1F2',
                            color: isSaved ? '#059669' : '#E11D48',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            cursor: 'pointer'
                          }}
                        >
                          {isSaved ? <BookmarkCheck size={16} /> : <Heart size={16} />}
                          <span>{isSaved ? 'Đã lưu' : 'Lưu so sánh'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px' }}>
              <button className="btn-edtech-primary" onClick={() => onNavigate('compare')}>
                <span>So sánh các phương án này trên Đấu trường</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn-edtech-secondary" onClick={handleRedo}>
                <RotateCcw size={18} />
                <span>Làm lại trắc nghiệm</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
