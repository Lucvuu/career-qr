// Dữ liệu tra cứu ngành, trường, tổ hợp và video trải nghiệm nghề chuẩn THPT 2026
// Mở rộng toàn diện hơn 20 ngành học đón đầu xu thế kỷ nguyên AI & Vi mạch

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
    truong_tieu_bieu: ["ĐH Bách Khoa HN", "ĐH Công nghệ - ĐHQGHN", "ĐH Bách Khoa TP.HCM", "ĐH CNTT - ĐHQG TP.HCM", "Học viện Bưu chính Viễn thông"]
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
    truong_tieu_bieu: ["ĐH Bách Khoa HN", "ĐH Bách Khoa TP.HCM", "ĐH Khoa học Tự nhiên - ĐHQG TP.HCM", "ĐH Công nghệ - ĐHQGHN", "FPT Semiconductor"]
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
    truong_tieu_bieu: ["ĐH Bách Khoa HN", "ĐH Kinh tế Quốc dân", "ĐH Khoa học Tự nhiên - ĐHQG TP.HCM", "ĐH CNTT - ĐHQG TP.HCM"]
  },
  {
    id: "an-ninh-mang",
    ma_nganh: "7480202",
    ten_nganh: "An toàn thông tin & An ninh mạng (Cybersecurity)",
    nhom_nganh: "Công nghệ & Máy tính",
    icon: "🛡️",
    mo_ta: "Bảo vệ hệ thống mạng máy tính, cơ sở dữ liệu và ứng dụng đám mây trước các cuộc tấn công mạng và gián điệp số.",
    nang_luc: "Tư duy phản biện bảo mật, phân tích mã độc, kiên định và phản ứng nhanh",
    so_thich: "Khám phá lỗ hổng bảo mật, giải đố mã hóa (CTF), hệ điều hành Linux",
    mon_hoc: "Toán, Tin học, Tiếng Anh",
    vi_tri_viec_lam: "Chuyên viên an ninh mạng (SOC Analyst), Kỹ sư kiểm thử thâm nhập (Penetration Tester), Kiến trúc sư bảo mật",
    to_hop: ["A00", "A01", "D01"],
    diem_tb: "25.5 - 28.2",
    hoc_phi: "26 - 45 triệu/năm",
    truong_tieu_bieu: ["Học viện An ninh Nhân dân", "Học viện Kỹ thuật Quân sự", "Học viện Bưu chính Viễn thông", "ĐH CNTT - ĐHQG TP.HCM", "ĐH Bách Khoa HN"]
  },
  {
    id: "ky-thuat-phan-mem",
    ma_nganh: "7480103",
    ten_nganh: "Kỹ thuật Phần mềm (Software Engineering)",
    nhom_nganh: "Công nghệ & Máy tính",
    icon: "⚙️",
    mo_ta: "Quy trình xây dựng, kiểm thử, bảo trì và quản lý vòng đời phát triển phần mềm quy mô lớn cho hàng triệu người dùng.",
    nang_luc: "Tư duy thiết kế phần mềm, làm việc nhóm, viết code chuẩn sạch",
    so_thich: "Xây dựng ứng dụng di động, trang web thông minh, game engine",
    mon_hoc: "Toán, Tin học, Tiếng Anh",
    vi_tri_viec_lam: "Fullstack Developer, Mobile App Engineer, DevOps Engineer, Scrum Master",
    to_hop: ["A00", "A01", "D01"],
    diem_tb: "26.0 - 28.8",
    hoc_phi: "26 - 48 triệu/năm",
    truong_tieu_bieu: ["ĐH Bách Khoa HN", "ĐH Công nghệ - ĐHQGHN", "ĐH FPT", "ĐH Bách Khoa TP.HCM", "ĐH CNTT TP.HCM"]
  },
  {
    id: "robot-ai",
    ma_nganh: "7520217",
    ten_nganh: "Kỹ thuật Robot & Trí tuệ Nhân tạo (Robotics & AI)",
    nhom_nganh: "Kỹ thuật & Công nghệ",
    icon: "🦾",
    mo_ta: "Tích hợp cơ khí chính xác, vi mạch điện tử và thuật toán thị giác máy tính AI để chế tạo cánh tay robot và xe tự hành.",
    nang_luc: "Tư duy liên ngành cơ - điện - phần mềm, toán giải tích chuyển động",
    so_thich: "Chế tạo mô hình robot, máy in 3D, thiết bị bay drone không người lái",
    mon_hoc: "Vật lý, Toán, Tin học",
    vi_tri_viec_lam: "Kỹ sư Robot, Kỹ sư thị giác máy tính (Computer Vision), Chuyên viên phát triển xe tự hành",
    to_hop: ["A00", "A01", "D07"],
    diem_tb: "26.0 - 28.8",
    hoc_phi: "30 - 52 triệu/năm",
    truong_tieu_bieu: ["ĐH Bách Khoa HN", "ĐH Bách Khoa TP.HCM", "ĐH Sư phạm Kỹ thuật TP.HCM", "ĐH Quốc tế - ĐHQG TP.HCM"]
  },
  {
    id: "oto-dien",
    ma_nganh: "7510205",
    ten_nganh: "Công nghệ Kỹ thuật Ô tô & Xe điện thông minh",
    nhom_nganh: "Kỹ thuật & Công nghệ",
    icon: "🚗",
    mo_ta: "Nghiên cứu nguyên lý truyền động, động cơ điện, hệ thống pin năng lượng tái tạo và phần mềm điều khiển xe thông minh.",
    nang_luc: "Tư duy kết cấu động lực học, đọc bản vẽ kỹ thuật, yêu thích thử nghiệm cơ điện",
    so_thich: "Tìm hiểu siêu xe, công nghệ pin xe điện (EV), trạm sạc thông minh",
    mon_hoc: "Vật lý, Toán, Hóa học",
    vi_tri_viec_lam: "Kỹ sư R&D Ô tô điện (VinFast, Hyundai), Kỹ sư chẩn đoán điện tử, Giám sát dây chuyền lắp ráp",
    to_hop: ["A00", "A01"],
    diem_tb: "24.5 - 27.5",
    hoc_phi: "25 - 42 triệu/năm",
    truong_tieu_bieu: ["ĐH Bách Khoa HN", "ĐH Bách Khoa TP.HCM", "ĐH Sư phạm Kỹ thuật TP.HCM", "ĐH Giao thông Vận tải"]
  },
  {
    id: "tudonghoa",
    ma_nganh: "7520216",
    ten_nganh: "Kỹ thuật Điều khiển & Tự động hóa",
    nhom_nganh: "Kỹ thuật & Công nghệ",
    icon: "🏭",
    mo_ta: "Thiết kế, chế tạo và vận hành các dây chuyền sản xuất tự động, cánh tay robot và hệ thống IoT thông minh.",
    nang_luc: "Tư duy kỹ thuật, giải tích mạch, lập trình vi điều khiển",
    so_thich: "Chế tạo máy móc, robot, thiết bị cơ điện",
    mon_hoc: "Vật lý, Toán, Tin học",
    vi_tri_viec_lam: "Kỹ sư tự động hóa, Kỹ sư thiết kế Robot, Quản lý vận hành nhà máy thông minh",
    to_hop: ["A00", "A01"],
    diem_tb: "25.8 - 28.2",
    hoc_phi: "24 - 40 triệu/năm",
    truong_tieu_bieu: ["ĐH Bách Khoa HN", "ĐH Bách Khoa TP.HCM", "ĐH Sư phạm Kỹ thuật TP.HCM", "ĐH Bách Khoa Đà Nẵng"]
  },
  {
    id: "y-sinh",
    ma_nganh: "7520212",
    ten_nganh: "Kỹ thuật Y sinh (Biomedical Engineering)",
    nhom_nganh: "Kỹ thuật & Công nghệ",
    icon: "🫀",
    mo_ta: "Ứng dụng kỹ thuật điện tử, quang học và trí tuệ nhân tạo vào thiết kế thiết bị chẩn đoán y tế (máy MRI, tim nhân tạo).",
    nang_luc: "Tư duy kỹ thuật kết hợp sinh lý học, tỉ mỉ, trắc ẩn",
    so_thich: "Khám phá công nghệ chữa bệnh, thiết bị hỗ trợ tàn tật, công nghệ sinh học",
    mon_hoc: "Vật lý, Toán, Sinh học",
    vi_tri_viec_lam: "Kỹ sư thiết bị y tế tại bệnh viện, Chuyên gia kỹ thuật tại tập đoàn y khoa (Siemens, GE Healthcare)",
    to_hop: ["A00", "B00", "A01", "D07"],
    diem_tb: "24.0 - 26.8",
    hoc_phi: "25 - 45 triệu/năm",
    truong_tieu_bieu: ["ĐH Bách Khoa HN", "ĐH Quốc tế - ĐHQG TP.HCM", "ĐH Khoa học Tự nhiên TP.HCM"]
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
    hoc_phi: "45 - 75 triệu/năm",
    truong_tieu_bieu: ["ĐH Y Hà Nội", "ĐH Y Dược TP.HCM", "ĐH Y Khoa Phạm Ngọc Thạch", "ĐH Y Dược Cần Thơ", "ĐH Y Dược Huế"]
  },
  {
    id: "rang-ham-mat",
    ma_nganh: "7720501",
    ten_nganh: "Răng - Hàm - Mặt (Dentistry)",
    nhom_nganh: "Y tế & Sức khỏe",
    icon: "🦷",
    mo_ta: "Chuyên sâu về chẩn đoán, phẫu thuật chỉnh hình nha khoa, cấy ghép implant và thẩm mỹ nụ cười.",
    nang_luc: "Bàn tay khéo léo, độ tập trung cao độ, mắt thẩm mỹ hình khối",
    so_thich: "Chăm sóc răng miệng, phẫu thuật thẩm mỹ, tiểu phẫu tinh vi",
    mon_hoc: "Sinh học, Hóa học, Toán",
    vi_tri_viec_lam: "Bác sĩ nha khoa, Bác sĩ phẫu thuật hàm mặt, Chủ phòng khám nha khoa thẩm mỹ",
    to_hop: ["B00"],
    diem_tb: "27.2 - 28.6",
    hoc_phi: "55 - 95 triệu/năm",
    truong_tieu_bieu: ["ĐH Y Hà Nội", "ĐH Y Dược TP.HCM", "ĐH Y Dược Cần Thơ", "Khoa Y - ĐHQG TP.HCM"]
  },
  {
    id: "duoc-hoc",
    ma_nganh: "7720201",
    ten_nganh: "Dược học (Pharmacy)",
    nhom_nganh: "Y tế & Sức khỏe",
    icon: "💊",
    mo_ta: "Nghiên cứu bào chế thuốc, phân tích dược lý lâm sàng, quản lý chất lượng dược phẩm và chuỗi nhà thuốc hiện đại.",
    nang_luc: "Tư duy hóa học chính xác, cẩn thận, ghi nhớ danh pháp dược chất",
    so_thich: "Thí nghiệm hóa dược, chiết xuất thảo dược tự nhiên, tư vấn sức khỏe",
    mon_hoc: "Hóa học, Sinh học, Toán",
    vi_tri_viec_lam: "Dược sĩ lâm sàng bệnh viện, Nghiên cứu viên R&D nhà máy dược, Quản lý chuỗi bán lẻ dược phẩm",
    to_hop: ["A00", "B00", "D07"],
    diem_tb: "25.0 - 27.5",
    hoc_phi: "35 - 60 triệu/năm",
    truong_tieu_bieu: ["Đại học Dược Hà Nội", "ĐH Y Dược TP.HCM", "ĐH Y Dược Cần Thơ", "ĐH Y Dược Huế"]
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
    truong_tieu_bieu: ["ĐH Kinh tế Quốc dân", "ĐH Ngoại thương", "ĐH Kinh tế TP.HCM", "Học viện Ngân hàng", "RMIT"]
  },
  {
    id: "fintech",
    ma_nganh: "7340205",
    ten_nganh: "Công nghệ Tài chính & Ngân hàng số (Fintech)",
    nhom_nganh: "Kinh doanh & Quản lý",
    icon: "💳",
    mo_ta: "Kết hợp tài chính ngân hàng với công nghệ chuỗi khối (Blockchain), AI và dữ liệu lớn để tự động hóa dịch vụ tài chính.",
    nang_luc: "Tư duy số học nhạy bén, hiểu biết công nghệ thanh toán số, quản trị rủi ro",
    so_thich: "Đầu tư chứng khoán, tiền số, ví điện tử thông minh",
    mon_hoc: "Toán, Tiếng Anh, Tin học",
    vi_tri_viec_lam: "Chuyên viên phát triển sản phẩm Fintech, Chuyên gia phân tích rủi ro tài chính số, Quản trị ví điện tử",
    to_hop: ["A00", "A01", "D01", "D07"],
    diem_tb: "26.0 - 28.5",
    hoc_phi: "28 - 50 triệu/năm",
    truong_tieu_bieu: ["ĐH Kinh tế Quốc dân", "ĐH Kinh tế TP.HCM", "Học viện Ngân hàng", "ĐH Kinh tế - Luật TP.HCM"]
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
    id: "thuong-mai-dien-tu",
    ma_nganh: "7340122",
    ten_nganh: "Thương mại Điện tử (E-Commerce)",
    nhom_nganh: "Kinh doanh & Quản lý",
    icon: "🛒",
    mo_ta: "Vận hành gian hàng số xuyên biên giới, tối ưu hóa trải nghiệm mua sắm trực tuyến và quản trị dữ liệu bán lẻ đa kênh.",
    nang_luc: "Năng động, nhạy bén xu hướng tiêu dùng trực tuyến, am hiểu sàn TMĐT",
    so_thich: "Kinh doanh online, livestream bán hàng, phân tích xu hướng mua sắm",
    mon_hoc: "Toán, Tiếng Anh, Ngữ văn",
    vi_tri_viec_lam: "E-Commerce Operation Manager, Chuyên viên quảng cáo sàn (Shopee/TikTok Shop), Quản trị gian hàng quốc tế",
    to_hop: ["A00", "A01", "D01"],
    diem_tb: "26.0 - 28.2",
    hoc_phi: "24 - 42 triệu/năm",
    truong_tieu_bieu: ["ĐH Thương mại", "ĐH Kinh tế Quốc dân", "ĐH Kinh tế TP.HCM", "Học viện Công nghệ Bưu chính Viễn thông"]
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
    truong_tieu_bieu: ["ĐH Ngoại thương", "ĐH Kinh tế TP.HCM", "ĐH Kinh tế Quốc dân", "Học viện Ngân hàng"]
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
    id: "kien-truc",
    ma_nganh: "7580101",
    ten_nganh: "Kiến trúc & Thiết kế Nội thất số",
    nhom_nganh: "Nghệ thuật & Sáng tạo",
    icon: "🏛️",
    mo_ta: "Quy hoạch không gian sống, thiết kế công trình kiến trúc xanh kết hợp công nghệ mô phỏng không gian 3D/VR.",
    nang_luc: "Tư duy không gian 3 chiều, óc thẩm mỹ kiến trúc, kiên trì dựng hình",
    so_thich: "Vẽ công trình, tìm hiểu nhà đẹp, mô hình kiến trúc",
    mon_hoc: "Toán, Vật lý, Vẽ mỹ thuật",
    vi_tri_viec_lam: "Kiến trúc sư công trình, Nhà thiết kế nội thất, Chuyên viên diễn họa 3D kiến trúc (ArchViz)",
    to_hop: ["V00", "H00", "V01"],
    diem_tb: "23.5 - 26.8",
    hoc_phi: "25 - 45 triệu/năm",
    truong_tieu_bieu: ["ĐH Kiến trúc Hà Nội", "ĐH Kiến trúc TP.HCM", "ĐH Xây dựng Hà Nội", "ĐH Bách Khoa Đà Nẵng"]
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
    id: "luat-kinh-te",
    ma_nganh: "7380107",
    ten_nganh: "Luật Kinh tế & Thương mại Quốc tế",
    nhom_nganh: "Khoa học Xã hội",
    icon: "⚖️",
    mo_ta: "Nghiên cứu hệ thống pháp luật kinh doanh, giải quyết tranh chấp thương mại, sáp nhập doanh nghiệp (M&A) và sở hữu trí tuệ.",
    nang_luc: "Tư duy logic sắc bén, kỹ năng tranh luận chặt chẽ, trí nhớ văn bản luật tốt",
    so_thich: "Đọc luật, tranh biện, theo dõi các vụ kiện thương mại quốc tế",
    mon_hoc: "Ngữ văn, Lịch sử, Giáo dục Kinh tế & Pháp luật, Tiếng Anh",
    vi_tri_viec_lam: "Luật sư tư vấn doanh nghiệp, Thư ký tòa án, Chuyên viên pháp chế tại ngân hàng và tập đoàn",
    to_hop: ["A00", "A01", "C00", "D01"],
    diem_tb: "25.5 - 28.2",
    hoc_phi: "20 - 38 triệu/năm",
    truong_tieu_bieu: ["Đại học Luật Hà Nội", "ĐH Kinh tế Quốc dân", "Đại học Luật TP.HCM", "ĐH Kinh tế - Luật TP.HCM"]
  },
  {
    id: "truyen-thong-da-phuong-tien",
    ma_nganh: "7320104",
    ten_nganh: "Truyền thông Đa phương tiện & Báo chí số",
    nhom_nganh: "Khoa học Xã hội",
    icon: "🎙️",
    mo_ta: "Sản xuất các sản phẩm tin tức số, podcast, phóng sự truyền hình, quản trị khủng hoảng truyền thông trong kỷ nguyên số.",
    nang_luc: "Viết lách sắc sảo, phỏng vấn linh hoạt, biên tập âm thanh & hình ảnh",
    so_thich: "Làm podcast, quay vlog, dẫn chương trình, viết blog",
    mon_hoc: "Ngữ văn, Tiếng Anh, Lịch sử",
    vi_tri_viec_lam: "Nhà báo số, Biên tập viên truyền hình, Chuyên viên PR & Quản trị thương hiệu cá nhân",
    to_hop: ["D01", "C00", "A01"],
    diem_tb: "26.0 - 28.5",
    hoc_phi: "22 - 38 triệu/năm",
    truong_tieu_bieu: ["Học viện Báo chí & Tuyên truyền", "ĐH KHXH&NV - ĐHQGHN", "ĐH KHXH&NV TP.HCM"]
  },
  {
    id: "su-pham-toan-tin",
    ma_nganh: "7140209",
    ten_nganh: "Sư phạm Toán & Tin học (Giáo dục STEM)",
    nhom_nganh: "Sư phạm & Giáo dục",
    icon: "📐",
    mo_ta: "Đào tạo giáo viên dạy Toán và Tin học chuẩn quốc tế, ứng dụng phương pháp giáo dục STEM, lập trình và trí tuệ nhân tạo vào trường phổ thông.",
    nang_luc: "Tư duy logic sư phạm, truyền cảm hứng, kiên nhẫn giảng giải bài toán khó",
    so_thich: "Giảng bài cho bạn, lập trình robot học đường, giải toán nâng cao",
    mon_hoc: "Toán, Tin học, Vật lý",
    vi_tri_viec_lam: "Giáo viên trường THPT chất lượng cao, Chuyên gia thiết kế học liệu STEM/EdTech, Nghiên cứu viên giáo dục",
    to_hop: ["A00", "A01"],
    diem_tb: "26.5 - 28.5",
    hoc_phi: "Miễn 100% học phí + sinh hoạt phí 3.63 tr/tháng (NĐ 116)",
    truong_tieu_bieu: ["ĐH Sư phạm Hà Nội", "ĐH Sư phạm TP.HCM", "ĐH Sư phạm - ĐH Đà Nẵng", "ĐH Giáo dục - ĐHQGHN"]
  },
  {
    id: "su-pham-tieng-anh",
    ma_nganh: "7140231",
    ten_nganh: "Sư phạm Tiếng Anh (English Pedagogy)",
    nhom_nganh: "Sư phạm & Giáo dục",
    icon: "🗣️",
    mo_ta: "Đào tạo giáo viên tiếng Anh đạt chuẩn C1/IELTS 7.5+, am hiểu phương pháp giảng dạy ngôn ngữ hiện đại (TESOL/CELTA).",
    nang_luc: "Phát âm chuẩn bản ngữ, kỹ năng sư phạm tương tác, thấu hiểu tâm lý lứa tuổi",
    so_thich: "Giao tiếp tiếng Anh, đọc văn học Anh - Mỹ, luyện thi IELTS/TOEIC",
    mon_hoc: "Tiếng Anh, Ngữ văn, Lịch sử",
    vi_tri_viec_lam: "Giáo viên tiếng Anh THPT/Trường Quốc tế, Giảng viên trung tâm ngoại ngữ, Chuyên viên khảo thí tiếng Anh",
    to_hop: ["D01"],
    diem_tb: "27.5 - 29.0",
    hoc_phi: "Miễn 100% học phí + sinh hoạt phí 3.63 tr/tháng (NĐ 116)",
    truong_tieu_bieu: ["ĐH Ngoại ngữ - ĐHQGHN", "ĐH Sư phạm Hà Nội", "ĐH Sư phạm TP.HCM", "ĐH Ngoại ngữ - ĐH Đà Nẵng"]
  },
  {
    id: "ngon-ngu-anh",
    ma_nganh: "7220201",
    ten_nganh: "Ngôn ngữ Anh & Biên phiên dịch quốc tế",
    nhom_nganh: "Khoa học Xã hội",
    icon: "🌍",
    mo_ta: "Nghiên cứu văn hóa, ngôn ngữ học ứng dụng, rèn luyện kỹ năng dịch cabin hội nghị và giao tiếp thương mại toàn cầu.",
    nang_luc: "Vốn từ vựng sâu rộng, phản xạ dịch thuật nhanh, tư duy văn hóa đa chiều",
    so_thich: "Dịch phụ đề phim, đọc sách báo quốc tế, dẫn chương trình song ngữ",
    mon_hoc: "Tiếng Anh, Ngữ văn, Lịch sử",
    vi_tri_viec_lam: "Biên phiên dịch viên hội nghị, Chuyên viên đối ngoại doanh nghiệp FDI, Biên tập viên bản tin quốc tế",
    to_hop: ["D01", "A01"],
    diem_tb: "25.5 - 28.0",
    hoc_phi: "22 - 38 triệu/năm",
    truong_tieu_bieu: ["ĐH Ngoại ngữ - ĐHQGHN", "ĐH Ngoại thương", "ĐH KHXH&NV TP.HCM", "Học viện Ngoại giao"]
  },
  {
    id: "tai-chinh-ngan-hang",
    ma_nganh: "7340201",
    ten_nganh: "Tài chính - Ngân hàng & Đầu tư chứng khoán",
    nhom_nganh: "Kinh doanh & Quản lý",
    icon: "🏦",
    mo_ta: "Quản trị dòng tiền doanh nghiệp, phân tích báo cáo tài chính, quản lý danh mục đầu tư chứng khoán và định giá tài sản.",
    nang_luc: "Nhạy cảm với con số tài chính, tư duy quản trị rủi ro, phân tích thị trường vĩ mô",
    so_thich: "Theo dõi bảng giá chứng khoán, đọc báo cáo tài chính, kinh doanh tiền tệ",
    mon_hoc: "Toán, Tiếng Anh, Giáo dục KT&PL",
    vi_tri_viec_lam: "Chuyên viên phân tích tài chính (CFA), Môi giới chứng khoán, Quản lý tín dụng ngân hàng, Chuyên viên nguồn vốn",
    to_hop: ["A00", "A01", "D01", "D07"],
    diem_tb: "25.8 - 28.2",
    hoc_phi: "25 - 45 triệu/năm",
    truong_tieu_bieu: ["Học viện Ngân hàng", "ĐH Kinh tế Quốc dân", "Học viện Tài chính", "ĐH Kinh tế TP.HCM (UEH)", "ĐH Ngân hàng TP.HCM"]
  },
  {
    id: "ke-toan-kiem-toan",
    ma_nganh: "7340301",
    ten_nganh: "Kế toán - Kiểm toán quốc tế (ACCA / CPA)",
    nhom_nganh: "Kinh doanh & Quản lý",
    icon: "📊",
    mo_ta: "Kiểm tra tính minh bạch của sổ sách tài chính, lập báo cáo thuế, kiểm toán nội bộ và tư vấn tuân thủ chuẩn mực kế toán quốc tế IFRS.",
    nang_luc: "Cẩn trọng tuyệt đối, tính kỷ luật cao, tư duy kiểm chứng logic",
    so_thich: "Làm việc với số liệu chi tiết, tính toán thuế, phân tích số dư bảng kế toán",
    mon_hoc: "Toán, Tiếng Anh, Tin học",
    vi_tri_viec_lam: "Kiểm toán viên Big4 (PwC, EY, KPMG, Deloitte), Kế toán trưởng doanh nghiệp, Chuyên viên tư vấn thuế",
    to_hop: ["A00", "A01", "D01"],
    diem_tb: "25.0 - 27.8",
    hoc_phi: "24 - 42 triệu/năm",
    truong_tieu_bieu: ["ĐH Kinh tế Quốc dân", "Học viện Tài chính", "ĐH Kinh tế TP.HCM", "ĐH Hà Nội"]
  },
  {
    id: "du-lich-khach-san",
    ma_nganh: "7810103",
    ten_nganh: "Quản trị Khách sạn & Du lịch quốc tế",
    nhom_nganh: "Kinh doanh & Quản lý",
    icon: "🏨",
    mo_ta: "Quản hành chuỗi khách sạn resort 5 sao, điều hành tour du lịch lữ hành quốc tế, tổ chức sự kiện MICE và quản trị ẩm thực cao cấp.",
    nang_luc: "Giao tiếp hiếu khách, phong thái đĩnh đạc, xử lý tình huống khéo léo",
    so_thich: "Khám phá ẩm thực, du lịch khám phá, trải nghiệm khách sạn nghỉ dưỡng",
    mon_hoc: "Tiếng Anh, Địa lý, Ngữ văn",
    vi_tri_viec_lam: "Giám đốc vận hành khách sạn (Hotel GM), Quản lý tiền sảnh (Front Office), Điều hành tour quốc tế, Event Planner",
    to_hop: ["D01", "A01", "C00"],
    diem_tb: "24.0 - 27.0",
    hoc_phi: "26 - 55 triệu/năm",
    truong_tieu_bieu: ["ĐH Kinh tế Quốc dân", "ĐH Thương mại", "ĐH Khoa học Xã hội & Nhân văn", "ĐH Kinh tế TP.HCM", "ĐH Kinh tế - ĐH Đà Nẵng"]
  },
  {
    id: "hang-khong",
    ma_nganh: "7840101",
    ten_nganh: "Kỹ thuật Hàng không & Quản lý hoạt động bay",
    nhom_nganh: "Kỹ thuật & Công nghệ",
    icon: "✈️",
    mo_ta: "Bảo dưỡng kết cấu thân vỏ tàu bay, hệ thống động cơ phản lực khí động học và kiểm soát không lưu không phận.",
    nang_luc: "Tư duy không gian động lực học, độ tập trung cao độ, phản ứng nhanh",
    so_thich: "Mô hình máy bay, khí tượng học, cấu tạo động cơ phản lực",
    mon_hoc: "Vật lý, Toán, Tiếng Anh",
    vi_tri_viec_lam: "Kỹ sư bảo dưỡng tàu bay (Aircraft Maintenance Engineer - AME), Kiểm soát viên không lưu, Điều phái bay",
    to_hop: ["A00", "A01"],
    diem_tb: "26.0 - 28.5",
    hoc_phi: "35 - 75 triệu/năm",
    truong_tieu_bieu: ["Học viện Hàng không Việt Nam", "ĐH Bách Khoa Hà Nội", "ĐH Bách Khoa TP.HCM"]
  },
  {
    id: "cong-nghe-sinh-hoc",
    ma_nganh: "7420201",
    ten_nganh: "Công nghệ Sinh học & Nông nghiệp Công nghệ cao",
    nhom_nganh: "Kỹ thuật & Công nghệ",
    icon: "🌱",
    mo_ta: "Nghiên cứu chỉnh sửa gen cây trồng, vi sinh phẩm y dược, xử lý môi trường sinh thái và trang trại nhà kính tự động hóa IoT.",
    nang_luc: "Tỉ mỉ trong phòng thí nghiệm, tư duy sinh học phân tử, kiên trì nuôi cấy mô",
    so_thich: "Nuôi cấy thực vật, tìm hiểu di truyền ADN, nghiên cứu men vi sinh",
    mon_hoc: "Sinh học, Hóa học, Toán",
    vi_tri_viec_lam: "Kỹ sư công nghệ sinh học, Chuyên viên R&D dược phẩm sinh học, Quản lý trang trại công nghệ cao",
    to_hop: ["B00", "B08", "A00", "D07"],
    diem_tb: "22.5 - 26.5",
    hoc_phi: "20 - 35 triệu/năm",
    truong_tieu_bieu: ["Học viện Nông nghiệp Việt Nam", "ĐH Khoa học Tự nhiên - ĐHQGHN", "ĐH Khoa học Tự nhiên - ĐHQG TP.HCM", "ĐH Quốc tế - ĐHQG TP.HCM"]
  },
  {
    id: "ngoai-giao",
    ma_nganh: "7310202",
    ten_nganh: "Quan hệ Quốc tế & Ngoại giao chiến lược",
    nhom_nganh: "Khoa học Xã hội",
    icon: "🕊️",
    mo_ta: "Nghiên cứu địa chính trị toàn cầu, chính sách đối ngoại quốc gia, đàm phán hiệp định quốc tế và quan hệ công chúng toàn cầu.",
    nang_luc: "Tư duy chiến lược đối ngoại, tranh biện thuyết phục, thông thạo đa ngôn ngữ",
    so_thich: "Theo dõi thời sự quốc tế, hội nghị mô phỏng Liên Hợp Quốc (MUN), đọc lịch sử quan hệ quốc tế",
    mon_hoc: "Lịch sử, Ngữ văn, Tiếng Anh",
    vi_tri_viec_lam: "Nhà ngoại giao tại Bộ Ngoại giao/Đại sứ quán, Chuyên viên dự án tổ chức phi chính phủ (NGO, UN), Chuyên viên truyền thông đối ngoại",
    to_hop: ["D01", "A01", "C00"],
    diem_tb: "27.0 - 29.2",
    hoc_phi: "22 - 38 triệu/năm",
    truong_tieu_bieu: ["Học viện Ngoại giao (DAV)", "ĐH Khoa học Xã hội & Nhân văn - ĐHQGHN", "ĐH KHXH&NV TP.HCM"]
  },
  {
    id: "xay-dung",
    ma_nganh: "7580201",
    ten_nganh: "Kỹ thuật Xây dựng thông minh & Mô hình hóa BIM",
    nhom_nganh: "Kỹ thuật & Công nghệ",
    icon: "🏗️",
    mo_ta: "Ứng dụng mô hình hóa thông tin công trình (BIM), bê tông vật liệu mới và máy bay flycam để giám sát xây dựng các công trình cao tầng, cầu đường.",
    nang_luc: "Tính toán kết cấu cơ học, quản lý tiến độ đại công trình, chịu được áp lực hiện trường",
    so_thich: "Ngắm các công trình chọc trời, cầu dây văng, máy xúc và thiết bị cơ giới",
    mon_hoc: "Toán, Vật lý, Tin học",
    vi_tri_viec_lam: "Kỹ sư kết cấu công trình, Kỹ sư điều phối BIM (BIM Coordinator), Chỉ huy trưởng công trường, Giám đốc dự án xây dựng",
    to_hop: ["A00", "A01", "D07"],
    diem_tb: "21.0 - 25.0",
    hoc_phi: "24 - 40 triệu/năm",
    truong_tieu_bieu: ["ĐH Xây dựng Hà Nội (HUCE)", "ĐH Bách Khoa Hà Nội", "ĐH Bách Khoa TP.HCM", "ĐH Bách Khoa - ĐH Đà Nẵng", "ĐH Giao thông Vận tải"]
  }
];

// DATASET: CAREER VIDEO HUB & REALITY CHECK
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
        "Ngoại ngữ tiếng Anh và khả năng tự học công nghệ mới là vũ khí sống còn để phát triển mức lương nghìn đô."
      ],
      realityCheck: {
        myth: "Làm IT chỉ ngồi gõ bàn phím cả ngày trong phòng tối một mình, không cần giao tiếp hay kỹ năng mềm.",
        truth: "Kỹ sư phần mềm hiện đại phải liên tục thuyết trình giải pháp, làm việc nhóm với Product Manager, Designer và khách hàng toàn cầu."
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
        "Kỹ sư vi mạch mới ra trường được săn đón với mức đãi ngộ và môi trường phòng sạch (cleanroom) chuẩn quốc tế."
      ],
      realityCheck: {
        myth: "Học vi mạch giống như sửa chữa linh kiện điện tử hay lắp ráp bo mạch đồ gia dụng.",
        truth: "Thiết kế vi mạch là lập trình mô phỏng hàng tỷ bóng bán dẫn (transistor) kích thước nanomet trên phần mềm chuyên dụng đắt giá của Hoa Kỳ."
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
      youtubeId: "h8z4eNXbtbE",
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
      youtubeId: "ne1QCmBw-MI",
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
      channel: "VTV7 Hướng Nghiệp",
      duration: "10:45",
      type: "Thực Tế Phòng Lab",
      youtubeId: "oBE4kHIvaps",
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
      channel: "Arena Multimedia",
      duration: "12:15",
      type: "1 Ngày Làm Nghề",
      youtubeId: "CujT81z0vQU",
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
      channel: "VTV7 Hướng Nghiệp",
      duration: "09:30",
      type: "Góc Nhìn Chuyên Gia",
      youtubeId: "hbQDHin8s7g",
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
      channel: "VTV24 Tiêu Điểm",
      duration: "11:15",
      type: "Thực Tế Phòng Lab",
      youtubeId: "s8ktd86j1Ek",
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

// Aliases mapping for user convenience
const MAJOR_ALIASES = {
  "cntt-ai": "cntt",
  "vi-mach": "vi-mach",
  "marketing-so": "marketing",
  "khoa-hoc-du-lieu": "khdl",
  "y-da-khoa": "ykhoa",
  "thiet-ke-do-hoa-ux": "dohoa",
  "logistics": "logistics",
  "tam-ly-hoc": "tamly",
  "an-ninh-mang": "cntt",
  "ky-thuat-phan-mem": "cntt",
  "robot-ai": "tudonghoa",
  "oto-dien": "tudonghoa",
  "y-sinh": "vi-mach",
  "rang-ham-mat": "ykhoa",
  "duoc-hoc": "ykhoa",
  "fintech": "khdl",
  "thuong-mai-dien-tu": "marketing",
  "kien-truc": "dohoa",
  "luat-kinh-te": "kdqt",
  "truyen-thong-da-phuong-tien": "marketing"
};

export function getVideosForMajor(majorId) {
  const normalizedId = MAJOR_ALIASES[majorId] || majorId;
  const list = CAREER_VIDEOS_BY_MAJOR[normalizedId] || CAREER_VIDEOS_BY_MAJOR["cntt"] || [];
  return list.map(v => ({
    ...v,
    youtubeUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`
  }));
}

export function getWorkdayTimeline(majorId) {
  const normalizedId = MAJOR_ALIASES[majorId] || majorId;
  const timelines = {
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
    "an-ninh-mang": [
      {
        time: "08:30 – 09:30",
        stage: "Kiểm tra cảnh báo SIEM & Nhật ký bảo mật",
        icon: "🛡️",
        desc: "Rà soát hàng nghìn sự kiện an ninh mạng phát sinh trong đêm từ trung tâm SOC, phân loại các luồng tấn công đáng ngờ."
      },
      {
        time: "09:30 – 12:00",
        stage: "Phân tích mã độc & Dò quét lỗ hổng",
        icon: "🔍",
        desc: "Chạy phần mềm cô lập mã độc (Sandbox), phân tích hành vi tấn công và đề xuất bản vá khẩn cấp cho hệ thống máy chủ."
      },
      {
        time: "13:30 – 16:30",
        stage: "Diễn tập tấn công thâm nhập (Red Team)",
        icon: "⚔️",
        desc: "Mô phỏng các kỹ thuật tấn công APT của hacker để kiểm tra độ vững chắc của tường lửa và chính sách bảo mật nội bộ."
      },
      {
        time: "16:30 – 17:30",
        stage: "Báo cáo tuân thủ & Khắc phục rủi ro",
        icon: "📋",
        desc: "Tổng kết các lỗ hổng đã xử lý, cập nhật chính sách an toàn thông tin theo chuẩn quốc tế ISO 27001 cho doanh nghiệp."
      }
    ],
    "robot-ai": [
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
    "oto-dien": [
      {
        time: "08:30 – 09:30",
        stage: "Kiểm tra dữ liệu Telematics của xe thử nghiệm",
        icon: "🚗",
        desc: "Đọc dữ liệu nhiệt độ pin, mức tiêu hao điện năng và tình trạng hệ thống phanh tái sinh từ các xe chạy thử đường trường."
      },
      {
        time: "09:30 – 12:00",
        stage: "Lập trình hệ thống quản lý pin (BMS)",
        icon: "⚡",
        desc: "Tối ưu thuật toán cân bằng cell pin, ngăn ngừa quá nhiệt và gia tăng tuổi thọ bộ pin Lithium-ion của xe điện."
      },
      {
        time: "13:30 – 16:30",
        stage: "Thử nghiệm trên bàn thử công suất Dyno",
        icon: "🏎️",
        desc: "Đo mô-men xoắn, gia tốc và độ ổn định của hệ thống lái trợ lực điện tử trong điều kiện mô phỏng thời tiết khắc nghiệt."
      },
      {
        time: "16:30 – 17:30",
        stage: "Họp an toàn kỹ thuật phương tiện",
        icon: "📋",
        desc: "Đối chiếu các tiêu chuẩn an toàn va chạm quốc tế (Euro NCAP / ASEAN NCAP), duyệt hồ sơ đăng kiểm phương tiện."
      }
    ],
    "ykhoa": [
      {
        time: "07:15 – 08:30",
        stage: "Giao ban buổi sáng & Thăm buồng bệnh",
        icon: "🏥",
        desc: "Nghe điều dưỡng trưởng và bác sĩ trực đêm báo cáo diễn biến ca bệnh nặng, thăm khám thực tế từng bệnh nhân tại khoa."
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
    "rang-ham-mat": [
      {
        time: "08:30 – 09:30",
        stage: "Khảo sát phim chụp Cone Beam CT 3D",
        icon: "🦷",
        desc: "Phân tích cấu trúc xương hàm, đo mật độ xương và lập kế hoạch cấy ghép Implant trên phần mềm chuyên khoa."
      },
      {
        time: "09:30 – 12:00",
        stage: "Thực hiện tiểu phẫu cấy ghép & Chỉnh nha",
        icon: "✨",
        desc: "Thao tác phẫu thuật đặt trụ Implant không đau, gắn mắc cài chỉnh nha thẩm mỹ và kiểm tra khớp cắn cho bệnh nhân."
      },
      {
        time: "13:30 – 16:30",
        stage: "Thiết kế nụ cười kỹ thuật số (DSD)",
        icon: "🎨",
        desc: "Quét dấu răng kỹ thuật số bằng máy quét 3D trong miệng, phối hợp với xưởng Lab chế tác răng sứ thẩm mỹ tự nhiên."
      },
      {
        time: "16:30 – 17:30",
        stage: "Chăm sóc sau thủ thuật & Hướng dẫn vệ sinh",
        icon: "🤝",
        desc: "Dặn dò bệnh nhân các biện pháp chăm sóc tại nhà, kiểm tra lành thương và lên lịch theo dõi định kỳ."
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
    "fintech": [
      {
        time: "08:30 – 09:30",
        stage: "Theo dõi luồng thanh toán thời gian thực",
        icon: "💳",
        desc: "Kiểm tra lưu lượng giao dịch trên cổng thanh toán trực tuyến, theo dõi tỷ lệ thành công của các giao dịch thẻ và mã QR."
      },
      {
        time: "09:30 – 12:00",
        stage: "Thiết kế tính năng ví điện tử / Tiết kiệm số",
        icon: "📱",
        desc: "Xây dựng luồng trải nghiệm người dùng cho sản phẩm vay tiêu dùng tức thì hoặc tích lũy sinh lời vi mô trên app ngân hàng."
      },
      {
        time: "13:30 – 16:30",
        stage: "Kiểm tra mô hình chấm điểm tín dụng AI",
        icon: "🤖",
        desc: "Đánh giá mô hình máy học phát hiện gian lận giao dịch thẻ (Fraud Detection) và chấm điểm rủi ro người vay tự động."
      },
      {
        time: "16:30 – 17:30",
        stage: "Làm việc với Ngân hàng Nhà nước & Đối tác",
        icon: "🤝",
        desc: "Rà soát tính tuân thủ pháp lý tài chính, đối soát dòng tiền và bàn giao báo cáo cho các ngân hàng liên kết."
      }
    ],
    "khdl": [
      {
        time: "08:30 – 09:30",
        stage: "Kiểm tra Data Pipeline & ETL",
        icon: "🤖",
        desc: "Rà soát tính toàn vẹn của hàng triệu dòng dữ liệu được đổ về từ hệ thống giao dịch, phát hiện dữ liệu bất thường (Outliers)."
      },
      {
        time: "09:30 – 12:00",
        stage: "Huấn luyện mô hình Machine Learning",
        icon: "🧠",
        desc: "Thử nghiệm các thuật toán học máy, tinh chỉnh siêu tham số (Hyperparameters) để nâng cao độ chính xác dự báo hành vi người dùng."
      },
      {
        time: "13:30 – 16:30",
        stage: "Trực quan hóa dữ liệu (BI Dashboard)",
        icon: "📊",
        desc: "Xây dựng biểu đồ tương tác trên Tableau / PowerBI giúp ban giám đốc nhìn thấy bức tranh kinh doanh toàn cảnh trực quan."
      },
      {
        time: "16:30 – 17:30",
        stage: "Đề xuất chiến lược dựa trên dữ liệu",
        icon: "💡",
        desc: "Trình bày giải pháp tối ưu hóa doanh số và giảm thiểu tỷ lệ rời bỏ của khách hàng với đội ngũ phát triển sản phẩm."
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
    "su-pham-toan-tin": [
      {
        time: "07:30 – 09:15",
        stage: "Tiết dạy chuyên đề Toán giải tích & Logic",
        icon: "📐",
        desc: "Hướng dẫn học sinh THPT tiếp cận phương pháp giải toán tư duy phản biện và mô phỏng đồ thị hàm số bằng phần mềm GeoGebra."
      },
      {
        time: "09:30 – 11:30",
        stage: "Thực hành lập trình & Giáo dục STEM",
        icon: "💻",
        desc: "Dẫn dắt câu lạc bộ STEM lập trình điều khiển vi mạch Arduino và giải thuật Python, khơi dậy niềm đam mê công nghệ."
      },
      {
        time: "13:30 – 15:30",
        stage: "Họp tổ chuyên môn & Đổi mới đề thi",
        icon: "📝",
        desc: "Biên soạn ma trận đề thi phân hóa năng lực học sinh theo chuẩn chương trình GDPT mới, thẩm định câu hỏi trắc nghiệm đúng/sai."
      },
      {
        time: "15:30 – 17:00",
        stage: "Tư vấn hướng nghiệp & Đồng hành học sinh",
        icon: "🤝",
        desc: "Trao đổi cùng phụ huynh và học sinh về chiến lược chọn ngành khối kỹ thuật - công nghệ, giải đáp thắc mắc tuyển sinh."
      }
    ],
    "tai-chinh-ngan-hang": [
      {
        time: "08:30 – 09:30",
        stage: "Bản tin thị trường tài chính sáng & Vĩ mô",
        icon: "📈",
        desc: "Cập nhật lãi suất liên ngân hàng, tỷ giá ngoại tệ, biến động chỉ số VN-Index và tin tức kinh tế thế giới qua Bloomberg Terminal."
      },
      {
        time: "09:30 – 12:00",
        stage: "Thẩm định hồ sơ tín dụng & Dòng tiền dự án",
        icon: "🏦",
        desc: "Phân tích báo cáo tài chính doanh nghiệp vay vốn, đánh giá tài sản bảo đảm và rà soát các rủi ro thanh khoản tiềm ẩn."
      },
      {
        time: "13:30 – 16:00",
        stage: "Tư vấn danh mục đầu tư & Khách hàng VIP",
        icon: "💼",
        desc: "Thiết kế kế hoạch tài chính cá nhân hóa gồm trái phiếu chính phủ, chứng chỉ quỹ mở và cổ phiếu tăng trưởng cho khách hàng."
      },
      {
        time: "16:00 – 17:30",
        stage: "Cân đối trạng thái nguồn vốn & Báo cáo rủi ro",
        icon: "⚖️",
        desc: "Khóa sổ cân đối tài khoản, báo cáo hệ số an toàn vốn (CAR) và kiểm soát hạn mức tín dụng theo chuẩn mực Basel II."
      }
    ],
    "hang-khong": [
      {
        time: "08:00 – 09:30",
        stage: "Giao ban kỹ thuật & Kiểm tra nhật ký bay",
        icon: "✈️",
        desc: "Rà soát nhật ký hành trình máy bay (Aircraft Technical Log), kiểm tra các lỗi kỹ thuật phát sinh trong chuyến bay đêm trước."
      },
      {
        time: "09:30 – 12:30",
        stage: "Bảo dưỡng hệ thống động cơ phản lực (Line Check)",
        icon: "🔧",
        desc: "Soi buồng đốt động cơ bằng thiết bị nội soi sợi quang (Borescope), kiểm tra áp suất thủy lực và cánh lái máy bay trong hangar."
      },
      {
        time: "13:30 – 15:30",
        stage: "Kiểm tra hệ thống điện tử hàng không (Avionics)",
        icon: "📡",
        desc: "Chạy phần mềm chẩn đoán radar thời tiết, hệ thống dẫn đường quán tính và liên lạc vô tuyến vệ tinh của máy bay."
      },
      {
        time: "15:30 – 17:00",
        stage: "Ký chứng chỉ đủ điều kiện bay (CRS)",
        icon: "📋",
        desc: "Bàn giao máy bay an toàn tuyệt đối cho tổ bay và ký xác nhận phát hành chứng chỉ đủ điều kiện cất cánh (Certificate of Release to Service)."
      }
    ],
    "du-lich-khach-san": [
      {
        time: "08:00 – 09:15",
        stage: "Họp giao ban buổi sáng (Morning Briefing)",
        icon: "🏨",
        desc: "Kiểm tra công suất phòng trong ngày, danh sách khách VIP đặc biệt và kế hoạch chuẩn bị tiệc hội nghị MICE lớn của khách sạn."
      },
      {
        time: "09:30 – 12:00",
        stage: "Kiểm tra chất lượng dịch vụ phòng & Ẩm thực",
        icon: "✨",
        desc: "Rà soát tiêu chuẩn phòng 5 sao, kiểm tra thực đơn fine dining và đảm bảo trải nghiệm khách hàng hoàn hảo đến từng chi tiết."
      },
      {
        time: "13:30 – 15:30",
        stage: "Đàm phán hợp đồng tour với đối tác quốc tế",
        icon: "🤝",
        desc: "Làm việc với các đại lý lữ hành châu Âu, Nhật Bản về chính sách giá mùa cao điểm và liên kết gói tour sinh thái cao cấp."
      },
      {
        time: "15:30 – 17:00",
        stage: "Xử lý phản hồi khách hàng & Tối ưu hóa doanh thu",
        icon: "🌟",
        desc: "Lắng nghe đánh giá của khách trên TripAdvisor/Booking, điều chỉnh giá phòng linh hoạt (Yield Management) để tối đa doanh số."
      }
    ],
    "xay-dung": [
      {
        time: "07:30 – 09:00",
        stage: "An toàn lao động đầu giờ & Khảo sát công trường",
        icon: "🏗️",
        desc: "Tập hợp đội ngũ công nhân phổ biến quy tắc an toàn bảo hộ, kiểm tra giàn giáo và cẩu tháp trước ca thi công đổ bê tông sàn."
      },
      {
        time: "09:30 – 12:00",
        stage: "Kiểm tra mô hình BIM 3D & Xung đột kết cấu",
        icon: "💻",
        desc: "Sử dụng Revit và Navisworks phát hiện các điểm xung đột giữa đường ống cơ điện (MEP) và dầm bê tông cốt thép chịu lực."
      },
      {
        time: "13:30 – 15:30",
        stage: "Nghiệm thu cốt thép cùng Ban Quản lý Dự án",
        icon: "📏",
        desc: "Đo đạc khoảng cách bố trí thép dầm, kiểm tra mác bê tông thương phẩm và ký biên bản nghiệm thu chuyển bước thi công."
      },
      {
        time: "15:30 – 17:00",
        stage: "Cập nhật tiến độ dự án & Nhật ký công trình",
        icon: "📊",
        desc: "Lập biểu đồ tiến độ Primavera, báo cáo khối lượng hoàn thành cho chủ đầu tư và chuẩn bị vật tư thiết bị cho ngày hôm sau."
      }
    ]
  };

  return timelines[normalizedId] || timelines["cntt"];
}

export const UNIVERSITIES_DATA = [
  // --- MIỀN BẮC & HÀ NỘI ---
  {
    id: "hust",
    code: "BKA",
    name: "Đại học Bách Khoa Hà Nội",
    region: "bac",
    regionLabel: "Miền Bắc",
    city: "Hà Nội",
    type: "Công lập trọng điểm",
    benchmarks: "26.0 – 29.2 điểm THPT (hoặc 75+ ĐGTD)",
    tuition: "30 – 45 tr/năm (chuẩn) • 60 – 85 tr/năm (tiên tiến)",
    majors: ["cntt", "vi-mach", "khdl", "tudonghoa", "ky-thuat-phan-mem", "robot-ai", "hang-khong"],
    highlight: "Đại học kỹ thuật & công nghệ số 1 Việt Nam, dẫn đầu chiến lược quốc gia về thiết kế vi mạch bán dẫn và AI.",
    website: "https://hust.edu.vn"
  },
  {
    id: "uet",
    code: "QHI",
    name: "ĐH Công nghệ – ĐHQG Hà Nội",
    region: "bac",
    regionLabel: "Miền Bắc",
    city: "Hà Nội",
    type: "Công lập tinh hoa",
    benchmarks: "26.8 – 28.5 điểm THPT",
    tuition: "32 – 40 tr/năm",
    majors: ["cntt", "vi-mach", "khdl", "robot-ai", "an-ninh-mang"],
    highlight: "Cái nôi nghiên cứu khoa học máy tính và AI của ĐHQGHN, gắn kết chặt chẽ với Viện Hàn lâm KHCN.",
    website: "https://uet.vnu.edu.vn"
  },
  {
    id: "neu",
    code: "KHA",
    name: "Đại học Kinh tế Quốc dân",
    region: "bac",
    regionLabel: "Miền Bắc",
    city: "Hà Nội",
    type: "Công lập tự chủ",
    benchmarks: "26.5 – 28.6 điểm THPT",
    tuition: "26 – 40 tr/năm (chuẩn) • 50 – 70 tr/năm (chất lượng cao)",
    majors: ["marketing", "kdqt", "khdl", "logistics", "tai-chinh-ngan-hang", "ke-toan-kiem-toan", "du-lich-khach-san"],
    highlight: "Ngôi trường kinh tế hàng đầu miền Bắc, mạng lưới cựu sinh viên doanh nhân và lãnh đạo tập đoàn lớn nhất.",
    website: "https://neu.edu.vn"
  },
  {
    id: "ftu",
    code: "NTH",
    name: "Đại học Ngoại thương Hà Nội",
    region: "bac",
    regionLabel: "Miền Bắc",
    city: "Hà Nội",
    type: "Công lập tự chủ",
    benchmarks: "27.5 – 28.7 điểm THPT",
    tuition: "28 – 45 tr/năm",
    majors: ["kdqt", "marketing", "logistics", "tai-chinh-ngan-hang", "ngon-ngu-anh"],
    highlight: "Môi trường học tập năng động, ngoại ngữ xuất sắc, tỷ lệ việc làm tại các tập đoàn đa quốc gia và Big4 thuộc top đầu.",
    website: "https://ftu.edu.vn"
  },
  {
    id: "hmu",
    code: "YHB",
    name: "Đại học Y Hà Nội",
    region: "bac",
    regionLabel: "Miền Bắc",
    city: "Hà Nội",
    type: "Công lập trọng điểm",
    benchmarks: "27.8 – 28.8 điểm (Khối B00)",
    tuition: "45 – 55 tr/năm",
    majors: ["ykhoa", "rang-ham-mat"],
    highlight: "Lịch sử hơn 120 năm, ngọn cờ đầu trong ngành Y tế Việt Nam, đào tạo đội ngũ giáo sư và bác sĩ đầu ngành.",
    website: "https://hmu.edu.vn"
  },
  {
    id: "ptit",
    code: "BVH",
    name: "Học viện Công nghệ Bưu chính Viễn thông",
    region: "bac",
    regionLabel: "Miền Bắc",
    city: "Hà Nội",
    type: "Công lập tự chủ",
    benchmarks: "25.0 – 26.8 điểm THPT",
    tuition: "25 – 36 tr/năm",
    majors: ["cntt", "marketing", "dohoa", "an-ninh-mang", "thuong-mai-dien-tu"],
    highlight: "Thế mạnh công nghệ thực chiến, hợp tác đào tạo và tuyển dụng trực tiếp với Samsung, VNPT, Viettel.",
    website: "https://portal.ptit.edu.vn"
  },
  {
    id: "hnue",
    code: "SPH",
    name: "Đại học Sư phạm Hà Nội",
    region: "bac",
    regionLabel: "Miền Bắc",
    city: "Hà Nội",
    type: "Công lập trọng điểm",
    benchmarks: "25.5 – 28.5 điểm THPT",
    tuition: "Miễn 100% học phí + trợ cấp 3.63 tr/tháng",
    majors: ["su-pham-toan-tin", "su-pham-tieng-anh", "tamly"],
    highlight: "Trung tâm đào tạo giáo viên và chuyên gia giáo dục số 1 cả nước, thụ hưởng chính sách hỗ trợ toàn diện theo NĐ 116.",
    website: "https://hnue.edu.vn"
  },
  {
    id: "dav",
    code: "HVA",
    name: "Học viện Ngoại giao",
    region: "bac",
    regionLabel: "Miền Bắc",
    city: "Hà Nội",
    type: "Công lập trực thuộc Bộ Ngoại giao",
    benchmarks: "27.2 – 29.2 điểm THPT",
    tuition: "25 – 40 tr/năm",
    majors: ["ngoai-giao", "truyen-thong-da-phuong-tien", "ngon-ngu-anh", "kdqt"],
    highlight: "Đào tạo các thế hệ cán bộ ngoại giao, chuyên gia quan hệ quốc tế và phóng viên báo chí quốc tế hàng đầu.",
    website: "https://dav.edu.vn"
  },
  {
    id: "ba",
    code: "NHH",
    name: "Học viện Ngân hàng",
    region: "bac",
    regionLabel: "Miền Bắc",
    city: "Hà Nội",
    type: "Công lập tự chủ",
    benchmarks: "25.5 – 27.5 điểm THPT",
    tuition: "24 – 38 tr/năm",
    majors: ["tai-chinh-ngan-hang", "fintech", "ke-toan-kiem-toan", "kdqt"],
    highlight: "Đào tạo chuyên sâu tài chính, ngân hàng số và công nghệ Fintech trực thuộc Ngân hàng Nhà nước Việt Nam.",
    website: "https://hvnh.edu.vn"
  },
  {
    id: "hlu",
    code: "LPH",
    name: "Đại học Luật Hà Nội",
    region: "bac",
    regionLabel: "Miền Bắc",
    city: "Hà Nội",
    type: "Công lập trọng điểm",
    benchmarks: "25.0 – 28.2 điểm THPT",
    tuition: "22 – 36 tr/năm",
    majors: ["luat-kinh-te"],
    highlight: "Cơ sở đào tạo luật pháp lớn nhất Việt Nam, cung ứng thẩm phán, kiểm sát viên và luật sư doanh nghiệp cấp cao.",
    website: "https://hlu.edu.vn"
  },
  {
    id: "huce",
    code: "XDA",
    name: "Đại học Xây dựng Hà Nội",
    region: "bac",
    regionLabel: "Miền Bắc",
    city: "Hà Nội",
    type: "Công lập",
    benchmarks: "21.5 – 25.0 điểm THPT",
    tuition: "22 – 35 tr/năm",
    majors: ["xay-dung", "kien-truc"],
    highlight: "Chiếc nôi đào tạo kỹ sư xây dựng, kiến trúc sư công trình và chuyên gia mô hình hóa BIM uy tín nhất miền Bắc.",
    website: "https://huce.edu.vn"
  },
  {
    id: "ussh-hn",
    code: "QHX",
    name: "ĐH Khoa học Xã hội & Nhân văn – ĐHQGHN",
    region: "bac",
    regionLabel: "Miền Bắc",
    city: "Hà Nội",
    type: "Công lập",
    benchmarks: "24.5 – 28.0 điểm THPT",
    tuition: "16 – 28 tr/năm",
    majors: ["tamly", "truyen-thong-da-phuong-tien", "du-lich-khach-san"],
    highlight: "Trung tâm nghiên cứu khoa học xã hội uy tín, thế mạnh về tâm lý học hành vi, báo chí truyền thông và quản trị du lịch.",
    website: "https://ussh.vnu.edu.vn"
  },

  // --- MIỀN TRUNG & TÂY NGUYÊN ---
  {
    id: "dut",
    code: "DDK",
    name: "Đại học Bách Khoa – ĐH Đà Nẵng",
    region: "trung",
    regionLabel: "Miền Trung",
    city: "Đà Nẵng",
    type: "Công lập trọng điểm",
    benchmarks: "24.0 – 26.8 điểm THPT",
    tuition: "25 – 36 tr/năm",
    majors: ["cntt", "vi-mach", "tudonghoa", "oto-dien", "xay-dung", "kien-truc"],
    highlight: "Đại học kỹ thuật hàng đầu miền Trung, trung tâm đào tạo nhân lực thiết kế chip và công nghệ số cho Đà Nẵng Silicon.",
    website: "https://dut.udn.vn"
  },
  {
    id: "due",
    code: "DDQ",
    name: "Đại học Kinh tế – ĐH Đà Nẵng",
    region: "trung",
    regionLabel: "Miền Trung",
    city: "Đà Nẵng",
    type: "Công lập tự chủ",
    benchmarks: "23.5 – 26.2 điểm THPT",
    tuition: "24 – 38 tr/năm",
    majors: ["marketing", "kdqt", "du-lich-khach-san", "tai-chinh-ngan-hang", "thuong-mai-dien-tu"],
    highlight: "Cái nôi đào tạo khối ngành kinh tế, marketing và quản trị du lịch khách sạn lớn nhất khu vực miền Trung - Tây Nguyên.",
    website: "https://due.udn.vn"
  },
  {
    id: "hump",
    code: "DHY",
    name: "Đại học Y Dược – Đại học Huế",
    region: "trung",
    regionLabel: "Miền Trung",
    city: "Huế",
    type: "Công lập",
    benchmarks: "25.0 – 27.2 điểm (Khối B00)",
    tuition: "42 – 55 tr/năm",
    majors: ["ykhoa", "rang-ham-mat", "duoc-hoc"],
    highlight: "Trung tâm y tế chuyên sâu của miền Trung, cơ sở bệnh viện thực hành hiện đại, đào tạo bác sĩ tay nghề vững vàng.",
    website: "https://huemed-univ.edu.vn"
  },
  {
    id: "vku",
    code: "VKU",
    name: "ĐH Công nghệ TT & Truyền thông Việt - Hàn",
    region: "trung",
    regionLabel: "Miền Trung",
    city: "Đà Nẵng",
    type: "Công lập hợp tác quốc tế",
    benchmarks: "22.5 – 25.5 điểm THPT",
    tuition: "18 – 28 tr/năm",
    majors: ["cntt", "vi-mach", "khdl", "dohoa"],
    highlight: "Được chính phủ Hàn Quốc (KOICA) tài trợ trang thiết bị, mũi nhọn đào tạo kỹ sư bán dẫn và trí tuệ nhân tạo miền Trung.",
    website: "https://vku.udn.vn"
  },

  // --- MIỀN NAM & TP.HCM ---
  {
    id: "hcmut",
    code: "QSB",
    name: "Đại học Bách Khoa – ĐHQG TP.HCM",
    region: "nam",
    regionLabel: "Miền Nam",
    city: "TP. Hồ Chí Minh",
    type: "Công lập trọng điểm",
    benchmarks: "Xét tuyển ĐGNL (760+) & THPT (26.0+)",
    tuition: "30 – 48 tr/năm",
    majors: ["cntt", "vi-mach", "tudonghoa", "oto-dien", "hang-khong", "xay-dung", "logistics"],
    highlight: "Đại học kỹ thuật hàng đầu phía Nam, đạt chuẩn kiểm định ABET của Hoa Kỳ, kết nối hàng trăm tập đoàn công nghệ toàn cầu.",
    website: "https://hcmut.edu.vn"
  },
  {
    id: "uit",
    code: "QSC",
    name: "ĐH Công nghệ Thông tin – ĐHQG TP.HCM",
    region: "nam",
    regionLabel: "Miền Nam",
    city: "TP. Hồ Chí Minh",
    type: "Công lập tinh hoa",
    benchmarks: "26.2 – 28.2 điểm THPT",
    tuition: "32 – 45 tr/năm",
    majors: ["cntt", "khdl", "vi-mach", "an-ninh-mang", "ky-thuat-phan-mem"],
    highlight: "Đại học chuyên sâu 100% ngành CNTT và Vi mạch, tỷ lệ sinh viên có việc làm trước khi tốt nghiệp đạt hơn 95%.",
    website: "https://uit.edu.vn"
  },
  {
    id: "ueh",
    code: "KSA",
    name: "Đại học Kinh tế TP.HCM (UEH)",
    region: "nam",
    regionLabel: "Miền Nam",
    city: "TP. Hồ Chí Minh",
    type: "Công lập tự chủ",
    benchmarks: "25.5 – 27.8 điểm THPT",
    tuition: "28 – 45 tr/năm",
    majors: ["marketing", "kdqt", "logistics", "khdl", "fintech", "tai-chinh-ngan-hang", "ke-toan-kiem-toan"],
    highlight: "Top 1 đại học kinh tế miền Nam, chuyển mình thành đại học đa ngành và tiên phong đào tạo công nghệ ứng dụng.",
    website: "https://ueh.edu.vn"
  },
  {
    id: "ump",
    code: "YDS",
    name: "Đại học Y Dược TP.HCM",
    region: "nam",
    regionLabel: "Miền Nam",
    city: "TP. Hồ Chí Minh",
    type: "Công lập trọng điểm",
    benchmarks: "27.5 – 28.5 điểm (Khối B00)",
    tuition: "46 – 82 tr/năm",
    majors: ["ykhoa", "rang-ham-mat", "duoc-hoc"],
    highlight: "Thành lũy đào tạo y dược số 1 miền Nam, mạng lưới bệnh viện thực hành lớn nhất TP.HCM với các giáo sư đầu ngành.",
    website: "https://ump.edu.vn"
  },
  {
    id: "pntu",
    code: "TYS",
    name: "Đại học Y khoa Phạm Ngọc Thạch",
    region: "nam",
    regionLabel: "Miền Nam",
    city: "TP. Hồ Chí Minh",
    type: "Công lập trực thuộc UBND TP.HCM",
    benchmarks: "25.8 – 27.4 điểm (Khối B00)",
    tuition: "42 – 60 tr/năm",
    majors: ["ykhoa", "rang-ham-mat", "duoc-hoc"],
    highlight: "Đào tạo bác sĩ thực hành chất lượng cao cung ứng cho toàn bộ hệ thống y tế TP.HCM và các tỉnh lân cận.",
    website: "https://pnt.edu.vn"
  },
  {
    id: "hcmus",
    code: "QST",
    name: "ĐH Khoa học Tự nhiên – ĐHQG TP.HCM",
    region: "nam",
    regionLabel: "Miền Nam",
    city: "TP. Hồ Chí Minh",
    type: "Công lập",
    benchmarks: "24.5 – 27.5 điểm THPT",
    tuition: "26 – 40 tr/năm",
    majors: ["cntt", "khdl", "vi-mach", "cong-nghe-sinh-hoc"],
    highlight: "Cơ sở nghiên cứu khoa học cơ bản hàng đầu, nơi ươm mầm các tài năng toán học, AI và công nghệ bán dẫn.",
    website: "https://hcmus.edu.vn"
  },
  {
    id: "hcmute",
    code: "SPK",
    name: "ĐH Sư phạm Kỹ thuật TP.HCM",
    region: "nam",
    regionLabel: "Miền Nam",
    city: "TP. Hồ Chí Minh",
    type: "Công lập tự chủ",
    benchmarks: "24.5 – 26.8 điểm THPT",
    tuition: "28 – 38 tr/năm",
    majors: ["robot-ai", "oto-dien", "tudonghoa", "cntt", "dohoa"],
    highlight: "Nổi tiếng toàn quốc về kỹ năng thực hành, máy móc thiết bị xưởng hiện đại, sinh viên tốt nghiệp tay nghề cực giỏi.",
    website: "https://hcmute.edu.vn"
  },
  {
    id: "ftu2",
    code: "NTS",
    name: "ĐH Ngoại thương Cơ sở 2 TP.HCM",
    region: "nam",
    regionLabel: "Miền Nam",
    city: "TP. Hồ Chí Minh",
    type: "Công lập tự chủ",
    benchmarks: "27.5 – 28.5 điểm THPT",
    tuition: "28 – 45 tr/năm",
    majors: ["kdqt", "marketing", "logistics", "tai-chinh-ngan-hang"],
    highlight: "Điểm chuẩn top đầu miền Nam, sinh viên năng động, phong trào khởi nghiệp và tiếng Anh giao tiếp đỉnh cao.",
    website: "https://cs2.ftu.edu.vn"
  },
  {
    id: "uel",
    code: "QSX",
    name: "ĐH Kinh tế – Luật – ĐHQG TP.HCM",
    region: "nam",
    regionLabel: "Miền Nam",
    city: "TP. Hồ Chí Minh",
    type: "Công lập",
    benchmarks: "25.0 – 27.2 điểm THPT",
    tuition: "24 – 38 tr/năm",
    majors: ["luat-kinh-te", "fintech", "tai-chinh-ngan-hang", "kdqt"],
    highlight: "Sự kết hợp độc đáo giữa Kinh tế và Luật, đào tạo chuyên sâu luật sư thương mại quốc tế và chuyên viên pháp chế doanh nghiệp.",
    website: "https://uel.edu.vn"
  },
  {
    id: "fpt-rmit",
    code: "FPT/RMIT",
    name: "Đại học FPT / RMIT Việt Nam",
    region: "nam",
    regionLabel: "Quốc tế / Toàn quốc",
    city: "Hà Nội, TP.HCM, Đà Nẵng",
    type: "Quốc tế & Tư thục chuẩn quốc tế",
    benchmarks: "Xét học bạ (Top 40 SchoolRank) / Điểm thi THPT 21+",
    tuition: "75 – 120 tr/năm (FPT) • 250 – 330 tr/năm (RMIT)",
    majors: ["cntt", "vi-mach", "dohoa", "marketing", "kdqt", "du-lich-khach-san"],
    highlight: "100% học bằng tiếng Anh, kỳ thực học On-the-job Training tại doanh nghiệp, bằng cấp quốc tế danh giá.",
    website: "https://fpt.edu.vn"
  }
];

export const COMBINATIONS_DATA = [
  { ma: "A00", mon: "Toán – Vật lí – Hóa học", nhom: "Kỹ thuật, Công nghệ, Bán dẫn, Khoa học tự nhiên, Kinh tế" },
  { ma: "A01", mon: "Toán – Vật lí – Tiếng Anh", nhom: "Công nghệ thông tin, Vi mạch, Kinh tế, Logistics, Ngoại thương" },
  { ma: "B00", mon: "Toán – Hóa học – Sinh học", nhom: "Y đa khoa, Răng hàm mặt, Dược, Công nghệ sinh học" },
  { ma: "B08", mon: "Toán – Sinh học – Tiếng Anh", nhom: "Y khoa chất lượng cao, Kỹ thuật y sinh, Dược" },
  { ma: "C00", mon: "Ngữ văn – Lịch sử – Địa lý", nhom: "Luật, Báo chí, Sư phạm, Khoa học Xã hội & Nhân văn, Tâm lý" },
  { ma: "D01", mon: "Toán – Ngữ văn – Tiếng Anh", nhom: "Kinh doanh, Tài chính, Ngoại ngữ, Marketing, Truyền thông, Thiết kế" },
  { ma: "D07", mon: "Toán – Hóa học – Tiếng Anh", nhom: "Kỹ thuật Hóa học, Kỹ thuật Y sinh, Vi mạch, Fintech" },
  { ma: "V00", mon: "Toán – Vật lí – Vẽ mỹ thuật", nhom: "Kiến trúc công trình, Thiết kế nội thất, Quy hoạch đô thị" },
  { ma: "H00", mon: "Ngữ văn – Năng khiếu vẽ 1 – Năng khiếu vẽ 2", nhom: "Thiết kế đồ họa, Mỹ thuật ứng dụng, Tạo dáng công nghiệp" }
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
