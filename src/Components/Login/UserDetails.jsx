// import React from "react";
import { useEffect, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserCard(props) {
  return (
    <>
      <div className="card border-0 shadow-lg p-10 gap-y-3 rounded">
        <p>
          <span className="font-bold">Worker Id: </span>
          {props.id}
        </p>
        <p>
          <span className="font-bold">Name: </span>
           {props.firstname} {props.lastname}
        </p>
        <p>
          <span className="font-bold">Work: </span>
          {props.profession}
        </p>
        <p>
          <span className="font-bold">Work-Type: </span>
          {props.role}
        </p>
        <p>
          <span className="font-bold">Email-id: </span>
          {props.email}
        </p>
        <div className="md:space-x-5">
          <Button className="bg-[#09f4bf] hover:bg-[#09725a] font-bold border-0">
            <Link to="/feedback">View Feedback</Link>
          </Button>
          <div className="d-md-none mt-4"></div>
          <Button className="bg-[#09f4bf] hover:bg-[#09725a] font-bold border-0">
            <Link to={`/workerprofile/${props.id}`}>Connect</Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default function UserDetails() {
  const [workerList, setWorkerList] = useState();
  const handleViewWorkers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://15.206.186.104:8000/view-workers", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      if (response.status === 200) {
        setWorkerList(response.data.data);
      }
    } catch (error) {
      toast.error("Failed To Viewing Worker List");
      console.error("errorn in finding worker list", error);
    }
  };
  useEffect(() => {
    handleViewWorkers();
  }, []);

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
          {workerList ? (
            workerList.map((item, index) => (
              <div className="col-md-5 col-10 mt-5">
                <UserCard id={item._id} profession={item.profession} role={item.role} phone={item.phone} firstname={item.firstname} lastname={item.lastname} email={item.email}/>
              </div>
            ))
          ) : (
            <h1>There is no worker</h1>
          )}
        </div>
      </div>
    </>
  );
}
