import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowLeft, ArrowRight, Sparkles, Check, RotateCcw, Heart, BookmarkCheck, AlertCircle, Award, School } from 'lucide-react';
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
      text: "Mày mò máy tính, thiết bị điện tử, thích tìm hiểu phần mềm hoặc cách máy móc vận hành",
      icon: "💻",
      archetype: "Thiên hướng Kỹ thuật & Công nghệ",
      traits: { R: 40, I: 35, A: 10, S: 5, E: 15, C: 20 },
      suggestedMajors: ["cntt", "ai", "vimach", "khdl", "tudonghoa"]
    },
    {
      text: "Vẽ, thiết kế hình ảnh, chụp ảnh, quay dựng video hoặc viết nội dung mạng xã hội",
      icon: "🎨",
      archetype: "Thiên hướng Thiết kế, Sáng tạo & Truyền thông",
      traits: { R: 10, I: 15, A: 45, S: 15, E: 25, C: 10 },
      suggestedMajors: ["dohoa", "truyenthong", "marketing", "kientruc", "pr"]
    },
    {
      text: "Đọc sách, viết lách, trao đổi quan điểm, tìm hiểu tâm lý con người và các vấn đề xã hội",
      icon: "📚",
      archetype: "Thiên hướng Khoa học Xã hội & Ngôn ngữ",
      traits: { R: 5, I: 35, A: 25, S: 35, E: 10, C: 10 },
      suggestedMajors: ["tamly", "luatkt", "kdqt", "ngoaigiao", "supham-toan"]
    },
    {
      text: "Lắng nghe, hướng dẫn học tập, chăm sóc sức khỏe hoặc tham gia hoạt động cộng đồng",
      icon: "🤝",
      archetype: "Thiên hướng Y tế, Giáo dục & Hỗ trợ cộng đồng",
      traits: { R: 10, I: 20, A: 10, S: 45, E: 15, C: 10 },
      suggestedMajors: ["ykhoa", "duoc", "dieuduong", "supham-anh", "tamly"]
    },
    {
      text: "Tính toán chi phí, buôn bán nhỏ, tổ chức sự kiện lớp/CLB và sắp xếp công việc cho nhóm",
      icon: "📈",
      archetype: "Thiên hướng Kinh doanh, Tài chính & Tổ chức",
      traits: { R: 10, I: 15, A: 10, S: 25, E: 45, C: 30 },
      suggestedMajors: ["marketing", "kdqt", "logistics", "taichinh", "ketoan"]
    },
    {
      text: "Vận động ngoài trời, thích thực hành tay nghề trực tiếp tại xưởng, công trường hoặc hiện trường",
      icon: "🏞️",
      archetype: "Thiên hướng Kỹ thuật Thực hành & Vận hành thực tế",
      traits: { R: 45, I: 15, A: 10, S: 20, E: 20, C: 10 },
      suggestedMajors: ["tudonghoa", "oto", "codientu", "hangkhong", "cntt"]
    }
  ];

  const ENVIRONMENTS = [
    { text: "Ngồi làm độc lập, tập trung sâu vào chuyên môn", icon: "🎯", desc: "Không gian yên tĩnh, ít phải xã giao nhiều, chủ động giờ giấc nghiên cứu" },
    { text: "Làm việc cùng tập thể, giao tiếp và phối hợp mỗi ngày", icon: "👥", desc: "Không khí cởi mở, thường xuyên trao đổi ý tưởng và gặp gỡ nhiều người" },
    { text: "Công việc có quy trình rõ ràng, nhịp độ ổn định", icon: "🏛️", desc: "Lộ trình từng bước cụ thể, chuẩn mực và ít biến động bất ngờ" },
    { text: "Công việc linh hoạt, hay đổi mới, ít lặp lại một kiểu", icon: "🚀", desc: "Thường xuyên tiếp xúc dự án mới, chấp nhận nhịp làm việc nhanh" }
  ];

  const VALUES = [
    { text: "Thu nhập tốt, có cơ hội thăng tiến rõ ràng theo năng lực", icon: "💎", tag: "Thu nhập & Thăng tiến" },
    { text: "Được làm ra sản phẩm mang dấu ấn và ý tưởng của riêng mình", icon: "✨", tag: "Sáng tạo & Chủ động" },
    { text: "Công việc có ích trực tiếp cho sức khỏe, tri thức hoặc cộng đồng", icon: "❤️", tag: "Đóng góp xã hội" },
    { text: "Thời gian làm việc hợp lý, giữ được sự cân bằng cho bản thân và gia đình", icon: "🌿", tag: "Ổn định & Cân bằng" }
  ];

  // Subject combination commentary
  const getSubjectInsight = () => {
    if (selectedSubjects.length === 0) return null;
    const has = (name) => selectedSubjects.includes(name);

    if (has("Toán học") && (has("Tin học & Lập trình") || has("Vật lý") || has("Công nghệ"))) {
      return {
        badge: "Nền tảng Tự nhiên & Kỹ thuật",
        color: "#4338CA",
        bg: "#EEF2FF",
        border: "#C7D2FE",
        text: "Bạn có lợi thế lớn khi xét các khối A00, A01. Nhóm môn này rất hợp để theo Công nghệ thông tin, Trí tuệ nhân tạo, Kỹ thuật Vi mạch - Bán dẫn hoặc Điều khiển & Tự động hóa."
      };
    }
    if (has("Ngữ văn") && (has("Ngoại ngữ") || has("GDKT & Pháp luật") || has("Lịch sử"))) {
      return {
        badge: "Lợi thế Ngôn ngữ & Xã hội",
        color: "#BE123C",
        bg: "#FFF1F2",
        border: "#FECDD3",
        text: "Khả năng diễn đạt và nắm bắt vấn đề xã hội giúp bạn thuận lợi ở các khối D01, D14, D15, C00 — phù hợp với Truyền thông đa phương tiện, Quan hệ công chúng, Luật kinh tế, Quan hệ quốc tế hoặc Sư phạm."
      };
    }
    if (has("Hóa học") || has("Sinh học")) {
      return {
        badge: "Nền tảng Hóa - Sinh & Khoa học Sự sống",
        color: "#047857",
        bg: "#ECFDF5",
        border: "#A7F3D0",
        text: "Đây là nhóm môn cốt lõi của khối B00, D07 — mở ra hướng đi vững chắc vào Y khoa, Dược học, Kỹ thuật xét nghiệm y học, Điều dưỡng hoặc Công nghệ sinh học - thực phẩm."
      };
    }
    if (has("Mỹ thuật & Âm nhạc")) {
      return {
        badge: "Cảm quan Thẩm mỹ & Sáng tạo Hình ảnh",
        color: "#7E22CE",
        bg: "#FAF5FF",
        border: "#E9D5FF",
        text: "Bạn có thể tìm hiểu các khối thi năng khiếu (H00, V00) cho ngành Thiết kế đồ họa, Mỹ thuật số (UI/UX), Kiến trúc, Thiết kế nội thất hoặc Sản xuất nội dung truyền thông."
      };
    }
    if (has("Toán học") && (has("Ngữ văn") || has("Ngoại ngữ") || has("Địa lý"))) {
      return {
        badge: "Kết hợp tốt giữa Tính toán & Ngoại ngữ",
        color: "#0369A1",
        bg: "#F0F9FF",
        border: "#BAE6FD",
        text: "Vừa học được Toán vừa có vốn Văn/Anh là lợi thế rất thực tế cho khối D01 — dễ xét tuyển vào Kinh doanh quốc tế, Logistics & Chuỗi cung ứng, Tài chính - Ngân hàng hoặc Thương mại điện tử."
      };
    }
    return {
      badge: "Tổ hợp môn linh hoạt",
      color: "#4F46E5",
      bg: "#F5F3FF",
      border: "#DDD6FE",
      text: `Nhóm môn (${selectedSubjects.join(', ')}) có thể ghép được nhiều tổ hợp xét tuyển khác nhau. Bạn chọn tiếp các câu sau để thu hẹp dần nhóm ngành hợp nhất nhé.`
    };
  };

  const getPersonalityAnalysis = (scores) => {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topKey = sorted[0] ? sorted[0][0] : 'I';

    const MAP = {
      R: {
        traitName: "Nhóm Kỹ thuật & Thực hành (Realistic)",
        strength: "Thích bắt tay làm việc cụ thể, tháo vát với máy móc, thiết bị, phần cứng hoặc công việc ngoài hiện trường hơn là ngồi đọc lý thuyết suông.",
        blindspot: "Dễ thấy ngán các công việc nhiều giấy tờ hành chính, hoặc còn ngại khi phải thuyết trình, đàm phán trước đông người.",
        advice: "Bên cạnh tay nghề chuyên môn, bạn nên chịu khó rèn thêm tiếng Anh đọc tài liệu kỹ thuật và cách trình bày ý tưởng để sau này dễ lên vị trí trưởng nhóm, quản lý kỹ thuật."
      },
      I: {
        traitName: "Nhóm Nghiên cứu & Phân tích (Investigative)",
        strength: "Chịu khó đào sâu tìm hiểu bản chất vấn đề, có tư duy logic, tự học tốt và kiên nhẫn trước những bài toán phức tạp.",
        blindspot: "Đôi khi suy nghĩ và cân nhắc quá kỹ trước khi bắt tay làm, hoặc quá mê phần học thuật mà ít để ý chuyện ứng dụng thực tế.",
        advice: "Trong lúc học đại học, bạn nên sớm tham gia các dự án thực tế hoặc đi thực tập để thấy kiến thức mình nghiên cứu giải quyết được việc gì cho doanh nghiệp, bệnh viện."
      },
      A: {
        traitName: "Nhóm Sáng tạo & Nghệ thuật (Artistic)",
        strength: "Giàu ý tưởng, có gu thẩm mỹ riêng, nhạy cảm với hình ảnh, ngôn từ và cảm xúc của người xem.",
        blindspot: "Cảm hứng làm việc dễ lên xuống theo tâm trạng; đôi khi ngại các quy trình gò bó hoặc bảng biểu số liệu khô khan.",
        advice: "Làm nghề sáng tạo chuyên nghiệp vẫn cần giữ đúng hạn giao bài (deadline) và biết xem số liệu phản hồi của khách hàng để ý tưởng vừa đẹp vừa hiệu quả."
      },
      S: {
        traitName: "Nhóm Xã hội & Hỗ trợ con người (Social)",
        strength: "Biết lắng nghe, dễ tạo thiện cảm, kiên nhẫn khi hướng dẫn, chăm sóc hoặc làm việc trực tiếp với con người.",
        blindspot: "Hay cả nể, khó từ chối nhờ vả và dễ bị mệt mỏi tinh thần nếu làm trong môi trường cạnh tranh gay gắt.",
        advice: "Nếu theo Y tế, Sư phạm, Tâm lý hay Nhân sự, bạn nên tập giữ ranh giới hợp lý giữa công việc và đời sống riêng để không bị quá tải cảm xúc."
      },
      E: {
        traitName: "Nhóm Kinh doanh & Tổ chức (Enterprising)",
        strength: "Chủ động, dạn dĩ trong giao tiếp, thích đứng ra tổ chức công việc, thuyết phục người khác và nhạy với cơ hội kinh doanh.",
        blindspot: "Đôi lúc hơi sốt ruột muốn thấy kết quả nhanh, dễ bỏ qua các chi tiết nhỏ về số liệu hoặc giấy tờ pháp lý.",
        advice: "Bạn sẽ đi xa hơn nhiều nếu bổ sung nền tảng vững về tài chính, kế toán cơ bản và biết lắng nghe góp ý từ những đồng nghiệp cẩn thận quanh mình."
      },
      C: {
        traitName: "Nhóm Nghiệp vụ & Quy trình (Conventional)",
        strength: "Cẩn thận, làm việc có trật tự, đáng tin cậy khi xử lý số liệu, hồ sơ, sổ sách và kiểm tra sai sót.",
        blindspot: "Thường ngại thay đổi đột ngột hoặc lúng túng khi gặp những việc chưa có hướng dẫn, quy trình sẵn.",
        advice: "Các khâu nhập liệu lặp lại đang dần được phần mềm và AI làm thay; bạn nên chủ động học thêm công cụ phân tích dữ liệu để nâng giá trị chuyên môn trong ngành Kế toán, Kiểm toán, Ngân hàng."
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
      alert("Bạn chọn giúp ít nhất 1 môn học và 1 hoạt động yêu thích để tổng hợp kết quả nhé.");
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
          <div className="pill-badge" style={{ marginBottom: '10px' }}>🌱 BƯỚC 1 / 4 • TRẮC NGHIỆM CHỌN NGÀNH</div>
          <h1 className="view-hero-h1" style={{ fontSize: '2.35rem', marginBottom: '8px' }}>Tìm nhóm ngành hợp với môn học &amp; tính cách</h1>
          <p style={{ color: '#64748B', maxWidth: '60ch', margin: '0 auto', fontSize: '0.98rem' }}>
            5 câu hỏi ngắn giúp bạn nhìn rõ thiên hướng học tập theo mô hình Holland (RIASEC) và chọn ra vài ngành đáng tìm hiểu kỹ hơn.
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

            <div className="self-subjects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))', gap: '12px', marginBottom: '20px' }}>
              {SUBJECTS.map((s, i) => {
                const isSelected = selectedSubjects.includes(s.name);
                return (
                  <button
                    key={i}
                    type="button"
                    className="self-subject-btn"
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
                    Gợi ý từ các môn bạn chọn: {subjectInsight.badge}
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
                  Nhóm thiên hướng gần với bạn: <strong>{selectedHobby.archetype}</strong>
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

            <div className="self-step-actions">
              <button className="btn-edtech-secondary" onClick={() => setCurrentStep(4)}>
                <ArrowLeft size={18} />
                <span>Quay lại</span>
              </button>
              <button
                className="btn-edtech-primary"
                onClick={handleFinish}
                disabled={isSubmitting}
              >
                <Sparkles size={18} />
                <span>{isSubmitting ? 'Đang tổng hợp kết quả...' : 'Xem nhóm ngành phù hợp'}</span>
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
                KẾT QUẢ ĐỊNH HƯỚNG CỦA BẠN
              </div>
              <h2 style={{ fontSize: '2.1rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '12px' }}>
                {result.archetype}
              </h2>
              <p style={{ color: '#FFFFFF', opacity: 0.95, fontSize: '1rem', lineHeight: '1.6', margin: 0, maxWidth: '64ch' }}>
                Từ các môn bạn học khá ({result.selectedSubjects.join(', ')}) và kiểu công việc bạn yêu thích, dưới đây là những nhóm ngành sát với điểm mạnh của bạn để bắt đầu tìm hiểu.
              </p>
            </div>

            {/* Radar Chart Card */}
            <div className="card-box" style={{ marginBottom: '28px', textAlign: 'center' }}>
              <div className="pill-badge" style={{ marginBottom: '8px' }}>6 NHÓM TÍNH CÁCH NGHỀ NGHIỆP</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>Biểu đồ xu hướng nghề nghiệp Holland (RIASEC)</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', maxWidth: '60ch', margin: '0 auto 20px' }}>
                Đỉnh nào vươn xa hơn cho thấy bạn có nhiều điểm chung với nhóm công việc đó hơn.
              </p>
              <RadarChart scores={result.scores} />
            </div>

            {/* Strengths & Blindspots Analysis Card */}
            {result.personality && (
              <div className="card-box" style={{ marginBottom: '28px', borderLeft: '5px solid #4F46E5' }}>
                <div className="pill-badge" style={{ marginBottom: '8px' }}>ĐIỂM MẠNH &amp; ĐIỀU CẦN LƯU Ý</div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '16px', color: '#1E293B' }}>
                  Nhóm nổi bật của bạn: <span style={{ color: '#4F46E5' }}>{result.personality.traitName}</span>
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ background: '#ECFDF5', border: '1.5px solid #A7F3D0', borderRadius: '16px', padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#047857', fontWeight: '800', fontSize: '0.92rem', marginBottom: '8px' }}>
                      <Check size={18} strokeWidth={2.5} />
                      <span>ĐIỂM THUẬN LỢI KHI HỌC &amp; LÀM NGHỀ</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: '#065F46', lineHeight: '1.5' }}>
                      {result.personality.strength}
                    </p>
                  </div>

                  <div style={{ background: '#FFF1F2', border: '1.5px solid #FECDD3', borderRadius: '16px', padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#BE123C', fontWeight: '800', fontSize: '0.92rem', marginBottom: '8px' }}>
                      <AlertCircle size={18} strokeWidth={2.5} />
                      <span>ĐIỀU DỄ GẶP KHÓ KHĂN</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: '#9F1239', lineHeight: '1.5' }}>
                      {result.personality.blindspot}
                    </p>
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '14px 18px', fontSize: '0.88rem', color: '#334155', lineHeight: '1.5' }}>
                  💡 <strong>Gợi ý chuẩn bị thêm:</strong> {result.personality.advice}
                </div>
              </div>
            )}

            {/* Top 5 Suggested Majors */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '2px' }}>5 ngành học gợi ý để bạn tìm hiểu trước</h3>
                  <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Tổng hợp theo kết quả trắc nghiệm &amp; thông tin tuyển sinh các trường</span>
                </div>
                <span className="pill-badge" style={{ background: '#ECFDF5', color: '#059669', borderColor: '#A7F3D0' }}>
                  GỢI Ý THAM KHẢO
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '18px' }}>
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
                        
                        {/* Quick Stats: Điểm TB, Lương mới ra trường, Ảnh hưởng từ AI */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px', background: '#F8FAFC', padding: '10px 12px', borderRadius: '12px', fontSize: '0.78rem' }}>
                          <div>
                            <span style={{ color: '#64748B', display: 'block' }}>Điểm chuẩn tham khảo:</span>
                            <strong style={{ color: '#4F46E5' }}>{m.diem_tb}</strong>
                          </div>
                          <div>
                            <span style={{ color: '#64748B', display: 'block' }}>Mới ra trường:</span>
                            <strong style={{ color: '#059669' }}>{m.salaryRoadmap?.fresher || '8 - 14 tr'}</strong>
                          </div>
                          <div>
                            <span style={{ color: '#64748B', display: 'block' }}>Nhu cầu tuyển dụng:</span>
                            <strong style={{ color: '#EA580C' }}>{m.demandLevel || 'Cao'}</strong>
                          </div>
                          <div>
                            <span style={{ color: '#64748B', display: 'block' }}>Ảnh hưởng từ AI:</span>
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
                <span>So sánh các ngành đã lưu</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn-edtech-secondary" onClick={handleRedo}>
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
