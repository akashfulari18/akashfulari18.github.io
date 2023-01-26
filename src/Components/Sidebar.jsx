import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu  } from 'react-icons/gi';
import Style from "./Styles/sidebar.module.css"
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-scroll';
import { Tooltip } from "react-tooltip";

import Resume from "../image/Akash_Fulari_Resume.pdf"

  function Sidebar() {
    const [side,setSide] =useState(false)
   const hanldeClickcross=()=>{
     
     setSide(true)
   }
   useEffect(()=>{
    // hanldeClickcross()
   },[])
   const hanldeClick=()=>{
       setSide(false)
    }
    useEffect(()=>{
      hanldeClick()
    },[])
  
    return (
      <>{
        side?<div className={Style.menu} >
        <ul className={Style.ulMenu}>
          
         <li><Link to={"home"}>Home</Link></li>
         <li><Link to={"about"}>About</Link></li>
         <li><Link to={"skills"}>Skills</Link></li>
         <li><Link to={"project"}>Project</Link></li>
         <li><Link to={"contact"}>Contact</Link></li>
         <li id="tool" className={Style.btnRes} data-tooltip-variant="light"  data-tooltip-content="Resume"><a href={Resume}  download="Akash_Fulari_Resume">
            Resume
              <Tooltip anchorId="tool" />
              </a>   </li>
        </ul>
   </div>:""
      }
      
       {!side?<div className={Style.ham} onClick={hanldeClickcross}>
         <GiHamburgerMenu />
        </div>:<div className={Style.ham}onClick={hanldeClick}>
        <CloseIcon fontSize='1rem'></CloseIcon>

        </div>
        }
        
      </>
    )
  }
  export default Sidebar