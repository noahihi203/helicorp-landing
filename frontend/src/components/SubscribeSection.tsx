'use client';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useCart } from '@/hooks/useCart';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function SubscribeSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const { track } = useAnalytics();
  const { addItem } = useCart();

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Tên phải ít nhất 2 ký tự';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email không hợp lệ';
    if (form.phone && !form.phone.match(/^(0|\+84)[0-9]{9}$/)) e.phone = 'Số điện thoại không hợp lệ';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('loading');
    track('form_submit', { form: 'subscribe' });

    try {
      const res = await fetch(`${API_URL}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success');
        setMessage(data.message);
        setForm({ name: '', email: '', phone: '' });
      } else {
        setStatus('error');
        setMessage(data.message || 'Có lỗi xảy ra, vui lòng thử lại!');
      }
    } catch {
      setStatus('error');
      setMessage('Không kết nối được server. Vui lòng thử lại sau!');
    }
  };

  const handleAddToCart = () => {
    addItem({ id: 'pawcam-pro', name: 'PawCam Pro', price: 2990000, image: '/product.jpg' });
    track('add_to_cart', { product: 'pawcam-pro' });
  };

  const inputStyle = (field: string) => ({
    width: '100%', padding: '14px 16px',
    background: 'var(--background)', border: `1px solid ${errors[field] ? '#ef4444' : 'var(--border)'}`,
    borderRadius: '10px', color: 'var(--foreground)', fontSize: '15px',
    outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box' as const,
  });

  return (
    <section id="subscribe" style={{
      padding: '100px 0',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0805 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative gradient */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="subscribe-grid">
          
          {/* Left: Copy */}
          <div className="fade-left">
            <div style={{
              display: 'inline-block', background: 'rgba(255,107,53,0.15)',
              color: '#ff6b35', borderRadius: '100px', padding: '6px 20px',
              fontSize: '13px', fontWeight: 600, marginBottom: '24px',
              border: '1px solid rgba(255,107,53,0.3)',
            }}>
              Đặt trước – Ưu đãi ra mắt
            </div>
            
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800,
              color: '#ffffff', lineHeight: 1.2, marginBottom: '20px', letterSpacing: '-0.5px',
            }}>
              Sở hữu PawCam Pro<br />
              <span style={{ color: '#ff6b35' }}>trước ngày ra mắt</span>
            </h2>
            
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', lineHeight: 1.7, marginBottom: '32px' }}>
              Đăng ký nhận thông báo ưu đãi ra mắt. Khách đặt trước được giảm <strong style={{ color: '#ff6b35' }}>15%</strong> và miễn phí vận chuyển toàn quốc.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                '🎁 Giảm 15% giá niêm yết cho 500 khách đầu tiên',
                '🚚 Miễn phí vận chuyển toàn quốc',
                '🛡️ Bảo hành mở rộng 30 tháng (thay vì 24)',
                '📱 1 năm cloud storage premium miễn phí',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="fade-right">
            <div style={{
              background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '24px', padding: '40px',
            }}>
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <CheckCircle size={56} color="#10b981" style={{ marginBottom: '16px' }} />
                  <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
                    Đăng ký thành công! 🎉
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{message}</p>
                  <button
                    onClick={() => setStatus('idle')}
                    style={{ marginTop: '24px', color: '#ff6b35', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}
                  >
                    Đăng ký thêm người dùng khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '22px', marginBottom: '8px' }}>
                    Đặt trước ngay hôm nay
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '28px' }}>
                    Điền thông tin để nhận mã ưu đãi ra mắt
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>
                        Họ và tên *
                      </label>
                      <input
                        style={inputStyle('name')}
                        placeholder="Nguyễn Văn A"
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#ff6b35'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = errors.name ? '#ef4444' : 'var(--border)'}
                      />
                      {errors.name && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.name}</p>}
                    </div>

                    <div>
                      <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        style={inputStyle('email')}
                        placeholder="email@example.com"
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#ff6b35'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = errors.email ? '#ef4444' : 'var(--border)'}
                      />
                      {errors.email && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.email}</p>}
                    </div>

                    <div>
                      <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>
                        Số điện thoại (tuỳ chọn)
                      </label>
                      <input
                        style={inputStyle('phone')}
                        placeholder="0901234567"
                        value={form.phone}
                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#ff6b35'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = errors.phone ? '#ef4444' : 'var(--border)'}
                      />
                      {errors.phone && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.phone}</p>}
                    </div>

                    {status === 'error' && (
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '12px' }}>
                        <AlertCircle size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: '1px' }} />
                        <p style={{ color: '#ef4444', fontSize: '13px' }}>{message}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      style={{
                        background: status === 'loading' ? 'rgba(255,107,53,0.5)' : 'linear-gradient(135deg, #ff6b35, #e85a25)',
                        color: 'white', padding: '16px', borderRadius: '12px',
                        border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                        fontWeight: 700, fontSize: '16px', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', gap: '8px',
                        transition: 'all 0.2s',
                      }}
                    >
                      {status === 'loading' ? (
                        <><Loader size={18} style={{ animation: 'spin 1s linear infinite' }} /> Đang xử lý...</>
                      ) : (
                        <><Send size={18} /> Đăng ký nhận ưu đãi</>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      style={{
                        background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.8)',
                        padding: '14px', borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer',
                        fontWeight: 600, fontSize: '15px', transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'}
                    >
                      🛒 Thêm vào giỏ hàng – 2.990.000đ
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .subscribe-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
