// Career Data Module for CAREER QR 2026
// Re-exports modular datasets for Majors, Universities, Combinations & Exams, Holland & Compare, and Video/Workday simulation

import { MAJORS_DATA } from './majorsData.js';
import { UNIVERSITIES_DATA } from './universitiesData.js';
import { COMBINATIONS_DATA, EXAM_METHODS_2026 } from './combinationsData.js';
import { CAREER_VIDEOS_DATA, CAREER_SERIES_TABS, CAREER_CATEGORIES, getVideosByFilter } from './careerVideosData.js';

export { MAJORS_DATA } from './majorsData.js';
export { UNIVERSITIES_DATA } from './universitiesData.js';
export { COMBINATIONS_DATA, EXAM_METHODS_2026 } from './combinationsData.js';
export { CAREER_VIDEOS_DATA, CAREER_SERIES_TABS, CAREER_CATEGORIES, getVideosByFilter } from './careerVideosData.js';

export const HOLLAND_ARCHETYPES = [
  { code: "R", name: "Thực tế & Kỹ thuật (Realistic)", icon: "🛠️", desc: "Thích làm việc với máy móc, công cụ, thiết bị điện tử, vật liệu cụ thể và hoạt động thực tế ngoài trời." },
  { code: "I", name: "Nghiên cứu & Khám phá (Investigative)", icon: "🔬", desc: "Thích tìm hiểu bản chất vấn đề, tư duy phân tích logic, nghiên cứu khoa học và giải mã thuật toán." },
  { code: "A", name: "Nghệ thuật & Sáng tạo (Artistic)", icon: "🎨", desc: "Giàu trí tưởng tượng, tự do thể hiện bản thân qua thiết kế, đồ họa, ngôn từ, âm nhạc và mỹ thuật số." },
  { code: "S", name: "Xã hội & Giúp đỡ (Social)", icon: "🤝", desc: "Thích giao tiếp, lắng nghe, chăm sóc sức khỏe, đào tạo giảng dạy và cống hiến vì cộng đồng." },
  { code: "E", name: "Quản lý & Doanh nhân (Enterprising)", icon: "📈", desc: "Thích đàm phán, thuyết phục, lãnh đạo đội ngũ, kinh doanh chiến lược và chinh phục các mục tiêu lớn." },
  { code: "C", name: "Nghiệp vụ & Tổ chức (Conventional)", icon: "📋", desc: "Thích sự ngăn nắp, rõ ràng, chi tiết, làm việc theo quy trình chuẩn hóa và kiểm soát dữ liệu tài chính." }
];

export const COMPARE_QUESTIONS = [
  { cat: "so_thich", w: 5, text: "Nếu được làm việc mỗi ngày, phương án nào khiến bạn hào hứng nhất?" },
  { cat: "so_thich", w: 5, text: "Phương án nào gần với những điều bạn thường tìm hiểu ngoài giờ học?" },
  { cat: "so_thich", w: 5, text: "Nếu kể cho bạn bè nghe say sưa về một hướng đi, bạn sẽ chọn phương án nào?" },
  { cat: "so_thich", w: 5, text: "Tưởng tượng 5 năm nữa bạn đang làm công việc đó — phương án nào làm bạn tự hào?" },
  { cat: "nang_luc", w: 5, text: "Phương án nào phù hợp nhất với thế mạnh hiện tại của bạn?" },
  { cat: "nang_luc", w: 5, text: "Nếu phải học kiến thức mới, phương án nào bạn tiếp thu nhanh và tự tin hơn?" },
  { cat: "nang_luc", w: 5, text: "Thầy cô hoặc bạn bè hay khen bạn có năng khiếu gần với phương án nào nhất?" },
  { cat: "nang_luc", w: 5, text: "Phương án nào phát huy tối đa các kỹ năng bạn đang giỏi?" },
  { cat: "mon_hoc", w: 5, text: "Phương án nào gắn với môn học bạn học tốt và thích nhất?" },
  { cat: "mon_hoc", w: 5, text: "Nếu chỉ được ôn tập một nhóm môn, phương án nào bạn sẵn sàng cày cuốc nhất?" },
  { cat: "mon_hoc", w: 5, text: "Phương án nào có tổ hợp xét tuyển thuận lợi nhất cho điểm số của bạn?" },
  { cat: "gia_tri", w: 5, text: "Phương án nào phù hợp với điều bạn coi trọng nhất ở một công việc tương lai?" },
  { cat: "gia_tri", w: 5, text: "Nếu chọn theo mong muốn thật sự của bản thân (không vì áp lực), bạn nghiêng về đâu?" },
  { cat: "gia_tri", w: 5, text: "Phương án nào mang lại cảm giác 'đúng là con người mình' nhiều nhất?" },
  { cat: "dieu_kien", w: 5, text: "Xét về điều kiện học tập, học phí gia đình, phương án nào vừa sức hơn?" },
  { cat: "dieu_kien", w: 5, text: "Phương án nào thuận lợi hơn về địa điểm học tập (gần nhà, dễ sinh hoạt)?" },
  { cat: "co_hoi", w: 6, text: "Phương án nào bạn tin rằng có nhu cầu tuyển dụng và cơ hội việc làm rộng mở hơn?" },
  { cat: "co_hoi", w: 6, text: "Phương án nào bạn nghĩ sẽ dễ thăng tiến và phát triển lâu dài về sau?" },
  { cat: "san_sang", w: 4, text: "Phương án nào bạn cảm thấy sẵn sàng bắt tay vào hành động ngay từ hôm nay?" },
  { cat: "san_sang", w: 4, text: "Nếu phải đưa ra quyết định ngay lúc này, bạn sẽ chọn phương án nào?" }
];

export const CAREER_VIDEOS_BY_MAJOR = {
  "cntt": [
    {
      id: "vid-cntt-1",
      title: "Một ngày làm việc của Kỹ sư Trí tuệ Nhân tạo (AI Engineer) tại BigTech",
      channel: "Người Trong Muôn Nghề",
      duration: "09:15",
      type: "1 Ngày Làm Nghề",
      youtubeId: "c2Ce2QV4veY",
      keyTakeaways: [
        "Công việc chính là phân tích bài toán thực tế, thiết kế giải thuật và code tính năng cùng đồng nghiệp quốc tế.",
        "Thời gian gõ code thực tế chỉ chiếm khoảng 40%, còn lại là trao đổi kiến trúc, họp sprint và kiểm thử chất lượng.",
        "Khả năng tự học và cập nhật công nghệ mới (đặc biệt là GenAI) là yếu tố sống còn để không bị đào thải."
      ],
      realityCheck: {
        myth: "Ngành IT chỉ cần ngồi gõ code một mình, không cần giao tiếp hay làm việc nhóm.",
        truth: "Kỹ sư phần mềm dành phần lớn thời gian đọc hiểu tài liệu, tranh luận giải pháp kiến trúc và làm việc chặt chẽ cùng Product Manager, Designer."
      }
    }
  ],
  "vi-mach": [
    {
      id: "vid-vimach-1",
      title: "Bên trong phòng Lab Thiết kế Vi mạch Bán dẫn: Cơn sốt nhân lực tỷ USD 2026",
      channel: "VTV24 Khoa Giáo",
      duration: "10:20",
      type: "Thực Tế Phòng Lab",
      youtubeId: "xi-TdUo8e60",
      keyTakeaways: [
        "Việt Nam đang là tâm điểm đầu tư nhà máy bán dẫn của các tập đoàn thế giới (Nvidia, Synopsys, Marvell).",
        "Yêu cầu nền tảng cực chắc về Vật lý bán dẫn, Toán cao cấp và vi mạch số (VHDL/Verilog).",
        "Mức lương khởi điểm của kỹ sư vi mạch thuộc hàng top đầu thị trường nhưng đòi hỏi tính chính xác tuyệt đối."
      ],
      realityCheck: {
        myth: "Thiết kế chip là nghề việc nhẹ lương cao, ngồi phòng lạnh bấm nút là xong.",
        truth: "Áp lực sai số bằng 0. Một lỗi logic nhỏ trên chip silicon có thể làm hỏng dự án hàng triệu USD."
      }
    }
  ],
  "khdl": [
    {
      id: "vid-khdl-1",
      title: "Một ngày của Data Scientist: Trích xuất tri thức từ hàng triệu dòng dữ liệu",
      channel: "Maz Học Data",
      duration: "08:45",
      type: "1 Ngày Làm Nghề",
      youtubeId: "wO2qaeE8FTA",
      keyTakeaways: [
        "Biến các bảng số liệu khổng lồ thành mô hình dự báo hành vi người dùng và đề xuất chiến lược kinh doanh.",
        "Kết hợp kiềng ba chân: Toán xác suất thống kê + Lập trình Python/SQL + Trực giác nhạy bén về sản phẩm.",
        "Được mệnh danh là 'Nghề quyến rũ nhất thế kỷ 21' với cơ hội làm việc trong ngành Fintech, E-commerce."
      ],
      realityCheck: {
        myth: "Làm Data Science chỉ toàn tạo biểu đồ đẹp mắt và chạy mô hình AI thần thánh.",
        truth: "70-80% thời gian thực tế là làm sạch dữ liệu (Data Cleaning) lặp đi lặp lại và xử lý các số liệu lỗi."
      }
    }
  ],
  "ykhoa": [
    {
      id: "vid-ykhoa-1",
      title: "Nhật ký Bác sĩ nội trú: 24 giờ trực cấp cứu và sự thiêng liêng của ngành Y",
      channel: "VTV7 Hướng Nghiệp",
      duration: "14:50",
      type: "Review Sinh Viên",
      youtubeId: "h8z4eNXbtbE",
      keyTakeaways: [
        "Thời gian đào tạo dài hạn (6 năm đại học + 18 tháng CCHN hoặc Bác sĩ nội trú) đòi hỏi lòng kiên trì và bền bỉ.",
        "Áp lực trực đêm, thi cử liên tục và khối lượng kiến thức giải phẫu, dược lý khổng lồ cần rèn luyện mỗi ngày.",
        "Niềm hạnh phúc vô giá khi cứu sống người bệnh và mang lại hy vọng cho gia đình bệnh nhân."
      ],
      realityCheck: {
        myth: "Bác sĩ mới ra trường kiếm tiền rất dễ và thu nhập tiền tỷ ngay lập tức.",
        truth: "Thu nhập ban đầu của bác sĩ trẻ thường khiêm tốn so với khối lượng công việc, quả ngọt chỉ đến sau 8-10 năm tích lũy tay nghề."
      }
    }
  ],
  "marketing": [
    {
      id: "vid-mkt-1",
      title: "Một ngày làm việc tại Digital Marketing Agency: Chạy Ads, bắt trend & sáng tạo nội dung",
      channel: "Brands Vietnam",
      duration: "07:30",
      type: "1 Ngày Làm Nghề",
      youtubeId: "ne1QCmBw-MI",
      keyTakeaways: [
        "Theo dõi số liệu quảng cáo theo thời gian thực, đo lường chi phí mỗi khách hàng (CPA) và tỷ lệ chuyển đổi.",
        "Sáng tạo ý tưởng nội dung video ngắn (TikTok, Reels) bắt trúng tâm lý và cảm xúc của thế hệ Gen Z.",
        "Phải liên tục đổi mới, không thể áp dụng một công thức cũ cho thị trường luôn biến đổi."
      ],
      realityCheck: {
        myth: "Marketing chỉ là chém gió, bay bổng sáng tạo và đi sự kiện sang chảnh.",
        truth: "Marketing hiện đại là cuộc chơi của số liệu (Data-driven). Áp lực chạy chỉ số doanh số (KPI/ROI) cực kỳ gắt gao."
      }
    }
  ],
  "logistics": [
    {
      id: "vid-logistics-1",
      title: "Khám phá trung tâm Cảng biển & Chuỗi cung ứng Quốc tế: Logistics vận hành ra sao?",
      channel: "VTV7 Hướng Nghiệp",
      duration: "10:45",
      type: "Thực Tế Phòng Lab",
      youtubeId: "oBE4kHIvaps",
      keyTakeaways: [
        "Quản lý hành trình hàng hóa từ kho bãi thông minh, tàu container biển đến tay khách hàng khắp thế giới.",
        "Ứng dụng công nghệ theo dõi lộ trình GPS, tối ưu chi phí vận chuyển và giảm thiểu phát thải xanh.",
        "Môi trường làm việc quốc tế, đòi hỏi kỹ năng ngoại ngữ tiếng Anh lưu loát và tư duy giải quyết vấn đề linh hoạt."
      ],
      realityCheck: {
        myth: "Học Logistics ra trường chỉ đi làm giao hàng hoặc đóng gói kho bãi.",
        truth: "Logistics là nghệ thuật quản trị dòng chảy toàn cầu: Quản lý cảng biển, đàm phán cước tàu hàng không và quy hoạch chuỗi cung ứng triệu USD."
      }
    }
  ],
  "dohoa": [
    {
      id: "vid-dohoa-1",
      title: "Trải nghiệm làm UI/UX Designer: Thiết kế ứng dụng triệu người dùng",
      channel: "Arena Multimedia",
      duration: "12:15",
      type: "1 Ngày Làm Nghề",
      youtubeId: "CujT81z0vQU",
      keyTakeaways: [
        "Nghiên cứu hành trình trải nghiệm người dùng, vẽ wireframe và tạo prototype tương tác trên Figma.",
        "Cân bằng giữa tính thẩm mỹ thời thượng và sự tiện dụng thực tế, không để người dùng bối rối.",
        "Cơ hội làm việc linh hoạt từ xa (Remote / Freelance) cho các công ty công nghệ đa quốc gia."
      ],
      realityCheck: {
        myth: "Làm thiết kế đồ họa chỉ cần biết dùng phần mềm Photoshop / Illustrator là đủ.",
        truth: "Phần mềm chỉ là công cụ. Giá trị cốt lõi nằm ở tư duy thẩm mỹ, thấu cảm người dùng và giải quyết bài toán thương hiệu."
      }
    }
  ],
  "tamly": [
    {
      id: "vid-tamly-1",
      title: "Một ngày của Chuyên viên Tư vấn Tâm lý Học đường & Doanh nghiệp",
      channel: "VTV7 Hướng Nghiệp",
      duration: "09:30",
      type: "Góc Nhìn Chuyên Gia",
      youtubeId: "hbQDHin8s7g",
      keyTakeaways: [
        "Lắng nghe không phán xét, xây dựng không gian an toàn để thân chủ mở lòng về áp lực và tổn thương.",
        "Ứng dụng các liệu pháp hành vi nhận thức (CBT) và bài test tâm lý tiêu chuẩn khoa học quốc tế.",
        "Cơn khát nhân lực tâm lý học đường và tâm lý nhân sự (HR) tại Việt Nam đang bùng nổ mạnh mẽ."
      ],
      realityCheck: {
        myth: "Học tâm lý học có thể đọc được suy nghĩ của người khác như ảo thuật gia.",
        truth: "Tâm lý học là khoa học hành vi thực nghiệm. Nhà tâm lý không phán xét hay đọc ý nghĩ, mà đồng hành giúp thân chủ tự chữa lành."
      }
    }
  ],
  "tudonghoa": [
    {
      id: "vid-tdh-1",
      title: "Bên trong nhà máy Robot tự động hóa thông minh: Kỹ sư làm những gì?",
      channel: "VTV24 Tiêu Điểm",
      duration: "11:15",
      type: "Thực Tế Phòng Lab",
      youtubeId: "s8ktd86j1Ek",
      keyTakeaways: [
        "Lập trình điều khiển cánh tay robot công nghiệp (KUKA, ABB) và hệ thống PLC điều hành nhà máy.",
        "Tích hợp cảm biến IoT và thị giác máy tính AI để dây chuyền tự phát hiện lỗi sản phẩm trong tích tắc.",
        "Cơ hội làm việc tại các tổ hợp sản xuất quy mô lớn (VinFast, Samsung, Foxconn, Lego)."
      ],
      realityCheck: {
        myth: "Ngành cơ điện tử tự động hóa chỉ tay chân dầu mỡ, môi trường xưởng nóng bức bụi bặm.",
        truth: "Kỹ sư tự động hóa hiện đại ngồi phòng điều khiển trung tâm SCADA, lập trình phần mềm và mô phỏng số (Digital Twin) sạch sẽ."
      }
    }
  ],
  "kdqt": [
    {
      id: "vid-kdqt-1",
      title: "Một ngày của chuyên viên Xuất Nhập Khẩu & Phát triển Thị trường Toàn cầu",
      channel: "Brands Vietnam",
      duration: "08:20",
      type: "Góc Nhìn Chuyên Gia",
      youtubeId: "ne1QCmBw-MI",
      keyTakeaways: [
        "Nắm vững luật thương mại quốc tế (Incoterms), phương thức thanh toán L/C và thủ tục hải quan.",
        "Kỹ năng đàm phán bằng tiếng Anh và ngoại ngữ thứ hai (Trung, Hàn, Nhật) mang lại ưu thế vượt bậc.",
        "Cơ hội công tác nước ngoài, mở rộng mạng lưới quan hệ đối tác kinh doanh đa quốc gia."
      ],
      realityCheck: {
        myth: "Học kinh doanh quốc tế chỉ là học lý thuyết kinh tế chung chung mà không có nghề cụ thể.",
        truth: "Ngành này rèn luyện nghiệp vụ thực chiến về ngoại thương, logistics xuyên biên giới và khai phá thị trường toàn cầu."
      }
    }
  ]
};

const MAJOR_ALIASES = {
  "cntt-ai": "cntt",
  "ai": "cntt",
  "vi-mach": "vi-mach",
  "vimach": "vi-mach",
  "marketing-so": "marketing",
  "marketing": "marketing",
  "khoa-hoc-du-lieu": "khdl",
  "khdl": "khdl",
  "y-da-khoa": "ykhoa",
  "ykhoa": "ykhoa",
  "thiet-ke-do-hoa-ux": "dohoa",
  "dohoa": "dohoa",
  "logistics": "logistics",
  "tam-ly-hoc": "tamly",
  "tamly": "tamly",
  "tudonghoa": "tudonghoa",
  "kdqt": "kdqt",
  "an-ninh-mang": "cntt",
  "ky-thuat-phan-mem": "cntt",
  "robot-ai": "tudonghoa",
  "oto": "tudonghoa",
  "oto-dien": "tudonghoa",
  "codientu": "tudonghoa",
  "y-sinh": "vi-mach",
  "rang-ham-mat": "ykhoa",
  "duoc": "ykhoa",
  "duoc-hoc": "ykhoa",
  "dieuduong": "ykhoa",
  "taichinh": "khdl",
  "fintech": "khdl",
  "ketoan": "kdqt",
  "thuong-mai-dien-tu": "marketing",
  "truyenthong": "marketing",
  "pr": "marketing",
  "kientruc": "dohoa",
  "luatkt": "kdqt",
  "luat-kinh-te": "kdqt",
  "ngoaigiao": "kdqt",
  "supham-toan": "cntt",
  "supham-anh": "kdqt",
  "hangkhong": "tudonghoa"
};

export function getVideosForMajor(majorId) {
  const normalizedId = MAJOR_ALIASES[majorId] || majorId;
  const fromVideosData = (CAREER_VIDEOS_DATA || []).filter(v => v.majorId === majorId || v.majorId === normalizedId);
  if (fromVideosData.length > 0) {
    return fromVideosData.map(v => ({
      ...v,
      youtubeUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`
    }));
  }
  const list = CAREER_VIDEOS_BY_MAJOR[normalizedId] || CAREER_VIDEOS_BY_MAJOR["cntt"] || [];
  return list.map(v => ({
    ...v,
    youtubeUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`
  }));
}

const TIMELINES = {
  "vi-mach": [
    {
      time: "08:30 – 09:30",
      stage: "Giao ca phòng Lab Cleanroom",
      icon: "🔬",
      desc: "Mặc trang phục phòng sạch chống tĩnh điện (ESD), kiểm tra nhật ký đo đạc wafer và phân chia task kiểm thử mạch tích hợp."
    },
    {
      time: "09:30 – 12:00",
      stage: "Thiết kế Layout & Lập trình RTL",
      icon: "💻",
      desc: "Sử dụng phần mềm chuyên dụng (Synopsys / Cadence) mô phỏng hàng triệu bóng bán dẫn, tối ưu đường truyền logic trên chip silicon."
    },
    {
      time: "13:30 – 16:30",
      stage: "Chạy mô phỏng Timing & Verification",
      icon: "⚡",
      desc: "Kiểm tra xung nhịp đồng hồ, phát hiện và khắc phục các điểm nghẽn trễ tín hiệu ở cấp độ picosecond trước khi gửi xưởng đúc (Tape-out)."
    },
    {
      time: "16:30 – 17:30",
      stage: "Họp kỹ thuật cùng chuyên gia quốc tế",
      icon: "🌐",
      desc: "Họp trực tuyến trao đổi kiến trúc chip với kỹ sư trưởng tại Hoa Kỳ / Đài Loan và lưu trữ phiên bản thiết kế lên máy chủ bảo mật."
    }
  ],
  "cntt": [
    {
      time: "08:30 – 09:15",
      stage: "Họp Daily Standup & Check Jira",
      icon: "☀️",
      desc: "Họp nhanh 15 phút với Product Manager và Designer để rà soát tiến độ sprint và thảo luận các vấn đề kỹ thuật phát sinh."
    },
    {
      time: "09:15 – 12:00",
      stage: "Tập trung viết mã nguồn (Deep Work)",
      icon: "💻",
      desc: "Xây dựng thuật toán AI, tối ưu hóa các API backend xử lý triệu lượt truy cập và viết unit test đảm bảo không có lỗi tiềm ẩn."
    },
    {
      time: "13:30 – 16:30",
      stage: "Code Review & Đo lường hệ thống",
      icon: "🔍",
      desc: "Đọc duyệt code của đồng nghiệp, kiểm tra tính bảo mật và theo dõi chỉ số chịu tải của hệ thống máy chủ đám mây (Cloud)."
    },
    {
      time: "16:30 – 17:30",
      stage: "Deploy thử nghiệm & Bàn giao",
      icon: "🚀",
      desc: "Triển khai bản vá mới lên môi trường Staging, kiểm tra cùng đội ngũ QA và ghi chép nhật ký phát triển tính năng mới."
    }
  ],
  "ykhoa": [
    {
      time: "07:00 – 08:30",
      stage: "Giao ban khoa & Đi buồng bệnh nhân",
      icon: "🏥",
      desc: "Đi thăm khám từng bệnh nhân nặng tại khoa nội trú, kiểm tra chỉ số sinh tồn và nghe báo cáo diễn tiến ca bệnh từ điều dưỡng trực đêm."
    },
    {
      time: "08:30 – 12:00",
      stage: "Hội chẩn chuyên khoa & Phẫu thuật",
      icon: "🩺",
      desc: "Thảo luận phác đồ điều trị đa chuyên khoa với các giáo sư đầu ngành, tham gia kíp mổ theo lịch phân công."
    },
    {
      time: "13:30 – 16:00",
      stage: "Khám lâm sàng & Tư vấn người nhà",
      icon: "🤝",
      desc: "Khám bệnh nhân ngoại trú, giải thích tình trạng bệnh cho gia đình với thái độ đồng cảm, kê đơn thuốc và hẹn lịch tái khám."
    },
    {
      time: "16:00 – 17:30",
      stage: "Hoàn thiện bệnh án điện tử",
      icon: "📋",
      desc: "Rà soát toàn bộ kết quả xét nghiệm máu, chụp CT/MRI, ký duyệt hồ sơ bệnh án điện tử và chuẩn bị bàn giao cho ca trực đêm."
    }
  ],
  "marketing": [
    {
      time: "08:30 – 09:30",
      stage: "Đọc số liệu Performance & Bắt trend",
      icon: "📈",
      desc: "Đo lường chi phí mỗi khách hàng (CPA), tỷ lệ chuyển đổi đơn hàng qua đêm trên TikTok/Facebook Ads và cập nhật các xu hướng nóng."
    },
    {
      time: "09:30 – 12:00",
      stage: "Brainstorming chiến dịch sáng tạo",
      icon: "💡",
      desc: "Lên kịch bản video ngắn triệu view, phác thảo concept thông điệp thương hiệu và định hướng nội dung cho các kênh truyền thông."
    },
    {
      time: "13:30 – 16:30",
      stage: "Làm việc cùng Designer & KOL/KOC",
      icon: "🎨",
      desc: "Duyệt hình ảnh đồ họa, tinh chỉnh màu sắc visual và liên hệ các đối tác sáng tạo nội dung để triển khai chiến dịch đúng hạn."
    },
    {
      time: "16:30 – 17:30",
      stage: "Tối ưu hóa ngân sách & Đo lường ROI",
      icon: "📊",
      desc: "Tổng kết hiệu quả ngân sách quảng cáo đã tiêu trong ngày, phân bổ lại dòng tiền vào các nhóm khách hàng tiềm năng nhất."
    }
  ],
  "logistics": [
    {
      time: "08:30 – 09:30",
      stage: "Theo dõi hải trình & Tàu container",
      icon: "🚢",
      desc: "Kiểm tra hệ thống định vị GPS các chuyến tàu chở container cập cảng biển, xác định lịch cập cầu bến và dỡ hàng."
    },
    {
      time: "09:30 – 12:00",
      stage: "Xử lý thủ tục hải quan & Vận đơn",
      icon: "📦",
      desc: "Rà soát tờ khai hải quan điện tử (VNACCS), kiểm tra vận đơn đường biển (Bill of Lading) và chứng nhận xuất xứ (C/O)."
    },
    {
      time: "13:30 – 16:30",
      stage: "Đàm phán cước tàu & Điều phối kho",
      icon: "🤝",
      desc: "Thương lượng giá cước với các hãng tàu vận tải quốc tế (Maersk, MSC), sắp xếp xe container vận chuyển hàng về kho bãi."
    },
    {
      time: "16:30 – 17:30",
      stage: "Tối ưu hóa tồn kho & Chuỗi cung ứng",
      icon: "🏢",
      desc: "Cân đối lượng hàng lưu kho an toàn, giải quyết sự cố phát sinh tại cảng và cập nhật lịch trình giao hàng cho khách."
    }
  ],
  "dohoa": [
    {
      time: "08:30 – 09:30",
      stage: "Nhận yêu cầu thiết kế (Design Brief)",
      icon: "🎨",
      desc: "Trao đổi với Product Manager về mục tiêu của tính năng mới, nghiên cứu người dùng và đối thủ cạnh tranh trên thị trường."
    },
    {
      time: "09:30 – 12:00",
      stage: "Thiết kế Wireframe & Prototype Figma",
      icon: "✨",
      desc: "Vẽ bố cục giao diện, xây dựng hiệu ứng tương tác mượt mà và lựa chọn màu sắc, typography phù hợp với nhận diện thương hiệu."
    },
    {
      time: "13:30 – 16:30",
      stage: "Kiểm tra trải nghiệm người dùng (UX)",
      icon: "📱",
      desc: "Thử nghiệm mẫu giao diện với nhóm người dùng mẫu, ghi nhận các điểm gây bối rối để đơn giản hóa thao tác."
    },
    {
      time: "16:30 – 17:30",
      stage: "Bàn giao Design System cho Lập trình viên",
      icon: "🤝",
      desc: "Xuất thông số kỹ thuật (Design Specs), icon vector và mã màu để đội ngũ kỹ sư phần mềm lập trình chính xác 100%."
    }
  ],
  "tudonghoa": [
    {
      time: "08:30 – 09:30",
      stage: "Kiểm tra cảm biến & Khởi động phòng Lab Robot",
      icon: "🦾",
      desc: "Bật nguồn trạm điều khiển robot công nghiệp KUKA/ABB, hiệu chuẩn camera 3D và hệ thống cảm biến LiDAR."
    },
    {
      time: "09:30 – 12:00",
      stage: "Lập trình giải thuật điều khiển & Thị giác máy tính",
      icon: "💻",
      desc: "Viết code nhận diện vật thể bằng mô hình YOLO, tính toán quỹ đạo chuyển động mượt mà không va chạm cho cánh tay robot."
    },
    {
      time: "13:30 – 16:30",
      stage: "Chạy thử nghiệm gắp đặt tốc độ cao",
      icon: "⚡",
      desc: "Đo lường thời gian chu trình (Cycle Time) và sai số định vị (dưới 0.1mm), ghi nhận lỗi phản hồi lực từ động cơ servo."
    },
    {
      time: "16:30 – 17:30",
      stage: "Tối ưu hóa mô hình AI nhúng",
      icon: "🧠",
      desc: "Nén mô hình học sâu để nạp vào chip nhúng Nvidia Jetson, chuẩn bị cho bài test tự hành trên dây chuyền sản xuất."
    }
  ],
  "tamly": [
    {
      time: "08:30 – 09:30",
      stage: "Chuẩn bị không gian phòng tham vấn",
      icon: "🧠",
      desc: "Sắp xếp không gian yên tĩnh, an toàn và xem lại các ghi chú hồ sơ lâm sàng của thân chủ trước buổi hẹn."
    },
    {
      time: "09:30 – 12:00",
      stage: "Thực hiện ca tham vấn tâm lý 1-1",
      icon: "🤝",
      desc: "Lắng nghe tích cực không phán xét, áp dụng các liệu pháp hành vi nhận thức (CBT) giúp thân chủ thấu hiểu cảm xúc của mình."
    },
    {
      time: "13:30 – 16:30",
      stage: "Phân tích trắc nghiệm tâm lý chuẩn hóa",
      icon: "📝",
      desc: "Chấm điểm và phân tích các thang đo tâm lý (DASS-21, MBTI, Holland), đánh giá mức độ căng thẳng hoặc thiên hướng của thân chủ."
    },
    {
      time: "16:30 – 17:30",
      stage: "Họp giám sát chuyên môn & Viết nhật ký",
      icon: "📚",
      desc: "Thảo luận trường hợp ca bệnh phức tạp cùng chuyên gia giám sát, đảm bảo tuân thủ đạo đức nghề nghiệp và bảo mật thông tin."
    }
  ],
  "kdqt": [
    {
      time: "08:30 – 09:30",
      stage: "Check tin thị trường thế giới & Tỷ giá",
      icon: "🌐",
      desc: "Cập nhật biến động tỷ giá ngoại tệ, chính sách thuế nhập khẩu mới và giá nguyên vật liệu hàng hóa thế giới."
    },
    {
      time: "09:30 – 12:00",
      stage: "Soạn thảo hợp đồng ngoại thương & L/C",
      icon: "📝",
      desc: "Làm việc với đối tác nước ngoài qua email/call, rà soát điều khoản thanh toán tín dụng thư (Letter of Credit) và thời hạn giao hàng."
    },
    {
      time: "13:30 – 16:00",
      stage: "Đàm phán hợp đồng với đối tác quốc tế",
      icon: "🤝",
      desc: "Họp trực tuyến với đại diện mua hàng khu vực châu Âu/Đông Á, thương thảo chiết khấu số lượng lớn và kế hoạch mở rộng thị trường."
    },
    {
      time: "16:00 – 17:30",
      stage: "Bàn giao hồ sơ hải quan cho logistics",
      icon: "📦",
      desc: "Ký duyệt Invoice, Packing List và hoàn tất hồ sơ hải quan xuất khẩu để hàng kịp lên tàu theo đúng lịch trình cam kết."
    }
  ]
};

export function getWorkdayTimeline(majorId) {
  const normalizedId = MAJOR_ALIASES[majorId] || majorId;
  return TIMELINES[normalizedId] || TIMELINES["cntt"] || [];
}

export default {
  MAJORS_DATA,
  UNIVERSITIES_DATA,
  COMBINATIONS_DATA,
  EXAM_METHODS_2026,
  HOLLAND_ARCHETYPES,
  COMPARE_QUESTIONS,
  CAREER_VIDEOS_BY_MAJOR,
  getVideosForMajor,
  getWorkdayTimeline
};
