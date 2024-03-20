import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
function LayOut(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          offset: 200, // Offset (in pixels) from the original trigger point
        });
      }, []);
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default LayOut