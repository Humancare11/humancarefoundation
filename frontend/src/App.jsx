import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import Healthcare from "./pages/Healthcare";
import Impact from "./pages/Impact";
import Contactus from "./pages/Contactus";
import GetInvolved from "./pages/GetInvolved";
import EducationDevelopment from "./pages/EducationDevelopment";
import RuralHealthDevelopment from "./pages/RuralHealthDevelopment";
import SkillDevelopment from "./pages/SkillDevelopment";
import OurPeople from "./pages/OurPeople";
import Login from "./pages/Login";


import BlogCard from "./blogs/BlogCard";
import Blog1 from "./blogs/Blog1";
import Blog2 from "./blogs/Blog2";

import Blog3 from "./blogs/Blog3";




import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/ourwork" element={<OurWork />} />
 <Route path="/healthcare" element={<Healthcare />} />
  <Route path="/impact" element={<Impact/>} />
    <Route path="/contact" element={<Contactus/>} />
        <Route path="/getinvolved" element={<GetInvolved/>} />
 <Route path="/educationdevelopment" element={<EducationDevelopment/>} />
 <Route path="/ruralhealthdevelopment" element={<RuralHealthDevelopment/>} />
  <Route path="/skilldevelopment" element={<SkillDevelopment/>} />
  <Route path="/ourpeople" element={<OurPeople/>} />
    <Route path="/login" element={<Login />} />



        
                            <Route path="/blogs" element={<BlogCard/>} />
                              <Route path="/education-opens-doors-to-a-better-future" element={<Blog1 />} />
                                                            <Route path="/healthy-children-build-stronger-tomorrow" element={<Blog2 />} />

                              <Route path="/together-we-create-brighter-communities" element={<Blog3 />} />





      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
