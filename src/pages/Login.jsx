import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const [show, setShow] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const { loginAsAluno } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginAsAluno();
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

        <p style={S.subtitle}>Acesse sua conta para continuar</p>

        {/* Formulário */}
        <div style={S.form}>
          {/* Email */}
          <div style={S.inputGroup}>
            <label style={S.label}>Email ou usuário</label>
            <div style={S.inputWrap}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8891bb" strokeWidth="2">
                <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <input style={S.input} type="text" placeholder="Digite seu e-mail ou usuário" />
            </div>
          </div>

          {/* Senha */}
          <div style={S.inputGroup}>
            <label style={S.label}>Senha</label>
            <div style={S.inputWrap}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8891bb" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <input style={S.input} type={show ? "text" : "password"} placeholder="Digite sua senha" />
              <button style={S.eyeBtn} onClick={() => setShow(!show)}>
                {show
                  ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8891bb" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                  : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8891bb" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                }
              </button>
            </div>
          </div>

          {/* Lembrar / Esqueci */}
          <div style={S.rowBetween}>
            <label style={S.checkLabel}>
              <input type="checkbox" style={{ accentColor: "#3b4fd4" }} />
              <span style={{ marginLeft: 6, fontSize: 13, color: "#8891bb" }}>Lembrar-me</span>
            </label>
            <a href="#" style={S.forgotLink}>Esqueci minha senha</a>
          </div>

          {/* Botão Entrar */}
          <button
            style={{ ...S.loginBtn, background: hoveredBtn ? "#6478f5" : "#3b4fd4" }}
            onMouseEnter={() => setHoveredBtn(true)}
            onMouseLeave={() => setHoveredBtn(false)}
            onClick={handleLogin}
          >
            Entrar
          </button>

          <p style={S.registerTxt}>
            Não tem conta?{" "}
            <Link to="/cadastro" style={S.registerLink}>Cadastre-se</Link>
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
    padding: "40px 44px",
    width: "100%",
    maxWidth: 400,
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
    height: 60,
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
    marginBottom: 28,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    textAlign: "left",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    fontSize: 13,
    color: "#8891bb",
  },
  inputWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(100,120,245,0.25)",
    borderRadius: 8,
    padding: "10px 14px",
  },
  input: {
    background: "none",
    border: "none",
    outline: "none",
    color: "#e8eaf6",
    fontFamily: "Lato, sans-serif",
    fontSize: 14,
    flex: 1,
  },
  eyeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  rowBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkLabel: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  forgotLink: {
    fontSize: 13,
    color: "#8891bb",
    textDecoration: "none",
  },
  loginBtn: {
    width: "100%",
    padding: 13,
    borderRadius: 8,
    border: "none",
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: "0.5px",
    transition: "background 0.2s",
  },
  registerTxt: {
    textAlign: "center",
    fontSize: 13,
    color: "#8891bb",
  },
  registerLink: {
    color: "#6478f5",
    fontWeight: 700,
    textDecoration: "none",
  },
};
