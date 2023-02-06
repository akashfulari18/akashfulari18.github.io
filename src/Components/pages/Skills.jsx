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
import GitHubCalendar from "react-github-calendar";

function Skills() {
  return (
    <div id="skills" className={styles.skillsContainer}>
       <div className={styles.skillSec}>
        <div>
          <h1 className={styles.mTitle}>
            Technical <span className={styles.Title}>Skills</span>
          </h1>

          <div className={styles.tech}>
            <div className={styles.skills_card_img}>
              <img
                id="toolhtml" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="html 5"
                src={html5}
                alt=""
              />
              <Tooltip anchorId="toolhtml" />
            </div>
            <div className={styles.skills_card_img}>
              <img
                id="toolCss" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="CSS"
                src={css}
                alt=""
              />
              <Tooltip anchorId="toolCss" />
            </div>
            <div className={styles.skills_card_img}>
              <img
                id="React" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="React"
                src={react}
                alt=""
              />
              <Tooltip anchorId="React" />
            </div>
            <div className={styles.skills_card_img}>
              <img
                id="toolRedux" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Redux"
                src={redux}
                alt=""
              />
              <Tooltip anchorId="toolRedux" />
            </div>
            <div className={styles.skills_card_img}>
              <img
                id="toolNext" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Next JS"
                src={next_js}
                alt=""
              />
              <Tooltip anchorId="toolNext" />
            </div>

            <div className={styles.skills_card_img}>
              <img
                id="toolJs" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-content="JavaScript"
                src={javascript}
                alt=""
              />
              <Tooltip anchorId="toolJs" />
            </div>
            <div className={styles.skills_card_img}>
              <img
                id="toolGit" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Git"
                src={git}
                alt=""
              />
              <Tooltip anchorId="toolGit" />
            </div>
            <div className={styles.skills_card_img}>
              <img
                id="toolGa" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Github Actions"
                src={githubactions}
                alt=""
              />
              <Tooltip anchorId="toolGa" />
            </div>
            <div className={styles.skills_card_img}>
              <img
                id="toolMdb" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="MongoDB"
                src={mongodb}
                alt=""
              />
              <Tooltip anchorId="toolMdb" />
            </div>
            <div className={styles.skills_card_img}>
              <img
                id="toolNetli" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Netlify"
                src={netlify}
                alt=""
              />
              <Tooltip anchorId="toolNetli" />
            </div>
            <div className={styles.skills_card_img}>
              <img
                id="toolNpm" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="NPM"
                src={npm}
                alt=""
              />
              <Tooltip anchorId="toolNpm" />
            </div>
            <div className={styles.skills_card_img}>
              <img
                id="toolNode" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Node Js"
                src={node}
                alt=""
              />
              <Tooltip anchorId="toolNode" />
            </div>
            <div className={styles.skills_card_img}>
              <img
                id="toolMui" className="skills-card-name"
                data-tooltip-variant="light"
                data-tooltip-float="true"
                data-tooltip-content="Material UI"
                src={material_ui}
                alt=""
              />
              <Tooltip anchorId="toolMui" />
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
