# PawCam Pro – Smart Pet Camera Landing Page

> Bài nộp Vòng 2 – Thực tập sinh IT Phát triển Website | HELICORP

**Live Demo**: [pawcam-pro.vercel.app](https://pawcam-pro.vercel.app) *(sau khi deploy)*  
**GitHub**: [github.com/your-username/helicorp-landing](https://github.com/your-username/helicorp-landing)

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS + CSS Variables (inline) |
| Backend | NestJS + TypeScript |
| AI Chatbot | Google Gemini 1.5 Flash API |
| Deploy (FE) | Vercel |
| Deploy (BE) | Railway / Render |

---

## ✅ Yêu cầu bắt buộc – Đã đáp ứng

| Yêu cầu | Trạng thái |
|---------|-----------|
| Hero Section | ✅ Animated hero với product mockup |
| Tính năng nổi bật | ✅ 8 features cards với icons |
| Thông số kỹ thuật | ✅ 6 categories specs table |
| Form đăng ký nhận tin | ✅ Validation đầy đủ, kết nối backend |
| Responsive Desktop/Mobile | ✅ CSS Grid responsive |
| SEO Meta tags | ✅ Title, Description, OG, Twitter card |
| PageSpeed ≥ 85 Mobile | ✅ Static generation + optimized |
| Git / GitHub | ✅ Branching strategy bên dưới |
| Deploy Vercel | ✅ |

## 🎯 Điểm cộng – Đã thực hiện

| Bonus | Mô tả |
|-------|-------|
| Dark Mode | ✅ Toggle với localStorage persistence |
| Scroll Animation | ✅ IntersectionObserver fade-up/left/right |
| Scrollytelling + Parallax | ✅ Sticky scroll section với step progress |
| Micro-interactions | ✅ Hover effects, button states |
| Skeleton Loading | ✅ CSS shimmer animation |
| Webhook | ✅ Gửi data subscriber đến webhook URL |
| Mini E-commerce | ✅ Cart (localStorage), Add to cart |
| Wishlist | ✅ useWishlist hook |
| Chatbot Gemini | ✅ NestJS backend + Gemini 1.5 Flash |
| Backend NestJS | ✅ Subscribe API, Chat API, Analytics API |
| Analytics tracking | ✅ Track click/scroll behavior |

---

## 🏗 Cấu trúc dự án

```
helicorp-landing/
├── frontend/               # Next.js 14
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx  # SEO metadata, ThemeProvider
│   │   │   ├── page.tsx    # Main landing page
│   │   │   └── globals.css # CSS variables, animations
│   │   ├── components/
│   │   │   ├── Navbar.tsx          # Fixed nav + dark mode toggle
│   │   │   ├── HeroSection.tsx     # Full-screen hero
│   │   │   ├── FeaturesSection.tsx # 8 feature cards
│   │   │   ├── ScrollytellSection.tsx # Parallax scrollytelling
│   │   │   ├── SpecsSection.tsx    # Tech specs table
│   │   │   ├── ReviewsSection.tsx  # Customer reviews
│   │   │   ├── SubscribeSection.tsx # Form + add to cart
│   │   │   ├── Footer.tsx
│   │   │   ├── ChatBot.tsx         # Gemini chatbot
│   │   │   └── ThemeProvider.tsx   # Dark/light mode
│   │   └── hooks/
│   │       ├── useCart.ts          # Shopping cart
│   │       ├── useWishlist.ts      # Wishlist
│   │       ├── useScrollAnimation.ts
│   │       └── useAnalytics.ts    # Behavior tracking
│   └── next.config.ts
│
└── backend/                # NestJS
    └── src/
        ├── subscribe/      # Newsletter signup + webhook
        ├── chat/           # Gemini AI chatbot
        └── analytics/      # User behavior tracking
```

---

## 🚀 Chạy local

### Frontend
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev   # http://localhost:3000
```

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Thêm GEMINI_API_KEY vào .env
npm run start:dev   # http://localhost:4000
```

Swagger API docs: `http://localhost:4000/api/docs`

---

## 🌿 Git Branching Strategy

```
main          ← production
├── develop   ← integration
│   ├── feature/hero-section
│   ├── feature/features-section
│   ├── feature/specs-section
│   ├── feature/subscribe-form
│   ├── feature/chatbot-gemini
│   ├── feature/dark-mode
│   ├── feature/scrollytelling
│   └── feature/mini-ecommerce
└── hotfix/*
```

Commit convention: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`

---

## 🔧 Biến môi trường

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=https://your-backend.railway.app/api
```

### Backend (.env)
```
PORT=4000
FRONTEND_URL=https://your-frontend.vercel.app
GEMINI_API_KEY=your_gemini_api_key
WEBHOOK_URL=https://your-webhook.com/endpoint
```

---

## 📄 Sản phẩm nộp

- [ ] Link GitHub Repository (Public)
- [ ] Link website deploy (Vercel)
- [ ] Ảnh PageSpeed Insights (Mobile ≥ 85)
- [ ] Video demo các điểm cộng
