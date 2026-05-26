import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const usuario = {
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

  return (
    <>
      <div className="page perfil-page">
        <Navbar />
        <div className="perfil-body">

        <div className="perfil-left">
          <div className="perfil-avatar-card">
            <div className="perfil-avatar">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="rgba(59,79,212,0.3)"/>
                <circle cx="32" cy="24" r="10" fill="rgba(100,120,245,0.8)"/>
                <path d="M10 54c0-10 9.8-18 22-18s22 8 22 18" fill="rgba(100,120,245,0.6)"/>
              </svg>
            </div>
            <h2 className="perfil-nome">{usuario.nome}</h2>
            <p className="perfil-matricula">RA: {usuario.matricula}</p>
            <span className="badge badge-blue perfil-badge">Aluno Ativo</span>

            <div className="perfil-stats">
              <div className="stat-item">
                <span className="stat-num">{usuario.emprestimosAtivos}</span>
                <span className="stat-label">Empréstimos</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">{usuario.livrosDevolvidos}</span>
                <span className="stat-label">Devolvidos</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">{usuario.reservasAtivas}</span>
                <span className="stat-label">Reservas</span>
              </div>
            </div>

            <p className="membro-desde">Membro desde {usuario.membroDesde}</p>
          </div>
        </div>

        <div className="perfil-right">
          <div className="card-panel">
            <h3 className="panel-title">Informações Pessoais</h3>
            <div className="divider" />

            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                  Nome completo
                </span>
                <span className="info-val">{usuario.nome}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/></svg>
                  E-mail
                </span>
                <span className="info-val">{usuario.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 9h8M8 13h5"/></svg>
                  Matrícula / RA
                </span>
                <span className="info-val">{usuario.matricula}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
                  Curso
                </span>
                <span className="info-val">{usuario.curso}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                  Turma
                </span>
                <span className="info-val">{usuario.turma}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                  Telefone
                </span>
                <span className="info-val">{usuario.telefone}</span>
              </div>
            </div>
          </div>

          <div className="perfil-actions">
            <button className="btn btn-outline perfil-edit-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              Editar Perfil
            </button>
            <button className="logout-btn" onClick={() => navigate("/login")}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              Sair da Conta
            </button>
          </div>
        </div>

        </div>
      </div>
      <style>{perfilStyles}</style>
    </>
  );
}

const perfilStyles = `
.perfil-page { background-image: url('/fundo.png'); background-size: cover; background-position: center; background-attachment: fixed; }

.perfil-body {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
  padding: 32px;
  align-items: start;
  flex: 1;
}

.perfil-avatar-card {
  background: rgba(10, 14, 50, 0.88);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(14px);
}

.perfil-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: rgba(59,79,212,0.25);
  border: 2px solid rgba(100,120,245,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.perfil-nome {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 4px;
}

.perfil-matricula { font-size: 0.8rem; color: var(--text-muted); }
.perfil-badge { margin-top: 8px; }

.perfil-stats {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  background: rgba(59,79,212,0.15);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
}

.stat-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;
}

.stat-num { font-size: 1.3rem; font-weight: 700; color: var(--blue-light); }
.stat-label { font-size: 0.7rem; color: var(--text-muted); text-align: center; }
.stat-divider { width: 1px; height: 36px; background: var(--border); }
.membro-desde { font-size: 0.75rem; color: var(--text-muted); margin-top: 16px; }

.perfil-right { display: flex; flex-direction: column; gap: 16px; }

.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }

.info-item {
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-right: 16px;
}
.info-item:nth-child(even) { padding-right: 0; padding-left: 16px; border-left: 1px solid var(--border); }
.info-item:nth-last-child(-n+2) { border-bottom: none; }

.info-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.info-val { font-size: 0.9rem; color: var(--text-main); font-weight: 600; }

.perfil-actions { display: flex; gap: 12px; }
.perfil-edit-btn { gap: 8px; }

.logout-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 20px;
  border-radius: 8px;
  border: 1.5px solid rgba(248,113,113,0.5);
  background: transparent;
  color: #f87171;
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}
.logout-btn:hover {
  background: rgba(239,68,68,0.12);
  border-color: #f87171;
}
`;
