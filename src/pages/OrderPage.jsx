import logo from '../../images/iteration-1-images/logo.svg';
import { useState } from 'react';

export default function OrderPage({ onSuccessClick, onLogoClick }) {
    const [selectedToppings, setSelectedToppings] = useState([]);
    const basePrice = 85.50;
    const toppingPrice = 5;
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedDough, setSelectedDough] = useState('');

    const handleToppingChange = (e) => {
        if (selectedToppings.includes(e)) {
            setSelectedToppings(selectedToppings.filter(t => t !== e));
        } else {
            if (selectedToppings.length < 10) {
            setSelectedToppings([...selectedToppings, e]);
            }
        }
    };

    const handleOrder = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Selected Size:', selectedSize);
    console.log('Selected Dough:', selectedDough);
    
    if (selectedSize === '') {
        alert('Lütfen bir boyut seçin.');
        return;
    }
    if (selectedDough === '') {
        alert('Lütfen hamur kalınlığını seçin.');
        return;
    }
    
    console.log('Validation passed, calling onSuccessClick');
    console.log('onSuccessClick type:', typeof onSuccessClick);
    onSuccessClick();
    }

    const toppingsTotal = selectedToppings.length * toppingPrice;
    const total = (basePrice + toppingsTotal) * quantity;


    return (
        <div className="order-page">
            <header className="order-header">
                <img src={logo} alt="Teknolojik Yemekler" className="logo" onClick={onLogoClick} style={{ cursor: 'pointer' }}/>
                <nav className="breadcrumb">Anasayfa &gt; <strong>Sipariş Oluştur</strong></nav>
            </header>

            <main className="order-content">
                <section className="product-info">
                    <h2>Position Absolute Acı Pizza</h2>
                    <div className="price-rating">
                        <span className="price">85.50₺</span>
                        <span className="rating">⭐ 4.9 (200)</span>
                    </div>
                    <p className="description">
                        Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
                    </p>
                </section>

                <form className="order-form" onSubmit={handleOrder}>

                    <div className="size-dough-container">
                        <fieldset>
                            <legend>Boyut Seç *</legend>
                            <label><input type="radio" name="size" value="kucuk" onChange={(e) => setSelectedSize(e.target.value)}/> Küçük</label>
                            <label><input type="radio" name="size" value="orta" onChange={(e) => setSelectedSize(e.target.value)}/> Orta</label>
                            <label><input type="radio" name="size" value="buyuk" onChange={(e) => setSelectedSize(e.target.value)}/> Büyük</label>
                        </fieldset>
                        
                        <fieldset>
                            <legend>Hamur Seç *</legend>
                            <select value={selectedDough} onChange={(e) => setSelectedDough(e.target.value)}>
                                <option value="">Hamur Kalınlığı</option>
                                <option value="ince">İnce</option>
                                <option value="orta">Orta</option>
                                <option value="kalin">Kalın</option>
                            </select>
                        </fieldset>
                    </div>

                    <fieldset className="malzeme-sec">
                        <legend>Ek Malzemeler</legend>
                        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                        <div className="malzeme-listesi">
                        <label><input type="checkbox" onChange={() => handleToppingChange('Pepperoni')} checked={selectedToppings.includes('Pepperoni')} value="Pepperoni"/> Pepperoni</label>
                        <label><input type="checkbox" onChange={() => handleToppingChange('Domates')} checked={selectedToppings.includes('Domates')} value="Domates"/> Domates</label>
                        <label><input type="checkbox" onChange={() => handleToppingChange('Biber')} checked={selectedToppings.includes('Biber')} value="Biber"/> Biber</label>
                        <label><input type="checkbox" onChange={() => handleToppingChange('Sosis')} checked={selectedToppings.includes('Sosis')} value="Sosis"/> Sosis</label>
                        <label><input type="checkbox" onChange={() => handleToppingChange('Mısır')} checked={selectedToppings.includes('Mısır')} value="Mısır"/> Mısır</label>
                        <label><input type="checkbox" onChange={() => handleToppingChange('Sucuk')} checked={selectedToppings.includes('Sucuk')} value="Sucuk"/> Sucuk</label>
                        <label><input type="checkbox" onChange={() => handleToppingChange('Kanada Jambonu')} checked={selectedToppings.includes('Kanada Jambonu')} value="Kanada Jambonu"/> Kanada Jambonu</label>
                        <label><input type="checkbox" onChange={() => handleToppingChange('Ananas')} checked={selectedToppings.includes('Ananas')} value="Ananas"/> Ananas</label>
                        <label><input type="checkbox" onChange={() => handleToppingChange('Tavuk Izgara')} checked={selectedToppings.includes('Tavuk Izgara')} value="Tavuk Izgara"/> Tavuk Izgara</label>
                        <label><input type="checkbox" onChange={() => handleToppingChange('Jalepeno')} checked={selectedToppings.includes('Jalepeno')} value="Jalepeno"/> Jalepeno</label>
                        <label><input type="checkbox" onChange={() => handleToppingChange('Kabak')} checked={selectedToppings.includes('Kabak')} value="Kabak"/> Kabak</label>
                        <label><input type="checkbox" onChange={() => handleToppingChange('Soğan')} checked={selectedToppings.includes('Soğan')} value="Soğan"/> Soğan</label>
                        <label><input type="checkbox" onChange={() => handleToppingChange('Sarımsak')} checked={selectedToppings.includes('Sarımsak')} value="Sarımsak"/> Sarımsak</label>
                        </div>
                    </fieldset>

                    <div className="desktop-only">
                        <label>
                            Sipariş Notu  
                            <input type="text" placeholder="Siparişine eklemek istediğin bir not var mı?" />
                        </label>

                        <div className="order-footer">
                            <div className="counter">
                            <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                            <span>{quantity}</span>
                            <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>

                            <div className="summary">
                            <p>Seçimler: <strong>{toppingsTotal.toFixed(2)}₺</strong></p>
                            <p className="toplam">Toplam: <strong>{total.toFixed(2)}₺</strong></p>
                            <button className="order-button" type="submit" >SİPARİŞ VER</button>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-only">
                        <label>
                            Sipariş Notu  
                            <input type="text" placeholder="Siparişine eklemek istediğin bir not var mı?" />
                        </label>

                        <div className="order-footer">

                            <div className="summary">
                                <p>Seçimler <strong>{toppingsTotal.toFixed(2)}₺</strong></p>
                                <p className="toplam">Toplam <strong>{total.toFixed(2)}₺</strong></p>
                            </div>
                            <div className="mobile-footer-actions">
                                <div className="counter">
                                    <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                    <span>{quantity}</span>
                                    <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>
                                <button className="order-button" type="submit" >SİPARİŞ VER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}
