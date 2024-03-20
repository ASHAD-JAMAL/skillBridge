import React from "react";
import { NavLink } from "react-router-dom";
import img2 from "../../assets/Images/img2.jpg";
import img3 from "../../assets/Images/img3.jpg";
import img4 from "../../assets/Images/img4.jpg";
import img5 from "../../assets/Images/img5.jpg";
import img6 from "../../assets/Images/img6.jpg";

import "../../App.css";
function About() {
  return (
    <div className="container-fluid">
      <div className="row bg-[#fff] pt-5 pb-5 justify-content-center">
        <div className="col-md-5">
          <h1 className="text-[#09f4bf] text-sm font-bold mb-3" >About US</h1>
          <h1 className="text-[#484848] mb-2 font-bold text-3xl">
            Repair And Maintenance You Call It
          </h1>
          <p className="text-[#484848] mb-5 mt-3">
            Morbi tempus purus vel tellus hendrerit porttitor. Cras blandit odio
            urna, ac hendrerit turpis dignissim et. In at eros porttitor,
            blandit ligula id, ornare nibh. Phasellus ut lectus ligula. Fusce
            pharetra erat lorem, at suscipit leo luctus a. Vivamus ut velit quis
            arcu eleifend dapibus et et lacus. Sed ac felis et magna vehicula
            sagittis. Integer efficitur, nibh eu congue bibendum, libero libero
            mollis leo, ac ornare nisl purus sed orci.
          </p>
          <NavLink
            to="/contact"
            className="bg-[#09f4bf] hover:bg-[#04ffa3] focus:ring-2 focus:ring-[#04ffa3] font-bold rounded-lg text-lg px-4 lg:px-5 py-3 mx-4 lg:py-2.5 mr-2 focus:outline-none text-white mt-5 mt-lg-0 mb-3 mb-lg-0 position-relative -left-7"
          >
            Contact us
          </NavLink>
        </div>
        <div className="col-md-3 d-none d-md-block " id="aboutImg">
          <img src={img2} className="img-fluid" />
        </div>
        <div className="col-md-3 d-none d-md-block" id="aboutImg1">
          <img src={img3} className="img-fluid" />
        </div>
      </div>
      <div className="row bg-[#1ec4c4] justify-content-center pt-10 pb-10">
        <h1 className="text-3xl text-center font-bold text-white" data-aos="zoom-in-right">Our Works</h1>
        <p className="text-medium text-center text-white mt-3 mb-5" data-aos="zoom-in-right">
          Aliquam erat volutpat. Aliquam maximus ullamcorper nulla quis lacinia.
          Proin ligula nibh, eleifend in dui sed, laoreet consectetur ligula.
        </p>
        <div className="col-md-3 mt-3" data-aos="zoom-in-up">
          <img src={img5} className="img-fluid rounded-md" />
          <h1 className="text-xl font-bold text-center text-white mt-2">
            01. Bathtub Plumbing
          </h1>
        </div>
        <div className="col-md-3 mt-3" data-aos="zoom-in-up">
          <img src={img4} className="img-fluid rounded-md" />
          <h1 className="text-xl font-bold text-center text-white mt-2">
            02. Electrical Wiring
          </h1>
        </div>
        <div className="col-md-3 mt-3" data-aos="zoom-in-up">
          <img src={img6} className="img-fluid rounded-md" />
          <h1 className="text-xl font-bold text-center text-white mt-2">
            03. AC Instalation
          </h1>
        </div>
      </div>
      <div className="row bg-white justify-content-evenly pt-20 pb-20">
        <div
          className="col-md-2 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center border-0 shadow-lg rounded-lg"
          data-aos="zoom-in-down"
        >
          <h1 className="text-4xl font-bold text-black">1.5K</h1>
          <p className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2">
            Total Client
          </p>
        </div>
        <div
          className="col-md-2 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center  border-0 shadow-lg"
          data-aos="zoom-in-down"
        >
          <h1 className="text-4xl font-bold text-black">7+</h1>
          <p className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2">
            Years Experience
          </p>
        </div>
        <div
          className="col-md-2 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center  border-0 shadow-lg"
          data-aos="zoom-in-down"
        >
          <h1 className="text-4xl font-bold text-black">513</h1>
          <p className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2">
            Project Completed
          </p>
        </div>
        <div
          className="col-md-2 col-11 mt-4 card bg-[#f4fafe] pt-10 pb-10 text-center  border-0 shadow-lg"
          data-aos="zoom-in-down"
        >
          <h1 className="text-4xl font-bold text-black">42</h1>
          <p className="card text-white font-bold text-lg bg-[#10e2ee] mt-3 border-0 p-2">
            Expert Team
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
