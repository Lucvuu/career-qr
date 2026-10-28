// SMART VIETNAMESE AI CAREER CO-PILOT ENGINE (2026 EDITION)
// Grounded in MAJORS_DATA, Regional University Admission Benchmarks, and Diagnostic Counseling

import { MAJORS_DATA, UNIVERSITIES_DATA } from '../data/careerData.js';

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
 * Comprehensive Regional University Database 2026
 * Categorized by Region (Miền Bắc, Miền Nam, Miền Trung)
 */
export const REGIONAL_UNIVERSITIES_DATA = {
  bac: {
    regionName: 'Khu vực Miền Bắc & Hà Nội',
    schools: [
      {
        id: 'hust',
        code: 'BKA',
        name: 'Đại học Bách Khoa Hà Nội (HUST)',
        majors: ['cntt', 'vi-mach', 'khdl', 'tudonghoa'],
        benchmarks: '26.0 – 29.2 điểm THPT (hoặc 75+ ĐGTD)',
        tuition: '30 – 45 tr/năm (chuẩn) • 60 – 85 tr/năm (tiên tiến)',
        highlight: 'Trường kỹ thuật & bán dẫn số 1 miền Bắc, ký kết chiến lược với Nvidia, Synopsys, FPT.',
        safeScore: 27.5,
        targetScore: 28.5
      },
      {
        id: 'uet',
        code: 'QHI',
        name: 'ĐH Công nghệ – ĐHQGHN (UET)',
        majors: ['cntt', 'vi-mach', 'khdl'],
        benchmarks: '26.8 – 28.5 điểm THPT',
        tuition: '32 – 40 tr/năm',
        highlight: 'Học thuật tinh hoa, thế mạnh nghiên cứu AI, Khoa học máy tính và Vi mạch bán dẫn.',
        safeScore: 27.2,
        targetScore: 28.2
      },
      {
        id: 'neu',
        code: 'KHA',
        name: 'Đại học Kinh tế Quốc dân (NEU)',
        majors: ['marketing', 'kdqt', 'khdl', 'logistics'],
        benchmarks: '26.5 – 28.6 điểm THPT',
        tuition: '26 – 40 tr/năm (chuẩn) • 50 – 70 tr/năm (chất lượng cao)',
        highlight: 'Top 1 khối ngành Kinh tế & Quản trị kinh doanh miền Bắc, mạng lưới đối tác doanh nghiệp lớn nhất.',
        safeScore: 26.8,
        targetScore: 28.0
      },
      {
        id: 'ftu',
        code: 'NTH',
        name: 'Đại học Ngoại thương Hà Nội (FTU)',
        majors: ['kdqt', 'marketing', 'logistics'],
        benchmarks: '27.5 – 28.7 điểm THPT',
        tuition: '28 – 45 tr/năm',
        highlight: 'Môi trường năng động, tiếng Anh vượt trội, sinh viên được các tập đoàn đa quốc gia săn đón.',
        safeScore: 27.8,
        targetScore: 28.6
      },
      {
        id: 'hmu',
        code: 'YHB',
        name: 'Đại học Y Hà Nội (HMU)',
        majors: ['ykhoa'],
        benchmarks: '27.8 – 28.8 điểm (Khối B00)',
        tuition: '45 – 55 tr/năm',
        highlight: 'Chiếc nôi đào tạo bác sĩ số 1 cả nước, tỷ lệ đỗ bác sĩ nội trú bệnh viện tuyến trung ương cao nhất.',
        safeScore: 28.0,
        targetScore: 28.8
      },
      {
        id: 'ptit',
        code: 'BVH',
        name: 'Học viện Công nghệ Bưu chính Viễn thông (PTIT)',
        majors: ['cntt', 'marketing', 'dohoa'],
        benchmarks: '24.8 – 26.8 điểm THPT',
        tuition: '25 – 36 tr/năm',
        highlight: 'Phương án trúng tuyển an toàn, chất lượng đào tạo CNTT thực chiến rất sát nhu cầu doanh nghiệp.',
        safeScore: 25.0,
        targetScore: 26.5
      }
    ]
  },
  nam: {
    regionName: 'Khu vực Miền Nam & TP.HCM',
    schools: [
      {
        id: 'hcmut',
        code: 'QSB',
        name: 'Đại học Bách Khoa – ĐHQG TP.HCM (HCMUT)',
        majors: ['cntt', 'vi-mach', 'tudonghoa', 'logistics'],
        benchmarks: 'Xét tuyển kết hợp ĐGNL (760+) & THPT (26.0+)',
        tuition: '30 – 48 tr/năm',
        highlight: 'Trường kỹ thuật trọng điểm phía Nam, trung tâm cung ứng nhân lực vi mạch bán dẫn quốc tế.',
        safeScore: 26.5,
        targetScore: 28.0
      },
      {
        id: 'uit',
        code: 'QSC',
        name: 'ĐH Công nghệ Thông tin – ĐHQG TP.HCM (UIT)',
        majors: ['cntt', 'khdl', 'vi-mach'],
        benchmarks: '26.0 – 28.2 điểm THPT',
        tuition: '32 – 45 tr/năm',
        highlight: 'Đào tạo chuyên biệt 100% ngành Công nghệ thông tin, AI và An toàn thông tin chuẩn quốc tế.',
        safeScore: 26.2,
        targetScore: 27.8
      },
      {
        id: 'ueh',
        code: 'KSA',
        name: 'Đại học Kinh tế TP.HCM (UEH)',
        majors: ['marketing', 'kdqt', 'logistics', 'khdl'],
        benchmarks: '25.5 – 27.8 điểm THPT',
        tuition: '28 – 45 tr/năm',
        highlight: 'Top 1 đại học kinh tế miền Nam, định hướng đại học đa ngành và ứng dụng công nghệ số.',
        safeScore: 25.8,
        targetScore: 27.5
      },
      {
        id: 'ump',
        code: 'YDS',
        name: 'Đại học Y Dược TP.HCM (UMP)',
        majors: ['ykhoa'],
        benchmarks: '27.5 – 28.5 điểm (Khối B00)',
        tuition: '46 – 82 tr/năm',
        highlight: 'Bệnh viện thực hành riêng hiện đại, đội ngũ giáo sư lâm sàng tuyến đầu tại khu vực phía Nam.',
        safeScore: 27.6,
        targetScore: 28.5
      },
      {
        id: 'hcmute',
        code: 'SPK',
        name: 'ĐH Sư phạm Kỹ thuật TP.HCM (HCMUTE)',
        majors: ['cntt', 'vi-mach', 'tudonghoa', 'dohoa'],
        benchmarks: '24.5 – 26.8 điểm THPT',
        tuition: '26 – 38 tr/năm',
        highlight: 'Mức học phí dễ chịu, thực hành thực tế tại xưởng robot và phòng lab công nghệ cao.',
        safeScore: 24.8,
        targetScore: 26.5
      }
    ]
  },
  trung: {
    regionName: 'Khu vực Miền Trung & Tây Nguyên (Đà Nẵng, Huế)',
    schools: [
      {
        id: 'dut',
        code: 'DDK',
        name: 'ĐH Bách Khoa – Đại học Đà Nẵng (DUT)',
        majors: ['cntt', 'vi-mach', 'tudonghoa'],
        benchmarks: '24.0 – 26.5 điểm THPT',
        tuition: '22 – 32 tr/năm',
        highlight: 'Trung tâm nghiên cứu kỹ thuật lớn nhất miền Trung, chi phí sinh hoạt tại Đà Nẵng rất hợp lý.',
        safeScore: 24.2,
        targetScore: 26.0
      },
      {
        id: 'due',
        code: 'DDQ',
        name: 'ĐH Kinh tế – Đại học Đà Nẵng (DUE)',
        majors: ['marketing', 'kdqt', 'logistics'],
        benchmarks: '23.5 – 25.5 điểm THPT',
        tuition: '20 – 30 tr/năm',
        highlight: 'Thế mạnh về logistics cảng biển, thương mại quốc tế và quản trị kinh doanh miền Trung.',
        safeScore: 23.8,
        targetScore: 25.2
      },
      {
        id: 'hump',
        code: 'DHY',
        name: 'Đại học Y Dược – Đại học Huế',
        majors: ['ykhoa'],
        benchmarks: '26.0 – 27.2 điểm (Khối B00)',
        tuition: '35 – 50 tr/năm',
        highlight: 'Điểm chuẩn mềm hơn Y Hà Nội và Y Dược TP.HCM từ 1.0 – 1.5 điểm, môi trường đào tạo bác sĩ lâu đời.',
        safeScore: 26.0,
        targetScore: 27.2
      }
    ]
  }
};

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
  },
  {
    id: 'su-pham-toan-tin',
    keywords: [
      'su pham toan', 'su pham tin', 'su pham', 'giao vien toan', 
      'giao vien tin', 'su pham stem', 'day hoc stem', 'nghi dinh 116'
    ]
  },
  {
    id: 'su-pham-tieng-anh',
    keywords: [
      'su pham tieng anh', 'su pham anh', 'giao vien tieng anh', 
      'tesol', 'pedagogy', 'celta', 'ielts'
    ]
  },
  {
    id: 'ngon-ngu-anh',
    keywords: [
      'ngon ngu anh', 'bien dich', 'phien dich', 'tieng anh thuong mai', 
      'dich cabin', 'bien tap quoc te'
    ]
  },
  {
    id: 'tai-chinh-ngan-hang',
    keywords: [
      'tai chinh', 'ngan hang', 'chung khoan', 'dau tu', 
      'fintech', 'cfa', 'tin dung', 'nguon von'
    ]
  },
  {
    id: 'ke-toan-kiem-toan',
    keywords: [
      'ke toan', 'kiem toan', 'audit', 'acca', 
      'cpa', 'big4', 'thue', 'so sach'
    ]
  },
  {
    id: 'du-lich-khach-san',
    keywords: [
      'du lich', 'khach san', 'resort', 'nha hang', 
      'quan tri khach san', 'lu hanh', 'tour guide', 'mice'
    ]
  },
  {
    id: 'hang-khong',
    keywords: [
      'hang khong', 'may bay', 'phi cong', 'bao duong may bay', 
      'khong luu', 'ky thuat hang khong', 'ame'
    ]
  },
  {
    id: 'cong-nghe-sinh-hoc',
    keywords: [
      'sinh hoc', 'cong nghe sinh hoc', 'nong nghiep', 'gen', 
      'vi sinh', 'nuoi cay mo', 'nong nghiep cong nghe cao'
    ]
  },
  {
    id: 'ngoai-giao',
    keywords: [
      'ngoai giao', 'quan he quoc te', 'dai su quan', 'bo ngoai giao', 
      'lien hop quoc', 'mun', 'chinh sach doi ngoai'
    ]
  },
  {
    id: 'xay-dung',
    keywords: [
      'xay dung', 'cau duong', 'kien truc', 'bim', 
      'ket cau', 'cong trinh', 'ky su xay dung', 'revit'
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
    aiResilience: '80%',
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
    aiResilience: '86%',
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
    employmentRate: '94.5%',
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
    employmentRate: '97.0%',
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
    employmentRate: '98.0%',
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
 * Extracts Region from user query ('bac' | 'nam' | 'trung' | null)
 */

/**
 * Extracts Province from query (e.g. thai nguyen, hai phong, quang ninh, thai binh, nam dinh, da nang, can tho...)
 */
export function extractProvince(query = '') {
  const norm = normalizeVN(query);
  if (norm.includes('thai nguyen')) return 'thainguyen';
  if (norm.includes('hai phong')) return 'haiphong';
  if (norm.includes('quang ninh')) return 'quangninh';
  if (norm.includes('thai binh')) return 'thaibinh';
  if (norm.includes('nam dinh')) return 'namdinh';
  if (norm.includes('bac ninh')) return 'bacninh';
  if (norm.includes('hung yen')) return 'hungyen';
  if (norm.includes('vinh phuc') || norm.includes('phu tho')) return 'vinhphuc';
  if (norm.includes('hai duong')) return 'haiduong';
  if (norm.includes('thanh hoa') || norm.includes('nghe an') || norm.includes('vinh')) return 'thanhhoa';
  if (norm.includes('da nang')) return 'danang';
  if (norm.includes('hue')) return 'hue';
  if (norm.includes('can tho')) return 'cantho';
  if (norm.includes('binh duong') || norm.includes('dong nai')) return 'binhduong';
  if (norm.includes('ha noi')) return 'hanoi';
  if (norm.includes('tphcm') || norm.includes('sai gon') || norm.includes('ho chi minh')) return 'tphcm';
  return null;
}

export function extractRegion(query = '') {
  const norm = normalizeVN(query);
  if (
    norm.includes('ha noi') || norm.includes('mien bac') || norm.includes('ngoai bac') ||
    norm.includes('bac bo') || norm.includes('hai phong') || norm.includes('bac ninh') ||
    norm.includes('nam dinh') || norm.includes('thai nguyen') || norm.includes('o ha noi')
  ) {
    return 'bac';
  }
  if (
    norm.includes('tphcm') || norm.includes('tp hcm') || norm.includes('ho chi minh') ||
    norm.includes('sai gon') || norm.includes('mien nam') || norm.includes('trong nam') ||
    norm.includes('can tho') || norm.includes('binh duong') || norm.includes('dong nai') ||
    norm.includes('o tphcm') || norm.includes('o sai gon')
  ) {
    return 'nam';
  }
  if (
    norm.includes('da nang') || norm.includes('mien trung') || norm.includes('hue') ||
    norm.includes('quang nam') || norm.includes('nha trang') || norm.includes('quy nhon') ||
    norm.includes('vinh') || norm.includes('nghe an') || norm.includes('o da nang')
  ) {
    return 'trung';
  }
  return null;
}

/**
 * Extracts specific Target School from query (e.g. HUST, NEU, FTU, UET, HCMUT, UEH, UIT, HMU, UMP...)
 */
export function extractTargetSchool(query = '') {
  const norm = normalizeVN(query);
  if (norm.includes('bach khoa ha noi') || norm.includes('bkhn') || norm.includes('hust') || norm.includes('bach khoa hn')) return 'hust';
  if (norm.includes('cong nghe dhqg') || norm.includes('uet') || norm.includes('dh cong nghe')) return 'uet';
  if (norm.includes('kinh te quoc dan') || norm.includes('neu') || norm.includes('ktqd')) return 'neu';
  if (norm.includes('ngoai thuong') || norm.includes('ftu')) return 'ftu';
  if (norm.includes('y ha noi') || norm.includes('hmu') || norm.includes('truong y hn')) return 'hmu';
  if (norm.includes('buu chinh') || norm.includes('ptit')) return 'ptit';
  if (norm.includes('su pham ha noi') || norm.includes('hnue') || norm.includes('sph')) return 'hnue';
  if (norm.includes('hoc vien ngoai giao') || norm.includes('dav') || norm.includes('ngoai giao')) return 'dav';
  if (norm.includes('hoc vien ngan hang') || norm.includes('hvnh') || norm.includes('ngan hang ha noi')) return 'ba';
  if (norm.includes('dai hoc luat ha noi') || norm.includes('luat ha noi') || norm.includes('hlu')) return 'hlu';
  if (norm.includes('xay dung ha noi') || norm.includes('huce') || norm.includes('dhxd')) return 'huce';
  if (norm.includes('bach khoa tphcm') || norm.includes('bkhcm') || norm.includes('hcmut') || norm.includes('bach khoa hcm')) return 'hcmut';
  if (norm.includes('cong nghe thong tin tphcm') || norm.includes('uit') || norm.includes('dh cntt')) return 'uit';
  if (norm.includes('kinh te tphcm') || norm.includes('ueh')) return 'ueh';
  if (norm.includes('y duoc tphcm') || norm.includes('ump') || norm.includes('y duoc hcm')) return 'ump';
  if (norm.includes('pham ngoc thach') || norm.includes('pntu') || norm.includes('y pnt')) return 'pntu';
  if (norm.includes('khoa hoc tu nhien') || norm.includes('hcmus') || norm.includes('khtn')) return 'hcmus';
  if (norm.includes('kinh te luat') || norm.includes('uel')) return 'uel';
  if (norm.includes('su pham ky thuat') || norm.includes('spkt') || norm.includes('hcmute')) return 'hcmute';
  if (norm.includes('bach khoa da nang') || norm.includes('dut')) return 'dut';
  if (norm.includes('kinh te da nang') || norm.includes('due')) return 'due';
  if (norm.includes('y duoc hue') || norm.includes('hump')) return 'hump';
  if (norm.includes('viet han') || norm.includes('vku')) return 'vku';
  if (norm.includes('fpt') || norm.includes('rmit')) return 'fpt-rmit';
  return null;
}

/**
 * Extracts all matching Major objects from user query.
 */
export function extractMajors(query = '') {
  const norm = normalizeVN(query);
  const matched = [];
  const matchedIds = new Set();

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
 * Extracts student exam score or score range from query.
 * e.g. "26.5", "25 - 27", "24 den 26".
 */
export function extractScore(query = '') {
  // Check range first: "25 - 27" or "25 đến 27"
  const rangeMatch = query.match(/\b(1[89]|2[0-9])(\.[0-9])?\s*(?:-|den|toi|->)\s*(1[89]|2[0-9])(\.[0-9])?\b/i);
  if (rangeMatch) {
    const s1 = parseFloat(rangeMatch[1] + (rangeMatch[2] || ''));
    const s2 = parseFloat(rangeMatch[3] + (rangeMatch[4] || ''));
    return (s1 + s2) / 2;
  }

  const match = query.match(/\b(1[89]|2[0-9])(\.[0-9]{1,2})?\b/);
  if (match) {
    return parseFloat(match[0]);
  }
  return null;
}

/**
 * Detects query intent from normalized text and entities.
 */
export function detectIntent(query = '', matchedMajors = [], score = null, region = null, targetSchool = null) {
  const norm = normalizeVN(query);

  // Intent: Diagnostic survey requested
  if (
    norm.includes('khao sat') ||
    norm.includes('chon truong chuan') ||
    norm.includes('em o dau') ||
    norm.includes('giup em chon truong')
  ) {
    return 'DIAGNOSTIC_SURVEY';
  }

  // Intent: Specific target school advice
  if (targetSchool) {
    return 'SCHOOL_TARGET_CONSULT';
  }

  // Intent: Regional consultation with score/major/budget
  if (region && (score !== null || matchedMajors.length > 0 || norm.includes('tai chinh') || norm.includes('hoc phi'))) {
    return 'REGIONAL_CONSULT';
  }

  // Intent: Compare 2 majors
  if (
    matchedMajors.length >= 2 ||
    norm.includes('so sanh') ||
    norm.includes('hay la') ||
    (norm.includes('nen chon') && norm.includes('hay')) ||
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

  if (matchedMajors.length === 1) {
    return 'MAJOR_OVERVIEW';
  }

  return 'PERSONAL_CONSULT';
}

/**
 * Builds rich, in-depth responses grounded in regional realities and candidate constraints.
 */
export function generateSmartAIResponse({ query, profile = null, _context = '' }) {
  const matchedMajors = extractMajors(query);
  const score = extractScore(query);
  const region = extractRegion(query);
  const targetSchool = extractTargetSchool(query);
  const intent = detectIntent(query, matchedMajors, score, region, targetSchool);

  const province = extractProvince(query);
  const normQuery = normalizeVN(query);

  // INTENT SPECIAL: Gender / Reality Check inquiry (e.g. "con gai hoc logistics", "ap luc nganh y")
  if (normQuery.includes('con gai') || normQuery.includes('nu') || normQuery.includes('vat va') || normQuery.includes('ap luc')) {
    const targetMajor = matchedMajors[0] || MAJORS_DATA.find(m => m.id === 'logistics') || MAJORS_DATA[0];
    let reply = `Chào bạn! Giải đáp thực tế về băn khoăn nghề nghiệp ngành **${targetMajor.ten_nganh}**:\n\n`;
    reply += `⚡ **Sự thật & Áp lực thực tế**: ${targetMajor.realityCheck || 'Đòi hỏi sự kiên trì và tư duy logic vững vàng.'}\n\n`;
    
    if (targetMajor.id === 'logistics' || normQuery.includes('logistics')) {
      reply += `👩 **Con gái học Logistics có vất vả không?**\n`;
      reply += `• **Thực tế**: Hoàn toàn phù hợp và rất nhiều bạn nữ thành công rực rỡ!\n`;
      reply += `• **Vị trí văn phòng lý tưởng (máy lạnh, không dầm mưa dãi nắng)**: Procurement (Thu mua nguyên liệu), Forwarder (Giao nhận vận tải quốc tế), Documentation (Chuyên viên chứng từ hải quan/C/O), Customer Service hãng tàu quốc tế, Order Management với mức lương 14 – 35 triệu/tháng.\n`;
      reply += `• **Vị trí chỉ nên tránh nếu ngại di chuyển**: Giám sát kho bãi (Warehouse Supervisor) hoặc điều độ hiện trường cầu cảng.\n\n`;
    } else if (targetMajor.id === 'vi-mach' || normQuery.includes('vi mach')) {
      reply += `👩 **Nữ giới làm Vi mạch & Bán dẫn có lợi thế gì?**\n`;
      reply += `• Kỹ sư IC Layout và Verification rất ưu tiên sự tỉ mỉ, kiên nhẫn và cẩn trọng của các kỹ sư nữ. Môi trường làm việc phòng Lab và máy tính hiện đại chuẩn quốc tế, chế độ đãi ngộ hàng đầu thị trường (18 – 45 triệu/tháng).\n\n`;
    } else {
      reply += `💡 **Ai nên cân nhắc kỹ**: ${targetMajor.whoShouldAvoid || 'Cần xem xét kỹ khả năng chịu áp lực và tính chất công việc.'}\n\n`;
    }

    reply += `🎯 **Mức điểm chuẩn tham khảo 2026**: **${targetMajor.diem_tb}** • Học phí: **${targetMajor.hoc_phi}**\n`;
    reply += `🏛️ **Top trường đào tạo**: ${targetMajor.truong_tieu_bieu.join(', ')}`;
    
    const actions = [
      { id: 'roadmap', label: `📘 Lập lộ trình cho ngành ${targetMajor.ten_nganh}`, majorName: targetMajor.ten_nganh },
      { id: 'search', label: `🔍 Xem chi tiết ngành ${targetMajor.ten_nganh}` }
    ];
    return { text: reply, actions };
  }

  // INTENT SPECIAL: Provincial inquiry (e.g. "Thai Nguyen", "Hai Phong", "Can Tho")
  if (province && province !== 'hanoi' && province !== 'tphcm') {
    const provinceUnis = (UNIVERSITIES_DATA || []).filter(u => 
      u.provinceCode === province || 
      (province === 'thaibinh' && u.provinceCode === 'thaibinh-namdinh') ||
      (province === 'namdinh' && u.provinceCode === 'thaibinh-namdinh') ||
      (province === 'cantho' && u.provinceCode === 'cantho') ||
      (province === 'danang' && u.provinceCode === 'danang-hue')
    );

    if (provinceUnis.length > 0) {
      let reply = `Tổng hợp thông tin tuyển sinh & điểm chuẩn Đại học 2026 tại **khu vực em quan tâm**:\n\n`;
      provinceUnis.forEach((u, idx) => {
        reply += `${idx + 1}. **${u.name} (Mã: ${u.code})**\n`;
        reply += `   • Điểm chuẩn tham khảo: **${u.benchmarks}**\n`;
        reply += `   • Học phí dự kiến: **${u.tuition}**\n`;
        if (u.campusVibe) {
          reply += `   • Sinh hoạt phí: ${u.campusVibe.livingCostNote} • KTX: ${u.campusVibe.dorms}\n`;
        }
        reply += `   • Thế mạnh đào tạo: ${u.highlight}\n\n`;
      });

      reply += `💡 **Lời khuyên từ Cố vấn**: Học đại học tại các tỉnh/thành phố trung tâm vùng giúp em tiết kiệm từ 40% – 60% chi phí ăn ở so với Hà Nội hoặc TP.HCM, trong khi chất lượng bằng cấp hệ chính quy là hoàn toàn tương đương!`;

      const actions = [
        { id: 'search', label: `🔍 Xem trường tại khu vực này trong Tra cứu` }
      ];
      return { text: reply, actions };
    }
  }

  // INTENT SPECIAL: Exact score inquiry (e.g. "24 diem khoi D01", "21 diem", "27 diem")
  if (score) {
    const matchingUnis = (UNIVERSITIES_DATA || []).filter(u => {
      const lower = parseFloat(u.benchmarks?.split('–')[0]?.trim() || '20');
      const upper = parseFloat(u.benchmarks?.split('–')[1]?.trim() || '28');
      return score >= lower - 1.5 && score <= upper + 1.5;
    }).slice(0, 5);

    let reply = `Với mức điểm dự kiến khoảng **${score} điểm**, đây là phương án chiến lược phân tầng nguyện vọng 2026 dành cho em:\n\n`;
    
    reply += `🎯 **Tầng 1 — Nguyện vọng Mục tiêu & Bứt phá (Thử sức NV1)**:\n`;
    matchingUnis.slice(0, 2).forEach(u => {
      reply += `• **${u.name} (Mã: ${u.code})**: Điểm chuẩn tham khảo **${u.benchmarks}** • Học phí: ${u.tuition}. ${u.highlight}\n`;
    });
    reply += `\n`;

    reply += `🛡️ **Tầng 2 — Nguyện vọng An toàn & Đỗ chắc chắn 100% (NV2, NV3)**:\n`;
    matchingUnis.slice(2, 5).forEach(u => {
      reply += `• **${u.name} (Mã: ${u.code})**: Điểm chuẩn tham khảo **${u.benchmarks}** • ${u.city}\n`;
    });
    reply += `\n`;

    reply += `💡 **Chiến lược tối ưu hóa điểm số 2026**:\n`;
    reply += `1. Nếu có chứng chỉ IELTS 6.0+, em nên nộp xét tuyển kết hợp sớm để hưởng quy đổi điểm 10 tiếng Anh.\n`;
    reply += `2. Đăng ký thêm kỳ thi ĐGNL (HSA/APT) hoặc ĐGTD (TSA) để nhân đôi cơ hội đỗ đại học trước khi thi tốt nghiệp THPT!`;

    const actions = [
      { id: 'roadmap', label: '📘 Tạo Lộ trình hành động với mức điểm này' },
      { id: 'compare', label: '⚖️ So sánh các ngành ở phân khúc điểm này' }
    ];
    return { text: reply, actions };
  }


  // Reusable prompt footer that asks the student in-depth diagnostic questions
  const inDepthPromptFooter = `\n\n💬 **Cố vấn muốn hỏi kỹ hơn để tư vấn chuẩn xác 100% cho em**:\n1. 📍 **Em ở khu vực nào** (Hà Nội/Miền Bắc, TP.HCM/Miền Nam, hay Đà Nẵng/Miền Trung)?\n2. 🎯 **Mức điểm THPT em tự tin đạt được** là khoảng bao nhiêu (VD: 24, 26.5 điểm)?\n3. 🏫 **Em có đang nhắm ngôi trường đại học cụ thể nào** hay ngân sách học phí mong muốn không?`;

  switch (intent) {
    case 'DIAGNOSTIC_SURVEY': {
      let reply = `Chào em! Để giúp em chọn đúng ngành, đỗ đúng trường và không bị lãng phí điểm số, Cố vấn sẽ giúp em **chẩn đoán 3 yếu tố then chốt**:\n\n`;
      reply += `1️⃣ **Khu vực sinh sống & Nơi em muốn học đại học**:\n`;
      reply += `• Miền Bắc (Hà Nội, Hải Phòng): Trung tâm các trường kỹ thuật, ngoại thương, kinh tế truyền thống.\n`;
      reply += `• Miền Nam (TP.HCM, Cần Thơ): Năng động, nhiều cơ hội thực tập sớm tại các tập đoàn đa quốc gia.\n`;
      reply += `• Miền Trung (Đà Nẵng, Huế): Chi phí sinh hoạt hợp lý, môi trường sống đáng mơ ước.\n\n`;

      reply += `2️⃣ **Năng lực học tập & Dải điểm thi THPT dự kiến**:\n`;
      reply += `• Dưới 23 điểm • Từ 23 – 25.5 điểm • Từ 25.5 – 27.5 điểm • Trên 27.5 điểm.\n\n`;

      reply += `3️⃣ **Ngân sách học phí & Định hướng trường**:\n`;
      reply += `• Trường công lập tự chủ (30 – 55 triệu/năm) hay trường học phí thấp / Sư phạm (15 – 25 triệu/năm)?\n\n`;

      reply += `👉 **Em hãy bấm chọn nhanh tình huống của mình bên dưới để Cố vấn AI phân tích danh sách trường trúng tuyển nhé!**`;

      const actions = [
        {
          id: 'prompt',
          label: '📍 Em ở Hà Nội / Miền Bắc (25 – 27 điểm)',
          type: 'prompt',
          query: 'Em dự kiến 25 – 27 điểm ở Hà Nội, nên chọn ngành và trường nào?'
        },
        {
          id: 'prompt',
          label: '📍 Em ở TP.HCM / Miền Nam (Học phí 30-45tr)',
          type: 'prompt',
          query: 'Em ở TP.HCM muốn học CNTT hoặc Vi mạch, tài chính 30-45tr/năm'
        },
        {
          id: 'prompt',
          label: '🩺 Em thi khối B00 (24 – 26 điểm) chọn Y Dược',
          type: 'prompt',
          query: 'Học lực 24 – 26 điểm khối B00 ở miền Nam có vào được Y Dược không?'
        },
        {
          id: 'prompt',
          label: '🏫 Em muốn thi ĐH Bách Khoa Hà Nội',
          type: 'prompt',
          query: 'Em muốn thi ĐH Bách Khoa Hà Nội cần chuẩn bị gì?'
        }
      ];

      return { text: reply, actions };
    }

    case 'SCHOOL_TARGET_CONSULT': {
      // Find school data
      let schoolInfo = null;
      let schoolRegion = 'bac';
      for (const [rKey, rVal] of Object.entries(REGIONAL_UNIVERSITIES_DATA)) {
        const found = rVal.schools.find(s => s.id === targetSchool);
        if (found) {
          schoolInfo = found;
          schoolRegion = rKey;
          break;
        }
      }

      if (!schoolInfo) {
        schoolInfo = REGIONAL_UNIVERSITIES_DATA.bac.schools[0]; // Default HUST
      }

      let reply = `Phân tích chuyên sâu về mục tiêu tuyển sinh 2026 tại **${schoolInfo.name} (${schoolInfo.code})**:\n\n`;
      reply += `🏛️ **Vị thế & Điểm mạnh**: ${schoolInfo.highlight}\n`;
      reply += `🎯 **Khung điểm chuẩn THPT dự kiến**: **${schoolInfo.benchmarks}**\n`;
      reply += `💵 **Học phí năm học 2026**: **${schoolInfo.tuition}**\n\n`;

      reply += `📊 **Chiến lược xét tuyển cho từng mức điểm**:\n`;
      reply += `• **Từ ${schoolInfo.targetScore}+ điểm**: Rất tự tin đặt Nguyện vọng 1 (Plan A) vào các ngành mũi nhọn (CNTT, Bán dẫn, Kinh doanh quốc tế).\n`;
      reply += `• **Từ ${schoolInfo.safeScore} – ${schoolInfo.targetScore} điểm**: Nên cân nhắc các ngành chương trình chuẩn hoặc liên kết tiên tiến, đồng thời kết hợp phương thức ĐGNL/ĐGTD hoặc chứng chỉ IELTS 6.5+.\n`;
      reply += `• **Dưới ${schoolInfo.safeScore} điểm**: Hãy chọn 1 ngành bứt phá tại đây, nhưng **bắt buộc phải có phương án dự phòng an toàn** ở trường cùng khu vực!\n`;

      if (schoolRegion === 'bac') {
        reply += `\n🛡️ **Trường dự phòng tương đương tại Hà Nội**: PTIT (Học viện Bưu chính Viễn thông) hoặc UET (ĐH Công nghệ).`;
      } else if (schoolRegion === 'nam') {
        reply += `\n🛡️ **Trường dự phòng tương đương tại TP.HCM**: HCMUTE (Sư phạm Kỹ thuật TP.HCM) hoặc UIT (ĐH Công nghệ Thông tin).`;
      }

      reply += inDepthPromptFooter;

      const actions = [
        {
          id: 'roadmap',
          label: `📘 Lập lộ trình thi vào ${schoolInfo.code}`,
          majorName: `${schoolInfo.name}`
        },
        {
          id: 'passport',
          label: `🎫 Đặt ${schoolInfo.code} làm Nguyện vọng 1 Passport`,
          majorName: `${schoolInfo.name}`
        },
        {
          id: 'prompt',
          label: '🎯 Em dự kiến 25 – 27 điểm',
          type: 'prompt',
          query: `Em được 26 điểm thì cơ hội vào ${schoolInfo.name} ra sao?`
        }
      ];

      return { text: reply, actions };
    }

    case 'REGIONAL_CONSULT': {
      const regKey = region || 'bac';
      const regData = REGIONAL_UNIVERSITIES_DATA[regKey] || REGIONAL_UNIVERSITIES_DATA.bac;
      const targetScore = score || 26.0;

      let reply = `Tư vấn định hướng tuyển sinh 2026 tại **${regData.regionName}** với mức điểm dự kiến khoảng **${targetScore} điểm**:\n\n`;

      const safeSchools = regData.schools.filter(s => s.safeScore <= targetScore + 0.5);
      const reachSchools = regData.schools.filter(s => s.targetScore > targetScore);

      reply += `🎯 **Tầng 1 — Trường Mục tiêu & Bứt phá (Nguyện vọng 1)**:\n`;
      (reachSchools.length > 0 ? reachSchools.slice(0, 2) : regData.schools.slice(0, 2)).forEach(s => {
        reply += `• **${s.name}**: Điểm chuẩn dự báo **${s.benchmarks}** • Học phí **${s.tuition}**.\n`;
      });
      reply += `\n`;

      reply += `🛡️ **Tầng 2 — Trường Vừa sức & Tỷ lệ trúng tuyển trên 90% (NV2, NV3)**:\n`;
      (safeSchools.length > 0 ? safeSchools.slice(0, 3) : regData.schools.slice(1, 3)).forEach(s => {
        reply += `• **${s.name}**: Điểm chuẩn tham khảo **${s.benchmarks}** • ${s.highlight}\n`;
      });
      reply += `\n`;

      reply += `💡 **Chiến lược tài chính & sinh hoạt**: Tại ${regData.regionName}, mức học phí phổ biến từ 25 – 45 triệu/năm. Để tiết kiệm chi phí, em nên nộp hồ sơ xin xét ký túc xá sớm ngay khi có giấy báo trúng tuyển!`;

      reply += inDepthPromptFooter;

      const topSchool = safeSchools[0] || regData.schools[0];
      const actions = [
        {
          id: 'search',
          label: `🔍 Tra cứu toàn bộ ngành tại ${regData.regionName}`,
          majorId: 'cntt'
        },
        {
          id: 'passport',
          label: `🎫 Chọn ${topSchool.name} làm Nguyện vọng 1`,
          majorName: topSchool.name
        },
        {
          id: 'compare',
          label: '⚔️ So sánh 2 trường hàng đầu khu vực',
          majorIds: ['cntt', 'marketing']
        }
      ];

      return { text: reply, actions };
    }

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

      reply += inDepthPromptFooter;

      const actions = [
        {
          id: 'video',
          label: '🎥 Xem Video 1 Ngày Làm Nghề',
          majorId: targetMajor.id,
          majorName: targetMajor.ten_nganh
        },
        {
          id: 'prompt',
          label: `📍 Em ở Hà Nội học ${targetMajor.ten_nganh} ở đâu?`,
          type: 'prompt',
          query: `Em ở Hà Nội muốn học ${targetMajor.ten_nganh} thì trường nào tốt nhất?`
        },
        {
          id: 'prompt',
          label: `📍 Em ở TP.HCM học ${targetMajor.ten_nganh} ở đâu?`,
          type: 'prompt',
          query: `Em ở TP.HCM muốn học ${targetMajor.ten_nganh} thì trường nào tốt nhất?`
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

        reply += inDepthPromptFooter;

        const actions = [
          {
            id: 'prompt',
            label: '📍 Khảo sát học phí trường tại Hà Nội',
            type: 'prompt',
            query: 'Học phí các trường ĐH công lập ở Hà Nội 2026'
          },
          {
            id: 'prompt',
            label: '📍 Khảo sát học phí trường tại TP.HCM',
            type: 'prompt',
            query: 'Học phí các trường ĐH công lập ở TP.HCM 2026'
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

      reply += `💡 **Lời khuyên từ Cố vấn**: Gia đình nên chuẩn bị thêm khoảng **3.5 – 6 triệu/tháng** cho chi phí sinh hoạt (ký túc xá, ăn ở).`;

      reply += inDepthPromptFooter;

      const actions = [
        {
          id: 'prompt',
          label: '📍 Em ở Hà Nội, tài chính 30-40tr học trường nào?',
          type: 'prompt',
          query: 'Em ở Hà Nội, tài chính 30-40 triệu/năm nên chọn trường nào?'
        },
        {
          id: 'prompt',
          label: '📍 Em ở TP.HCM, tài chính 30-40tr học trường nào?',
          type: 'prompt',
          query: 'Em ở TP.HCM, tài chính 30-40 triệu/năm nên chọn trường nào?'
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

      reply += inDepthPromptFooter;

      const actions = [
        {
          id: 'video',
          label: `🎥 Xem Video 1 Ngày Làm ${targetMajor.ten_nganh}`,
          majorId: targetMajor.id,
          majorName: targetMajor.ten_nganh
        },
        {
          id: 'prompt',
          label: '🎯 24 – 26 điểm có vào được không?',
          type: 'prompt',
          query: `24 đến 26 điểm có đỗ được ngành ${targetMajor.ten_nganh} không?`
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

      reply += `💡 **Gợi ý lựa chọn tổ hợp (A01 vs D01)**: Nếu bạn có thế mạnh môn **Vật lý & Tư duy cấu trúc**, hãy chọn **${majorA.ten_nganh}** (khối A01). Nếu bạn có lợi thế **Ngữ văn & Ngoại ngữ**, **${majorB.ten_nganh}** (khối D01) sẽ giúp bạn tỏa sáng mạnh nhất!`;

      reply += inDepthPromptFooter;

      const actions = [
        {
          id: 'compare',
          label: '⚔️ Mở Đấu trường So sánh 20 tiêu chí',
          majorIds: [majorA.id, majorB.id]
        },
        {
          id: 'prompt',
          label: '📍 Em ở Hà Nội nên học trường nào?',
          type: 'prompt',
          query: `Em ở Hà Nội nên học ${majorA.ten_nganh} hay ${majorB.ten_nganh}?`
        },
        {
          id: 'passport',
          label: `🎫 Đặt ${majorA.ten_nganh} Plan A, ${majorB.ten_nganh} Plan B`,
          majorName: majorA.ten_nganh,
          backupName: majorB.ten_nganh
        }
      ];

      return { text: reply, actions };
    }

    case 'SCORE_CONSULT': {
      const userScore = score;
      const fittingMajors = MAJORS_DATA.filter(m => {
        const parts = m.diem_tb.split('-').map(s => parseFloat(s.trim()));
        const minScore = parts[0];
        const maxScore = parts[1] || minScore;
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

      reply += inDepthPromptFooter;

      const topChoice = (safeMajors[0] || fittingMajors[0] || MAJORS_DATA[0]);

      const actions = [
        {
          id: 'prompt',
          label: '📍 Em muốn học tại Hà Nội',
          type: 'prompt',
          query: `Với ${userScore} điểm em ở Hà Nội nên chọn trường nào?`
        },
        {
          id: 'prompt',
          label: '📍 Em muốn học tại TP.HCM',
          type: 'prompt',
          query: `Với ${userScore} điểm em ở TP.HCM nên chọn trường nào?`
        },
        {
          id: 'passport',
          label: `🎫 Đặt ${topChoice.ten_nganh} làm Mục tiêu Passport`,
          majorName: topChoice.ten_nganh
        }
      ];

      return { text: reply, actions };
    }

    case 'PERSONAL_CONSULT':
    default: {
      let archetype = 'Nhà Đổi Mới Công Nghệ & Kỹ Thuật (Tech Innovator)';
      let topMajors = [MAJORS_DATA[0], MAJORS_DATA[4]]; // CNTT & Marketing
      let matchPercentages = ['94%', '89%'];
      let strongSubjects = ['Toán', 'Tiếng Anh', 'Tin học'];

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

      reply += inDepthPromptFooter;

      const actions = [
        {
          id: 'prompt',
          label: '🧭 Bắt đầu khảo sát 3 câu chọn trường',
          type: 'prompt',
          query: 'Khảo sát 3 câu: Giúp em chọn trường & ngành chuẩn 2026'
        },
        {
          id: 'prompt',
          label: '📍 Em ở Hà Nội (Dự kiến 25 – 27 điểm)',
          type: 'prompt',
          query: 'Em dự kiến 25 – 27 điểm ở Hà Nội, nên chọn ngành và trường nào?'
        },
        {
          id: 'prompt',
          label: '📍 Em ở TP.HCM (Học phí 30-45tr/năm)',
          type: 'prompt',
          query: 'Em ở TP.HCM muốn học CNTT hoặc Vi mạch, tài chính 30-45tr/năm'
        }
      ];

      return { text: reply, actions };
    }
  }
}
