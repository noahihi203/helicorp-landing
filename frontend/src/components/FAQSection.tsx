"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Camera có hoạt động khi mất WiFi không?",
    a: "Camera sẽ lưu video vào thẻ nhớ microSD cục bộ và đồng bộ lên cloud khi WiFi kết nối lại.",
  },
  {
    q: "AI có nhận diện chính xác nhiều mèo trong nhà không?",
    a: "Có, tính năng Multi-Cat Tracking nhận diện và theo dõi riêng biệt từng bé dựa trên đặc điểm ngoại hình.",
  },
  {
    q: "Dữ liệu sức khỏe có được lưu trữ bảo mật không?",
    a: "Toàn bộ dữ liệu được mã hóa AES-256, chỉ chủ tài khoản mới truy cập được qua app.",
  },
  {
    q: "Thời gian bảo hành là bao lâu?",
    a: "1 năm bảo hành chính hãng kèm Lifetime Support qua hotline và email.",
  },
  {
    q: "Tôi có thể đổi trả nếu không hài lòng?",
    a: "Hỗ trợ đổi trả miễn phí trong 30 ngày kể từ ngày nhận hàng.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{ padding: "100px 0", background: "var(--background)" }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="fade-up"
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 800,
              color: "var(--foreground)",
              letterSpacing: "-0.5px",
            }}
          >
            Câu hỏi thường gặp
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="fade-up"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "15px",
                      color: "var(--foreground)",
                    }}
                  >
                    {f.q}
                  </span>
                  <ChevronDown
                    size={18}
                    color="var(--muted-foreground)"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                      flexShrink: 0,
                      marginLeft: "12px",
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p
                    style={{
                      padding: "0 24px 20px",
                      color: "var(--muted-foreground)",
                      fontSize: "14px",
                      lineHeight: 1.6,
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
