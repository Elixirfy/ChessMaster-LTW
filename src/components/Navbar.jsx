import { useState, useEffect } from "react";
import {
  ChessKnightSVG,
  Home,
  ChevronDown,
  Trophy,
  User,
  LogOut,
  Settings
} from "./Icons";
const NAV_ITEMS = [
  { page: "home", label: "Trang Ch\u1EE7", Icon: Home },
  { page: "game", label: "Ch\u01A1i Ngay", Icon: ChessKnightSVG },
  { page: "leaderboard", label: "B\u1EA3ng X\u1EBFp H\u1EA1ng", Icon: Trophy }
];
export const Navbar = ({
  currentPage,
  onNavigate,
  isLoggedIn,
  username,
  onLogout
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (!target.closest(".user-menu-wrapper")) setDropdownOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {
    /* Logo */
  }
      <div
    className="navbar-logo"
    onClick={() => onNavigate("home")}
    role="button"
    tabIndex={0}
    aria-label="ChessMaster Online - Về trang chủ"
  >
        <div className="navbar-logo-icon">
          <ChessKnightSVG size={20} color="#1a1100" />
        </div>
        <span className="navbar-logo-text">
          Chess<span>Master</span>
        </span>
      </div>

      {
    /* Navigation */
  }
      <ul className="navbar-nav">
        {NAV_ITEMS.map(({ page, label, Icon }) => <li key={page}>
            <button
    className={currentPage === page ? "active" : ""}
    onClick={() => onNavigate(page)}
    id={`nav-${page}`}
  >
              <Icon size={15} />
              {label}
            </button>
          </li>)}
      </ul>

      {
    /* Actions */
  }
      <div className="navbar-actions">
        {isLoggedIn ? <div className="user-menu-wrapper">
            <button
    className="user-menu-btn"
    onClick={() => setDropdownOpen(!dropdownOpen)}
    id="user-menu-toggle"
    aria-expanded={dropdownOpen}
  >
              <div className="user-menu-avatar">
                {(username || "U")[0].toUpperCase()}
              </div>
              <span className="user-menu-name">{username || "Ng\u01B0\u1EDDi ch\u01A1i"}</span>
              <ChevronDown size={13} color="var(--text-muted)" />
            </button>

            {dropdownOpen && <div className="user-dropdown">
                <button className="dropdown-item" onClick={() => {
    onNavigate("profile");
    setDropdownOpen(false);
  }} id="menu-profile">
                  <User size={15} /> Hồ sơ
                </button>
                <button className="dropdown-item" onClick={() => {
    onNavigate("game");
    setDropdownOpen(false);
  }} id="menu-play">
                  <ChessKnightSVG size={15} /> Chơi ngay
                </button>
                <button className="dropdown-item" onClick={() => {
    onNavigate("leaderboard");
    setDropdownOpen(false);
  }} id="menu-leaderboard">
                  <Trophy size={15} /> Bảng xếp hạng
                </button>
                <button className="dropdown-item" onClick={() => {
    onNavigate("profile");
    setDropdownOpen(false);
  }} id="menu-settings">
                  <Settings size={15} /> Cài đặt
                </button>
                <div className="dropdown-divider" />
                <button className="dropdown-item danger" onClick={() => {
    onLogout();
    setDropdownOpen(false);
  }} id="menu-logout">
                  <LogOut size={15} /> Đăng xuất
                </button>
              </div>}
          </div> : <>
            <button className="btn btn-ghost btn-sm" onClick={() => onNavigate("login")} id="nav-login">
              Đăng nhập
            </button>
            <button className="btn btn-primary btn-sm" onClick={() => onNavigate("register")} id="nav-register">
              Đăng ký
            </button>
          </>}
      </div>
    </nav>;
};
