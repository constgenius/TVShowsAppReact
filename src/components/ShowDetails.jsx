import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookingForm from './BookingForm';
import './ShowDetails.css';
import image from "../assets/image.png"

const ShowDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [isBookingModalOpen, setBookingModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
                setShow(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [id]);

    const openBookingModal = () => {
        setBookingModalOpen(true);
    };

    const closeBookingModal = () => {
        setBookingModalOpen(false);
    };


    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div className="show-details-container">
            <div className="show-details-header">
                <h2>{show.name}</h2>
            </div>
            <div className="show-details-content">
                <div className="show-details-image">
                    <img
                        src={
                            show.image && show.image.original
                                ? show.image.original
                                : image
                        } alt={show.name} />
                </div>
                <div className="show-details-info">
                    <p className="info-item"><strong>Genres:</strong> {show.genres.join(', ')}</p>
                    <p className="info-item"><strong>Language:</strong> {show.language}</p>
                    <p className="info-item"><strong>Status:</strong> {show.status}</p>
                    <p className="info-item"><strong>Average Runtime:</strong> {show.averageRuntime} minutes</p>
                    <p className="info-item"><strong>Rating:</strong> {show.rating && show.rating.average}</p>
                    <p className="info-item"><strong>Premiered:</strong> {new Date(show.premiered).toLocaleDateString()}</p>
                    <p className="info-item"><strong>Ended:</strong> {new Date(show.ended).toLocaleDateString()}</p>
                    <a href={show.officialSite} target="_blank" rel="noopener noreferrer" className="official-site-link">Official Site</a>

                </div>
            </div>
            <div className="show-details-summary">
                <h2>Summary</h2>
                <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            </div>
            <button className="book-now-button" onClick={openBookingModal}>Book Now</button>
            {isBookingModalOpen && (
                <div className="booking-modal-overlay">
                    <div className="booking-modal">
                        <button className="close-modal" onClick={closeBookingModal}>&times;</button>

                        <BookingForm showName={show.name} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowDetails;
