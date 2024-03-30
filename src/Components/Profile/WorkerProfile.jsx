import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import '../../App.css'; // Your custom CSS file for additional styling

const WorkerProfile = () => {
    // Sample data for the worker
    const worker = {
        name: 'John Doe',
        location: 'New York, NY',
        ratings: 4.5,
        profession: 'Plumber',
        skills: ['Pipe Fitting', 'Leak Repair', 'Fixture Installation'],
        pricing: '$50/hour',
        availability: 'Available on weekdays',
        contactNumber: '123-456-7890',
        profilePicture: 'https://via.placeholder.com/150', // URL to the profile picture
    };
    return (
        <Container className="profile-dashboard p-20 space-y-10 ">
            <Row>
                <Col md={4} className='flex justify-end '>
                    <Image src={worker.profilePicture} rounded fluid className='h-40 w-40' />
                </Col>
                <Col md={8} className=' space-y-5 pl-14'>
                    <h2 className='font-bold text-3xl space-x-3'>{worker.name}</h2>
                    <p><strong>Location : </strong> {worker.location}</p>
                    <p>
                        <strong>Ratings : </strong> 
                        <Badge variant="info">{worker.ratings}</Badge>
                    </p>
                    <p><strong>Profession : </strong> {worker.profession}</p>
                    <p><strong>Skills : </strong> {worker.skills.join(', ')}</p>
                    <p><strong>Pricing : </strong> {worker.pricing}</p>
                    <p><strong>Availability : </strong> {worker.availability}</p>
                    <p><strong>Contact Number : </strong> {worker.contactNumber}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkerProfile;
