'use client';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0f', color: 'rgba(255,255,255,0.6)', padding: '60px 0 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: 36, height: 36, borderRadius: '10px',
                background: 'linear-gradient(135deg, #ff6b35, #e85a25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 700, fontSize: '14px'
              }}>P</div>
              <span style={{ fontWeight: 700, fontSize: '18px', color: '#ffffff' }}>
                PawCam<span style={{ color: '#ff6b35' }}>Pro</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, maxWidth: '240px' }}>
              Camera AI thông minh thế hệ mới dành cho thú cưng. Phân phối bởi HELICORP – Healthy Living Corporation.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {['FB', 'IG', 'TK', 'YT'].map(s => (
                <a key={s} href="#" style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: 700,
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#ff6b35'; (e.currentTarget as HTMLElement).style.color = '#ff6b35'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '16px', fontSize: '15px' }}>Sản phẩm</h4>
            {['PawCam Pro', 'Phụ kiện', 'Ứng dụng iOS', 'Ứng dụng Android', 'Cloud Storage'].map(item => (
              <a key={item} href="#" style={{ display: 'block', marginBottom: '10px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#ff6b35'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'}
              >{item}</a>
            ))}
          </div>

          {/* Support */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '16px', fontSize: '15px' }}>Hỗ trợ</h4>
            {['Hướng dẫn sử dụng', 'FAQ', 'Chính sách bảo hành', 'Trung tâm bảo hành', 'Liên hệ'].map(item => (
              <a key={item} href="#" style={{ display: 'block', marginBottom: '10px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#ff6b35'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'}
              >{item}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '16px', fontSize: '15px' }}>Liên hệ</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <span>📞 Hotline: 1800 xxxx (Miễn phí)</span>
              <span>📧 support@pawcampro.vn</span>
              <span>📍 R54, đường 15, P. Đông Hưng Thuận, Q.12, TP.HCM</span>
              <span>⏰ 8:00 – 18:00, Thứ 2 – Thứ 7</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '13px' }}>© 2025 PawCam Pro by HELICORP. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Điều khoản', 'Bảo mật', 'Cookie'].map(item => (
              <a key={item} href="#" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
