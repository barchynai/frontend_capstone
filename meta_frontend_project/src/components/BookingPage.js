import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingPage.css';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.date) newErrors.date = 'Date is required.';
    if (!formData.time) newErrors.time = 'Time is required.';
    if (!formData.guests || formData.guests <= 0) newErrors.guests = 'Guests must be at least 1.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/confirmation', { state: formData });
    }
  };

  return (
    <div className="booking-container">
      <h1>Book Your Reservation</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="name-fields">
          <div>
            <label>First Name<span className="required">*</span></label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>
          <div>
            <label>Last Name<span className="required">*</span></label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>
        </div>

        <label>Choose Date<span className="required">*</span></label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <span className="error">{errors.date}</span>}

        <label>Choose Time<span className="required">*</span></label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        {errors.time && <span className="error">{errors.time}</span>}

        <label>Number of Guests<span className="required">*</span></label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
        />
        {errors.guests && <span className="error">{errors.guests}</span>}

        <label>Occasion</label>
        <select
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="">-- Select Occasion --</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="engagement">Engagement</option>
        </select>

        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default BookingPage;
