import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <img src="/logo-header.png" alt="BiblioSystem" className="login-logo-img" />
        </div>
        <div className="login-divider"><span>✦</span></div>
        <p className="login-subtitle">Acesse sua conta para continuar</p>

        <div className="login-form">
          <div className="input-group">
            <label>Email ou usuário</label>
            <div className="input-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              <input type="text" placeholder="Digite seu e-mail ou usuário" />
            </div>
          </div>

          <div className="input-group">
            <label>Senha</label>
            <div className="input-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              <input type={show ? "text" : "password"} placeholder="Digite sua senha" />
              <button className="eye-btn" onClick={() => setShow(!show)}>
                {show
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                }
              </button>
            </div>
          </div>

          <div className="login-row">
            <label className="checkbox-label">
              <input type="checkbox" /> Lembrar-me
            </label>
            <a href="#" className="forgot-link">Esqueci minha senha</a>
          </div>

          <Link to="/principal">
            <button className="login-btn">Entrar</button>
          </Link>

          <p className="register-link">
            Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
