import { useState } from 'react';

function FeedBack() {
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState([
    {
      name: 'Shobhith. S',
      date: 'Jan 01, 2024',
      text: 'Excellent teachers...',
      rating: 5,
    },
  ]);
  const [rating, setRating] = useState(0);

  const handleNewReviewChange = (event) => {
    setNewReview(event.target.value);
  };

  const handleAddReview = () => {
    setReviews([...reviews, { name: '', date: new Date().toLocaleDateString(), text: newReview, rating }]);
    setNewReview('');
    setRating(0);
  };

  const handleRatingHover = (newRating) => {
    setRating(newRating);
  };

  const handleRatingClick = (newRating) => {
    setReviews(
      reviews.map((review) => (review.date === new Date().toLocaleDateString() ? { ...review, rating: newRating } : review))
    );
  };

  return (
    <div className="container mt-10 mb-10">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="review-container bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-center mb-4">Customer Review and Ratings</h3>
            {reviews.map((review, index) => (
              <div className="review p-4 mb-4 border border-gray-200 rounded-lg" key={index}>
                <div className='flex justify-between'>
                  <p className="reviewer-name font-medium text-gray-800">{review.name}</p>
                  <div className="review-rating">
                    {[...Array(5)].map((star, index) => {
                      const starRating = index + 1;
                      return (
                        <span
                          key={starRating}
                          className={`star cursor-pointer ${
                            starRating <= review.rating || starRating <= rating ? 'text-yellow-500' : 'text-gray-300'
                          }`}
                          onMouseEnter={() => handleRatingHover(starRating)}
                          onClick={() => handleRatingClick(starRating)}
                        >
                          ★
                        </span>
                      );
                    })}
                  </div>
                </div>
                <p className="review-date text-gray-600 text-sm font-mono">{review.date}</p>
                <p className="review-text text-gray-700">{review.text}</p>
              </div>
            ))}
            <div className="add-review flex flex-col gap-2">
              <textarea
                value={newReview}
                onChange={handleNewReviewChange}
                placeholder="Add a review"
                className="p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
              />
              <div className="add-review-rating flex items-center">
                <p className="text-gray-700 mr-2">Your Rating:</p>
                {[...Array(5)].map((star, index) => {
                  const starRating = index + 1;
                  return (
                    <span
                      key={starRating}
                      className={`star cursor-pointer ${starRating <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      onMouseEnter={() => handleRatingHover(starRating)}
                      onClick={handleAddReview} // Removed handleAddReview() from here
                    >
                      ★
                    </span>
                  );
                })}
              </div>
              <button onClick={handleAddReview} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Add Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;



