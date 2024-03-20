import React from "react";
import men1 from "../../assets/Images/men1.png";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="container-fluid bg-[#eaf7fe]">
      <div className="row justify-content-evenly">
        <div className="col-11 col-md-7 mt-20 order-2 order-md-1">
          <h1 className="text-5xl mt-3" data-aos="fade-down">
            Exquisite Home <span className="text-[#10e2ee]">Service</span>{" "}
          </h1>
          <p className="text-black mt-3" data-aos="fade-down">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="mt-4 flex gap-3" data-aos="fade-down">
            <div className="card bg-white px-3 py-3 border-0 shadow-md">
              <p className="font-bold">Best Home Service For You</p>
            </div>
            <div className="card bg-white px-3 py-3 border-0 shadow-md">
              <p className="font-bold">1.5K Total Client</p>
            </div>
          </div>
          <div className="mt-5 mb-5" data-aos="fade-down">
            <NavLink
              to="#"
              className="bg-[#0fe4ec] hover:bg-[#04ffa3] font-bold rounded-lg text-sm px-3 lg:px-5 py-3 mx-4 lg:py-2.5 focus:outline-none text-white position-relative -left-5"
            >
              Call Us Now
            </NavLink>
          </div>
        </div>
        <div className="col-11 col-md-3 mt-5 order-1 order-md-2" data-aos="zoom-in-up">
          <img src={men1} className="img-fluid max-h-[600px]" />
        </div>
      </div>
    </div>
  );
}
export default Home;
