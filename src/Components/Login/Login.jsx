import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/Images/login1img.svg";
import API from "../../../environmentvariable"

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    event.preventDefault();
    try {
      // const response = await axios.post(`${API}/user-login/`, userData);

      const response = await axios.post(
        "http://localhost:8000/user-login/",
        userData
      );

      console.log(response);
      if (response.status === 200) {
        toast.success("login successfully!!");
        const token = localStorage.setItem("token", response.data.data.token);
        setTimeout(() => {
          if (response.data.data.role === "worker") {
            window.location.href = `#/workerprofile/${response.data.data.user._id}`;
          }
          if (response.data.data.role === "user") {
            window.location.href = "#/user-details";
          }
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Incorrect password. Please try again.");
      } else if (
        error.response &&
        error.response.status === 404 &&
        error.response.data === "Not Found"
      ) {
        toast.error("Email not registered. Please sign up.");
      } else {
        console.error("Error logging in:", error);
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 col-11">
            <img src={loginImg} alt="" />
          </div>
          <div className="col-md-5 col-11">
            <div className="card p-10 m-auto">
              <h4 className="font-bold mb-4 text-xl">Login</h4>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                method="post"
                action="/login"
              >
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label>Username or email address</Form.Label>
                  <Form.Control
                    required
                    type="test"
                    placeholder="Username or email address"
                    name="email"
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
                    name="password"
                    onChange={handleInputChange}
                    value={userData.password}
                  />
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
