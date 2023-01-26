import Style from "./Styles/navbar.module.css"
import {Link} from 'react-scroll';
import { Tooltip } from "react-tooltip";

import DownloadIcon from '@mui/icons-material/Download';
import Resume from "../image/Akash_Fulari_Resume.pdf"
export default function Navbar() {
 
  return (
    <>
      
      <div className={Style.nav}>

        <div className={Style.logo}>
           Akash Fulari
        </div>
        <div className={Style.leftMenu} >
             <ul className={Style.ulMenu}>
              <li><Link to="home">Home</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="skills">Skills</Link></li>
              <li><Link to="project">Project</Link></li>
              <li><Link to="contact">Contact</Link></li>
              <li id="tool" className={Style.btnRes} data-tooltip-variant="light"  data-tooltip-content="Resume"><a href={Resume}  download="Akash_Fulari_Resume">
              <DownloadIcon/> 
              <Tooltip anchorId="tool" />
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

