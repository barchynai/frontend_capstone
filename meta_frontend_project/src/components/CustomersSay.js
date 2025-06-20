import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Sara Lopez',
    username: 'Sara72',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    comment: "Seriously cannot stop thinking about the Turkish Mac n' Cheese!"
  },
  {
    id: 2,
    name: 'John Doucette',
    username: 'Johnny_Utah',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
    comment: "We had such a great time celebrating my grandmother's birthday!"
  },
  {
    id: 3,
    name: 'Jimmy Crickets',
    username: 'crick_it',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    rating: 5,
    comment: "Such a chilled out atmosphere, love it!"
  },
  {
    id: 4,
    name: 'Mia Maria',
    username: 'flowerTime',
    avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
    rating: 4,
    comment: "Best Feta Salad in town. Flawless every time!"
  }
];

function CustomersSay() {
  return (
    <div className="customers-container">
      <h2>What do our customers think?</h2>
      <div className="reviews-grid">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <img src={review.avatar} alt={review.name} className="avatar" />
              <div>
                <h4>{review.name}</h4>
                <p className="username">{review.username}</p>
              </div>
            </div>
            <div className="stars">
              {Array(review.rating).fill('⭐️').map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            </div>
            <p className="comment">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomersSay;
