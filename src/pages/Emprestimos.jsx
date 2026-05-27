import { useState } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/layout/Hero.jsx";

const livros = [
  { id: 1, titulo: "A Hora da Estrela", autor: "Clarice Lispector", devolucao: "30/06/2026", status: "Ativo", emoji: "⭐", cor: "#b45309" },
  { id: 2, titulo: "A Culpa é Das Estrelas", autor: "John Green", devolucao: "11/05/2026", status: "Atrasado", emoji: "💫", cor: "#1e3a6e" },
];

const resumo = [
  { emoji: "📖", label: "Total", valor: "3 livros emprestados", bg: "rgba(59,79,212,0.25)" },
  { emoji: "⏱️", label: "Pendências", valor: "1 livro atrasado", bg: "rgba(239,68,68,0.2)" },
  { emoji: "✅", label: "Devolvidos", valor: "12 livros devolvidos", bg: "rgba(34,197,94,0.2)" },
];

export default function Emprestimos() {
  const [hoveredRenovar, setHoveredRenovar] = useState(false);

  return (
    <div style={S.page}>
      <Navbar />
      <Hero title="Meus Empréstimos" />

      <div style={S.body}>
        {/* Tabela */}
        <div style={S.card}>
          <h2 style={S.panelTitle}>📚 Livros Emprestados</h2>
          <div style={S.divider} />
          <table style={S.table}>
            <thead>
              <tr style={S.thead}>
                <th style={S.th}>Livro</th>
                <th style={S.th}>Autor</th>
                <th style={S.th}>Devolução</th>
                <th style={S.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((l) => (
                <tr key={l.id}>
                  <td style={S.td}>
                    <div style={S.bookCell}>
                      <div style={{ ...S.miniCover, background: l.cor }}>{l.emoji}</div>
                      <span>{l.titulo}</span>
                    </div>
                  </td>
                  <td style={S.td}>{l.autor}</td>
                  <td style={S.td}>{l.devolucao}</td>
                  <td style={S.td}>
                    <span style={{
                      ...S.badge,
                      background: l.status === "Ativo" ? "#22c55e" : "#ef4444",
                      color: l.status === "Ativo" ? "#052e16" : "#fff",
                    }}>
                      {l.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Resumo */}
        <div style={S.card}>
          <h2 style={S.panelTitle}>📋 Resumo</h2>
          <div style={S.divider} />
          {resumo.map((r, i) => (
            <div key={i} style={S.resumoItem}>
              <div style={{ ...S.resumoIcon, background: r.bg }}>{r.emoji}</div>
              <div>
                <p style={S.resumoLabel}>{r.label}</p>
                <p style={S.resumoValor}>{r.valor}</p>
              </div>
            </div>
          ))}
          <div style={{ ...S.divider, margin: "16px 0" }} />
          <button
            style={{ ...S.renovarBtn, background: hoveredRenovar ? "#6478f5" : "#3b4fd4" }}
            onMouseEnter={() => setHoveredRenovar(true)}
            onMouseLeave={() => setHoveredRenovar(false)}
          >
            🔄 Renovar Empréstimos
          </button>
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
    display: "grid",
    gridTemplateColumns: "1fr 260px",
    gap: 24,
    padding: "28px 32px",
    alignItems: "start",
    flex: 1,
  },
  card: {
    background: "rgba(10,14,50,0.88)",
    border: "1px solid rgba(100,120,245,0.18)",
    borderRadius: 14,
    padding: 20,
    backdropFilter: "blur(12px)",
  },
  panelTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "#e8eaf6",
    marginBottom: 12,
  },
  divider: {
    height: 1,
    background: "rgba(100,120,245,0.18)",
    marginBottom: 16,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 14,
  },
  thead: {
    background: "rgba(59,79,212,0.35)",
  },
  th: {
    padding: "12px 16px",
    textAlign: "left",
    fontSize: 13,
    fontWeight: 700,
    color: "#e8eaf6",
  },
  td: {
    padding: "14px 16px",
    borderBottom: "1px solid rgba(100,120,245,0.18)",
    color: "#e8eaf6",
    verticalAlign: "middle",
  },
  bookCell: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  miniCover: {
    width: 38,
    height: 52,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    flexShrink: 0,
  },
  badge: {
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
  },
  resumoItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 0",
    borderBottom: "1px solid rgba(100,120,245,0.18)",
  },
  resumoIcon: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    flexShrink: 0,
  },
  resumoLabel: {
    fontSize: 14,
    fontWeight: 700,
    color: "#e8eaf6",
  },
  resumoValor: {
    fontSize: 12,
    color: "#8891bb",
    marginTop: 2,
  },
  renovarBtn: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "none",
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s",
  },
};
