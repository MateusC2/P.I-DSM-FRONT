import { useState } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/layout/Hero.jsx";

const livros = [
  { id: 1, titulo: "A Hora da Estrela", autor: "Clarice Lispector", previsao: "30/06/2026", status: "Aguardando", statusBg: "#f59e0b", statusColor: "#1c0a00", emoji: "⭐", cor: "#b45309", acao: "Cancelar", acaoBorder: "rgba(200,200,220,0.4)", acaoColor: "#8891bb" },
  { id: 2, titulo: "A Culpa é Das Estrelas", autor: "John Green", previsao: "11/05/2026", status: "Disponível", statusBg: "#22c55e", statusColor: "#052e16", emoji: "💫", cor: "#1e3a6e", acao: "Retirar", acaoBorder: "#22c55e", acaoColor: "#22c55e" },
  { id: 3, titulo: "Orgulho e Preconceito", autor: "Jane Austen", previsao: "--", status: "Indisponível", statusBg: "#ef4444", statusColor: "#fff", emoji: "🌹", cor: "#3d1a5e", acao: "Ver Fila", acaoBorder: "rgba(100,120,245,0.5)", acaoColor: "#6478f5" },
];

const filtroResumo = [
  { emoji: "🔖", label: "Total de Livros", valor: "3", bg: "rgba(59,79,212,0.25)" },
  { emoji: "✅", label: "Livros disponíveis para retirada", valor: "1", bg: "rgba(34,197,94,0.2)" },
  { emoji: "👥", label: "Livros Ocupados", valor: "1", bg: "rgba(245,158,11,0.2)" },
  { emoji: "🚫", label: "Livros Indisponível", valor: "1", bg: "rgba(239,68,68,0.2)" },
];

export default function Gerenciamento() {
  const [hoveredAcao, setHoveredAcao] = useState(null);
  const [hoveredAdd, setHoveredAdd] = useState(false);

  return (
    <div style={S.page}>
      <Navbar />
      <Hero title="Gerenciamento Livros" />

      <div style={S.body}>
        {/* Tabela de livros */}
        <div style={S.card}>
          <div style={S.headerRow}>
            <h2 style={S.panelTitle}>📚 Todos os Livros</h2>
            <button
              style={{
                ...S.addBtn,
                background: hoveredAdd ? "#6478f5" : "#3b4fd4",
              }}
              onMouseEnter={() => setHoveredAdd(true)}
              onMouseLeave={() => setHoveredAdd(false)}
            >
              + Adicionar Livro
            </button>
          </div>
          <div style={S.divider} />
          <table style={S.table}>
            <thead>
              <tr style={S.thead}>
                <th style={S.th}>Livro</th>
                <th style={S.th}>Autor</th>
                <th style={S.th}>Previsão</th>
                <th style={S.th}>Status</th>
                <th style={S.th}></th>
              </tr>
            </thead>
            <tbody>
              {livros.map((l) => (
                <tr key={l.id} style={{ background: hoveredAcao === l.id ? "rgba(100,120,245,0.05)" : "transparent" }}>
                  <td style={S.td}>
                    <div style={S.bookCell}>
                      <div style={{ ...S.miniCover, background: l.cor }}>{l.emoji}</div>
                      <span>{l.titulo}</span>
                    </div>
                  </td>
                  <td style={S.td}>{l.autor}</td>
                  <td style={S.td}>{l.previsao}</td>
                  <td style={S.td}>
                    <span style={{ ...S.badge, background: l.statusBg, color: l.statusColor }}>
                      {l.status}
                    </span>
                  </td>
                  <td style={S.td}>
                    <div style={S.acaoRow}>
                      <button
                        style={{
                          ...S.acaoBtn,
                          border: `1.5px solid ${l.acaoBorder}`,
                          color: l.acaoColor,
                        }}
                        onMouseEnter={() => setHoveredAcao(l.id)}
                        onMouseLeave={() => setHoveredAcao(null)}
                      >
                        {l.acao}
                      </button>
                      <button style={S.editBtn} title="Editar">✏️</button>
                      <button style={S.deleteBtn} title="Remover">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Filtro / Resumo */}
        <div style={S.card}>
          <h2 style={S.panelTitle}>📋 Filtro</h2>
          <div style={S.divider} />
          {filtroResumo.map((f, i) => (
            <div
              key={i}
              style={{
                ...S.resumoItem,
                borderBottom: i < filtroResumo.length - 1 ? "1px solid rgba(100,120,245,0.18)" : "none",
              }}
            >
              <div style={{ ...S.resumoIcon, background: f.bg }}>{f.emoji}</div>
              <div>
                <p style={S.resumoLabel}>{f.label}</p>
                <p style={S.resumoValor}>{f.valor}</p>
              </div>
            </div>
          ))}

          <div style={{ ...S.divider, margin: "20px 0 16px" }} />

          {/* Filtros rápidos */}
          <p style={{ fontSize: 13, color: "#8891bb", marginBottom: 10 }}>Filtrar por status:</p>
          {["Todos", "Disponível", "Aguardando", "Indisponível"].map((f) => (
            <button key={f} style={S.filterBtn}>{f}</button>
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
    display: "grid",
    gridTemplateColumns: "1fr 260px",
    gap: 24,
    padding: "28px 32px",
    alignItems: "start",
    flex: 1,
  },
  card: {
    background: "rgba(10,14,50,0.90)",
    border: "1px solid rgba(100,120,245,0.18)",
    borderRadius: 14,
    padding: 20,
    backdropFilter: "blur(12px)",
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  panelTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "#e8eaf6",
    margin: 0,
  },
  addBtn: {
    padding: "7px 16px",
    borderRadius: 7,
    border: "none",
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s",
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
    padding: "4px 12px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
  },
  acaoRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  acaoBtn: {
    padding: "5px 12px",
    borderRadius: 6,
    background: "transparent",
    fontSize: 12,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "Lato, sans-serif",
    transition: "background 0.15s",
  },
  editBtn: {
    background: "rgba(59,79,212,0.2)",
    border: "1px solid rgba(100,120,245,0.3)",
    borderRadius: 6,
    padding: "4px 8px",
    fontSize: 13,
    cursor: "pointer",
    color: "#6478f5",
  },
  deleteBtn: {
    background: "rgba(239,68,68,0.15)",
    border: "1px solid rgba(239,68,68,0.3)",
    borderRadius: 6,
    padding: "4px 8px",
    fontSize: 13,
    cursor: "pointer",
    color: "#f87171",
  },
  resumoItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 0",
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
    fontSize: 13,
    fontWeight: 700,
    color: "#e8eaf6",
  },
  resumoValor: {
    fontSize: 18,
    fontWeight: 700,
    color: "#6478f5",
    marginTop: 2,
  },
  filterBtn: {
    display: "block",
    width: "100%",
    padding: "9px 12px",
    marginBottom: 8,
    borderRadius: 7,
    border: "1px solid rgba(100,120,245,0.3)",
    background: "rgba(59,79,212,0.1)",
    color: "#e8eaf6",
    fontFamily: "Lato, sans-serif",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "left",
    transition: "background 0.15s",
  },
};
