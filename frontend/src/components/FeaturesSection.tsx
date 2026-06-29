'use client';
import { Camera, Mic, Cpu, Moon, Smartphone, Droplets, BatteryCharging, Wifi } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Camera 4K Ultra HD',
    desc: 'Độ phân giải 4K sắc nét với góc nhìn 160°. Mọi khoảnh khắc của thú cưng đều được ghi lại chân thực.',
    color: '#ff6b35',
  },
  {
    icon: Cpu,
    title: 'AI Nhận Diện Thú Cưng',
    desc: 'Chip AI tích hợp nhận diện chuyển động, cảm xúc và hành vi của thú cưng. Gửi cảnh báo thông minh đến điện thoại.',
    color: '#8b5cf6',
  },
  {
    icon: Mic,
    title: 'Đàm Thoại 2 Chiều',
    desc: 'Loa và micro HD cho phép bạn nói chuyện trực tiếp với thú cưng qua app. Giọng nói rõ, không nhiễu.',
    color: '#06b6d4',
  },
  {
    icon: Moon,
    title: 'Night Vision 10m',
    desc: 'Hồng ngoại thế hệ mới nhìn rõ trong bóng tối hoàn toàn ở khoảng cách lên đến 10 mét.',
    color: '#f59e0b',
  },
  {
    icon: Smartphone,
    title: 'Điều Khiển Từ App',
    desc: 'Xoay camera 355° trên/dưới và 90° qua ứng dụng iOS/Android. Xem live stream bất cứ lúc nào.',
    color: '#10b981',
  },
  {
    icon: BatteryCharging,
    title: 'Pin 8000mAh',
    desc: 'Pin khủng 8000mAh đủ dùng liên tục 72 giờ. Không lo mất điện, không lo gián đoạn giám sát.',
    color: '#ef4444',
  },
  {
    icon: Droplets,
    title: 'Chống Nước IP65',
    desc: 'Tiêu chuẩn IP65 bảo vệ hoàn toàn trước bụi bẩn và nước. Dùng được cả trong nhà và ngoài trời.',
    color: '#3b82f6',
  },
  {
    icon: Wifi,
    title: 'Lưu Trữ Thông Minh',
    desc: 'Lưu cloud 30 ngày miễn phí + thẻ nhớ 256GB. Mã hóa AES-256 bảo mật tuyệt đối dữ liệu của bạn.',
    color: '#ff6b35',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: '100px 0', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(255,107,53,0.1)',
            color: '#ff6b35', borderRadius: '100px', padding: '6px 20px',
            fontSize: '13px', fontWeight: 600, marginBottom: '16px',
            border: '1px solid rgba(255,107,53,0.2)',
          }}>
            Tính năng nổi bật
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800,
            color: 'var(--foreground)', marginBottom: '16px',
            letterSpacing: '-0.5px',
          }}>
            Mọi thứ thú cưng cần, <br />
            <span style={{ color: '#ff6b35' }}>tất cả trong một thiết bị</span>
          </h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '18px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            PawCam Pro tích hợp công nghệ AI tiên tiến nhất, mang đến trải nghiệm chăm sóc thú cưng toàn diện.
          </p>
        </div>

        {/* Features grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="fade-up"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  padding: '32px',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  animationDelay: `${i * 0.05}s`,
                  transitionDelay: `${i * 0.05}s`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-6px)';
                  el.style.borderColor = f.color;
                  el.style.boxShadow = `0 20px 40px ${f.color}20`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = 'none';
                  el.style.borderColor = 'var(--border)';
                  el.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: `${f.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <Icon size={24} color={f.color} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '17px', color: 'var(--foreground)', marginBottom: '10px' }}>
                  {f.title}
                </h3>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '14px', lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
