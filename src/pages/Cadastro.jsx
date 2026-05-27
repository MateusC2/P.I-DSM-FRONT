import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Cadastro() {
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const { loginAsAdmin } = useAuth();
  const navigate = useNavigate();

  const handleCadastro = () => {
    loginAsAdmin();
    navigate("/principal");
  };

  return (
    <div style={S.page}>
      <div style={S.card}>
        {/* Logo */}
        <div style={S.logoWrap}>
          <img src="/logo-header.png" alt="BiblioSystem" style={S.logoImg} />
        </div>

        {/* Divisor */}
        <div style={S.dividerRow}>
          <div style={S.dividerLine} />
          <span style={S.dividerStar}>✦</span>
          <div style={S.dividerLine} />
        </div>

        <p style={S.subtitle}>Preencha os dados para se cadastrar</p>

        {/* Formulário */}
        <div style={S.form}>
          {/* Nome / Sobrenome */}
          <div style={S.row2}>
            <div style={S.inputGroup}>
              <label style={S.label}>Nome</label>
              <div style={S.inputWrap}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8891bb" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <input style={S.input} type="text" placeholder="Seu nome" />
              </div>
            </div>
            <div style={S.inputGroup}>
              <label style={S.label}>Sobrenome</label>
              <div style={S.inputWrap}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8891bb" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <input style={S.input} type="text" placeholder="Sobrenome" />
              </div>
            </div>
          </div>

          {/* Email */}
          <div style={S.inputGroup}>
            <label style={S.label}>E-mail</label>
            <div style={S.inputWrap}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8891bb" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 8l10 6 10-6" />
              </svg>
              <input style={S.input} type="email" placeholder="seu@email.com" />
            </div>
          </div>

          {/* Matrícula */}
          <div style={S.inputGroup}>
            <label style={S.label}>Matrícula / RA</label>
            <div style={S.inputWrap}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8891bb" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 9h8M8 13h5" />
              </svg>
              <input style={S.input} type="text" placeholder="Número de matrícula" />
            </div>
          </div>

          {/* Senha */}
          <div style={S.inputGroup}>
            <label style={S.label}>Senha</label>
            <div style={S.inputWrap}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8891bb" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <input style={S.input} type="password" placeholder="Crie uma senha" />
            </div>
          </div>

          {/* Confirmar */}
          <div style={S.inputGroup}>
            <label style={S.label}>Confirmar Senha</label>
            <div style={S.inputWrap}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8891bb" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <input style={S.input} type="password" placeholder="Repita a senha" />
            </div>
          </div>

          {/* Botão */}
          <button
            style={{ ...S.cadBtn, background: hoveredBtn ? "#6478f5" : "#3b4fd4" }}
            onMouseEnter={() => setHoveredBtn(true)}
            onMouseLeave={() => setHoveredBtn(false)}
            onClick={handleCadastro}
          >
            Cadastrar
          </button>

          <p style={S.loginTxt}>
            Já tem conta?{" "}
            <Link to="/login" style={S.loginLink}>Entrar</Link>
          </p>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('/fundo.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  card: {
    background: "rgba(10,14,55,0.92)",
    border: "1px solid rgba(100,120,245,0.25)",
    borderRadius: 20,
    padding: "36px 44px",
    width: "100%",
    maxWidth: 480,
    backdropFilter: "blur(20px)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
    textAlign: "center",
    fontFamily: "Lato, sans-serif",
  },
  logoWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 12,
  },
  logoImg: {
    height: 56,
    width: "auto",
    objectFit: "contain",
  },
  dividerRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "8px 0",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    background: "rgba(100,120,245,0.3)",
  },
  dividerStar: {
    color: "#6478f5",
    fontSize: 14,
  },
  subtitle: {
    color: "#8891bb",
    fontSize: 14,
    marginBottom: 18,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    textAlign: "left",
  },
  row2: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    minWidth: 0,
    width: "100%",
  },
  label: {
    fontSize: 12,
    color: "#8891bb",
  },
  inputWrap: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(100,120,245,0.25)",
    borderRadius: 8,
    padding: "8px 12px",
    width: "100%",
    minWidth: 0,
  },
  input: {
    background: "none",
    border: "none",
    outline: "none",
    color: "#e8eaf6",
    fontFamily: "Lato, sans-serif",
    fontSize: 13,
    flex: 1,
  },
  cadBtn: {
    width: "100%",
    padding: 13,
    borderRadius: 8,
    border: "none",
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s",
    marginTop: 0,
  },
  loginTxt: {
    textAlign: "center",
    fontSize: 13,
    color: "#8891bb",
  },
  loginLink: {
    color: "#6478f5",
    fontWeight: 700,
    textDecoration: "none",
  },
};
