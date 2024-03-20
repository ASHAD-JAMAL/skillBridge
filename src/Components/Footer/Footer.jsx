import React from "react";
import Logo from "../../assets/Images/logo1.png";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../../App.css';
function Footer() {
  return (
    <>
      <div className="container-fluid bg-[#f4fafe]">
        <div className="row justify-content-center pt-8 pb-8">
          <div className="col-lg-3 col-md-6 col-sm-11 mb-4">
            <h1 className="text-3xl font-bold" data-aos="fade-up">
              <span className="text-[#09f4bf]">NewsLetter</span> <br /> Stay
              Updated
            </h1>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-11 mb-4" data-aos="fade-up">
            <h1 className="font-bold text-2xl">Join For Latest News</h1>
            <InputGroup className="mb-3" id="search-box">
              <Form.Control
                placeholder="Type your email"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
              />
              <Button className="bg-[#09f4bf] hover:bg-[#09725a] font-bold border-0">
                Subscribe
              </Button>
            </InputGroup>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-11 d-flex align-items-center justify-content-center gap-2 mb-4" data-aos="fade-up">
            <div className="bg-[#09f4bf] py-2 px-2 rounded text-white text-2xl">
              <Link to="#">
                <BsFacebook />
              </Link>
            </div>
            <div className="bg-[#09f4bf] py-2 px-2 rounded text-white text-2xl">
              <Link to="#">
                <BsTwitter />
              </Link>
            </div>
            <div className="bg-[#09f4bf] py-2 px-2 rounded text-white text-2xl">
              <Link to="#">
                <BsYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-[#172b41]">
        <div className="row justify-center items-center pt-15 pb-15 pr-10 pl-10">
          <div className="col-md-3 col-sm-6 text-white text-medium">
            <img src={Logo} alt="" srcSet="" class="mr-3 h-12 mt-3" />
            <p className="mt-5 mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              ipsa praesentium perferendis rem exercitationem, illo odio
              doloribus voluptas explicabo esse iste, fuga dolorum, quos odit
              quod nam autem! Ducimus, sequi!
            </p>
          </div>
          <div className="col-md-3 col-sm-6 text-white text-medium">
            <h1 className="text-2xl font-bold mb-3 mt-2">Services</h1>
            <ul className="mt-2">
              <li className="mt-1">
                <a href="#">Installation</a>
              </li>
              <li className="mt-1">
                <a href="#">Reparation</a>
              </li>
              <li className="mt-1">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 text-white text-medium">
            <h1 className="text-2xl font-bold mb-3 mt-2">Further Links</h1>
            <ul className="mt-2">
              <li className="mt-1">
                <a href="#">Term & Condition</a>
              </li>
              <li className="mt-1">
                <a href="#">List Of Job</a>
              </li>
              <li className="mt-1">
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 text-white text-medium mb-3">
            <h1 className="text-2xl font-bold mt-2">Get In Touch</h1>
            <div className="d-flex align-items-center mt-2">
            <i class="bi bi-geo-alt-fill text-[#09f4bf]"></i>
              <p className="mb-0 ml-2">GaichiBowli, Hyderabad</p>
            </div>
            <div className="d-flex align-items-center mt-2">
              <i className="bi bi-telephone-fill text-[#09f4bf]"></i>
              <p className="mb-0 ml-2">7321857465</p>
            </div>
            <div className="d-flex align-items-center mt-2">
              <i className="bi bi-envelope-fill text-[#09f4bf]"></i>
              <p className="mb-0 ml-2">ashadjamalhyt@gmail.com</p>
            </div>
          </div>
        </div>
        <hr className="text-white" />
        <p className="text-center text-white  mt-3 pb-3">
          Copyright © 2024 SkillBridge | Powered by SkillBridge
        </p>
      </div>
    </>
  );
}
export default Footer;
