import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state;

  if (!booking) {
    return (
      <div className="confirmation-container">
        <h2>No booking information found.</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <h1>Reservation Confirmed!</h1>
      <p>Thank you for your reservation, <strong>{booking.firstName} {booking.lastName}</strong>.</p>
      <div className="details-box">
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Time:</strong> {booking.time}</p>
        <p><strong>Number of Guests:</strong> {booking.guests}</p>
        {booking.occasion && <p><strong>Occasion:</strong> {booking.occasion}</p>}
      </div>
      <button onClick={() => navigate('/')}>Make Another Reservation</button>
    </div>
  );
};

export default ConfirmationPage;
