import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <>
    <div className="login-page">
      <div className="login-card cadastro-card">
        <div className="login-logo">
          <img src="/logo-header.png" alt="BiblioSystem" className="login-logo-img" />
        </div>
        <div className="login-divider"><span>✦</span></div>
        <p className="login-subtitle">Preencha os dados para se cadastrar</p>

        <div className="login-form">
          <div className="cad-row-2">
            <div className="input-group">
              <label>Nome</label>
              <div className="input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                <input type="text" placeholder="Seu nome" />
              </div>
            </div>
            <div className="input-group">
              <label>Sobrenome</label>
              <div className="input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                <input type="text" placeholder="Sobrenome" />
              </div>
            </div>
          </div>

          <div className="input-group">
            <label>E-mail</label>
            <div className="input-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/></svg>
              <input type="email" placeholder="seu@email.com" />
            </div>
          </div>

          <div className="input-group">
            <label>Matrícula / RA</label>
            <div className="input-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 9h8M8 13h5"/></svg>
              <input type="text" placeholder="Número de matrícula" />
            </div>
          </div>

          <div className="input-group">
            <label>Senha</label>
            <div className="input-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              <input type="password" placeholder="Crie uma senha" />
            </div>
          </div>

          <div className="input-group">
            <label>Confirmar Senha</label>
            <div className="input-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              <input type="password" placeholder="Repita a senha" />
            </div>
          </div>

          <Link to="/principal">
            <button className="login-btn">Cadastrar</button>
          </Link>

          <p className="register-link">
            Já tem conta? <Link to="/login">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
    <style>{cadastroStyles}</style>
    </>
  );
}

const cadastroStyles = `
.cadastro-card { max-width: 480px; }
.cad-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
`;
