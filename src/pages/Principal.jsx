import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";

const emprestimosAtivos = [
  { id: 1, titulo: "A Hora da Estrela", autor: "Clarice Lispector", devolucao: "30/05/2026", restantes: "8 dias restantes", cor: "#e07840" },
  { id: 2, titulo: "Vidas Secas", autor: "Graciliano Ramos", devolucao: "15/06/2026", restantes: "24 dias restantes", cor: "#c0392b" },
];

const recomendacoes = [
  { id: 1, titulo: "A Culpa é das Estrelas", autor: "John Green", emoji: "⭐" },
  { id: 2, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", emoji: "💍" },
  { id: 3, titulo: "Orgulho e Preconceito", autor: "Jane Austen", emoji: "🌹" },
];

const notificacoes = [
  { id: 1, icon: "🔔", msg: 'Devolva o livro "1984" até 04/05/2026 para evitar multas', tempo: "2h atrás", tipo: "warn" },
  { id: 2, icon: "ℹ️", msg: 'A renovação do livro "Vidas Secas" foi realizada com sucesso.', tempo: "1 dia atrás", tipo: "info" },
  { id: 3, icon: "📅", msg: "Participe do grupo de leitura! Próximo encontro: 07/05/2026", tempo: "2 dias atrás", tipo: "event" },
];

export default function Principal() {
  return (
    <>
      <div className="page">
        <Navbar />
        <Hero title="Bem-vindo ao BiblioSystem" />
        <div className="principal-body">
          {/* Empréstimos Ativos */}
          <div className="card-panel">
            <h2 className="panel-title">Empréstimos ativos</h2>
            <div className="divider" />
            {emprestimosAtivos.map(e => (
              <div key={e.id} className="emprestimo-item">
                <div className="emp-cover" style={{ background: e.cor }}>
                  <span>📖</span>
                </div>
                <div className="emp-info">
                  <p className="emp-titulo">{e.titulo}</p>
                  <p className="emp-autor">{e.autor}</p>
                  <p className="emp-dev">Devolução: {e.devolucao}</p>
                  <span className="badge badge-blue">{e.restantes}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recomendações */}
          <div className="card-panel rec-panel">
            <div className="panel-header-row">
              <h2 className="panel-title">Recomendações para você</h2>
              <a href="#" className="ver-link">Ver detalhes</a>
            </div>
            <div className="divider" />
            <div className="rec-grid">
              {recomendacoes.map(r => (
                <div key={r.id} className="rec-card">
                  <div className="rec-cover">
                    <span className="rec-emoji">{r.emoji}</span>
                  </div>
                  <p className="rec-titulo">{r.titulo}</p>
                  <p className="rec-autor">{r.autor}</p>
                  <Link to="/livros">
                    <button className="btn btn-outline rec-btn">
                      Ver detalhes
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Notificações */}
          <div className="card-panel notif-panel">
            <div className="panel-header-row">
              <h2 className="panel-title">Avisos e Notificações</h2>
              <a href="#" className="ver-link">Ver todos</a>
            </div>
            <div className="divider" />
            {notificacoes.map(n => (
              <div key={n.id} className="notif-item">
                <div className={`notif-icon notif-${n.tipo}`}>{n.icon}</div>
                <div>
                  <p className="notif-msg">{n.msg}</p>
                  <p className="notif-tempo">{n.tempo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{principalStyles}</style>
    </>
  );
}

const principalStyles = `
.principal-body {
  display: grid;
  grid-template-columns: 280px 1fr 280px;
  gap: 24px;
  padding: 28px 32px;
  flex: 1;
  align-items: start;
}

.rec-panel { grid-column: 2; }

.emprestimo-item {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.emprestimo-item:last-child { border-bottom: none; margin-bottom: 0; }

.emp-cover {
  width: 52px;
  height: 72px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
}

.emp-info { display: flex; flex-direction: column; gap: 3px; }
.emp-titulo { font-size: 0.9rem; font-weight: 700; color: var(--text-main); }
.emp-autor { font-size: 0.78rem; color: var(--text-muted); }
.emp-dev { font-size: 0.78rem; color: var(--text-muted); }

.rec-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

.rec-card { display: flex; flex-direction: column; align-items: center; text-align: center; }

.rec-cover {
  width: 80px;
  height: 110px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(59,79,212,0.35), rgba(20,28,100,0.6));
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.rec-emoji { font-size: 2.2rem; }
.rec-titulo { font-size: 0.82rem; font-weight: 700; color: var(--text-main); line-height: 1.3; }
.rec-autor { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }
.rec-btn { width: 100%; justify-content: center; margin-top: 8px; }
`;
