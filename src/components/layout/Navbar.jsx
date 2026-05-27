import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredDropItem, setHoveredDropItem] = useState(null);

  const isAdmin = user?.role === "admin";

  const links = [
    { to: "/livros", label: "Livros" },
    { to: "/emprestimos", label: "Empréstimos" },
    { to: "/reservados", label: "Reservados" },
    ...(isAdmin ? [{ to: "/gerenciamento", label: "Gerenciamento" }] : []),
  ];

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav style={S.navbar}>
      <Link to="/principal" style={S.brand}>
        <img src="/logo-header.png" alt="BiblioSystem" style={S.logoImg} />
      </Link>

      <div style={S.links}>
        {links.map((l) => {
          const active = pathname === l.to;
          const hovered = hoveredLink === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              style={{
                ...S.link,
                color: active || hovered ? "#fff" : "#8891bb",
                borderBottom: active ? "2px solid #6478f5" : "2px solid transparent",
              }}
              onMouseEnter={() => setHoveredLink(l.to)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {l.label}
            </Link>
          );
        })}
      </div>

      <div style={S.userWrap}>
        <button
          style={S.userBtn}
          onClick={() => setDropdownOpen((o) => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="rgba(100,120,245,0.6)" strokeWidth="1.5" fill="rgba(59,79,212,0.2)" />
            <circle cx="14" cy="11" r="4" fill="rgba(100,120,245,0.8)" />
            <path d="M6 22c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(100,120,245,0.8)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 14, color: "#8891bb" }}>
            Olá, {isAdmin ? "Administrador!" : "Usuário!"}
          </span>
        </button>

        {dropdownOpen && (
          <div style={S.dropdown}>
            <Link
              to="/perfil"
              style={{
                ...S.dropItem,
                background: hoveredDropItem === "perfil" ? "rgba(100,120,245,0.12)" : "transparent",
              }}
              onMouseEnter={() => setHoveredDropItem("perfil")}
              onMouseLeave={() => setHoveredDropItem(null)}
              onClick={() => setDropdownOpen(false)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              Meu Perfil
            </Link>
            <div style={S.dropDivider} />
            <button
              style={{
                ...S.dropItem,
                ...S.dropLogout,
                background: hoveredDropItem === "sair" ? "rgba(239,68,68,0.1)" : "transparent",
              }}
              onMouseEnter={() => setHoveredDropItem("sair")}
              onMouseLeave={() => setHoveredDropItem(null)}
              onClick={handleLogout}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Sair da conta
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── Estilos ───────────────────────────────────────────────────────────────────
const S = {
  navbar: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    padding: "0 2rem",
    height: 64,
    background: "rgba(10,12,40,0.93)",
    borderBottom: "1px solid rgba(100,120,245,0.18)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    backdropFilter: "blur(14px)",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },
  logoImg: {
    height: 40,
    width: "auto",
    objectFit: "contain",
  },
  links: {
    display: "flex",
    gap: "2rem",
    marginLeft: "1.5rem",
  },
  link: {
    fontSize: 15,
    fontFamily: "Lato, sans-serif",
    fontWeight: 400,
    paddingBottom: 4,
    transition: "color 0.2s, border-bottom 0.2s",
    textDecoration: "none",
  },
  userWrap: {
    marginLeft: "auto",
    position: "relative",
  },
  userBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "6px 10px",
    borderRadius: 8,
    fontFamily: "Lato, sans-serif",
  },
  dropdown: {
    position: "absolute",
    right: 0,
    top: "calc(100% + 8px)",
    background: "rgba(14,17,55,0.98)",
    border: "1px solid rgba(100,120,245,0.18)",
    borderRadius: 10,
    minWidth: 180,
    boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
    overflow: "hidden",
    backdropFilter: "blur(16px)",
    animation: "none",
  },
  dropItem: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    padding: "11px 16px",
    fontSize: 14,
    color: "#e8eaf6",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontFamily: "Lato, sans-serif",
    width: "100%",
    textAlign: "left",
    textDecoration: "none",
    transition: "background 0.15s",
  },
  dropDivider: {
    height: 1,
    background: "rgba(100,120,245,0.18)",
  },
  dropLogout: {
    color: "#f87171",
  },
};
