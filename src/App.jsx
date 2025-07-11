import { useState } from 'react';
import HomePage from './pages/HomePage.jsx';
import OrderPage from './pages/OrderPage.jsx';
import SuccessPage from './pages/SuccessPage.jsx';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const goToHome = () => setCurrentPage('home');
  return (
    <div className="App">
      {currentPage === 'home' && (
        <HomePage onOrderClick={() => setCurrentPage('order')} />
      )}
      {currentPage === 'order' && (
        <OrderPage 
          onSuccessClick={() => {
            console.log('Success click triggered in App.jsx');
            setCurrentPage('success')
          }} 
          onLogoClick={goToHome}/>
      )}
      {currentPage === 'success' && <SuccessPage onLogoClick={goToHome}/>}
    </div>
  );
}