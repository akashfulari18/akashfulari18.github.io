import { Box } from "@chakra-ui/react";
import React from "react";
import abtStyle from "../Styles/About.module.css";
import Style from "../Styles/home.module.css";

import profile from "../../image/Profile.png";

function About() {
  return (
    <div id="about" className={abtStyle.abtMain} >
      <Box>
    
               <div className={abtStyle.abtMe}>
                About <span className={abtStyle.abtme}>Me</span> 
               </div>
        <div className={abtStyle.abtContainer}>
          <div className={abtStyle.abtcard}>
            <div className={abtStyle.abtRight}>
               

              <div id="user-detail-intro" className={abtStyle.abtInfo}>
                A passionate Full Stack Developer with a proficiency in <span>React</span> , 
                 <span> HTML</span> , <span>CSS</span>,<span> JavaScript</span> , <span> Node.js</span> ,<span> Data Structures</span> and <span> Algorithm</span>.
                Problem solving mindset and ability to perform well in
                collaboration. Looking forward to working as an accountable and
                competent employee in an exciting tech company.
              </div>

              <br />
              <div id="resume-link-2"  className={Style.myResContainer}>
            <a href="https://drive.google.com/file/d/1xaMuGhFWKyH24monpvWCGU3Kc16e2Kai/view?usp=share_link">
           <button id="resume-button-2">
           Take a look at <span className={Style.myRes}>My Resume</span>
           </button>
           </a>
          </div>
             
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
