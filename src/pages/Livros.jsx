import { useState } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/layout/Hero.jsx";

const acervo = [
  { id: 1, titulo: "A Hora da Estrela", autor: "Clarice Lispector", ano: 1977, status: "Disponível", emoji: "⭐" },
  { id: 2, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, status: "Disponível", emoji: "🎭" },
  { id: 3, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, status: "Emprestado", emoji: "🌹" },
  { id: 4, titulo: "1984", autor: "George Orwell", ano: 1949, status: "Disponível", emoji: "👁️" },
  { id: 5, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, status: "Emprestado", emoji: "💍" },
  { id: 6, titulo: "Vidas Secas", autor: "Graciliano Ramos", ano: 1938, status: "Disponível", emoji: "🌵" },
];

export default function Livros() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <div style={S.page}>
      <Navbar />
      <Hero title="Acervo de Livros" />
      <div style={S.body}>
        <div style={S.grid}>
          {acervo.map((l) => (
            <div key={l.id} style={S.card}>
              <div style={S.cover}><span style={{ fontSize: 38 }}>{l.emoji}</span></div>
              <p style={S.titulo}>{l.titulo}</p>
              <p style={S.autor}>{l.autor} · {l.ano}</p>
              <span style={{
                ...S.badge,
                background: l.status === "Disponível" ? "#22c55e" : "#f59e0b",
                color: l.status === "Disponível" ? "#052e16" : "#1c0a00",
              }}>
                {l.status}
              </span>
              <button
                style={{
                  ...S.btn,
                  background: hoveredBtn === l.id ? "#6478f5" : "#3b4fd4",
                }}
                onMouseEnter={() => setHoveredBtn(l.id)}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                {l.status === "Disponível" ? "Reservar" : "Fila de espera"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Estilos ───────────────────────────────────────────────────────────────────
const S = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundImage: "url('/fundo.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    fontFamily: "Lato, sans-serif",
  },
  body: {
    padding: "28px 32px",
    flex: 1,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
    gap: 20,
  },
  card: {
    background: "rgba(10,14,50,0.88)",
    border: "1px solid rgba(100,120,245,0.18)",
    borderRadius: 12,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    backdropFilter: "blur(12px)",
  },
  cover: {
    height: 110,
    width: "100%",
    background: "linear-gradient(135deg, rgba(59,79,212,0.35), rgba(20,28,100,0.6))",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 14,
    fontWeight: 700,
    color: "#e8eaf6",
  },
  autor: {
    fontSize: 12,
    color: "#8891bb",
  },
  badge: {
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 700,
  },
  btn: {
    width: "100%",
    padding: "9px 0",
    border: "none",
    borderRadius: 6,
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s",
  },
};
