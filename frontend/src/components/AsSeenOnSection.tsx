"use client";

const press = ["BBC", "CNN", "Chewy", "TechCrunch", "iHeartCats", "Forbes"];

export default function AsSeenOnSection() {
  return (
    <section
      style={{
        padding: "40px 0",
        background: "var(--background)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted-foreground)",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Đã được nhắc đến trên
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
            flexWrap: "wrap",
          }}
        >
          {press.map((p) => (
            <span
              key={p}
              style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "var(--muted-foreground)",
                opacity: 0.6,
                letterSpacing: "-0.5px",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
