import React from "react";
import "./Reviews.css";
import starImage from "/5-stars.png";

const Reviews = () => {
    const reviews = [
        {
            text: "Excelente tienda, encontré todo lo que necesitaba. La atención fue rápida y el producto llegó en perfecto estado.",
            author: "Juan Pérez",
        },
        {
            text: "Muy buen servicio. Me encantó la variedad de productos de tecnología y los precios competitivos.",
            author: "María López",
        },
        {
            text: "El sistema de compra es muy sencillo, y además, tienen un excelente servicio postventa.",
            author: "Carlos Ramírez",
        },
    ];

    return (
        <section className="reviews-section">
            <div className="container">
                <h2 className="section-title">Opiniones de nuestros clientes</h2>
                <div className="reviews">
                    {reviews.map((review, index) => (
                        <div className="review" key={index}>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-rating">
                                <img src={starImage} alt="5 estrellas" className="star-image" />
                            </div>
                            <p className="review-author">- {review.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
