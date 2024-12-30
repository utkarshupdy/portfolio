import React from "react";
import "./AboutPage.css";

/* Components */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import cv from "../../cv/cv.pdf";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */
import image from "./utk.jpg";

const About = () => {
  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={image} alt="Utkarsh Upadhyay" className="sobre-mi-img" />

              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                download="cv.pdf"
                className="btn-codigo cv buttonDownload"
              >
                <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
              </a>
            </div>
            <div className="sobre-mi-info">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-lg text-gray-800">
                  Hi, I'm Utkarsh Upadhyay, a student at the National Institute
                  of Technology Raipur, pursuing a B.Tech in Electrical
                  Engineering. I am deeply passionate about web development and
                  programming. My journey began in 2022, where I started
                  creating websites using HTML and CSS, igniting my interest in
                  crafting user-friendly and visually appealing web
                  applications.
                </p>
                <p className="text-md text-gray-700 mt-4">
                  Over the years, I have honed my skills in full-stack
                  development, specializing in the MERN stack. I am proficient
                  in technologies like React, Next.js, and Node.js, and have a
                  keen interest in solving real-world problems through
                  innovative software solutions. My approach is always
                  self-driven, continually learning and evolving with emerging
                  technologies.
                </p>
                <p className="text-md text-gray-700 mt-4">
                  Beyond academics, I have worked on various collaborative
                  projects and hackathons, which have strengthened my teamwork
                  and problem-solving abilities. I thrive in environments that
                  challenge me and allow me to explore my potential to the
                  fullest.
                </p>
              </div>

              <div className="btn-info">
                <div
                  className="custom-btn btn-codigo"
                  id="btn-hide"
                  onClick={readMore}
                >
                  <span>Read more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container grid grid-cols-2 gap-6 md:grid-cols-4">
              {/* HTML */}
              <div className="skill-card flex flex-col items-center">
                <img
                  alt="HTML"
                  className="skills-img w-16 h-16"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                />
                <h2 className="skill-name mt-2 text-center">HTML</h2>
              </div>

              {/* CSS */}
              <div className="skill-card flex flex-col items-center">
                <img
                  alt="CSS"
                  className="skills-img w-16 h-16"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                />
                <h2 className="skill-name mt-2 text-center">CSS</h2>
              </div>

              {/* JavaScript */}
              <div className="skill-card flex flex-col items-center">
                <img
                  alt="JavaScript"
                  className="skills-img w-16 h-16"
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                />
                <h2 className="skill-name mt-2 text-center">JavaScript</h2>
              </div>
              <div className="skill-card flex flex-col items-center">
                <img
                  alt="TypeScript"
                  className="skills-img w-16 h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                />
                <h2 className="skill-name mt-2 text-center">TypeScript</h2>
              </div>

              {/* React */}
              <div className="skill-card flex flex-col items-center">
                <img
                  alt="React"
                  className="skills-img w-16 h-16"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                />
                <h2 className="skill-name mt-2 text-center">ReactJS</h2>
              </div>
              <div className="skill-card flex flex-col items-center">
                <img
                  alt="React"
                  className="skills-img w-16 h-16"
                  src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png"
                />
                <h2 className="skill-name mt-2 text-center">NextJS</h2>
              </div>

              {/* Node.js */}
              <div className="skill-card flex flex-col items-center">
                <img
                  alt="Node.js"
                  className="skills-img w-16 h-16"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                />
                <h2 className="skill-name mt-2 text-center">Node.js</h2>
              </div>

              {/* Express */}
              <div className="skill-card flex flex-col items-center">
                <img
                  alt="Express"
                  className="skills-img w-16 h-16"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                />
                <h2 className="skill-name mt-2 text-center">Express.js</h2>
              </div>

              {/* MongoDB */}
              <div className="skill-card flex flex-col items-center">
                <img
                  alt="MongoDB"
                  className="skills-img w-16 h-16"
                  src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg"
                />
                <h2 className="skill-name mt-2 text-center">MongoDB</h2>
              </div>
              <div className="skill-card flex flex-col items-center">
                <img
                  alt="MySQL"
                  className="skills-img w-16 h-16"
                  src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
                />
                <h2 className="skill-name mt-2 text-center">MySQL</h2>
              </div>

              {/* Git */}
              <div className="skill-card flex flex-col items-center">
                <img
                  alt="Git"
                  className="skills-img w-16 h-16"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                />
                <h2 className="skill-name mt-2 text-center">Git</h2>
              </div>
              <div className="skill-card flex flex-col items-center">
                <img
                  alt="PostMan"
                  className="skills-img w-16 h-16"
                  src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                />
                <h2 className="skill-name mt-2 text-center">PostMan</h2>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default About;
