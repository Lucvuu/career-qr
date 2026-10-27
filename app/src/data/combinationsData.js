// Dữ liệu Tổ hợp xét tuyển và Cẩm nang Kỳ thi 2026 (HSA, TSA, APT, IELTS)

export const COMBINATIONS_DATA = [
  {
    ma: "A00",
    mon: "Toán – Vật lí – Hóa học",
    nhom: "Kỹ thuật, Vi mạch bán dẫn, Trí tuệ nhân tạo, Tự động hóa, Ô tô, Xây dựng",
    phoDiem: "Phổ điểm chung 20 – 24 điểm; Trường kỹ thuật Top đầu (HUST, HCMUT) từ 26.5 – 29.2 điểm.",
    meoOnThi: "Tập trung chắc 35 câu đầu môn Toán & Lý trong 30 phút. Môn Hóa cần nắm chắc lý thuyết vô cơ - hữu cơ trọng tâm để không mất điểm oan.",
    nganhTieuBieu: ["Kỹ thuật Vi mạch & Bán dẫn", "Khoa học Máy tính", "Điều khiển & Tự động hóa", "Kỹ thuật Ô tô & Xe điện"],
    xuHuong2026: "Chỉ tiêu THPT thuần túy giảm còn khoảng 30-40%, nhường chỗ cho ĐGTD TSA và ĐGNL HSA. Cần ôn song song cả hai dạng đề."
  },
  {
    ma: "A01",
    mon: "Toán – Vật lí – Tiếng Anh",
    nhom: "CNTT, Kỹ thuật Phần mềm, Logistics, Kinh doanh quốc tế, Fintech, Ngoại thương",
    phoDiem: "Phổ điểm rất cạnh tranh 22 – 25.5 điểm; Các trường Top đầu (FTU, NEU, UET) từ 27.0 – 28.8 điểm.",
    meoOnThi: "Tiếng Anh là môn 'gánh team' kéo điểm số; nên tận dụng chứng chỉ IELTS 6.5+ để quy đổi thành điểm 10 tiếng Anh tối đa hóa lợi thế.",
    nganhTieuBieu: ["Công nghệ thông tin", "Kinh doanh quốc tế", "Logistics & Chuỗi cung ứng", "Trí tuệ nhân tạo (AI)"],
    xuHuong2026: "Tổ hợp 'vàng' được hầu hết các trường khối kỹ thuật lẫn kinh tế sử dụng. Tỷ lệ quy đổi điểm IELTS kết hợp học bạ rất cao."
  },
  {
    ma: "B00",
    mon: "Toán – Hóa học – Sinh học",
    nhom: "Y khoa, Răng - Hàm - Mặt, Dược học, Kỹ thuật Xét nghiệm, Thú y, Công nghệ Sinh học",
    phoDiem: "Điểm chuẩn khắt khe nhất cả nước; Y khoa Hà Nội/TP.HCM thường từ 27.5 – 29.5 điểm.",
    meoOnThi: "Môn Sinh học nhiều câu hỏi tích hợp phả hệ và di truyền phân tử dài dòng; cần luyện kỹ năng đọc đề nhanh và loại trừ đáp án nhiễu.",
    nganhTieuBieu: ["Y khoa (Bác sĩ Đa khoa)", "Răng - Hàm - Mặt", "Dược học", "Điều dưỡng", "Bác sĩ Thú y"],
    xuHuong2026: "Khối trường Y Dược vẫn giữ tỷ lệ chỉ tiêu xét điểm thi THPT truyền thống cao nhất (từ 50-70%), có xét kết hợp chứng chỉ ngoại ngữ."
  },
  {
    ma: "B08",
    mon: "Toán – Sinh học – Tiếng Anh",
    nhom: "Y khoa chất lượng cao, Kỹ thuật Y sinh, Công nghệ Sinh học quốc tế, Dược học",
    phoDiem: "23.0 – 27.0 điểm.",
    meoOnThi: "Tổ hợp hiện đại dành cho sinh viên hướng tới nghiên cứu y sinh học phân tử và đọc tài liệu y khoa quốc tế.",
    nganhTieuBieu: ["Kỹ thuật Y sinh", "Công nghệ Sinh học", "Y khoa tiên tiến"],
    xuHuong2026: "Nhiều trường Y Dược bổ sung chỉ tiêu B08 cho các chương trình liên kết quốc tế và bác sĩ nội trú."
  },
  {
    ma: "C00",
    mon: "Ngữ văn – Lịch sử – Địa lý",
    nhom: "Báo chí & Truyền thông, Luật học, Sư phạm Văn/Sử/Địa, Quan hệ quốc tế, Công an, Quân đội",
    phoDiem: "Biên độ điểm chuẩn rất cao 24 – 29.5 điểm (do môn Sử & Địa có nhiều điểm 9-10).",
    meoOnThi: "Môn Văn cần lập dàn ý theo luận điểm rõ ràng, dẫn chứng thực tế đời sống; môn Sử và Địa rèn luyện sơ đồ tư duy thời gian và bảng số liệu.",
    nganhTieuBieu: ["Báo chí & Truyền thông", "Luật Kinh tế & Luật Quốc tế", "Sư phạm Ngữ văn", "Quan hệ Quốc tế"],
    xuHuong2026: "Cạnh tranh cực kỳ khốc liệt tại các trường Top đầu (USSH, HLU, AJC). Thí sinh cần đạt trung bình từ 9.0 điểm/môn mới an tâm."
  },
  {
    ma: "C01",
    mon: "Ngữ văn – Toán – Vật lí",
    nhom: "Kỹ thuật Công an, Báo chí đa phương tiện, Kiến trúc quy hoạch, Quản lý đất đai",
    phoDiem: "20.0 – 24.5 điểm.",
    meoOnThi: "Sự kết hợp giữa tư duy logic (Toán, Lý) và khả năng ngôn ngữ biểu đạt (Văn). Điểm số thường cân bằng, ít bị lệch tủ.",
    nganhTieuBieu: ["Trinh sát An ninh", "Báo chí Công nghệ", "Quản trị Xây dựng"],
    xuHuong2026: "Được nhiều khối trường lực lượng vũ trang và trường kỹ thuật áp dụng xét tuyển mở rộng."
  },
  {
    ma: "D01",
    mon: "Toán – Ngữ văn – Tiếng Anh",
    nhom: "Kinh tế, Marketing số, Tài chính - Ngân hàng, Ngôn ngữ học, Thiết kế đồ họa, Truyền thông đa phương tiện",
    phoDiem: "Phổ điểm phổ biến nhất cả nước; các ngành hot dao động 25.0 – 28.6 điểm.",
    meoOnThi: "Cần đảm bảo Toán trên 8.0, Tiếng Anh trên 8.5 và Văn chắc tay 7.5+. Duy trì giải đề tổng hợp đều đặn mỗi tuần 3 đề/môn.",
    nganhTieuBieu: ["Marketing số", "Kinh doanh quốc tế", "Quan hệ công chúng (PR)", "Thương mại điện tử", "Ngôn ngữ Anh"],
    xuHuong2026: "Tổ hợp có số lượng thí sinh đăng ký đông nhất. Cần tận dụng phương thức xét học bạ kết hợp chứng chỉ ngoại ngữ sớm."
  },
  {
    ma: "D07",
    mon: "Toán – Hóa học – Tiếng Anh",
    nhom: "Kỹ thuật Vi mạch, Kỹ thuật Hóa học, Công nghệ Thực phẩm, Môi trường, Fintech",
    phoDiem: "22.5 – 27.0 điểm.",
    meoOnThi: "Lựa chọn tuyệt vời cho các bạn giỏi Hóa nhưng thích Tiếng Anh hơn môn Lý. Rất lợi thế khi xét tuyển vào Bách Khoa và Tự Nhiên.",
    nganhTieuBieu: ["Kỹ thuật Thiết kế Vi mạch", "Công nghệ Thực phẩm", "Kỹ thuật Hóa học", "Khoa học Dữ liệu"],
    xuHuong2026: "Đang mở rộng mạnh mẽ tại các trường kỹ thuật và công nghệ do nhu cầu nhân lực bán dẫn và hóa dược."
  },
  {
    ma: "D14",
    mon: "Ngữ văn – Lịch sử – Tiếng Anh",
    nhom: "Ngoại giao, Quan hệ Quốc tế, Du lịch, Quản trị Khách sạn, Ngôn ngữ học, Đông Phương học",
    phoDiem: "23.0 – 27.5 điểm.",
    meoOnThi: "Thế mạnh cực lớn cho thí sinh có năng khiếu xã hội và ngoại ngữ. Môn Sử dùng sơ đồ từ khóa, môn Văn luyện hành văn sắc sảo.",
    nganhTieuBieu: ["Học viện Ngoại giao", "Quan hệ Quốc tế", "Truyền thông Quốc tế", "Quản trị Khách sạn"],
    xuHuong2026: "Được ưu tiên tuyển sinh tại Học viện Ngoại giao, ĐH Ngoại ngữ và các trường đào tạo du lịch lữ hành quốc tế."
  },
  {
    ma: "D15",
    mon: "Ngữ văn – Địa lý – Tiếng Anh",
    nhom: "Kinh tế đối ngoại, Địa chính trị, Logistics quốc tế, Du lịch sinh thái, Khảo sát xã hội",
    phoDiem: "22.0 – 26.5 điểm.",
    meoOnThi: "Môn Địa bám sát kỹ năng đọc bản đồ và Atlat; môn Văn rèn kỹ năng phân tích; Tiếng Anh giữ phong độ từ vựng chủ đề văn hóa địa lý.",
    nganhTieuBieu: ["Địa lý học ứng dụng", "Quản trị Du lịch & Lữ hành", "Logistics"],
    xuHuong2026: "Tổ hợp thay thế linh hoạt cho D01 tại nhiều trường đại học sư phạm và khoa học xã hội."
  },
  {
    ma: "V00",
    mon: "Toán – Vật lí – Vẽ mỹ thuật",
    nhom: "Kiến trúc công trình, Quy hoạch đô thị, Thiết kế cảnh quan, Thiết kế nội thất",
    phoDiem: "21.0 – 26.5 điểm (môn Vẽ hệ số 1.5 hoặc nhân đôi tùy trường).",
    meoOnThi: "Bắt buộc theo học lớp vẽ mỹ thuật từ lớp 10 hoặc đầu lớp 11 để nắm chắc luật phối cảnh xa gần, giải phẫu hình khối và đánh bóng chì chuẩn nét.",
    nganhTieuBieu: ["Kiến trúc (KTS)", "Thiết kế Nội thất", "Quy hoạch Đô thị & Cảnh quan"],
    xuHuong2026: "Các trường Kiến trúc Hà Nội, Kiến trúc TP.HCM và Bách Khoa tổ chức thi Vẽ riêng, tính điểm quy đổi trực tiếp."
  },
  {
    ma: "H00",
    mon: "Ngữ văn – Năng khiếu vẽ 1 – Năng khiếu vẽ 2",
    nhom: "Thiết kế đồ họa, Mỹ thuật công nghiệp, Thiết kế thời trang, Nghệ thuật số UI/UX",
    phoDiem: "22.0 – 26.0 điểm (môn Vẽ trang trí màu và Hình họa người mẫu).",
    meoOnThi: "Môn Vẽ 1 (Hình họa chì tĩnh vật/người) cần đúng tỉ lệ giải phẫu; Môn Vẽ 2 (Trang trí màu sắc) cần phối màu hòa sắc ấm - lạnh hài hòa, bố cục sáng tạo.",
    nganhTieuBieu: ["Thiết kế Đồ họa & UI/UX", "Thiết kế Thời trang", "Thiết kế Mỹ thuật số"],
    xuHuong2026: "Ngành thiết kế mỹ thuật đa phương tiện bùng nổ nhu cầu nhân sự sáng tạo đồ họa game, giao diện app và thương mại điện tử."
  }
];

export const EXAM_METHODS_2026 = {
  hsa: {
    name: "Kỳ thi Đánh giá Năng lực ĐHQGHN (HSA)",
    organizer: "Đại học Quốc gia Hà Nội",
    format: "Thi trên máy tính, 150 câu hỏi / 195 phút, thang điểm tối đa 150.",
    structure: "Phần 1: Tư duy định lượng (Toán học - 50 câu); Phần 2: Tư duy định tính (Văn học/Ngôn ngữ - 50 câu); Phần 3: Khoa học tự nhiên & Xã hội (50 câu).",
    benchmarkGuide: "Trên 100 điểm: Rộng cửa vào Bách Khoa, Kinh tế Quốc dân, Ngoại thương; 85 – 100 điểm: Đỗ chắc chắn các trường ĐHQGHN, Thương Mại, Bưu Chính; 70 – 85 điểm: Cơ hội tốt tại các trường đại học khu vực.",
    targetUniversities: "Hơn 90 trường đại học miền Bắc và toàn quốc công nhận kết quả."
  },
  tsa: {
    name: "Kỳ thi Đánh giá Tư duy Bách Khoa (TSA)",
    organizer: "Đại học Bách Khoa Hà Nội",
    format: "Thi trắc nghiệm trên máy tính, thang điểm tối đa 100.",
    structure: "Tư duy Toán học (60 phút - 40 điểm), Tư duy Đọc hiểu (30 phút - 20 điểm), Tư duy Khoa học & Giải quyết vấn đề (60 phút - 40 điểm).",
    benchmarkGuide: "Trên 75 điểm: Top 1% thí sinh, xét thẳng mọi ngành CNTT, Vi mạch AI Bách Khoa; 65 – 75 điểm: Đỗ các ngành kỹ thuật cơ điện, ô tô, logistics; 50 – 65 điểm: Đỗ hầu hết các trường khối kỹ thuật liên minh.",
    targetUniversities: "Hơn 40 trường khối kỹ thuật, kinh tế và y dược sử dụng xét tuyển."
  },
  apt: {
    name: "Kỳ thi Đánh giá Năng lực ĐHQG TP.HCM (APT)",
    organizer: "Đại học Quốc gia TP. Hồ Chí Minh",
    format: "Bài thi trắc nghiệm trên giấy, 120 câu hỏi / 150 phút, thang điểm tối đa 1.200.",
    structure: "Sử dụng ngôn ngữ Tiếng Việt & Tiếng Anh (40 câu); Toán học, tư duy logic và phân tích số liệu (30 câu); Giải quyết vấn đề Hóa, Lý, Sinh, Sử, Địa (50 câu).",
    benchmarkGuide: "Trên 900 điểm: Trúng tuyển Bách Khoa, CNTT, Kinh tế Luật, Y Dược; 750 – 900 điểm: Trúng tuyển Sư phạm Kỹ thuật, Kinh tế TP.HCM, Tài chính Marketing; 600 – 750 điểm: Đỗ nhiều trường đại học phía Nam.",
    targetUniversities: "Gần 100 trường đại học miền Nam và miền Trung sử dụng."
  },
  ieltsConversion: {
    name: "Bảng Quy đổi Chứng chỉ Ngoại ngữ Quốc tế 2026",
    rules: [
      { ielts: "7.5 – 9.0", thptEquivalent: "10.0 điểm Tiếng Anh", bonusNotes: "Ưu tiên xét tuyển thẳng kết hợp học bạ tại Ngoại thương, Kinh tế Quốc dân, RMIT, VinUni." },
      { ielts: "6.5 – 7.0", thptEquivalent: "9.5 – 10.0 điểm Tiếng Anh", bonusNotes: "Đủ điều kiện xét tuyển kết hợp vào hầu hết các ngành kinh tế và CNTT hàng đầu." },
      { ielts: "6.0", thptEquivalent: "9.0 – 9.5 điểm Tiếng Anh", bonusNotes: "Miễn thi tốt nghiệp THPT môn tiếng Anh (được tính 10 điểm tốt nghiệp); xét tuyển đại học theo quy định từng trường." },
      { ielts: "5.0 – 5.5", thptEquivalent: "8.0 – 8.5 điểm Tiếng Anh", bonusNotes: "Miễn thi tốt nghiệp THPT môn Ngoại ngữ theo quy chế Bộ GD&ĐT 2026." }
    ]
  }
};
