import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImg = require.context('../../img', true);

const Project = () => {
  const [estadoModal19, cambiarEstadoModal19] = useState(false);
  const [estadoModal18, cambiarEstadoModal18] = useState(false);
  const [estadoModal17, cambiarEstadoModal17] = useState(false);
  const [estadoModal14, cambiarEstadoModal14] = useState(false);
  const [estadoModal15, cambiarEstadoModal15] = useState(false);
  const [estadoModal16, cambiarEstadoModal16] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage
                id='site-web'
                defaultMessage='websites'
              />
            </NavLink>
            {/* <NavLink to="/project/app" offset={-150} duration={500}>
              Apps
            </NavLink>
            <NavLink to="/project/game" offset={-150} duration={500}>
              <FormattedMessage
                id='games'
                defaultMessage='games'
              />
            </NavLink> */}
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal19(!estadoModal19)}>
              <img src={proyectsImg(`./pixel.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal18(!estadoModal18)}>
              <img src={proyectsImg(`./query.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
              <img src={proyectsImg(`./feedback.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
              <img src={proyectsImg(`./music.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal15(!estadoModal15)}>
              <img src={proyectsImg(`./coal.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal16(!estadoModal16)}>
              <img src={proyectsImg(`./park.png`)} className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal13(!estadoModal13)}>
              <img src={proyectsImg(`./videotube.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal12(!estadoModal12)}>
              <img src={proyectsImg(`./blog.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal11(!estadoModal11)}>
              <img src={proyectsImg(`./currency.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal10(!estadoModal10)}>
              <img src={proyectsImg(`./todo.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal9(!estadoModal9)}>
              <img src={proyectsImg(`./github.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal8(!estadoModal8)}>
              <img src={proyectsImg(`./gym.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal7(!estadoModal7)}>
              <img src={proyectsImg(`./pass.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal6(!estadoModal6)}>
              <img src={proyectsImg(`./weather.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal5(!estadoModal5)}>
              <img src={proyectsImg(`./stop.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>
              <img src={proyectsImg(`./counter.png`)} alt="" className="projects__img" />
            </a>
          </div>
        </section>
      </main>

      <Modal
        estado={estadoModal19}
        cambiarEstado={cambiarEstadoModal19}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pixel.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>Build a MERN-powered platform handling thousands of transactions with secure Razorpay payments.</p>

<p>Features 99.9% uptime, real-time order tracking, and instant email notifications for a seamless user experience.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://pixel-mart-col.vercel.app/" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="ReactJS" className="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" alt="JavaScript" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8" />
</div>


              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        estado={estadoModal18}
        cambiarEstado={cambiarEstadoModal18}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./query.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>Built a Q&A platform for 100+ users with real-time interactions, boosting community engagement by 35%. Tech stack: Next.js, Node.js, Appwrite, Vercel.</p>

<p>Enhanced user experience and performance, reducing page load times by 25% and increasing active participation by 50%.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://query-hub-two.vercel.app/" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="ReactJS" class="w-8 h-8" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" alt="TypeScript" class="w-8 h-8" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" class="w-8 h-8" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/appwrite/appwrite-original.svg" alt="Appwrite" class="w-8 h-8" />

                </div>


              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        estado={estadoModal17}
        cambiarEstado={cambiarEstadoModal17}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./feedback.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>Created a feedback tool for 200+ users with Next.js, Gemini AI (85% accuracy), and MongoDB (10,000+ entries).</p>

<p>Improved admin efficiency by 40%, scalability, and user satisfaction by 30%. Tech stack: Next.js, TypeScript, MongoDB, Node.js, Gemini AI, Resend, Vercel.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://feedback-application-sable.vercel.app/" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="ReactJS" className="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" alt="JavaScript" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8" />
</div>


              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal14}
        cambiarEstado={cambiarEstadoModal14}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./music.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>Skill Sphere offers a diverse range of courses in areas like web development, data science, and digital marketing.</p>
<p>The platform emphasizes practical learning through interactive tools, quizzes, and real-world projects to enhance user skills.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://skill-sphere-web.vercel.app/" target="_blank">Click Here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="ReactJS" class="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" class="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" class="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-line.svg" alt="NextJS" class="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="ReactJS" class="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal15}
        cambiarEstado={cambiarEstadoModal15}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./coal.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>A real-time theft detection system with 92% accuracy, integrating sensors and deploying a dashboard with live readings, human tracking .</p>
<p>Enhanced security response by 85% through efficient authentication, secure data management, and streamlined operations.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://coal-theft-detection-model-1.onrender.com/" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="ReactJS" class="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-8 h-8" />
  {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" class="w-8 h-8" /> */}
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8" />
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal16}
        cambiarEstado={cambiarEstadoModal16}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./park.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>Built a Smart Car Parking System with user auth, role-based access, and real-time updates for enhanced security.</p>
<p>Achieved 95% detection accuracy using YOLO and integrated Google Maps API for seamless navigation and parking lot selection.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/AdityaKumar-Git/ParkingManagement" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="ReactJS" class="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-8 h-8" />
  {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" class="w-8 h-8" /> */}
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8" />
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal13}
        cambiarEstado={cambiarEstadoModal13}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./videotube.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>A backend for Stream-Flare VideoTube, focused on building robust server-side functionality for video streaming and user management.</p>
<p>Implemented real-time data handling, optimized video storage, and ensured secure user authentication for a seamless streaming experience.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/utkarshupdy/Stream-Flare-VideoTube-Backend" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="ReactJS" class="w-8 h-8" /> */}
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-8 h-8" />
  {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" class="w-8 h-8" /> */}
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8" />
  <img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" alt="MongoDB" className="w-8 h-8" />
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal12}
        cambiarEstado={cambiarEstadoModal12}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./blog.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>Created a blog app with secure user authentication and CRUD functionality for posts, supporting multiple user roles.</p>
<p>Built a responsive UI with React, integrating a Node.js backend for efficient content management and real-time updates.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/utkarshupdy/Blog-Application" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="ReactJS" class="w-8 h-8" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" class="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/appwrite/appwrite-original.svg" alt="Appwrite" />
  
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal11}
        cambiarEstado={cambiarEstadoModal11}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./currency.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>A real-time currency conversion app with live exchange rates for seamless transactions.</p>
<p>Implemented dynamic currency swapping and a responsive UI using React and Tailwind CSS.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://currencyxchange-f31e.onrender.com/" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" class="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" />
</div>

              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal10}
        cambiarEstado={cambiarEstadoModal10}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./todo.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>Built an advanced Todo app with task management features like adding, editing, and deleting tasks.</p>
<p>Data is stored in local storage, ensuring persistence even after refresh or shutdown.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://task-sphere-kappa.vercel.app/" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" class="w-8 h-8" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" />
</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal9}
        cambiarEstado={cambiarEstadoModal9}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./github.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>Fetches GitHub user details like name, repositories, followers, and more using the GitHub API.</p>
<p>Displays user information with a user-friendly interface and redirects to the user's GitHub profile.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://gut-hub-profile-finder.vercel.app/" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" class="w-8 h-8" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal8}
        cambiarEstado={cambiarEstadoModal8}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./gym.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>A responsive gym website featuring interactive elements and custom fonts to enhance user experience.</p>
<p>Includes a well-structured layout with HTML, CSS, and JavaScript for easy navigation and usage.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://fit-track-pro-website.vercel.app/" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg" alt="jQuery" />
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-map-icon.png" alt="Google Maps API" />
</div>

              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal7}
        cambiarEstado={cambiarEstadoModal7}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pass.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>Built a password generator app with customizable length and options for lowercase, uppercase, numbers, and special characters.</p>
{/* <p>Integrated clipboard copy functionality using React, Redux, and Tailwind CSS for a sleek user experience.</p> */}
<p>Utilized a secure password generation algorithm to ensure strong and unique passwords.</p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://wonderful-puffpuff-4d107f.netlify.app/" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
</div>

              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        estado={estadoModal6}
        cambiarEstado={cambiarEstadoModal6}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./weather.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>WeatherPulse provides real-time weather updates with accurate temperature, humidity, and forecasts. Get quick weather insights with live data.</p>
<p>Fetches data from a weather API to deliver reliable weather info and displays current date and time for users worldwide.</p>

              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://weather-app-zeta-three-80.vercel.app/" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-plain.svg" alt="jQuery" />
  <img src="https://www.svgrepo.com/show/502423/weather.svg" alt="Weather" />
</div>


              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        estado={estadoModal5}
        cambiarEstado={cambiarEstadoModal5}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./stop.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>Developed a manual stopwatch using HTML, CSS, and JavaScript, allowing users to start, stop, and reset the timer.</p>
<p>The app provides an intuitive interface for time tracking, with real-time updates and simple functionality.</p>


              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://manual-stop-watch.vercel.app/" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-plain.svg" alt="jQuery" />
</div>


              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        estado={estadoModal3}
        cambiarEstado={cambiarEstadoModal3}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./counter.png`)} alt="" /></div>
            <div className="eins-modal-text">
            <p>Created a reverse countdown timer using HTML, CSS, and JavaScript that helps track a deadline by asking for the target date, month, and year.</p>
<p>The timer updates in real-time, counting down to the specified deadline, aiding users in managing their time effectively.</p>


              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://counter-time-lac.vercel.app/" target="_blank">Click here</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-plain.svg" alt="jQuery" />
</div>


              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;