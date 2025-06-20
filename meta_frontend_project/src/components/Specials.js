import React from 'react';
import greekSaladImage from '../images/greek_salad.jpg';
import bruschettaImage from '../images/bruschetta.png';
import lemonTartImage from '../images/lemon_dessert.jpeg';

const menuItems = [
    { id: 1,
      name: 'Greek Salad',
      price: '$12.99',
      image: greekSaladImage,
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'},
    { id: 2, 
      name: 'Bruschetta',
      price: '$5.99',
      image: bruschettaImage,
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with diced tomatoes, basil, and a drizzle of balsamic glaze.'},
    { id: 3, 
        name: 'Lemon Tart', 
        price: '$4.99',
        image: lemonTartImage,
        description: 'A delightful lemon tart with a buttery crust, filled with a tangy lemon custard and topped with a light dusting of powdered sugar.'},
];
function Specials(){
    return (
        <div className="specials-container">
       <section className="specials-header">
        <h2>This Weeks Specials!</h2>
        <button className="online-menu">Online Menu</button>
       </section>
       <section>
        {menuItems.map(item => (
            <div key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-item-image" />
                <h3>{item.name}</h3>
                <span className="menu-item-price">{item.price}</span>
                <p>{item.description}</p>
                <span className="delivery">Order a delivery</span>
            </div>
        ))}
       </section>
        </div>
    );
}
export default Specials;