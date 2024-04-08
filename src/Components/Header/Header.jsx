import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Images/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isUser, setUser] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
    } else {
      setUser(false);
    }
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary border rounded  bg-[#eaf7fe]"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logo} alt="" srcSet="" className="mr-3 h-12" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={Logo} alt="" srcSet="" className="mr-3 h-12" />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3 font-bold">
              <NavLink
                to="/"
                className={(isActive) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-gray-700" : "text-gray-700"
                  }  hover:text-[#10e2ee] lg:p-0 mx-4`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={(isActive) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-gray-700" : "text-gray-700"
                  }  hover:text-[#10e2ee] lg:p-0 mx-4`
                }
              >
                About
              </NavLink>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center py-2 pr-4 pl-3 duration-200 text-gray-700 hover:text-[#10e2ee] lg:p-0 mx-4"
                >
                  Pages <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                </button>
                {isOpen && (
                  <div className="absolute top-full left-0 z-10 bg-white border border-gray-300 rounded shadow-md mt-1">
                    <NavLink
                      to="/service"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Service
                    </NavLink>
                    <NavLink
                      to="/blog"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/faq"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      FAQ
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink
                to="/contact"
                className="bg-[#09f4bf] hover:bg-[#04ffa3] focus:ring-2 focus:ring-[#04ffa3] font-bold rounded-lg text-sm px-3 lg:px-5 py-2 lg:py-2.5 mx-2 lg:mx-4 focus:outline-none text-white mt-3 mt-lg-0 mb-3 mb-lg-0"
              >
                Contact us
              </NavLink>
            </Nav>
            {isUser ? (
              <>
                <i className="bi bi-person-circle text-3xl cursor-pointer"></i>
              </>
            ) : (
              <div className="">
                <Link to="/login">
                  <button className="border-2 hover:bg-[#04ffa3] focus:ring-2 focus:ring-[#04ffa3] font-medium rounded-lg px-4 lg:px-5 py-2 mx-4 lg:py-2.5 mr-2 focus:outline-none hover:text-white mt-3 mt-lg-0">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="border-2 hover:bg-[#04ffa3] focus:ring-2 focus:ring-[#04ffa3] font-medium rounded-lg px-4 lg:px-5 py-2 mx-4 lg:py-2.5 mr-2 focus:outline-none hover:text-white mt-3 mt-lg-0">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
