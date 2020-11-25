import React from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const githubIcon = <FontAwesomeIcon icon={faGithub} />
const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} />
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />

function Footer() {
  return (
    <div className="footerContainer">
      <footer>

        <a href="https://github.com/LindseyM20" rel="noopener noreferrer" target="_blank">
          {githubIcon}
        </a>

        <a href="https://www.linkedin.com/in/lindsey-bordner/" rel="noopener noreferrer" target="_blank">
          {linkedinIcon}
        </a>

        <a href="mailto:lindsey.bordner@gmail.com" rel="noopener noreferrer" target="_blank">
          {mailIcon}
        </a>
      </footer>
    </div>

  );

}

export default Footer;
