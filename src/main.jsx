import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import LayOut from "./LayOut";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Faq from "./Components/Faq/Faq";
import Blog from "./Components/Blog/Blog";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route path="faq" element={<Faq />} />
      <Route path="blog" element={<Blog/>}/>
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);