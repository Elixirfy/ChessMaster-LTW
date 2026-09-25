import { useState } from "react";
import { ChessKnightSVG } from "../components/Icons";
import { User, Mail, Lock, Eye, EyeOff, Rocket, Sparkles } from "lucide-react";
export const AuthPage = ({ mode, onNavigate, onLogin }) => {
  const isLogin = mode === "login";
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const validate = () => {
    const newErrors = {};
    if (!isLogin && !formData.username.trim()) newErrors.username = "T\xEAn ng\u01B0\u1EDDi d\xF9ng kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng";
    else if (!isLogin && formData.username.length < 3) newErrors.username = "T\xEAn ng\u01B0\u1EDDi d\xF9ng ph\u1EA3i c\xF3 \xEDt nh\u1EA5t 3 k\xFD t\u1EF1";
    if (!formData.email.trim()) newErrors.email = "Email kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email kh\xF4ng h\u1EE3p l\u1EC7";
    if (!formData.password) newErrors.password = "M\u1EADt kh\u1EA9u kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng";
    else if (formData.password.length < 6) newErrors.password = "M\u1EADt kh\u1EA9u ph\u1EA3i c\xF3 \xEDt nh\u1EA5t 6 k\xFD t\u1EF1";
    if (!isLogin && formData.password !== formData.confirmPassword) newErrors.confirmPassword = "M\u1EADt kh\u1EA9u x\xE1c nh\u1EADn kh\xF4ng kh\u1EDBp";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    const displayName = isLogin ? formData.email.split("@")[0] : formData.username;
    onLogin(displayName);
  };
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };
  return <div className="auth-page">
      <div className="auth-bg" />
      <div className="auth-card">
        {
    /* Logo */
  }
        <div className="auth-logo">
          <div className="auth-logo-icon">
            <ChessKnightSVG size={28} color="#1a1100" />
          </div>
        </div>

        <h1 className="auth-title">
          {isLogin ? "Ch\xE0o M\u1EEBng Tr\u1EDF L\u1EA1i" : "T\u1EA1o T\xE0i Kho\u1EA3n"}
        </h1>
        <p className="auth-subtitle">
          {isLogin ? "\u0110\u0103ng nh\u1EADp \u0111\u1EC3 ti\u1EBFp t\u1EE5c h\xE0nh tr\xECnh k\u1EF3 th\u1EE7 c\u1EE7a b\u1EA1n" : "Tham gia c\u1ED9ng \u0111\u1ED3ng h\u01A1n 2 tri\u1EC7u k\u1EF3 th\u1EE7 to\xE0n c\u1EA7u"}
        </p>

        {
    /* Google OAuth */
  }
        <button className="social-btn" id="btn-google-auth" type="button" onClick={() => onLogin("GoogleUser")}>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          {isLogin ? "\u0110\u0103ng nh\u1EADp v\u1EDBi Google" : "\u0110\u0103ng k\xFD v\u1EDBi Google"}
        </button>

        <div className="form-divider">hoặc</div>

        <form onSubmit={handleSubmit} noValidate>
          {
    /* Username */
  }
          {!isLogin && <div className="form-group">
              <label className="form-label" htmlFor="register-username">Tên Người Dùng</label>
              <div className="form-input-wrapper">
                <span className="form-input-icon"><User size={16} /></span>
                <input
    id="register-username"
    className="form-input"
    type="text"
    placeholder="chess_master_vn"
    value={formData.username}
    onChange={(e) => handleChange("username", e.target.value)}
    autoComplete="username"
  />
              </div>
              {errors.username ? <div className="form-error">{errors.username}</div> : <div className="form-hint">Tên hiển thị trong các ván đấu</div>}
            </div>}

          {
    /* Email */
  }
          <div className="form-group">
            <label className="form-label" htmlFor="auth-email">Email</label>
            <div className="form-input-wrapper">
              <span className="form-input-icon"><Mail size={16} /></span>
              <input
    id="auth-email"
    className="form-input"
    type="email"
    placeholder="your@email.com"
    value={formData.email}
    onChange={(e) => handleChange("email", e.target.value)}
    autoComplete="email"
  />
            </div>
            {errors.email && <div className="form-error">{errors.email}</div>}
          </div>

          {
    /* Password */
  }
          <div className="form-group">
            <label className="form-label" htmlFor="auth-password">Mật Khẩu</label>
            <div className="form-input-wrapper">
              <span className="form-input-icon"><Lock size={16} /></span>
              <input
    id="auth-password"
    className="form-input"
    type={showPassword ? "text" : "password"}
    placeholder="••••••••"
    value={formData.password}
    onChange={(e) => handleChange("password", e.target.value)}
    autoComplete={isLogin ? "current-password" : "new-password"}
  />
              <button
    type="button"
    className="toggle-password"
    onClick={() => setShowPassword((s) => !s)}
    aria-label={showPassword ? "\u1EA8n m\u1EADt kh\u1EA9u" : "Hi\u1EC3n th\u1ECB m\u1EADt kh\u1EA9u"}
  >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && <div className="form-error">{errors.password}</div>}
          </div>

          {
    /* Confirm Password */
  }
          {!isLogin && <div className="form-group">
              <label className="form-label" htmlFor="register-confirm-password">Xác Nhận Mật Khẩu</label>
              <div className="form-input-wrapper">
                <span className="form-input-icon"><Lock size={16} /></span>
                <input
    id="register-confirm-password"
    className="form-input"
    type={showConfirmPassword ? "text" : "password"}
    placeholder="••••••••"
    value={formData.confirmPassword}
    onChange={(e) => handleChange("confirmPassword", e.target.value)}
    autoComplete="new-password"
  />
                <button
    type="button"
    className="toggle-password"
    onClick={() => setShowConfirmPassword((s) => !s)}
    aria-label="Toggle confirm password"
  >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.confirmPassword && <div className="form-error">{errors.confirmPassword}</div>}
            </div>}

          {
    /* Remember / Forgot */
  }
          {isLogin && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 14, color: "var(--text-secondary)" }}>
                <input
    type="checkbox"
    id="remember-me"
    checked={formData.rememberMe}
    onChange={(e) => handleChange("rememberMe", e.target.checked)}
    style={{ accentColor: "var(--accent-gold)" }}
  />
                Ghi nhớ đăng nhập
              </label>
              <button
    type="button"
    id="forgot-password-btn"
    style={{ background: "none", border: "none", color: "var(--accent-gold)", fontSize: 14, cursor: "pointer", fontWeight: 600 }}
  >
                Quên mật khẩu?
              </button>
            </div>}

          {
    /* Terms */
  }
          {!isLogin && <div style={{ marginBottom: 20 }}>
              <label style={{ display: "flex", alignItems: "flex-start", gap: 8, cursor: "pointer", fontSize: 13, color: "var(--text-secondary)" }}>
                <input type="checkbox" id="accept-terms" style={{ accentColor: "var(--accent-gold)", marginTop: 2, flexShrink: 0 }} />
                <span>
                  Tôi đồng ý với{" "}
                  <span style={{ color: "var(--accent-gold)", cursor: "pointer" }}>Điều khoản dịch vụ</span>
                  {" "}và{" "}
                  <span style={{ color: "var(--accent-gold)", cursor: "pointer" }}>Chính sách bảo mật</span>
                </span>
              </label>
            </div>}

          {
    /* Submit */
  }
          <button
    type="submit"
    className="btn btn-primary"
    id={isLogin ? "btn-login-submit" : "btn-register-submit"}
    disabled={isLoading}
    style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: 16 }}
  >
            {isLoading ? <><div className="spinner" /> {isLogin ? "\u0110ang \u0111\u0103ng nh\u1EADp..." : "\u0110ang t\u1EA1o t\xE0i kho\u1EA3n..."}</> : isLogin ? <><Rocket size={18} /> Đăng Nhập</> : <><Sparkles size={18} /> Tạo Tài Khoản</>}
          </button>
        </form>

        <div className="auth-footer">
          {isLogin ? <>Chưa có tài khoản?{" "}<a onClick={() => onNavigate("register")} id="switch-to-register">Đăng ký ngay</a></> : <>Đã có tài khoản?{" "}<a onClick={() => onNavigate("login")} id="switch-to-login">Đăng nhập</a></>}
        </div>
      </div>
    </div>;
};
