import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WorkerProfile = () => {
    // Sample data for the worker
    // const worker = {
    //     name: 'John Doe',
    //     location: 'New York, NY',
    //     ratings: 4.5,
    //     profession: 'Plumber',
    //     skills: ['Pipe Fitting', 'Leak Repair', 'Fixture Installation'],
    //     pricing: '50/hour',
    //     availability: 'Available on weekdays',
    //     contactNumber: '123-456-7890',
    //     profilePicture: 'https://via.placeholder.com/150', // URL to the profile picture
    // };

    const [worker,setWorker]=useState({});
    const {id}=useParams();
    const handleviewProfile = async() =>{
        try{
            const token = localStorage.getItem("token");
            const response = await axios.post('http://localhost:8000/view-workerProfile',{id},{
                headers:{
                    Authorization:token,
                }
            })
            if(response.status===200){
                setWorker(response.data.data);

            }
        }catch(error){
            toast.error("Failed To View Profile");
            console.error("error in view profile",error);
        }
    }
    useEffect(()=>{
        handleviewProfile();
    })
    return (
        <Container className="profile-dashboard p-20 space-y-10 ">
            <Row>
                <Col md={4} className='flex justify-end '>
                    <Image src="https://via.placeholder.com/150" rounded fluid className='h-40 w-40' />
                </Col>
                <Col md={8} className=' space-y-5 pl-14'>
                    <h2 className='font-bold text-3xl space-x-3'>{worker.firstname} {worker.lastname}</h2>
                    <p><strong>Location : </strong> {worker.city},{worker.state},{worker.zip}</p>
                    {/* <p>
                        <strong>Ratings : </strong> 
                        <Badge variant="info"></Badge>
                    </p> */}
                    <p><strong>Work-Type :</strong> {worker.role}</p>
                    <p><strong>Profession :</strong> {worker.profession} </p>
                    <p><strong>Email id :</strong>{worker.email}</p>
                    {/* <p><strong>Pricing : </strong> h</p> */}
                    {/* <p><strong>Availability :</strong> h</p> */}
                    <p><strong>Contact Number :</strong>{worker.phone}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkerProfile;
