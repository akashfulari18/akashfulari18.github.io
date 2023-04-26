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
              <li className="nav-link home"><Link to="home" smooth>Home</Link></li>
              <li className="nav-link about"><Link to="about" smooth>About</Link></li>
              <li className="nav-link skills"><Link to="skills" smooth>Skills</Link></li>
              <li className="nav-link projects"><Link to="projects" smooth>Project</Link></li>
              <li className="nav-link contact"><Link to="contact" smooth>Contact</Link></li>
              <li onClick={()=>{window.open("https://drive.google.com/file/d/1xaMuGhFWKyH24monpvWCGU3Kc16e2Kai/view?usp=share_link","_black","norefferrer")}} id="resume-button-1" className={Style.btnRes} data-tooltip-variant="light"  data-tooltip-content="Resume"><a id="resume-link-1" href={Resume}  download="Akash_Fulari_Resume" 
             >Resume
              {/* <DownloadIcon/>  */}
              {/* <Tooltip className="nav-link resume" anchorId="resume-button-1" /> */}
              </a>   </li>
             
             </ul>
        </div>
      </div>

      
    </>
  );
}

