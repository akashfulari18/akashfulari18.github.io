import React from "react";
import styles from "../Styles/Projects.module.css";
import project_2 from "../../image/project_2_cover_image.png";
import project_1 from "../../image/kindMeal_project.png";
import myntra from "../../image/myntra.png";
import project_3 from "../../image/project-03.png";
import mongodb from "../../image/mongodb.png";
import express from "../../image/expressjs.svg";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import {FaHtml5 ,FaReact ,FaCss3,FaJs, FaNodeJs} from "react-icons/fa"
import redux from "../../image/redux.png"
import chakra from "../../image/chakra-ui.png"

function Projects() {
  return (
    <div id="projects" className={styles.projectContainer}>
                 <div className={styles.projTitle}>
                  Here is some of <span className={styles.projTitleSpan}>My work..</span>
                 </div>
      <div className={styles.innerProjects}>
        

      <div className={styles.project_card}>
        <Box className="project-card">
          <img className={styles.projectImg} src={project_3} alt="" />
           <Flex justifyContent="space-between" alignItems="baseline" borderBottom="2px solid red">

           <Text fontSize={"1.5rem"} fontWeight="700" color={"red.500"}   className="project-title">Lens Shop </Text> <Text>Group Project</Text>
           </Flex>
           <Box mt="5" mb="5" className="project-description"><Text>Lenskart is an Indian multinational optical prescription eyewear retail chain, based in Faridabad. As of May 2022, Lenskart has 1,000 stores across 223 cities in India. Its manufacturing facility in New Delhi manufactures 3 lakh glasses a month. </Text>
           <Text>This was a Group project . There was a Group of 4 people. We Worked on this project for 5 days.</Text></Box>

            
           <Box className="project-tech-stack" display={"flex"} gap="0.5rem" justifyContent={"left"} alignContent="center" mb="1rem">
              <div><FaHtml5 size={"2rem"} color="orange"/></div>
              <div><FaCss3 size={"2rem"} color="blue"/></div>
              <div><FaJs size={"2rem"} color="yellow"/></div>
              <div><FaReact size={"2rem"} color="blue"/></div>
              <div><img src={redux} alt="" width={"2rem"}/></div>
              <div><img src={"https://osawards.com/react/pic/chakra.png"} alt="" width={"35px"}/></div>
              
            </Box>

          <div className={styles.btnDiv}>
            {" "}
            <a className="project-github-link" href={"https://thoughtless-scarecrow-7735-akashfulari18.vercel.app/"} target="_blank" rel="noreferrer">
            <button className={styles.btn}>Demo</button>
            </a>

            <a className="project-deployed-link" href={"https://github.com/akashfulari18/lens_shop"} target="_blank" rel="noreferrer">
            <button className={styles.btn}>Github</button>
            </a>
          </div>
        </Box>
        </div>

      <div className={styles.project_card}>
       <Box className="project-card">
          <img className={styles.projectImg} src={myntra} alt="" />
          <Flex justifyContent="space-between" alignItems="baseline" borderBottom="2px solid red">
            
          <Text fontSize={"1.5rem"} fontWeight="700" color={"red.500"}  className="project-title">Classic World </Text>
           <Text >Group Project</Text>
          </Flex>

           <Box mt="5" mb="5" className="project-description"><Text>Classic World is a clone of Myntra which is one of the largest fashion e-commerce stores in India that deals with a wide range of fashion and lifestyle products for men, women, and kids.</Text>
           <Text>
            This site was assigned to us to clone within a span of of 5 days. </Text></Box>
           <Box className="project-tech-stack" display={"flex"} gap="0.5rem" justifyContent={"left"} alignContent="center" mb="1rem">
              <div><FaReact size={"2rem"} color="blue"/></div>
              
              <div><img src={redux} alt="" width={"35px"}/></div>
              <div><FaHtml5 size={"2rem"} color="orange"/></div>
              <div><FaCss3 size={"2rem"} color="blue"/></div>
              <div><FaJs size={"2rem"} color="yellow"/></div>
              <div><img src={"https://osawards.com/react/pic/chakra.png"} alt="" width={"35px"}/></div>

              
            </Box>

            
          <div className={styles.btnDiv}>
            {" "}
            <a className="project-github-link" href="https://classicworld.vercel.app/" target={"_blank"} rel="noreferrer">
            <button className={styles.btn}>Demo</button>
            </a>
            <a className="project-deployed-link" href="https://github.com/sapna1309/illegal-quiver-3898" target={"_blank"} rel="noreferrer">
            <button className={styles.btn}>Github</button>
            </a>
          </div>
        </Box> 
        </div>

        <div className={styles.project_card}>
        <Box className="project-card">
          <img className={styles.projectImg} src={"https://user-images.githubusercontent.com/106386112/229416539-b531af13-9d9f-4412-9ab4-4aa68ebc29d1.png"} alt="" />
           <Flex justifyContent="space-between" alignItems="baseline" borderBottom="2px solid red">

           <Text fontSize={"1.5rem"} fontWeight="700" color={"red.500"}   className="project-title">Mart Mate</Text> <Text>Group Project</Text>
           </Flex>
           <Box mt="5" mb="5" className="project-description"><Text>IndiaMART InterMESH Ltd is an Indian e-commerce company that provides B2B and customer to customer sales services via its web portal. Founded in 1996 by Dinesh Agarwal and Brijesh Agrawal in Noida, IndiaMART.com is a business-to-business portal to connect Indian manufacturers with buyers.</Text><Text>
           This project was assigned to us and we have to complete it in 5 days. 
            </Text></Box>

            
           <Box className="project-tech-stack" display={"flex"} gap="0.5rem" justifyContent={"left"} alignContent="center" mb="1rem">
              <div><FaHtml5 size={"2rem"} color="orange"/></div>
              <div><FaCss3 size={"2rem"} color="blue"/></div>
              <div><FaJs size={"2rem"} color="yellow"/></div>
              <div><FaNodeJs size={"2rem"} color="green"/></div>
              <div><Image src={mongodb} width={"2rem"}/></div>
              <div><Image src={express} width={"2rem"}/></div>
              <div><img src={"https://osawards.com/react/pic/chakra.png"} alt="" width={"35px"}/></div>

            </Box>

          <div className={styles.btnDiv}>
            {" "}
            <a className="project-github-link" href={"https://martmate.vercel.app/"} target="_blank" rel="noreferrer">
            <button className={styles.btn}>Demo</button>
            </a>

            <a className="project-deployed-link" href={"https://github.com/akashfulari18/Mart-Mate"} target="_blank" rel="noreferrer">
            <button className={styles.btn}>Github</button>
            </a>
          </div>
        </Box>
        </div>

        <div className={styles.project_card}>
        <Box className="project-card">
          <img className={styles.projectImg} src={project_2} alt="" />
           <Flex justifyContent="space-between" alignItems="baseline" borderBottom="2px solid red">

           <Text fontSize={"1.5rem"} fontWeight="700" color={"red.500"}   className="project-title">Two Punch Fitness </Text> <Text>Group Project</Text>
           </Flex>
           <Box mt="5" mb="5" className="project-description"><Text>The website had been created to target fitness enthusiasts to explore fitness services and products. Sites has Articles and Recipes for fitness.  </Text><Text>
           This site was designed and devloped by 5 team mates. This project was assigned to us and we have to complete it in 5 days. 
            </Text></Box>

            
           <Box className="project-tech-stack" display={"flex"} gap="0.5rem" justifyContent={"left"} alignContent="center" mb="1rem">
              <div><FaHtml5 size={"2rem"} color="orange"/></div>
              <div><FaCss3 size={"2rem"} color="blue"/></div>
              <div><FaJs size={"2rem"} color="yellow"/></div>
              
            </Box>

          <div className={styles.btnDiv}>
            {" "}
            <a className="project-github-link" href={"https://admirable-raindrop-842e4c.netlify.app/"} target="_blank" rel="noreferrer">
            <button className={styles.btn}>Demo</button>
            </a>

            <a className="project-deployed-link" href={"https://github.com/rajkumar-cmd/Two-Punch-Fitness-Website/tree/main"} target="_blank" rel="noreferrer">
            <button className={styles.btn}>Github</button>
            </a>
          </div>
        </Box>
        </div>
        <div className={styles.project_card}>
        <Box className="project-card">
          <img className={styles.projectImg} src={project_1} alt="" />
           <Flex justifyContent="space-between" alignItems="baseline" borderBottom="2px solid red">

           <Text fontSize={"1.5rem"} fontWeight="700" color={"red.500"}   className="project-title">Kind Meal</Text> <Text>Individual Project</Text>
           </Flex>
           <Box mt="5" mb="5" className="project-description">KindMeal is Malaysia's (and possibly the world's!) pioneering meat-free lifestyle platform.</Box>

            
           <Box className="project-tech-stack" display={"flex"} gap="0.5rem" justifyContent={"left"} alignContent="center" mb="1rem">
              <div><FaHtml5 size={"2rem"} color="orange"/></div>
              <div><FaReact size={"2rem"} color="orange"/></div>
              <div><FaCss3 size={"2rem"} color="blue"/></div>
              <div><FaJs size={"2rem"} color="yellow"/></div>
              
            </Box>

          <div className={styles.btnDiv}>
            {" "}
            <a className="project-github-link" href={"https://admirable-raindrop-842e4c.netlify.app/"} target="_blank" rel="noreferrer">
            <button className={styles.btn}>Demo</button>
            </a>

            <a className="project-deployed-link" href={"https://github.com/rajkumar-cmd/Two-Punch-Fitness-Website/tree/main"} target="_blank" rel="noreferrer">
            <button className={styles.btn}>Github</button>
            </a>
          </div>
        </Box>
        </div>
        

        

        
      </div>
    </div>
  );
}

export default Projects;
