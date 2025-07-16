import logo from '../../images/iteration-1-images/logo.svg';
import '../cssFiles/Success.css';

export default function Success({ onLogoClick }) {
    return (
        <div className="success-page">
            <img src={logo} alt="Teknolojik Yemekler" className="logo" onClick={onLogoClick} style={{ cursor: 'pointer' }}/>

            <main className="success-content">
                <h1 className="desktop-only">
                    TEBRİKLER!<br />
                    SİPARİŞİNİZ ALINDI!
                </h1>
                <h1 className="mobile-only">
                    TEBRIKLER!<br />
                    SİPARİŞİNİZ<br />
                    ALINDI!
                </h1>
            </main>
        </div>
    );
}