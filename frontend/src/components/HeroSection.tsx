'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const { track } = useAnalytics();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a05 50%, #0a0a0f 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
      }}>
        {/* Gradient orbs */}
        <div style={{
          position: 'absolute', top: '20%', right: '10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', left: '5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse',
        }} />
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,107,53,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 24px 80px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="hero-grid">
          
          {/* Left: Text content */}
          <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(40px)', transition: 'all 0.8s ease' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,107,53,0.15)', border: '1px solid rgba(255,107,53,0.3)',
              borderRadius: '100px', padding: '6px 16px', marginBottom: '24px',
              color: '#ff6b35', fontSize: '13px', fontWeight: 600,
            }}>
              <Zap size={12} fill="currentColor" />
              Thế hệ mới – AI Pet Guardian 2025
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800, lineHeight: 1.1,
              color: '#ffffff', marginBottom: '24px',
              letterSpacing: '-1px',
            }}>
              Mắt canh giữ<br />
              <span style={{
                background: 'linear-gradient(135deg, #ff6b35, #ffad80)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>thú cưng 24/7</span>
            </h1>

            <p style={{
              fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)',
              marginBottom: '40px', maxWidth: '480px',
            }}>
              PawCam Pro – Camera AI 4K thế hệ mới. Nhận diện cảm xúc thú cưng, 
              tự động cho ăn, đàm thoại 2 chiều. Yêu thương không giới hạn, ngay cả khi bạn vắng nhà.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '32px', marginBottom: '40px', flexWrap: 'wrap' }}>
              {[
                { value: '4K', label: 'Ultra HD' },
                { value: '160°', label: 'Góc nhìn rộng' },
                { value: '10m', label: 'Night Vision' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#ff6b35', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#subscribe"
                onClick={() => track('cta_click', { button: 'hero_primary' })}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'linear-gradient(135deg, #ff6b35, #e85a25)',
                  color: 'white', padding: '16px 32px', borderRadius: '12px',
                  textDecoration: 'none', fontWeight: 700, fontSize: '16px',
                  boxShadow: '0 8px 32px rgba(255,107,53,0.4)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(255,107,53,0.5)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(255,107,53,0.4)'; }}
              >
                Đặt trước – 2.990.000đ
                <ArrowRight size={18} />
              </a>
              <a
                href="#features"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)',
                  padding: '16px 32px', borderRadius: '12px',
                  textDecoration: 'none', fontWeight: 600, fontSize: '16px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,53,0.5)'; (e.currentTarget as HTMLElement).style.color = '#ff6b35'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; }}
              >
                Xem tính năng
              </a>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: '24px', marginTop: '40px', flexWrap: 'wrap' }}>
              {[
                { icon: Shield, text: 'Bảo hành 24 tháng' },
                { icon: Star, text: '4.9/5 từ 2.000+ khách' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
                  <Icon size={14} color="#ff6b35" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product visual */}
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateX(40px)',
            transition: 'all 0.8s ease 0.2s',
          }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
              {/* Camera visual mockup */}
              <div style={{
                background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
                borderRadius: '32px',
                padding: '48px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
                position: 'relative',
                overflow: 'hidden',
                animation: 'float 6s ease-in-out infinite',
              }}>
                {/* Camera body */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '160px', height: '160px', margin: '0 auto 24px',
                    background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
                    borderRadius: '50%',
                    border: '4px solid rgba(255,107,53,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                    boxShadow: '0 0 60px rgba(255,107,53,0.2)',
                  }}>
                    {/* Lens rings */}
                    <div style={{
                      width: '120px', height: '120px', borderRadius: '50%',
                      border: '3px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <div style={{
                        width: '80px', height: '80px', borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1a0a05, #0a0505)',
                        border: '3px solid rgba(255,107,53,0.5)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <div style={{
                          width: '40px', height: '40px', borderRadius: '50%',
                          background: 'radial-gradient(circle, #ff6b35, #1a0a05)',
                        }} />
                      </div>
                    </div>
                    {/* Recording indicator */}
                    <div style={{
                      position: 'absolute', top: '12px', right: '12px',
                      width: '10px', height: '10px', borderRadius: '50%',
                      background: '#ff6b35', animation: 'pulse 1.5s infinite',
                    }} />
                  </div>

                  <div style={{ color: 'white', fontWeight: 700, fontSize: '20px', marginBottom: '8px' }}>PawCam Pro</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>AI Pet Guardian 4K</div>
                </div>

                {/* Feature pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px', justifyContent: 'center' }}>
                  {['4K UHD', 'Night Vision', 'AI Track', '2-Way Audio', 'Auto Feed'].map(f => (
                    <span key={f} style={{
                      background: 'rgba(255,107,53,0.15)', color: '#ff6b35',
                      border: '1px solid rgba(255,107,53,0.3)',
                      borderRadius: '100px', padding: '4px 12px', fontSize: '11px', fontWeight: 600,
                    }}>{f}</span>
                  ))}
                </div>

                {/* Decorative corner element */}
                <div style={{
                  position: 'absolute', top: '-30px', right: '-30px',
                  width: '100px', height: '100px', borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255,107,53,0.3), transparent)',
                }} />
              </div>

              {/* Floating notification card */}
              <div style={{
                position: 'absolute', bottom: '-20px', left: '-20px',
                background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px', padding: '16px',
                animation: 'float 8s ease-in-out infinite 2s',
              }}>
                <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600 }}>🐱 Mèo nhà đói rồi!</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '4px' }}>AI phát hiện • 2 phút trước</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
