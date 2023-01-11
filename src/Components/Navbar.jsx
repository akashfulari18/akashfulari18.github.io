import Style from "./Styles/navbar.module.css"
import { HashLink as RouterLink } from 'react-router-hash-link';

export default function Navbar() {
 
  return (
    <>
      
      <div className={Style.nav}>

        <div className={Style.logo}>
           Akash Fulari
        </div>
        <div className={Style.leftMenu} >
             <ul className={Style.ulMenu}>
              <li><RouterLink to={"#home"}>Home</RouterLink></li>
              <li><RouterLink to={"#about"}>About</RouterLink></li>
              <li><RouterLink to={"#skills"}>Skills</RouterLink></li>
              <li><RouterLink to={"#project"}>Project</RouterLink></li>
              <li><RouterLink to={"#contact"}>Contact</RouterLink></li>
              <button className={Style.btnRes}><RouterLink >Resume</RouterLink></button>
             </ul>
        </div>

       


        

        {/* <AllRoutes /> */}
      </div>

      
    </>
  );
}

