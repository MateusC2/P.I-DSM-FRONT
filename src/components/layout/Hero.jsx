export default function Hero({ title, subtitle }) {
  return (
    <>
      <div className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-sub">{subtitle || "Gerencie sua biblioteca com facilidade"}</p>
        </div>
      </div>
      <style>{heroStyles}</style>
    </>
  );
}

const heroStyles = `
.hero {
  position: relative;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(8,10,42,0.45) 0%,
    rgba(8,10,42,0.72) 100%
  );
}

.hero-content {
  position: relative;
  text-align: center;
}

.hero-title {
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 24px rgba(0,0,40,0.8);
  margin-bottom: 8px;
}

.hero-sub {
  font-size: 1rem;
  color: rgba(230,235,255,0.8);
  font-weight: 300;
  letter-spacing: 0.5px;
}
`;
