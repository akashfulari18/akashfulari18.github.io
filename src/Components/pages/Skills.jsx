import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "../Styles/skills.module.css";
import html5 from "../../image/html-5.png";
import css from "../../image/css3.png";
import javascript from "../../image/javascript.png";
import node from "../../image/node-js.png";
import git from "../../image/git.png";
import githubactions from "../../image/githubactions.svg";
import material_ui from "../../image/material-ui.png";
import netlify from "../../image/netlify.svg";
import mongodb from "../../image/mongodb.png";
import npm from "../../image/npm.png";
import react from "../../image/react.png";
import next_js from "../../image/next-js.png";
import redux from "../../image/redux.png";
import express from "../../image/expressjs.svg";
import GitHubCalendar from "react-github-calendar";
import { Box, Image, Text } from "@chakra-ui/react";
import { TbBrandNextjs } from "react-icons/tb";function Skills() {
  return (
    <div id="skills" className={styles.skillsContainer}>
       <div className={styles.skillSec}>
        <div>
          <h1 className={styles.mTitle}>
            Technical <span className={styles.Title}>Skills</span>
          </h1>

          <div className={styles.tech}>
            <div className={styles.skills_card_img}>
              <Box className="skills-card">
              <Text className="skills-card-img"></Text>
              <Image textAlign={"center"}
                id="toolhtml" 
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="html 5"
                src={html5}
                alt=""
                width={"100%"}
                />
              <Tooltip className="skills-card-name" anchorId="toolhtml" />
                </Box>
            </div>
            <div className={styles.skills_card_img}>
              <Box className="skills-card"></Box>
              <img
                id="toolCss" className="skills-card-img"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="CSS"
                src={css}
                width={"100%"}
                alt=""
              />
              <Tooltip className="skills-card-name" anchorId="toolCss" />
            </div>
            <div className={styles.skills_card_img}>
              <Box className="skills-card"></Box>
              <img
                id="React" className="skills-card-img "
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="React"
                src={react}
                width={"100%"}
                alt=""
              />
              <Tooltip className="skills-card-name"  anchorId="React" />
            </div>
            <div className={styles.skills_card_img}>
              <Box className="skills-card"></Box>
              <img
                id="toolRedux" className="skills-card-img"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Redux"
                src={redux}
                width={"100%"}
                alt=""
              />
              <Tooltip className="skills-card-name" anchorId="toolRedux" />
            </div>
            <div className={styles.skills_card_img}>
            <Box className="skills-card"></Box>
              <img
                id="toolNext" className="skills-card-img"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Next JS"
                src={next_js}
                width={"100%"}
                alt=""
              />
             
              <Tooltip className="skills-card-name" anchorId="toolNext" />
            </div>

            <div className={styles.skills_card_img}>
            <Box className="skills-card"></Box>
              <img
                id="toolJs" className="skills-card-img"
                data-tooltip-variant="light"
                data-tooltip-content="JavaScript"
                src={javascript}
                width={"100%"}
                alt=""
              />
              <Tooltip className="skills-card-name" anchorId="toolJs" />
            </div>
            <div className={styles.skills_card_img}>
            <Box className="skills-card"></Box>
              <img
                id="toolGit" className="skills-card-img"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Git"
                src={git}
                width={"100%"}
                alt=""
              />
              <Tooltip className="skills-card-name" anchorId="toolGit" />
            </div>
            <div className={styles.skills_card_img}>
            <Box className="skills-card"></Box>
              <img
                id="toolGa" className="skills-card-img"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Github Actions"
                src={githubactions}
                width={"100%"}
                alt=""
              />
              <Tooltip className="skills-card-name" anchorId="toolGa" />
            </div>
            <div className={styles.skills_card_img}>
            <Box className="skills-card"></Box>
              <img
                id="toolMdb" className="skills-card-img"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="MongoDB"
                src={mongodb}
                width={"100%"}
                alt=""
              />
              <Tooltip className="skills-card-name" anchorId="toolMdb" />
            </div>
            <div className={styles.skills_card_img}>
            <Box className="skills-card"></Box>
              <img
                id="toolNetli" className="skills-card-img"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Netlify"
                src={netlify}
                width={"100%"}
                alt=""
              />
              <Tooltip className="skills-card-name" anchorId="toolNetli" />
            </div>
            <div className={styles.skills_card_img}>
            <Box className="skills-card"></Box>
              <img
                id="toolNpm" className="skills-card-img"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="NPM"
                src={npm}
                width={"100%"}
                alt=""
              />
              <Tooltip className="skills-card-name" anchorId="toolNpm" />
            </div>
            <div className={styles.skills_card_img}>
              <Box className="skills-card"></Box>
              <img
                id="toolNode" className="skills-card-img"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Node Js"
                src={node}
                width={"100%"}
                alt=""
              />
              <Tooltip className="skills-card-name" anchorId="toolNode" />
            </div>
            <div className={styles.skills_card_img}>
              <Box className="skills-card"></Box>
              <img
                id="toolMui" className="skills-card-img"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Material UI"
                src={material_ui}
                width={"100%"}
                alt=""
              />
              <Tooltip className="skills-card-name" anchorId="toolMui" />
            </div>
            <div className={styles.skills_card_img}>
              <Box className="skills-card"></Box>
              <img
                id="express" className="skills-card-img"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Express js"
                src={express}
                width={"100%"}
                alt=""
              />
              <Tooltip className="skills-card-name" anchorId="express" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.gitStats}>
        <h1>Github <span>Stats</span></h1>
        <GitHubCalendar className="react-activity-calendar" username="akashfulari18" color={"red"} hideColorLegend 
        blockSize={20}
        blockMargin={6}
        />
      </div>

<div>
      <div className={styles.statsMain}>
          <img  id="github-streak-stats" src={"https://github-readme-streak-stats.herokuapp.com?user=akashfulari18&theme=dark"} alt="" />
          <img  id="github-stats-card" src={"https://github-readme-stats.vercel.app/api?username=akashfulari18&cardType=level&theme=dark"} alt="" />
      </div>

      <div  className={styles.gitLang}>
          <img id="github-top-langs" src={"https://github-readme-stats.vercel.app/api/top-langs/?username=akashfulari18&show_icons=true&locale=en&layout=compact&theme=dark"} alt=""/>
      </div>
      </div>
    </div>
  );
}


export default Skills;
