
import  { useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel, Modal } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, rating: 4, comment: "Great service!" },
    { id: 2, rating: 3, comment: "Could be better." },
    // Add more feedbacks as needed
  ]);

  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    const newFeedback = {
      id: feedbacks.length + 1,
      rating: rating,
      comment: comment,
    };
    setFeedbacks([...feedbacks, newFeedback]);
    setShowModal(false);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i < rating ? '#ffc107' : '#e4e5e9'}
          onClick={() => handleRatingChange(i + 1)}
          style={{ cursor: 'pointer' }}
        />
      );
    }
    return stars;
  };

  return (
    <div className="container mt-5">
      <h1>Feedback</h1>
      <Button variant="primary" onClick={() => setShowModal(true)} className='bg-primary'>
        Leave Feedback
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Leave Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup className="flex" >
              <FormLabel >Rating : </FormLabel>
              <div className="flex space-x-2 mt-1 pl-5">{renderStars(rating)}</div>
            </FormGroup>
            <FormGroup>
              <FormLabel>Comment</FormLabel>
              <FormControl as="textarea" rows={3} value={comment} onChange={handleCommentChange} />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)} className='bg-secondary'>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} className='bg-primary'>
            Submit Feedback
          </Button>
        </Modal.Footer>
      </Modal>

      <h2>All Feedback</h2>
      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="mb-3">
          <h4>
            {feedback.comment}{' '}
            <span className=" pl-5 flex ">{renderStars(feedback.rating)}</span>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
