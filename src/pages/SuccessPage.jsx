import logo from '../../images/iteration-1-images/logo.svg';

export default function SuccessPage({ onLogoClick }) {
    return (
        <div className="success-page">
            <header className="success-header">
                <img src={logo} alt="Teknolojik Yemekler" className="logo" onClick={onLogoClick} style={{ cursor: 'pointer' }}/>
            </header>

            <main className="success-content">
                <h1 className="desktop-only">TEBRİKLER!</h1>
                <h1 className="desktop-only">SİPARİŞİNİZ ALINDI!</h1>
                <h1 className="mobile-only">TEBRIKLER!</h1>
                <h1 className="mobile-only">SİPARİŞİNİZ</h1>
                <h1 className="mobile-only">ALINDI!</h1>
            </main>
        </div>
    );
}