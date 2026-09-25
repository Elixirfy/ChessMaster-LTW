import { useState } from "react";
import { MOCK_LEADERBOARD, AVATAR_COLORS } from "../data/types";
import {
  Globe,
  Zap,
  Flame,
  Timer,
  Target,
  TrendingUp,
  TrendingDown,
  Minus,
  Search
} from "../components/Icons";
const TABS = [
  { id: "all", label: "T\u1EA5t C\u1EA3", Icon: Globe },
  { id: "bullet", label: "Bullet", Icon: Zap },
  { id: "blitz", label: "Blitz", Icon: Flame },
  { id: "rapid", label: "Rapid", Icon: Timer },
  { id: "classical", label: "Classical", Icon: Target }
];
const GoldMedal = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="14" r="8" fill="#f5c842" stroke="#d4a017" strokeWidth="1.5" />
    <text x="12" y="19" textAnchor="middle" fill="#1a1100" fontSize="11" fontWeight="900" fontFamily="serif">1</text>
  </svg>;
const SilverMedal = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="14" r="8" fill="#c0c0c0" stroke="#888" strokeWidth="1.5" />
    <text x="12" y="19" textAnchor="middle" fill="#1a1a1a" fontSize="11" fontWeight="900" fontFamily="serif">2</text>
  </svg>;
const BronzeMedal = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="14" r="8" fill="#cd7f32" stroke="#8b4513" strokeWidth="1.5" />
    <text x="12" y="19" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="900" fontFamily="serif">3</text>
  </svg>;
const getRankBadgeClass = (rank) => {
  if (rank === 1) return "rank-1";
  if (rank === 2) return "rank-2";
  if (rank === 3) return "rank-3";
  return "rank-n";
};
const LeaderboardRow = ({ entry, index }) => {
  const { rank, user, gamesPlayed, winRate, trend, trendValue, country } = entry;
  const rowClass = rank === 1 ? "top-1" : rank === 2 ? "top-2" : rank === 3 ? "top-3" : "";
  const RankBadge = () => {
    if (rank === 1) return <GoldMedal />;
    if (rank === 2) return <SilverMedal />;
    if (rank === 3) return <BronzeMedal />;
    return <div className={`rank-badge ${getRankBadgeClass(rank)}`} style={{ fontSize: 12 }}>
        {rank}
      </div>;
  };
  return <div className={`lb-row ${rowClass}`} role="row">
      <div className="lb-rank"><RankBadge /></div>

      <div className="lb-player">
        <div className="lb-avatar" style={{ background: AVATAR_COLORS[index % AVATAR_COLORS.length] }}>
          {user.username[0].toUpperCase()}
        </div>
        <div className="lb-player-info">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="lb-player-name">{country} {user.username}</span>
            {user.title && <span className="badge badge-gold">{user.title}</span>}
          </div>
          <div className="lb-player-title">{gamesPlayed.toLocaleString()} ván</div>
        </div>
      </div>

      <div className="lb-rating">{user.rating.toLocaleString()}</div>
      <div className="lb-stat">{user.wins}W / {user.losses}L / {user.draws}D</div>

      <div className="lb-winrate">
        <div className="winrate-bar">
          <div className="winrate-fill" style={{ width: `${winRate}%` }} />
        </div>
        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--accent-green)", minWidth: 40 }}>
          {winRate.toFixed(1)}%
        </span>
      </div>

      {
    /* Trend with lucide icons */
  }
      <div className="lb-trend">
        {trend === "up" && <span className="trend-up" style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <TrendingUp size={14} /> {trendValue}
          </span>}
        {trend === "down" && <span className="trend-down" style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <TrendingDown size={14} /> {trendValue}
          </span>}
        {trend === "neutral" && <span className="trend-neutral" style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Minus size={14} />
          </span>}
      </div>
    </div>;
};
export const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [timeFilter, setTimeFilter] = useState("Tu\u1EA7n n\xE0y");
  const filtered = MOCK_LEADERBOARD.filter(
    (e) => e.user.username.toLowerCase().includes(search.toLowerCase())
  );
  return <div className="leaderboard-page page-enter">
      <div className="container">
        {
    /* Header */
  }
        <div className="leaderboard-header">
          <span className="section-label">Toàn Cầu</span>
          <h1 className="leaderboard-title">
            Bảng Xếp <span style={{ color: "var(--accent-gold)" }}>Hạng</span>
          </h1>
          <p className="leaderboard-subtitle">
            Những kỳ thủ xuất sắc nhất đang thống trị bàn cờ thế giới
          </p>
        </div>

        {
    /* Top 3 Podium */
  }
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1fr", gap: 16, marginBottom: 40, alignItems: "end" }}>
          {[MOCK_LEADERBOARD[1], MOCK_LEADERBOARD[0], MOCK_LEADERBOARD[2]].map((entry, i) => {
    const heights = ["160px", "200px", "140px"];
    const colors = [
      "linear-gradient(135deg, #c0c0c0, #888)",
      "linear-gradient(135deg, #f5c842, #d4a017)",
      "linear-gradient(135deg, #cd7f32, #8b4513)"
    ];
    const podiumNum = [2, 1, 3];
    return <div
      key={entry.rank}
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${i === 1 ? "rgba(245,200,66,0.3)" : "var(--border-subtle)"}`,
        borderRadius: "var(--radius-lg)",
        padding: "24px 16px",
        textAlign: "center",
        minHeight: heights[i],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        cursor: "pointer",
        boxShadow: i === 1 ? "0 0 40px rgba(245,200,66,0.1)" : void 0
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
    >
                <div style={{
      width: 52,
      height: 52,
      borderRadius: "50%",
      background: AVATAR_COLORS[entry.rank - 1],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 12,
      boxShadow: "0 4px 16px rgba(0,0,0,0.3)"
    }}>
                  {entry.user.username[0]}
                </div>
                {
      /* SVG medal badge */
    }
                <div style={{
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: colors[i],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 800,
      marginBottom: 10,
      color: i === 0 || i === 2 ? "white" : "#1a1100"
    }}>
                  {podiumNum[i]}
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>
                  {entry.country} {entry.user.username.substring(0, 12)}
                </div>
                {entry.user.title && <span className="badge badge-gold" style={{ marginBottom: 8 }}>{entry.user.title}</span>}
                <div style={{
      fontSize: 22,
      fontWeight: 900,
      color: i === 1 ? "var(--accent-gold)" : "var(--text-primary)",
      fontFamily: "'Playfair Display', serif"
    }}>
                  {entry.user.rating}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>ELO Rating</div>
              </div>;
  })}
        </div>

        {
    /* Tabs */
  }
        <div className="leaderboard-tabs">
          {TABS.map(({ id, label, Icon }) => <button
    key={id}
    className={`tab-btn ${activeTab === id ? "active" : ""}`}
    onClick={() => setActiveTab(id)}
    id={`tab-${id}`}
    style={{ display: "flex", alignItems: "center", gap: 6 }}
  >
              <Icon size={14} /> {label}
            </button>)}
        </div>

        {
    /* Filters */
  }
        <div style={{ display: "flex", gap: 12, marginBottom: 20, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div className="form-input-wrapper">
              <span className="form-input-icon" style={{ display: "flex", alignItems: "center" }}>
                <Search size={15} />
              </span>
              <input
    className="form-input"
    placeholder="Tìm kiếm kỳ thủ..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    id="leaderboard-search"
    style={{ paddingLeft: 42 }}
  />
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {["H\xF4m nay", "Tu\u1EA7n n\xE0y", "Th\xE1ng n\xE0y", "M\u1ECDi th\u1EDDi \u0111\u1EA1i"].map((t) => <button key={t} className={`btn btn-sm ${timeFilter === t ? "btn-primary" : "btn-secondary"}`} onClick={() => setTimeFilter(t)}>
                {t}
              </button>)}
          </div>
        </div>

        {
    /* Table */
  }
        <div className="leaderboard-table">
          <div className="lb-table-header" role="row">
            <div>#</div>
            <div>Kỳ Thủ</div>
            <div>ELO</div>
            <div>Thống Kê</div>
            <div>Tỉ Lệ Thắng</div>
            <div>Xu Hướng</div>
          </div>
          {filtered.length === 0 ? <div style={{ padding: "48px", textAlign: "center", color: "var(--text-muted)" }}>
              Không tìm thấy kỳ thủ nào
            </div> : filtered.map((entry, index) => <LeaderboardRow key={entry.user.id} entry={entry} index={index} />)}
        </div>

        <div style={{ textAlign: "center", marginTop: 24 }}>
          <button className="btn btn-secondary" id="load-more-leaderboard">
            Xem Thêm 10 Người Chơi
          </button>
        </div>
      </div>
    </div>;
};
