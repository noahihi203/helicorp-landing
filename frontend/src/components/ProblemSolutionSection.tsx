"use client";

const items = [
  {
    tag: "Vấn đề",
    title: "Bạn không thể trông chừng thú cưng 24/7",
    desc: "Đi làm, đi công tác — những thay đổi nhỏ trong hành vi của thú cưng (dấu hiệu sớm của bệnh) rất dễ bị bỏ sót khi bạn không có mặt.",
  },
  {
    tag: "Giải pháp",
    title: "PawCam Pro giám sát thay bạn, mọi lúc",
    desc: "Camera AI 4K ghi lại và phân tích hành vi liên tục, gửi cảnh báo ngay khi phát hiện điều bất thường — trước khi triệu chứng rõ ràng.",
  },
  {
    tag: "Kết quả",
    title: "An tâm, phát hiện sớm, can thiệp kịp lúc",
    desc: "Chủ nuôi có dữ liệu cụ thể để trao đổi với bác sĩ thú y, đưa thú cưng đi khám sớm hơn, tăng cơ hội điều trị hiệu quả.",
  },
];

export default function ProblemSolutionSection() {
  return (
    <section style={{ padding: "100px 0", background: "var(--pastel)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="fade-up"
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "var(--pastel-foreground)",
              letterSpacing: "-0.5px",
            }}
          >
            Từ lo lắng đến an tâm
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {items.map((it, i) => (
            <div
              key={it.tag}
              className="fade-up"
              style={{
                background: "var(--card)",
                borderRadius: "var(--radius-lg)",
                padding: "32px",
                transitionDelay: `${i * 0.1}s`,
                border: "1px solid var(--border)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "10px",
                }}
              >
                {it.tag}
              </span>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--card-foreground)",
                  marginBottom: "10px",
                  lineHeight: 1.4,
                }}
              >
                {it.title}
              </h3>
              <p
                style={{
                  color: "var(--muted-foreground)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
