import React, { useState } from 'react';
import { Search, Filter, BookOpen, Layers, Check, ExternalLink, Heart, X, School } from 'lucide-react';
import { MAJORS_DATA, COMBINATIONS_DATA } from '../data/careerData';

export default function SearchView({ initialQuery = "", onBookmarkMajor }) {
  const [activeTab, setActiveTab] = useState('nganh'); // 'nganh' | 'tohop'
  const [searchKeyword, setSearchKeyword] = useState(initialQuery);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedCombo, setSelectedCombo] = useState('');
  const [selectedMajorModal, setSelectedMajorModal] = useState(null);

  const groups = ['Công nghệ & Máy tính', 'Y tế & Sức khỏe', 'Kinh doanh & Quản lý', 'Nghệ thuật & Sáng tạo', 'Khoa học Xã hội', 'Kỹ thuật & Công nghệ'];
  const combos = ['A00', 'A01', 'B00', 'C00', 'D01', 'D07'];

  // Filter logic
  const filteredMajors = MAJORS_DATA.filter(m => {
    if (selectedGroup && m.nhom_nganh !== selectedGroup) return false;
    if (selectedCombo && !m.to_hop.includes(selectedCombo)) return false;
    if (searchKeyword.trim()) {
      const kw = searchKeyword.toLowerCase().trim();
      const match = m.ten_nganh.toLowerCase().includes(kw) ||
                    m.mo_ta.toLowerCase().includes(kw) ||
                    m.nang_luc.toLowerCase().includes(kw) ||
                    m.to_hop.some(t => t.toLowerCase().includes(kw));
      if (!match) return false;
    }
    return true;
  });

  return (
    <div className="tab-pane-animate">
      <div style={{ marginBottom: '32px' }}>
        <div className="pill-badge" style={{ marginBottom: '10px' }}>BƯỚC 2 / 4 • CƠ SỞ DỮ LIỆU TUYỂN SINH</div>
        <h1 style={{ fontSize: '2.4rem' }}>Tra cứu ngành học & tổ hợp môn</h1>
        <p style={{ color: '#64748B' }}>Tra cứu thông tin ngành đào tạo, tổ hợp xét tuyển, điểm chuẩn tham khảo và học phí các trường đại học.</p>
      </div>

      {/* Mode Switcher */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
        <button
          onClick={() => setActiveTab('nganh')}
          style={{
            padding: '10px 20px',
            borderRadius: '999px',
            border: activeTab === 'nganh' ? 'none' : '1.5px solid #CBD5E1',
            background: activeTab === 'nganh' ? 'var(--primary-gradient)' : '#FFFFFF',
            color: activeTab === 'nganh' ? '#FFFFFF' : '#1E293B',
            fontWeight: '700',
            fontSize: '0.92rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <BookOpen size={18} />
          <span>Ngành đào tạo ({filteredMajors.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('tohop')}
          style={{
            padding: '10px 20px',
            borderRadius: '999px',
            border: activeTab === 'tohop' ? 'none' : '1.5px solid #CBD5E1',
            background: activeTab === 'tohop' ? 'var(--primary-gradient)' : '#FFFFFF',
            color: activeTab === 'tohop' ? '#FFFFFF' : '#1E293B',
            fontWeight: '700',
            fontSize: '0.92rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Layers size={18} />
          <span>Tổ hợp xét tuyển ({COMBINATIONS_DATA.length})</span>
        </button>
      </div>

      {/* FILTER BAR FOR MAJORS */}
      {activeTab === 'nganh' && (
        <>
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '20px',
              boxShadow: 'var(--shadow-card)',
              marginBottom: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}
          >
            {/* Search Input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#1E293B', marginBottom: '6px' }}>Từ khóa tìm kiếm</label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #CBD5E1', borderRadius: '12px', padding: '10px 14px' }}>
                <Search size={18} color="#64748B" style={{ marginRight: '8px' }} />
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="Tên ngành, năng lực..."
                  style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.9rem', color: '#0F172A', background: 'transparent' }}
                />
              </div>
            </div>

            {/* Filter by Group */}
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#1E293B', marginBottom: '6px' }}>Nhóm ngành</label>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                style={{ width: '100%', padding: '11px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', outline: 'none', background: '#FFFFFF' }}
              >
                <option value="">Tất cả nhóm ngành</option>
                {groups.map((g, i) => <option key={i} value={g}>{g}</option>)}
              </select>
            </div>

            {/* Filter by Combo */}
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#1E293B', marginBottom: '6px' }}>Khối / Tổ hợp môn</label>
              <select
                value={selectedCombo}
                onChange={(e) => setSelectedCombo(e.target.value)}
                style={{ width: '100%', padding: '11px 14px', borderRadius: '12px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', outline: 'none', background: '#FFFFFF' }}
              >
                <option value="">Tất cả tổ hợp</option>
                {combos.map((c, i) => <option key={i} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Majors Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
            {filteredMajors.map((m) => (
              <div
                key={m.id}
                className="card-box"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => setSelectedMajorModal(m)}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="pill-badge-amber">{m.nhom_nganh}</span>
                    <span style={{ fontSize: '1.6rem' }}>{m.icon}</span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{m.ten_nganh}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.5', marginBottom: '14px' }}>{m.mo_ta}</p>

                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {m.to_hop.map((th, i) => (
                      <span key={i} className="pill-badge" style={{ padding: '3px 8px', fontSize: '0.74rem' }}>{th}</span>
                    ))}
                  </div>

                  <div style={{ fontSize: '0.84rem', color: '#475569', marginBottom: '6px' }}>
                    <strong>Điểm tham khảo:</strong> <span style={{ color: '#4F46E5', fontWeight: '700' }}>{m.diem_tb}</span>
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#475569' }}>
                    <strong>Học phí:</strong> {m.hoc_phi}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px', marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.84rem', fontWeight: '700', color: '#4F46E5' }}>Xem chi tiết & trường ➔</span>
                  <button
                    type="button"
                    className="btn-secondary"
                    style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookmarkMajor(m);
                      alert(`Đã lưu "${m.ten_nganh}" vào danh sách so sánh!`);
                    }}
                  >
                    ❤️ Lưu
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredMajors.length === 0 && (
            <div className="card-box" style={{ textAlign: 'center', padding: '48px 24px' }}>
              <p style={{ color: '#64748B', fontSize: '1rem' }}>Không tìm thấy ngành phù hợp với bộ lọc. Hãy thử tìm từ khóa khác!</p>
            </div>
          )}
        </>
      )}

      {/* COMBINATIONS VIEW */}
      {activeTab === 'tohop' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {COMBINATIONS_DATA.map((combo, i) => (
            <div key={i} className="card-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-gradient)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>
                  {combo.ma}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Tổ hợp {combo.ma}</h3>
                  <div style={{ fontSize: '0.86rem', color: '#4F46E5', fontWeight: '700' }}>{combo.mon}</div>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: '1.5' }}>
                <strong>Nhóm ngành phù hợp:</strong> {combo.nhom}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* MAJOR DETAIL MODAL */}
      {selectedMajorModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedMajorModal(null)}
        >
          <div
            className="card-box"
            style={{ maxWidth: '640px', width: '100%', maxHeight: '88vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span className="pill-badge-amber" style={{ marginBottom: '8px' }}>{selectedMajorModal.nhom_nganh}</span>
                <h2 style={{ fontSize: '1.8rem', marginTop: '6px' }}>{selectedMajorModal.icon} {selectedMajorModal.ten_nganh}</h2>
                <div style={{ fontSize: '0.84rem', color: '#64748B' }}>Mã ngành: {selectedMajorModal.ma_nganh}</div>
              </div>
              <button
                onClick={() => setSelectedMajorModal(null)}
                style={{ background: '#F1F5F9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={20} color="#64748B" />
              </button>
            </div>

            <p style={{ fontSize: '0.96rem', lineHeight: '1.6', color: '#334155', marginBottom: '20px' }}>
              {selectedMajorModal.mo_ta}
            </p>

            <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '18px', border: '1px solid #E2E8F0', marginBottom: '20px' }}>
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#0F172A' }}>Năng lực phù hợp:</strong> <span style={{ color: '#475569' }}>{selectedMajorModal.nang_luc}</span>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#0F172A' }}>Vị trí việc làm:</strong> <span style={{ color: '#475569' }}>{selectedMajorModal.vi_tri_viec_lam}</span>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#0F172A' }}>Tổ hợp xét tuyển:</strong>
                <div style={{ display: 'inline-flex', gap: '6px', marginLeft: '8px' }}>
                  {selectedMajorModal.to_hop.map((th, i) => (
                    <span key={i} className="pill-badge" style={{ padding: '2px 8px', fontSize: '0.74rem' }}>{th}</span>
                  ))}
                </div>
              </div>
              <div>
                <strong style={{ color: '#0F172A' }}>Mức học phí ước tính:</strong> <span style={{ color: '#475569' }}>{selectedMajorModal.hoc_phi}</span>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <School size={18} color="#4F46E5" />
                <span>Các trường đào tạo tiêu biểu:</span>
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedMajorModal.truong_tieu_bieu.map((truong, idx) => (
                  <span key={idx} style={{ padding: '6px 14px', borderRadius: '999px', background: '#EEF2FF', color: '#4F46E5', fontSize: '0.84rem', fontWeight: '700' }}>
                    {truong}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                className="btn-secondary"
                onClick={() => {
                  onBookmarkMajor(selectedMajorModal);
                  alert(`Đã lưu "${selectedMajorModal.ten_nganh}" vào danh sách so sánh!`);
                }}
              >
                ❤️ Lưu vào so sánh
              </button>
              <button className="btn-primary" onClick={() => setSelectedMajorModal(null)}>
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
