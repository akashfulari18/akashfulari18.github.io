import React from "react";
import styles from "../Styles/Projects.module.css";
import project_2 from "../../image/project_2_cover_image.png";
import project_1 from "../../image/kindMeal_project.png";
import myntra from "../../image/myntra.png";

import { Box } from "@chakra-ui/react";
import {FaHtml5 ,FaReact ,FaCss3,FaJs} from "react-icons/fa"
import redux from "../../image/redux.png"

function Projects() {
  return (
    <div id="projects" className={styles.projectContainer}>
                 <div className={styles.projTitle}>
                  Here is some of <span className={styles.projTitleSpan}>My work..</span>
                 </div>
      <div className={styles.innerProjects}>

      <div className={styles.project_card}>
          <img className={styles.projectImg} src={myntra} alt="" />
          <h2 className="project-title">Classic World </h2>
           <p className="project-description">Classic World is a clone of Myntra which is one of the largest fashion e-commerce stores in India that deals with a wide range of fashion and lifestyle products for men, women, and kids</p>
           <Box className="project-tech-stack" display={"flex"} gap="0.5rem" justifyContent={"left"} alignContent="center" mb="1rem">
              <div><FaReact size={"2rem"} color="blue"/></div>
              <div><img src={redux} alt="" width={"35px"}/></div>
              <div><FaHtml5 size={"2rem"} color="orange"/></div>
              <div><FaCss3 size={"2rem"} color="blue"/></div>
              <div><FaJs size={"2rem"} color="yellow"/></div>
              
            </Box>
          <div className={styles.btnDiv}>
            {" "}
            <a className="project-github-link" href="https://classicworld.vercel.app/" target={"_blank"}>
            <button className={styles.btn}>Demo</button>
            </a>
            <a className="project-deployed-link" href="https://github.com/sapna1309/illegal-quiver-3898" target={"_blank"}>
            <button className={styles.btn}>Github</button>
            </a>
          </div>
        </div>
        <div className={styles.project_card}>
          <img className={styles.projectImg} src={project_2} alt="" />
           
           <h2 className="project-title">Two Punch Fitness </h2>
           <p className="project-description">The website had been created to target fitness enthusiasts to explore fitness services and products.</p>

           <Box className="project-tech-stack" display={"flex"} gap="0.5rem" justifyContent={"left"} alignContent="center" mb="1rem">
              <div><FaHtml5 size={"2rem"} color="orange"/></div>
              <div><FaCss3 size={"2rem"} color="blue"/></div>
              <div><FaJs size={"2rem"} color="yellow"/></div>
              
            </Box>

          <div className={styles.btnDiv}>
            {" "}
            <a className="project-github-link" href={"https://admirable-raindrop-842e4c.netlify.app/"} target="_blank">
            <button className={styles.btn}>Demo</button>
            </a>

            <a className="project-github-link" href={"https://github.com/rajkumar-cmd/Two-Punch-Fitness-Website/tree/main"} target="_blank">
            <button className={styles.btn}>Github</button>
            </a>
          </div>
        </div>

        {/* <div className={styles.eachProject}>
          <img className={styles.projectImg} src={project_1} alt="" />
           
          <h2 >Happy Meal </h2>
           <p>KindMeal is Malaysia's (and possibly the world's!) pioneering meat-free lifestyle platform.</p>
            
            <Box display={"flex"} gap="0.5rem" justifyContent={"left"} alignContent="center" mb="1rem">
              <div><FaReact size={"2rem"} color="blue"/></div>
              <div><FaHtml5 size={"2rem"} color="orange"/></div>
              <div><FaCss3 size={"2rem"} color="blue"/></div>
              <div><FaJs size={"2rem"} color="yellow"/></div>
              
            </Box>

          <div className={styles.btnDiv}>
            {" "}
            <button className={styles.btn}>Demo</button>
            <button className={styles.btn}>Github</button>
          </div>
        </div> */}

        
      </div>
    </div>
  );
}

export default Projects;
