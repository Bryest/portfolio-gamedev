import React, { useContext } from "react";
import "./Skills.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3, faJs, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { FaJs } from "react-icons/fa";

const Skills = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="skills">
      <div className="awesome">
        <span >Skills</span>
        {/*Evaluate color orange*/}
        <span style={{ color: darkMode ? "gray " : "" }}># Some technologies I've worked with</span>
        {
          /*
            <a href={Resume} download>
              <button className="button s-button">Download CV</button>
            </a>
          */
        }
      </div>
      <div className="icons" >
        <div>
          <a href="https://cdnlogo.com/logo/react_22568.html"><img src="https://cdn.cdnlogo.com/logos/r/63/react.svg" alt="React" /></a>
          <span>React</span>
        </div>
        <div className="Net">
          <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" alt=".NET" /></a>
          <span>.NET</span>
        </div>
        <div>
          <a href="https://cdnlogo.com/logo/javascript_36689.html"><img src="https://cdn.cdnlogo.com/logos/j/33/javascript.svg" alt="JavaScript" /></a>
          <span>Javascript</span>
        </div>
        <div>
          <a href="https://cdnlogo.com/logo/csharp_39895.html"><img src="https://cdn.cdnlogo.com/logos/c/70/csharp.svg" alt="Csharp" /></a>
          <span>Csharp</span>
        </div>
        <div>
          <a href="https://cdnlogo.com/logo/html_50218.html"><img src="https://cdn.cdnlogo.com/logos/h/84/html.svg" alt="HTML" /></a>
          <span>HTML</span>
        </div>
        <div>
          <a href="https://cdnlogo.com/logo/postgresql_39744.html"><img src="https://cdn.cdnlogo.com/logos/p/93/postgresql.svg" alt="PostgreSQL" /></a>
          <span>PostgreSQL</span>
        </div>
        <div>
          <a href="https://cdnlogo.com/logo/css_36679.html"><img src="https://cdn.cdnlogo.com/logos/c/18/css.svg" alt="CSS" /></a>
          <span>CSS</span>
        </div>
        <div>
          <a href="https://cdnlogo.com/logo/azure_788.html"><img src="https://cdn.cdnlogo.com/logos/a/12/azure.svg" /></a>
          <span>Azure</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
