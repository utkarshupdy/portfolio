import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
// import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                Projects
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./query.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Query Hub</h3>
                            <p>
                            QueryHub: Ask, Answer, Explore.
                            </p>
                            <p className="tecnologias">
                                ReactJs
                                <span> -</span> NextJs
                                <span> -</span> Zustand
                                <span> -</span> TypeScript
                                <span> -</span> Shadcn UI
                                <span> -</span> Accernity UI
                                <span> -</span> Tailwind CSS
                                <span> -</span> Appwrite
                                <span> -</span> Node Appwrite SDK
                            </p>
                            <a href="https://query-hub-two.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/utkarshupdy/QueryHub" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./feedback.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Feedback Application</h3>
                            <p>
                            Give Feedback and Remain Anonymous
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> NextJs
                                <span> -</span> TypeScript
                                <span> -</span> Shadcn UI
                                <span> -</span> Tailwind CSS
                                <span> -</span> NodeJs
                                <span> -</span> MongoDB
                                <span> -</span> Gemini API
                            </p>
                            <a href="https://feedback-application-sable.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/utkarshupdy/Feedback-Application" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./music.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>SkillSphere</h3>
                            <p>
                            Empowering You with Software Mastery
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> NextJS
                                <span> -</span> TypeScript
                                <span> -</span> Tailwind CSS
                                <span> -</span> Accertinity UI
                                <span> -</span> Redux
                            </p>
                            <a href="https://skill-sphere-web.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/utkarshupdy/SkillSphere" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./coal.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>LoadShield</h3>
                            <p>
                                Real Time Load Balancing and Monitoring
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> ReactJS
                                <span> -</span> ChartJS
                                <span> -</span> Redux
                                <span> -</span> NodeJS
                                <span> -</span> ExpressJS
                                <span> -</span> MongoDB
                                <span> -</span> Socket.IO
                            </p>
                            <a href="https://coal-theft-detection-model-1.onrender.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/utkarshupdy/Coal_Theft_Detection_Model" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./park.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>ParkSmart</h3>
                            <p>
                            Revolutionizing Parking with Smart Tech
                            </p>
                            <p className="tecnologias">
                            ReactJS
                                <span> -</span> ChartJS
                                <span> -</span> Redux
                                <span> -</span> NodeJS
                                <span> -</span> ExpressJS
                                <span> -</span> MongoDB
                                <span> -</span> Google Map API
                                <span> -</span> YOLO
                                <span> -</span> Firebase
                            </p>
                            <a href="https://github.com/AdityaKumar-Git/ParkingManagement" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/AdityaKumar-Git/ParkingManagement" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./videotube.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>StreamFlare</h3>
                            <p>
                            Igniting Your Video Streaming Experience
                            </p>
                            <p className="tecnologias">
                                <span></span> JavaScript
                                <span> -</span> NodeJS
                                <span> -</span> ExpressJS
                                <span> -</span> MongoDB
                                <span> -</span> JWT
                                <span> -</span> Multer
                            </p>
                            <a href="https://github.com/utkarshupdy/Stream-Flare-VideoTube-Backend" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/utkarshupdy/Stream-Flare-VideoTube-Backend" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./blog.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>WriteSphere</h3>
                            <p>
                            Your World of Stories, Shared and Discovered
                            </p>
                            <p className="tecnologias">
                                
                                <span> </span> JavaScript
                                <span> -</span> ReactJS
                                <span> -</span> Redux
                                <span> -</span> Tailwind CSS
                                <span> -</span> Tinymce React
                                <span> -</span> Appwrite
                            </p>
                            <a href="https://github.com/utkarshupdy/Blog-Application" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/utkarshupdy/Blog-Application" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./currency.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>CurrencyXChange</h3>
                            <p>
                            Your Trusted Partner for Smart Currency Conversions
                            </p>
                            <p className="tecnologias">
                        
                                <span> -</span> JavaScript
                                <span> -</span> ReactJS
                                <span> -</span> Redux
                                <span> -</span> React Router DOM
                                <span> -</span> Currency API
                                <span> -</span> Tailwind CSS
                            </p>
                            <a href="https://currencyxchange-f31e.onrender.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/utkarshupdy/CurrencyXChange" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./todo.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Task-Sphere</h3>
                            <p>
                            Elevate Productivity, One Task at a Time
                            </p>
                            <p className="tecnologias">

                                <span> </span> JavaScript
                                <span> -</span> ReactJS
                                <span> -</span> Context API
                                <span> -</span> Redux
                                <span> -</span> Tailwind CSS
                            </p>
                            <a href="https://task-sphere-kappa.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/utkarshupdy/ReactJS/tree/main/10todocontext" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./github.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>RepoRadar</h3>
                            <p>
                            Your Gateway to GitHub Profiles and Repositories
                            </p>
                            <p className="tecnologias">

                                {/* <span> </span> CSS */}
                                <span> </span> HTML5
                                <span> -</span> Tailwind CSS
                                <span> -</span> JavaScript
                                <span> -</span> Github API
                            </p>
                            <a href="https://gut-hub-profile-finder.vercel.app/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/utkarshupdy/GutHub-Profile-Finder" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./gym.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>GymHub</h3>
                            <p>
                            Your Personalized Fitness Journey Starts Here
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> jQuery
                                <span> -</span> Google Map API
                            </p>
                            <a href="https://fit-track-pro-website.vercel.app/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/utkarshupdy/Fit-Track-Pro-Website" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./pass.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>PassForge</h3>
                            <p>
                            Your Password, Reinvented for Ultimate Security
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> ReactJS
                                <span> -</span> Tailwind CSS
                        
                            </p>
                            <a href="https://wonderful-puffpuff-4d107f.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/utkarshupdy/Random-Password-Generator" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./weather.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>WeatherPulse</h3>
                            <p>
                            Real-time weather updates at your fingertips, anytime, anywhere.
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> jQuery
                                <span> -</span> Weather API
                        
                            </p>
                            <a href="https://weather-app-zeta-three-80.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/utkarshupdy/Weather-App" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    
                    
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);