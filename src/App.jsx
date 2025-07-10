import { useState } from 'react';
import HomePage from './pages/HomePage.jsx';
// import OrderPage from './pages/OrderPage.jsx';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      {currentPage === 'home' && (
        <HomePage onOrderClick={() => setCurrentPage('order')} />
      )}
      {currentPage === 'order' && (

        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h1>Sipariş Sayfası</h1>
          <p>Henüz hazır değil</p>
          <button onClick={() => setCurrentPage('home')}>Geri Dön</button>
        </div>
        // <OrderPage />
      )}
    </div>
  );
}