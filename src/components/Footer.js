import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Twitter } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <InstagramIcon /> */}
        <a href="https://www.linkedin.com/in/rjg007" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/rjg007" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://twitter.com/RJG_Official" target="_blank">
          <Twitter />
        </a>
        {/* <GithubIcon />
        <TwitterIcon />
        <LinkedInIcon /> */}
      </div>
      {/* <p> &copy; made by rahul</p> */}
    </div>
  );
}

export default Footer;
