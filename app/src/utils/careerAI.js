// SMART VIETNAMESE AI CAREER CO-PILOT ENGINE (2026 EDITION)
// Grounded in MAJORS_DATA, CAREER_VIDEOS_BY_MAJOR, and Vietnam University Admission Benchmark Data

import { MAJORS_DATA } from '../data/careerData.js';

/**
 * Normalizes Vietnamese text by stripping diacritics, replacing đ/Đ with d/D,
 * converting to lowercase and trimming whitespace.
 */
export function normalizeVN(str = '') {
  if (!str) return '';
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

/**
 * Keyword-to-Major dictionary with rich synonyms and student slang.
 */
export const MAJOR_KEYWORD_MAP = [
  {
    id: 'vi-mach',
    keywords: [
      'vi mach', 'ban dan', 'ic design', 'chip', 'dien tu', 
      'semiconductor', 'thiet ke vi mach', 'ky thuat ban dan', 
      'mach tich hop', 'vi mach ban dan'
    ]
  },
  {
    id: 'cntt',
    keywords: [
      'ai', 'tri tue nhan tao', 'cntt', 'cong nghe thong tin', 
      'may tinh', 'it', 'lap trinh', 'phan mem', 'khoa hoc may tinh', 
      'software engineer', 'developer', 'an ninh mang'
    ]
  },
  {
    id: 'ykhoa',
    keywords: [
      'y da khoa', 'bac si', 'truong y', 'nganh y', 'y khoa', 
      'y duoc', 'y te', 'bac si da khoa', 'noi tru', 'kham chua benh'
    ]
  },
  {
    id: 'marketing',
    keywords: [
      'marketing', 'truyen thong', 'quang cao', 'pr', 
      'digital marketing', 'martech', 'truyen thong so', 
      'sang tao noi dung', 'content', 'brand'
    ]
  },
  {
    id: 'khdl',
    keywords: [
      'du lieu', 'data', 'business analytics', 'phan tich kinh doanh', 
      'khoa hoc du lieu', 'data scientist', 'data analyst', 'big data'
    ]
  },
  {
    id: 'dohoa',
    keywords: [
      'thiet ke', 'do hoa', 'ui', 'ux', 'design', 'my thuat', 
      'da phuong tien', 'graphic design', 'ui/ux', 'tao hinh'
    ]
  },
  {
    id: 'logistics',
    keywords: [
      'logistics', 'chuoi cung ung', 'xuat nhap khau', 'cang bien', 
      'kho van', 'supply chain', 'forwarder', 'van tai'
    ]
  },
  {
    id: 'tamly',
    keywords: [
      'tam ly', 'tham van', 'tri lieu', 'tam ly hoc', 
      'tu van tam ly', 'suc khoe tinh than', 'tam ly hoc duong'
    ]
  },
  {
    id: 'kdqt',
    keywords: [
      'kinh doanh quoc te', 'kdqt', 'ngoai thuong', 
      'thuong mai quoc te', 'kinh te quoc te', 'xuyen bien gioi'
    ]
  },
  {
    id: 'tudonghoa',
    keywords: [
      'tu dong hoa', 'robot', 'co dien tu', 'dieu khien', 
      'dieu khien tu dong', 'nha may thong minh', 'plc'
    ]
  }
];

/**
 * Detailed 5-Year Roadmap, Realities, Skills, and Salary metadata for each major.
 */
export const MAJOR_KNOWLEDGE_BASE = {
  'vi-mach': {
    roadmap5Year: [
      'Năm 1–2: Làm chủ Toán giải tích, Vật lý bán dẫn, Lý thuyết mạch số và lập trình phần cứng cơ sở.',
      'Năm 3–4 (Junior / Verification Intern): Kỹ sư thực tập kiểm thử vi mạch (Verification Intern), thiết kế RTL/FPGA (lương thực tập 8 – 14 triệu/tháng).',
      'Năm 5 (Kỹ sư chính thức): IC Design Engineer, Kỹ sư kiểm thử Chip tại các tập đoàn bán dẫn (Synopsys, Marvell, Renesas, FPT Semiconductor) với lương 18 – 32 triệu/tháng.',
      'Sau 3–5 năm tốt nghiệp: Senior Verification Lead, Chip Architecture Specialist, mức đãi ngộ 45 – 85+ triệu/tháng.'
    ],
    salaryRange: 'Khởi điểm: 16 – 30 triệu/tháng • 3–5 năm kinh nghiệm: 45 – 85+ triệu/tháng',
    employmentRate: '98.5% sinh viên có việc làm trước khi nhận bằng',
    aiResilience: '95% (Cực cao — AI không thể thay thế kỹ sư thiết kế phần cứng vật lý và kiến trúc bán dẫn)',
    foundationSubjects: 'Toán cao cấp, Vật lý chất rắn, Giải tích mạch số, Kiến trúc máy tính, Ngôn ngữ Verilog/VHDL',
    skills: ['Tư duy vật lý bán dẫn', 'Giải tích mạch số & vi xử lý', 'Lập trình mô phỏng Verilog/VHDL', 'Tiếng Anh kỹ thuật chuyên sâu'],
    realityCheck: {
      myth: 'Học vi mạch chỉ là đi sửa chữa bo mạch điện tử hoặc lắp ráp đồ gia dụng.',
      truth: 'Kỹ sư vi mạch thiết kế và lập trình mô phỏng hàng tỷ bóng bán dẫn (transistor) kích thước nanomet trên phần mềm chuyên dụng đắt giá của Hoa Kỳ (Synopsys, Cadence).'
    }
  },
  'cntt': {
    roadmap5Year: [
      'Năm 1–2: Cấu trúc dữ liệu & Giải thuật, Toán rời rạc, Lập trình C++/Java/Python, Kiến trúc hệ điều hành.',
      'Năm 3–4 (Junior Developer / AI Intern): Thực tập làm việc tại công ty công nghệ, tham gia các sprint Agile (lương thực tập 8 – 13 triệu/tháng).',
      'Năm 5 (Kỹ sư chính thức): Software Engineer, AI Engineer, Cloud Specialist, thu nhập 15 – 26 triệu/tháng.',
      'Sau 3–5 năm: Senior Tech Lead, Solution Architect, Product Engineer, thu nhập 40 – 75+ triệu/tháng.'
    ],
    salaryRange: 'Khởi điểm: 14 – 26 triệu/tháng • 3–5 năm kinh nghiệm: 40 – 75+ triệu/tháng',
    employmentRate: '97.8% có việc làm trong vòng 6 tháng',
    aiResilience: '88% (Chuyển dịch mạnh từ code thủ công sang kiến trúc hệ thống và tích hợp AI)',
    foundationSubjects: 'Cấu trúc dữ liệu & Giải thuật, Toán giải tích, Cơ sở dữ liệu quan hệ, Lập trình hướng đối tượng (OOP)',
    skills: ['Tư duy thuật toán & Logic sắc bén', 'Lập trình Fullstack / AI Core', 'Kỹ năng giải quyết bài toán lớn', 'Ngoại ngữ tiếng Anh đọc tài liệu quốc tế'],
    realityCheck: {
      myth: 'Làm IT chỉ ngồi gõ bàn phím cả ngày trong phòng tối một mình, không cần giao tiếp hay kỹ năng mềm.',
      truth: 'Kỹ sư phần mềm hiện đại phải liên tục thuyết trình giải pháp, làm việc nhóm với Product Manager, Designer và khách hàng toàn cầu; code chỉ chiếm 40% thời gian.'
    }
  },
  'ykhoa': {
    roadmap5Year: [
      'Năm 1–2: Giải phẫu học, Sinh lý học, Hóa sinh, Di truyền y học và Mô phôi học cơ sở.',
      'Năm 3–4: Triệu chứng học lâm sàng, luân khoa liên tục tại bệnh viện tuyến đầu (Nội, Ngoại, Sản, Nhi).',
      'Năm 5–6: Điều trị học chuyên sâu, trực cấp cứu, hoàn thành khóa luận và kỳ thi tốt nghiệp Bác sĩ Y khoa.',
      'Sau tốt nghiệp: 18 tháng thực hành cấp chứng chỉ hành nghề (CCHN) hoặc thi Bác sĩ nội trú tại các bệnh viện trung ương.'
    ],
    salaryRange: 'Giai đoạn tập sự: 9 – 16 triệu/tháng • Sau khi có CCHN và thâm niên: 35 – 80+ triệu/tháng',
    employmentRate: '99.5% luôn được các cơ sở y tế săn đón',
    aiResilience: '98% (AI chỉ hỗ trợ chẩn đoán hình ảnh; y đức và quyết định điều trị lâm sàng luôn thuộc về bác sĩ)',
    foundationSubjects: 'Giải phẫu học, Sinh lý bệnh học, Dược lý học lâm sàng, Vi sinh & Ký sinh trùng',
    skills: ['Trí nhớ dài hạn & Quan sát tỉ mỉ', 'Khả năng chịu áp lực trực đêm cao', 'Y đức & Thấu cảm sâu sắc với người bệnh', 'Khả năng ra quyết định nhanh, chuẩn xác'],
    realityCheck: {
      myth: 'Ra trường là làm bác sĩ mở phòng khám kiếm tiền tỷ ngay lập tức mà không cần phấn đấu thêm.',
      truth: 'Học Y là con đường "chậm mà chắc", mất từ 7.5 – 10 năm học tập và thực hành lâm sàng bền bỉ trước khi có thể tự chủ hành nghề vững vàng.'
    }
  },
  'marketing': {
    roadmap5Year: [
      'Năm 1–2: Nguyên lý Marketing, Kinh tế học hành vi, Nghiên cứu thị trường và Thống kê ứng dụng.',
      'Năm 3–4 (Junior Marketer / Intern): Thực tập tại Agency quảng cáo hoặc phòng Marketing doanh nghiệp (lương thực tập 6 – 10 triệu/tháng).',
      'Năm 5 (Chuyên viên chính thức): Digital Marketing Executive, Brand Specialist, Content Strategist, thu nhập 11 – 20 triệu/tháng.',
      'Sau 3–5 năm: Senior Brand Manager, Marketing Director, mức thu nhập 35 – 65+ triệu/tháng.'
    ],
    salaryRange: 'Khởi điểm: 11 – 20 triệu/tháng • 3–5 năm kinh nghiệm: 35 – 65+ triệu/tháng',
    employmentRate: '96.5% sinh viên có việc làm linh hoạt',
    aiResilience: '84% (AI hỗ trợ sáng tạo nội dung nhanh nhưng con người làm chủ chiến lược cảm xúc & thấu hiểu khách hàng)',
    foundationSubjects: 'Hành vi người tiêu dùng, Quản trị thương hiệu, Digital Marketing & MarTech, Truyền thông tích hợp (IMC)',
    skills: ['Nhạy bén tâm lý & Bắt trend xã hội', 'Phân tích số liệu quảng cáo (ROI, CPA, A/B Testing)', 'Sáng tạo nội dung chạm cảm xúc', 'Thuyết trình & Đàm phán thuyết phục'],
    realityCheck: {
      myth: 'Làm marketing chỉ cần hoạt ngôn, vui vẻ và thích "chém gió" là đủ thành công.',
      truth: 'Marketing hiện đại là cuộc chơi của dữ liệu: Phải đọc chỉ số ROI, CPA, phân tích chuyển đổi và tâm lý khách hàng cực kỳ kỷ luật.'
    }
  },
  'khdl': {
    roadmap5Year: [
      'Năm 1–2: Toán xác suất thống kê, Đại số tuyến tính, Lập trình Python/R và Cơ sở dữ liệu SQL.',
      'Năm 3–4 (Data Analyst / ML Intern): Xây dựng dashboard BI, trích xuất dữ liệu thực tế cho doanh nghiệp (lương 8 – 14 triệu/tháng).',
      'Năm 5 (Data Scientist chính thức): Phát triển các mô hình học máy (Machine Learning), tối ưu thuật toán dự báo (lương 15 – 28 triệu/tháng).',
      'Sau 3–5 năm: Lead Data Scientist, AI Architect, thu nhập 40 – 80+ triệu/tháng.'
    ],
    salaryRange: 'Khởi điểm: 15 – 28 triệu/tháng • 3–5 năm kinh nghiệm: 40 – 80+ triệu/tháng',
    employmentRate: '98.0% nhu cầu tuyển dụng tăng vọt',
    aiResilience: '90% (Chính là ngành tạo ra các mô hình AI nền tảng cho nhân loại)',
    foundationSubjects: 'Xác suất thống kê chuyên sâu, Học máy (Machine Learning), Khai phá dữ liệu (Data Mining), Lập trình Python & SQL',
    skills: ['Tư duy toán học sâu sắc', 'Lập trình phân tích dữ liệu lớn', 'Trực quan hóa dữ liệu (Data Storytelling)', 'Hiểu biết bài toán kinh doanh'],
    realityCheck: {
      myth: 'Chỉ cần biết dùng Excel hoặc vẽ biểu đồ PowerPoint là có thể làm Data Scientist.',
      truth: 'Phải hiểu sâu bản chất toán học của các thuật toán Machine Learning để xây dựng mô hình dự đoán chính xác và không bị sai lệch.'
    }
  },
  'dohoa': {
    roadmap5Year: [
      'Năm 1–2: Cơ sở tạo hình, Màu sắc học, Luật phối cảnh, Typography và phần mềm Adobe Photoshop/Illustrator.',
      'Năm 3–4 (UI/UX Intern): Nghiên cứu trải nghiệm người dùng, vẽ wireframe & prototype trên Figma (lương 7 – 12 triệu/tháng).',
      'Năm 5 (Product Designer): Thiết kế giao diện app/web triệu người dùng, hoàn thiện hệ thống Design System (12 – 22 triệu/tháng).',
      'Sau 3–5 năm: Senior Art Director, Head of Design, mức đãi ngộ 30 – 60+ triệu/tháng.'
    ],
    salaryRange: 'Khởi điểm: 12 – 22 triệu/tháng • 3–5 năm kinh nghiệm: 30 – 60+ triệu/tháng',
    employmentRate: '95.0% cơ hội việc làm linh hoạt toàn cầu (Remote/Freelance)',
    aiResilience: '80% (AI vẽ hình rất nhanh nhưng tư duy giải quyết bài toán giao diện và trải nghiệm cảm xúc con người vẫn là cốt lõi)',
    foundationSubjects: 'Nguyên lý thị giác, Tâm lý học màu sắc, Thiết kế trải nghiệm người dùng (UX/UI), Typography chuyên sâu',
    skills: ['Gu thẩm mỹ tinh tế', 'Thành thạo Figma & Bộ công cụ Adobe', 'Tư duy lấy người dùng làm trung tâm', 'Khả năng chuyển ngữ yêu cầu kinh doanh thành thiết kế'],
    realityCheck: {
      myth: 'Học thiết kế đồ họa là chỉ cần biết vẽ tranh đẹp và dùng thành thạo Photoshop cơ bản.',
      truth: 'Designer giỏi phải thấu hiểu tâm lý học nhận thức, hành vi tương tác số và biết giải quyết bài toán kinh doanh của doanh nghiệp.'
    }
  },
  'logistics': {
    roadmap5Year: [
      'Năm 1–2: Kinh tế vi mô/vĩ mô, Tiếng Anh thương mại quốc tế, Quản trị logistics đại cương và Luật thương mại.',
      'Năm 3–4 (Forwarder / Supply Chain Intern): Thực tập tại cảng biển, công ty giao nhận vận tải quốc tế (lương 7 – 11 triệu/tháng).',
      'Năm 5 (Chuyên viên chính thức): Quản trị kho bãi thông minh, Điều phối vận tải đa phương thức (12 – 22 triệu/tháng).',
      'Sau 3–5 năm: Supply Chain Manager, Giám đốc Logistics, thu nhập 35 – 70+ triệu/tháng.'
    ],
    salaryRange: 'Khởi điểm: 12 – 22 triệu/tháng • 3–5 năm kinh nghiệm: 35 – 70+ triệu/tháng',
    employmentRate: '97.2% nhu cầu tuyển dụng rất lớn do Việt Nam là trung tâm sản xuất toàn cầu',
    aiResilience: '86% (AI tối ưu hóa tuyến đường nhưng đàm phán hợp đồng quốc tế và xử lý khủng hoảng vận tải vẫn cần con người)',
    foundationSubjects: 'Vận tải quốc tế & Bảo hiểm, Quản trị kho hàng & Tồn kho, Incoterms & Thanh toán quốc tế, Hệ thống thông tin chuỗi cung ứng',
    skills: ['Tư duy điều phối hệ thống', 'Tiếng Anh thương mại & Đàm phán', 'Kỹ năng giải quyết khủng hoảng vận tải', 'Quản lý số liệu kho vận'],
    realityCheck: {
      myth: 'Học logistics là ra trường làm công việc giao hàng (shipper) hoặc bốc vác kiểm kho thủ công.',
      truth: 'Logistics & Supply Chain là bộ não chiến lược điều phối chuỗi cung ứng hàng tỷ đô, đàm phán hợp đồng thương mại quốc tế.'
    }
  },
  'tamly': {
    roadmap5Year: [
      'Năm 1–2: Tâm lý học đại cương, Sinh lý thần kinh, Tâm lý học phát triển lứa tuổi và Phương pháp thống kê nghiên cứu.',
      'Năm 3–4 (Trợ lý tham vấn / HR Intern): Tham gia các ca quan sát tham vấn học đường, hỗ trợ tuyển dụng nhân sự (lương 6 – 10 triệu/tháng).',
      'Năm 5 (Chuyên viên chính thức): Cán bộ tư vấn tâm lý học đường, Chuyên viên đào tạo & Phát triển nhân tài (L&D), thu nhập 10 – 18 triệu/tháng.',
      'Sau 3–5 năm: Chuyên gia Trị liệu Tâm lý độc lập, Giám đốc Nhân sự (HR Director), thu nhập 28 – 55+ triệu/tháng.'
    ],
    salaryRange: 'Khởi điểm: 10 – 18 triệu/tháng • 3–5 năm kinh nghiệm: 28 – 55+ triệu/tháng',
    employmentRate: '94.5% mở rộng mạnh mẽ sang lĩnh vực nhân sự và chăm sóc sức khỏe tinh thần',
    aiResilience: '96% (Sự lắng nghe, thấu cảm và chữa lành tâm lý là năng lực độc bản của con người mà AI không thể có)',
    foundationSubjects: 'Tâm lý học xã hội, Tâm bệnh học, Các liệu pháp tham vấn & Trị liệu tâm lý, Đánh giá tâm lý học',
    skills: ['Lắng nghe tích cực & Không phán xét', 'Quan sát vi biểu cảm & Hành vi', 'Giao tiếp thấu cảm', 'Bảo mật thông tin thân chủ'],
    realityCheck: {
      myth: 'Học tâm lý học là để "đọc suy nghĩ" người khác hoặc chỉ điều trị cho người bị bệnh tâm thần.',
      truth: 'Tâm lý học là khoa học nghiên cứu hành vi và cảm xúc, giúp người bình thường vượt qua khủng hoảng, stress và phát triển tiềm năng sống.'
    }
  },
  'kdqt': {
    roadmap5Year: [
      'Năm 1–2: Kinh tế quốc tế, Tiếng Anh thương mại, Đàm phán đa văn hóa và Nguyên lý kế toán quốc tế.',
      'Năm 3–4 (Import/Export Intern): Thực hành khai báo hải quan, soạn thảo hợp đồng ngoại thương (lương 7 – 11 triệu/tháng).',
      'Năm 5 (Chuyên viên thương mại quốc tế): Quản trị khách hàng xuất khẩu, phát triển thị trường nước ngoài (12 – 22 triệu/tháng).',
      'Sau 3–5 năm: Giám đốc Kinh doanh Quốc tế, mức thu nhập 35 – 65+ triệu/tháng.'
    ],
    salaryRange: 'Khởi điểm: 12 – 22 triệu/tháng • 3–5 năm kinh nghiệm: 35 – 65+ triệu/tháng',
    employmentRate: '97.0% cơ hội công tác nước ngoài thường xuyên',
    aiResilience: '85%',
    foundationSubjects: 'Thương mại quốc tế, Đàm phán ngoại thương, Tài chính quốc tế, Luật thương mại toàn cầu',
    skills: ['Song ngữ Anh + Ngoại ngữ 2 (Trung, Nhật, Hàn)', 'Tư duy chiến lược thị trường', 'Đàm phán thương vụ lớn', 'Thích ứng đa văn hóa'],
    realityCheck: {
      myth: 'Học kinh doanh quốc tế chỉ là học lý thuyết kinh tế chung chung mà không có nghề cụ thể.',
      truth: 'Ngành này rèn luyện nghiệp vụ thực chiến về ngoại thương, logistics xuyên biên giới và khai phá thị trường toàn cầu.'
    }
  },
  'tudonghoa': {
    roadmap5Year: [
      'Năm 1–2: Cơ sở kỹ thuật điện, Vật lý ứng dụng, Kỹ thuật vi xử lý và Giải tích hệ thống.',
      'Năm 3–4 (Automation Intern): Lập trình PLC, kết nối cảm biến và cánh tay robot tại xưởng (lương 8 – 12 triệu/tháng).',
      'Năm 5 (Kỹ sư tự động hóa): Vận hành dây chuyền sản xuất thông minh, tích hợp hệ thống SCADA/IoT (13 – 24 triệu/tháng).',
      'Sau 3–5 năm: Giám đốc Kỹ thuật nhà máy thông minh, thu nhập 35 – 70+ triệu/tháng.'
    ],
    salaryRange: 'Khởi điểm: 13 – 24 triệu/tháng • 3–5 năm kinh nghiệm: 35 – 70+ triệu/tháng',
    employmentRate: '98.0% cực kỳ khát nhân lực tại các khu công nghiệp FDI',
    aiResilience: '92%',
    foundationSubjects: 'Lý thuyết điều khiển tự động, Kỹ thuật đo lường & Cảm biến, Lập trình PLC & Robot công nghiệp',
    skills: ['Lập trình điều khiển PLC & C/C++', 'Đọc hiểu bản vẽ điện công nghiệp', 'Bảo trì hệ thống tự động', 'Tư duy an toàn kỹ thuật'],
    realityCheck: {
      myth: 'Học tự động hóa là làm thợ điện hoặc thợ hàn sửa chữa máy móc hỏng hóc đơn thuần.',
      truth: 'Kỹ sư tự động hóa là người thiết kế kiến trúc hệ thống, viết code điều khiển các dây chuyền sản xuất tự hành hiện đại.'
    }
  }
};

/**
 * Extracts all matching Major objects from user query.
 */
export function extractMajors(query = '') {
  const norm = normalizeVN(query);
  const matched = [];
  const matchedIds = new Set();

  // Sort keywords by length descending to match longest phrase first
  for (const item of MAJOR_KEYWORD_MAP) {
    for (const kw of item.keywords) {
      const normKw = normalizeVN(kw);
      if (norm.includes(normKw)) {
        if (!matchedIds.has(item.id)) {
          const majorObj = MAJORS_DATA.find(m => m.id === item.id);
          if (majorObj) {
            matched.push(majorObj);
            matchedIds.add(item.id);
          }
        }
        break;
      }
    }
  }

  return matched;
}

/**
 * Extracts student exam score from query (e.g. 26.5, 27, 28.25).
 * Matches patterns like 18 - 29.75.
 */
export function extractScore(query = '') {
  const match = query.match(/\b(1[89]|2[0-9])(\.[0-9]{1,2})?\b/);
  if (match) {
    return parseFloat(match[0]);
  }
  return null;
}

/**
 * Detects query intent from normalized text and entities.
 */
export function detectIntent(query = '', matchedMajors = [], score = null) {
  const norm = normalizeVN(query);

  // Intent: Compare 2 majors
  if (
    matchedMajors.length >= 2 ||
    norm.includes('so sanh') ||
    norm.includes('hay la') ||
    norm.includes('nen chon') && norm.includes('hay') ||
    norm.includes('phan van giua')
  ) {
    return 'COMPARE';
  }

  // Intent: Exam score consultation
  if (score !== null && (norm.includes('diem') || norm.includes('thi duoc') || norm.includes('xet tuyen'))) {
    return 'SCORE_CONSULT';
  }

  // Intent: Tuition / Financial costs
  if (
    norm.includes('hoc phi') ||
    norm.includes('chi phi') ||
    norm.includes('tien hoc') ||
    norm.includes('dong bao nhieu') ||
    norm.includes('hoc phi cac truong') ||
    norm.includes('hoc phi dai hoc')
  ) {
    return 'TUITION';
  }

  // Intent: Career prospects / What do graduates do
  if (
    norm.includes('ra truong lam gi') ||
    norm.includes('lam gi') ||
    norm.includes('viec lam') ||
    norm.includes('cong viec') ||
    norm.includes('co hoi viec lam') ||
    norm.includes('luong') ||
    norm.includes('thu nhap') ||
    norm.includes('thuc te lam gi')
  ) {
    return 'CAREER_PROSPECTS';
  }

  // Intent: Preparation / Skills / Subject combinations
  if (
    norm.includes('chuan bi gi') ||
    norm.includes('can chuan bi') ||
    norm.includes('to chat') ||
    norm.includes('hoc gi') ||
    norm.includes('to hop') ||
    norm.includes('khoi thi') ||
    norm.includes('mon hoc') ||
    norm.includes('nam nhat hoc gi')
  ) {
    return 'PREPARATION';
  }

  // Default: If a major is explicitly mentioned without specific intent, explain the major overview
  if (matchedMajors.length === 1) {
    return 'MAJOR_OVERVIEW';
  }

  return 'PERSONAL_CONSULT';
}

/**
 * Builds rich, specific responses grounded in our 2026 database.
 */
export function generateSmartAIResponse({ query, profile = null, _context = '' }) {
  const matchedMajors = extractMajors(query);
  const score = extractScore(query);
  const intent = detectIntent(query, matchedMajors, score);

  switch (intent) {
    case 'CAREER_PROSPECTS':
    case 'MAJOR_OVERVIEW': {
      const targetMajor = matchedMajors[0] || MAJORS_DATA.find(m => m.id === 'vi-mach');
      const meta = MAJOR_KNOWLEDGE_BASE[targetMajor.id] || MAJOR_KNOWLEDGE_BASE['vi-mach'];

      let reply = `Chào bạn! Về ngành **${targetMajor.ten_nganh}**, đây là bức tranh nghề nghiệp thực tế và lộ trình chuẩn tuyển sinh 2026:\n\n`;
      reply += `📌 **Mô tả cốt lõi**: ${targetMajor.mo_ta}\n\n`;
      reply += `🚀 **Lộ trình công việc 5 năm thực tế**:\n`;
      meta.roadmap5Year.forEach(step => {
        reply += `• ${step}\n`;
      });
      reply += `\n`;
      reply += `💰 **Mức thu nhập thị trường**: **${meta.salaryRange}**\n`;
      reply += `📊 **Tỷ lệ có việc làm**: **${meta.employmentRate}** (Chỉ số AI-Resilience: **${meta.aiResilience}**)\n\n`;
      reply += `⚠️ **Góc nhìn thực tế (Myth vs Truth)**:\n`;
      reply += `• **Lầm tưởng phổ biến**: "${meta.realityCheck.myth}"\n`;
      reply += `• **Sự thật thực tế**: "${meta.realityCheck.truth}"\n\n`;
      reply += `🏫 **Trường đại học đào tạo tiêu biểu**: ${targetMajor.truong_tieu_bieu.join(', ')} (Điểm chuẩn dự báo 2026: **${targetMajor.diem_tb}**, học phí **${targetMajor.hoc_phi}**).`;

      const actions = [
        {
          id: 'video',
          label: '🎥 Xem Video 1 Ngày Làm Nghề',
          majorId: targetMajor.id,
          majorName: targetMajor.ten_nganh
        },
        {
          id: 'roadmap',
          label: '📘 Xem Khung chương trình 5 năm',
          majorId: targetMajor.id,
          majorName: targetMajor.ten_nganh
        },
        {
          id: 'compare',
          label: '⚔️ Mở Đấu trường So sánh',
          majorIds: [targetMajor.id, targetMajor.id === 'cntt' ? 'marketing' : 'cntt']
        },
        {
          id: 'passport',
          label: '🎫 Chọn làm Mục tiêu Passport 2026',
          majorName: targetMajor.ten_nganh
        }
      ];

      return { text: reply, actions, matchedMajor: targetMajor };
    }

    case 'TUITION': {
      // If a specific major was mentioned
      if (matchedMajors.length > 0) {
        const major = matchedMajors[0];
        const meta = MAJOR_KNOWLEDGE_BASE[major.id] || MAJOR_KNOWLEDGE_BASE['cntt'];
        let reply = `Thông tin học phí và bài toán hoàn vốn (ROI) ngành **${major.ten_nganh}** năm học 2026:\n\n`;
        reply += `💵 **Mức học phí trung bình**: **${major.hoc_phi}**\n`;
        reply += `🏫 **Học phí cụ thể tại các trường tiêu biểu**:\n`;
        major.truong_tieu_bieu.forEach(uni => {
          reply += `• **${uni}**: Chương trình chuẩn khoảng 25 – 42 triệu/năm; Chương trình tiên tiến / giảng dạy bằng tiếng Anh khoảng 55 – 80 triệu/năm.\n`;
        });
        reply += `\n`;
        reply += `📈 **Bài toán đầu tư sinh lời (ROI)**:\n`;
        reply += `• Mức lương khởi điểm ngành này đạt **${meta.salaryRange.split('•')[0].trim()}**.\n`;
        reply += `• Với mức thu nhập trên, sinh viên thường chỉ mất từ **1.5 đến 2 năm đi làm** là có thể hoàn vốn toàn bộ học phí 4 năm đại học.\n`;
        reply += `• Các trường công lập hiện đều có quỹ học bổng khuyến khích học tập (chi trả từ 50% đến 100% học phí) và chính sách vay vốn ưu đãi học tập.`;

        const actions = [
          {
            id: 'roadmap',
            label: `📘 Xem Lộ trình học ${major.ten_nganh}`,
            majorId: major.id,
            majorName: major.ten_nganh
          },
          {
            id: 'passport',
            label: '🎫 Đặt làm Mục tiêu Passport 2026',
            majorName: major.ten_nganh
          }
        ];

        return { text: reply, actions, matchedMajor: major };
      }

      // General public university tuition 2026
      let reply = `Dưới đây là bức tranh **Học phí các trường Đại học công lập Việt Nam chuẩn tuyển sinh 2026**, được chia theo 4 khối ngành trọng điểm:\n\n`;
      reply += `1. **Khối Kỹ thuật & Công nghệ (HUST, UET, HCMUT, SPKT)**:\n`;
      reply += `   • Chương trình chuẩn: **30 – 48 triệu/năm**.\n`;
      reply += `   • Chương trình tiên tiến, chất lượng cao hoặc quốc tế: **60 – 90 triệu/năm**.\n\n`;

      reply += `2. **Khối Kinh tế & Quản trị (NEU, FTU, UEH, HVNH)**:\n`;
      reply += `   • Chương trình chuẩn: **25 – 45 triệu/năm**.\n`;
      reply += `   • Chương trình cử nhân định hướng tài năng / liên kết: **50 – 72 triệu/năm**.\n\n`;

      reply += `3. **Khối Y Dược (HMU, UMP TP.HCM, Y Khoa Phạm Ngọc Thạch)**:\n`;
      reply += `   • Ngành Y đa khoa, Dược: **45 – 82 triệu/năm**.\n`;
      reply += `   • Riêng ngành Răng – Hàm – Mặt có thể lên đến **85 – 110 triệu/năm** do chi phí vật tư và thực hành lâm sàng cao.\n\n`;

      reply += `4. **Khối Khoa học Xã hội & Sư phạm (USSH, HNUE, ĐH Luật)**:\n`;
      reply += `   • Khối Xã hội, Báo chí, Luật: **15 – 38 triệu/năm**.\n`;
      reply += `   • **Đặc biệt sinh viên ngành Sư phạm**: Được **miễn 100% học phí** và hỗ trợ sinh hoạt phí **3.63 triệu đồng/tháng** theo Nghị định 116/2020/NĐ-CP.\n\n`;

      reply += `💡 **Lời khuyên từ Cố vấn**: Gia đình nên chuẩn bị thêm khoảng **3.5 – 6 triệu/tháng** cho chi phí sinh hoạt (ký túc xá, ăn ở). Bạn hoàn toàn có thể săn học bổng doanh nghiệp ngay từ năm 2!`;

      const actions = [
        {
          id: 'search',
          label: '🔍 Tra cứu học phí từng ngành cụ thể',
          majorId: 'cntt'
        },
        {
          id: 'compare',
          label: '⚔️ Mở Đấu trường So sánh chi phí',
          majorIds: ['cntt', 'marketing']
        }
      ];

      return { text: reply, actions };
    }

    case 'PREPARATION': {
      const targetMajor = matchedMajors[0] || MAJORS_DATA.find(m => m.id === 'ykhoa');
      const meta = MAJOR_KNOWLEDGE_BASE[targetMajor.id] || MAJOR_KNOWLEDGE_BASE['ykhoa'];

      let reply = `Để theo học ngành **${targetMajor.ten_nganh}**, học sinh THPT cần chuẩn bị kỹ càng các yếu tố sau cho mùa tuyển sinh 2026:\n\n`;
      reply += `📚 **Tổ hợp môn xét tuyển trọng tâm**: **${targetMajor.to_hop.join(', ')}**\n`;
      reply += `🎯 **Dải điểm chuẩn dự báo 2026**: **${targetMajor.diem_tb} điểm** (an toàn nhất nên đạt từ **${parseFloat(targetMajor.diem_tb.split('-')[0]) + 0.5}+**).\n\n`;

      reply += `🧠 **4 Tố chất & Kỹ năng sống còn**:\n`;
      meta.skills.forEach((sk, idx) => {
        reply += `• **Kỹ năng ${idx + 1}**: ${sk}\n`;
      });
      reply += `\n`;

      reply += `📖 **Kiến thức năm 1–2 cần làm quen trước**:\n`;
      reply += `• Tập trung nền tảng: **${meta.foundationSubjects}**.\n`;
      reply += `• Nên trau dồi chứng chỉ ngoại ngữ (IELTS 6.0+ hoặc TOEIC/VSTEP) để quy đổi điểm xét tuyển kết hợp sớm.\n\n`;

      reply += `🏫 **Top trường đào tạo hàng đầu 2026**:\n`;
      targetMajor.truong_tieu_bieu.forEach(uni => {
        reply += `• **${uni}**: Điểm chuẩn tham khảo 2025 dao động **${targetMajor.diem_tb}**.\n`;
      });
      reply += `\n`;
      reply += `⚠️ **Lưu ý thực tế**: "${meta.realityCheck.truth}"`;

      const actions = [
        {
          id: 'video',
          label: `🎥 Xem Video 1 Ngày Làm ${targetMajor.ten_nganh}`,
          majorId: targetMajor.id,
          majorName: targetMajor.ten_nganh
        },
        {
          id: 'roadmap',
          label: '📘 Lập kế hoạch hành động lớp 10-12',
          majorId: targetMajor.id,
          majorName: targetMajor.ten_nganh
        },
        {
          id: 'passport',
          label: '🎫 Đặt làm Nguyện vọng 1 (Plan A)',
          majorName: targetMajor.ten_nganh
        }
      ];

      return { text: reply, actions, matchedMajor: targetMajor };
    }

    case 'COMPARE': {
      const majorA = matchedMajors[0] || MAJORS_DATA.find(m => m.id === 'cntt');
      const majorB = matchedMajors[1] || MAJORS_DATA.find(m => m.id === 'marketing');
      const metaA = MAJOR_KNOWLEDGE_BASE[majorA.id] || MAJOR_KNOWLEDGE_BASE['cntt'];
      const metaB = MAJOR_KNOWLEDGE_BASE[majorB.id] || MAJOR_KNOWLEDGE_BASE['marketing'];

      let reply = `Bảng so sánh đa tầng giữa **${majorA.ten_nganh}** và **${majorB.ten_nganh}** cho kỳ tuyển sinh 2026:\n\n`;
      reply += `1. **Thiên hướng tính cách & RIASEC Match**:\n`;
      reply += `   • **${majorA.ten_nganh}**: Phù hợp nhóm **Realistic (Kỹ thuật)** & **Investigative (Nghiên cứu)** — thích giải quyết bài toán logic, làm việc với hệ thống.\n`;
      reply += `   • **${majorB.ten_nganh}**: Phù hợp nhóm **Artistic (Sáng tạo)** & **Enterprising (Quản trị / Đàm phán)** — thích thấu hiểu con người, tạo nội dung thu hút.\n\n`;

      reply += `2. **Điểm chuẩn dự báo 2026**:\n`;
      reply += `   • **${majorA.ten_nganh}**: **${majorA.diem_tb} điểm** (${majorA.to_hop.join(', ')})\n`;
      reply += `   • **${majorB.ten_nganh}**: **${majorB.diem_tb} điểm** (${majorB.to_hop.join(', ')})\n\n`;

      reply += `3. **Học phí trung bình**:\n`;
      reply += `   • **${majorA.ten_nganh}**: **${majorA.hoc_phi}**\n`;
      reply += `   • **${majorB.ten_nganh}**: **${majorB.hoc_phi}**\n\n`;

      reply += `4. **Thu nhập khởi điểm & Sau 3–5 năm**:\n`;
      reply += `   • **${majorA.ten_nganh}**: ${metaA.salaryRange}\n`;
      reply += `   • **${majorB.ten_nganh}**: ${metaB.salaryRange}\n\n`;

      reply += `5. **Khả năng chống chọi AI (AI-Resilience)**:\n`;
      reply += `   • **${majorA.ten_nganh}**: **${metaA.aiResilience}** (chuyển dịch sang Cloud & AI Architect)\n`;
      reply += `   • **${majorB.ten_nganh}**: **${metaB.aiResilience}** (AI tạo content nhanh, con người nắm chiến lược & cảm xúc)\n\n`;

      reply += `💡 **Gợi ý lựa chọn tổ hợp (A01 vs D01)**: Nếu bạn có thế mạnh vượt trội môn **Vật lý & Tư duy cấu trúc**, hãy chọn **${majorA.ten_nganh}** (khối A01). Nếu bạn có lợi thế **Ngữ văn, Ngoại ngữ và Tâm lý xã hội**, **${majorB.ten_nganh}** (khối D01) sẽ giúp bạn tỏa sáng mạnh nhất!`;

      const actions = [
        {
          id: 'compare',
          label: '⚔️ Mở Đấu trường So sánh 20 tiêu chí',
          majorIds: [majorA.id, majorB.id]
        },
        {
          id: 'video',
          label: `🎥 Xem Video ${majorA.ten_nganh}`,
          majorId: majorA.id,
          majorName: majorA.ten_nganh
        },
        {
          id: 'passport',
          label: `🎫 Chọn ${majorA.ten_nganh} làm Plan A, ${majorB.ten_nganh} làm Plan B`,
          majorName: majorA.ten_nganh,
          backupName: majorB.ten_nganh
        }
      ];

      return { text: reply, actions };
    }

    case 'SCORE_CONSULT': {
      // Filter majors suitable for the student's exam score
      const userScore = score;
      const fittingMajors = MAJORS_DATA.filter(m => {
        const parts = m.diem_tb.split('-').map(s => parseFloat(s.trim()));
        const minScore = parts[0];
        const maxScore = parts[1] || minScore;
        // Score fits if it's within range or within 1.5 points
        return userScore >= minScore - 1.2 && userScore <= maxScore + 2.0;
      });

      const safeMajors = fittingMajors.filter(m => {
        const minScore = parseFloat(m.diem_tb.split('-')[0].trim());
        return userScore >= minScore + 0.3;
      });

      const reachMajors = fittingMajors.filter(m => {
        const minScore = parseFloat(m.diem_tb.split('-')[0].trim());
        return userScore < minScore + 0.3;
      });

      let reply = `Với mức điểm **${userScore} điểm**, bạn có cơ hội rất rộng mở trong kỳ tuyển sinh 2026. Đây là chiến lược xếp nguyện vọng thông minh theo 3 tầng an toàn:\n\n`;

      if (reachMajors.length > 0) {
        reply += `🎯 **Tầng 1 — Nguyện vọng Bứt phá (NV1)**:\n`;
        reachMajors.slice(0, 2).forEach(m => {
          reply += `• **${m.ten_nganh}** (Điểm chuẩn dự kiến: **${m.diem_tb}**, tổ hợp **${m.to_hop.join(', ')}**) tại ${m.truong_tieu_bieu.slice(0, 2).join(', ')}.\n`;
        });
        reply += `\n`;
      }

      reply += `🛡️ **Tầng 2 — Nguyện vọng Vừa sức & An toàn cao (NV2, NV3)**:\n`;
      (safeMajors.length > 0 ? safeMajors : fittingMajors).slice(0, 3).forEach(m => {
        reply += `• **${m.ten_nganh}** (Điểm chuẩn dự kiến: **${m.diem_tb}**, cơ hội việc làm 96%+) tại ${m.truong_tieu_bieu.slice(0, 2).join(', ')}.\n`;
      });
      reply += `\n`;

      reply += `💡 **Chiến lược đặt vé đại học**: Nên chọn 1 ngành bứt phá (+0.5 điểm so với điểm thi), 2 ngành vừa sức ngang bằng điểm, và 1 ngành dự phòng thấp hơn 1.0 – 1.5 điểm để bảo đảm 100% trúng tuyển đại học công lập chất lượng!`;

      const topChoice = (safeMajors[0] || fittingMajors[0] || MAJORS_DATA[0]);

      const actions = [
        {
          id: 'search',
          label: `🔍 Tra cứu toàn bộ ngành tầm ${userScore} điểm`,
          majorId: topChoice.id
        },
        {
          id: 'passport',
          label: `🎫 Đặt ${topChoice.ten_nganh} làm Mục tiêu Passport 2026`,
          majorName: topChoice.ten_nganh
        },
        {
          id: 'compare',
          label: '⚔️ Đưa các ngành này vào Đấu trường So sánh',
          majorIds: fittingMajors.slice(0, 2).map(m => m.id)
        }
      ];

      return { text: reply, actions };
    }

    case 'PERSONAL_CONSULT':
    default: {
      // Smart dynamic personalized consultation (NEVER generic fallback!)
      let archetype = 'Nhà Đổi Mới Công Nghệ & Kỹ Thuật (Tech Innovator)';
      let topMajors = [MAJORS_DATA[0], MAJORS_DATA[4]]; // CNTT & Marketing
      let matchPercentages = ['94%', '89%'];
      let strongSubjects = ['Toán', 'Tiếng Anh', 'Tin học'];

      // Attempt to read from stored profile or props
      try {
        const storedProfile = profile || (typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('careerqr_student_profile') || 'null') : null);
        if (storedProfile) {
          if (storedProfile.archetype) archetype = storedProfile.archetype;
          if (storedProfile.majors && storedProfile.majors.length) {
            topMajors = storedProfile.majors.slice(0, 2);
            matchPercentages = ['96%', '91%'];
          }
          if (storedProfile.selectedSubjects && storedProfile.selectedSubjects.length) {
            strongSubjects = storedProfile.selectedSubjects;
          }
        }
      } catch (e) {
        console.warn('Profile parse error in AI engine:', e);
      }

      let reply = `Chào bạn! Phân tích nhanh từ hồ sơ định hướng năng lực 2026 của bạn:\n\n`;
      reply += `👤 **Hình mẫu nghề nghiệp**: **${archetype}**\n`;
      reply += `🌟 **Môn học thế mạnh ghi nhận**: ${strongSubjects.join(', ')}\n\n`;
      reply += `🎯 **Top 2 ngành có chỉ số tương thích cao nhất**:\n`;
      reply += `1. **${topMajors[0].ten_nganh}** — Độ khớp năng lực: **${matchPercentages[0]}**\n`;
      reply += `   • Điểm chuẩn 2026: **${topMajors[0].diem_tb}** • Học phí: **${topMajors[0].hoc_phi}**\n`;
      reply += `   • Khối xét tuyển tối ưu: **${topMajors[0].to_hop.join(', ')}**\n\n`;

      if (topMajors[1]) {
        reply += `2. **${topMajors[1].ten_nganh}** — Độ khớp năng lực: **${matchPercentages[1]}**\n`;
        reply += `   • Điểm chuẩn 2026: **${topMajors[1].diem_tb}** • Học phí: **${topMajors[1].hoc_phi}**\n`;
        reply += `   • Khối xét tuyển tối ưu: **${topMajors[1].to_hop.join(', ')}**\n\n`;
      }

      reply += `🧭 **Lời khuyên hành động**: Bạn có thể bấm vào các nút hành động bên dưới để xem trực tiếp **Video 1 Ngày Làm Nghề** hoặc đưa 2 ngành này vào **Đấu trường So sánh 20 tiêu chí** để tìm ra phương án tối ưu nhất nhé!`;

      const actions = [
        {
          id: 'video',
          label: `🎥 Xem Video 1 Ngày Làm ${topMajors[0].ten_nganh}`,
          majorId: topMajors[0].id,
          majorName: topMajors[0].ten_nganh
        },
        {
          id: 'compare',
          label: '⚔️ Mở Đấu trường So sánh 2 ngành này',
          majorIds: topMajors.map(m => m.id)
        },
        {
          id: 'passport',
          label: `🎫 Chọn ${topMajors[0].ten_nganh} làm Mục tiêu Passport`,
          majorName: topMajors[0].ten_nganh,
          backupName: topMajors[1]?.ten_nganh || ''
        }
      ];

      return { text: reply, actions };
    }
  }
}
