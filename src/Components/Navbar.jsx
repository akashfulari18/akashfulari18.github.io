import Style from "./Styles/navbar.module.css"
import {Link} from 'react-scroll';
import { Tooltip } from "react-tooltip";

import DownloadIcon from '@mui/icons-material/Download';
import Resume from "../image/Akash_Fulari_Resume.pdf"
export default function Navbar() {
 
  return (
    <>
      
      <div id="nav-menu" className={Style.nav}>

        <div className={Style.logo}>
           Akash Fulari
        </div>
        <div className={Style.leftMenu} >
             <ul className={Style.ulMenu}>
              <li><Link to="home" smooth>Home</Link></li>
              <li><Link to="about" smooth>About</Link></li>
              <li><Link to="skills" smooth>Skills</Link></li>
              <li><Link to="projects" smooth>Project</Link></li>
              <li><Link to="contact" smooth>Contact</Link></li>
              <li id="resume-button-1" className={Style.btnRes} data-tooltip-variant="light"  data-tooltip-content="Resume"><a id="resume-link-1" href={Resume}  download="Akash_Fulari_Resume" 
              target={"_blank"} rel="noreferrer">
              <DownloadIcon/> 
              <Tooltip anchorId="resume-button-1" />
              </a>   </li>
             
             </ul>
        </div>
{/* 
        <div className={styles.eachLogo}>
              <img
                id="tool"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="html 5"
                src={html5}
                alt=""
              />
              <Tooltip anchorId="tool" />
            </div> */}
       


        

        {/* <AllRoutes /> */}
      </div>

      
    </>
  );
}

