import homeBanner from '../../images/iteration-1-images/home-banner.png';
import logo from '../../images/iteration-1-images/logo.svg';

export default function Hero({ onOrderClick }) {
  return (
    <div className="hero-section">
        <div className="hero-background">
            <img src={homeBanner} alt="Pizza background" className="background-image" />
        </div>
        <div className="hero-logo">
            <img src={logo} alt="Teknolojik Yemekler Logo" className="logo-image" />
        </div>
            <div className="hero-content">
            <h1>Teknolojik Yemekler</h1>
            <p>KOD ACIKTIRIR</p>
            <p>PİZZA DOYURUR</p>
            <button className="order-button" onClick={onOrderClick}>
            ACIKTIM
            </button>
        </div>
    </div>
  );
}