import { useState } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/layout/Hero.jsx";

const reservas = [
  { id: 1, titulo: "A Hora da Estrela", autor: "Clarice Lispector", previsao: "30/06/2026", status: "Aguardando", statusBg: "#f59e0b", statusColor: "#1c0a00", emoji: "⭐", cor: "#b45309", acao: "Cancelar" },
  { id: 2, titulo: "A Culpa é Das Estrelas", autor: "John Green", previsao: "11/05/2026", status: "Disponível", statusBg: "#22c55e", statusColor: "#052e16", emoji: "💫", cor: "#1e3a6e", acao: "Retirar" },
  { id: 3, titulo: "Orgulho e Preconceito", autor: "Jane Austen", previsao: "--", status: "Em Fila", statusBg: "#a855f7", statusColor: "#fff", emoji: "🌹", cor: "#3d1a5e", acao: "Ver Fila" },
];

const resumo = [
  { emoji: "🔖", label: "Total de Reservas", valor: "3", bg: "rgba(59,79,212,0.25)" },
  { emoji: "⏱️", label: "Disponíveis para retirada", valor: "1", bg: "rgba(245,158,11,0.2)" },
  { emoji: "👥", label: "Em Fila de Espera", valor: "2", bg: "rgba(168,85,247,0.2)" },
];

const notificacoes = [
  { id: 1, emoji: "🔔", msg: "Devolva o livro \"1984\" até 04/05/2026 para evitar multas", tempo: "2h atrás" },
  { id: 2, emoji: "ℹ️", msg: "A renovação do livro \"Vidas Secas\" foi realizada com sucesso.", tempo: "1 dia atrás" },
];

export default function Reservados() {
  const [hoveredAcao, setHoveredAcao] = useState(null);

  return (
    <div style={S.page}>
      <Navbar />
      <Hero title="Minhas Reservas" />

      <div style={S.body}>
        {/* Tabela */}
        <div style={S.card}>
          <h2 style={S.panelTitle}>📚 Livros Reservados</h2>
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
              {reservas.map((r) => (
                <tr key={r.id}>
                  <td style={S.td}>
                    <div style={S.bookCell}>
                      <div style={{ ...S.miniCover, background: r.cor }}>{r.emoji}</div>
                      <span>{r.titulo}</span>
                    </div>
                  </td>
                  <td style={S.td}>{r.autor}</td>
                  <td style={S.td}>{r.previsao}</td>
                  <td style={S.td}>
                    <span style={{ ...S.badge, background: r.statusBg, color: r.statusColor }}>
                      {r.status}
                    </span>
                  </td>
                  <td style={S.td}>
                    <button
                      style={{
                        ...S.acaoBtn,
                        background: hoveredAcao === r.id ? "rgba(100,120,245,0.12)" : "transparent",
                      }}
                      onMouseEnter={() => setHoveredAcao(r.id)}
                      onMouseLeave={() => setHoveredAcao(null)}
                    >
                      {r.acao}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Painel direito */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={S.card}>
            <h2 style={S.panelTitle}>📋 Resumo</h2>
            <div style={S.divider} />
            {resumo.map((r, i) => (
              <div key={i} style={S.resumoItem}>
                <div style={{ ...S.resumoIcon, background: r.bg }}>{r.emoji}</div>
                <div>
                  <p style={S.resumoLabel}>{r.label}</p>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "#e8eaf6", marginTop: 2 }}>{r.valor}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={S.card}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <h2 style={S.panelTitle}>Avisos e Notificações</h2>
              <a href="#" style={S.verLink}>Ver todos</a>
            </div>
            <div style={S.divider} />
            {notificacoes.map((n) => (
              <div key={n.id} style={S.notifItem}>
                <div style={S.notifIcon}>{n.emoji}</div>
                <div>
                  <p style={S.notifMsg}>{n.msg}</p>
                  <p style={S.notifTempo}>{n.tempo}</p>
                </div>
              </div>
            ))}
          </div>
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
    gridTemplateColumns: "1fr 280px",
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
    padding: "4px 12px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
  },
  acaoBtn: {
    padding: "5px 14px",
    borderRadius: 6,
    border: "1.5px solid rgba(100,120,245,0.45)",
    color: "#8891bb",
    fontSize: 12,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "Lato, sans-serif",
    transition: "background 0.2s",
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
    fontSize: 13,
    fontWeight: 700,
    color: "#e8eaf6",
  },
  verLink: {
    fontSize: 12,
    color: "#6478f5",
    textDecoration: "none",
  },
  notifItem: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    padding: "12px 0",
    borderBottom: "1px solid rgba(100,120,245,0.18)",
  },
  notifIcon: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: "rgba(59,130,246,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    flexShrink: 0,
  },
  notifMsg: {
    fontSize: 12,
    color: "#e8eaf6",
    lineHeight: 1.4,
    marginBottom: 4,
  },
  notifTempo: {
    fontSize: 11,
    color: "#8891bb",
  },
};
