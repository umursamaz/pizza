import logo from '../../images/iteration-1-images/logo.svg';
import { useState } from 'react';
import '../cssFiles/Order.css';
import axios from 'axios';

export default function Order({ onSuccessClick, onLogoClick }) {
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedDough, setSelectedDough] = useState('');
    const [orderNote, setOrderNote] = useState('');

    const basePrice = 85.50;
    const toppingPrice = 5;
    const toppings = ['Pepperoni','Domates', 'Biber', 'Sosis', 'Mısır', 'Sucuk', 'Kanada Jambonu', 'Ananas', 'Tavuk Izgara', 'Jalepeno', 'Kabak', 'Soğan', 'Sarımsak']
    const crustOptions = [ { value: '', label: 'Hamur Kalınlığı' }, { value: 'ince', label: 'İnce' }, { value: 'orta', label: 'Orta' }, { value: 'kalin', label: 'Kalın' }];
    
    const sendData = async (data) => {
        try {const response = await axios.post('https://reqres.in/api/pizza', data, {
                headers: {
                    'x-api-key': 'reqres-free-v1'
                }
            });
            // console.log('API Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    };
    const handleToppingChange = (e) => {
        if (selectedToppings.includes(e)) {
            setSelectedToppings(selectedToppings.filter(t => t !== e));
        } else {
            if (selectedToppings.length < 10) {
            setSelectedToppings([...selectedToppings, e]);
            }
        }
    };

    const handleOrder = async (e) => {
        e.preventDefault();
        
        if (selectedSize === '') {
            alert('Lütfen bir boyut seçin.');
            return;
        }
        if (selectedDough === '') {
            alert('Lütfen hamur kalınlığını seçin.');
            return;
        }
        if (selectedToppings.length < 4) {
            alert('En az 4 ek malzeme seçmelisiniz.');
            return;
        }
        if (selectedToppings.length > 10) {
            alert('En fazla 10 ek malzeme seçebilirsiniz.');
            return;
        }
        if (orderNote.trim().length < 3) {
            alert('İsminiz en az 3 karakter içermelidir.');
            return;
        }

        const orderData = {
            isim: orderNote,
            boyut: selectedSize,
            malzemeler: selectedToppings,
            hamur: selectedDough
        };
        try {
            const response = await sendData(orderData);
            console.log('Order sent successfully:', response);
            onSuccessClick();
        } catch (error) {
            console.error('Error sending order:', error);
            alert('An error occured.');
        }
    

        // if ((selectedSize === '') || 
        //     (selectedDough === '') || 
        //     (selectedToppings.length < 4) || 
        //     (selectedToppings.length > 10) || 
        //     (orderNote.trim().length < 3)) {
        //     onSuccessClick();
        // } else {
        //     return;
        // }
    }



    const toppingsTotal = selectedToppings.length * toppingPrice;
    const total = (basePrice + toppingsTotal) * quantity;


    const isFormValid = () => {
        return selectedSize !== '' && 
            selectedDough !== '' && 
            selectedToppings.length >= 4 && 
            selectedToppings.length <= 10 && 
            orderNote.trim().length >= 3;
    };  

    return (
        <div className="order-page">
            <header className="order-header">
                <img src={logo} alt="Teknolojik Yemekler" className="logo" onClick={onLogoClick} style={{ cursor: 'pointer' }}/>
                <nav className="breadcrumb">Anasayfa - <strong>Sipariş Oluştur</strong></nav>
            </header>

            <main className="order-content">
                <section className="product-info">
                    <h2>Position Absolute Acı Pizza</h2>
                    <div className="price-rating">
                        <span className="price">85.50₺</span>
                        <div className="rating">
                            <span className="rating-score">⭐ 4.9</span>
                            <span className="rating-count">(200)</span>
                        </div>
                    </div>
                </section>

                <form className="order-form" onSubmit={handleOrder}>
                    <p className="description">
                        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
                    </p>
                    <div className="size-dough-container">
                        <div className="size-container">
                            <legend>Boyut Seç <span className="required">*</span></legend>
                            <fieldset>
                                <label><input type="radio" name="size" value="kucuk" onChange={(e) => setSelectedSize(e.target.value)}/> Küçük</label>
                                <label><input type="radio" name="size" value="orta" onChange={(e) => setSelectedSize(e.target.value)}/> Orta</label>
                                <label><input type="radio" name="size" value="buyuk" onChange={(e) => setSelectedSize(e.target.value)}/> Büyük</label>
                            </fieldset>
                        </div>
                        <div className="dough-container">
                            <legend>Hamur Seç <span className="required">*</span></legend>
                            <select value={selectedDough} onChange={(e) => setSelectedDough(e.target.value)}>
                                {crustOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="toppings-info">
                        <legend>Ek Malzemeler</legend>
                        <p>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    </div>
                    <fieldset className="toppings-selection">
                        <div className="toppings-list">
                            {toppings.map((topping) => (
                                <label key={topping}>
                                    <input 
                                        type="checkbox" 
                                        onChange={() => handleToppingChange(topping)} 
                                        checked={selectedToppings.includes(topping)} 
                                        value={topping}
                                    /> 
                                    {topping}
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <div className="desktop-only">
                        <div className="order-note">
                            <legend>Sipariş Notu</legend>  
                            <input 
                                type="text" 
                                placeholder="Siparişine eklemek istediğin bir not var mı?" 
                                value={orderNote}
                                onChange={(e) => setOrderNote(e.target.value)}
                            />
                        </div>

                        <div className="order-footer">
                            <div className="counter">
                                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                <span>{quantity}</span>
                                <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>

                            <div className="summary">
                                <h2>Sipariş Toplamı</h2>
                                <p style={{color:"#5F5F5F"}}>Seçimler: <strong>{toppingsTotal.toFixed(2)}₺</strong></p>
                                <p style={{color:"#CE2829"}}>Toplam: <strong>{total.toFixed(2)}₺</strong></p>
                                <button 
                                    className="order-button" 
                                    type="submit"
                                    disabled={!isFormValid()}>
                                    SİPARİŞ VER
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-only">
                        <div className="order-note">
                            <legend>Sipariş Notu</legend>  
                            <input 
                                type="text" 
                                placeholder="Siparişine eklemek istediğin bir not var mı?"
                                value={orderNote}
                                onChange={(e) => setOrderNote(e.target.value)}
                            />
                        </div>

                        <div className="order-footer">
                            <div className="summary">
                                <h2>Sipariş Toplamı</h2>
                                <p>Seçimler <strong>{toppingsTotal.toFixed(2)}₺</strong></p>
                                <p className="summation">Toplam <strong>{total.toFixed(2)}₺</strong></p>
                            </div>
                            <div className="mobile-footer-actions">
                                <div className="counter">
                                    <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                    <span>{quantity}</span>
                                    <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>
                                <button 
                                    className="order-button" 
                                    type="submit"
                                    disabled={!isFormValid()}>
                                    SİPARİŞ VER
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}
