import '../cssFiles/homeHero.css';

export default function Hero({ onOrderClick, logo }) {
  return (
    <div className="hero">
      <img src={logo} alt="Teknolojik Yemekler" className="logo" />
      <main className="home-content">
        <h2 className="desktop-only">
          KOD ACIKTIRIR<br />
          PİZZA, DOYURUR
        </h2>
        <h2 className="mobile-only">
          KOD<br />
          ACIKTIRIR<br />
          PİZZA,<br />
          DOYURUR
        </h2>
      </main>
      <button className="cta-button" onClick={onOrderClick}>
        ACIKTIM
      </button>
    </div>
  );
}