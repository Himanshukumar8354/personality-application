import React, { useState } from 'react';
import './Feedback.css'; // Make sure to style using these class names

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() && rating > 0) {
      setSubmitted(true);
      // You can also send feedback and rating to backend here later
    } else {
      alert('Please provide both feedback and a rating!');
    }
  };

  const handleReset = () => {
    setFeedback('');
    setRating(0);
    setSubmitted(false);
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  return (
    <div className="feedback-container">
      <h1 className="feedback-title">Feedback</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="feedback-form">
          <label htmlFor="feedback-input" className="feedback-label">
            We’d love to hear your thoughts!
          </label>
          <textarea
            id="feedback-input"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
            rows="5"
            className="feedback-textarea"
          />

          <div className="feedback-rating">
            <p className="feedback-rating-label">Rate your experience:</p>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= rating ? 'star filled' : 'star'}
                  onClick={() => handleStarClick(star)}
                  style={{ cursor: 'pointer', fontSize: '24px', marginRight: '5px' }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <button type="submit" className="feedback-submit-button">
            Submit
          </button>
        </form>
      ) : (
        <div className="feedback-thankyou">
          <h2>🎉 Thank you for your feedback!</h2>
          <p className="feedback-response"><strong>Your feedback:</strong> {feedback}</p>
          <p className="feedback-response"><strong>Your rating:</strong> {rating} ⭐</p>
          <button className="feedback-reset-button" onClick={handleReset}>
            Send Another Feedback
          </button>
        </div>
      )}
    </div>
  );
};

export default Feedback;

