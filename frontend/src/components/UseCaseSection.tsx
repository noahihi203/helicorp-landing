"use client";
import { Cat, Users, Plane, HeartPulse } from "lucide-react";

const cases = [
  {
    icon: HeartPulse,
    title: "Phát hiện sớm dấu hiệu bệnh",
    desc: "Catch health changes early — AI cảnh báo trước khi triệu chứng rõ ràng.",
  },
  {
    icon: Cat,
    title: "Mèo lớn tuổi",
    desc: "Theo dõi sát sao các bé mèo senior có nguy cơ bệnh đường tiết niệu/tiêu hóa.",
  },
  {
    icon: Users,
    title: "Nhà nhiều mèo",
    desc: "Multi-cat tracking — nhận diện và theo dõi riêng biệt từng bé trong nhà.",
  },
  {
    icon: Plane,
    title: "Khi đi công tác xa",
    desc: "Giám sát 24/7 từ xa, an tâm dù không có mặt ở nhà.",
  },
];

export default function UseCaseSection() {
  return (
    <section style={{ padding: "100px 0", background: "var(--background)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
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
            Phù hợp với mọi hoàn cảnh
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="fade-up"
                style={{
                  background: "var(--pastel)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <Icon
                  size={28}
                  color="var(--pastel-foreground)"
                  style={{ marginBottom: "16px" }}
                />
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "var(--pastel-foreground)",
                    marginBottom: "8px",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "var(--pastel-foreground)",
                    opacity: 0.85,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
