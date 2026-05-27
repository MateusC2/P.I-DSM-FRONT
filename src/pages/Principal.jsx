import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/layout/Hero.jsx";

const emprestimosAtivos = [
  { id: 1, titulo: "A Hora da Estrela", autor: "Clarice Lispector", devolucao: "30/05/2026", dias: "8 dias restantes", cor: "#b45309" },
  { id: 2, titulo: "Vidas Secas", autor: "Graciliano Ramos", devolucao: "15/06/2026", dias: "24 dias restantes", cor: "#991b1b" },
];

const recomendacoes = [
  { id: 1, titulo: "A Culpa é das Estrelas", autor: "John Green", emoji: "⭐" },
  { id: 2, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", emoji: "💍" },
  { id: 3, titulo: "Orgulho e Preconceito", autor: "Jane Austen", emoji: "🌹" },
];

const notificacoes = [
  { id: 1, emoji: "🔔", bg: "rgba(245,158,11,0.2)", msg: "Devolva o livro \"1984\" até 04/05/2026 para evitar multas", tempo: "2h atrás" },
  { id: 2, emoji: "ℹ️", bg: "rgba(59,130,246,0.2)", msg: "A renovação do livro \"Vidas Secas\" foi realizada com sucesso.", tempo: "1 dia atrás" },
  { id: 3, emoji: "📅", bg: "rgba(168,85,247,0.2)", msg: "Participe do grupo de leitura! Próximo encontro: 07/05/2026", tempo: "2 dias atrás" },
];

export default function Principal() {
  const [hoveredRec, setHoveredRec] = useState(null);

  return (
    <div style={S.page}>
      <Navbar />
      <Hero title="Bem-vindo ao BiblioSystem" />

      <div style={S.body}>
        {/* Empréstimos Ativos */}
        <div style={S.card}>
          <h2 style={S.panelTitle}>Empréstimos ativos</h2>
          <div style={S.divider} />
          {emprestimosAtivos.map((e) => (
            <div key={e.id} style={S.empItem}>
              <div style={{ ...S.empCover, background: e.cor }}>📖</div>
              <div style={S.empInfo}>
                <p style={S.empTitulo}>{e.titulo}</p>
                <p style={S.empMuted}>{e.autor}</p>
                <p style={S.empMuted}>Devolução: {e.devolucao}</p>
                <span style={S.badge}>{e.dias}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recomendações */}
        <div style={S.card}>
          <div style={S.rowBetween}>
            <h2 style={S.panelTitle}>Recomendações para você</h2>
            <a href="#" style={S.verLink}>Ver detalhes</a>
          </div>
          <div style={S.divider} />
          <div style={S.recGrid}>
            {recomendacoes.map((r) => (
              <div key={r.id} style={S.recCard}>
                <div style={S.recCover}><span style={{ fontSize: 34 }}>{r.emoji}</span></div>
                <p style={S.recTitulo}>{r.titulo}</p>
                <p style={S.recAutor}>{r.autor}</p>
                <Link to="/livros">
                  <button
                    style={{
                      ...S.recBtn,
                      background: hoveredRec === r.id ? "rgba(100,120,245,0.18)" : "transparent",
                    }}
                    onMouseEnter={() => setHoveredRec(r.id)}
                    onMouseLeave={() => setHoveredRec(null)}
                  >
                    Ver detalhes
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Notificações */}
        <div style={S.card}>
          <div style={S.rowBetween}>
            <h2 style={S.panelTitle}>Avisos e Notificações</h2>
            <a href="#" style={S.verLink}>Ver todos</a>
          </div>
          <div style={S.divider} />
          {notificacoes.map((n) => (
            <div key={n.id} style={S.notifItem}>
              <div style={{ ...S.notifIcon, background: n.bg }}>{n.emoji}</div>
              <div>
                <p style={S.notifMsg}>{n.msg}</p>
                <p style={S.notifTempo}>{n.tempo}</p>
              </div>
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
    display: "grid",
    gridTemplateColumns: "280px 1fr 280px",
    gap: 24,
    padding: "28px 32px",
    flex: 1,
    alignItems: "start",
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
  rowBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  verLink: {
    fontSize: 12,
    color: "#6478f5",
    textDecoration: "none",
  },
  empItem: {
    display: "flex",
    gap: 12,
    marginBottom: 16,
    paddingBottom: 16,
    borderBottom: "1px solid rgba(100,120,245,0.18)",
  },
  empCover: {
    width: 52,
    height: 72,
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    flexShrink: 0,
  },
  empInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  empTitulo: {
    fontSize: 14,
    fontWeight: 700,
    color: "#e8eaf6",
  },
  empMuted: {
    fontSize: 12,
    color: "#8891bb",
  },
  badge: {
    display: "inline-block",
    marginTop: 4,
    padding: "3px 10px",
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 700,
    background: "#3b4fd4",
    color: "#fff",
  },
  recGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 14,
  },
  recCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 6,
  },
  recCover: {
    width: 76,
    height: 104,
    borderRadius: 8,
    background: "linear-gradient(135deg, rgba(59,79,212,0.35), rgba(20,28,100,0.6))",
    border: "1px solid rgba(100,120,245,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  recTitulo: {
    fontSize: 12,
    fontWeight: 700,
    color: "#e8eaf6",
    lineHeight: 1.3,
  },
  recAutor: {
    fontSize: 11,
    color: "#8891bb",
  },
  recBtn: {
    width: "100%",
    padding: "6px 0",
    border: "1px solid #6478f5",
    borderRadius: 6,
    color: "#6478f5",
    fontSize: 11,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "Lato, sans-serif",
    transition: "background 0.2s",
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
