export default function Hero({ title, subtitle = "Gerencie sua biblioteca com facilidade" }) {
  return (
    <div style={S.hero}>
      <div style={S.overlay} />
      <div style={S.content}>
        <h1 style={S.title}>{title}</h1>
        <p style={S.sub}>{subtitle}</p>
      </div>
    </div>
  );
}

// ─── Estilos ───────────────────────────────────────────────────────────────────
const S = {
  hero: {
    position: "relative",
    height: 220,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, rgba(8,10,42,0.45) 0%, rgba(8,10,42,0.72) 100%)",
  },
  content: {
    position: "relative",
    textAlign: "center",
  },
  title: {
    fontFamily: "Cinzel, serif",
    fontSize: "2.4rem",
    fontWeight: 700,
    color: "#fff",
    textShadow: "0 2px 24px rgba(0,0,40,0.8)",
    marginBottom: 8,
  },
  sub: {
    fontSize: "1rem",
    color: "rgba(230,235,255,0.8)",
    fontWeight: 300,
    letterSpacing: "0.5px",
    fontFamily: "Lato, sans-serif",
  },
};
