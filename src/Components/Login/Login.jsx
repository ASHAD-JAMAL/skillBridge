import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [validated, setValidated] = useState(false);
  const [userData ,setUserData]=useState({
    email:'',
    password:'',
    role:'',
  })
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    event.preventDefault();
    try{
      const response= await axios.post('http://localhost:8000/user-login',userData);
      console.log(response);
      if(response.status===200){
        toast.success('login successfully!!');
        setTimeout(()=>{
          if (userData.role === 'worker') {
            window.location.href = '#/workerprofile';
          }
          if(userData.role==='user'){
            window.location.href = '#/user-details';
          }
        },2000)
      }
    }catch(error){
        toast.error("login failed");
        console.log("error in login:",error)
    }
    

  };

  const handleInputChange=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
    console.log(userData);
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="py-4 col-md-4 col-11">
            <div className="card p-10 m-auto">
              <h4 className="font-bold mb-4 text-xl">Login</h4>
              <Form noValidate validated={validated} onSubmit={handleSubmit} method="post" action='/login'>
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label>Username or email address</Form.Label>
                  <Form.Control
                    required
                    type="test"
                    placeholder="Username or email address"
                    name='email'
                    onChange={handleInputChange}
                    value={userData.email}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    name='password'
                    onChange={handleInputChange}
                    value={userData.password}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select aria-label="Default" required name='role' onChange={handleInputChange}>
                    <option value="">Open this select menu</option>
                    <option value="user">User</option>
                    <option value="worker">Worker</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="bg-[#09f4bf] font-bold text-white text-sm border-0 my-3"
                  onClick={handleSubmit}
                >
                  Submit form
                </Button>
              </Form>
              <Link to="/register" className="underline hover:text-[#09f4bf]">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
