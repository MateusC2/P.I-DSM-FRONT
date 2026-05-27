import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const dados = {
  nome: "João Silva",
  email: "joao.silva@email.com",
  matricula: "2024001234",
  curso: "Análise e Desenvolvimento de Sistemas",
  turma: "2º Semestre",
  telefone: "(11) 99999-8888",
  emprestimosAtivos: 2,
  livrosDevolvidos: 12,
  reservasAtivas: 3,
  membroDesde: "Março 2024",
};

export default function Perfil() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [hoveredEdit, setHoveredEdit] = useState(false);
  const [hoveredSair, setHoveredSair] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const infoItems = [
    { label: "Nome completo", valor: dados.nome },
    { label: "E-mail", valor: dados.email },
    { label: "Matrícula / RA", valor: dados.matricula },
    { label: "Curso", valor: dados.curso },
    { label: "Turma", valor: dados.turma },
    { label: "Telefone", valor: dados.telefone },
  ];

  return (
    <div style={S.page}>
      <Navbar />
      <div style={S.body}>
        {/* Card esquerdo */}
        <div style={S.avatarCard}>
          <div style={S.avatar}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="32" fill="rgba(59,79,212,0.3)" />
              <circle cx="32" cy="24" r="10" fill="rgba(100,120,245,0.8)" />
              <path d="M10 54c0-10 9.8-18 22-18s22 8 22 18" fill="rgba(100,120,245,0.6)" />
            </svg>
          </div>
          <h2 style={S.nome}>{dados.nome}</h2>
          <p style={S.ra}>RA: {dados.matricula}</p>
          <span style={S.badgeAluno}>Aluno Ativo</span>

          <div style={S.statsBox}>
            {[
              { num: dados.emprestimosAtivos, label: "Empréstimos" },
              { num: dados.livrosDevolvidos, label: "Devolvidos" },
              { num: dados.reservasAtivas, label: "Reservas" },
            ].map((st, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <div style={S.statItem}>
                  <span style={S.statNum}>{st.num}</span>
                  <span style={S.statLabel}>{st.label}</span>
                </div>
                {i < arr.length - 1 && <div style={S.statDivider} />}
              </div>
            ))}
          </div>

          <p style={S.membro}>Membro desde {dados.membroDesde}</p>
        </div>

        {/* Painel direito */}
        <div style={S.right}>
          <div style={S.card}>
            <h3 style={S.panelTitle}>Informações Pessoais</h3>
            <div style={S.divider} />
            <div style={S.infoGrid}>
              {infoItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    ...S.infoItem,
                    borderLeft: i % 2 !== 0 ? "1px solid rgba(100,120,245,0.18)" : "none",
                    paddingLeft: i % 2 !== 0 ? 16 : 0,
                    paddingRight: i % 2 === 0 ? 16 : 0,
                    borderBottom: i >= infoItems.length - 2 ? "none" : "1px solid rgba(100,120,245,0.18)",
                  }}
                >
                  <span style={S.infoLabel}>{item.label}</span>
                  <span style={S.infoVal}>{item.valor}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={S.actions}>
            <button
              style={{
                ...S.editBtn,
                background: hoveredEdit ? "rgba(100,120,245,0.15)" : "transparent",
              }}
              onMouseEnter={() => setHoveredEdit(true)}
              onMouseLeave={() => setHoveredEdit(false)}
            >
              ✏️ Editar Perfil
            </button>
            <button
              style={{
                ...S.sairBtn,
                background: hoveredSair ? "rgba(239,68,68,0.12)" : "transparent",
              }}
              onMouseEnter={() => setHoveredSair(true)}
              onMouseLeave={() => setHoveredSair(false)}
              onClick={handleLogout}
            >
              🚪 Sair da Conta
            </button>
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
    gridTemplateColumns: "300px 1fr",
    gap: 24,
    padding: "32px",
    alignItems: "start",
    flex: 1,
  },
  avatarCard: {
    background: "rgba(10,14,50,0.90)",
    border: "1px solid rgba(100,120,245,0.18)",
    borderRadius: 16,
    padding: "28px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backdropFilter: "blur(14px)",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: "50%",
    background: "rgba(59,79,212,0.2)",
    border: "2px solid rgba(100,120,245,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  nome: {
    fontFamily: "Cinzel, serif",
    fontSize: 18,
    fontWeight: 700,
    color: "#e8eaf6",
    marginBottom: 4,
  },
  ra: {
    fontSize: 12,
    color: "#8891bb",
    marginBottom: 8,
  },
  badgeAluno: {
    display: "inline-block",
    padding: "3px 12px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    background: "#3b4fd4",
    color: "#fff",
    marginTop: 4,
  },
  statsBox: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    background: "rgba(59,79,212,0.15)",
    border: "1px solid rgba(100,120,245,0.18)",
    borderRadius: 10,
    overflow: "hidden",
  },
  statItem: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "12px 8px",
    gap: 4,
  },
  statNum: {
    fontSize: 20,
    fontWeight: 700,
    color: "#6478f5",
  },
  statLabel: {
    fontSize: 11,
    color: "#8891bb",
    textAlign: "center",
  },
  statDivider: {
    width: 1,
    height: 36,
    background: "rgba(100,120,245,0.18)",
  },
  membro: {
    fontSize: 12,
    color: "#8891bb",
    marginTop: 16,
  },
  right: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  card: {
    background: "rgba(10,14,50,0.90)",
    border: "1px solid rgba(100,120,245,0.18)",
    borderRadius: 14,
    padding: 22,
    backdropFilter: "blur(14px)",
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
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  infoItem: {
    padding: "14px 0",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  infoLabel: {
    fontSize: 12,
    color: "#8891bb",
  },
  infoVal: {
    fontSize: 14,
    color: "#e8eaf6",
    fontWeight: 600,
  },
  actions: {
    display: "flex",
    gap: 12,
  },
  editBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "9px 20px",
    borderRadius: 8,
    border: "1.5px solid rgba(100,120,245,0.5)",
    color: "#6478f5",
    fontFamily: "Lato, sans-serif",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s",
  },
  sairBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "9px 20px",
    borderRadius: 8,
    border: "1.5px solid rgba(248,113,113,0.5)",
    color: "#f87171",
    fontFamily: "Lato, sans-serif",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s",
  },
};
