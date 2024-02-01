// BookingForm.jsx
import React, { useState } from 'react';
import './BookingForm.css'; // Import your CSS for BookingForm styling
import { useLocalStorage } from '../hooks/useLocalStorage';

const BookingForm = ({ showName }) => {
    const [formData, setFormData] = useLocalStorage("formdata", {
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (you can store data in local/session storage here)
    };

    return (
        <div className="booking-form-container">
            <h2>Book Tickets for {showName}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <button type="submit" className="book-now-button">Book Now</button>
            </form>
        </div>
    );
};

export default BookingForm;
