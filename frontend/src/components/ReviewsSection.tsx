'use client';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Nguyễn Thị Minh Anh',
    location: 'TP. Hồ Chí Minh',
    avatar: 'MA',
    rating: 5,
    text: 'Camera siêu nét, AI nhận diện mèo nhà chính xác 100%. Đi công tác 1 tuần mà vẫn trông chừng được bé. Tính năng cho ăn tự động là cứu tinh!',
    pet: '🐱 Chủ của 2 bé mèo',
  },
  {
    name: 'Trần Quốc Bảo',
    location: 'Hà Nội',
    avatar: 'QB',
    rating: 5,
    text: 'Hình ảnh 4K cực kỳ sắc nét ngay cả ban đêm. Night vision hoạt động tốt hơn tôi tưởng nhiều. App cũng rất mượt, không bị lag.',
    pet: '🐶 Chủ của Golden Retriever',
  },
  {
    name: 'Lê Thị Thu Hương',
    location: 'Đà Nẵng',
    avatar: 'TH',
    rating: 5,
    text: 'Thế hệ camera thú cưng đỉnh nhất tôi từng dùng. Đàm thoại 2 chiều rõ ràng, bé nhà tôi nghe thấy tiếng là chạy ra ngay. Rất recommend!',
    pet: '🐱 Chủ của 3 bé mèo anh lông ngắn',
  },
  {
    name: 'Phạm Minh Tuấn',
    location: 'TP. Hồ Chí Minh',
    avatar: 'MT',
    rating: 4,
    text: 'Sản phẩm rất tốt, giao hàng nhanh. Bảo hành 24 tháng là cộng điểm lớn. Chỉ tiếc là chưa có tích hợp với smart home của mình.',
    pet: '🐶 Chủ của Shiba Inu',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ padding: '100px 0', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(255,107,53,0.1)',
            color: '#ff6b35', borderRadius: '100px', padding: '6px 20px',
            fontSize: '13px', fontWeight: 600, marginBottom: '16px',
            border: '1px solid rgba(255,107,53,0.2)',
          }}>
            Đánh giá từ khách hàng
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800,
            color: 'var(--foreground)', letterSpacing: '-0.5px', marginBottom: '16px',
          }}>
            Hơn 2.000 chủ thú cưng <span style={{ color: '#ff6b35' }}>tin dùng</span>
          </h2>
          
          {/* Aggregate rating */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#ff6b35" color="#ff6b35" />)}
            </div>
            <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--foreground)' }}>4.9</span>
            <span style={{ color: 'var(--muted-foreground)' }}>/ 5 (2.147 đánh giá)</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {reviews.map((r, i) => (
            <div key={r.name} className="fade-up" style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '20px', padding: '28px',
              transition: 'all 0.3s ease',
              transitionDelay: `${i * 0.08}s`,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
            >
              <Quote size={24} color="rgba(255,107,53,0.3)" style={{ marginBottom: '16px' }} />
              
              <p style={{ color: 'var(--foreground)', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                {r.text}
              </p>
              
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={14} fill={s <= r.rating ? '#ff6b35' : 'none'} color={s <= r.rating ? '#ff6b35' : 'var(--border)'} />
                ))}
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff6b35, #e85a25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 700, fontSize: '13px', flexShrink: 0,
                }}>{r.avatar}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--foreground)' }}>{r.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>{r.location} • {r.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
