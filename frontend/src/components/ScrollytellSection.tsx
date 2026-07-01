"use client";
import { useEffect, useRef, useState } from "react";
import { Activity, Bell, LineChart, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: Activity,
    title: "Theo dõi hành vi đi vệ sinh",
    desc: "AI phân tích tần suất, thời gian, tư thế — phát hiện thay đổi nhỏ nhất trong thói quen.",
    color: "var(--accent)",
    image: "/images/step1.png",
  },
  {
    icon: Bell,
    title: "Cảnh báo sớm tới điện thoại",
    desc: "Nhận thông báo ngay khi hành vi bất thường xuất hiện.",
    color: "#8b5cf6",
    image: "/images/step2.png",
  },
  {
    icon: LineChart,
    title: "Biểu đồ sức khỏe theo thời gian",
    desc: "Health pattern charts trực quan trên app.",
    color: "#10b981",
    image: "/images/step3.png",
  },
];

export default function ScrollytellSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / (rect.height - window.innerHeight);
      const step = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(progress * steps.length)),
      );
      setActiveStep(step);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: `${steps.length * 90}vh`, position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          background: "var(--background)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
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
            className="story-grid"
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <div style={{ marginBottom: "16px" }}>
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
                  Health & Data Insight
                </div>
                <h2
                  style={{
                    fontSize: "clamp(24px, 3vw, 40px)",
                    fontWeight: 800,
                    color: "var(--foreground)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.5px",
                  }}
                >
                  Dữ liệu sức khỏe
                  <br />
                  <span style={{ color: "var(--accent)" }}>
                    theo thời gian thực
                  </span>
                </h2>
              </div>

              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === activeStep;
                return (
                  <div
                    key={i}
                    onClick={() => setActiveStep(i)}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                      padding: "20px",
                      borderRadius: "var(--radius-md)",
                      cursor: "pointer",
                      background: isActive ? "var(--card)" : "transparent",
                      border: `1px solid ${isActive ? step.color + "40" : "transparent"}`,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "var(--radius-sm)",
                        flexShrink: 0,
                        background: isActive
                          ? `${step.color}18`
                          : "var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        size={20}
                        color={
                          isActive ? step.color : "var(--muted-foreground)"
                        }
                      />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontWeight: 700,
                          fontSize: "16px",
                          color: isActive
                            ? "var(--foreground)"
                            : "var(--muted-foreground)",
                          marginBottom: "6px",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.6,
                          color: isActive
                            ? "var(--muted-foreground)"
                            : "transparent",
                          maxHeight: isActive ? "100px" : "0",
                          overflow: "hidden",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: video panel */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  borderRadius: "var(--radius-lg)",
                  transition: "all 0.5s ease",
                  boxShadow: `0 32px 64px ${steps[activeStep].color}20`,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    transition: "opacity 0.5s ease",
                  }}
                />
                {/* Caption overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px",
                    background:
                      "linear-gradient(transparent, rgba(0,0,0,0.75))",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: "15px",
                      marginBottom: "10px",
                    }}
                  >
                    {steps[activeStep].title}
                  </div>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        style={{
                          width: i === activeStep ? "24px" : "8px",
                          height: "8px",
                          borderRadius: "4px",
                          background:
                            i === activeStep
                              ? steps[activeStep].color
                              : "rgba(255,255,255,0.4)",
                          transition: "all 0.3s",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .story-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </section>
  );
}
