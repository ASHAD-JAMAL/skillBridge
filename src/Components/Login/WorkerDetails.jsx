import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
function WorkerCard() {
  return (
    <>
      <div className="card border-0 shadow-lg p-10 gap-y-3">
        <p>
          <span className="font-bold">Worker Id:</span>30
        </p>
        <p>
          <span className="font-bold">Work:</span>Carpenter
        </p>
        <p>
          <span className="font-bold">Work-Type:</span>Worker
        </p>
        <p>
          <span className="font-bold">Skills:</span>
          Furniture-Making,Mathematical Calculation
        </p>
        <p>
          <span className="font-bold">Mobile-No:</span>123456789
        </p>
        <div>
          <Button className="bg-[#09f4bf] hover:bg-[#09725a] font-bold border-0">
            View Feedback
          </Button>
        </div>
      </div>
    </>
  );
}
export default function WorkerDetails() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-10 mb-10">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className="text-2xl text-center font-bold my-3">
                View Work/Contract Details
              </p>
              <Form>
                <InputGroup className="mb-3 my-5" id="search-box">
                  <Form.Control
                    placeholder="Search..."
                    aria-label="Recipient's email"
                    aria-describedby="basic-addon2"
                  />
                  <Button className="bg-[#09f4bf] hover:bg-[#09725a] font-bold border-0">
                    Search
                  </Button>
                </InputGroup>
              </Form>
            </div>
          </div>
          <div className="col-md-5 col-10 mt-5">
            <WorkerCard/>
          </div>
          <div className="col-md-5 col-10 mt-5">
            <WorkerCard/>
          </div>
        </div>
      </div>
    </>
  );
}
