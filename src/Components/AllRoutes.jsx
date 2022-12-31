import { Flex } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills"

function AllRoutes() {
  return (
    <div>
       
      <Flex>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<ContactMe />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="project" element={<Projects />} />
        </Routes>
      </Flex>
    </div>
  );
}

export default AllRoutes;
