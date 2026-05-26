import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";

const livros = [
  { id: 1, titulo: "A Hora da Estrela", autor: "Clarice Lispector", devolucao: "30/06/2026", status: "Ativo", emoji: "⭐", cor: "#e07840" },
  { id: 2, titulo: "A Culpa é Das Estrelas", autor: "John Green", devolucao: "11/05/2026", status: "Atrasado", emoji: "💫", cor: "#1a3a6e" },
];

const resumo = [
  { icon: "📖", label: "Total", valor: "3 livros emprestados", cor: "icon-blue" },
  { icon: "⏱️", label: "Pendências", valor: "1 livro atrasado", cor: "icon-red" },
  { icon: "✅", label: "Devolvidos", valor: "12 livros devolvidos", cor: "icon-green" },
];

export default function Emprestimos() {
  return (
    <>
      <div className="page">
        <Navbar />
        <Hero title="Meus Empréstimos" />
        <div className="emp-body">
        {/* Tabela */}
          <div className="card-panel emp-table-panel">
            <h2 className="panel-title panel-title-icon">
              <span>📚</span> Livros Emprestados
            </h2>
            <div className="divider" />
            <div className="table-wrap">
              <table className="bi-table">
                <thead>
                  <tr>
                    <th>Livro</th>
                    <th>Autor</th>
                    <th>Devolução</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {livros.map(l => (
                    <tr key={l.id}>
                      <td>
                        <div className="book-cell">
                          <div className="book-mini-cover" style={{ background: l.cor }}>
                            {l.emoji}
                          </div>
                          <span>{l.titulo}</span>
                        </div>
                      </td>
                      <td>{l.autor}</td>
                      <td>{l.devolucao}</td>
                      <td>
                        <span className={`badge ${l.status === "Ativo" ? "badge-green" : "badge-red"}`}>
                          {l.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        {/* Resumo */}
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
                  <p className="resumo-valor">{r.valor}</p>
                </div>
              </div>
            ))}
            <div className="divider resumo-divider" />
            <button className="renovar-btn">
              🔄 Renovar Empréstimos
            </button>
          </div>
        </div>
      </div>
      <style>{emprestimosStyles}</style>
    </>
  );
}

const emprestimosStyles = `
.emp-body {
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 24px;
  padding: 28px 32px;
  align-items: start;
  flex: 1;
}

.emp-table-panel { overflow: hidden; }
.resumo-panel { overflow: hidden; }
.panel-title-icon { display: flex; align-items: center; gap: 8px; }
.resumo-divider { margin: 16px 0; }

.renovar-btn {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: var(--blue-accent);
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.renovar-btn:hover { background: var(--blue-light); }
`;
