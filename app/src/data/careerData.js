// Dữ liệu tra cứu ngành, trường, tổ hợp và video trải nghiệm nghề chuẩn THPT 2026
export const MAJORS_DATA = [
  {
    id: "cntt",
    ma_nganh: "7480201",
    ten_nganh: "Công nghệ thông tin & Trí tuệ Nhân tạo",
    nhom_nganh: "Công nghệ & Máy tính",
    icon: "💻",
    mo_ta: "Nghiên cứu, phát triển phần mềm, trí tuệ nhân tạo, an toàn thông tin và kiến trúc hệ thống mạng máy tính hiện đại.",
    nang_luc: "Tư duy logic, giải quyết vấn đề, kiên trì học hỏi công nghệ mới",
    so_thich: "Lập trình, thiết bị công nghệ, khám phá ứng dụng số",
    mon_hoc: "Toán, Tin học, Tiếng Anh",
    vi_tri_viec_lam: "Kỹ sư phần mềm, AI Engineer, chuyên viên an ninh mạng, kiến trúc sư đám mây",
    to_hop: ["A00", "A01", "D01"],
    diem_tb: "26.5 - 29.2",
    hoc_phi: "25 - 45 triệu/năm",
    truong_tieu_bieu: ["ĐH Bách Khoa HN", "ĐH Công nghệ - ĐHQGHN", "ĐH Bách Khoa TP.HCM", "ĐH CNTT - ĐHQG TP.HCM"]
  },
  {
    id: "vi-mach",
    ma_nganh: "7520218",
    ten_nganh: "Kỹ thuật Thiết kế Vi mạch & Bán dẫn",
    nhom_nganh: "Kỹ thuật & Công nghệ",
    icon: "🔬",
    mo_ta: "Nghiên cứu, mô phỏng và thiết kế các dòng vi mạch tích hợp (IC/Chip), bán dẫn và hệ thống nhúng thông minh thế hệ mới.",
    nang_luc: "Tư duy vật lý bán dẫn, giải tích mạch số, lập trình phần cứng VHDL/Verilog",
    so_thich: "Khám phá cấu tạo chip máy tính, công nghệ nano, điện tử tinh vi",
    mon_hoc: "Vật lý, Toán, Tin học",
    vi_tri_viec_lam: "Kỹ sư thiết kế vi mạch (IC Designer), Kỹ sư kiểm thử Chip (Verification Engineer), Kỹ sư bán dẫn",
    to_hop: ["A00", "A01", "D07"],
    diem_tb: "26.0 - 28.5",
    hoc_phi: "28 - 48 triệu/năm",
    truong_tieu_bieu: ["ĐH Bách Khoa HN", "ĐH Bách Khoa TP.HCM", "ĐH Khoa học Tự nhiên - ĐHQG TP.HCM", "FPT Semiconductor"]
  },
  {
    id: "khdl",
    ma_nganh: "7480109",
    ten_nganh: "Khoa học Dữ liệu & Trí tuệ Nhân tạo",
    nhom_nganh: "Công nghệ & Máy tính",
    icon: "🤖",
    mo_ta: "Ứng dụng xác suất thống kê, học máy và dữ liệu lớn để trích xuất tri thức và tự động hóa các mô hình phân tích.",
    nang_luc: "Tư duy toán học sâu, mô hình hóa dữ liệu, trực giác thuật toán",
    so_thich: "Thống kê, tìm kiếm quy luật, giải bài toán dữ liệu lớn",
    mon_hoc: "Toán, Tin học, Tiếng Anh",
    vi_tri_viec_lam: "Data Scientist, Machine Learning Engineer, Data Analyst",
    to_hop: ["A00", "A01", "D07"],
    diem_tb: "27.0 - 29.5",
    hoc_phi: "30 - 55 triệu/năm",
    truong_tieu_bieu: ["ĐH Bách Khoa HN", "ĐH Kinh tế Quốc dân", "ĐH Khoa học Tự nhiên"]
  },
  {
    id: "ykhoa",
    ma_nganh: "7720101",
    ten_nganh: "Y đa khoa",
    nhom_nganh: "Y tế & Sức khỏe",
    icon: "🩺",
    mo_ta: "Đào tạo bác sĩ có y đức và kiến thức y học vững vàng để chẩn đoán, điều trị và chăm sóc sức khỏe cộng đồng.",
    nang_luc: "Trí nhớ tốt, tỉ mỉ, chịu áp lực cao, thấu cảm với người bệnh",
    so_thich: "Khám phá cơ thể người, sinh học, giúp đỡ chăm sóc người khác",
    mon_hoc: "Sinh học, Hóa học, Toán",
    vi_tri_viec_lam: "Bác sĩ lâm sàng, nghiên cứu viên y học, quản lý y tế tại bệnh viện",
    to_hop: ["B00", "A00", "B08"],
    diem_tb: "27.5 - 28.8",
    hoc_phi: "40 - 70 triệu/năm",
    truong_tieu_bieu: ["ĐH Y Hà Nội", "ĐH Y Dược TP.HCM", "ĐH Y Dược Cần Thơ"]
  },
  {
    id: "marketing",
    ma_nganh: "7340115",
    ten_nganh: "Marketing & Truyền thông số",
    nhom_nganh: "Kinh doanh & Quản lý",
    icon: "📈",
    mo_ta: "Nghiên cứu hành vi người tiêu dùng, xây dựng thương hiệu, sáng tạo chiến dịch nội dung và quảng cáo kỹ thuật số.",
    nang_luc: "Nhạy bén tâm lý, sáng tạo nội dung, giao tiếp xuất sắc",
    so_thich: "Mạng xã hội, viết lách, bắt trend, làm video",
    mon_hoc: "Ngữ văn, Tiếng Anh, Toán",
    vi_tri_viec_lam: "Brand Manager, Digital Marketer, Content Creator, Chuyên viên truyền thông",
    to_hop: ["D01", "A00", "A01", "D07"],
    diem_tb: "25.5 - 28.0",
    hoc_phi: "22 - 40 triệu/năm",
    truong_tieu_bieu: ["ĐH Kinh tế Quốc dân", "ĐH Ngoại thương", "ĐH Kinh tế TP.HCM", "RMIT"]
  },
  {
    id: "logistics",
    ma_nganh: "7510605",
    ten_nganh: "Logistics & Quản lý Chuỗi cung ứng",
    nhom_nganh: "Kinh doanh & Quản lý",
    icon: "🚢",
    mo_ta: "Quản trị dòng vận chuyển hàng hóa, kho bãi thông minh, vận tải đa phương thức và chuỗi cung ứng toàn cầu.",
    nang_luc: "Tư duy điều phối hệ thống, tiếng Anh thương mại, đàm phán hợp đồng",
    so_thich: "Vận tải quốc tế, cảng biển, tối ưu quy trình",
    mon_hoc: "Toán, Tiếng Anh, Địa lý",
    vi_tri_viec_lam: "Chuyên viên chuỗi cung ứng (Supply Chain Planner), Quản trị kho vận, Chuyên viên Forwarder xuất nhập khẩu",
    to_hop: ["A00", "A01", "D01"],
    diem_tb: "26.5 - 28.6",
    hoc_phi: "26 - 45 triệu/năm",
    truong_tieu_bieu: ["ĐH Ngoại thương", "ĐH Kinh tế TP.HCM", "ĐH Giao thông Vận tải TP.HCM", "ĐH Hàng hải Việt Nam"]
  },
  {
    id: "kdqt",
    ma_nganh: "7340120",
    ten_nganh: "Kinh doanh quốc tế",
    nhom_nganh: "Kinh doanh & Quản lý",
    icon: "🌐",
    mo_ta: "Nghiên cứu thị trường toàn cầu, đàm phán thương mại quốc tế, chuỗi cung ứng và thương mại điện tử xuyên biên giới.",
    nang_luc: "Ngoại ngữ xuất sắc, tư duy chiến lược, kỹ năng đàm phán",
    so_thich: "Giao lưu văn hóa, theo dõi tin tức kinh tế thế giới",
    mon_hoc: "Tiếng Anh, Toán, Địa lý",
    vi_tri_viec_lam: "Chuyên viên xuất nhập khẩu, Quản trị chuỗi cung ứng, Chuyên viên thương mại toàn cầu",
    to_hop: ["A01", "D01", "A00"],
    diem_tb: "26.8 - 28.5",
    hoc_phi: "25 - 45 triệu/năm",
    truong_tieu_bieu: ["ĐH Ngoại thương", "ĐH Kinh tế TP.HCM", "Học viện Ngân hàng"]
  },
  {
    id: "dohoa",
    ma_nganh: "7210403",
    ten_nganh: "Thiết kế đồ họa & Đa phương tiện",
    nhom_nganh: "Nghệ thuật & Sáng tạo",
    icon: "🎨",
    mo_ta: "Ứng dụng mỹ thuật và phần mềm đồ họa để tạo ra các sản phẩm hình ảnh, giao diện UI/UX, hoạt hình 3D và game.",
    nang_luc: "Cảm thụ màu sắc, tư duy thẩm mỹ, sáng tạo trực quan",
    so_thich: "Vẽ, chụp ảnh, chỉnh sửa ảnh/video, thiết kế game",
    mon_hoc: "Mỹ thuật, Tin học, Ngữ văn",
    vi_tri_viec_lam: "Graphic Designer, UI/UX Designer, 3D Artist, Giám đốc nghệ thuật",
    to_hop: ["V00", "H00", "D01", "A01"],
    diem_tb: "23.0 - 26.5",
    hoc_phi: "28 - 50 triệu/năm",
    truong_tieu_bieu: ["ĐH Mỹ thuật Công nghiệp", "ĐH Kiến trúc Hà Nội", "ĐH Kiến trúc TP.HCM", "FPT University"]
  },
  {
    id: "tamly",
    ma_nganh: "7310401",
    ten_nganh: "Tâm lý học",
    nhom_nganh: "Khoa học Xã hội",
    icon: "🧠",
    mo_ta: "Nghiên cứu cơ chế tâm lý, cảm xúc, nhận thức và hành vi của con người trong các môi trường gia đình, trường học, công sở.",
    nang_luc: "Khả năng lắng nghe, kiên nhẫn, phân tích hành vi",
    so_thich: "Trò chuyện, giúp đỡ người có khó khăn cảm xúc, đọc sách tâm lý",
    mon_hoc: "Ngữ văn, Tiếng Anh, Sinh học",
    vi_tri_viec_lam: "Chuyên viên tư vấn tâm lý học đường, Chuyên gia nhân sự (HR), Trị liệu tâm lý",
    to_hop: ["C00", "D01", "B00"],
    diem_tb: "24.5 - 27.5",
    hoc_phi: "15 - 28 triệu/năm",
    truong_tieu_bieu: ["ĐH Khoa học Xã hội & Nhân văn - ĐHQGHN", "ĐH Sư phạm Hà Nội", "ĐH KHXH&NV TP.HCM"]
  },
  {
    id: "tudonghoa",
    ma_nganh: "7520216",
    ten_nganh: "Kỹ thuật Điều khiển & Tự động hóa",
    nhom_nganh: "Kỹ thuật & Công nghệ",
    icon: "⚙️",
    mo_ta: "Thiết kế, chế tạo và vận hành các dây chuyền sản xuất tự động, cánh tay robot và hệ thống IoT thông minh.",
    nang_luc: "Tư duy kỹ thuật, giải tích mạch, lập trình vi điều khiển",
    so_thich: "Chế tạo máy móc, robot, thiết bị cơ điện",
    mon_hoc: "Vật lý, Toán, Tin học",
    vi_tri_viec_lam: "Kỹ sư tự động hóa, Kỹ sư thiết kế Robot, Quản lý vận hành nhà máy thông minh",
    to_hop: ["A00", "A01"],
    diem_tb: "25.8 - 28.2",
    hoc_phi: "24 - 40 triệu/năm",
    truong_tieu_bieu: ["ĐH Bách Khoa HN", "ĐH Bách Khoa TP.HCM", "ĐH Sư phạm Kỹ thuật TP.HCM"]
  }
];

// DATASET: CAREER VIDEO HUB & REALITY CHECK
export const CAREER_VIDEOS_BY_MAJOR = {
  "cntt": [
    {
      id: "vid-cntt-1",
      title: "Một ngày làm việc của Kỹ sư Trí tuệ Nhân tạo (AI Engineer) tại BigTech",
      channel: "VTV7 Hướng Nghiệp",
      duration: "09:15",
      type: "1 Ngày Làm Nghề",
      youtubeId: "v4v_X2E1FQU",
      keyTakeaways: [
        "Công việc chính là phân tích bài toán thực tế, thiết kế giải thuật và code tính năng cùng đồng nghiệp quốc tế.",
        "Thời gian gõ code thực tế chỉ chiếm khoảng 40%, còn lại là trao đổi kiến trúc, họp sprint và kiểm thử chất lượng.",
        "Ngoại ngữ tiếng Anh và khả năng tự học công nghệ mới là vũ khí sống còn để phát triển mức lương nghìn đô."
      ],
      realityCheck: {
        myth: "Làm IT chỉ ngồi gõ bàn phím cả ngày trong phòng tối một mình, không cần giao tiếp hay kỹ năng mềm.",
        truth: "Kỹ sư phần mềm hiện đại phải liên tục thuyết trình giải pháp, làm việc nhóm với Product Manager, Designer và khách hàng toàn cầu."
      }
    },
    {
      id: "vid-cntt-2",
      title: "Review sinh viên ngành CNTT & Khoa học Máy tính: Năm nhất học gì để không bị sốc?",
      channel: "Sinh Viên Bách Khoa Official",
      duration: "11:40",
      type: "Review Sinh Viên",
      youtubeId: "JmD_4c_Vz6k",
      keyTakeaways: [
        "Năm nhất học các môn đại cương Toán cao cấp, Giải tích và C++ nền tảng rất nặng.",
        "Nên bắt đầu làm quen với Git, thuật toán và tham gia các đồ án nhỏ ngay từ năm 2.",
        "Tập thói quen đọc tài liệu tiếng Anh vì công nghệ AI thay đổi liên tục hàng tháng."
      ],
      realityCheck: {
        myth: "Chỉ cần học thuộc giáo trình trên lớp là đủ để ra trường có việc làm ngay.",
        truth: "Doanh nghiệp tuyển dụng dựa vào sản phẩm (portfolio, GitHub) bạn tự tay làm chứ không chỉ nhìn vào bảng điểm lý thuyết."
      }
    }
  ],
  "vi-mach": [
    {
      id: "vid-vimach-1",
      title: "Bên trong phòng Lab Thiết kế Vi mạch Bán dẫn: Cơn sốt nhân lực tỷ USD 2026",
      channel: "VTV2 Khoa Giáo",
      duration: "10:20",
      type: "Thực Tế Phòng Lab",
      youtubeId: "3m0YQxXvYpI",
      keyTakeaways: [
        "Việt Nam đang là tâm điểm đầu tư nhà máy bán dẫn của các tập đoàn thế giới (Nvidia, Synopsys, Marvell).",
        "Yêu cầu nền tảng cực chắc về Vật lý bán dẫn, Toán cao cấp và vi mạch số (VHDL/Verilog).",
        "Kỹ sư vi mạch mới ra trường được săn đón với mức đãi ngộ và môi trường phòng sạch (cleanroom) chuẩn quốc tế."
      ],
      realityCheck: {
        myth: "Học vi mạch giống như sửa chữa linh kiện điện tử hay lắp ráp bo mạch đồ gia dụng.",
        truth: "Thiết kế vi mạch là lập trình mô phỏng hàng tỷ bóng bán dẫn (transistor) kích thước nanomet trên phần mềm chuyên dụng đắt giá của Hoa Kỳ."
      }
    },
    {
      id: "vid-vimach-2",
      title: "Cơ hội việc làm ngành Bán dẫn tại Việt Nam đến năm 2030: Chuyên gia chia sẻ",
      channel: "Góc Nhìn Chuyên Gia",
      duration: "12:50",
      type: "Góc Nhìn Chuyên Gia",
      youtubeId: "zXW9cT6jQkY",
      keyTakeaways: [
        "Chính phủ đặt mục tiêu đào tạo 50.000 kỹ sư bán dẫn phục vụ chuỗi cung ứng công nghệ cao.",
        "Các trường đại học hàng đầu đang cấp học bổng lớn và ký cam kết đầu ra với các tập đoàn nước ngoài.",
        "Công việc đòi hỏi tính cẩn trọng tuyệt đối, bởi một sai sót vi mô có thể làm hỏng cả lô wafer hàng triệu USD."
      ],
      realityCheck: {
        myth: "Ngành này chỉ là trào lưu ngắn hạn, học xong không biết làm việc ở đâu tại Việt Nam.",
        truth: "Nhu cầu thiết kế chip cho xe điện, điện thoại và trung tâm dữ liệu AI sẽ bùng nổ liên tục trong ít nhất 20 năm tới."
      }
    }
  ],
  "khdl": [
    {
      id: "vid-khdl-1",
      title: "Một ngày của Data Scientist: Trích xuất tri thức từ hàng triệu dòng dữ liệu",
      channel: "Brands Vietnam",
      duration: "08:45",
      type: "1 Ngày Làm Nghề",
      youtubeId: "2vX5X1pX7kM",
      keyTakeaways: [
        "Biến các bảng số liệu khổng lồ thành mô hình dự báo hành vi người dùng và đề xuất chiến lược kinh doanh.",
        "Kết hợp kiềng ba chân: Toán xác suất thống kê + Lập trình Python/SQL + Trực giác nhạy bén về sản phẩm.",
        "Được mệnh danh là 'Nghề quyến rũ nhất thế kỷ 21' với cơ hội làm việc đa ngành (Ngân hàng, Y tế, TMĐT)."
      ],
      realityCheck: {
        myth: "Chỉ cần biết dùng Excel hoặc vẽ biểu đồ PowerPoint là có thể làm Data Scientist.",
        truth: "Phải hiểu sâu bản chất toán học của các thuật toán Machine Learning để xây dựng mô hình dự đoán chính xác và không bị sai lệch."
      }
    }
  ],
  "ykhoa": [
    {
      id: "vid-ykhoa-1",
      title: "Bác sĩ nội trú chia sẻ: 6 năm trường Y và 18 tháng thực hành bệnh viện",
      channel: "VTV7 Hướng Nghiệp",
      duration: "14:50",
      type: "Review Sinh Viên",
      youtubeId: "w1mK4v9xPq0",
      keyTakeaways: [
        "Thời gian đào tạo dài hạn (6 năm đại học + 18 tháng CCHN hoặc Bác sĩ nội trú) đòi hỏi lòng kiên trì và bền bỉ.",
        "Áp lực trực đêm, thi cử liên tục và khối lượng kiến thức giải phẫu, dược lý khổng lồ cần rèn luyện mỗi ngày.",
        "Phần thưởng cao quý nhất là nụ cười hồi phục của bệnh nhân và sự kính trọng từ gia đình và xã hội."
      ],
      realityCheck: {
        myth: "Ra trường là làm bác sĩ mở phòng khám kiếm tiền tỷ ngay lập tức mà không cần phấn đấu thêm.",
        truth: "Học Y là con đường 'chậm mà chắc', mất từ 8-10 năm tích lũy kinh nghiệm chuyên môn trước khi có thể tự chủ hành nghề vững vàng."
      }
    }
  ],
  "marketing": [
    {
      id: "vid-mkt-1",
      title: "Một ngày của Chuyên viên Marketing số: Sáng tạo chiến dịch triệu view",
      channel: "Brands Vietnam",
      duration: "07:30",
      type: "1 Ngày Làm Nghề",
      youtubeId: "9kL8xM2qP1o",
      keyTakeaways: [
        "Theo dõi số liệu quảng cáo theo thời gian thực, đo lường chi phí mỗi khách hàng (CPA) và tỷ lệ chuyển đổi.",
        "Sáng tạo ý tưởng nội dung video ngắn (TikTok, Reels) bắt trúng tâm lý và cảm xúc của thế hệ Gen Z.",
        "Phải luôn linh hoạt thích ứng với các thuật toán mạng xã hội biến đổi liên tục hàng tuần."
      ],
      realityCheck: {
        myth: "Làm marketing chỉ cần hoạt ngôn, vui vẻ và thích 'chém gió' là đủ thành công.",
        truth: "Marketing hiện đại là cuộc chơi của dữ liệu: Phải đọc chỉ số ROI, A/B Testing và phân tích hành vi người dùng cực kỳ kỷ luật."
      }
    }
  ],
  "logistics": [
    {
      id: "vid-logistics-1",
      title: "Khám phá trung tâm Cảng biển & Chuỗi cung ứng Quốc tế: Logistics vận hành ra sao?",
      channel: "Sinh Viên Bách Khoa Official",
      duration: "10:45",
      type: "Thực Tế Phòng Lab",
      youtubeId: "7qK3xL9vM1n",
      keyTakeaways: [
        "Quản lý hành trình hàng hóa từ kho bãi thông minh, tàu container biển đến tay khách hàng khắp thế giới.",
        "Ứng dụng công nghệ theo dõi lộ trình GPS, tối ưu chi phí vận chuyển và giảm thiểu phát thải xanh.",
        "Việt Nam là trung tâm sản xuất toàn cầu, nhu cầu nhân lực logistics song ngữ cực kỳ khát và đãi ngộ cao."
      ],
      realityCheck: {
        myth: "Học logistics là ra trường làm công việc giao hàng (shipper) hoặc bốc vác kiểm kho thủ công.",
        truth: "Logistics & Supply Chain là bộ não chiến lược điều phối chuỗi cung ứng hàng tỷ đô, đàm phán hợp đồng thương mại quốc tế."
      }
    }
  ],
  "dohoa": [
    {
      id: "vid-dohoa-1",
      title: "Trải nghiệm làm UI/UX Designer: Thiết kế ứng dụng triệu người dùng",
      channel: "Người Lạ Làm Nghề",
      duration: "12:15",
      type: "1 Ngày Làm Nghề",
      youtubeId: "5mN8vK2xQ9p",
      keyTakeaways: [
        "Nghiên cứu hành trình trải nghiệm người dùng, vẽ wireframe và tạo prototype tương tác trên Figma.",
        "Cân bằng giữa tính thẩm mỹ thời thượng và sự tiện dụng thực tế, không để người dùng bối rối.",
        "Phối hợp mật thiết với đội ngũ Lập trình viên để giao diện thực tế chạy mượt mà đúng bản thiết kế."
      ],
      realityCheck: {
        myth: "Học thiết kế đồ họa là chỉ cần biết vẽ tranh đẹp và dùng thành thạo Photoshop cơ bản.",
        truth: "Designer giỏi phải thấu hiểu tâm lý học nhận thức, hành vi tương tác số và biết giải quyết bài toán kinh doanh của doanh nghiệp."
      }
    }
  ],
  "tamly": [
    {
      id: "vid-tamly-1",
      title: "Một ngày của Chuyên viên Tư vấn Tâm lý Học đường & Doanh nghiệp",
      channel: "Dustin On The Go",
      duration: "09:30",
      type: "Góc Nhìn Chuyên Gia",
      youtubeId: "4xL9vM2qK7n",
      keyTakeaways: [
        "Lắng nghe không phán xét, xây dựng không gian an toàn để thân chủ mở lòng về áp lực và tổn thương.",
        "Ứng dụng các liệu pháp hành vi nhận thức (CBT) và bài test tâm lý tiêu chuẩn khoa học quốc tế.",
        "Cơ hội việc làm mở rộng sang mảng Nhân sự (HR), đào tạo văn hóa doanh nghiệp và trị liệu cá nhân."
      ],
      realityCheck: {
        myth: "Học tâm lý học là để 'đọc suy nghĩ' người khác hoặc chỉ điều trị cho người bị bệnh tâm thần.",
        truth: "Tâm lý học là khoa học nghiên cứu hành vi và cảm xúc, giúp người bình thường vượt qua khủng hoảng, stress và phát triển tiềm năng sống."
      }
    }
  ],
  "tudonghoa": [
    {
      id: "vid-tdh-1",
      title: "Bên trong nhà máy Robot tự động hóa thông minh: Kỹ sư làm những gì?",
      channel: "VTV2 Khoa Giáo",
      duration: "11:15",
      type: "Thực Tế Phòng Lab",
      youtubeId: "8xM2qK7nP9v",
      keyTakeaways: [
        "Lập trình điều khiển cánh tay robot công nghiệp (KUKA, ABB) và hệ thống PLC điều hành nhà máy.",
        "Tích hợp cảm biến IoT và thị giác máy tính AI để dây chuyền tự phát hiện lỗi sản phẩm trong tích tắc.",
        "Cầu nối không thể thiếu giữa phần cứng cơ điện tử và phần mềm tự động hóa sản xuất thông minh."
      ],
      realityCheck: {
        myth: "Học tự động hóa là làm thợ điện hoặc thợ hàn sửa chữa máy móc hỏng hóc đơn thuần.",
        truth: "Kỹ sư tự động hóa là người thiết kế kiến trúc hệ thống, viết code điều khiển các dây chuyền sản xuất tự hành hiện đại."
      }
    }
  ],
  "kdqt": [
    {
      id: "vid-kdqt-1",
      title: "Chuyên viên Xuất nhập khẩu & Thương mại Quốc tế: Đàm phán hợp đồng triệu đô",
      channel: "Brands Vietnam",
      duration: "08:20",
      type: "Góc Nhìn Chuyên Gia",
      youtubeId: "1mN9vK2xL7q",
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

// Aliases mapping for user convenience
const MAJOR_ALIASES = {
  "cntt-ai": "cntt",
  "vi-mach": "vi-mach",
  "marketing-so": "marketing",
  "khoa-hoc-du-lieu": "khdl",
  "y-da-khoa": "ykhoa",
  "thiet-ke-do-hoa-ux": "dohoa",
  "logistics": "logistics",
  "tam-ly-hoc": "tamly"
};

export function getVideosForMajor(majorId) {
  const normalizedId = MAJOR_ALIASES[majorId] || majorId;
  return CAREER_VIDEOS_BY_MAJOR[normalizedId] || CAREER_VIDEOS_BY_MAJOR["cntt"] || [];
}

export const COMBINATIONS_DATA = [
  { ma: "A00", mon: "Toán – Vật lí – Hóa học", nhom: "Kỹ thuật, Công nghệ, Bán dẫn, Khoa học tự nhiên, Kinh tế" },
  { ma: "A01", mon: "Toán – Vật lí – Tiếng Anh", nhom: "Công nghệ thông tin, Vi mạch, Kinh tế, Logistics, Ngoại thương" },
  { ma: "B00", mon: "Toán – Hóa học – Sinh học", nhom: "Y khoa, Dược, Nông lâm, Công nghệ sinh học" },
  { ma: "C00", mon: "Ngữ văn – Lịch sử – Địa lý", nhom: "Báo chí, Luật, Sư phạm, Khoa học Xã hội & Nhân văn, Tâm lý" },
  { ma: "D01", mon: "Toán – Ngữ văn – Tiếng Anh", nhom: "Kinh doanh, Tài chính, Ngoại ngữ, Marketing, Truyền thông, Thiết kế" },
  { ma: "D07", mon: "Toán – Hóa học – Tiếng Anh", nhom: "Công nghệ Hóa học, Kỹ thuật Y sinh, Vi mạch, Kinh tế" }
];

export const HOLLAND_ARCHETYPES = [
  { code: "R", name: "Thực tế & Kỹ thuật (Realistic)", icon: "🛠️", desc: "Thích làm việc với máy móc, công cụ, vật liệu cụ thể và hoạt động ngoài trời." },
  { code: "I", name: "Nghiên cứu & Khám phá (Investigative)", icon: "🔬", desc: "Thích tìm hiểu bản chất vấn đề, tư duy logic, phân tích dữ liệu và khoa học." },
  { code: "A", name: "Nghệ thuật & Sáng tạo (Artistic)", icon: "🎨", desc: "Giàu trí tưởng tượng, độc lập, thích tự do sáng tạo nghệ thuật, văn học, thiết kế." },
  { code: "S", name: "Xã hội & Giúp đỡ (Social)", icon: "🤝", desc: "Thích giao tiếp, giảng dạy, tư vấn, chăm sóc và làm việc vì cộng đồng." },
  { code: "E", name: "Quản lý & Doanh nhân (Enterprising)", icon: "📈", desc: "Thích lãnh đạo, thuyết phục, kinh doanh, ra quyết định và chinh phục mục tiêu." },
  { code: "C", name: "Nghiệp vụ & Tổ chức (Conventional)", icon: "📋", desc: "Thích sự ngăn nắp, rõ ràng, chi tiết, làm việc theo quy trình chuẩn và số liệu." }
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
