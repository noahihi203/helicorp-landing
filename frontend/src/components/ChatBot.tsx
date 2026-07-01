"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

interface Message {
  role: "user" | "assistant";
  content: string;
  time: Date;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Xin chào! Tôi là trợ lý AI của PawCam Pro 🐾 Tôi có thể giúp bạn tìm hiểu về sản phẩm, tính năng và ưu đãi. Bạn muốn hỏi gì nào?",
      time: new Date(),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { track } = useAnalytics();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: userMsg, time: new Date() },
    ];
    setMessages(newMessages);
    setLoading(true);
    track("chatbot_message", { message: userMsg });

    try {
      const history = messages
        .slice(1)
        .map((m) => ({
          role: m.role === "user" ? "user" : "model",
          content: m.content,
        }));
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history }),
      });
      const data = await res.json();
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply, time: new Date() },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Xin lỗi, có lỗi kết nối. Vui lòng thử lại!",
          time: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickReplies = [
    "Giá bao nhiêu?",
    "Tính năng AI?",
    "Bảo hành thế nào?",
    "Mua ở đâu?",
  ];

  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
          track("chatbot_toggle", {});
        }}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 2000,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: open ? "var(--secondary)" : "var(--accent)",
          border: "none",
          cursor: "pointer",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(255,107,53,0.4)",
          transition: "all 0.3s ease",
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
        }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {!open && (
          <span
            style={{
              position: "absolute",
              top: "-4px",
              right: "-4px",
              background: "#10b981",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
        )}
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "96px",
            right: "24px",
            zIndex: 1999,
            width: "min(380px, calc(100vw - 32px))",
            height: "520px",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
            animation: "slideUp 0.3s ease",
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Bot size={18} color="white" />
            </div>
            <div>
              <div
                style={{ color: "white", fontWeight: 700, fontSize: "15px" }}
              >
                PawCam AI Assistant
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#a3e635",
                    display: "inline-block",
                  }}
                />
                Trực tuyến 24/7
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius:
                      msg.role === "user"
                        ? "16px 16px 4px 16px"
                        : "16px 16px 16px 4px",
                    background:
                      msg.role === "user" ? "var(--accent)" : "var(--pastel)",
                    color:
                      msg.role === "user"
                        ? "white"
                        : "var(--pastel-foreground)",
                    fontSize: "14px",
                    lineHeight: 1.5,
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    background: "var(--pastel)",
                    borderRadius: "16px 16px 16px 4px",
                    padding: "12px 16px",
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {messages.length === 1 && (
            <div
              style={{
                padding: "0 16px 8px",
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
              }}
            >
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => setInput(q)}
                  style={{
                    background: "var(--pastel)",
                    border: "1px solid var(--border)",
                    color: "var(--pastel-foreground)",
                    borderRadius: "100px",
                    padding: "6px 12px",
                    fontSize: "12px",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div
            style={{
              padding: "12px 16px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && sendMessage()
              }
              placeholder="Nhập câu hỏi..."
              style={{
                flex: 1,
                padding: "10px 14px",
                background: "var(--muted)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                color: "var(--foreground)",
                fontSize: "14px",
                outline: "none",
              }}
              onFocus={(e) =>
                ((e.target as HTMLInputElement).style.borderColor =
                  "var(--accent)")
              }
              onBlur={(e) =>
                ((e.target as HTMLInputElement).style.borderColor =
                  "var(--border)")
              }
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              style={{
                background:
                  input.trim() && !loading ? "var(--accent)" : "var(--muted)",
                border: "none",
                borderRadius: "var(--radius-sm)",
                padding: "10px 14px",
                cursor: input.trim() && !loading ? "pointer" : "not-allowed",
                color:
                  input.trim() && !loading
                    ? "white"
                    : "var(--muted-foreground)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
      `}</style>
    </>
  );
}
