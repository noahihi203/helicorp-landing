"use client";
import {
  Camera,
  Mic,
  Cpu,
  Moon,
  Smartphone,
  Droplets,
  BatteryCharging,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI Nhận Diện Thú Cưng",
    desc: "Chip AI tích hợp nhận diện chuyển động, cảm xúc và hành vi. Gửi cảnh báo thông minh đến điện thoại khi có dấu hiệu bất thường.",
    span: "large",
  },
  {
    icon: Camera,
    title: "Camera 4K Ultra HD",
    desc: "Góc nhìn 160°, mọi khoảnh khắc đều sắc nét.",
    span: "normal",
  },
  {
    icon: Moon,
    title: "Night Vision 10m",
    desc: "Nhìn rõ trong bóng tối hoàn toàn.",
    span: "normal",
  },
  {
    icon: Mic,
    title: "Đàm Thoại 2 Chiều",
    desc: "Nói chuyện trực tiếp với thú cưng qua app, giọng rõ không nhiễu.",
    span: "normal",
  },
  {
    icon: Smartphone,
    title: "Điều Khiển Từ App",
    desc: "Xoay camera 355°/90° qua ứng dụng, xem live stream bất cứ lúc nào.",
    span: "large",
  },
  {
    icon: BatteryCharging,
    title: "Pin 8000mAh",
    desc: "Dùng liên tục 72 giờ.",
    span: "normal",
  },
  {
    icon: Droplets,
    title: "Chống Nước IP65",
    desc: "Dùng được trong nhà và ngoài trời.",
    span: "normal",
  },
  {
    icon: Wifi,
    title: "Lưu Trữ Thông Minh",
    desc: "Cloud 30 ngày miễn phí + thẻ nhớ 256GB, mã hóa AES-256.",
    span: "normal",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{ padding: "100px 0", background: "var(--background)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="fade-up"
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div
            style={{
              display: "inline-block",
              background: "var(--pastel)",
              color: "var(--pastel-foreground)",
              borderRadius: "100px",
              padding: "6px 20px",
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Tính năng nổi bật
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              color: "var(--foreground)",
              marginBottom: "16px",
              letterSpacing: "-0.5px",
            }}
          >
            Mọi thứ thú cưng cần, <br />
            <span style={{ color: "var(--accent)" }}>
              tất cả trong một thiết bị
            </span>
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "18px",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            PawCam Pro tích hợp công nghệ AI tiên tiến nhất, mang đến trải
            nghiệm chăm sóc thú cưng toàn diện.
          </p>
        </div>

        <div
          className="bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "220px",
            gap: "20px",
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            const colSpan = f.span === "large" ? "span 2" : "span 1";
            const rowSpan = f.span === "large" ? "span 1" : "span 1";
            return (
              <div
                key={f.title}
                className="fade-up bento-item"
                style={{
                  gridColumn: colSpan,
                  gridRow: rowSpan,
                  background: i === 0 ? "var(--pastel)" : "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transitionDelay: `${i * 0.04}s`,
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "var(--radius-sm)",
                    background:
                      i === 0 ? "rgba(255,255,255,0.5)" : "var(--pastel)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Icon
                    size={22}
                    color={
                      i === 0 ? "var(--pastel-foreground)" : "var(--accent)"
                    }
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "17px",
                      color:
                        i === 0
                          ? "var(--pastel-foreground)"
                          : "var(--foreground)",
                      marginBottom: "8px",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      color:
                        i === 0
                          ? "var(--pastel-foreground)"
                          : "var(--muted-foreground)",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      opacity: i === 0 ? 0.85 : 1,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bento-item { grid-column: span 1 !important; }
        }
        @media (max-width: 560px) {
          .bento-grid { grid-template-columns: 1fr !important; grid-auto-rows: auto !important; }
        }
      `}</style>
    </section>
  );
}
