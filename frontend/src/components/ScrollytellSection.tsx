'use client';
import { useEffect, useRef, useState } from 'react';
import { Eye, Heart, Bell, Utensils } from 'lucide-react';

const steps = [
  {
    icon: Eye,
    title: 'Xem trực tiếp mọi lúc, mọi nơi',
    desc: 'Dù ở văn phòng hay đang du lịch, bạn luôn thấy thú cưng qua camera 4K siêu nét. Live stream mượt mà, không giật lag.',
    color: '#ff6b35',
    emoji: '👁️',
  },
  {
    icon: Bell,
    title: 'AI thông báo khi có chuyện lạ',
    desc: 'Hệ thống AI nhận diện khi thú cưng buồn, đói, hay cần chú ý. Thông báo ngay đến điện thoại – không bỏ sót khoảnh khắc nào.',
    color: '#8b5cf6',
    emoji: '🔔',
  },
  {
    icon: Heart,
    title: 'Kết nối cảm xúc từ xa',
    desc: 'Nói chuyện và nghe thú cưng qua loa 2 chiều. Giọng nói quen thuộc giúp bé an tâm hơn khi ở nhà một mình.',
    color: '#ef4444',
    emoji: '💬',
  },
  {
    icon: Utensils,
    title: 'Cho ăn đúng giờ, không sợ quên',
    desc: 'Lên lịch bữa ăn tự động hoặc cho ăn thủ công từ app. Máy đựng thức ăn 1kg tích hợp, đủ cho 3 ngày vắng nhà.',
    color: '#10b981',
    emoji: '🍽️',
  },
];

export default function ScrollytellSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = (-rect.top) / (rect.height - window.innerHeight);
      const step = Math.min(steps.length - 1, Math.max(0, Math.floor(progress * steps.length)));
      setActiveStep(step);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section ref={sectionRef} style={{ minHeight: `${steps.length * 100}vh`, position: 'relative' }}>
      <div style={{
        position: 'sticky', top: 0, height: '100vh',
        display: 'flex', alignItems: 'center',
        background: 'var(--muted)', overflow: 'hidden',
      }}>
        {/* Parallax background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,107,53,0.05) 0%, transparent 60%)',
          transform: `translateY(${activeStep * -20}px)`,
          transition: 'transform 0.5s ease',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="story-grid">
            
            {/* Left: Step list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{
                  display: 'inline-block', background: 'rgba(255,107,53,0.1)',
                  color: '#ff6b35', borderRadius: '100px', padding: '6px 20px',
                  fontSize: '13px', fontWeight: 600, marginBottom: '16px',
                  border: '1px solid rgba(255,107,53,0.2)',
                }}>Trải nghiệm thực tế</div>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, color: 'var(--foreground)', lineHeight: 1.2, letterSpacing: '-0.5px' }}>
                  Một ngày cùng<br /><span style={{ color: '#ff6b35' }}>PawCam Pro</span>
                </h2>
              </div>
              
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === activeStep;
                return (
                  <div key={i} onClick={() => setActiveStep(i)} style={{
                    display: 'flex', gap: '16px', alignItems: 'flex-start',
                    padding: '20px', borderRadius: '16px', cursor: 'pointer',
                    background: isActive ? 'var(--card)' : 'transparent',
                    border: `1px solid ${isActive ? step.color + '40' : 'transparent'}`,
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? `0 8px 24px ${step.color}15` : 'none',
                  }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                      background: isActive ? `${step.color}18` : 'var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s',
                    }}>
                      <Icon size={20} color={isActive ? step.color : 'var(--muted-foreground)'} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: '16px', color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)', marginBottom: '6px', transition: 'color 0.3s' }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '14px', lineHeight: 1.6, color: isActive ? 'var(--muted-foreground)' : 'transparent', maxHeight: isActive ? '100px' : '0', overflow: 'hidden', transition: 'all 0.3s ease' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Visual */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '340px', height: '420px',
                background: 'var(--card)', borderRadius: '32px',
                border: `2px solid ${steps[activeStep].color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '16px',
                transition: 'all 0.5s ease',
                boxShadow: `0 32px 64px ${steps[activeStep].color}20`,
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 50% 30%, ${steps[activeStep].color}10 0%, transparent 60%)`,
                  transition: 'all 0.5s ease',
                }} />
                <div style={{ fontSize: '72px', transition: 'all 0.3s', position: 'relative', zIndex: 1 }}>
                  {steps[activeStep].emoji}
                </div>
                <div style={{ textAlign: 'center', padding: '0 24px', position: 'relative', zIndex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '18px', color: 'var(--foreground)', marginBottom: '8px' }}>
                    {steps[activeStep].title}
                  </div>
                  <div style={{ width: '60px', height: '3px', background: steps[activeStep].color, margin: '0 auto', borderRadius: '2px' }} />
                </div>
                {/* Progress dots */}
                <div style={{ display: 'flex', gap: '8px', position: 'relative', zIndex: 1 }}>
                  {steps.map((_, i) => (
                    <div key={i} style={{
                      width: i === activeStep ? '24px' : '8px', height: '8px',
                      borderRadius: '4px', background: i === activeStep ? steps[activeStep].color : 'var(--border)',
                      transition: 'all 0.3s',
                    }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
