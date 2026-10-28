// Comprehensive 65+ Career Cinema Videos Database for CAREER QR 2026
// Categorized by 4 Series and 8 Industry Sectors with Practical Takeaways, Timelines & Reality Checks

export const CAREER_SERIES_TABS = [
  { id: "all", label: "Tất cả Series (60+)" },
  { id: "a-day-in-life", label: "🎬 1 Ngày Làm Nghề", icon: "Clock" },
  { id: "campus-tour", label: "🏫 Đột Nhập Lab & Giảng Đường", icon: "Building2" },
  { id: "reality-check", label: "⚠️ Góc Khuất & Sự Thật", icon: "AlertTriangle" },
  { id: "ai-era-careers", label: "🚀 Nghề Mới Thời Đại AI", icon: "Sparkles" }
];

export const CAREER_CATEGORIES = [
  { id: "all", label: "Tất cả ngành nghề" },
  { id: "cntt-ai", label: "💻 CNTT, AI & Bán dẫn" },
  { id: "kinhte-kd", label: "📊 Kinh tế, Tài chính & Kinh doanh" },
  { id: "yduoc-suckhoe", label: "🩺 Y Dược & Chăm sóc Sức khỏe" },
  { id: "truyenthong-design", label: "🎨 Truyền thông & Thiết kế" },
  { id: "ngonngu-luat", label: "⚖️ Ngôn ngữ & Luật học" },
  { id: "supham-gd", label: "📚 Sư phạm & Giáo dục" },
  { id: "kythuat-chetao", label: "⚙️ Kỹ thuật, Ô tô & Hàng không" },
  { id: "xanh-nongnghiep", label: "🌱 Kinh tế Xanh & Nông nghiệp" }
];

export const CAREER_VIDEOS_DATA = [
  {
    "id": "vid-life-01",
    "title": "1 Ngày làm việc của Kỹ sư Trí tuệ Nhân tạo (AI Engineer) tại BigTech",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "cntt",
    "majorName": "Công nghệ thông tin & Trí tuệ nhân tạo",
    "channel": "Người Trong Muôn Nghề",
    "duration": "09:15",
    "youtubeId": "c2Ce2QV4veY",
    "featured": true,
    "keyTakeaways": [
      "Công việc chính là phân tích bài toán thực tế, thiết kế giải thuật và code tính năng cùng đồng nghiệp quốc tế.",
      "Thời gian gõ code thực tế chỉ chiếm khoảng 40%, còn lại là đọc tài liệu, họp sprint và kiểm thử chất lượng.",
      "Khả năng tự học và cập nhật công nghệ mới (đặc biệt là LLM / GenAI) là yếu tố sống còn để không bị đào thải."
    ],
    "realityCheck": {
      "myth": "Làm IT chỉ cần ngồi một mình gõ phím không cần giao tiếp hay làm việc nhóm.",
      "truth": "Kỹ sư AI dành nhiều thời gian bảo vệ giải pháp kiến trúc trước Product Manager và khách hàng doanh nghiệp."
    },
    "hardestChallenge": "Hội chứng 'Burnout' do công nghệ thay đổi từng tuần và áp lực giải quyết bug hệ thống lúc nửa đêm.",
    "salaryInsight": {
      "fresher": "12 – 22 triệu/tháng",
      "mid": "28 – 55 triệu/tháng",
      "senior": "65 – 120+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Daily Standup & Đọc tài liệu ArXiv",
        "desc": "Họp 15 phút cập nhật tiến độ mô hình và lướt các bài báo khoa học AI mới nhất."
      },
      {
        "time": "10:00",
        "title": "Huấn luyện & Tinh chỉnh LLM",
        "desc": "Chạy pipeline dữ liệu trên cụm GPU Nvidia A100 và theo dõi độ mất mát (Loss curve)."
      },
      {
        "time": "14:00",
        "title": "Tối ưu hóa độ trễ API",
        "desc": "Nén mô hình bằng Quantization để triển khai lên máy chủ đám mây phục vụ hàng triệu người dùng."
      },
      {
        "time": "17:00",
        "title": "Code Review & Ghi chú kiến trúc",
        "desc": "Rà soát mã nguồn cùng Senior Engineer trước khi đẩy vào nhánh chính."
      }
    ]
  },
  {
    "id": "vid-life-02",
    "title": "1 Ngày làm Kỹ sư Vi mạch & Bán dẫn: Cơn sốt tỷ USD trong phòng sạch Cleanroom",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "vi-mach",
    "majorName": "Kỹ thuật Vi mạch & Bán dẫn",
    "channel": "VTV24 Khoa Giáo",
    "duration": "10:20",
    "youtubeId": "xi-TdUo8e60",
    "featured": true,
    "keyTakeaways": [
      "Việt Nam đang là tâm điểm đầu tư nhà máy bán dẫn của các tập đoàn thế giới (Nvidia, Synopsys, Marvell).",
      "Yêu cầu nền tảng cực chắc về Vật lý bán dẫn, Toán cao cấp và vi mạch số (VHDL/Verilog).",
      "Mức lương khởi điểm của kỹ sư vi mạch thuộc hàng top đầu thị trường nhưng đòi hỏi tính chính xác tuyệt đối."
    ],
    "realityCheck": {
      "myth": "Thiết kế chip là nghề việc nhẹ lương cao, ngồi phòng lạnh bấm nút là xong.",
      "truth": "Áp lực sai số bằng 0. Một lỗi logic nhỏ trên tấm wafer silicon có thể làm hỏng dự án hàng triệu USD."
    },
    "hardestChallenge": "Tính tỉ mỉ cực độ trong hàng tháng trời chạy mô phỏng vật lý mà không được phép có bất kỳ lỗi nào.",
    "salaryInsight": {
      "fresher": "15 – 25 triệu/tháng",
      "mid": "35 – 60 triệu/tháng",
      "senior": "70 – 150+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Check-in phòng sạch Cleanroom ISO-5",
        "desc": "Mặc đồ bảo hộ chống tĩnh điện và rà soát thông số máy đo dao động ký."
      },
      {
        "time": "10:00",
        "title": "Thiết kế Layout vi mạch bán dẫn",
        "desc": "Bố trí hàng tỷ bóng bán dẫn bán lẻ trên phần mềm Synopsys EDA."
      },
      {
        "time": "14:30",
        "title": "Chạy mô phỏng Timing & Nhiệt lượng",
        "desc": "Kiểm tra tín hiệu xung nhịp ở tần số 3.5 GHz dưới điều kiện nhiệt độ khắc nghiệt."
      },
      {
        "time": "17:30",
        "title": "Bàn giao dữ liệu cho xưởng đúc Wafer",
        "desc": "Ký duyệt tệp GDSII sẵn sàng cho công đoạn chế tạo quang khắc."
      }
    ]
  },
  {
    "id": "vid-life-03",
    "title": "1 Ngày của Chuyên viên Digital Marketing Agency: Chạy Ads, bắt trend & chạy KPI",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "kinhte-kd",
    "categoryLabel": "📊 Kinh Tế & Kinh Doanh",
    "majorId": "marketing",
    "majorName": "Marketing & Truyền thông số",
    "channel": "Brands Vietnam",
    "duration": "07:45",
    "youtubeId": "ne1QCmBw-MI",
    "featured": true,
    "keyTakeaways": [
      "Theo dõi số liệu quảng cáo theo thời gian thực, đo lường chi phí mỗi khách hàng (CPA) và tỷ lệ chuyển đổi.",
      "Sáng tạo ý tưởng nội dung video ngắn (TikTok, Reels) bắt trúng tâm lý và cảm xúc của thế hệ Gen Z.",
      "Phải liên tục đổi mới, không thể áp dụng một công thức cũ cho thị trường luôn biến đổi."
    ],
    "realityCheck": {
      "myth": "Marketing chỉ là chém gió, bay bổng sáng tạo và đi sự kiện sang chảnh.",
      "truth": "Marketing hiện đại là cuộc chơi của số liệu (Data-driven). Áp lực chạy chỉ số doanh số (KPI/ROI) cực kỳ gắt gao."
    },
    "hardestChallenge": "Thuật toán quảng cáo thay đổi bất ngờ khiến giá thầu tăng vọt ngay giữa chiến dịch lớn.",
    "salaryInsight": {
      "fresher": "8 – 13 triệu/tháng",
      "mid": "16 – 28 triệu/tháng",
      "senior": "35 – 70+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "09:00",
        "title": "Kiểm tra bảng số liệu Dashboard",
        "desc": "Đo lường chi phí CPA, CTR trên Google Ads và Meta Ads Manager."
      },
      {
        "time": "10:30",
        "title": "Brainstorming ý tưởng chiến dịch",
        "desc": "Lên kịch bản viral video TikTok cùng bộ phận sáng tạo nội dung."
      },
      {
        "time": "14:00",
        "title": "Gặp gỡ khách hàng nhãn hàng",
        "desc": "Trình bày báo cáo hiệu quả chiến dịch và đề xuất phân bổ ngân sách tháng tới."
      },
      {
        "time": "16:30",
        "title": "Tối ưu hóa A/B Testing",
        "desc": "Thử nghiệm 5 mẫu hình ảnh quảng cáo mới để tìm ra mẫu đem lại ROI cao nhất."
      }
    ]
  },
  {
    "id": "vid-life-04",
    "title": "24 Giờ trực viện của Bác sĩ Nội trú: Giữa ranh giới sinh tử",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "ykhoa",
    "majorName": "Y khoa & Phẫu thuật lâm sàng",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "14:50",
    "youtubeId": "h8z4eNXbtbE",
    "featured": true,
    "keyTakeaways": [
      "Thời gian đào tạo dài hạn (6 năm đại học + 18 tháng CCHN hoặc Bác sĩ nội trú) đòi hỏi lòng kiên trì và bền bỉ.",
      "Áp lực trực đêm, thi cử liên tục và khối lượng kiến thức giải phẫu, dược lý khổng lồ cần rèn luyện mỗi ngày.",
      "Niềm hạnh phúc vô giá khi cứu sống người bệnh và mang lại hy vọng cho gia đình bệnh nhân."
    ],
    "realityCheck": {
      "myth": "Bác sĩ mới ra trường kiếm tiền rất dễ và thu nhập tiền tỷ ngay lập tức.",
      "truth": "Thu nhập ban đầu của bác sĩ trẻ thường khiêm tốn so với khối lượng công việc, quả ngọt chỉ đến sau 8-10 năm tích lũy tay nghề."
    },
    "hardestChallenge": "Thiếu ngủ triền miên trong các ca trực 24h và áp lực tâm lý khi đối diện với sự mất mát của người bệnh.",
    "salaryInsight": {
      "fresher": "8 – 14 triệu/tháng (nội trú)",
      "mid": "20 – 45 triệu/tháng",
      "senior": "50 – 120+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "07:00",
        "title": "Giao ban khoa & Khám bệnh buồng",
        "desc": "Nghe báo cáo bệnh nhân nặng trong đêm và cùng Trưởng khoa đi buồng thăm khám."
      },
      {
        "time": "09:30",
        "title": "Phụ mổ trong phòng phẫu thuật",
        "desc": "Đứng phụ mổ nội soi ổ bụng suốt 3 giờ liên tục dưới đèn mổ công suất lớn."
      },
      {
        "time": "14:00",
        "title": "Kê đơn thuốc & Giải thích cho người nhà",
        "desc": "Tư vấn phác đồ điều trị và dặn dò chế độ dinh dưỡng phục hồi."
      },
      {
        "time": "20:00",
        "title": "Trực cấp cứu ban đêm",
        "desc": "Xử trí các ca tai nạn giao thông và suy hô hấp chuyển gấp từ tuyến dưới."
      }
    ]
  },
  {
    "id": "vid-life-05",
    "title": "1 Ngày làm Kiểm toán viên Big4 (PwC/Deloitte): Mùa bận bão lửa ra sao?",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "kinhte-kd",
    "categoryLabel": "📊 Kinh Tế & Kinh Doanh",
    "majorId": "ke-toan",
    "majorName": "Kế toán - Kiểm toán tài chính",
    "channel": "Vietcetera",
    "duration": "11:30",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Kiểm tra tính trung thực của các báo cáo tài chính hàng nghìn tỷ đồng của doanh nghiệp niêm yết.",
      "Mùa bận (Busy Season từ tháng 1 đến tháng 4) làm việc từ 12-16 tiếng/ngày nhưng tích lũy kinh nghiệm cực nhanh.",
      "Tấm vé thông hành tuyệt vời để trở thành Giám đốc Tài chính (CFO) sau 5-7 năm lăn lộn."
    ],
    "realityCheck": {
      "myth": "Kiểm toán chỉ là ngồi cộng trừ sổ sách hóa đơn đơn giản.",
      "truth": "Kiểm toán là điều tra tài chính: Phát hiện rủi ro gian lận, định giá tài sản phái sinh và đối chiếu quy định thuế."
    },
    "hardestChallenge": "Cường độ làm việc căng thẳng thâu đêm trong mùa kiểm toán quyết toán tài chính năm.",
    "salaryInsight": {
      "fresher": "10 – 16 triệu/tháng",
      "mid": "22 – 40 triệu/tháng",
      "senior": "50 – 100+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Có mặt tại trụ sở khách hàng",
        "desc": "Làm việc trực tiếp tại phòng Kế toán của doanh nghiệp sản xuất FDI."
      },
      {
        "time": "11:00",
        "title": "Chứng kiến kiểm kê kho hàng tồn",
        "desc": "Kiểm đếm thực tế hàng nghìn tấn nguyên vật liệu tại nhà máy để đối chiếu sổ sách."
      },
      {
        "time": "15:00",
        "title": "Phân tích thử nghiệm kiểm soát",
        "desc": "Đánh giá quy trình phê duyệt thanh toán và dòng tiền qua tài khoản ngân hàng."
      },
      {
        "time": "19:30",
        "title": "Hoàn thiện hồ sơ kiểm toán (Working Papers)",
        "desc": "Tổng hợp các bút toán điều chỉnh gửi Kiểm toán viên chính xét duyệt."
      }
    ]
  },
  {
    "id": "vid-life-06",
    "title": "1 Ngày điều phối Cảng biển của Chuyên viên Logistics & Supply Chain",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "kinhte-kd",
    "categoryLabel": "📊 Kinh Tế & Kinh Doanh",
    "majorId": "logistics",
    "majorName": "Logistics & Quản lý chuỗi cung ứng",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "10:45",
    "youtubeId": "oBE4kHIvaps",
    "featured": false,
    "keyTakeaways": [
      "Quản lý hành trình hàng hóa từ kho bãi thông minh, tàu container biển đến tay khách hàng khắp thế giới.",
      "Ứng dụng công nghệ theo dõi lộ trình GPS, tối ưu chi phí vận chuyển và giảm thiểu phát thải xanh.",
      "Môi trường làm việc quốc tế, đòi hỏi kỹ năng ngoại ngữ tiếng Anh lưu loát và tư duy giải quyết vấn đề linh hoạt."
    ],
    "realityCheck": {
      "myth": "Học Logistics ra trường chỉ đi làm giao hàng hoặc đóng gói kho bãi.",
      "truth": "Logistics là nghệ thuật quản trị dòng chảy toàn cầu: Quản lý cảng biển, đàm phán cước tàu hàng không và quy hoạch chuỗi cung ứng triệu USD."
    },
    "hardestChallenge": "Sự cố kẹt cảng, trễ tàu hoặc hải quan giữ hàng đòi hỏi phải xử lý khẩn cấp trong vòng vài giờ.",
    "salaryInsight": {
      "fresher": "9 – 15 triệu/tháng",
      "mid": "18 – 35 triệu/tháng",
      "senior": "40 – 90+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:00",
        "title": "Kiểm tra lịch tàu cập cảng",
        "desc": "Theo dõi vị trí tàu mẹ container 14.000 TEU cập cảng Hải Phòng / Cái Mép."
      },
      {
        "time": "10:30",
        "title": "Điều phối đội xe đầu kéo container",
        "desc": "Phân bổ lệnh bốc dỡ hàng tại bãi để giảm tối đa thời gian chờ đợi của tài xế."
      },
      {
        "time": "14:00",
        "title": "Thực hiện thủ tục hải quan điện tử",
        "desc": "Truyền tờ khai hải quan thông quan cho lô hàng linh kiện điện tử xuất khẩu."
      },
      {
        "time": "16:30",
        "title": "Đàm phán giá cước với hãng tàu biển",
        "desc": "Chốt hợp đồng vận chuyển 50 container sang thị trường Bắc Mỹ."
      }
    ]
  },
  {
    "id": "vid-life-07",
    "title": "1 Ngày làm Product/UI-UX Designer: Thiết kế ứng dụng triệu người dùng",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "dohoa",
    "majorName": "Thiết kế đồ họa & Trải nghiệm UI/UX",
    "channel": "Arena Multimedia",
    "duration": "12:15",
    "youtubeId": "CujT81z0vQU",
    "featured": false,
    "keyTakeaways": [
      "Nghiên cứu hành trình trải nghiệm người dùng, vẽ wireframe và tạo prototype tương tác trên Figma.",
      "Cân bằng giữa tính thẩm mỹ thời thượng và sự tiện dụng thực tế, không để người dùng bối rối.",
      "Cơ hội làm việc linh hoạt từ xa (Remote / Freelance) cho các công ty công nghệ đa quốc gia."
    ],
    "realityCheck": {
      "myth": "Làm thiết kế đồ họa chỉ cần biết dùng phần mềm Photoshop / Illustrator là đủ.",
      "truth": "Phần mềm chỉ là công cụ. Giá trị cốt lõi nằm ở tư duy thẩm mỹ, thấu cảm người dùng và giải quyết bài toán thương hiệu."
    },
    "hardestChallenge": "Nhận phản hồi chỉnh sửa thiết kế liên tục từ nhiều bên liên quan mà vẫn phải giữ được triết lý thiết kế.",
    "salaryInsight": {
      "fresher": "10 – 16 triệu/tháng",
      "mid": "22 – 38 triệu/tháng",
      "senior": "45 – 90+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "09:00",
        "title": "Phỏng vấn người dùng thực tế",
        "desc": "Lắng nghe phản hồi của người dùng về tính năng thanh toán 1-chạm mới."
      },
      {
        "time": "11:00",
        "title": "Xây dựng Design System trên Figma",
        "desc": "Chuẩn hóa bảng màu, nút bấm và icon tương thích trên cả iOS và Android."
      },
      {
        "time": "14:30",
        "title": "Họp bàn giao thiết kế với Developer",
        "desc": "Giải thích các chuyển động micro-interaction và logic hiển thị cho lập trình viên."
      },
      {
        "time": "17:00",
        "title": "Chạy thử nghiệm bản mẫu Prototype",
        "desc": "Đo lường thời gian hoàn thành tác vụ của khách hàng trên bản vẽ thử nghiệm."
      }
    ]
  },
  {
    "id": "vid-life-08",
    "title": "1 Ngày của Chuyên viên Tư vấn Tâm lý Học đường & Doanh nghiệp",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "tamly",
    "majorName": "Tâm lý học lâm sàng & Tổ chức",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "09:30",
    "youtubeId": "hbQDHin8s7g",
    "featured": false,
    "keyTakeaways": [
      "Lắng nghe không phán xét, xây dựng không gian an toàn để thân chủ mở lòng về áp lực và tổn thương.",
      "Ứng dụng các liệu pháp hành vi nhận thức (CBT) và bài test tâm lý tiêu chuẩn khoa học quốc tế.",
      "Cơn khát nhân lực tâm lý học đường và tâm lý nhân sự (HR) tại Việt Nam đang bùng nổ mạnh mẽ."
    ],
    "realityCheck": {
      "myth": "Học tâm lý học có thể đọc được suy nghĩ của người khác như ảo thuật gia.",
      "truth": "Tâm lý học là khoa học hành vi thực nghiệm. Nhà tâm lý không phán xét hay đọc ý nghĩ, mà đồng hành giúp thân chủ tự chữa lành."
    },
    "hardestChallenge": "Bảo vệ năng lượng tinh thần cá nhân không bị cuốn theo những cảm xúc tiêu cực nặng nề của thân chủ.",
    "salaryInsight": {
      "fresher": "8 – 14 triệu/tháng",
      "mid": "18 – 32 triệu/tháng",
      "senior": "35 – 80+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Chuẩn bị không gian phòng tham vấn",
        "desc": "Tạo không gian ấm cúng, riêng tư tuyệt đối và xem lại hồ sơ thân chủ."
      },
      {
        "time": "09:30",
        "title": "Phiên tham vấn cá nhân 50 phút",
        "desc": "Đồng hành cùng học sinh vượt qua khủng hoảng áp lực đồng trang lứa và kỳ vọng thi cử."
      },
      {
        "time": "14:00",
        "title": "Thực hiện trắc nghiệm đánh giá tâm lý",
        "desc": "Chấm điểm thang đo lo âu trầm cảm DASS-21 và lập phác đồ can thiệp."
      },
      {
        "time": "16:30",
        "title": "Sinh hoạt chuyên môn cùng giám sát viên",
        "desc": "Trao đổi ẩn danh ca khó cùng chuyên gia tâm lý đầu ngành để đảm bảo chuẩn đạo đức."
      }
    ]
  },
  {
    "id": "vid-life-09",
    "title": "1 Ngày tại Nhà máy sản xuất Ô tô điện & Robot Tự động hóa",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "kythuat-chetao",
    "categoryLabel": "⚙️ Kỹ Thuật & Tự Động Hóa",
    "majorId": "tudonghoa",
    "majorName": "Điều khiển & Tự động hóa thông minh",
    "channel": "VTV24 Tiêu Điểm",
    "duration": "11:15",
    "youtubeId": "s8ktd86j1Ek",
    "featured": false,
    "keyTakeaways": [
      "Lập trình điều khiển cánh tay robot công nghiệp (KUKA, ABB) và hệ thống PLC điều hành nhà máy.",
      "Tích hợp cảm biến IoT và thị giác máy tính AI để dây chuyền tự phát hiện lỗi sản phẩm trong tích tắc.",
      "Cơ hội làm việc tại các tổ hợp sản xuất quy mô lớn (VinFast, Samsung, Foxconn, Lego)."
    ],
    "realityCheck": {
      "myth": "Ngành cơ điện tử tự động hóa chỉ tay chân dầu mỡ, môi trường xưởng nóng bức bụi bặm.",
      "truth": "Kỹ sư tự động hóa hiện đại ngồi phòng điều khiển trung tâm SCADA, lập trình phần mềm và mô phỏng số (Digital Twin) sạch sẽ."
    },
    "hardestChallenge": "Sự cố dừng dây chuyền sản xuất tự động có thể làm thiệt hại hàng trăm triệu đồng mỗi phút.",
    "salaryInsight": {
      "fresher": "11 – 18 triệu/tháng",
      "mid": "22 – 40 triệu/tháng",
      "senior": "45 – 90+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "07:45",
        "title": "Giao ca tại phòng điều khiển SCADA",
        "desc": "Kiểm tra các cảnh báo cảm biến trên dây chuyền hàn tự động 1.200 robot."
      },
      {
        "time": "10:00",
        "title": "Hiệu chỉnh tọa độ tay máy Robot KUKA",
        "desc": "Tối ưu hóa quỹ đạo chuyển động để rút ngắn 1.5 giây cho mỗi chu kỳ dập thân vỏ xe."
      },
      {
        "time": "14:00",
        "title": "Cài đặt thuật toán AI Vision kiểm lỗi sơn",
        "desc": "Huấn luyện camera nhận diện các vết xước siêu nhỏ kích thước dưới 0.1 mm."
      },
      {
        "time": "16:30",
        "title": "Bảo trì phòng ngừa định kỳ",
        "desc": "Kiểm tra mức dầu bôi trơn và thông số nhiệt độ của các cụm biến tần công suất lớn."
      }
    ]
  },
  {
    "id": "vid-life-10",
    "title": "1 Ngày của Luật sư Kinh tế: Tranh tụng hợp đồng triệu đô & Mua bán sáp nhập M&A",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "ngonngu-luat",
    "categoryLabel": "⚖️ Luật & Ngoại Giao",
    "majorId": "luat-kinh-te",
    "majorName": "Luật kinh tế & Thương mại quốc tế",
    "channel": "Người Trong Muôn Nghề",
    "duration": "13:40",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Rà soát điều khoản hợp đồng đầu tư, bảo vệ lợi ích pháp lý cho các doanh nghiệp khi rót vốn.",
      "Đòi hỏi tư duy phản biện sắc bén, khả năng đọc hiểu hàng nghìn trang văn bản luật pháp ngữ cảnh tiếng Anh.",
      "Nghề nghiệp có uy tín xã hội cao và cơ hội mở văn phòng luật sư riêng hoặc làm pháp chế trưởng tập đoàn."
    ],
    "realityCheck": {
      "myth": "Học luật là phải học thuộc lòng từng điều khoản trong sách luật như vẹt.",
      "truth": "Luật sư giỏi không học thuộc lòng luật, mà biết cách tra cứu, giải thích luật và ứng dụng linh hoạt để giải quyết thế bế tắc."
    },
    "hardestChallenge": "Áp lực trách nhiệm pháp lý khổng lồ; một sơ suất trong câu chữ hợp đồng có thể gây tranh chấp pháp lý hàng triệu đô.",
    "salaryInsight": {
      "fresher": "9 – 16 triệu/tháng",
      "mid": "25 – 45 triệu/tháng",
      "senior": "60 – 150+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Thẩm định pháp lý (Legal Due Diligence)",
        "desc": "Rà soát giấy phép đầu tư và tình trạng tranh chấp tài sản của công ty mục tiêu M&A."
      },
      {
        "time": "11:00",
        "title": "Đàm phán hợp đồng cổ đông song ngữ",
        "desc": "Bảo vệ điều khoản cam kết quyền phủ quyết của nhà đầu tư nước ngoài."
      },
      {
        "time": "14:30",
        "title": "Tham gia phiên hòa giải tại VIAC",
        "desc": "Đại diện thân chủ tranh luận trước Hội đồng Trọng tài Thương mại Quốc tế."
      },
      {
        "time": "17:00",
        "title": "Cập nhật các thông tư nghị định mới",
        "desc": "Viết bản tin pháp lý định kỳ gửi các khách hàng doanh nghiệp FDI."
      }
    ]
  },
  {
    "id": "vid-life-11",
    "title": "1 Ngày ở trường quay của Biên tập viên Truyền hình & MC Song ngữ",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "truyenthong",
    "majorName": "Truyền thông đại chúng & Báo chí truyền hình",
    "channel": "VTV24 Tiêu Điểm",
    "duration": "10:15",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Trực tiếp sản xuất bản tin tin tức, biên tập kịch bản phóng sự và dẫn chương trình trực tiếp.",
      "Yêu cầu phản xạ ngôn từ nhanh nhạy, đài từ chuẩn và khả năng xử lý sự cố phát sóng trực tiếp mượt mà.",
      "Mở rộng mối quan hệ xã hội với các chính khách, chuyên gia và nghệ sĩ nổi tiếng."
    ],
    "realityCheck": {
      "myth": "Làm truyền hình chỉ cần ngoại hình đẹp và đọc thuộc máy nhắc chữ (prompter).",
      "truth": "Biên tập viên giỏi phải tự viết kịch bản, tự đi hiện trường lăn lộn săn tin và có bản lĩnh kiểm chứng nguồn tin độc lập."
    },
    "hardestChallenge": "Áp lực giờ phát sóng trực tiếp (Live) không cho phép sai sót dù chỉ 1 giây.",
    "salaryInsight": {
      "fresher": "8 – 15 triệu/tháng",
      "mid": "18 – 35 triệu/tháng",
      "senior": "40 – 80+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "09:00",
        "title": "Họp duyệt đề tài bản tin trưa",
        "desc": "Lựa chọn các sự kiện kinh tế xã hội nóng nhất để phân công phóng viên đi hiện trường."
      },
      {
        "time": "10:30",
        "title": "Biên tập kịch bản trường quay",
        "desc": "Biên tập lời dẫn MC và phối hợp với đạo diễn hình xếp băng phóng sự."
      },
      {
        "time": "11:30",
        "title": "Lên sóng trực tiếp bản tin 12h",
        "desc": "Dẫn chương trình trực tiếp với sự tập trung cao độ trước 4 máy quay."
      },
      {
        "time": "15:00",
        "title": "Dựng hậu kỳ phóng sự điều tra",
        "desc": "Chọn lọc âm thanh, lời bình và hình ảnh cho tiêu điểm tuần."
      }
    ]
  },
  {
    "id": "vid-life-12",
    "title": "1 Ngày đứng lớp đầy cảm hứng của Giáo viên Gen Z thời EdTech",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "supham-gd",
    "categoryLabel": "📚 Sư Phạm & Giáo Dục",
    "majorId": "su-pham-toan",
    "majorName": "Sư phạm Toán & Công nghệ Giáo dục",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "08:50",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Ứng dụng công nghệ tương tác, trò chơi hóa (Gamification) để bài học không còn khô khan.",
      "Người thầy thời đại mới không chỉ truyền đạt kiến thức mà là người khai phóng tiềm năng và cố vấn tâm lý cho học sinh.",
      "Chế độ đãi ngộ Sư phạm được nâng cao với chính sách miễn học phí và trợ cấp sinh hoạt phí từ Nhà nước."
    ],
    "realityCheck": {
      "myth": "Nghề giáo viên nhàn hạ, hết giờ dạy trên lớp là được nghỉ ngơi thoải mái.",
      "truth": "Giáo viên dành phần lớn buổi tối soạn giáo án tương tác, chấm bài, cập nhật phương pháp dạy mới và trao đổi cùng phụ huynh."
    },
    "hardestChallenge": "Duy trì năng lượng tích cực và sự kiên nhẫn khi lớp học có nhiều cá tính học sinh khác biệt.",
    "salaryInsight": {
      "fresher": "7 – 12 triệu/tháng",
      "mid": "15 – 28 triệu/tháng",
      "senior": "30 – 60+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "07:15",
        "title": "Chào đón học sinh đầu giờ",
        "desc": "Khởi động ngày mới với những lời chúc và trò chơi gắn kết 5 phút."
      },
      {
        "time": "08:00",
        "title": "Tiết giảng Toán hình không gian 3D",
        "desc": "Dùng phần mềm GeoGebra và kính thực tế ảo VR giúp học sinh hình dung hình chóp."
      },
      {
        "time": "14:00",
        "title": "Sinh hoạt câu lạc bộ STEM Robotics",
        "desc": "Hướng dẫn các nhóm học sinh lập trình xe dò đường thi đấu cấp trường."
      },
      {
        "time": "16:30",
        "title": "Cố vấn cá nhân cho học sinh lớp 12",
        "desc": "Tư vấn chọn ngành nghề đại học vừa sức dựa trên điểm kiểm tra và sở thích."
      }
    ]
  },
  {
    "id": "vid-life-13",
    "title": "1 Ngày làm việc của Phiên dịch viên Cabin & Chuyên viên Đối ngoại",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "ngonngu-luat",
    "categoryLabel": "⚖️ Luật & Ngoại Giao",
    "majorId": "ngon-ngu-anh",
    "majorName": "Ngôn ngữ Anh & Phiên dịch Cabin",
    "channel": "Spiderum",
    "duration": "11:05",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Dịch song song (Simultaneous Interpreting) trong buồng cabin tại các hội nghị thượng đỉnh quốc tế.",
      "Đòi hỏi não bộ phải xử lý 3 tác vụ cùng lúc: Nghe hiểu ngôn ngữ nguồn, chuyển dịch ý nghĩa và phát âm ngôn ngữ đích trôi chảy.",
      "Thu nhập tính theo giờ hoặc theo ngày thuộc hàng cao nhất trong ngành dịch thuật (từ 5 - 15 triệu/ngày)."
    ],
    "realityCheck": {
      "myth": "Có công cụ AI dịch thuật như ChatGPT hay Google Translate thì phiên dịch viên sẽ thất nghiệp.",
      "truth": "AI chỉ dịch được văn bản cơ bản. Trong hội nghị ngoại giao và đàm phán chính trị, sự nhạy cảm văn hóa, ngữ điệu và sắc thái cá nhân bắt buộc phải có con người."
    },
    "hardestChallenge": "Não bộ phải tập trung 100% không ngừng nghỉ; thường hai phiên dịch viên phải đổi ca cho nhau sau mỗi 20-30 phút trong cabin.",
    "salaryInsight": {
      "fresher": "12 – 20 triệu/tháng",
      "mid": "25 – 50 triệu/tháng",
      "senior": "60 – 120+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:00",
        "title": "Nghiên cứu tài liệu thuật ngữ chuyên ngành",
        "desc": "Đọc trước 150 trang tài liệu kỹ thuật về năng lượng hydro và biến đổi khí hậu."
      },
      {
        "time": "09:30",
        "title": "Bắt đầu phiên dịch Cabin song song",
        "desc": "Đeo tai nghe dịch trực tiếp phát biểu của Tổng thư ký quốc tế cho 500 đại biểu."
      },
      {
        "time": "14:00",
        "title": "Hộ tống dịch đối thoại song phương B2B",
        "desc": "Dịch đàm phán hợp đồng giữa các tập đoàn năng lượng tái tạo."
      },
      {
        "time": "17:00",
        "title": "Tổng kết thuật ngữ vào cơ sở dữ liệu",
        "desc": "Lưu lại các từ viết tắt và khái niệm mới vào từ điển chuyên môn cá nhân."
      }
    ]
  },
  {
    "id": "vid-life-14",
    "title": "1 Ngày nghiên cứu tại Viện Công nghệ Thực phẩm & Đồ uống",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "xanh-nongnghiep",
    "categoryLabel": "🌱 Nông Nghiệp & Kinh Tế Xanh",
    "majorId": "cong-nghe-thuc-pham",
    "majorName": "Công nghệ thực phẩm & Dinh dưỡng",
    "channel": "VTV24 Khoa Giáo",
    "duration": "09:40",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Nghiên cứu công thức thực phẩm dinh dưỡng mới, kiểm nghiệm vệ sinh an toàn và kéo dài hạn sử dụng tự nhiên.",
      "Làm việc tại các tập đoàn thực phẩm hàng đầu như Vinamilk, Nestlé, Masan, CP Group, Heineken.",
      "Ngành công nghiệp thiết yếu của cuộc sống, ít bị ảnh hưởng bởi khủng hoảng kinh tế."
    ],
    "realityCheck": {
      "myth": "Học công nghệ thực phẩm ra làm đầu bếp hoặc nấu ăn.",
      "truth": "Đây là ngành khoa học ứng dụng: Hóa sinh thực phẩm, vi sinh vật học, công nghệ bao bì thông minh và kiểm định chất lượng QA/QC chuẩn quốc tế."
    },
    "hardestChallenge": "Hàng chục mẻ thử nghiệm thất bại liên tiếp trước khi tìm ra công thức bảo quản hương vị tự nhiên đạt chuẩn.",
    "salaryInsight": {
      "fresher": "9 – 14 triệu/tháng",
      "mid": "18 – 30 triệu/tháng",
      "senior": "35 – 70+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khử trùng và chuẩn bị mẫu phòng Lab",
        "desc": "Chuẩn bị các mẫu sữa hạt lên men vi sinh trong điều kiện tiệt trùng."
      },
      {
        "time": "10:30",
        "title": "Đánh giá cảm quan (Sensory Test)",
        "desc": "Mời hội đồng chuyên gia nếm thử độ ngọt, hậu vị và độ mịn của sản phẩm mới."
      },
      {
        "time": "14:00",
        "title": "Phân tích sắc ký khí và vi sinh",
        "desc": "Kiểm tra hàm lượng vitamin và đảm bảo không có vi khuẩn gây hại."
      },
      {
        "time": "16:30",
        "title": "Lập hồ sơ công bố chất lượng sản phẩm",
        "desc": "Hoàn thiện hồ sơ tiêu chuẩn an toàn thực phẩm ISO 22000 và HACCP."
      }
    ]
  },
  {
    "id": "vid-tour-01",
    "title": "Đột nhập Phòng Lab Bán dẫn & Siêu máy tính AI tại ĐH Bách Khoa Hà Nội",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "cntt",
    "majorName": "Khoa học Máy tính & Vi mạch Bách Khoa",
    "channel": "SChannel",
    "duration": "13:20",
    "youtubeId": "xi-TdUo8e60",
    "featured": true,
    "keyTakeaways": [
      "Chiêm ngưỡng hệ thống máy chủ GPU Nvidia H100 chuyên dụng huấn luyện mô hình ngôn ngữ lớn tiếng Việt.",
      "Trải nghiệm phòng sạch Cleanroom thiết kế chip và đo đạc mạch cao tần hàng đầu miền Bắc.",
      "Gặp gỡ các sinh viên Bách Khoa từng vô địch thế giới và nhận học bổng tiến sĩ trực tiếp tại Mỹ."
    ],
    "realityCheck": {
      "myth": "Phòng lab đại học Việt Nam chỉ toàn máy móc cũ kỹ lạc hậu.",
      "truth": "Các trường trọng điểm đã được đầu tư hàng trăm tỷ đồng phòng lab công nghệ cao với sự đồng hành của Samsung, Synopsys, Viettel."
    },
    "hardestChallenge": "Kỳ thi tuyển chọn gắt gao để được nhận vào nhóm nghiên cứu chính thức của các Giáo sư.",
    "salaryInsight": {
      "fresher": "14 – 26 triệu/tháng",
      "mid": "30 – 60 triệu/tháng",
      "senior": "70 – 140+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Check-in Cổng Parabol Bách Khoa",
        "desc": "Khám phá không gian di sản 26 ha giữa lòng Hà Nội."
      },
      {
        "time": "03:30",
        "title": "Bên trong Siêu máy tính AI",
        "desc": "Xem mô hình dịch máy tiếng Việt xử lý 100.000 từ mỗi giây."
      },
      {
        "time": "07:45",
        "title": "Phòng chế tạo robot và xe điện",
        "desc": "Chiêm ngưỡng xe đua sinh viên Formula Student tự chế tạo."
      },
      {
        "time": "11:00",
        "title": "Lời khuyên ôn thi từ Thủ khoa",
        "desc": "Chia sẻ mẹo đạt 28+ điểm khối A00 và vượt qua kỳ thi tư duy TSA."
      }
    ]
  },
  {
    "id": "vid-tour-02",
    "title": "Khám phá Khuôn viên Triệu Đô & Bệnh viện mô phỏng Y khoa tại VinUni",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "ykhoa",
    "majorName": "Y khoa & Điều dưỡng Quốc tế",
    "channel": "Vũ Dino",
    "duration": "15:40",
    "youtubeId": "h8z4eNXbtbE",
    "featured": true,
    "keyTakeaways": [
      "Trung tâm mô phỏng Y khoa quy mô lớn với các robot bệnh nhân có nhịp tim, huyết áp và phản xạ y như người thật.",
      "Thư viện số 24/7 kiến trúc châu Âu tráng lệ và ký túc xá sinh viên chuẩn căn hộ nghỉ dưỡng 5 sao.",
      "Chương trình đào tạo Bác sĩ Y khoa hợp tác cùng Đại học Pennsylvania (UPenn - Top 8 Ivy League)."
    ],
    "realityCheck": {
      "myth": "Trường đại học quốc tế chỉ dành cho con nhà giàu không chịu học hành.",
      "truth": "Học sinh VinUni trải qua vòng tuyển sinh phỏng vấn gắt gao tương đương các trường đại học hàng đầu thế giới với học lực xuất sắc."
    },
    "hardestChallenge": "Áp lực học tập hoàn toàn bằng tiếng Anh chuyên ngành Y sinh với khối lượng tài liệu khổng lồ.",
    "salaryInsight": {
      "fresher": "18 – 35 triệu/tháng",
      "mid": "40 – 80 triệu/tháng",
      "senior": "90 – 200+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Toàn cảnh campus phong cách Gothic",
        "desc": "Dạo bước qua quảng trường lớn và tháp chuông biểu tượng cao 108m."
      },
      {
        "time": "04:15",
        "title": "Trung tâm mô phỏng lâm sàng CEC",
        "desc": "Xem sinh viên Y thực hành đỡ đẻ và cấp cứu sốc phản vệ trên robot."
      },
      {
        "time": "09:00",
        "title": "Bể bơi tiêu chuẩn Olympic và KTX",
        "desc": "Khám phá đời sống sinh hoạt nội trú chuẩn quốc tế."
      },
      {
        "time": "13:00",
        "title": "Phỏng vấn sinh viên giành học bổng 100%",
        "desc": "Bí quyết chuẩn bị bài luận và hồ sơ hoạt động ngoại khóa ấn tượng."
      }
    ]
  },
  {
    "id": "vid-tour-03",
    "title": "Đột nhập Trường quay 4K & Studio Đồ họa Triệu Đô tại ĐH Văn Lang TP.HCM",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "dohoa",
    "majorName": "Thiết kế Đồ họa & Truyền thông Đa phương tiện",
    "channel": "SChannel",
    "duration": "12:50",
    "youtubeId": "CujT81z0vQU",
    "featured": false,
    "keyTakeaways": [
      "Hệ thống trường quay ảo chuẩn điện ảnh, phòng thu âm cách âm chuyên nghiệp và xưởng may thời trang cao cấp.",
      "Cơ sở 3 rộng hơn 5 ha tại Gò Vấp với thiết kế xanh, tòa nhà thông minh và không gian triển lãm nghệ thuật quanh năm.",
      "Môi trường học tập cởi mở, khuyến khích cá tính sáng tạo độc bản của từng sinh viên."
    ],
    "realityCheck": {
      "myth": "Học thiết kế ở trường tư chỉ toàn chơi không có chuyên môn sâu.",
      "truth": "Đồ án sinh viên Văn Lang thường xuyên đoạt giải thưởng thiết kế quốc tế và được các agency săn đón ngay từ năm 3."
    },
    "hardestChallenge": "Chi phí dụng cụ học tập, máy tính cấu hình khủng và chi phí làm đồ án tốt nghiệp khá tốn kém.",
    "salaryInsight": {
      "fresher": "10 – 18 triệu/tháng",
      "mid": "20 – 38 triệu/tháng",
      "senior": "45 – 85+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Campus Cơ sở 3 hoành tráng",
        "desc": "Khám phá hồ bơi vô cực và tòa nhà hành chính ấn tượng."
      },
      {
        "time": "03:45",
        "title": "Phòng máy Apple iMac Retina",
        "desc": "Tham quan xưởng thiết kế đồ họa 3D và dựng phim kỹ xảo VFX."
      },
      {
        "time": "07:30",
        "title": "Studio trường quay phông xanh 4K",
        "desc": "Trải nghiệm hệ thống máy quay điện ảnh và bàn điều khiển ánh sáng."
      },
      {
        "time": "10:45",
        "title": "Triển lãm đồ án sinh viên tốt nghiệp",
        "desc": "Xem các tác phẩm game, hoạt hình 3D và bao bì thương hiệu sáng tạo."
      }
    ]
  },
  {
    "id": "vid-tour-04",
    "title": "1 Ngày tại Làng Đại học Quốc gia TP.HCM: KTX 40.000 chỗ & Hệ sinh thái nghiên cứu",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "cntt",
    "majorName": "Khoa học Máy tính & Kỹ thuật Bách Khoa HCM",
    "channel": "Người Trong Muôn Nghề",
    "duration": "14:10",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá khu đô thị đại học rộng 643 ha lớn nhất Việt Nam với hơn 80.000 sinh viên học tập.",
      "Hệ thống KTX sinh viên lớn nhất Đông Nam Á với chi phí lưu trú siêu tiết kiệm chỉ từ vài trăm nghìn đồng/tháng.",
      "Hệ thống xe buýt điện nội khu kết nối trực tiếp tuyến Metro số 1 Bến Thành - Suối Tiên."
    ],
    "realityCheck": {
      "myth": "Ở KTX đại học đông đúc, thiếu thốn tiện nghi và buồn tẻ.",
      "truth": "KTX ĐHQG TP.HCM có đầy đủ siêu thị, phòng gym, rạp chiếu phim mini, sân bóng đá cỏ nhân tạo và an ninh thẻ từ 24/7."
    },
    "hardestChallenge": "Khoảng cách di chuyển vào trung tâm thành phố giờ cao điểm khá đông đúc.",
    "salaryInsight": {
      "fresher": "12 – 24 triệu/tháng",
      "mid": "26 – 50 triệu/tháng",
      "senior": "60 – 120+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Check-in Nhà Văn hóa Sinh viên",
        "desc": "Tòa nhà hình lục giác biểu tượng với thư viện và sân khấu nghệ thuật."
      },
      {
        "time": "04:20",
        "title": "Bên trong phòng KTX Khu B",
        "desc": "Xem phòng ở 4 người đầy đủ bàn học, ban công thoáng mát và wifi tốc độ cao."
      },
      {
        "time": "08:15",
        "title": "Phòng lab xe tự hành ĐH Bách Khoa",
        "desc": "Sinh viên thử nghiệm thuật toán lidar tránh vật cản tự động."
      },
      {
        "time": "11:30",
        "title": "Ẩm thực chợ đêm Làng Đại học",
        "desc": "Trải nghiệm các món ăn sinh viên ngon bổ rẻ nức tiếng."
      }
    ]
  },
  {
    "id": "vid-tour-05",
    "title": "Đột nhập Sàn Giao Dịch Chứng Khoán Ảo tại ĐH Kinh Tế Quốc Dân (NEU)",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "kinhte-kd",
    "categoryLabel": "📊 Kinh Tế & Kinh Doanh",
    "majorId": "tai-chinh-ngan-hang",
    "majorName": "Tài chính - Ngân hàng & Đầu tư chứng khoán",
    "channel": "Brands Vietnam",
    "duration": "11:45",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Hệ thống bảng điện tử tài chính cập nhật số liệu trực tiếp từ Sở Giao dịch Chứng khoán HoSE và HNX.",
      "Sinh viên được cấp vốn ảo 1 tỷ đồng để thực chiến đầu tư cổ phiếu, trái phiếu và phái sinh ngay trên giảng đường.",
      "Tòa nhà Thế kỷ NEU nổi tiếng với giếng trời khổng lồ và thư viện sang trọng bậc nhất miền Bắc."
    ],
    "realityCheck": {
      "myth": "Học tài chính ngân hàng ở trường chỉ toàn nghe lý thuyết hàn lâm cũ kỹ.",
      "truth": "Sinh viên NEU thực hành phân tích kỹ thuật trên phần mềm Refinitiv Eikon và Bloomberg Terminal chuẩn quốc tế."
    },
    "hardestChallenge": "Áp lực thi đua cạnh tranh thứ hạng lợi nhuận gay gắt trong các cuộc thi đầu tư sinh viên.",
    "salaryInsight": {
      "fresher": "11 – 18 triệu/tháng",
      "mid": "25 – 45 triệu/tháng",
      "senior": "55 – 120+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Check-in Tòa nhà Thế Kỷ NEU",
        "desc": "Khám phá góc check-in sống ảo triệu view của sinh viên Kinh tế Quốc dân."
      },
      {
        "time": "03:40",
        "title": "Bên trong phòng mô phỏng sàn chứng khoán",
        "desc": "Xem sinh viên đọc biểu đồ nến và bắt đáy cổ phiếu theo thời gian thực."
      },
      {
        "time": "07:20",
        "title": "Thư viện Phạm Văn Đồng 4 tầng",
        "desc": "Không gian tự học tĩnh lặng với hàng chục nghìn đầu sách kinh tế kinh điển."
      },
      {
        "time": "10:10",
        "title": "Bí kíp săn học bổng doanh nghiệp",
        "desc": "Chia sẻ kinh nghiệm rèn luyện kỹ năng và tiếng Anh thương mại từ sinh viên năm cuối."
      }
    ]
  },
  {
    "id": "vid-myth-01",
    "title": "Sự thật về ngành Quản trị Kinh doanh: Có phải ra trường làm 'Sếp' ngay?",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "kinhte-kd",
    "categoryLabel": "📊 Kinh Tế & Kinh Doanh",
    "majorId": "kdqt",
    "majorName": "Quản trị kinh doanh & Lãnh đạo",
    "channel": "Spiderum",
    "duration": "13:45",
    "youtubeId": "ne1QCmBw-MI",
    "featured": true,
    "keyTakeaways": [
      "Quản trị kinh doanh trang bị bức tranh tổng thể: Tài chính, Nhân sự, Marketing, Vận hành và Chuỗi cung ứng.",
      "Không ai mới ra trường được bổ nhiệm làm Quản lý hay Sếp ngay nếu chưa từng trải nghiệm công việc thực thi ở vị trí thấp nhất.",
      "Ngành học này chỉ phát huy sức mạnh vượt trội khi bạn tự giác rèn luyện kỹ năng chuyên môn sâu (T-shaped skills) và kỹ năng lãnh đạo bản thân."
    ],
    "realityCheck": {
      "myth": "Học Quản trị kinh doanh cái gì cũng biết nhưng thực ra chẳng biết làm cái gì cụ thể.",
      "truth": "Đây là bệ phóng lãnh đạo: Giúp bạn hiểu ngôn ngữ của mọi bộ phận trong công ty để điều hành chiến lược kinh doanh."
    },
    "hardestChallenge": "Cạnh tranh việc làm ban đầu với các sinh viên học chuyên ngành hẹp (Kế toán, Marketing, Xuất nhập khẩu).",
    "salaryInsight": {
      "fresher": "8 – 13 triệu/tháng",
      "mid": "18 – 35 triệu/tháng",
      "senior": "45 – 100+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Hiểu lầm kinh điển về chữ 'Quản trị'",
        "desc": "Giải mã nguồn gốc của cái tên ngành và kỳ vọng ảo tưởng của nhiều phụ huynh."
      },
      {
        "time": "03:30",
        "title": "Sinh viên QTKD năm nhất học những gì?",
        "desc": "Các môn học nền tảng kinh tế vĩ mô, quản trị học và hành vi tổ chức."
      },
      {
        "time": "07:15",
        "title": "Thực tế tuyển dụng của các tập đoàn",
        "desc": "Nhà tuyển dụng tìm kiếm điều gì ở ứng viên Quản trị Kinh doanh?"
      },
      {
        "time": "10:45",
        "title": "Chiến lược học T-Shaped để không thất nghiệp",
        "desc": "Cách chọn chuyên sâu 1 nghề phụ trợ để bứt phá thu nhập sau khi ra trường."
      }
    ]
  },
  {
    "id": "vid-myth-02",
    "title": "Học Ngôn ngữ thời đại AI dịch thuật: Có sợ thất nghiệp không?",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "ngonngu-luat",
    "categoryLabel": "⚖️ Luật & Ngoại Giao",
    "majorId": "ngon-ngu-anh",
    "majorName": "Ngôn ngữ Anh & Ngôn ngữ ứng dụng",
    "channel": "Vietcetera",
    "duration": "10:55",
    "youtubeId": "ne1QCmBw-MI",
    "featured": true,
    "keyTakeaways": [
      "AI dịch rất nhanh nhưng không hiểu được văn hóa, tiếng lóng, sự châm biếm và cảm xúc tinh tế của con người.",
      "Cơ hội việc làm dịch chuyển từ 'Dịch thuật cơ bản' sang 'Biên tập viên hậu kỳ AI', 'Chuyên viên quan hệ công chúng quốc tế' và 'Quản lý dự án bản địa hóa'.",
      "Học ngôn ngữ ngày nay bắt buộc phải kết hợp với kiến thức chuyên ngành: Kinh tế, Công nghệ, Luật pháp hoặc Sư phạm."
    ],
    "realityCheck": {
      "myth": "Biết tiếng Anh là đủ kiếm tiền, chỉ cần chứng chỉ IELTS 7.5 là xong.",
      "truth": "IELTS chỉ là điều kiện cần. Nhà tuyển dụng cần bạn dùng tiếng Anh để giải quyết một bài toán nghiệp vụ cụ thể của công ty."
    },
    "hardestChallenge": "Áp lực tự động hóa đè nặng lên các công việc dịch thuật văn bản hành chính thông thường.",
    "salaryInsight": {
      "fresher": "9 – 15 triệu/tháng",
      "mid": "20 – 35 triệu/tháng",
      "senior": "40 – 80+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Thực trạng ChatGPT và DeepL dịch thuật",
        "desc": "Đánh giá khả năng dịch tự động và những lỗi ngô nghê về văn cảnh."
      },
      {
        "time": "03:15",
        "title": "Ngôn ngữ học thực chất dạy điều gì?",
        "desc": "Ngữ nghĩa học, âm vị học và thấu cảm tâm lý xã hội đa văn hóa."
      },
      {
        "time": "06:40",
        "title": "Top 5 hướng đi mới cho sinh viên Ngôn ngữ",
        "desc": "Localisation Manager, Content Writer AI, Prompt Specialist và Ngoại giao."
      },
      {
        "time": "09:20",
        "title": "Lời khuyên vàng cho tân sinh viên",
        "desc": "Học thêm một ngoại ngữ thứ hai (Trung, Hàn, Nhật) hoặc kỹ năng kinh doanh số."
      }
    ]
  },
  {
    "id": "vid-myth-03",
    "title": "Sự thật về ngành Y Dược: 6 Năm học tốn kém và áp lực cỡ nào?",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "ykhoa",
    "majorName": "Y khoa & Dược học lâm sàng",
    "channel": "VTV24 Tiêu Điểm",
    "duration": "14:20",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Học phí khối trường Y Dược tự chủ hiện nay dao động từ 40 - 85 triệu/năm, tổng chi phí 6 năm đại học có thể lên tới nửa tỷ đồng.",
      "Lịch thi cử dồn dập với hàng trăm tiêu bản giải phẫu, tên hàng nghìn hoạt chất thuốc và cơ chế bệnh học phức tạp.",
      "Y đức không phải khẩu hiệu sáo rỗng mà là kỷ luật thép bảo vệ tính mạng người bệnh mỗi ngày."
    ],
    "realityCheck": {
      "myth": "Học Y là chắc chắn giàu có và được xã hội trọng vọng sung sướng.",
      "truth": "Nghề Y là nghề phụng sự. Mười năm đầu sau khi tốt nghiệp là giai đoạn cống hiến học việc với mức lương chỉ đủ trang trải sinh hoạt."
    },
    "hardestChallenge": "Hy sinh thanh xuân, không có nhiều thời gian cho sở thích cá nhân và áp lực trách nhiệm trước sinh mệnh con người.",
    "salaryInsight": {
      "fresher": "7 – 12 triệu/tháng",
      "mid": "18 – 35 triệu/tháng",
      "senior": "45 – 120+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Gánh nặng học phí ngành Y thời tự chủ",
        "desc": "Bài toán tài chính mà mỗi gia đình cần chuẩn bị trước khi nộp nguyện vọng."
      },
      {
        "time": "04:10",
        "title": "Áp lực thi cử tại trường Y",
        "desc": "Mùa thi 'chạy bàn' giải phẫu và nỗi sợ thi lại rớt môn kinh điển."
      },
      {
        "time": "08:30",
        "title": "Thực tế thu nhập sau khi nhận bằng Bác sĩ",
        "desc": "Bảng lương công chức bệnh viện công và con đường học tiếp Bác sĩ Nội trú."
      },
      {
        "time": "11:50",
        "title": "Ai thật sự phù hợp với nghề Y?",
        "desc": "Những phẩm chất bắt buộc: Lòng trắc ẩn, tính kiên nhẫn và sức khỏe bền bỉ."
      }
    ]
  },
  {
    "id": "vid-myth-04",
    "title": "Con gái học Kỹ thuật Ô tô & Cơ điện tử: Có vất vả và khó xin việc?",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "kythuat-chetao",
    "categoryLabel": "⚙️ Kỹ Thuật & Tự Động Hóa",
    "majorId": "oto-dien",
    "majorName": "Kỹ thuật Ô tô & Cơ điện tử thông minh",
    "channel": "SChannel",
    "duration": "10:30",
    "youtubeId": "s8ktd86j1Ek",
    "featured": false,
    "keyTakeaways": [
      "Ngành ô tô hiện đại không còn thuần túy cơ khí dầu mỡ mà chuyển mạnh sang Lập trình nhúng (Embedded Automotive), Điện tử công suất và Xe tự hành.",
      "Nữ kỹ sư thường có ưu thế vượt trội về sự tỉ mỉ, khả năng lập trình mô phỏng CAD/CAM và quản lý chất lượng dự án (QA/QC).",
      "Các tập đoàn toàn cầu như Bosch, VinFast, Hyundai luôn có chính sách ưu tiên tuyển dụng nữ kỹ sư công nghệ với học bổng hấp dẫn."
    ],
    "realityCheck": {
      "myth": "Kỹ thuật là sân chơi độc quyền của nam giới, con gái học sẽ ế và khô khan.",
      "truth": "Nữ kỹ sư công nghệ đang là 'của hiếm' được các tập đoàn săn đón với lộ trình thăng tiến thành Trưởng dự án (Project Manager) rất nhanh."
    },
    "hardestChallenge": "Vượt qua định kiến ban đầu của gia đình và áp lực đồ án xưởng thực hành trong năm đầu tiên.",
    "salaryInsight": {
      "fresher": "11 – 18 triệu/tháng",
      "mid": "22 – 40 triệu/tháng",
      "senior": "45 – 90+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Tỷ lệ nữ sinh trong lớp học Kỹ thuật Ô tô",
        "desc": "Phỏng vấn các bạn nữ sinh Bách Khoa và SPKT tự tin theo đuổi đam mê."
      },
      {
        "time": "03:15",
        "title": "Thực hành tại xưởng xe điện VinFast",
        "desc": "Trải nghiệm đo kiểm pin Lithium-ion và hiệu chỉnh động cơ điện xoay chiều."
      },
      {
        "time": "06:45",
        "title": "Cơ hội việc làm tại Bosch & VinFast",
        "desc": "Các vị trí tuyển dụng thiết kế phần mềm ô tô AUTOSAR hấp dẫn."
      },
      {
        "time": "09:00",
        "title": "Lời khuyên cho các bạn nữ mê kỹ thuật",
        "desc": "Tự tin phá vỡ rào cản định kiến và phát huy thế mạnh tư duy chi tiết."
      }
    ]
  },
  {
    "id": "vid-myth-05",
    "title": "Sự thật về Mức Lương IT & Marketing mới ra trường: Có dễ kiếm 1.000 USD?",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "cntt",
    "majorName": "Công nghệ thông tin & Phát triển phần mềm",
    "channel": "Người Trong Muôn Nghề",
    "duration": "12:00",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Thời kỳ 'học xong khóa ngắn hạn 6 tháng là có lương nghìn đô' đã hoàn toàn kết thúc.",
      "Thị trường đang phân hóa mạnh: Lập trình viên cơ bản bị cạnh tranh bởi AI, nhưng Kỹ sư có tư duy thuật toán sâu, tiếng Anh tốt và hiểu bài toán kinh doanh vẫn được trả lương rất cao.",
      "Mức lương khởi điểm thực tế của tân cử nhân IT hiện nay phổ biến ở mức 9 - 15 triệu/tháng, đạt 25 - 40 triệu sau 3-4 năm tích lũy."
    ],
    "realityCheck": {
      "myth": "Cứ chọn ngành IT hoặc Marketing là ra trường auto có lương 20 - 30 triệu ngay tháng đầu tiên.",
      "truth": "Lương khởi điểm phụ thuộc vào năng lực giải quyết vấn đề và sản phẩm thực tế bạn đã làm được trên GitHub/Portfolio, không phụ thuộc vào tấm bằng."
    },
    "hardestChallenge": "Cạnh tranh vị trí Fresher/Junior vô cùng khốc liệt với yêu cầu đầu vào ngày càng cao.",
    "salaryInsight": {
      "fresher": "9 – 15 triệu/tháng",
      "mid": "20 – 38 triệu/tháng",
      "senior": "45 – 100+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Bão sa thải công nghệ toàn cầu và tác động",
        "desc": "Phân tích số liệu tuyển dụng IT tại Việt Nam năm 2024 - 2026."
      },
      {
        "time": "03:30",
        "title": "Bảng khảo sát lương thực tế từ 500 nhà tuyển dụng",
        "desc": "Mức lương thực tế của Fresher, Junior và Senior qua các năm."
      },
      {
        "time": "07:15",
        "title": "Những kỹ năng giúp bạn đàm phán lương cao",
        "desc": "Khả năng làm việc với AI Copilot, Cloud AWS/GCP và giao tiếp tiếng Anh."
      },
      {
        "time": "10:00",
        "title": "Lộ trình xây dựng Portfolio ấn tượng",
        "desc": "Cách đưa đồ án thực tế lên GitHub để thuyết phục nhà tuyển dụng trong 3 phút."
      }
    ]
  },
  {
    "id": "vid-ai-01",
    "title": "Kỹ sư Công nghệ Tài chính (Fintech): Cơn khát nhân lực tại các Ngân hàng số",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "kinhte-kd",
    "categoryLabel": "📊 Kinh Tế & Kinh Doanh",
    "majorId": "tai-chinh-ngan-hang",
    "majorName": "Fintech & Công nghệ Ngân hàng số",
    "channel": "Brands Vietnam",
    "duration": "10:40",
    "youtubeId": "wO2qaeE8FTA",
    "featured": true,
    "keyTakeaways": [
      "Ngành lai kết hợp giữa Tài chính ngân hàng + Khoa học máy tính + Bảo mật Blockchain.",
      "Xây dựng ví điện tử thông minh, chấm điểm tín dụng tự động bằng AI và bảo mật sinh trắc học mống mắt.",
      "Mức lương khởi điểm cao hơn ngành ngân hàng truyền thống 30-50% do nguồn nhân lực lai cực kỳ khan hiếm."
    ],
    "realityCheck": {
      "myth": "Làm Fintech phải vừa là chuyên gia tài chính vừa là coder siêu việt.",
      "truth": "Fintech có nhiều vị trí: Product Owner Fintech, Chuyên viên phân tích dữ liệu rủi ro gian lận, Kỹ sư tích hợp cổng thanh toán."
    },
    "hardestChallenge": "Phải nắm vững quy định pháp lý an toàn an ninh mạng ngân hàng cực kỳ khắt khe của Ngân hàng Nhà nước.",
    "salaryInsight": {
      "fresher": "14 – 24 triệu/tháng",
      "mid": "30 – 55 triệu/tháng",
      "senior": "65 – 130+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Xu hướng thanh toán không tiền mặt và quét mã QR",
        "desc": "Sự bùng nổ của các ứng dụng ngân hàng số tại Việt Nam."
      },
      {
        "time": "03:10",
        "title": "Bên trong trung tâm dữ liệu Fintech",
        "desc": "Xem thuật toán AI phát hiện giao dịch lừa đảo trong 0.2 giây."
      },
      {
        "time": "06:30",
        "title": "Học trường nào để làm Fintech?",
        "desc": "Các chương trình đào tạo Fintech tại NEU, HUB, UEH, UEL, Bách Khoa."
      },
      {
        "time": "09:00",
        "title": "Lộ trình nghề nghiệp 5 năm",
        "desc": "Từ Junior Developer đến Giám đốc Sản phẩm Tài chính số (Head of Fintech)."
      }
    ]
  },
  {
    "id": "vid-ai-02",
    "title": "Chuyên gia Kinh tế Xanh & Tín chỉ Carbon (ESG Specialist): Nghề triệu đô mới",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "xanh-nongnghiep",
    "categoryLabel": "🌱 Nông Nghiệp & Kinh Tế Xanh",
    "majorId": "moi-truong",
    "majorName": "Kinh tế Môi trường & Quản trị ESG Xanh",
    "channel": "Vietcetera",
    "duration": "12:30",
    "youtubeId": "ne1QCmBw-MI",
    "featured": true,
    "keyTakeaways": [
      "Tất cả các tập đoàn xuất khẩu sang châu Âu và Mỹ bắt buộc phải có chuyên gia đo lường dấu chân Carbon và báo cáo phát triển bền vững (ESG).",
      "Định giá và giao dịch tín chỉ carbon từ các dự án rừng trồng, năng lượng mặt trời và nông nghiệp phát thải thấp.",
      "Ngành nghề mới toanh với cơ hội làm việc trực tiếp cùng các tổ chức tài chính quốc tế như Ngân hàng Thế giới (WB) và IFC."
    ],
    "realityCheck": {
      "myth": "Học ngành môi trường chỉ đi nhặt rác hoặc làm công việc công ích thu nhập thấp.",
      "truth": "Chuyên gia ESG là nhân sự chiến lược cấp cao tư vấn cho Hội đồng Quản trị cách tiếp cận nguồn vốn xanh hàng trăm triệu USD."
    },
    "hardestChallenge": "Hệ thống tiêu chuẩn quốc tế (GRI, CBAM) thay đổi liên tục đòi hỏi đọc hiểu tài liệu ngoại ngữ dày đặc.",
    "salaryInsight": {
      "fresher": "12 – 20 triệu/tháng",
      "mid": "28 – 50 triệu/tháng",
      "senior": "60 – 120+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Cơ chế thuế Carbon CBAM của Châu Âu",
        "desc": "Tại sao các doanh nghiệp Việt Nam buộc phải chuyển đổi xanh gấp?"
      },
      {
        "time": "03:40",
        "title": "Cách tính toán tín chỉ Carbon thực tế",
        "desc": "Đo lường lượng khí nhà kính hấp thụ của một cánh rừng keo tại Tây Nguyên."
      },
      {
        "time": "07:15",
        "title": "Mô phỏng sàn giao dịch Carbon quốc gia",
        "desc": "Cơ chế mua bán chứng chỉ giảm phát thải giữa các nhà máy thép và dệt may."
      },
      {
        "time": "10:20",
        "title": "Lời khuyên ngành học phù hợp",
        "desc": "Kết hợp giữa ngành Quản lý Môi trường, Kinh tế Quốc tế và Luật."
      }
    ]
  },
  {
    "id": "vid-ai-03",
    "title": "Kỹ thuật Hàng không & Khai phá Không gian: Kỹ sư bảo dưỡng máy bay",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "kythuat-chetao",
    "categoryLabel": "⚙️ Kỹ Thuật & Tự Động Hóa",
    "majorId": "hang-khong",
    "majorName": "Kỹ thuật Hàng không & Vũ trụ",
    "channel": "VTV24 Khoa Giáo",
    "duration": "11:20",
    "youtubeId": "xi-TdUo8e60",
    "featured": false,
    "keyTakeaways": [
      "Bảo dưỡng động cơ phản lực Rolls-Royce / GE, kiểm tra hệ thống điện tử hàng không (Avionics) của Boeing và Airbus.",
      "Cơ hội làm việc tại các hãng hàng không hàng đầu (Vietnam Airlines, Vietjet, Bamboo) và các xưởng sửa chữa quốc tế VAECO.",
      "Yêu cầu chứng chỉ chứng nhận thợ máy tàu bay chuẩn quốc tế FAA / EASA / CAAV."
    ],
    "realityCheck": {
      "myth": "Học ngành hàng không là ra làm phi công lái máy bay.",
      "truth": "Kỹ sư hàng không là 'bác sĩ của những cỗ máy bay': Đảm bảo an toàn tuyệt đối cho mỗi chuyến bay cất cánh an toàn."
    },
    "hardestChallenge": "Kỷ luật an toàn hàng không cực kỳ nghiêm ngặt; làm việc theo ca đêm tại sân bay trong điều kiện thời tiết khắc nghiệt.",
    "salaryInsight": {
      "fresher": "12 – 20 triệu/tháng",
      "mid": "25 – 45 triệu/tháng",
      "senior": "50 – 110+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Bên trong hangar bảo dưỡng máy bay A350",
        "desc": "Khám phá xưởng bảo dưỡng khổng lồ tại sân bay Nội Bài / Tân Sơn Nhất."
      },
      {
        "time": "03:30",
        "title": "Nội soi cánh quạt động cơ phản lực",
        "desc": "Dùng camera nội soi chuyên dụng phát hiện vi nứt trên lá cánh turbine."
      },
      {
        "time": "07:00",
        "title": "Hệ thống radar và điều khiển bay Fly-by-wire",
        "desc": "Kiểm tra tín hiệu liên lạc vệ tinh và hệ thống chống va chạm TCAS."
      },
      {
        "time": "09:40",
        "title": "Lộ trình lấy chứng chỉ tàu bay mức B1/B2",
        "desc": "Các kỳ thi chứng chỉ chuyên ngành hàng không quốc tế."
      }
    ]
  },
  {
    "id": "vid-ai-04",
    "title": "Y tế Số (Digital Healthcare): Khi Bác sĩ kết hợp cùng Trí tuệ Nhân tạo",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "y-sinh",
    "majorName": "Kỹ thuật Y sinh & Công nghệ Y tế số",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "10:10",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Ứng dụng AI phân tích ảnh chụp X-quang, MRI để phát hiện sớm khối u ung thư với độ chính xác trên 98%.",
      "Vận hành và chế tạo các thiết bị y tế thông minh đeo trên người (Wearable devices) theo dõi sức khỏe liên tục.",
      "Ngành giao thoa đầy nhân văn giữa Y học lâm sàng và Kỹ thuật công nghệ điện tử."
    ],
    "realityCheck": {
      "myth": "AI sẽ thay thế hoàn toàn bác sĩ trong việc chẩn đoán và chữa bệnh.",
      "truth": "AI là trợ thủ đắc lực giúp bác sĩ đọc phim nhanh gấp 10 lần, nhưng quyền quyết định phác đồ điều trị và sự an ủi tinh thần thuộc về bác sĩ."
    },
    "hardestChallenge": "Quy trình thử nghiệm lâm sàng kéo dài và yêu cầu bảo mật thông tin hồ sơ bệnh án cực kỳ chặt chẽ.",
    "salaryInsight": {
      "fresher": "12 – 22 triệu/tháng",
      "mid": "25 – 48 triệu/tháng",
      "senior": "55 – 110+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Cơn sốt AI trong chẩn đoán hình ảnh y khoa",
        "desc": "Xem phần mềm VinDr phát hiện 10 bệnh lý phổi trong 1 giây."
      },
      {
        "time": "03:15",
        "title": "Thiết bị phẫu thuật nội soi cánh tay Robot",
        "desc": "Khám phá phòng mổ công nghệ cao tại các bệnh viện tuyến đầu."
      },
      {
        "time": "06:30",
        "title": "Cơ hội việc làm Kỹ sư Y sinh tại Việt Nam",
        "desc": "Làm việc tại các hãng thiết bị y tế hàng đầu (GE Healthcare, Siemens Healthineers)."
      },
      {
        "time": "08:45",
        "title": "Các trường đào tạo Kỹ thuật Y sinh uy tín",
        "desc": "Bách Khoa Hà Nội, ĐH Quốc tế ĐHQG-HCM, Bách Khoa Đà Nẵng."
      }
    ]
  },
  {
    "id": "vid-ai-05",
    "title": "Thương mại Điện tử Xuyên Biên Giới (Cross-border E-commerce): Bán hàng toàn cầu",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "kinhte-kd",
    "categoryLabel": "📊 Kinh Tế & Kinh Doanh",
    "majorId": "thuong-mai-dien-tu",
    "majorName": "Thương mại điện tử & Kinh doanh số toàn cầu",
    "channel": "Brands Vietnam",
    "duration": "09:50",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Đưa sản phẩm Made-in-Vietnam (nông sản, thủ công mỹ nghệ, đồ da) bán trực tiếp cho khách hàng Mỹ và Châu Âu qua Amazon, TikTok Shop US, Etsy.",
      "Tối ưu hóa kho vận hoàn tất đơn hàng quốc tế (Fulfillment by Amazon - FBA) và thanh toán xuyên biên giới.",
      "Cơ hội xây dựng thương hiệu triệu đô từ phòng ngủ với quy mô văn phòng tinh gọn."
    ],
    "realityCheck": {
      "myth": "Bán hàng online chỉ là công việc tự phát của những người không có bằng cấp.",
      "truth": "E-commerce xuyên biên giới hiện nay đòi hỏi chuyên môn sâu về Nghiên cứu sản phẩm (Product Research), Quảng cáo đấu thầu số và Tối ưu hóa chuỗi cung ứng toàn cầu."
    },
    "hardestChallenge": "Rủi ro chính sách tài khoản bán hàng bị khóa đột ngột và chi phí vận chuyển quốc tế biến động.",
    "salaryInsight": {
      "fresher": "10 – 18 triệu/tháng",
      "mid": "22 – 45 triệu/tháng",
      "senior": "50 – 150+ triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "00:00",
        "title": "Làn sóng xuất khẩu hàng hóa qua Amazon & TikTok Shop",
        "desc": "Câu chuyện thành công của các thương hiệu Việt Nam trên trường quốc tế."
      },
      {
        "time": "03:00",
        "title": "Quy trình tìm kiếm sản phẩm 'Winning Product'",
        "desc": "Dùng công cụ phân tích dữ liệu thị trường tìm ngách hàng hóa tiềm năng."
      },
      {
        "time": "05:45",
        "title": "Vận hành chiến dịch quảng cáo PPC toàn cầu",
        "desc": "Chạy quảng cáo từ khóa cho khách hàng tại các bang của Hoa Kỳ."
      },
      {
        "time": "08:15",
        "title": "Bí quyết học tập ngành Thương mại điện tử",
        "desc": "Rèn luyện ngoại ngữ tiếng Anh, tư duy dữ liệu và nhạy bén thương mại."
      }
    ]
  },
  {
    "id": "vid-gen-16",
    "title": "1 Ngày làm việc thực tế của An ninh mạng & Phòng chống Tội phạm công nghệ",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "cntt",
    "majorName": "An ninh mạng & Phòng chống Tội phạm công nghệ",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "10:28",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của An ninh mạng & Phòng chống Tội phạm công nghệ trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học An ninh mạng & Phòng chống Tội phạm công nghệ chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "9 – 18 triệu/tháng",
      "mid": "24 – 39 triệu/tháng",
      "senior": "56 – 101 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-17",
    "title": "Đột nhập phòng thí nghiệm & Giảng đường ngành An ninh mạng & Phòng chống Tội phạm công nghệ",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "cntt",
    "majorName": "An ninh mạng & Phòng chống Tội phạm công nghệ",
    "channel": "Người Trong Muôn Nghề",
    "duration": "11:41",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của An ninh mạng & Phòng chống Tội phạm công nghệ trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học An ninh mạng & Phòng chống Tội phạm công nghệ chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "10 – 19 triệu/tháng",
      "mid": "25 – 40 triệu/tháng",
      "senior": "57 – 102 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-18",
    "title": "Góc khuất và những hiểu lầm lớn nhất về ngành An ninh mạng & Phòng chống Tội phạm công nghệ",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "cntt",
    "majorName": "An ninh mạng & Phòng chống Tội phạm công nghệ",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "12:54",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của An ninh mạng & Phòng chống Tội phạm công nghệ trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học An ninh mạng & Phòng chống Tội phạm công nghệ chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "11 – 14 triệu/tháng",
      "mid": "26 – 41 triệu/tháng",
      "senior": "58 – 103 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-19",
    "title": "Cơ hội việc làm đón đầu kỷ nguyên AI ngành An ninh mạng & Phòng chống Tội phạm công nghệ",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "cntt",
    "majorName": "An ninh mạng & Phòng chống Tội phạm công nghệ",
    "channel": "Người Trong Muôn Nghề",
    "duration": "13:07",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của An ninh mạng & Phòng chống Tội phạm công nghệ trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học An ninh mạng & Phòng chống Tội phạm công nghệ chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "12 – 15 triệu/tháng",
      "mid": "27 – 42 triệu/tháng",
      "senior": "59 – 104 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-20",
    "title": "1 Ngày làm việc thực tế của Kiểm thử & Đóng gói Vi mạch Bán dẫn",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "vi-mach",
    "majorName": "Kiểm thử & Đóng gói Vi mạch Bán dẫn",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "14:20",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Kiểm thử & Đóng gói Vi mạch Bán dẫn trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Kiểm thử & Đóng gói Vi mạch Bán dẫn chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "8 – 16 triệu/tháng",
      "mid": "18 – 43 triệu/tháng",
      "senior": "40 – 105 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-21",
    "title": "Đột nhập phòng thí nghiệm & Giảng đường ngành Kiểm thử & Đóng gói Vi mạch Bán dẫn",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "vi-mach",
    "majorName": "Kiểm thử & Đóng gói Vi mạch Bán dẫn",
    "channel": "Người Trong Muôn Nghề",
    "duration": "08:33",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Kiểm thử & Đóng gói Vi mạch Bán dẫn trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Kiểm thử & Đóng gói Vi mạch Bán dẫn chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "9 – 17 triệu/tháng",
      "mid": "19 – 44 triệu/tháng",
      "senior": "41 – 106 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-22",
    "title": "Góc khuất và những hiểu lầm lớn nhất về ngành Kiểm thử & Đóng gói Vi mạch Bán dẫn",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "vi-mach",
    "majorName": "Kiểm thử & Đóng gói Vi mạch Bán dẫn",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "09:46",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Kiểm thử & Đóng gói Vi mạch Bán dẫn trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Kiểm thử & Đóng gói Vi mạch Bán dẫn chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "10 – 18 triệu/tháng",
      "mid": "20 – 45 triệu/tháng",
      "senior": "42 – 107 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-23",
    "title": "Cơ hội việc làm đón đầu kỷ nguyên AI ngành Kiểm thử & Đóng gói Vi mạch Bán dẫn",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "vi-mach",
    "majorName": "Kiểm thử & Đóng gói Vi mạch Bán dẫn",
    "channel": "Người Trong Muôn Nghề",
    "duration": "10:59",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Kiểm thử & Đóng gói Vi mạch Bán dẫn trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Kiểm thử & Đóng gói Vi mạch Bán dẫn chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "11 – 19 triệu/tháng",
      "mid": "21 – 46 triệu/tháng",
      "senior": "43 – 108 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-24",
    "title": "1 Ngày làm việc thực tế của Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "khdl",
    "majorName": "Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "11:12",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "12 – 14 triệu/tháng",
      "mid": "22 – 35 triệu/tháng",
      "senior": "44 – 109 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-25",
    "title": "Đột nhập phòng thí nghiệm & Giảng đường ngành Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "khdl",
    "majorName": "Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng",
    "channel": "Người Trong Muôn Nghề",
    "duration": "12:25",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "8 – 15 triệu/tháng",
      "mid": "23 – 36 triệu/tháng",
      "senior": "45 – 110 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-26",
    "title": "Góc khuất và những hiểu lầm lớn nhất về ngành Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "khdl",
    "majorName": "Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "13:38",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "9 – 16 triệu/tháng",
      "mid": "24 – 37 triệu/tháng",
      "senior": "46 – 111 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-27",
    "title": "Cơ hội việc làm đón đầu kỷ nguyên AI ngành Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "cntt-ai",
    "categoryLabel": "💻 CNTT & AI",
    "majorId": "khdl",
    "majorName": "Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng",
    "channel": "Người Trong Muôn Nghề",
    "duration": "14:51",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Data Engineer: Xây dựng đường ống dữ liệu tỷ dòng chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "10 – 17 triệu/tháng",
      "mid": "25 – 38 triệu/tháng",
      "senior": "47 – 112 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-28",
    "title": "1 Ngày làm việc thực tế của Chuyên viên Quan hệ Công chúng (PR Event Lead)",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "marketing",
    "majorName": "Chuyên viên Quan hệ Công chúng (PR Event Lead)",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "08:04",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Chuyên viên Quan hệ Công chúng (PR Event Lead) trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Chuyên viên Quan hệ Công chúng (PR Event Lead) chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "11 – 18 triệu/tháng",
      "mid": "26 – 39 triệu/tháng",
      "senior": "48 – 113 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-29",
    "title": "Đột nhập phòng thí nghiệm & Giảng đường ngành Chuyên viên Quan hệ Công chúng (PR Event Lead)",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "marketing",
    "majorName": "Chuyên viên Quan hệ Công chúng (PR Event Lead)",
    "channel": "Người Trong Muôn Nghề",
    "duration": "09:17",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Chuyên viên Quan hệ Công chúng (PR Event Lead) trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Chuyên viên Quan hệ Công chúng (PR Event Lead) chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "12 – 19 triệu/tháng",
      "mid": "27 – 40 triệu/tháng",
      "senior": "49 – 114 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-30",
    "title": "Góc khuất và những hiểu lầm lớn nhất về ngành Chuyên viên Quan hệ Công chúng (PR Event Lead)",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "marketing",
    "majorName": "Chuyên viên Quan hệ Công chúng (PR Event Lead)",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "10:30",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Chuyên viên Quan hệ Công chúng (PR Event Lead) trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Chuyên viên Quan hệ Công chúng (PR Event Lead) chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "8 – 14 triệu/tháng",
      "mid": "18 – 41 triệu/tháng",
      "senior": "50 – 115 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-31",
    "title": "Cơ hội việc làm đón đầu kỷ nguyên AI ngành Chuyên viên Quan hệ Công chúng (PR Event Lead)",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "marketing",
    "majorName": "Chuyên viên Quan hệ Công chúng (PR Event Lead)",
    "channel": "Người Trong Muôn Nghề",
    "duration": "11:43",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Chuyên viên Quan hệ Công chúng (PR Event Lead) trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Chuyên viên Quan hệ Công chúng (PR Event Lead) chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "9 – 15 triệu/tháng",
      "mid": "19 – 42 triệu/tháng",
      "senior": "51 – 116 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-32",
    "title": "1 Ngày làm việc thực tế của Kỹ xảo Điện ảnh VFX & Hoạt hình 3D",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "dohoa",
    "majorName": "Kỹ xảo Điện ảnh VFX & Hoạt hình 3D",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "12:56",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Kỹ xảo Điện ảnh VFX & Hoạt hình 3D trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Kỹ xảo Điện ảnh VFX & Hoạt hình 3D chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "10 – 16 triệu/tháng",
      "mid": "20 – 43 triệu/tháng",
      "senior": "52 – 117 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-33",
    "title": "Đột nhập phòng thí nghiệm & Giảng đường ngành Kỹ xảo Điện ảnh VFX & Hoạt hình 3D",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "dohoa",
    "majorName": "Kỹ xảo Điện ảnh VFX & Hoạt hình 3D",
    "channel": "Người Trong Muôn Nghề",
    "duration": "13:09",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Kỹ xảo Điện ảnh VFX & Hoạt hình 3D trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Kỹ xảo Điện ảnh VFX & Hoạt hình 3D chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "11 – 17 triệu/tháng",
      "mid": "21 – 44 triệu/tháng",
      "senior": "53 – 118 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-34",
    "title": "Góc khuất và những hiểu lầm lớn nhất về ngành Kỹ xảo Điện ảnh VFX & Hoạt hình 3D",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "dohoa",
    "majorName": "Kỹ xảo Điện ảnh VFX & Hoạt hình 3D",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "14:22",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Kỹ xảo Điện ảnh VFX & Hoạt hình 3D trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Kỹ xảo Điện ảnh VFX & Hoạt hình 3D chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "12 – 18 triệu/tháng",
      "mid": "22 – 45 triệu/tháng",
      "senior": "54 – 119 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-35",
    "title": "Cơ hội việc làm đón đầu kỷ nguyên AI ngành Kỹ xảo Điện ảnh VFX & Hoạt hình 3D",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "dohoa",
    "majorName": "Kỹ xảo Điện ảnh VFX & Hoạt hình 3D",
    "channel": "Người Trong Muôn Nghề",
    "duration": "08:35",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Kỹ xảo Điện ảnh VFX & Hoạt hình 3D trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Kỹ xảo Điện ảnh VFX & Hoạt hình 3D chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "8 – 19 triệu/tháng",
      "mid": "23 – 46 triệu/tháng",
      "senior": "55 – 120 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-36",
    "title": "1 Ngày làm việc thực tế của Kiến trúc sư Công trình Xanh & Thông minh",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "kientruc",
    "majorName": "Kiến trúc sư Công trình Xanh & Thông minh",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "09:48",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Kiến trúc sư Công trình Xanh & Thông minh trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Kiến trúc sư Công trình Xanh & Thông minh chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "9 – 14 triệu/tháng",
      "mid": "24 – 35 triệu/tháng",
      "senior": "56 – 121 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-37",
    "title": "Đột nhập phòng thí nghiệm & Giảng đường ngành Kiến trúc sư Công trình Xanh & Thông minh",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "kientruc",
    "majorName": "Kiến trúc sư Công trình Xanh & Thông minh",
    "channel": "Người Trong Muôn Nghề",
    "duration": "10:01",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Kiến trúc sư Công trình Xanh & Thông minh trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Kiến trúc sư Công trình Xanh & Thông minh chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "10 – 15 triệu/tháng",
      "mid": "25 – 36 triệu/tháng",
      "senior": "57 – 122 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-38",
    "title": "Góc khuất và những hiểu lầm lớn nhất về ngành Kiến trúc sư Công trình Xanh & Thông minh",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "kientruc",
    "majorName": "Kiến trúc sư Công trình Xanh & Thông minh",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "11:14",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Kiến trúc sư Công trình Xanh & Thông minh trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Kiến trúc sư Công trình Xanh & Thông minh chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "11 – 16 triệu/tháng",
      "mid": "26 – 37 triệu/tháng",
      "senior": "58 – 123 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-39",
    "title": "Cơ hội việc làm đón đầu kỷ nguyên AI ngành Kiến trúc sư Công trình Xanh & Thông minh",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "truyenthong-design",
    "categoryLabel": "🎨 Thiết Kế & Nghệ Thuật",
    "majorId": "kientruc",
    "majorName": "Kiến trúc sư Công trình Xanh & Thông minh",
    "channel": "Người Trong Muôn Nghề",
    "duration": "12:27",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Kiến trúc sư Công trình Xanh & Thông minh trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Kiến trúc sư Công trình Xanh & Thông minh chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "12 – 17 triệu/tháng",
      "mid": "27 – 38 triệu/tháng",
      "senior": "59 – 124 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-40",
    "title": "1 Ngày làm việc thực tế của Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "ykhoa",
    "majorName": "Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "13:40",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "8 – 18 triệu/tháng",
      "mid": "18 – 39 triệu/tháng",
      "senior": "40 – 85 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-41",
    "title": "Đột nhập phòng thí nghiệm & Giảng đường ngành Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "ykhoa",
    "majorName": "Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa",
    "channel": "Người Trong Muôn Nghề",
    "duration": "14:53",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "9 – 19 triệu/tháng",
      "mid": "19 – 40 triệu/tháng",
      "senior": "41 – 86 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-42",
    "title": "Góc khuất và những hiểu lầm lớn nhất về ngành Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "ykhoa",
    "majorName": "Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "08:06",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "10 – 14 triệu/tháng",
      "mid": "20 – 41 triệu/tháng",
      "senior": "42 – 87 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-43",
    "title": "Cơ hội việc làm đón đầu kỷ nguyên AI ngành Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "ykhoa",
    "majorName": "Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa",
    "channel": "Người Trong Muôn Nghề",
    "duration": "09:19",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Bác sĩ Răng - Hàm - Mặt & Thẩm mỹ nha khoa chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "11 – 15 triệu/tháng",
      "mid": "21 – 42 triệu/tháng",
      "senior": "43 – 88 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-44",
    "title": "1 Ngày làm việc thực tế của Dược sĩ nghiên cứu & Phát triển sản phẩm R&D",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "duoc",
    "majorName": "Dược sĩ nghiên cứu & Phát triển sản phẩm R&D",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "10:32",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Dược sĩ nghiên cứu & Phát triển sản phẩm R&D trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Dược sĩ nghiên cứu & Phát triển sản phẩm R&D chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "12 – 16 triệu/tháng",
      "mid": "22 – 43 triệu/tháng",
      "senior": "44 – 89 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-45",
    "title": "Đột nhập phòng thí nghiệm & Giảng đường ngành Dược sĩ nghiên cứu & Phát triển sản phẩm R&D",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "duoc",
    "majorName": "Dược sĩ nghiên cứu & Phát triển sản phẩm R&D",
    "channel": "Người Trong Muôn Nghề",
    "duration": "11:45",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Dược sĩ nghiên cứu & Phát triển sản phẩm R&D trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Dược sĩ nghiên cứu & Phát triển sản phẩm R&D chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "8 – 17 triệu/tháng",
      "mid": "23 – 44 triệu/tháng",
      "senior": "45 – 90 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-46",
    "title": "Góc khuất và những hiểu lầm lớn nhất về ngành Dược sĩ nghiên cứu & Phát triển sản phẩm R&D",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "duoc",
    "majorName": "Dược sĩ nghiên cứu & Phát triển sản phẩm R&D",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "12:58",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Dược sĩ nghiên cứu & Phát triển sản phẩm R&D trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Dược sĩ nghiên cứu & Phát triển sản phẩm R&D chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "9 – 18 triệu/tháng",
      "mid": "24 – 45 triệu/tháng",
      "senior": "46 – 91 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-47",
    "title": "Cơ hội việc làm đón đầu kỷ nguyên AI ngành Dược sĩ nghiên cứu & Phát triển sản phẩm R&D",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "duoc",
    "majorName": "Dược sĩ nghiên cứu & Phát triển sản phẩm R&D",
    "channel": "Người Trong Muôn Nghề",
    "duration": "13:11",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Dược sĩ nghiên cứu & Phát triển sản phẩm R&D trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Dược sĩ nghiên cứu & Phát triển sản phẩm R&D chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "10 – 19 triệu/tháng",
      "mid": "25 – 46 triệu/tháng",
      "senior": "47 – 92 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-48",
    "title": "1 Ngày làm việc thực tế của Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "dieuduong",
    "majorName": "Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "14:24",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "11 – 14 triệu/tháng",
      "mid": "26 – 35 triệu/tháng",
      "senior": "48 – 93 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-49",
    "title": "Đột nhập phòng thí nghiệm & Giảng đường ngành Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "dieuduong",
    "majorName": "Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức",
    "channel": "Người Trong Muôn Nghề",
    "duration": "08:37",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "12 – 15 triệu/tháng",
      "mid": "27 – 36 triệu/tháng",
      "senior": "49 – 94 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-50",
    "title": "Góc khuất và những hiểu lầm lớn nhất về ngành Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "dieuduong",
    "majorName": "Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "09:50",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "8 – 16 triệu/tháng",
      "mid": "18 – 37 triệu/tháng",
      "senior": "50 – 95 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-51",
    "title": "Cơ hội việc làm đón đầu kỷ nguyên AI ngành Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức",
    "series": "ai-era-careers",
    "seriesLabel": "🚀 Bản Đồ Nghề Mới 2026 - 2030",
    "category": "yduoc-suckhoe",
    "categoryLabel": "🩺 Y Dược & Sức Khỏe",
    "majorId": "dieuduong",
    "majorName": "Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức",
    "channel": "Người Trong Muôn Nghề",
    "duration": "10:03",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Điều dưỡng viên Quốc tế tại Nhật Bản & CHLB Đức chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "9 – 17 triệu/tháng",
      "mid": "19 – 38 triệu/tháng",
      "senior": "51 – 96 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-52",
    "title": "1 Ngày làm việc thực tế của Quản lý Vận hành Khách sạn - Resort 5 sao",
    "series": "a-day-in-life",
    "seriesLabel": "🎬 1 Ngày Làm Nghề",
    "category": "kinhte-kd",
    "categoryLabel": "📊 Kinh Tế & Kinh Doanh",
    "majorId": "kdqt",
    "majorName": "Quản lý Vận hành Khách sạn - Resort 5 sao",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "11:16",
    "youtubeId": "ne1QCmBw-MI",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Quản lý Vận hành Khách sạn - Resort 5 sao trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Quản lý Vận hành Khách sạn - Resort 5 sao chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "10 – 18 triệu/tháng",
      "mid": "20 – 39 triệu/tháng",
      "senior": "52 – 97 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-53",
    "title": "Đột nhập phòng thí nghiệm & Giảng đường ngành Quản lý Vận hành Khách sạn - Resort 5 sao",
    "series": "campus-tour",
    "seriesLabel": "🏫 Campus & Lab Tour",
    "category": "kinhte-kd",
    "categoryLabel": "📊 Kinh Tế & Kinh Doanh",
    "majorId": "kdqt",
    "majorName": "Quản lý Vận hành Khách sạn - Resort 5 sao",
    "channel": "Người Trong Muôn Nghề",
    "duration": "12:29",
    "youtubeId": "h8z4eNXbtbE",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Quản lý Vận hành Khách sạn - Resort 5 sao trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Quản lý Vận hành Khách sạn - Resort 5 sao chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "11 – 19 triệu/tháng",
      "mid": "21 – 40 triệu/tháng",
      "senior": "53 – 98 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  },
  {
    "id": "vid-gen-54",
    "title": "Góc khuất và những hiểu lầm lớn nhất về ngành Quản lý Vận hành Khách sạn - Resort 5 sao",
    "series": "reality-check",
    "seriesLabel": "⚠️ Sự Thật Người Trong Nghề",
    "category": "kinhte-kd",
    "categoryLabel": "📊 Kinh Tế & Kinh Doanh",
    "majorId": "kdqt",
    "majorName": "Quản lý Vận hành Khách sạn - Resort 5 sao",
    "channel": "VTV7 Hướng Nghiệp",
    "duration": "13:42",
    "youtubeId": "c2Ce2QV4veY",
    "featured": false,
    "keyTakeaways": [
      "Khám phá bức tranh thực tế về công việc hàng ngày của Quản lý Vận hành Khách sạn - Resort 5 sao trong môi trường doanh nghiệp hiện đại.",
      "Những kỹ năng cốt lõi bắt buộc phải rèn luyện ngay từ những năm đầu đại học để nắm bắt lợi thế tuyển dụng.",
      "Dải thu nhập thực tế, cơ hội thăng tiến và cách xây dựng thương hiệu cá nhân trong ngành."
    ],
    "realityCheck": {
      "myth": "Học Quản lý Vận hành Khách sạn - Resort 5 sao chỉ cần bằng đại học loại giỏi là tự khắc có việc làm lương cao.",
      "truth": "Thị trường lao động 2026 đòi hỏi kinh nghiệm thực chiến qua các dự án thực tế, kỹ năng số hóa và ngoại ngữ lưu loát."
    },
    "hardestChallenge": "Cường độ làm việc cao, áp lực cập nhật kiến thức liên tục và rèn luyện tính kiên nhẫn khi gặp sự cố phức tạp.",
    "salaryInsight": {
      "fresher": "12 – 14 triệu/tháng",
      "mid": "22 – 41 triệu/tháng",
      "senior": "54 – 99 triệu/tháng"
    },
    "timelineChapters": [
      {
        "time": "08:30",
        "title": "Khởi động & Bối cảnh ca làm việc",
        "desc": "Rà soát danh sách công việc ưu tiên và họp giao ban cùng các thành viên trong nhóm."
      },
      {
        "time": "10:15",
        "title": "Thực chiến công việc chuyên môn",
        "desc": "Xử lý các tình huống thực tế bằng kiến thức chuyên ngành và công cụ chuyên dụng."
      },
      {
        "time": "14:30",
        "title": "Đối diện khó khăn & Giải quyết sự cố",
        "desc": "Cách tháo gỡ các khúc mắc phát sinh trong quá trình vận hành dự án."
      },
      {
        "time": "16:45",
        "title": "Đúc kết & Lời khuyên nghề nghiệp",
        "desc": "Tổng kết kinh nghiệm thực tiễn và những điều học sinh lớp 12 cần chuẩn bị trước khi chọn ngành."
      }
    ]
  }
];

export function getVideosByFilter(series = 'all', category = 'all', keyword = '') {
  return CAREER_VIDEOS_DATA.filter(v => {
    if (series !== 'all' && v.series !== series) return false;
    if (category !== 'all' && v.category !== category) return false;
    if (keyword.trim()) {
      const kw = keyword.toLowerCase().trim();
      const match = v.title.toLowerCase().includes(kw) ||
                    v.majorName.toLowerCase().includes(kw) ||
                    v.categoryLabel.toLowerCase().includes(kw) ||
                    v.channel.toLowerCase().includes(kw);
      if (!match) return false;
    }
    return true;
  });
}
