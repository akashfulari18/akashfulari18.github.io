// import { Flex } from "@chakra-ui/react";
import React from "react";
// import { Link as routerLink } from "react-router-dom";
import Style from "../Styles/home.module.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className={Style.homeContainer} id="home">
      <div className={Style.bg_image}>
        <div className={Style.leftDesp}>
          <h1 className={Style.Hello}>Hello World...👋</h1>
          <h1>Welcome to My <span className={Style.port}>Portfolio.</span></h1>
          <div className={Style.typeWriter}>
            <div className={Style.I}> I am</div>
            <div className={Style.writer}>
              <Typewriter
                color={"purple.500"}
                
                options={{
                  strings: [" Akash Fulari .", " MERN Stack Developer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <h1>
            
          </h1>
        </div>
        <div className={Style.rightDesp}>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
