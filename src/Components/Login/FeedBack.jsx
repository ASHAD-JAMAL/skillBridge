// import  { useState } from 'react';
// import { Button, Form, FormControl, FormGroup, FormLabel, Modal } from 'react-bootstrap';
// import { FaStar } from 'react-icons/fa';

// const Feedback = () => {
//   const [feedbacks, setFeedbacks] = useState([
//     { id: 1, username: "User1", rating: 4, comment: "Great service!" },
//     { id: 2, username: "User2", rating: 3, comment: "Could be better." },
//     // Add more feedbacks as needed
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');
// const [username, setUsername] = useState('');

//   const handleRatingChange = (value) => {
//     setRating(value);
//   };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };
//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleSubmit = () => {
//     const newFeedback = {
//       id: feedbacks.length + 1,
//       username: username,
//       rating: rating,
//       comment: comment,
//     };
//     setFeedbacks([...feedbacks, newFeedback]);
//     setShowModal(false);
//   };

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <FaStar
//           key={i}
//           color={i < rating ? '#ffc107' : '#e4e5e9'}
//           onClick={() => handleRatingChange(i + 1)}
//           style={{ cursor: 'pointer' }}
//         />
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="container mt-5 text-center justify-center items-center h-auto">
//       <h1 className='text-3xl py-10'>Write your experience and Rate it</h1>
//       <Button variant="primary" onClick={() => setShowModal(true)} className='bg-primary'>
//         Leave Feedback
//       </Button>

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Leave  Feedback</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//           <Form className='d-flex justify-content-center align-items-center'>
//           <FormGroup>
//               <FormLabel>Username</FormLabel>
//               <FormControl type="text" value={username} onChange={handleUsernameChange} />
//             </FormGroup>
//             <FormGroup className="flex " >
//               <FormLabel >Rating : </FormLabel>
//               <div className="flex space-x-2 mt-1 pl-5 align-middle">{renderStars(rating)}</div>
//             </FormGroup>
//             <FormGroup>
//               <FormLabel>Comment</FormLabel>
//               <FormControl as="textarea" rows={3} value={comment} onChange={handleCommentChange} />
//             </FormGroup>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)} className='bg-secondary'>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmit} className='bg-primary'>
//             Submit Feedback
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <h2>All Feedback</h2>
//       {feedbacks.map((feedback) => (
//         <div key={feedback.id} className="mb-3">
//           <h4>
//             {feedback.comment}{' '}
//             <span className=" pl-5 flex ">{renderStars(feedback.rating)}</span>
//           </h4>
//           <p>Rated by: {feedback.username}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Feedback;

import  { useState } from 'react';

function FeedBack() {
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState([
    {
      name: 'Shobhith. S',
      date: 'Jan 01, 2024',
      text: 'Excellent teachers...',
      rating: 5, // Add rating property to each review object
    },
  ]);
  const [rating, setRating] = useState(0); // State for hover/selected rating

  const handleNewReviewChange = (event) => {
    setNewReview(event.target.value);
  };

  const handleAddReview = () => {
    setReviews([...reviews, { name: '', date: new Date().toLocaleDateString(), text: newReview, rating }]);
    setNewReview('');
    setRating(0); // Reset rating after adding review
  };

  const handleRatingHover = (newRating) => {
    setRating(newRating);
  };

  const handleRatingClick = (newRating) => {
    setReviews(
      reviews.map((review) => (review.date === new Date().toLocaleDateString() ? { ...review, rating: newRating } : review))
    );
  };

// seconds parts

  return (
    <div className="review-container bg-gray-100 p-24 px-80 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-center mb-4">Customer Review and Ratings</h3>
      {reviews.map((review) => (
        <div className="review p-4 mb-4 border border-gray-200 rounded-lg " key={review.date}>
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
                onClick={() => handleAddReview()} // Add review on click here
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
  );
}

export default FeedBack;

// thirds Parts

// import { useState, useEffect } from "react";

// function FeedBack() {
//   const [newReview, setNewReview] = useState("");
//   const [reviews, setReviews] = useState([]); // Initially empty
//   const [rating, setRating] = useState(0); // State for hover/selected rating
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for authentication state

//   const fetchReviews = async () => {
//     try {
//       const response = await fetch("/api/reviews", {
//         // Replace with your endpoint URL
//         method: "GET", // Assuming GET for fetching reviews
//       });
//       const data = await response.json();
//       setReviews(data); // Update reviews state with fetched data
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     }
//   };

//   useEffect(() => {
//     fetchReviews(); // Fetch reviews on component mount
//   }, []); // Empty dependency array to run only once on mount

//   const handleNewReviewChange = (event) => {
//     setNewReview(event.target.value);
//   };

//   const handleAddReview = async () => {
//     if (!isLoggedIn) {
//       alert("Please log in to leave a review."); // Handle non-logged in users
//       return;
//     }

//     try {
//       const response = await fetch("/api/reviews", {
//         // Replace with your endpoint URL
//         method: "POST", // Assuming POST for adding reviews
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token-based auth (replace with your logic)
//         },
//         body: JSON.stringify({ text: newReview, rating }), // Send review data
//       });

//       if (response.ok) {
//         const newReviewData = await response.json();
//         setReviews([...reviews, newReviewData]); // Add new review to state
//         setNewReview("");
//         setRating(0);
//       } else {
//         console.error("Error adding review:", await response.text());
//         // Handle error (e.g., display an error message)
//       }
//     } catch (error) {
//       console.error("Error adding review:", error);
//       // Handle error (e.g., display an error message)
//     }
//   };

//   const handleRatingHover = (newRating) => {
//     setRating(newRating);
//   };

//   const handleRatingClick = (newRating) => {
//     setReviews(
//       reviews.map((review) =>
//         review.date === new Date().toLocaleDateString()
//           ? { ...review, rating: newRating }
//           : review
//       )
//     );
//   };

//   return (
//     <div className="review-container bg-gray-100 p-24 px-80 rounded-lg shadow-md">
//       <h3 className="text-xl font-bold text-center mb-4">
//         Customer Review and Ratings
//       </h3>
//       {reviews.map((review) => (
//         <div
//           className="review p-4 mb-4 border border-gray-200 rounded-lg "
//           key={review.date}
//         >
//           <div className="flex justify-between">
//             <p className="reviewer-name font-medium text-gray-800">
//               {review.name}
//             </p>
//             <div className="review-rating">
//               {[...Array(5)].map((star, index) => {
//                 const starRating = index + 1;
//                 return (
//                   <span
//                     key={starRating}
//                     className={`star cursor-pointer ${
//                       starRating <= review.rating || starRating <= rating
//                         ? "text-yellow-500"
//                         : "text-gray-300"
//                     }`}
//                     onMouseEnter={() => handleRatingHover(starRating)}
//                     onClick={() => handleRatingClick(starRating)}
//                   >
//                     ★
//                   </span>
//                 );
//               })}
//             </div>
//           </div>
//           <p className="review-date text-gray-600 text-sm font-mono">
//             {review.date}
//           </p>
//           <p className="review-text text-gray-700">{review.text}</p>
//         </div>
//       ))}
//       <div className="add-review flex flex-col gap-2">
//         {!isLoggedIn && (
//           <p className="text-gray-700 mb-2">
//             Please{" "}
//             <a href="/login" className="text-blue-500">
//               log in
//             </a>{" "}
//             to leave a review.
//           </p>
//         )}
//         <textarea
//           className="border border-gray-300 p-2 rounded-md"
//           placeholder="Write your review here..."
//           value={newReview}
//           onChange={handleNewReviewChange}
//         ></textarea>
//         <div className="flex items-center gap-2 justify-between">
//           <div>
//           {[...Array(5)].map((star, index) => {
//             const starRating = index + 1;
//             return (
//               <span
//                 key={starRating}
//                 className={`star cursor-pointer text-2xl ${
//                   starRating <= rating ? "text-yellow-500" : "text-gray-300"
//                 }`}
//                 onMouseEnter={() => handleRatingHover(starRating)}
//                 onClick={() => handleRatingClick(starRating)}
//               >
//                 ★
//               </span>
//             );
//           })}
//           </div>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//             onClick={handleAddReview}
//           >
//             Add Review
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FeedBack;
