import { useState } from 'react';
import SuccessPage from './pages/SuccessPage.jsx';
import Home from './pages/Home.jsx';
import Order from './pages/Order.jsx';
// import Success from './pages/Success.jsx';

import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const goToHome = () => setCurrentPage('home');
  return (
    <div className="App">
      {currentPage === 'home' && (
        <Home onOrderClick={() => setCurrentPage('order')} />
      )}
      {currentPage === 'order' && (
        <Order 
          onSuccessClick={() => { setCurrentPage('success') }} 
          onLogoClick={goToHome}
        />
      )}
      {currentPage === 'success' && <SuccessPage onLogoClick={goToHome}/>}
    </div>
  );
}