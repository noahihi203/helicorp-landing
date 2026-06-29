# Hướng dẫn Deploy

## Frontend → Vercel

1. Push code lên GitHub
2. Vào [vercel.com](https://vercel.com) → Import Repository
3. Root Directory: `frontend`
4. Thêm Environment Variable:
   - `NEXT_PUBLIC_API_URL` = URL backend của bạn
5. Click Deploy

## Backend → Railway

1. Vào [railway.app](https://railway.app) → New Project → Deploy from GitHub
2. Root Directory: `backend`
3. Thêm Environment Variables:
   - `PORT` = 4000
   - `FRONTEND_URL` = URL Vercel của bạn
   - `GEMINI_API_KEY` = key từ [aistudio.google.com](https://aistudio.google.com)
   - `WEBHOOK_URL` = (tuỳ chọn)
4. Click Deploy

## Lấy Gemini API Key miễn phí

1. Vào https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Copy key và paste vào Railway

## Sau khi deploy

Cập nhật `NEXT_PUBLIC_API_URL` trong Vercel thành URL Railway backend.
Redeploy frontend.
