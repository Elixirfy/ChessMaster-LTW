# ♛ ChessMaster Online

> Giao diện frontend cho nền tảng chơi cờ vua trực tuyến, xây dựng bằng React + JavaScript + Vite.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## Giới thiệu

ChessMaster Online là một **frontend demo** cho ứng dụng chơi cờ vua trực tuyến. Dự án tập trung vào thiết kế UI/UX với dark mode, glassmorphism và các hiệu ứng động hiện đại. Không có backend — toàn bộ dữ liệu được mock.

## Tính năng

- **Trang chủ** — Hero section, chọn chế độ thời gian (Bullet / Blitz / Rapid / Classical), giới thiệu tính năng
- **Hình nền động toàn trang** — Hiệu ứng đổi hình nền mượt mà khi cuộn qua các section (sử dụng `IntersectionObserver`)
- **Chơi cờ** — Bàn cờ 8×8 tương tác, đồng hồ đếm ngược real-time, danh sách nước đi, chat
- **Bảng xếp hạng** — Top kỳ thủ theo ELO, lọc theo chế độ, tìm kiếm real-time, win rate bar
- **Đăng nhập / Đăng ký** — Form validation client-side, toggle ẩn/hiện mật khẩu, Google OAuth UI
- **Hồ sơ cá nhân** — Thống kê, biểu đồ rating, thành tích, lịch sử ván đấu, cài đặt
- **Giao diện & Trải nghiệm** — Navbar nổi, glassmorphism, và hỗ trợ **Chế độ Sáng/Tối (Light/Dark mode)** lưu trạng thái qua `localStorage`.

## Tech Stack

| | |
|---|---|
| UI Library | React 19 |
| Language | JavaScript |
| Build Tool | Vite 8 |
| Icons | lucide-react + custom SVG (Lichess-inspired) |
| Styling | Vanilla CSS với CSS Custom Properties |
| Fonts | Inter + Playfair Display (Google Fonts) |

## Cài đặt & Chạy

```bash
git clone https://github.com/your-username/chessmaster-online.git
cd chessmaster-online

npm install
npm run dev
```

Mở trình duyệt tại `http://localhost:5173`

## Scripts

```bash
npm run dev      # Dev server với HMR
npm run build    # Build production
npm run preview  # Preview bản build
```

## Cấu trúc dự án

```
src/
├── App.jsx                 # Root: routing + auth state + toast
├── components/
│   ├── Navbar.jsx          # Floating navbar
│   ├── ChessBoard.jsx      # Bàn cờ tương tác
│   └── Icons.jsx           # SVG icons
├── pages/
│   ├── HomePage.jsx
│   ├── GamePage.jsx
│   ├── LeaderboardPage.jsx
│   ├── AuthPage.jsx
│   └── ProfilePage.jsx
└── data/
    └── types.js            # Types + mock data
```
## License

MIT

