import React from 'react';
import CallToActionImage from '../images/header_image.jpg'; // Assuming you have an image for the call to action

function CallToAction() {
  return (
    <section className="cta-conatiner">
        <article className="cta-content">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className='cta-btn'>Reserve a Table</button>
        </article>
        <article>
          <img src={CallToActionImage} alt="Call to Action" className="cta-image" />
        </article>

    </section>
  );
}
export default CallToAction;