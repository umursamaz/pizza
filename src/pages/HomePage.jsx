import logo from '../../images/iteration-1-images/logo.svg';

export default function HomePage({ onOrderClick }) {
  return (
    <div className="home-page">
        <div className="home-content-wrapper">
            <header className="home-header">
                <img src={logo} alt="Teknolojik Yemekler" className="logo" />
            </header>
            
            <main className="home-content">
                <h1 data-mobile="KOD ACIKTIRIR PİZZA, DOYURUR">
                    <span className="desktop-only">KOD ACIKTIRIR</span>
                    <span className="desktop-only">PİZZA, DOYURUR</span>
                    <span className="mobile-only">KOD ACIKTIRIR PİZZA, DOYURUR</span>
                </h1>
                <button className="cta-button" onClick={onOrderClick}>
                ACIKTIM
                </button>
            </main>
        </div>
    </div>
  );
}