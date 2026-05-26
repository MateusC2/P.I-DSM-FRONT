import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const links = [
    { to: "/livros", label: "Livros" },
    { to: "/emprestimos", label: "Empréstimos" },
    { to: "/reservados", label: "Reservados" },
  ];

  return (
    <>
      <nav className="navbar">
        <Link to="/principal" className="navbar-brand">
          <img src="/logo-header.png" alt="BiblioSystem" className="navbar-logo-img" />
        </Link>
        <div className="navbar-links">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`navbar-link ${pathname === l.to ? "active" : ""}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="navbar-user">
          <button className="user-btn" onClick={() => setDropdownOpen(o => !o)}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="rgba(100,120,245,0.6)" strokeWidth="1.5" fill="rgba(59,79,212,0.2)"/>
              <circle cx="14" cy="11" r="4" fill="rgba(100,120,245,0.8)"/>
              <path d="M6 22c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(100,120,245,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>Olá, Usuário!</span>
          </button>
          {dropdownOpen && (
            <div className="user-dropdown">
              <Link to="/perfil" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                Meu Perfil
              </Link>
              <div className="dropdown-divider" />
              <button className="dropdown-item dropdown-logout" onClick={() => { setDropdownOpen(false); navigate("/login"); }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                Sair da conta
              </button>
            </div>
          )}
        </div>
      </nav>
      <style>{navbarStyles}</style>
    </>
  );
}

const navbarStyles = `
.navbar {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  height: 64px;
  background: rgba(10, 12, 40, 0.92);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(14px);
}

.navbar-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.navbar-logo-img {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.navbar-links {
  display: flex;
  gap: 2rem;
  margin-left: 2rem;
}

.navbar-link {
  font-size: 0.95rem;
  color: var(--text-muted);
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  font-weight: 400;
}
.navbar-link:hover,
.navbar-link.active {
  color: #fff;
  border-bottom-color: var(--blue-light);
}

.navbar-user {
  margin-left: auto;
  position: relative;
}

.user-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  font-family: var(--font-body);
  font-size: 0.9rem;
  padding: 6px 10px;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
}
.user-btn:hover {
  background: rgba(100,120,245,0.12);
  color: var(--text-main);
}

.user-dropdown {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  background: rgba(14,17,55,0.98);
  border: 1px solid var(--border);
  border-radius: 10px;
  min-width: 180px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.5);
  overflow: hidden;
  backdrop-filter: blur(16px);
  animation: dropIn 0.15s ease;
}

@keyframes dropIn {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 11px 16px;
  font-size: 0.88rem;
  color: var(--text-main);
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  width: 100%;
  text-align: left;
  transition: background 0.15s;
  text-decoration: none;
}
.dropdown-item:hover { background: rgba(100,120,245,0.12); }

.dropdown-divider { height: 1px; background: var(--border); }

.dropdown-logout { color: #f87171; }
.dropdown-logout:hover { background: rgba(239,68,68,0.1); }
`;
