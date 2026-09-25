import { useState } from "react";
import { AVATAR_COLORS } from "../data/types";
import {
  ChessKnightSVG,
  BarChart2,
  ClipboardList,
  Settings,
  CheckCircle2,
  XCircle,
  Minus,
  Pencil,
  Check,
  X,
  LogOut,
  Timer,
  Trophy,
  Zap,
  GraduationCap,
  Crown,
  Star,
  Flame,
  Shield,
  Activity
} from "../components/Icons";
const RECENT_GAMES = [
  { opponent: "GrandMaster_AI", result: "win", moves: 42, opening: "Sicilian Defense", time: "3+2", date: "24/09/2026", ratingChange: "+14" },
  { opponent: "Bobby_Fischer2", result: "loss", moves: 38, opening: "Ruy Lopez", time: "10+5", date: "24/09/2026", ratingChange: "-8" },
  { opponent: "ChessWizard99", result: "draw", moves: 60, opening: "Caro-Kann", time: "1+0", date: "23/09/2026", ratingChange: "+2" },
  { opponent: "QueenGambit_Pro", result: "win", moves: 55, opening: "Queen's Gambit", time: "15+10", date: "23/09/2026", ratingChange: "+18" },
  { opponent: "KnightRider_VN", result: "win", moves: 29, opening: "Italian Game", time: "5+0", date: "22/09/2026", ratingChange: "+12" }
];
const ACHIEVEMENTS = [
  { Icon: CheckCircle2, color: "#22c55e", label: "Chi\u1EBFn Th\u1EAFng \u0110\u1EA7u", earned: true },
  { Icon: Flame, color: "#f59e0b", label: "10 V\xE1n Li\xEAn Ti\u1EBFp", earned: true },
  { Icon: Zap, color: "#ef4444", label: "Bullet Master", earned: true },
  { Icon: GraduationCap, color: "#4f8ef7", label: "Sinh Vi\xEAn", earned: true },
  { Icon: Trophy, color: "#f5c842", label: "Top 100", earned: false },
  { Icon: ChessKnightSVG, color: "#a855f7", label: "500 V\xE1n", earned: false },
  { Icon: Crown, color: "#f5c842", label: "Grandmaster", earned: false },
  { Icon: Star, color: "#06b6d4", label: "Huy\u1EC1n Tho\u1EA1i", earned: false }
];
const PROFILE_TABS = [
  { id: "overview", label: "T\u1ED5ng Quan", Icon: BarChart2 },
  { id: "history", label: "L\u1ECBch S\u1EED V\xE1n \u0110\u1EA5u", Icon: ClipboardList },
  { id: "settings", label: "C\xE0i \u0110\u1EB7t", Icon: Settings }
];
export const ProfilePage = ({ username, onNavigate, onLogout }) => {
  const [activeSection, setActiveSection] = useState("overview");
  const [editMode, setEditMode] = useState(false);
  const [displayName, setDisplayName] = useState(username);
  const wins = 127, losses = 48, draws = 31;
  const total = wins + losses + draws;
  const winRate = (wins / total * 100).toFixed(1);
  return <div className="page-enter" style={{ minHeight: "100vh", paddingTop: 90, paddingBottom: 60 }}>
      <div className="container">
        {
    /* ── Profile Header ── */
  }
        <div style={{
    background: "linear-gradient(135deg, var(--bg-card), rgba(245,200,66,0.05))",
    border: "1px solid var(--border-subtle)",
    borderRadius: "var(--radius-xl)",
    padding: "40px",
    marginBottom: 32,
    position: "relative",
    overflow: "hidden"
  }}>
          <div style={{
    position: "absolute",
    top: 0,
    right: 0,
    width: 300,
    height: 300,
    background: "radial-gradient(circle, rgba(245,200,66,0.08) 0%, transparent 70%)",
    pointerEvents: "none"
  }} />

          <div style={{ display: "flex", gap: 32, alignItems: "flex-start", position: "relative" }}>
            {
    /* Avatar */
  }
            <div style={{ position: "relative" }}>
              <div style={{
    width: 100,
    height: 100,
    borderRadius: "50%",
    background: AVATAR_COLORS[0],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    fontWeight: 700,
    color: "#1a1100",
    boxShadow: "0 8px 32px rgba(245,200,66,0.3)",
    border: "3px solid rgba(245,200,66,0.4)"
  }}>
                {username[0].toUpperCase()}
              </div>
              {
    /* Online dot */
  }
              <div style={{
    position: "absolute",
    bottom: 4,
    right: 4,
    width: 18,
    height: 18,
    background: "var(--accent-green)",
    borderRadius: "50%",
    border: "2px solid var(--bg-card)"
  }} />
            </div>

            {
    /* Info */
  }
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                {editMode ? <input
    className="form-input"
    value={displayName}
    onChange={(e) => setDisplayName(e.target.value)}
    style={{ fontSize: 24, fontWeight: 800, maxWidth: 300, padding: "6px 12px" }}
    id="edit-display-name"
  /> : <h1 style={{ fontSize: 28, fontWeight: 900, fontFamily: "'Inter', sans-serif" }}>{displayName}</h1>}
                <span className="badge badge-gold">GM</span>
                <span className="badge badge-blue">TOP 100</span>
              </div>

              <div style={{ display: "flex", gap: 20, marginBottom: 16, color: "var(--text-secondary)", fontSize: 14, flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Shield size={13} /> Việt Nam
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Activity size={13} /> Tham gia tháng 9, 2026
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <ChessKnightSVG size={13} /> 206 ván đấu
                </span>
              </div>

              <div style={{ display: "flex", gap: 24 }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "var(--accent-gold)", fontFamily: "'Playfair Display', serif" }}>1547</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>ELO Rating</div>
                </div>
                <div style={{ width: 1, background: "var(--border-subtle)" }} />
                <div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "var(--accent-green)", fontFamily: "'Playfair Display', serif" }}>{winRate}%</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Tỉ Lệ Thắng</div>
                </div>
                <div style={{ width: 1, background: "var(--border-subtle)" }} />
                <div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "var(--accent-blue)", fontFamily: "'Playfair Display', serif" }}>#842</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Thứ Hạng</div>
                </div>
              </div>
            </div>

            {
    /* Actions */
  }
            <div style={{ display: "flex", gap: 8 }}>
              {editMode ? <>
                  <button className="btn btn-primary btn-sm" onClick={() => setEditMode(false)} id="save-profile">
                    <Check size={14} /> Lưu
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setEditMode(false)} id="cancel-edit">
                    <X size={14} /> Hủy
                  </button>
                </> : <>
                  <button className="btn btn-secondary btn-sm" onClick={() => setEditMode(true)} id="edit-profile">
                    <Pencil size={14} /> Chỉnh Sửa
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={onLogout} id="profile-logout">
                    <LogOut size={14} /> Đăng Xuất
                  </button>
                </>}
            </div>
          </div>
        </div>

        {
    /* ── Tabs ── */
  }
        <div style={{ display: "flex", gap: 4, marginBottom: 28 }}>
          {PROFILE_TABS.map(({ id, label, Icon }) => <button
    key={id}
    className={`btn ${activeSection === id ? "btn-primary" : "btn-secondary"}`}
    onClick={() => setActiveSection(id)}
    id={`profile-tab-${id}`}
    style={{ display: "flex", alignItems: "center", gap: 7 }}
  >
              <Icon size={15} /> {label}
            </button>)}
        </div>

        {
    /* ── Overview ── */
  }
        {activeSection === "overview" && <div>
            {
    /* Stats */
  }
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
              {[
    { label: "Th\u1EAFng", value: wins, color: "var(--accent-green)", Icon: CheckCircle2, pct: (wins / total * 100).toFixed(0) },
    { label: "Thua", value: losses, color: "var(--accent-red)", Icon: XCircle, pct: (losses / total * 100).toFixed(0) },
    { label: "H\xF2a", value: draws, color: "var(--accent-blue)", Icon: Minus, pct: (draws / total * 100).toFixed(0) },
    { label: "T\u1ED5ng V\xE1n", value: total, color: "var(--accent-gold)", Icon: ChessKnightSVG, pct: "100" }
  ].map((s) => <div className="card" key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
                    <s.Icon size={28} color={s.color} />
                  </div>
                  <div style={{ fontSize: 32, fontWeight: 900, color: s.color, fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.5px" }}>{s.label}</div>
                  <div style={{ fontSize: 13, color: s.color, fontWeight: 700, marginTop: 4 }}>{s.pct}%</div>
                </div>)}
            </div>

            {
    /* Rating history */
  }
            <div className="card" style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20, fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: 8 }}>
                <Activity size={16} color="var(--accent-gold)" /> Lịch Sử Rating
              </h3>
              <div style={{
    height: 160,
    background: "var(--bg-secondary)",
    borderRadius: "var(--radius-md)",
    display: "flex",
    alignItems: "flex-end",
    gap: 4,
    padding: "20px 16px 16px",
    position: "relative",
    overflow: "hidden"
  }}>
                {[0, 1, 2, 3].map((i) => <div key={i} style={{ position: "absolute", left: 16, right: 16, top: `${i * 25 + 20}px`, borderTop: "1px solid var(--border-subtle)" }} />)}
                {[1420, 1450, 1430, 1480, 1460, 1510, 1490, 1520, 1535, 1547].map((rating, i) => {
    const normalized = (rating - 1380) / 200 * 100;
    return <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                      <div style={{
      width: "100%",
      height: `${normalized}%`,
      background: "linear-gradient(180deg, var(--accent-gold), rgba(245,200,66,0.3))",
      borderRadius: "4px 4px 0 0",
      minHeight: 4,
      position: "relative"
    }}>
                        <div style={{
      position: "absolute",
      top: -20,
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: 9,
      color: "var(--accent-gold)",
      fontWeight: 700,
      whiteSpace: "nowrap"
    }}>
                          {rating}
                        </div>
                      </div>
                    </div>;
  })}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 11, color: "var(--text-muted)" }}>
                <span>2 tuần trước</span>
                <span>Hôm nay</span>
              </div>
            </div>

            {
    /* Achievements */
  }
            <div className="card">
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20, fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: 8 }}>
                <Trophy size={16} color="var(--accent-gold)" /> Thành Tích
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                {ACHIEVEMENTS.map((a, i) => <div key={i} style={{
    padding: 16,
    background: a.earned ? "rgba(245,200,66,0.08)" : "var(--bg-secondary)",
    border: `1px solid ${a.earned ? "rgba(245,200,66,0.25)" : "var(--border-subtle)"}`,
    borderRadius: "var(--radius-md)",
    textAlign: "center",
    opacity: a.earned ? 1 : 0.4,
    transition: "all 0.2s ease"
  }}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
                      <a.Icon size={28} color={a.earned ? a.color : "var(--text-muted)"} />
                    </div>
                    <div style={{ fontSize: 11, color: a.earned ? "var(--accent-gold)" : "var(--text-muted)", fontWeight: 600 }}>{a.label}</div>
                  </div>)}
              </div>
            </div>
          </div>}

        {
    /* ── History ── */
  }
        {activeSection === "history" && <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--border-subtle)", fontWeight: 700, fontSize: 15 }}>
              Lịch Sử 5 Ván Gần Nhất
            </div>
            {RECENT_GAMES.map((game, i) => <div
    key={i}
    style={{
      display: "grid",
      gridTemplateColumns: "100px 1fr 100px 100px 80px 80px",
      padding: "16px 24px",
      borderBottom: "1px solid var(--border-subtle)",
      alignItems: "center",
      transition: "background 0.15s ease",
      cursor: "pointer"
    }}
    onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-glass)"}
    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
  >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  {game.result === "win" && <CheckCircle2 size={16} color="var(--accent-green)" />}
                  {game.result === "loss" && <XCircle size={16} color="var(--accent-red)" />}
                  {game.result === "draw" && <Minus size={16} color="var(--accent-blue)" />}
                  <span style={{
    fontSize: 13,
    fontWeight: 700,
    color: game.result === "win" ? "var(--accent-green)" : game.result === "loss" ? "var(--accent-red)" : "var(--accent-blue)"
  }}>
                    {game.result === "win" ? "Th\u1EAFng" : game.result === "loss" ? "Thua" : "H\xF2a"}
                  </span>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{game.opponent}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{game.opening}</div>
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 4 }}>
                  <Timer size={12} /> {game.time}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 4 }}>
                  <ChessKnightSVG size={12} color="var(--text-secondary)" /> {game.moves} nước
                </div>
                <div style={{
    fontWeight: 700,
    color: game.ratingChange.startsWith("+") ? "var(--accent-green)" : "var(--accent-red)"
  }}>
                  {game.ratingChange}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{game.date}</div>
              </div>)}
          </div>}

        {
    /* ── Settings ── */
  }
        {activeSection === "settings" && <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
    {
      title: "Giao Di\u1EC7n B\xE0n C\u1EDD",
      Icon: ChessKnightSVG,
      items: [
        { label: "M\xE0u b\xE0n c\u1EDD", type: "select", options: ["G\u1ED7 C\u1ED5 \u0110i\u1EC3n", "Xanh D\u01B0\u01A1ng", "Xanh L\xE1", "X\xE1m"] },
        { label: "Ki\u1EC3u qu\xE2n c\u1EDD", type: "select", options: ["Classic", "Modern", "Neo", "Letters"] },
        { label: "Hi\u1EC3n th\u1ECB t\u1ECDa \u0111\u1ED9", type: "toggle", value: true }
      ]
    },
    {
      title: "Th\xF4ng B\xE1o",
      Icon: Star,
      items: [
        { label: "Th\xE1ch \u0111\u1EA5u m\u1EDBi", type: "toggle", value: true },
        { label: "K\u1EBFt qu\u1EA3 v\xE1n \u0111\u1EA5u", type: "toggle", value: true },
        { label: "Tin t\u1EE9c & c\u1EADp nh\u1EADt", type: "toggle", value: false }
      ]
    },
    {
      title: "Ch\u01A1i C\u1EDD",
      Icon: Trophy,
      items: [
        { label: "T\u1EF1 \u0111\u1ED9ng th\u0103ng c\u1EA5p t\u1ED1t", type: "toggle", value: true },
        { label: "X\xE1c nh\u1EADn n\u01B0\u1EDBc \u0111i", type: "toggle", value: false },
        { label: "\xC2m thanh", type: "toggle", value: true }
      ]
    },
    {
      title: "T\xE0i Kho\u1EA3n",
      Icon: Settings,
      items: [
        { label: "\u0110\u1ED5i m\u1EADt kh\u1EA9u", type: "button" },
        { label: "X\xE1c th\u1EF1c 2 b\u01B0\u1EDBc", type: "button" },
        { label: "X\xF3a t\xE0i kho\u1EA3n", type: "danger-button" }
      ]
    }
  ].map((section) => <div className="card" key={section.title}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 20, fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: 8 }}>
                  <section.Icon size={15} color="var(--accent-gold)" /> {section.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {section.items.map((item, i) => <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{item.label}</span>
                      {item.type === "toggle" && <div style={{
    width: 44,
    height: 24,
    background: item.value ? "var(--accent-gold)" : "var(--bg-glass)",
    borderRadius: 12,
    position: "relative",
    cursor: "pointer",
    transition: "background 0.2s ease",
    border: "1px solid var(--border-medium)"
  }}>
                          <div style={{
    position: "absolute",
    top: 2,
    left: item.value ? 22 : 2,
    width: 18,
    height: 18,
    background: "white",
    borderRadius: "50%",
    transition: "left 0.2s ease",
    boxShadow: "0 1px 4px rgba(0,0,0,0.3)"
  }} />
                        </div>}
                      {item.type === "select" && <select style={{
    background: "var(--bg-secondary)",
    border: "1px solid var(--border-medium)",
    borderRadius: 8,
    color: "var(--text-primary)",
    padding: "6px 10px",
    fontSize: 13,
    cursor: "pointer"
  }}>
                          {item.options?.map((o) => <option key={o}>{o}</option>)}
                        </select>}
                      {item.type === "button" && <button className="btn btn-secondary btn-sm">{item.label}</button>}
                      {item.type === "danger-button" && <button className="btn btn-danger btn-sm">{item.label}</button>}
                    </div>)}
                </div>
              </div>)}
          </div>}
      </div>
    </div>;
};
