'use client';

const specs = [
  { category: 'Hình ảnh', items: [
    { label: 'Độ phân giải', value: '4K UHD (3840×2160)' },
    { label: 'Tốc độ khung hình', value: '30fps / 60fps' },
    { label: 'Góc nhìn', value: '160° (Ngang) / 90° (Dọc)' },
    { label: 'Xoay ngang/dọc', value: '355° / 90°' },
  ]},
  { category: 'AI & Kết nối', items: [
    { label: 'Chip AI', value: 'Quad-core 1.6GHz NPU' },
    { label: 'WiFi', value: '2.4GHz + 5GHz Dual Band' },
    { label: 'Bluetooth', value: '5.0 BLE' },
    { label: 'Nhận diện', value: 'Thú cưng, người, chuyển động' },
  ]},
  { category: 'Âm thanh', items: [
    { label: 'Loa', value: 'Full-duplex 2W' },
    { label: 'Micro', value: 'Khử nhiễu AI' },
    { label: 'Tần số', value: '100Hz – 20kHz' },
    { label: 'Cảnh báo âm thanh', value: 'Có (điều chỉnh được)' },
  ]},
  { category: 'Nguồn & Lưu trữ', items: [
    { label: 'Pin', value: '8000mAh (72h liên tục)' },
    { label: 'Sạc', value: 'USB-C 18W PD' },
    { label: 'Lưu trữ ngoài', value: 'microSD tới 256GB' },
    { label: 'Cloud', value: '30 ngày miễn phí' },
  ]},
  { category: 'Thiết kế', items: [
    { label: 'Kích thước', value: '89 × 89 × 140mm' },
    { label: 'Trọng lượng', value: '320g' },
    { label: 'Chống nước', value: 'IP65' },
    { label: 'Màu sắc', value: 'Trắng Bắc Cực / Đen Obsidian' },
  ]},
  { category: 'Tương thích', items: [
    { label: 'iOS', value: '13.0 trở lên' },
    { label: 'Android', value: '8.0 trở lên' },
    { label: 'Alexa / Google Home', value: 'Có hỗ trợ' },
    { label: 'Nhiệt độ hoạt động', value: '-20°C đến 60°C' },
  ]},
];

export default function SpecsSection() {
  return (
    <section id="specs" style={{ padding: '100px 0', background: 'var(--muted)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(255,107,53,0.1)',
            color: '#ff6b35', borderRadius: '100px', padding: '6px 20px',
            fontSize: '13px', fontWeight: 600, marginBottom: '16px',
            border: '1px solid rgba(255,107,53,0.2)',
          }}>
            Thông số kỹ thuật
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800,
            color: 'var(--foreground)', letterSpacing: '-0.5px',
          }}>
            Chi tiết từng milimét
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {specs.map((cat, ci) => (
            <div key={cat.category} className="fade-up" style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '20px', padding: '32px',
              transitionDelay: `${ci * 0.05}s`,
            }}>
              <h3 style={{
                fontWeight: 700, fontSize: '16px', color: '#ff6b35',
                marginBottom: '20px', paddingBottom: '12px',
                borderBottom: '1px solid var(--border)',
              }}>{cat.category}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {cat.items.map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ color: 'var(--muted-foreground)', fontSize: '14px', flexShrink: 0 }}>{item.label}</span>
                    <span style={{ color: 'var(--foreground)', fontSize: '14px', fontWeight: 600, textAlign: 'right' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Download spec sheet */}
        <div className="fade-up" style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: '#ff6b35', textDecoration: 'none', fontWeight: 600, fontSize: '15px',
            border: '1px solid rgba(255,107,53,0.3)', borderRadius: '10px', padding: '12px 24px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,53,0.1)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            📄 Tải thông số kỹ thuật đầy đủ (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
