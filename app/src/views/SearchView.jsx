import React, { useState } from 'react';
import { Search, BookOpen, Layers, Heart, X, BookmarkCheck, ArrowRight } from 'lucide-react';
import { MAJORS_DATA, COMBINATIONS_DATA } from '../data/careerData';

export default function SearchView({ initialQuery = "", onBookmarkMajor }) {
  const [activeTab, setActiveTab] = useState('nganh'); // 'nganh' | 'tohop'
  const [searchKeyword, setSearchKeyword] = useState(initialQuery);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedCombo, setSelectedCombo] = useState('');
  const [selectedMajorModal, setSelectedMajorModal] = useState(null);
  const [savedMajorIds, setSavedMajorIds] = useState([]);

  const groups = [
    'Công nghệ & Máy tính', 
    'Y tế & Sức khỏe', 
    'Kinh doanh & Quản lý', 
    'Nghệ thuật & Sáng tạo', 
    'Khoa học Xã hội', 
    'Kỹ thuật & Công nghệ'
  ];
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

  const handleBookmark = (e, m) => {
    e.stopPropagation();
    onBookmarkMajor(m);
    if (!savedMajorIds.includes(m.id)) {
      setSavedMajorIds([...savedMajorIds, m.id]);
    }
  };

  return (
    <div className="tab-pane-animate">
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <div className="pill-badge" style={{ marginBottom: '10px' }}>🔍 BƯỚC 2 / 4 • CƠ SỞ DỮ LIỆU TUYỂN SINH</div>
        <h1 style={{ fontSize: '2.35rem', marginBottom: '8px' }}>Tra cứu ngành học &amp; tổ hợp môn</h1>
        <p style={{ color: '#64748B', maxWidth: '62ch', margin: '0 auto', fontSize: '0.98rem' }}>
          Tra cứu thông tin ngành đào tạo chuẩn 2026, tổ hợp xét tuyển, điểm chuẩn tham khảo và học phí thực tế các trường đại học.
        </p>
      </div>

      {/* Mode Switcher */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '28px' }}>
        <button
          onClick={() => setActiveTab('nganh')}
          style={{
            padding: '12px 24px',
            borderRadius: '999px',
            border: activeTab === 'nganh' ? 'none' : '1.5px solid #CBD5E1',
            background: activeTab === 'nganh' ? 'var(--primary-gradient)' : '#FFFFFF',
            color: activeTab === 'nganh' ? '#FFFFFF' : '#1E293B',
            fontWeight: '700',
            fontSize: '0.94rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: activeTab === 'nganh' ? '0 8px 20px -4px rgba(79, 70, 229, 0.35)' : 'var(--shadow-sm)',
            transition: 'all 0.2s ease'
          }}
        >
          <BookOpen size={18} />
          <span>Ngành đào tạo ({filteredMajors.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('tohop')}
          style={{
            padding: '12px 24px',
            borderRadius: '999px',
            border: activeTab === 'tohop' ? 'none' : '1.5px solid #CBD5E1',
            background: activeTab === 'tohop' ? 'var(--primary-gradient)' : '#FFFFFF',
            color: activeTab === 'tohop' ? '#FFFFFF' : '#1E293B',
            fontWeight: '700',
            fontSize: '0.94rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: activeTab === 'tohop' ? '0 8px 20px -4px rgba(79, 70, 229, 0.35)' : 'var(--shadow-sm)',
            transition: 'all 0.2s ease'
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
              border: '1px solid #E0E7FF',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: 'var(--shadow-card)',
              marginBottom: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px'
            }}
          >
            {/* Search Input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#1E293B', marginBottom: '8px' }}>Từ khóa tìm kiếm</label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #CBD5E1', borderRadius: '14px', padding: '10px 14px', background: '#FFFDF9' }}>
                <Search size={18} color="#64748B" style={{ marginRight: '8px', flexShrink: 0 }} />
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="Tên ngành, năng lực..."
                  style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.92rem', color: '#1E293B', background: 'transparent' }}
                />
                {searchKeyword && (
                  <button onClick={() => setSearchKeyword('')} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#94A3B8' }}>
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Filter by Group */}
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#1E293B', marginBottom: '8px' }}>Nhóm lĩnh vực</label>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '1.5px solid #CBD5E1', fontSize: '0.92rem', outline: 'none', background: '#FFFDF9', color: '#1E293B', fontWeight: '600' }}
              >
                <option value="">Tất cả nhóm ngành</option>
                {groups.map((g, i) => <option key={i} value={g}>{g}</option>)}
              </select>
            </div>

            {/* Filter by Combo */}
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '800', color: '#1E293B', marginBottom: '8px' }}>Khối / Tổ hợp môn</label>
              <select
                value={selectedCombo}
                onChange={(e) => setSelectedCombo(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '1.5px solid #CBD5E1', fontSize: '0.92rem', outline: 'none', background: '#FFFDF9', color: '#1E293B', fontWeight: '600' }}
              >
                <option value="">Tất cả tổ hợp xét tuyển</option>
                {combos.map((c, i) => <option key={i} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Majors Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '22px' }}>
            {filteredMajors.map((m) => {
              const isSaved = savedMajorIds.includes(m.id);
              return (
                <div
                  key={m.id}
                  className="card-box"
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', transition: 'all 0.2s ease', position: 'relative' }}
                  onClick={() => setSelectedMajorModal(m)}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '0.74rem', fontWeight: '800', padding: '4px 10px', borderRadius: '999px', background: '#FEF3C7', color: '#B45309', border: '1px solid #FDE68A' }}>
                        {m.nhom_nganh}
                      </span>
                      <span style={{ fontSize: '1.8rem' }}>{m.icon}</span>
                    </div>

                    <h3 style={{ fontSize: '1.28rem', marginBottom: '6px', color: '#1E293B' }}>{m.ten_nganh}</h3>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: '600', marginBottom: '10px' }}>
                      Mã ngành: <span style={{ color: '#4F46E5' }}>{m.ma_nganh}</span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.5', marginBottom: '16px' }}>{m.mo_ta}</p>

                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                      {m.to_hop.map((th, i) => (
                        <span key={i} style={{ padding: '3px 8px', fontSize: '0.75rem', fontWeight: '800', borderRadius: '999px', background: '#F0F9FF', color: '#0369A1', border: '1px solid #BAE6FD' }}>
                          {th}
                        </span>
                      ))}
                    </div>

                    <div style={{ background: '#F8FAFC', padding: '12px 14px', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '700' }}>ĐIỂM CHUẨN THAM KHẢO</div>
                        <div style={{ fontSize: '1rem', fontWeight: '900', color: '#4F46E5' }}>{m.diem_tb}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '700' }}>HỌC PHÍ DỰ KIẾN</div>
                        <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1E293B' }}>{m.hoc_phi}</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.86rem', fontWeight: '700', color: '#4F46E5', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Xem chi tiết &amp; trường <ArrowRight size={14} />
                    </span>
                    
                    <button
                      type="button"
                      onClick={(e) => handleBookmark(e, m)}
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
        </>
      )}

      {/* VIEW COMBINATIONS */}
      {activeTab === 'tohop' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {COMBINATIONS_DATA.map((cb, idx) => (
            <div key={idx} className="card-box" style={{ background: '#FFFFFF', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#4F46E5', fontFamily: 'var(--font-display)' }}>
                  Khối {cb.ma}
                </span>
                <span style={{ fontSize: '0.76rem', fontWeight: '800', padding: '4px 10px', borderRadius: '999px', background: '#F0F9FF', color: '#0369A1', border: '1px solid #BAE6FD' }}>
                  Tổ hợp xét tuyển
                </span>
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1E293B', marginBottom: '10px' }}>
                {cb.mon}
              </div>
              <div style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: '1.5' }}>
                <strong>Nhóm ngành phù hợp:</strong> {cb.nhom}
              </div>
              <button
                type="button"
                className="btn-edtech-secondary"
                style={{ width: '100%', marginTop: '16px', padding: '9px 16px', fontSize: '0.86rem' }}
                onClick={() => {
                  setSelectedCombo(cb.ma);
                  setActiveTab('nganh');
                }}
              >
                <span>Xem các ngành xét tuyển {cb.ma}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* DETAIL MODAL FOR SELECTED MAJOR */}
      {selectedMajorModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedMajorModal(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '26px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '88vh',
              overflowY: 'auto',
              padding: '32px',
              boxShadow: 'var(--shadow-float)',
              position: 'relative',
              border: '1px solid #E0E7FF'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMajorModal(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748B'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '2.5rem' }}>{selectedMajorModal.icon}</span>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: '800', padding: '3px 10px', borderRadius: '999px', background: '#FEF3C7', color: '#B45309' }}>
                  {selectedMajorModal.nhom_nganh}
                </span>
                <h2 style={{ fontSize: '1.75rem', margin: '4px 0 0', color: '#1E293B' }}>{selectedMajorModal.ten_nganh}</h2>
              </div>
            </div>

            <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
              {selectedMajorModal.mo_ta}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
              <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748B' }}>ĐIỂM CHUẨN THAM KHẢO</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '900', color: '#4F46E5', marginTop: '4px' }}>{selectedMajorModal.diem_tb}</div>
              </div>

              <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748B' }}>HỌC PHÍ DỰ KIẾN</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1E293B', marginTop: '4px' }}>{selectedMajorModal.hoc_phi}</div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '8px', color: '#1E293B' }}>Vị trí việc làm sau khi tốt nghiệp:</h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', background: '#F0FDF4', padding: '12px 16px', borderRadius: '12px', border: '1px solid #BBF7D0' }}>
                {selectedMajorModal.vi_tri_viec_lam}
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '8px', color: '#1E293B' }}>Các trường Đại học đào tạo tiêu biểu:</h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedMajorModal.truong_tieu_bieu.map((tr, i) => (
                  <span key={i} style={{ padding: '6px 12px', borderRadius: '10px', background: '#EEF2FF', color: '#4338CA', fontSize: '0.84rem', fontWeight: '700', border: '1px solid #C7D2FE' }}>
                    {tr}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid #E2E8F0', paddingTop: '18px' }}>
              <button
                className="btn-edtech-secondary"
                onClick={() => {
                  onBookmarkMajor(selectedMajorModal);
                  setSelectedMajorModal(null);
                  alert(`Đã lưu "${selectedMajorModal.ten_nganh}" vào danh sách so sánh!`);
                }}
              >
                <Heart size={16} />
                <span>Lưu vào so sánh</span>
              </button>
              <button
                className="btn-edtech-primary"
                onClick={() => setSelectedMajorModal(null)}
              >
                <span>Đã hiểu</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
