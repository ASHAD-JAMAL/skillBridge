import img2 from "../../assets/Images/img2.jpg";
import img3 from "../../assets/Images/img3.jpg";
import img4 from "../../assets/Images/img4.jpg";
import img5 from "../../assets/Images/img5.jpg";
import img6 from "../../assets/Images/img6.jpg";

import "../../App.css";
function About() {
  return (
    <div className="container-fluid">
      <div className="row bg-[#fff] justify-content-evenly pt-24">
        <div className="col-md-5">
          <h1 className="text-[#09f4bf] text-2xl font-bold mb-3">About US</h1>
          <h1 className="text-[#484848] mb-2 font-bold text-3xl">
            Repair And Maintenance You Call It
          </h1>
          <p className="text-[#484848] mb-5 mt-3 text-justify">
            SkillBridge is a revolutionary home service web application designed
            to seamlessly connect users with local skilled workers without any
            intermediaries. Our platform aims to simplify the process of finding
            and hiring small works workers for various home service needs,
            eliminating the hassle of traditional search methods.
            <br />
            At SkillBridge, we understand the challenges individuals face when
            trying to locate reliable and skilled professionals for tasks such
            as plumbing, electrical work, carpentry, gardening, and more.
            Therefore, our platform serves as a bridge between users and skilled
            workers in their nearby vicinity, ensuring efficient and trustworthy
            service delivery.
          </p>
        </div>
        <div className="col-md-4 d-none d-md-block mt-14 pt-10" id="aboutImg">
          <img src={img2} className="img-fluid rounded" />
        </div>
      </div>
      <div className="row bg-[#fff] pb-5 justify-content-evenly pt-10">
        <div className="col-md-4 d-none d-md-block pt-10" id="aboutImg">
          <img src={img3} className="img-fluid rounded " />
        </div>
        <div className="col-md-5">
          <p className="text-[#484848] mb-5 mt-3 text-justify">
            By leveraging advanced technology and a user-friendly interface,
            SkillBridge streamlines the entire process, allowing users to browse
            through a diverse pool of skilled workers, view their profiles, and
            directly communicate with them. This direct connection eliminates
            unnecessary intermediaries, reducing costs and simplifying the
            hiring process for both parties involved.
            <br />
            Whether you need a quick fix or a larger home improvement project,
            SkillBridge is your go-to solution. Our platform prioritizes
            transparency, reliability, and convenience, ensuring that users can
            easily find the right skilled worker for their specific needs, all
            within their local community. Join SkillBridge today and experience
            the future of home services!
          </p>
        </div>
      </div>
      <div className="row bg-[#1ec4c4] justify-content-center pt-10 pb-10">
        <h1
          className="text-3xl text-center font-bold text-white"
          data-aos="zoom-in-right"
        >
          Our Works
        </h1>
        <p
          className="text-medium text-center text-white mt-3 mb-5"
          data-aos="zoom-in-right"
        >
         we specialize in connecting users with skilled professionals for a wide range of services, including plumbing, electrical work, carpentry, gardening, and much more.
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
