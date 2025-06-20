import React from 'react';
import restaurantImg from '../images/restaurant.interior.jpg';
import chefsImg from '../images/cooks.jpg';

function Chicago() {
  return (
    <section className="chicago-section">
      <div className="chicago-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon Chicago is a family owned Mediterranean restaurant located in the heart of the city. The restaurant is run by brothers Mario and Adrian, who have always had a passion for cooking and serving delicious food. Growing up in a Mediterranean household, the brothers were exposed to traditional recipes from an early age, and they decided to bring those recipes to the masses with a modern twist.
        </p>
        <p>
          At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that makes them stand out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.
        </p>
      </div>
      <div className="chicago-images">
        <img src={restaurantImg} alt="Restaurant Interior" className="image image-back" />
        <img src={chefsImg} alt="Chefs Cooking" className="image image-front" />
      </div>
    </section>
  );
}

export default Chicago;
