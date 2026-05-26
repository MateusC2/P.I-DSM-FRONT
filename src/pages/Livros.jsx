import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";

const livros = [
  { id: 1, titulo: "A Hora da Estrela", autor: "Clarice Lispector", ano: 1977, disp: "Disponível", emoji: "⭐" },
  { id: 2, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, disp: "Disponível", emoji: "🎭" },
  { id: 3, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, disp: "Emprestado", emoji: "🌹" },
  { id: 4, titulo: "1984", autor: "George Orwell", ano: 1949, disp: "Disponível", emoji: "👁️" },
  { id: 5, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, disp: "Emprestado", emoji: "💍" },
  { id: 6, titulo: "Vidas Secas", autor: "Graciliano Ramos", ano: 1938, disp: "Disponível", emoji: "🌵" },
];

export default function Livros() {
  return (
    <>
      <div className="page livros-page">
        <Navbar />
        <Hero title="Acervo de Livros" />
        <div className="livros-body">
          <div className="livros-grid">
            {livros.map(l => (
              <div key={l.id} className="livro-card card-panel">
                <div className="livro-cover" style={{ background: "linear-gradient(135deg, rgba(59,79,212,0.4), rgba(30,40,120,0.6))" }}>
                  {l.emoji}
                </div>
                <p className="livro-titulo">{l.titulo}</p>
                <p className="livro-autor">{l.autor} · {l.ano}</p>
                <span className={`badge ${l.disp === "Disponível" ? "badge-green" : "badge-yellow"} livro-badge`}>
                  {l.disp}
                </span>
                <button className="btn btn-primary livro-btn">
                  {l.disp === "Disponível" ? "Reservar" : "Fila de espera"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{livrosStyles}</style>
    </>
  );
}

const livrosStyles = `
.livros-body {
  padding: 28px 32px;
  flex: 1;
}

.livros-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.livro-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.livro-cover {
  height: 120px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}

.livro-titulo { font-weight: 700; font-size: 0.9rem; color: var(--text-main); }
.livro-autor { font-size: 0.78rem; color: var(--text-muted); }
.livro-badge { align-self: flex-start; }
.livro-btn { width: 100%; justify-content: center; margin-top: 4px; }
`;
