import { Box, Text } from "@chakra-ui/react";
import React from "react";
import abtStyle from "../Styles/About.module.css";
import profile from "../../image/Profile.png";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div className={abtStyle.abtMain} id="about">
      <Box>
    
               <div className={abtStyle.abtMe}>
                About <span className={abtStyle.abtme}>Me</span> 
               </div>
        <div className={abtStyle.abtContainer}>
          <div className={abtStyle.abtcard}>
            <div className={abtStyle.abtRight}>
               

              <div className={abtStyle.abtInfo}>
                A passionate Full Stack Developer with a proficiency in <span>React</span> , 
                 <span> HTML</span> , <span>CSS</span>,<span> JavaScript</span> , <span> Node.js</span> ,<span> Data Structures</span> and <span> Algorithm</span>.
                Problem solving mindset and ability to perform well in
                collaboration. Looking forward to working as an accountable and
                competent employee in an exciting tech company.
              </div>

              <br />
             
            </div>
          </div>
          <div className={abtStyle.abtcard}>
            <div className={abtStyle.boxContainer}>
              <div className={abtStyle.diamond}>
                <img src={profile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default About;
