"use client";

const experts = [
  {
    name: "BS. Trần Văn Khoa",
    title: "Bác sĩ thú y, 12 năm kinh nghiệm",
    quote:
      "Thay đổi nhỏ trong tần suất đi vệ sinh thường là dấu hiệu sớm nhất của bệnh đường tiết niệu ở mèo. Giám sát liên tục giúp chủ nuôi phát hiện trước khi bệnh trở nặng.",
    initials: "TK",
  },
  {
    name: "BS. Lê Thị Ngọc",
    title: "Chuyên gia hành vi thú cưng",
    quote:
      "Camera AI không thay thế bác sĩ, nhưng dữ liệu hành vi theo thời gian là thông tin vô giá để chẩn đoán chính xác hơn trong lần khám tiếp theo.",
    initials: "LN",
  },
];

export default function ExpertInsightSection() {
  return (
    <section style={{ padding: "100px 0", background: "var(--muted)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="fade-up"
          style={{ textAlign: "center", marginBottom: "56px" }}
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
            Vet Insight on Early Changes
          </div>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.5px",
            }}
          >
            Được chuyên gia thú y tin dùng
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {experts.map((ex, i) => (
            <div
              key={ex.name}
              className="fade-up"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "32px",
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: "var(--pastel)",
                  color: "var(--pastel-foreground)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                {ex.initials}
              </div>
              <div>
                <p
                  style={{
                    color: "var(--foreground)",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    marginBottom: "14px",
                    fontStyle: "italic",
                  }}
                >
                  “{ex.quote}”
                </p>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "var(--foreground)",
                  }}
                >
                  {ex.name}
                </div>
                <div
                  style={{ fontSize: "13px", color: "var(--muted-foreground)" }}
                >
                  {ex.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
