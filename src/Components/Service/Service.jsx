import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ac from "../../assets/Images/ac.png";
import plumber from "../../assets/Images/plumber.png";
import Electrician from "../../assets/Images/electricity.png";
import roof from "../../assets/Images/roof.png";
import img7 from "../../assets/Images/img7.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function Service() {
  return (
    <div className="container-fluid bg-[#f4fafe]">
      <div className="row justify-content-evenly pt-20 pb-20">
        <div className="row">
          <div className="col">
            <h1 className="text-[#09f4bf] text-2xl font-bold mb-1">
              Our Services
            </h1>
            <h1 className="text-[#484848]  font-bold text-3xl">
              Quality Service For Quality Homes
            </h1>
          </div>
        </div>
        <div
          className="col-md-2 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center border-0 shadow-lg rounded-lg justify-content-center items-center"
          data-aos="fade-up"
        >
          <img src={ac} width={60} />
          <h1 className="font-bold text-black text-2xl mb-2 mt-2">
            Ac Service
          </h1>
          <h1 className="text-sm  text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus pulvinar dapibus leo.
          </h1>
          <NavLink
            to="#"
            className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2"
          >
            Learn More
          </NavLink>
        </div>
        <div
          className="col-md-2 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center border-0 shadow-lg rounded-lg justify-content-center items-center"
          data-aos="fade-up"
        >
          <img src={plumber} width={60} />
          <h1 className="font-bold text-black text-2xl mb-2 mt-2">Plumber</h1>
          <h1 className="text-sm  text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus pulvinar dapibus leo.
          </h1>
          <NavLink
            to="#"
            className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2"
          >
            Learn More
          </NavLink>
        </div>
        <div
          className="col-md-2 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center border-0 shadow-lg rounded-lg justify-content-center items-center"
          data-aos="fade-up"
        >
          <img src={Electrician} width={60} />
          <h1 className="font-bold text-black text-2xl mb-2 mt-2">
            Electrician
          </h1>
          <h1 className="text-sm  text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus pulvinar dapibus leo.
          </h1>
          <NavLink
            to="#"
            className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2"
          >
            Learn More
          </NavLink>
        </div>
        <div
          className="col-md-2 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center border-0 shadow-lg rounded-lg justify-content-center items-center"
          data-aos="fade-up"
        >
          <img src={roof} width={60} />
          <h1 className="font-bold text-black text-2xl mb-2 mt-2">
            Home Repair
          </h1>
          <h1 className="text-sm  text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus pulvinar dapibus leo.
          </h1>
          <NavLink
            to="#"
            className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2"
          >
            Learn More
          </NavLink>
        </div>
      </div>
      <div className="row bg-white justify-content-evenly">
        <div className="text-center pt-10">
          <h1 className="text-3xl font-bold mt-5">Quality Work Every Time</h1>
          <p className="text-xl mt-3 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="col-md-5 mt-5 md:mb-10">
          <img src={img7} className="img-fluid rounded" />
        </div>
        <div className="col-md-5 mt-5 mb-5">
          <div class="card rounded border-0 bg-[#f4fafe] shadow-lg p-5 pt-5 pb-5">
            <div className="pt-3 pb-3">
              <h1 className="pb-4 text-2xl font-bold">Why Choose Us</h1>
              <p className="pb-2 pt-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="mr-2 text-[#10e2ee]"
                />{" "}
                Connects you to Verified and Trained Technicians
              </p>
              <p className="pb-2 pt-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="mr-2 text-[#10e2ee]"
                />{" "}
                Offers Impeccable Customer Support
              </p>
              <p className="pb-2 pt-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="mr-2 text-[#10e2ee]"
                />{" "}
                Guarantees Secure Transactions
              </p>
              <p className="pb-2 pt-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="mr-2 text-[#10e2ee]"
                />{" "}
                Provides High-quality, Reliability and Safety
              </p>
              <p className="pb-2 pt-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="mr-2 text-[#10e2ee]"
                />{" "}
                Ensures Cost-effectiveness
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service;
