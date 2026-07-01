"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Star, Shield } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

const media = [
  {
    type: "image",
    src: "/images/hero-pawcam-front.png",
    label: "Góc trước",
  },
  { type: "image", src: "/images/hero-pawcam-side.png", label: "Góc bên" },
  {
    type: "image",
    src: "/images/hero-pawcam-dark.png",
    label: "Trong bóng tối",
  },
  {
    type: "video",
    src: "/videos/hero-pawcam-demo.mp4",
    poster: "/images/hero-pawcam-front.webp",
    label: "Video demo",
  },
] as const;

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);
  const { track } = useAnalytics();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const current = media[activeThumb];

  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, var(--background) 0%, var(--pastel) 50%, var(--background) 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: copy + buy box */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "none" : "translateY(40px)",
              transition: "all 0.8s ease",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--pastel)",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "24px",
                color: "var(--pastel-foreground)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              Thế hệ mới – AI Pet Guardian 2025
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "var(--foreground)",
                marginBottom: "24px",
                letterSpacing: "-0.5px",
              }}
            >
              Mắt canh giữ
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                thú cưng 24/7
              </span>
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                color: "var(--muted-foreground)",
                marginBottom: "32px",
                maxWidth: "480px",
              }}
            >
              PawCam Pro – Camera AI 4K giám sát sức khỏe và hành vi thú cưng,
              phát hiện sớm dấu hiệu bất thường, đàm thoại 2 chiều.
            </p>

            {/* Buy box */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "24px",
                marginBottom: "28px",
                maxWidth: "440px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px",
                }}
              >
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="var(--accent)"
                      color="var(--accent)"
                    />
                  ))}
                </div>
                <span
                  style={{ color: "var(--muted-foreground)", fontSize: "13px" }}
                >
                  4.9 (2.147 đánh giá)
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: 800,
                    color: "var(--foreground)",
                  }}
                >
                  2.990.000đ
                </span>
                <span
                  style={{
                    fontSize: "15px",
                    color: "var(--muted-foreground)",
                    textDecoration: "line-through",
                  }}
                >
                  3.520.000đ
                </span>
              </div>
              <a
                href="#subscribe"
                onClick={() => track("cta_click", { button: "hero_primary" })}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "var(--accent)",
                  color: "white",
                  padding: "14px",
                  borderRadius: "var(--radius-sm)",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "16px",
                  boxShadow:
                    "0 8px 32px color-mix(in srgb, var(--accent) 35%, transparent)",
                  transition: "all 0.3s ease",
                }}
              >
                Đặt trước ngay <ArrowRight size={18} />
              </a>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  marginTop: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--muted-foreground)",
                    fontSize: "12px",
                  }}
                >
                  <Shield size={13} color="var(--accent)" /> Bảo hành 24 tháng
                </span>
                <span
                  style={{ color: "var(--muted-foreground)", fontSize: "12px" }}
                >
                  Visa · Mastercard · PayPal
                </span>
              </div>
            </div>

            <a
              href="#features"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                padding: "12px 24px",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "15px",
              }}
            >
              Xem tính năng
            </a>
          </div>

          {/* Right: PDP gallery */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "none" : "translateX(40px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                position: "relative",
              }}
            >
              {/* Main viewer */}
              <div
                style={{
                  height: "320px",
                  position: "relative",
                  background: "var(--muted)",
                }}
              >
                {current.type === "video" ? (
                  <video
                    key={current.src}
                    src={current.src}
                    poster={current.poster}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  <Image
                    key={current.src}
                    src={current.src}
                    alt={`PawCam Pro - ${current.label}`}
                    fill
                    priority={activeThumb === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              {/* Thumbnails */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  padding: "16px",
                  background: "var(--card)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {media.map((m, i) => (
                  <button
                    key={m.src}
                    onClick={() => setActiveThumb(i)}
                    style={{
                      flex: 1,
                      padding: "10px 6px",
                      borderRadius: "var(--radius-sm)",
                      border:
                        activeThumb === i
                          ? "1px solid var(--accent)"
                          : "1px solid var(--border)",
                      background:
                        activeThumb === i
                          ? "color-mix(in srgb, var(--accent) 10%, transparent)"
                          : "var(--muted)",
                      color:
                        activeThumb === i
                          ? "var(--accent)"
                          : "var(--muted-foreground)",
                      fontSize: "11px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                padding: "14px 18px",
                marginTop: "16px",
                display: "inline-flex",
                gap: "8px",
                alignItems: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              }}
            >
              <span
                style={{
                  color: "var(--foreground)",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                🐱 AI phát hiện hành vi lạ
              </span>
              <span
                style={{ color: "var(--muted-foreground)", fontSize: "11px" }}
              >
                2 phút trước
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
