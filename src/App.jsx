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
import LoginNext from "./Components/Login/LoginNext";
import WorkerDetails from "./Components/Login/WorkerDetails";
import UserDetails from "./Components/Login/UserDetails"
import Feedback from "./Components/Login/FeedBack";
import UserProfile from "./Components/Profile/UserProfile"
import WorkerProfile from "./Components/Profile/WorkerProfile"
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
          <Route path="login-next" element={<LoginNext/>}/>
          <Route path="worker-details" element={<WorkerDetails/>}/>
          <Route path="user-details" element={<UserDetails/>} />
          <Route path="feedback" element={<Feedback/>}/>
          <Route path="userprofile" element={<UserProfile/>}/>
          <Route path="workerprofile" element={<WorkerProfile/>}/>
        </Route>
      </Routes>
    </>
  );
}
export default App;
