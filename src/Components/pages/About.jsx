import { Box, Text } from "@chakra-ui/react";
import React from "react";
import abtStyle from "../Styles/About.module.css";
import profile from "../../image/Profile.png";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div className={abtStyle.abtMain} id="about">
      <Box h={900}>
        About
        <div className={abtStyle.abtContainer}>
          <div className={abtStyle.abtcard}>
            <div className={abtStyle.abtRight}>
              

              <Text fontSize="3xl" fontWeight={700}>
                Hello There...👋
              </Text>
              <br />
              <Text fontSize="4xl" fontWeight={700} >
               {/* <div className={abtStyle.writer}> */}
                 I am  
                {/* </div> */}
                <Typewriter color={"purple.500"}
                options={{
                  strings: [" Akash Fulari", " MERN Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            
              </Text>
              <br />
              <Text fontSize="2xl" fontWeight={700}>
                An Aspiring Full Stack Web Devloper.
              </Text>
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
