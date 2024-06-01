import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WorkerProfile = () => {
    const [worker, setWorker] = useState({});
    const { id } = useParams();

    const fetchWorkerProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post('http://15.206.186.104:8000/view-workerProfile', { id }, {
                headers: {
                    Authorization: token,
                }
            });
            if (response.status === 200) {
                setWorker(response.data.data);
            }
        } catch (error) {
            toast.error("Failed To View Profile");
            console.error("Error in fetching profile:", error);
        }
    };

    useEffect(() => {
        fetchWorkerProfile();
    }, [id]);

    return (
        <Container className="profile-dashboard p-20 space-y-10 ">
            <Row>
                <Col md={4} className='flex justify-end '>
                    <Image src={`http://15.206.186.104:8000/uploads/${worker.profileImage}`} rounded fluid className='h-40 w-40' />
                </Col>
                <Col md={8} className=' space-y-5 pl-14'>
                    <h2 className='font-bold text-3xl space-x-3'>{worker.firstname} {worker.lastname}</h2>
                    <p><strong>Location : </strong> {worker.city}, {worker.state}, {worker.zip}</p>
                    <p><strong>Work-Type :</strong> {worker.role}</p>
                    <p><strong>Profession :</strong> {worker.profession} </p>
                    <p><strong>Email id :</strong>{worker.email}</p>
                    <p><strong>Contact Number :</strong>{worker.phone}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkerProfile;
