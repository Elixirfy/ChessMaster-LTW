import { useState } from "react";
import { CHESS_PIECES, INITIAL_BOARD } from "../data/types";
const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
const RANKS = ["8", "7", "6", "5", "4", "3", "2", "1"];
export const ChessBoard = ({
  size = 520,
  interactive = true,
  className = "game-board"
}) => {
  const [board] = useState(INITIAL_BOARD);
  const [selected, setSelected] = useState(null);
  const [highlighted, setHighlighted] = useState([]);
  const DEMO_HIGHLIGHTS = {
    "6-4": [[5, 4], [4, 4]],
    // e2 pawn can go to e3, e4
    "7-3": [[6, 3], [5, 3]],
    // d1 queen
    "0-4": [[1, 4]]
    // black king
  };
  const handleSquareClick = (row, col) => {
    if (!interactive) return;
    const key = `${row}-${col}`;
    if (selected) {
      setSelected(null);
      setHighlighted([]);
    } else if (board[row][col]) {
      setSelected([row, col]);
      setHighlighted(DEMO_HIGHLIGHTS[key] || []);
    }
  };
  const isHighlighted = (row, col) => highlighted.some(([r, c]) => r === row && c === col);
  const isSelected = (row, col) => selected ? selected[0] === row && selected[1] === col : false;
  const squareSize = size / 8;
  const fontSize = squareSize * 0.65;
  return <div
    className={className}
    style={{ width: size, height: size, borderRadius: "8px", overflow: "hidden" }}
    role="grid"
    aria-label="Bàn cờ vua"
  >
      {board.map(
    (row, rowIdx) => row.map((piece, colIdx) => {
      const isLight = (rowIdx + colIdx) % 2 === 0;
      const highlighted2 = isHighlighted(rowIdx, colIdx);
      const sel = isSelected(rowIdx, colIdx);
      let bg = isLight ? "var(--square-light)" : "var(--square-dark)";
      if (sel) bg = isLight ? "#aad969" : "#76b548";
      if (highlighted2 && piece) bg = isLight ? "#cdd16f" : "#aaaa44";
      if (highlighted2 && !piece) bg = isLight ? "radial-gradient(circle, rgba(20,85,30,0.4) 30%, transparent 31%)" : "radial-gradient(circle, rgba(20,85,30,0.5) 30%, transparent 31%)";
      return <div
        key={`${rowIdx}-${colIdx}`}
        className={`chess-square ${isLight ? "light" : "dark"}`}
        style={{
          background: bg,
          width: squareSize,
          height: squareSize,
          position: "relative",
          cursor: interactive ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        onClick={() => handleSquareClick(rowIdx, colIdx)}
        role="gridcell"
        aria-label={`${FILES[colIdx]}${RANKS[rowIdx]}${piece ? ` - ${piece}` : ""}`}
      >
              {
        /* Rank label - left side, only first column */
      }
              {colIdx === 0 && <span style={{
        position: "absolute",
        top: 2,
        left: 3,
        fontSize: 10,
        fontWeight: 700,
        color: isLight ? "var(--square-dark)" : "var(--square-light)",
        opacity: 0.7,
        lineHeight: 1,
        userSelect: "none"
      }}>
                  {RANKS[rowIdx]}
                </span>}

              {
        /* File label - bottom side, only last row */
      }
              {rowIdx === 7 && <span style={{
        position: "absolute",
        bottom: 1,
        right: 3,
        fontSize: 10,
        fontWeight: 700,
        color: isLight ? "var(--square-dark)" : "var(--square-light)",
        opacity: 0.7,
        lineHeight: 1,
        userSelect: "none"
      }}>
                  {FILES[colIdx]}
                </span>}

              {
        /* Move indicator dot */
      }
              {highlighted2 && !piece && <div style={{
        width: squareSize * 0.28,
        height: squareSize * 0.28,
        borderRadius: "50%",
        background: "rgba(20,85,30,0.4)",
        pointerEvents: "none"
      }} />}

              {
        /* Capture ring */
      }
              {highlighted2 && piece && <div style={{
        position: "absolute",
        inset: 0,
        borderRadius: 0,
        border: `${squareSize * 0.1}px solid rgba(20,85,30,0.5)`,
        pointerEvents: "none"
      }} />}

              {
        /* Chess piece */
      }
              {piece && <span
        className="chess-piece"
        style={{
          fontSize,
          lineHeight: 1,
          userSelect: "none",
          filter: piece.startsWith("w") ? "drop-shadow(0 1px 2px rgba(0,0,0,0.5))" : "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
          cursor: interactive ? "grab" : "default"
        }}
      >
                  {CHESS_PIECES[piece]}
                </span>}
            </div>;
    })
  )}
    </div>;
};
