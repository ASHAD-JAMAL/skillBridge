import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import LayOut from "./LayOut";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Faq from "./Components/Faq/Faq";
import Blog from "./Components/Blog/Blog";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import UserDetails from "./Components/Login/UserDetails"
import Feedback from "./Components/Login/FeedBack";
import UserProfile from "./Components/Profile/UserProfile"
import WorkerProfile from "./Components/Profile/WorkerProfile"

//this will be used for integration
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="faq" element={<Faq />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="user-details" element={<UserDetails/>} />
          <Route path="feedback" element={<Feedback/>}/>
          <Route path="userprofile" element={<UserProfile/>}/>
          <Route path="/workerprofile/:id" element={<WorkerProfile/>}/>
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}
export default App;
