import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
function Contact() {
  return (
    <div className="container-fluid bg-[#f4fafe]">
      <div className="row justify-content-evenly text-center pt-12 pb-12 mx-2">
        <div className="col-12 col-md-3 card bg-[#ffffff] mb-3 relative">
          <div className="card-body pt-5 pb-5 text-center">
            <div className="bg-[#04ffa3] rounded-full flex items-center justify-center w-10 h-10 absolute -top-4 start-50 translate-middle-x">
              <i className="bi bi-geo-fill text-white"></i>
            </div>
            <h5 className="card-title text-[#6de7f3] font-bold">Our Address</h5>
            <p className="card-text">Gachibowli,Hyderabad, 500032</p>
          </div>
        </div>
        <div className="col-md-3 col-12 card bg-[#ffffff] mb-3 relative">
          <div className="card-body pt-5 pb-5 text-center">
            <div className="bg-[#04ffa3] rounded-full flex items-center justify-center w-10 h-10 absolute -top-4 start-50 translate-middle-x">
              <i className="bi bi-telephone-fill text-white"></i>
            </div>
            <h5 className="card-title text-[#6de7f3] font-bold">
              Phone Number
            </h5>
            <p className="card-text">7321857364</p>
          </div>
        </div>

        <div className="col-md-3 col-12  card bg-[#ffffff] mb-3 relative">
          <div className="card-body pt-5 pb-5 text-center">
            <div className="bg-[#04ffa3] rounded-full flex items-center justify-center w-10 h-10 absolute -top-4 start-50 translate-middle-x">
              <i className="bi bi-envelope-fill text-white"></i>
            </div>
            <h5 className="card-title text-[#6de7f3] font-bold">
              Email Address
            </h5>
            <p className="card-text">ashadjamalhyt@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="row pt-10 pb-10 justify-content-evenly">
        <div className="col-12 col-md-5 mb-5">
          <h1 className="text-3xl font-bold mt-5 mb-5" data-aos="zoom-out-up">
            Get In Touch
          </h1>
          <p className="text-[#54595f] mt-4 mb-4" data-aos="zoom-out-up">
            Aenean tincidunt suscipit quam ut interdum. Phasellus viverra
            aliquam nunc sed varius. Mauris nec tellus vel risus interdum
            feugiat. Pellentesque sit amet lectus quis turpis pretium pharetra a
            sed dolor. Sed efficitur sed lacus non tincidunt. Nunc rutrum eros
            eu orci posuere, eu pretium turpis pellentesque.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15226.230158704106!2d78.37212335!3d17.43300895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710793816969!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            data-aos="zoom-out-up"
          ></iframe>
        </div>
        <div className="col-12 col-md-5 md:mt-28">
          <Form className="bg-[#04ffa3] pt-10 pb-10 pr-10 pl-10 rounded">
            <Row className="mb-3">
              <Form.Group
                controlId="exampleForm.ControlInput1"
                as={Col}
                data-aos="zoom-out-up"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlInput2"
                as={Col}
                data-aos="zoom-out-up"
              >
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Row>
            <Form.Group
              controlId="exampleForm.ControlInput3"
              className="mb-3"
              data-aos="zoom-out-up"
            >
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlTextarea4"
              className="mb-3"
              data-aos="zoom-out-up"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" placeholder="Message" rows={3} />
            </Form.Group>
            <div className="d-grid mx-auto" data-aos="zoom-out-up">
              <Button
                className=" bg-[#12c6d0] hover:bg-[#00f2ff] font-bold text-white border-0"
                type="submit"
              >
                Send Now
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
