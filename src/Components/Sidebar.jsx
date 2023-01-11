import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu  } from 'react-icons/gi';
import { HashLink as RouterLink } from 'react-router-hash-link';
import Style from "./Styles/sidebar.module.css"
import CloseIcon from '@mui/icons-material/Close';
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
         <li><RouterLink to={"#home"}>Home</RouterLink></li>
         <li><RouterLink to={"#about"}>About</RouterLink></li>
         <li><RouterLink to={"#skills"}>Skills</RouterLink></li>
         <li><RouterLink to={"#project"}>Project</RouterLink></li>
         <li><RouterLink to={"#contact"}>Contact</RouterLink></li>
         <button className={Style.btnRes}><RouterLink >Resume</RouterLink></button>
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