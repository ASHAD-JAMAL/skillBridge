import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function Register() {
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-11 py-4">
          <div className="card p-4 m-auto">
            <h4 className="font-bold mb-4 text-xl">Register</h4>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="flex flex-col"
            >
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue={""}
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
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom04">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="State" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
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
