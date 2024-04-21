import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    profession:"",
    city: "",
    state: "",
    zip: "",
    role: "",
    profileImage:"",
  });
  const userDetailsFormData=new FormData();
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    try {
      userDetailsFormData.append('firstname',userData.firstname);
      userDetailsFormData.append('lastname',userData.lastname);
      userDetailsFormData.append('username',userData.username);
      userDetailsFormData.append('email',userData.email);
      userDetailsFormData.append('password',userData.password);
      userDetailsFormData.append('profession',userData.profession);
      userDetailsFormData.append('city',userData.city);
      userDetailsFormData.append('phone',userData.phone);
      userDetailsFormData.append('state',userData.state);
      userDetailsFormData.append('zip',userData.zip);
      userDetailsFormData.append('role',userData.role);
      userDetailsFormData.append('profileImage',userData.profileImage);
    

      const response = await axios.post(
        "http://localhost:8000/user-register/",
        userDetailsFormData
      );
      console.log(response);
      if (response.status === 201) {
        toast.success("register successfully");
        setTimeout(() => {
          window.location.href = "#/login";
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error("Email already registered");
      } else {
        toast.error("Registration failed");
      }
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === "profileImage") {
      setUserData({ ...userData, profileImage: e.target.files[0] });
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
   
    console.log(userData);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-11 py-4">
          <div className="card p-4 m-auto">
            <h4 className="font-bold mb-4 text-xl">Register</h4>
            <Form
              method="post"
              action="/register"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="flex flex-col"
              enctype='multipart/form-data'
            >
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    name="firstname"
                    value={userData.firstname}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue={""}
                    name="lastname"
                    value={userData.lastname}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom02">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    placeholder="Email"
                    defaultValue={""}
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom02">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Phone"
                    defaultValue={""}
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="10"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                      name="username"
                      value={userData.username}
                      onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom02">
                  <Form.Label>password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom02">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    accept="image/*"
                    placeholder="Image"
                    name="profileImage"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom02">
                  <Form.Label>Profession</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Profession"
                    defaultValue={""}
                    name="profession"
                    value={userData.profession}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    required
                    name="city"
                    value={userData.city}
                    onChange={handleInputChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom04">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    required
                    name="state"
                    value={userData.state}
                    onChange={handleInputChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip"
                    required
                    name="zip"
                    value={userData.zip}
                    onChange={handleInputChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mt-3"
                  as={Col}
                  md="10"
                  controlId="validationCustom06"
                >
                  <Form.Select
                    required
                    name="role"
                    value={userData.role}
                    onChange={handleInputChange}
                  >
                    <option value="">Open this select menu</option>
                    <option value="user">User</option>
                    <option value="worker">Worker</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <div>
                <Button
                  onSubmit={handleSubmit}
                  type="submit"
                  className="bg-[#09f4bf] font-bold text-white text-sm border-0 my-3"
                >
                  Submit form
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
