import { useState, useEffect, useRef } from "react";
import { ChessBoard } from "../components/ChessBoard";
import {
  ChessKnightSVG,
  ChessPawnSVG,
  Zap,
  Trophy,
  Globe,
  Bot,
  Monitor,
  Flame,
  Timer,
  Target,
  Rocket,
  Sparkles,
  Users
} from "../components/Icons";
const TIME_CONTROLS = [
  { Icon: Zap, label: "Bullet", time: "1+0", desc: "Kh\xF4ng c\xF3 th\u1EDDi gian \u0111\u1EC3 suy ngh\u0129", color: "#ef4444", bg: "rgba(239,68,68,0.08)" },
  { Icon: Flame, label: "Blitz", time: "3+2", desc: "T\u1ED1c \u0111\u1ED9 v\xE0 b\u1EA3n n\u0103ng", color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
  { Icon: Timer, label: "Rapid", time: "10+5", desc: "Chi\u1EBFn thu\u1EADt c\xF3 ch\u1EE7 \u0111\xEDch", color: "#22c55e", bg: "rgba(34,197,94,0.08)" },
  { Icon: Target, label: "Classical", time: "30+0", desc: "C\u1EDD vua \u0111\u1EC9nh cao thu\u1EA7n t\xFAy", color: "#4f8ef7", bg: "rgba(79,142,247,0.08)" }
];
export const HomePage = ({ onNavigate, isLoggedIn }) => {
  const [selectedTC, setSelectedTC] = useState(1);
  const tc = TIME_CONTROLS[selectedTC];
  const [activeBg, setActiveBg] = useState(0);
  const heroRef = useRef(null);
  const quickMatchRef = useRef(null);
  const ecoGridRef = useRef(null);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "section-hero") setActiveBg(0);
          if (entry.target.id === "section-quickmatch") setActiveBg(1);
          if (entry.target.id === "section-eco") setActiveBg(2);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (heroRef.current) observer.observe(heroRef.current);
    if (quickMatchRef.current) observer.observe(quickMatchRef.current);
    if (ecoGridRef.current) observer.observe(ecoGridRef.current);
    return () => observer.disconnect();
  }, []);
  return <div className="page-enter">

      {
    /* ═══════════════════ GLOBAL BACKGROUND ═══════════════════ */
  }
      <div className="global-bg-container">
        <img src="/chess-bg.jpg" className={`global-bg-image ${activeBg === 0 ? "active" : ""}`} alt="" />
        <img src="/chess-tournament.jpg" className={`global-bg-image ${activeBg === 1 ? "active" : ""}`} alt="" />
        <img src="/chess-analysis.jpg" className={`global-bg-image ${activeBg === 2 ? "active" : ""}`} alt="" />
        <div className="global-bg-overlay" />
      </div>

      {
    /* ═══════════════════ HERO ═══════════════════ */
  }
      <section className="hero transparent-bg" id="section-hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <div>
              <div className="hero-badge">
                <span className="dot" />
                Hơn 2 triệu người chơi trực tuyến
              </div>
              <h1 className="hero-title">
                Thống Trị Bàn Cờ<br />
                <span className="highlight">Cùng ChessMaster</span>
              </h1>
              <p className="hero-description">
                Nền tảng chơi cờ vua trực tuyến hàng đầu Việt Nam. Thách thức kỳ thủ toàn
                cầu, luyện tập với AI thông minh và leo lên đỉnh bảng xếp hạng.
              </p>
              <div className="hero-actions">
                {isLoggedIn ? <button className="btn btn-primary btn-lg" onClick={() => onNavigate("game")} id="hero-play-now">
                    <ChessKnightSVG size={20} color="#fff" /> Chơi Ngay
                  </button> : <>
                    <button className="btn btn-primary btn-lg" onClick={() => onNavigate("register")} id="hero-register">
                      <Rocket size={18} /> Bắt Đầu Miễn Phí
                    </button>
                    <button className="btn btn-secondary btn-lg" onClick={() => onNavigate("game")} id="hero-guest-play">
                      <ChessPawnSVG size={18} color="var(--text-primary)" /> Chơi Thử
                    </button>
                  </>}
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-value">2M+</span>
                  <span className="hero-stat-label">Người Chơi</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-value">50K+</span>
                  <span className="hero-stat-label">Ván/Ngày</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-value">98%</span>
                  <span className="hero-stat-label">Uptime</span>
                </div>
              </div>
            </div>

            {
    /* Board */
  }
            <div className="chess-board-wrapper" style={{ position: "relative" }}>
              <div className="chess-board-glow" />
              <div className="chess-board-container">
                <ChessBoard size={400} interactive={false} className="chess-board" />
              </div>
              <div style={{
    position: "absolute",
    bottom: -20,
    left: -30,
    background: "var(--bg-card)",
    border: "1px solid var(--border-gold)",
    borderRadius: "var(--radius-md)",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    boxShadow: "var(--shadow-md)",
    animation: "float 3s ease-in-out infinite",
    zIndex: 10
  }}>
                <Trophy size={24} color="var(--accent-gold)" />
                <div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600 }}>ELO Rating</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "var(--accent-gold)" }}>2847</div>
                </div>
              </div>
              <div style={{
    position: "absolute",
    top: -20,
    right: -20,
    background: "var(--bg-card)",
    border: "1px solid var(--border-medium)",
    borderRadius: "var(--radius-md)",
    padding: "10px 14px",
    display: "flex",
    alignItems: "center",
    gap: 8,
    boxShadow: "var(--shadow-md)",
    animation: "float 3s ease-in-out 1.5s infinite",
    zIndex: 10
  }}>
                <span style={{ width: 8, height: 8, background: "var(--accent-green)", borderRadius: "50%", animation: "pulse 2s infinite", display: "inline-block" }} />
                <Users size={14} color="var(--text-muted)" />
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)" }}>2,041 đang online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* ═══════════════════ QUICK MATCH ═══════════════════ */
  }
      <section className="section" id="section-quickmatch" ref={quickMatchRef} style={{ paddingTop: 80, paddingBottom: 80, position: "relative", zIndex: 1 }}>
        <div className="container">
          <div className="qm-wrapper">
            {
    /* Left: option list */
  }
            <div className="qm-options">
              <div style={{ marginBottom: 24 }}>
                <span className="section-label">Chế Độ Chơi</span>
                <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 900, marginTop: 6, fontFamily: "'Playfair Display',serif" }}>
                  Chọn Tốc Độ Của Bạn
                </h2>
              </div>
              {TIME_CONTROLS.map((t, i) => <button
    key={t.label}
    id={`tc-option-${t.label.toLowerCase()}`}
    className={`qm-option glass-card ${selectedTC === i ? "active" : ""}`}
    style={{ "--tc-color": t.color }}
    onClick={() => setSelectedTC(i)}
  >
                  <div className="qm-option-left">
                    <t.Icon size={18} color={selectedTC === i ? t.color : "var(--text-muted)"} />
                    <div>
                      <div className="qm-option-label">{t.label}</div>
                      <div className="qm-option-desc">{t.desc}</div>
                    </div>
                  </div>
                  <span className="qm-option-time" style={{ color: selectedTC === i ? t.color : "var(--text-muted)" }}>
                    {t.time}
                  </span>
                </button>)}
            </div>

            {
    /* Right: big preview */
  }
            <div className="qm-preview glass-card" style={{ background: tc.bg, borderColor: tc.color + "33" }}>
              <div className="qm-preview-inner">
                <tc.Icon size={52} color={tc.color} />
                <div className="qm-preview-time" style={{ color: tc.color }}>{tc.time}</div>
                <div className="qm-preview-mode">{tc.label}</div>
                <p className="qm-preview-desc">{tc.desc}</p>
                <button
    className="btn btn-primary btn-lg"
    onClick={() => onNavigate("game")}
    id="qm-play-btn"
    style={{ marginTop: 8, background: tc.color, color: "#fff", borderColor: tc.color }}
  >
                  <ChessKnightSVG size={18} color="#fff" />
                  Tìm Trận Ngay
                </button>
                {
    /* Mini stats */
  }
                <div className="qm-preview-stats">
                  <div><span style={{ color: tc.color, fontWeight: 700 }}>1,247</span><br /><span>đang chờ</span></div>
                  <div><span style={{ color: tc.color, fontWeight: 700 }}>~8s</span><br /><span>thời gian ghép</span></div>
                  <div><span style={{ color: tc.color, fontWeight: 700 }}>ELO ±50</span><br /><span>chênh lệch tối đa</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* ═══════════════════ FEATURES - ECO GRID ═══════════════════ */
  }
      <section className="section" id="section-eco" ref={ecoGridRef} style={{ paddingTop: 80, paddingBottom: 120, position: "relative", zIndex: 1 }}>
        <div className="container">
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <h2 className="section-title">Hệ Sinh Thái Toàn Diện</h2>
            <p className="section-subtitle" style={{ maxWidth: 600, margin: "0 auto" }}>Mọi công cụ bạn cần để trở thành một kiện tướng thực thụ.</p>
          </div>
          <div className="eco-grid">
            <div className="eco-card glass-card">
              <div className="eco-icon-wrapper" style={{ background: "rgba(239, 68, 68, 0.1)" }}>
                <Bot size={28} color="#ef4444" />
              </div>
              <h3>Luyện với AI</h3>
              <p>Thử thách bản thân với các cấp độ máy từ người mới học chơi đến trình độ Đại kiện tướng.</p>
            </div>
            <div className="eco-card glass-card">
              <div className="eco-icon-wrapper" style={{ background: "rgba(34, 197, 94, 0.1)" }}>
                <Globe size={28} color="#22c55e" />
              </div>
              <h3>Kết nối bạn bè</h3>
              <p>Thêm bạn, trò chuyện trực tiếp và mời họ tham gia các ván đấu riêng tư một cách dễ dàng.</p>
            </div>
            <div className="eco-card glass-card">
              <div className="eco-icon-wrapper" style={{ background: "rgba(245, 158, 11, 0.1)" }}>
                <Monitor size={28} color="#f59e0b" />
              </div>
              <h3>Chơi mọi lúc mọi nơi</h3>
              <p>Trải nghiệm đồng nhất trên máy tính, máy tính bảng và điện thoại di động.</p>
              <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
                 <Monitor size={20} color="var(--text-muted)" />
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
              </div>
            </div>
          </div>
        </div>

        {
    /* ═══════════════════ CTA ═══════════════════ */
  }
        {!isLoggedIn && <div className="container" style={{ marginTop: 120 }}>
            <div className="glass-card" style={{
    background: "linear-gradient(135deg, rgba(34,197,94,0.12), rgba(79,142,247,0.08))",
    border: "1px solid var(--border-primary)",
    borderRadius: "var(--radius-xl)",
    padding: "72px 60px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden"
  }}>
              <div style={{
    position: "absolute",
    top: "-50%",
    left: "50%",
    transform: "translateX(-50%)",
    width: 400,
    height: 400,
    background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)",
    pointerEvents: "none"
  }} />
              <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, marginBottom: 16, position: "relative" }}>
                Sẵn Sàng Chinh Phục?
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 16, marginBottom: 36, position: "relative" }}>
                Đăng ký miễn phí và bắt đầu hành trình kỳ thủ của bạn ngay hôm nay
              </p>
              <button className="btn btn-primary btn-lg" onClick={() => onNavigate("register")} id="cta-register" style={{ position: "relative" }}>
                <Sparkles size={18} color="#fff" /> Tạo Tài Khoản Miễn Phí
              </button>
            </div>
          </div>}
      </section>

      {
    /* Footer */
  }
      <footer style={{ borderTop: "1px solid var(--border-subtle)", padding: "40px 0", color: "var(--text-muted)", fontSize: 14, textAlign: "center", position: "relative", zIndex: 1, background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <ChessKnightSVG size={22} color="var(--accent-primary)" />
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: "var(--text-secondary)" }}>
              ChessMaster Online
            </span>
          </div>
          <p>© 2026 ChessMaster Online. Được xây dựng với tình yêu dành cho cộng đồng cờ vua Việt Nam.</p>
        </div>
      </footer>
    </div>;
};
