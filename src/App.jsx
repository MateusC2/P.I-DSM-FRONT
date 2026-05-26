import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Principal from "./pages/Principal";
import Emprestimos from "./pages/Emprestimos";
import Reservados from "./pages/Reservados";
import Livros from "./pages/Livros";
import Perfil from "./pages/Perfil";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/emprestimos" element={<Emprestimos />} />
          <Route path="/reservados" element={<Reservados />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
      <style>{globalStyles}</style>
    </>
  );
}

const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --navy: #0d0f2b;
  --navy-mid: #141740;
  --navy-card: rgba(10,14,50,0.88);
  --blue-accent: #3b4fd4;
  --blue-light: #6478f5;
  --gold: #f0c040;
  --green: #22c55e;
  --red-badge: #ef4444;
  --yellow-badge: #f59e0b;
  --purple-badge: #a855f7;
  --text-main: #e8eaf6;
  --text-muted: #8891bb;
  --border: rgba(100,120,245,0.18);
  --font-display: 'Cinzel', serif;
  --font-body: 'Lato', sans-serif;
}

html, body, #root {
  min-height: 100vh;
  font-family: var(--font-body);
  color: var(--text-main);
  background: var(--navy);
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--navy); }
::-webkit-scrollbar-thumb { background: var(--blue-accent); border-radius: 3px; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 700;
  transition: all 0.2s;
}
.btn-primary { background: var(--blue-accent); color: #fff; }
.btn-primary:hover { background: var(--blue-light); }
.btn-outline { background: transparent; border: 1px solid var(--blue-light); color: var(--blue-light); }
.btn-outline:hover { background: rgba(100,120,245,0.15); }

.badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
}
.badge-green { background: var(--green); color: #052e16; }
.badge-red { background: var(--red-badge); color: #fff; }
.badge-yellow { background: var(--yellow-badge); color: #1c0a00; }
.badge-purple { background: var(--purple-badge); color: #fff; }
.badge-blue { background: var(--blue-accent); color: #fff; }

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url('/fundo.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/fundo.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.login-card {
  background: rgba(10, 14, 55, 0.9);
  border: 1px solid rgba(100,120,245,0.25);
  border-radius: 20px;
  padding: 40px 44px;
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
  text-align: center;
}

.login-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.login-logo-img {
  height: 60px;
  width: auto;
  object-fit: contain;
}

.login-divider {
  color: var(--blue-light);
  margin: 8px 0;
  display: flex;
  align-items: center;
  gap: 12px;
}
.login-divider::before, .login-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(100,120,245,0.3);
}

.login-subtitle {
  color: var(--text-muted);
  font-size: 0.88rem;
  margin-bottom: 28px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: left;
}

.input-group { display: flex; flex-direction: column; gap: 6px; }
.input-group label { font-size: 0.82rem; color: var(--text-muted); }

.input-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(100,120,245,0.25);
  border-radius: 8px;
  padding: 10px 14px;
  transition: border-color 0.2s;
}
.input-wrap:focus-within { border-color: var(--blue-light); }
.input-wrap svg { color: var(--text-muted); flex-shrink: 0; }
.input-wrap input {
  background: none;
  border: none;
  outline: none;
  color: var(--text-main);
  font-family: var(--font-body);
  font-size: 0.9rem;
  flex: 1;
}
.input-wrap input::placeholder { color: var(--text-muted); font-size: 0.85rem; }

.eye-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  padding: 0;
  display: flex;
}
.eye-btn:hover { color: var(--text-main); }

.login-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.83rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  cursor: pointer;
}
.checkbox-label input { accent-color: var(--blue-accent); }

.forgot-link { color: var(--text-muted); font-size: 0.83rem; }
.forgot-link:hover { color: var(--blue-light); }

.login-btn {
  width: 100%;
  padding: 13px;
  border-radius: 8px;
  border: none;
  background: var(--blue-accent);
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  letter-spacing: 0.5px;
}
.login-btn:hover { background: var(--blue-light); }

.register-link {
  text-align: center;
  font-size: 0.83rem;
  color: var(--text-muted);
}
.register-link a { color: var(--blue-light); font-weight: 700; }
.register-link a:hover { text-decoration: underline; }

.card-panel {
  background: rgba(10,14,50,0.88);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px;
  backdrop-filter: blur(12px);
}

.panel-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 12px;
}

.divider { height: 1px; background: var(--border); margin-bottom: 16px; }

.panel-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.ver-link { font-size: 0.8rem; color: var(--blue-light); }
.ver-link:hover { text-decoration: underline; }

.notif-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}
.notif-item:last-child { border-bottom: none; }

.notif-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}
.notif-warn { background: rgba(245,158,11,0.2); }
.notif-info { background: rgba(59,130,246,0.2); }
.notif-event { background: rgba(168,85,247,0.2); }

.notif-msg { font-size: 0.82rem; color: var(--text-main); line-height: 1.4; margin-bottom: 4px; }
.notif-tempo { font-size: 0.73rem; color: var(--text-muted); }

.table-wrap { overflow-x: auto; }
.bi-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.bi-table thead tr { background: rgba(59,79,212,0.35); }
.bi-table th { padding: 12px 16px; text-align: left; font-size: 0.82rem; font-weight: 700; color: var(--text-main); }
.bi-table td { padding: 14px 16px; border-bottom: 1px solid var(--border); color: var(--text-main); vertical-align: middle; }
.bi-table tr:last-child td { border-bottom: none; }

.book-cell { display: flex; align-items: center; gap: 10px; }
.book-mini-cover { width: 38px; height: 52px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }

.resumo-item { display: flex; align-items: center; gap: 12px; padding: 14px 0; border-bottom: 1px solid var(--border); }
.resumo-item:last-of-type { border-bottom: none; }
.resumo-icon { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
.icon-blue { background: rgba(59,79,212,0.25); }
.icon-red { background: rgba(239,68,68,0.2); }
.icon-green { background: rgba(34,197,94,0.2); }
.icon-yellow { background: rgba(245,158,11,0.2); }
.icon-purple { background: rgba(168,85,247,0.2); }
.resumo-label { font-size: 0.85rem; font-weight: 700; color: var(--text-main); }
.resumo-valor { font-size: 0.78rem; color: var(--text-muted); margin-top: 2px; }
`;
