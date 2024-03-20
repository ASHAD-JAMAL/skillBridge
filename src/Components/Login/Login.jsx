import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="py-4 col-md-4 col-11">
            <div className="card p-10 m-auto">
              <h4 className="font-bold mb-4 text-xl">Login</h4>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label>Username or email address</Form.Label>
                  <Form.Control
                    required
                    type="test"
                    placeholder="Username or email address"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
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

                <div>
                  <Button
                    type="submit"
                    className="bg-[#09f4bf] font-bold text-white text-sm border-0 my-3"
                  >
                    Submit form
                  </Button>
                </div>
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
