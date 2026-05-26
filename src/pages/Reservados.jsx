import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";

const reservas = [
  { id: 1, titulo: "A Hora da Estrela", autor: "Clarice Lispector", previsao: "30/06/2026", status: "Aguardando", emoji: "⭐", cor: "#e07840", acao: "Cancelar", acaoClass: "btn-cancel" },
  { id: 2, titulo: "A Culpa é Das Estrelas", autor: "John Green", previsao: "11/05/2026", status: "Disponível", emoji: "💫", cor: "#1a3a6e", acao: "Retirar", acaoClass: "btn-retirar" },
  { id: 3, titulo: "Orgulho e Preconceito", autor: "Jane Austen", previsao: "--", status: "Em Fila", emoji: "🌹", cor: "#3d1a5e", acao: "Ver Fila", acaoClass: "btn-fila" },
];

const resumo = [
  { icon: "🔖", label: "Total de Reservas", valor: "3", cor: "icon-blue" },
  { icon: "⏱️", label: "Disponíveis para retirada", valor: "1", cor: "icon-yellow" },
  { icon: "👥", label: "Em Fila de Espera", valor: "2", cor: "icon-purple" },
];

const notificacoes = [
  { id: 1, icon: "🔔", msg: 'Devolva o livro "1984" até 04/05/2026 para evitar multas', tempo: "2h atrás" },
  { id: 2, icon: "ℹ️", msg: 'A renovação do livro "Vidas Secas" foi realizada com sucesso.', tempo: "1 dia atrás" },
];

export default function Reservados() {
  return (
    <>
      <div className="page">
        <Navbar />
        <Hero title="Minhas Reservas" />
        <div className="res-body">
        {/* Tabela */}
          <div className="card-panel res-table-panel">
            <h2 className="panel-title panel-title-icon">
              <span>📚</span> Livros Resevados
            </h2>
            <div className="divider" />
            <div className="table-wrap">
              <table className="bi-table">
                <thead>
                  <tr>
                    <th>Livro</th>
                    <th>Autor</th>
                    <th>Previsão</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {reservas.map(r => (
                    <tr key={r.id} className="reserva-row">
                      <td>
                        <div className="book-cell">
                          <div className="book-mini-cover" style={{ background: r.cor }}>
                            {r.emoji}
                          </div>
                          <span>{r.titulo}</span>
                        </div>
                      </td>
                      <td>{r.autor}</td>
                      <td>{r.previsao}</td>
                      <td>
                        <span className={`badge ${
                          r.status === "Disponível" ? "badge-green"
                          : r.status === "Aguardando" ? "badge-yellow"
                          : "badge-purple"
                        }`}>
                          {r.status}
                        </span>
                      </td>
                      <td>
                        <button className={`acao-btn ${r.acaoClass}`}>{r.acao}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        {/* Painel direito */}
          <div className="res-right">
            <div className="card-panel resumo-panel">
              <h2 className="panel-title panel-title-icon">
                <span>📋</span> Resumo
              </h2>
              <div className="divider" />
              {resumo.map((r, i) => (
                <div key={i} className="resumo-item">
                  <div className={`resumo-icon ${r.cor}`}>{r.icon}</div>
                  <div>
                    <p className="resumo-label">{r.label}</p>
                    <p className="resumo-valor resumo-valor-strong">{r.valor}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-panel notif-card">
              <div className="panel-header-row">
                <h2 className="panel-title">Avisos e Notificações</h2>
                <a href="#" className="ver-link">Ver todos</a>
              </div>
              <div className="divider" />
              {notificacoes.map(n => (
                <div key={n.id} className="notif-item">
                  <div className="notif-icon notif-info">{n.icon}</div>
                  <div>
                    <p className="notif-msg">{n.msg}</p>
                    <p className="notif-tempo">{n.tempo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{reservadosStyles}</style>
    </>
  );
}

const reservadosStyles = `
.res-body {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 24px;
  padding: 28px 32px;
  align-items: start;
  flex: 1;
}

.res-table-panel { overflow: hidden; }
.res-right { display: flex; flex-direction: column; gap: 20px; }
.panel-title-icon { display: flex; align-items: center; gap: 8px; }
.reserva-row { transition: background 0.15s; }
.reserva-row:hover { background: rgba(59,79,212,0.08); }

.acao-btn {
  padding: 5px 14px;
  border-radius: 6px;
  border: 1.5px solid;
  font-size: 0.78rem;
  font-weight: 700;
  font-family: var(--font-body);
  cursor: pointer;
  transition: all 0.2s;
}
.btn-cancel { border-color: rgba(200,200,220,0.4); color: var(--text-muted); background: transparent; }
.btn-cancel:hover { border-color: var(--text-main); color: var(--text-main); }
.btn-retirar { border-color: var(--green); color: var(--green); background: transparent; }
.btn-retirar:hover { background: rgba(34,197,94,0.15); }
.btn-fila { border-color: rgba(100,120,245,0.5); color: var(--blue-light); background: transparent; }
.btn-fila:hover { background: rgba(59,79,212,0.15); }

.resumo-valor-strong { font-size: 1rem; font-weight: 700; color: var(--text-main); }
.notif-card { margin-top: 20px; }
`;
