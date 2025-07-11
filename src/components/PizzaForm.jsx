import { useState } from 'react';

export default function PizzaForm() {
  const [formData, setFormData] = useState({
    isim: '',
    boyut: '',
    malzemeler: [],
    notlar: ''
  });

  return (
    <div className="pizza-form">
      <h2>Pizza Sipariş Formu</h2>
      <form>
        <div className="form-group">
          <label>İsim:</label>
          <input 
            type="text" 
            value={formData.isim}
            onChange={(e) => setFormData({...formData, isim: e.target.value})}
            placeholder="İsminizi girin (min 3 karakter)"
          />
        </div>
        
        <div className="form-group">
          <label>Pizza Boyutu:</label>
          <div className="radio-group">
            {['S', 'M', 'L', 'XL'].map(size => (
              <label key={size}>
                <input 
                  type="radio" 
                  name="boyut" 
                  value={size}
                  onChange={(e) => setFormData({...formData, boyut: e.target.value})}
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        <button type="submit">Sipariş Ver</button>
      </form>
    </div>
  );
}