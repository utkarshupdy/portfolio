import React from 'react';
import '../../pages/About/AboutPage.css';
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';
import { FormattedMessage } from 'react-intl';
import image from './download.png'

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage id="about" defaultMessage="About me" />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage id="im" defaultMessage="who I am" />
                </h3>
                <h4>
                    <FormattedMessage
                        id="description"
                        defaultMessage="My name is Utkarsh Upadhyay and I am a full stack developer."
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id="my-description"
                        defaultMessage="I specialize in creating innovative software solutions and web applications. Constantly upgrading my skills, I enjoy solving real-world problems using cutting-edge technology."
                    />
                </p>
                <ul>
                    <li>
                        <p>
                        <span>Education: </span>
                             National Institute of Technology Raipur
                        </p>
                    </li>
                    <li>
                        <p>
                        <span>Email:</span> ukupadhyay6789@gmail.com
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>Contact:</span> +91-7309466387
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage id="from" defaultMessage="From:" />
                            </span>
                            Uttar Pradesh, India
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
                    </a>
                    <div className="mas-info-btn">
                        <Link to="/about">
                            <ButtomGet />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>Skills</h3>

                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="JavaScript" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="TypeScript" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                        <h5>TypeScript</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                    <div>
                        <img alt="Next.js" className="icons-skils" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
                        <h5>Next.js</h5>
                    </div>
                    <div>
                        <img alt="Vue.js" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                        <h5>Vue.js</h5>
                    </div>
                    <div>
                        <img alt="Tailwind CSS" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
                        <h5>Tailwind CSS</h5>
                    </div>
                </div>

                <h4>Back-End</h4>
                <div className="skill">
                <div>
                        <img alt="Node.js" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>Node.js</h5>
                    </div>
                    <div>
                        <img alt="Express.js" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        <h5>Express.js</h5>
                    </div>
                    <div>
                        <img alt="MongoDB" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongoDB</h5>
                    </div>
                    <div>
                        <img alt="MySQL" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>MySQL</h5>
                    </div>
                    <div>
                        <img alt="JWT" className="icons-skils" src= {image}/>
                        <h5>JWT</h5>
                    </div>
                    <div>
                        <img alt="WebSockets" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" />
                        <h5>WebSockets</h5>
                    </div>
                </div>

                <h4>Cloud/Databases</h4>
                <div className="skill">
                    <div>
                        <img alt="MySQL" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>MySQL</h5>
                    </div>
                    <div>
                        <img alt="MongoDB" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongoDB</h5>
                    </div>
                    <div>
                        <img alt="AWS" className="icons-skils" src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=Amazon-AWS&logoColor=white" />
                        <h5>AWS</h5>
                    </div>
                    <div>
                        <img alt="Azure" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
                        <h5>Azure</h5>
                    </div>
                </div>

                <h4>Operating Systems</h4>
                <div className="skill">
                    <div>
                        <img alt="Windows" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" />
                        <h5>Windows</h5>
                    </div>
                    <div>
                        <img alt="Linux" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                        <h5>Linux</h5>
                    </div>
                </div>

                <h4>Developer Tools</h4>
                <div className="skill">
                    <div>
                        <img alt="VS Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" />
                        <h5>VS Code</h5>
                    </div>
                    <div>
                        <img alt="Git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="GitHub" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        <h5>GitHub</h5>
                    </div>
                    <div>
                        <img alt="Postman" className="icons-skils" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
                        <h5>Postman</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);
