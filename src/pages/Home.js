import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { Twitter } from "@material-ui/icons";
import GithubIcon from "@material-ui/icons/GitHub";
import { Contacts } from "@material-ui/icons";
import { Description } from "@material-ui/icons";
import { RestaurantMenu } from "@material-ui/icons";
import resume from "../assets/Rahul_Ghorpade_CV.pdf";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Rahul</h2>
        <div className="prompt">
          <p>A frontend developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/rjg007" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/rjg007" target="_blank">
            <GithubIcon />
          </a>
          <a href="https://twitter.com/RJG_Official" target="_blank">
            <Twitter />
          </a>
          <a href={resume} target="_blank">
            <Description />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            {/* <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span> */}
            JavaScript, ReactJS, Redux, HTML, CSS, NextJS, GatsbyJS
          </li>
          <li className="item">
            {/* <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span> */}
            TailwindCSS, BootStrap, MaterialUI, StyledComponents, Sass
          </li>
          <li className="item">
            {/* <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span> */}
            JWT, GraphQL, Axios, Git
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
