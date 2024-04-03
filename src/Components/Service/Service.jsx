// import React, { useEffect } from "react";
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
      <div className="row">
        <div className="col mt-2">
          <h1 className="text-[#09f4bf] text-2xl font-bold mb-1 text-center">
            Our Services
          </h1>
          <h1 className="text-[#484848]  font-bold text-3xl text-center">
            Quality Service For Quality Homes
          </h1>
        </div>
      </div>
      <div className="row justify-content-evenly pt-5 pb-5">
        <div
          className="col-md-3 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center border-0 shadow-lg rounded-lg justify-content-center items-center"
          data-aos="fade-up"
        >
          <img src={ac} width={60} />
          <h1 className="font-bold text-black text-2xl mb-2 mt-2">
            Ac Service
          </h1>
          <h1 className="text-sm  text-black text-justify px-4">
            SkillBridge offers comprehensive AC services to ensure your cooling
            systems run smoothly all year round. From installations to repairs
            and maintenance, our skilled professionals are equipped to handle
            all your air conditioning needs with efficiency and expertise. Stay
            cool and comfortable with SkillBridge AC services.
          </h1>
          <NavLink
            to="#"
            className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2"
          >
            Learn More
          </NavLink>
        </div>
        <div
          className="col-md-3 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center border-0 shadow-lg rounded-lg justify-content-center items-center"
          data-aos="fade-up"
        >
          <img src={plumber} width={60} />
          <h1 className="font-bold text-black text-2xl mb-2 mt-2">Plumber</h1>
          <h1 className="text-sm  text-black text-justify px-4">
            SkillBridge provides expert plumbing services to keep your home
            plumbing systems in top condition. From leak repairs to pipe
            installations and everything in between, our skilled professionals
            deliver efficient solutions to ensure your plumbing works
            seamlessly. Trust SkillBridge for reliable and effective plumbing
            services.
          </h1>
          <NavLink
            to="#"
            className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2"
          >
            Learn More
          </NavLink>
        </div>
        <div
          className="col-md-3 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center border-0 shadow-lg rounded-lg justify-content-center items-center"
          data-aos="fade-up"
        >
          <img src={roof} width={60} />
          <h1 className="font-bold text-black text-2xl mb-2 mt-2">
            Home Repair
          </h1>
          <h1 className="text-sm  text-black text-justify px-4">
            SkillBridge specializes in home repair services, offering expert
            solutions to address a wide range of issues. From minor repairs to
            major renovations, our skilled professionals deliver quality
            workmanship and reliable service to restore your home to its best
            condition. Count on SkillBridge for all your home repair needs..
          </h1>
          <NavLink
            to="#"
            className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2"
          >
            Learn More
          </NavLink>
        </div>
      </div>
      <div className="row justify-content-evenly pb-5">
        <div
          className="col-md-3 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center border-0 shadow-lg rounded-lg justify-content-center items-center"
          data-aos="fade-up"
        >
          <img src={Electrician} width={60} />
          <h1 className="font-bold text-black text-2xl mb-2 mt-2">
            Electricity Service
          </h1>
          <h1 className="text-sm  text-black text-justify px-4">
            SkillBridge offers comprehensive AC services to ensure your cooling
            systems run smoothly all year round. From installations to repairs
            and maintenance, our skilled professionals are equipped to handle
            all your air conditioning needs with efficiency and expertise. Stay
            cool and comfortable with SkillBridge AC services.
          </h1>
          <NavLink
            to="#"
            className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2"
          >
            Learn More
          </NavLink>
        </div>{" "}
        <div
          className="col-md-3 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center border-0 shadow-lg rounded-lg justify-content-center items-center"
          data-aos="fade-up"
        >
          <img src={ac} width={60} />
          <h1 className="font-bold text-black text-2xl mb-2 mt-2">
            Ac Service
          </h1>
          <h1 className="text-sm  text-black text-justify px-4">
            SkillBridge offers comprehensive AC services to ensure your cooling
            systems run smoothly all year round. From installations to repairs
            and maintenance, our skilled professionals are equipped to handle
            all your air conditioning needs with efficiency and expertise. Stay
            cool and comfortable with SkillBridge AC services.
          </h1>
          <NavLink
            to="#"
            className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2"
          >
            Learn More
          </NavLink>
        </div>{" "}
        <div
          className="col-md-3 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center border-0 shadow-lg rounded-lg justify-content-center items-center"
          data-aos="fade-up"
        >
          <img src={ac} width={60} />
          <h1 className="font-bold text-black text-2xl mb-2 mt-2">
            Ac Service
          </h1>
          <h1 className="text-sm  text-black text-justify px-4">
            SkillBridge offers comprehensive AC services to ensure your cooling
            systems run smoothly all year round. From installations to repairs
            and maintenance, our skilled professionals are equipped to handle
            all your air conditioning needs with efficiency and expertise. Stay
            cool and comfortable with SkillBridge AC services.
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
          <div className="card rounded border-0 bg-[#f4fafe] shadow-lg p-5 pt-5 pb-5">
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
