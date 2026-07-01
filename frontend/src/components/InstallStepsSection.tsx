"use client";
import { Download, PlugZap, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Download,
    title: "Download app",
    desc: "Tải ứng dụng PawCam trên iOS hoặc Android, tạo tài khoản trong 30 giây.",
  },
  {
    num: "02",
    icon: PlugZap,
    title: "Plug in & đặt thiết bị",
    desc: "Đặt camera cạnh khu vực cần giám sát, kết nối WiFi qua app.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Get instant insights",
    desc: "Nhận thông báo AI và biểu đồ sức khỏe ngay trên điện thoại.",
  },
];

export default function InstallStepsSection() {
  return (
    <section style={{ padding: "100px 0", background: "var(--muted)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="fade-up"
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.5px",
            }}
          >
            Cài đặt trong 3 bước đơn giản
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="fade-up"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px",
                  textAlign: "center",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    marginBottom: "12px",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "var(--pastel)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <Icon size={24} color="var(--pastel-foreground)" />
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "var(--foreground)",
                    marginBottom: "8px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.6,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
