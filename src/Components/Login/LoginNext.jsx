import React from "react";
import worker from "../../assets/Images/worker.png";
import user from "../../assets/Images/user.png";
import { Link } from "react-router-dom";
function MyCard({ cardTitle, image }) {
  return (
    <div className="card bg-[#5becca] cursor-pointer">
      <h1 className="font-bold text-white text-xl text-center mt-2 hover:underline">
        {cardTitle}
      </h1>
      <div style={{ paddingLeft: "20px" }}>
        <img
          src={image}
          alt=""
          style={{ maxWidth: "100px", height: "100px" }}
        />
      </div>
    </div>
  );
}

function LoginNext() {
  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="col-lg-3 col-md-6 col-sm-8 col-10">
          <Link to="/worker-details">
            <MyCard cardTitle="Worker" image={worker} />
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-8 col-10">
          <Link to="/user-details">
            <MyCard cardTitle="User" image={user} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginNext;
