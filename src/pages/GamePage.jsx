import { useState, useEffect, useRef } from "react";
import { ChessBoard } from "../components/ChessBoard";
import { DEMO_MOVES } from "../data/types";
import {
  ChessKnightSVG,
  Play,
  Pause,
  Flag,
  Send,
  Swords,
  Clock,
  ClipboardList,
  MessageSquare,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  User
} from "../components/Icons";
const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};
const HandshakeIcon = ({ size = 16, color = "currentColor" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3.02 0L12 11.34" />
    <path d="m13 12.34 2.12 2.12" />
    <path d="m16 9.34 2.12 2.12" />
  </svg>;
const DrawIcon = ({ size = 16, color = "currentColor" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>;
export const GamePage = ({ isLoggedIn, username }) => {
  const [whiteTime, setWhiteTime] = useState(600);
  const [blackTime, setBlackTime] = useState(600);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTurn, setActiveTurn] = useState("white");
  const [currentMove, setCurrentMove] = useState(DEMO_MOVES.length);
  const [showOfferDraw, setShowOfferDraw] = useState(false);
  const timerRef = useRef(null);
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        if (activeTurn === "white") setWhiteTime((t) => Math.max(0, t - 1));
        else setBlackTime((t) => Math.max(0, t - 1));
      }, 1e3);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, activeTurn]);
  const handleResign = () => {
    setIsRunning(false);
    alert("B\u1EA1n \u0111\xE3 \u0111\u1EA7u h\xE0ng. Ng\u01B0\u1EDDi ch\u01A1i \u0111en th\u1EAFng!");
  };
  return <div className="game-page page-enter">
      <div className="container">
        <div className="game-layout">
          {
    /* ── Left Panel ── */
  }
          <div>
            {
    /* Black player */
  }
            <div className="player-card">
              <div className="player-avatar" style={{ background: "linear-gradient(135deg, #1a1a1a, #444)" }}>
                <ChessKnightSVG size={22} color="#fff" />
              </div>
              <div className="player-info">
                <div className="player-name">GrandMaster_AI</div>
                <div className="player-rating">2847 ELO</div>
              </div>
              <div className={`player-timer ${activeTurn === "black" && isRunning ? "active" : ""} ${blackTime < 30 ? "warning" : ""}`}>
                {formatTime(blackTime)}
              </div>
            </div>

            {
    /* Game info */
  }
            <div className="card" style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                  <Clock size={13} /> Rapid 10+5
                </span>
                <span className="badge badge-green">Đang Chờ</span>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 2 }}>
                <div>Ruy López Opening</div>
                <div>Ván #1248</div>
                <div>Máy chủ Việt Nam</div>
              </div>
            </div>

            {
    /* Move List */
  }
            <div className="move-list">
              <div className="move-list-header">
                <ClipboardList size={14} /> Danh Sách Nước Đi
              </div>
              <div className="move-list-body">
                {DEMO_MOVES.map((movePair, i) => <div className="move-pair" key={i}>
                    <span className="move-number">{i + 1}.</span>
                    <span className={`move-item ${currentMove === i * 2 ? "current" : ""}`} onClick={() => setCurrentMove(i * 2)} role="button" tabIndex={0}>
                      {movePair.white}
                    </span>
                    {movePair.black && <span className={`move-item ${currentMove === i * 2 + 1 ? "current" : ""}`} onClick={() => setCurrentMove(i * 2 + 1)} role="button" tabIndex={0}>
                        {movePair.black}
                      </span>}
                  </div>)}
              </div>

              {
    /* Navigation buttons */
  }
              <div style={{ display: "flex", gap: 4, padding: 8, borderTop: "1px solid var(--border-subtle)" }}>
                <button className="btn btn-ghost btn-sm" style={{ flex: 1, justifyContent: "center" }}><ChevronsLeft size={15} /></button>
                <button className="btn btn-ghost btn-sm" style={{ flex: 1, justifyContent: "center" }}><ChevronLeft size={15} /></button>
                <button className="btn btn-ghost btn-sm" style={{ flex: 1, justifyContent: "center" }}><ChevronRight size={15} /></button>
                <button className="btn btn-ghost btn-sm" style={{ flex: 1, justifyContent: "center" }}><ChevronsRight size={15} /></button>
              </div>
            </div>
          </div>

          {
    /* ── Center - Board ── */
  }
          <div className="game-center">
            <div className="game-board-container">
              <ChessBoard size={520} interactive={true} className="game-board" />
            </div>

            {
    /* Game Controls */
  }
            <div className="game-controls" style={{ flexWrap: "wrap", justifyContent: "center" }}>
              <button className={`btn ${isRunning ? "btn-secondary" : "btn-primary"}`} onClick={() => setIsRunning((r) => !r)} id="btn-start-pause">
                {isRunning ? <><Pause size={16} /> Tạm Dừng</> : <><Play size={16} /> Bắt Đầu</>}
              </button>
              <button className="btn btn-secondary" onClick={() => setShowOfferDraw(true)} id="btn-offer-draw">
                <DrawIcon size={16} color="var(--text-primary)" /> Đề Nghị Hòa
              </button>
              <button className="btn btn-danger" onClick={handleResign} id="btn-resign">
                <Flag size={16} /> Đầu Hàng
              </button>
            </div>

            {showOfferDraw && <div className="card" style={{ textAlign: "center", padding: "20px", maxWidth: 320 }}>
                <p style={{ marginBottom: 16, color: "var(--text-secondary)" }}>Bạn muốn đề nghị hòa cờ?</p>
                <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                  <button className="btn btn-primary btn-sm" onClick={() => {
    setShowOfferDraw(false);
    alert("\u0110\xE3 g\u1EEDi \u0111\u1EC1 ngh\u1ECB h\xF2a!");
  }}>Xác nhận</button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setShowOfferDraw(false)}>Hủy</button>
                </div>
              </div>}
          </div>

          {
    /* ── Right Panel ── */
  }
          <div>
            {
    /* White player */
  }
            <div className="player-card" style={{ marginBottom: 16 }}>
              <div className="player-avatar" style={{ background: "linear-gradient(135deg, #f5c842, #d4a017)" }}>
                <User size={18} color="#1a1100" />
              </div>
              <div className="player-info">
                <div className="player-name">{isLoggedIn ? username : "Kh\xE1ch"}</div>
                <div className="player-rating">{isLoggedIn ? "1500 ELO" : "Ch\u01B0a \u0111\u0103ng nh\u1EADp"}</div>
              </div>
              <div className={`player-timer ${activeTurn === "white" && isRunning ? "active" : ""} ${whiteTime < 30 ? "warning" : ""}`}>
                {formatTime(whiteTime)}
              </div>
            </div>

            {
    /* Chat */
  }
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{
    padding: "12px 16px",
    borderBottom: "1px solid var(--border-subtle)",
    fontWeight: 700,
    fontSize: 13,
    color: "var(--text-secondary)",
    display: "flex",
    alignItems: "center",
    gap: 8
  }}>
                <MessageSquare size={14} /> Chat
              </div>
              <div style={{ height: 200, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: 8 }}>
                {[
    { user: "GrandMaster_AI", msg: "Ch\xFAc v\xE1n \u0111\u1EA5u vui v\u1EBB!", time: "10:42", isMe: false },
    { user: "B\u1EA1n", msg: "B\u1EA1n c\u0169ng v\u1EADy! gl hf", time: "10:42", isMe: true },
    { user: "GrandMaster_AI", msg: "N\u01B0\u1EDBc \u0111i hay \u0111\xF3", time: "10:45", isMe: false }
  ].map((m, i) => <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: m.isMe ? "flex-end" : "flex-start" }}>
                    <span style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>{m.user} · {m.time}</span>
                    <div style={{
    background: m.isMe ? "linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark))" : "var(--bg-glass)",
    color: m.isMe ? "#1a1100" : "var(--text-primary)",
    padding: "8px 12px",
    borderRadius: m.isMe ? "12px 12px 4px 12px" : "12px 12px 12px 4px",
    fontSize: 13,
    maxWidth: "85%"
  }}>
                      {m.msg}
                    </div>
                  </div>)}
              </div>
              <div style={{ padding: "10px 12px", borderTop: "1px solid var(--border-subtle)", display: "flex", gap: 8 }}>
                <input className="form-input" placeholder="Nhắn tin..." style={{ flex: 1, fontSize: 13, padding: "8px 12px" }} />
                <button className="btn btn-primary btn-sm" style={{ padding: "8px 10px" }}>
                  <Send size={14} />
                </button>
              </div>
            </div>

            {
    /* Captured pieces */
  }
            <div className="card" style={{ marginTop: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
                <Swords size={14} /> Quân Đã Ăn
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 6 }}>Trắng ăn:</div>
              <div style={{ fontSize: 20, letterSpacing: 2, fontFamily: "serif" }}>♟♝</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", margin: "12px 0 6px" }}>Đen ăn:</div>
              <div style={{ fontSize: 20, letterSpacing: 2, fontFamily: "serif" }}>♙♙</div>
              <div style={{ marginTop: 12, fontSize: 13, color: "var(--accent-green)", fontWeight: 600 }}>
                +1 cho Trắng
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
