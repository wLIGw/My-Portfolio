import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../../hooks/useReveal";
import ruReviews from "../../data/ru/reviews_ru.json";
import enReviews from "../../data/en/reviews_en.json";
import "./style.scss";

const getAvatarColor = (name) => {
  const colors = [
    "#FF6B6B",
    "#6BCB77",
    "#4D96FF",
    "#FFD93D",
    "#845EC2",
    "#FF9671",
    "#00C9A7",
  ];

  const charCode = name.charCodeAt(0);
  return colors[charCode % colors.length];
};

const Reviews = () => {
  const { i18n } = useTranslation();
  const [reviews, setReviews] = useState([]);
  const containerRef = useReveal();

  useEffect(() => {
    if (i18n.language === "en") {
      setReviews(enReviews);
    } else {
      setReviews(ruReviews);
    }
  }, [i18n.language]);

  return (
    <div ref={containerRef} className="reviews-container reveal-up">
      {reviews.map((review, index) => {
        const hasAvatar = review.avatar && review.avatar.trim() !== "";
        const firstLetter = review.name.charAt(0).toUpperCase();

        return (
          <div
            key={index}
            className="review-card"
            style={{ "--delay": `${index * 0.12}s` }}
          >
            {/* Аватар */}
            {hasAvatar ? (
              <img
                src={review.avatar}
                alt={review.name}
                className="review-avatar"
              />
            ) : (
              <div
                className="review-avatar placeholder"
                style={{ backgroundColor: getAvatarColor(review.name) }}
              >
                {firstLetter}
              </div>
            )}

            {/* Контент */}
            <div className="review-content">
              <h3>{review.name}</h3>
              <div className="review-rating">★★★★★</div>
              <p>{review.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
