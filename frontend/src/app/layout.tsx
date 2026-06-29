import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "PawCam Pro - Camera Thông Minh Chăm Sóc Thú Cưng | HELICORP",
  description: "PawCam Pro - Camera 4K AI thông minh giám sát và chăm sóc thú cưng từ xa. Tích hợp nhận dạng AI, đàm thoại 2 chiều, cho ăn tự động. Phân phối bởi HELICORP Việt Nam.",
  keywords: ["camera thú cưng", "smart pet camera", "PawCam Pro", "camera 4K", "HELICORP", "giám sát thú cưng"],
  openGraph: {
    title: "PawCam Pro - Camera Thông Minh Chăm Sóc Thú Cưng",
    description: "Camera 4K AI thông minh giám sát và chăm sóc thú cưng từ xa. Tích hợp nhận dạng AI, đàm thoại 2 chiều.",
    type: "website",
    locale: "vi_VN",
    url: "https://pawcam-pro.vercel.app",
    siteName: "PawCam Pro by HELICORP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PawCam Pro Smart Pet Camera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PawCam Pro - Camera Thông Minh Chăm Sóc Thú Cưng",
    description: "Camera 4K AI thông minh giám sát và chăm sóc thú cưng từ xa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
