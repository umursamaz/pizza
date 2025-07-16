import logo from '../../images/iteration-1-images/logo.svg';
import homeBanner from '../../images/iteration-1-images/home-banner.png';
import Hero from '../components/homeHero.jsx';
import '../cssFiles/Home.css';

export default function Home({ onOrderClick }) {
    return (
        <div className="home-page" style={{ backgroundImage: `url(${homeBanner})` }}>
            <Hero onOrderClick={onOrderClick} logo={logo}/>
        </div>
    );
}