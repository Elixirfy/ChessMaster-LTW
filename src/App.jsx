import { useState, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { GamePage } from "./pages/GamePage";
import { LeaderboardPage } from "./pages/LeaderboardPage";
import { AuthPage } from "./pages/AuthPage";
import { ProfilePage } from "./pages/ProfilePage";
function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [toasts, setToasts] = useState([]);
  const showToast = useCallback((message, type = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);
  const navigate = useCallback((page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  }, []);
  const handleLogin = useCallback((name) => {
    setUsername(name);
    setIsLoggedIn(true);
    navigate("home");
    showToast(`\u{1F389} Ch\xE0o m\u1EEBng tr\u1EDF l\u1EA1i, ${name}!`, "success");
  }, [navigate, showToast]);
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setUsername("");
    navigate("home");
    showToast("\u{1F44B} \u0110\u0103ng xu\u1EA5t th\xE0nh c\xF4ng!", "info");
  }, [navigate, showToast]);
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={navigate} isLoggedIn={isLoggedIn} />;
      case "game":
        return <GamePage isLoggedIn={isLoggedIn} username={username} />;
      case "leaderboard":
        return <LeaderboardPage />;
      case "login":
        return <AuthPage
          mode="login"
          onNavigate={navigate}
          onLogin={handleLogin}
        />;
      case "register":
        return <AuthPage
          mode="register"
          onNavigate={navigate}
          onLogin={handleLogin}
        />;
      case "profile":
        return isLoggedIn ? <ProfilePage username={username} onNavigate={navigate} onLogout={handleLogout} /> : (() => {
          navigate("login");
          return null;
        })();
      default:
        return <HomePage onNavigate={navigate} isLoggedIn={isLoggedIn} />;
    }
  };
  return <>
      {
    /* Floating Navbar */
  }
      <Navbar
    currentPage={currentPage}
    onNavigate={navigate}
    isLoggedIn={isLoggedIn}
    username={username}
    onLogout={handleLogout}
  />

      {
    /* Page Content */
  }
      <main>
        {renderPage()}
      </main>

      {
    /* Toast Notifications */
  }
      <div className="toast-container" role="alert" aria-live="polite">
        {toasts.map((toast) => <div key={toast.id} className={`toast ${toast.type}`}>
            <span>
              {toast.type === "success" ? "\u2705" : toast.type === "error" ? "\u274C" : "\u2139\uFE0F"}
            </span>
            <span>{toast.message}</span>
            <button
    onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
    style={{
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      cursor: "pointer",
      marginLeft: "auto",
      fontSize: 16
    }}
    aria-label="Đóng thông báo"
  >
              ×
            </button>
          </div>)}
      </div>
    </>;
}
export default App;
