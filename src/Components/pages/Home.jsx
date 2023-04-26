import React from "react";
import Style from "../Styles/home.module.css";
import Typewriter from "typewriter-effect";
import coding from "../../image/Coding.gif";
import github from "../../image/github.png";
import gmail from "../../image/gmail.png";
import linkedin from "../../image/linkedin.png";
import Resume from "../../image/Akash_Fulari_Resume.pdf"

const linked_inLink = "https://www.linkedin.com/in/akash-fulari-b57848190/";
const gitLink = "https://github.com/akashfulari18";
function Home() {
 
  
  return (
    <div className={Style.homeContainer} id="home">
      <div className={Style.bg_image}>
        <div className={Style.leftDesp}>
          <h1 className={Style.Hello}>Hello World...👋</h1>
          <h1>
            Welcome to My <span className={Style.port}>Portfolio.</span>
          </h1>
          <div className={Style.typeWriter}>
            <div className={Style.I}> I am</div>
            <div id="user-detail-name" className={Style.writer}>
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
          <div id="contact-linkedin" className={Style.connect}>
          <a href={linked_inLink} rel="noreferrer" target="_blank" >
            <img src={linkedin} alt="" />
          </a>

          <div id="contact-email">
            <a href="mailto:fulariakash007@gmail.com" rel="noreferrer" target="_blank" ><img src={gmail} alt="" /></a>
            
          </div>
          <div id="contact-github">
            <a href={gitLink} rel="noreferrer" target="_blank" >
            <img src={github} alt="" />
            </a>
          </div>
          </div>
          <div  className={Style.myResContainer}>
            <a id="resume-link-2" href={Resume} download="Akash_Fulari_Resume">
           <button onClick={()=>{window.open("https://drive.google.com/file/d/1xaMuGhFWKyH24monpvWCGU3Kc16e2Kai/view?usp=share_link","_blank","noreferrer")}} id="resume-button-2">
           Take a look at <span className={Style.myRes}>My Resume</span>
           </button>
           </a>
          </div>
        </div>

        <div className={Style.rightDesp}>
          <img className="home-img" src={coding} alt="" />
        </div>

        
      </div>
    </div>
  );
}

export default Home;
