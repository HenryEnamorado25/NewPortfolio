/* eslint-disable no-unused-vars */
import html from "../assets/img/skills/html.png";
import css from "../assets/img/skills/css.png";
import js from "../assets/img/skills/js.png";
import tailwind from "../assets/img/skills/tailwind.png";
import bootstrap from "../assets/img/skills/bootstrap.png";
import react from "../assets/img/skills/react.png";
import vue from "../assets/img/skills/vue.png";
import django from "../assets/img/skills/django.png";
import python from "../assets/img/skills/python.png";
import jquery from "../assets/img/skills/jquery.png";
import jira from "../assets/img/skills/jira.png";
import api from "../assets/img/skills/api.png";
import lighthouse from "../assets/img/skills/lighthouse.png";
import uxdesign from "../assets/img/skills/ux-design.png";
import visualstudio from "../assets/img/skills/visialstudio.png";
import redux from "../assets/img/skills/redux.png";

import node from "../assets/img/skills/node-js.png";
import express from "../assets/img/skills/express.png";
import mongodb from "../assets/img/skills/mongodb.png";
import mysql from "../assets/img/skills/mysql.png";
// import php from "../assets/img/skills/php.png";
// import laravel from "../assets/img/skills/laravel.png";
// import wordpress from "../assets/img/skills/wordpress.png";
import figma from "../assets/img/skills/figma.png";
import git from "../assets/img/skills/git.png";
import github from "../assets/img/skills/github.png";
// import netlify from "../assets/img/skills/netlify.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                My skill set spans both front-end and back-end development,
                allowing me to craft seamless, user-centered digital solutions
                from start to finish. With a focus on responsive interfaces and
                efficient, scalable backend systems, I bring a complete,
                results-driven approach to every project.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={vue} alt="Image" />
                  <h5>Vue.js</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JS</h5>
                </div>
                <div className="item">
                  <img src={jquery} alt="Image" />
                  <h5>jQuery</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={lighthouse} alt="Image" />
                  <h5>Google Lighthouse</h5>
                </div>
                <div className="item">
                  <img src={uxdesign} alt="Image" />
                  <h5>UI / UX</h5>
                </div>
                <div className="item">
                  <img src={visualstudio} alt="Image" />
                  <h5>Visual Studio Code</h5>
                </div>
              </Carousel>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={node} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={django} alt="Image" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={github} alt="Image" />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <img src={jira} alt="Image" />
                  <h5>Jira</h5>
                </div>
                <div className="item">
                  <img src={api} alt="Image" />
                  <h5>API</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
