import React from "react";
import Accordion from "react-bootstrap/Accordion";
function Faq() {
  return (
    <div className="container fluid">
      <div className="row justify-content-evenly pt-10 pb-20">
        <div className="col-10">
          <h1 className="text-[#09f4bf] text-2xl font-bold mb-3">Faq's</h1>
          <h1 className="text-[#484848] mb-2 font-bold text-3xl">
            Frequently Asked Question
          </h1>
          <p className="text-[#484848] mb-5 mt-3">
            Maecenas venenatis interdum nisi ut consequat. Sed lacinia sem nec
            blandit facilisis. Donec sollicitudin, tortor vitae laoreet
            imperdiet, odio nisi viverra arcu, ac fringilla nibh nisl ut purus.
            Nulla mattis nisi lectus, malesuada auctor lectus pharetra eget.
          </p>
        </div>
        <div className="col-10">
          <Accordion>
            <Accordion.Item eventKey="0" className="Accordian-Item">
              <Accordion.Header className="custom-accordion-header">
                How To Change My Photo From Admin Dashboard?
              </Accordion.Header>
              <Accordion.Body className="m-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="Accordian-Item">
              <Accordion.Header className="custom-accordion-header">
                How To Change My Password Easily
              </Accordion.Header>
              <Accordion.Body className="m-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="Accordian-Item">
              <Accordion.Header className="custom-accordion-header">
                How To Change My Photo From Admin Dashboard?
              </Accordion.Header>
              <Accordion.Body className="m-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="Accordian-Item">
              <Accordion.Header className="custom-accordion-header">
                How To Change My Password Easily
              </Accordion.Header>
              <Accordion.Body className="m-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="Accordian-Item">
              <Accordion.Header className="custom-accordion-header">
                How To Change My Photo From Admin Dashboard?
              </Accordion.Header>
              <Accordion.Body className="m-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="Accordian-Item">
              <Accordion.Header className="custom-accordion-header">
                How To Change My Password Easily
              </Accordion.Header>
              <Accordion.Body className="m-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="Accordian-Item">
              <Accordion.Header className="custom-accordion-header">
                How To Change My Password Easily
              </Accordion.Header>
              <Accordion.Body className="m-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
export default Faq;
